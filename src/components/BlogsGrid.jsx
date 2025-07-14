"use client";
import { useState, useEffect, useMemo } from "react"; 
import { getAllBlogs } from "../services/api";
import Link from "next/link";
import Loader from "./Loader";

export default function BlogsGrid({ 
  maxBlogs, 
  layout = "default", 
  currentPage = 1,
  onTotalPagesUpdate
}) {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch blogs on component mount
  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const blogsResponse = await getAllBlogs();
      
      if (blogsResponse.result_info && blogsResponse.result_info.blogs) {
        setBlogs(blogsResponse.result_info.blogs);
      } else if (blogsResponse.result_info) {
        setBlogs(blogsResponse.result_info);
      }
      
      // Debug: Log the first blog to check meta fields
      if (blogsResponse.result_info && blogsResponse.result_info.length > 0) {
        console.log("First blog meta fields:", {
          meta_title: blogsResponse.result_info[0].meta_title,
          meta_description: blogsResponse.result_info[0].meta_description
        });
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setError("Failed to fetch blogs. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Transform backend data to frontend format
  const transformBlogData = (blog) => {
    // Helper function to construct image URL
    const getImageUrl = (imageData) => {
      if (!imageData || !imageData.path) return null;
      const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
      // Convert Windows path separators to URL format and ensure proper URL structure
      const cleanPath = imageData.path.replace(/\\/g, '/');
      return `${baseUrl}/${cleanPath}`;
    };

    return {
      id: blog._id,
      title: blog.title || '',
      slug: blog.slug || '',
      excerpt: blog.excerpt || '',
      content: blog.content || '',
      read_time: blog.read_time || 0,
      views: blog.views || 0,
      category: blog.category || '',
      tags: blog.tags || [],
      status: blog.status || '',
      meta_title: blog.meta_title || '',
      meta_description: blog.meta_description || '',
      featured_image: getImageUrl(blog.featured_image),
      word_document: blog.word_document,
      created_at: blog.created_at || blog.createdAt,
      updated_at: blog.updated_at || blog.updatedAt,
    };
  };

  // Transform all blogs and filter out drafts
  const transformedBlogs = useMemo(() => {
    return blogs
      .map(transformBlogData)
      .filter(blog => blog.status !== 'draft');
  }, [blogs]);

  // Calculate total pages
  const totalPages = useMemo(() => {
    if (!maxBlogs) return 1;
    return Math.ceil(transformedBlogs.length / maxBlogs);
  }, [transformedBlogs.length, maxBlogs]);

  // Update total pages in parent component
  useEffect(() => {
    if (onTotalPagesUpdate) {
      onTotalPagesUpdate(totalPages);
    }
  }, [totalPages, onTotalPagesUpdate]);

  // Apply pagination
  const displayBlogs = useMemo(() => {
    if (!maxBlogs) return transformedBlogs;
    
    const startIdx = (currentPage - 1) * maxBlogs;
    const endIdx = startIdx + maxBlogs;
    return transformedBlogs.slice(startIdx, endIdx);
  }, [transformedBlogs, maxBlogs, currentPage]);

  const gridCols = layout === "compact" ? "lg:grid-cols-3" : "lg:grid-cols-4";

  // Show SweetAlert loader during loading
  if (loading) {
    return <Loader  />;
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-center">
          <div className="text-lg text-red-600 mb-2">{error}</div>
          <button 
            onClick={fetchBlogs}
            className="btn-primary"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (!loading && (!blogs || blogs.length === 0)) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-center">
          <div className="text-lg text-gray-600 mb-2">No blogs available at the moment.</div>
          <button 
            onClick={fetchBlogs}
            className="btn-secondary"
          >
            Refresh
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ${gridCols} gap-6 `}>
      {displayBlogs && displayBlogs.length > 0 ? (
        displayBlogs.map((blog) => (
          <Link 
            key={blog.id}
            href={`/blogs/${blog.slug}`}
            className="block"
          >
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100 flex flex-col relative group cursor-pointer h-full">
              {/* Blog Image */}
              <div className="w-full h-48 mb-4 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center relative">
                {blog.featured_image ? (
                  <img
                    src={blog.featured_image}
                    alt={blog.title}
                    className="object-fill w-full h-full hover:scale-105 transition-transform duration-200"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-4xl text-gray-300">
                    {blog.title.charAt(0)}
                  </div>
                )}
              </div>
              
              {/* Blog Content */}
              <div className="flex-1 px-4 pb-4 flex flex-col justify-between">
                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1 hover:text-primarycolor transition-colors">
                  {blog.title}
                </h3>
                
                {/* Excerpt */}
                <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                  {blog.excerpt}
                </p>
                
                {/* Meta Description (if excerpt is empty) */}
                {!blog.excerpt && blog.meta_description && (
                  <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                    {blog.meta_description}
                  </p>
                )}
                
                {/* Category and Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {blog.category && (
                    <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                      {blog.category}
                    </span>
                  )}
                  {blog.tags && blog.tags.slice(0, 2).map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Read More Button */}
                <button className="w-full px-4 py-2 rounded-lg bg-purple-600 text-white border border-purple-600 hover:bg-white hover:text-purple-600 focus:ring-transparent font-medium text-sm transition-colors duration-200">
                  Read More
                </button>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <p className="col-span-full p-small text-secondary3">No blogs found.</p>
      )}
    </div>
  );
} 
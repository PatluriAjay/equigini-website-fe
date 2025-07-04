"use client";
import { useState, useEffect, useCallback } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Loader from "@/components/Loader";
import { getBlogBySlug } from "@/services/api";

export default function BlogDetailPage() {
  const params = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBlog = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      const blogResponse = await getBlogBySlug(params.slug);
      setBlog(blogResponse.result_info);
    } catch (error) {
      console.error("Error fetching blog:", error);
      setError("Failed to fetch blog. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [params.slug]);

  useEffect(() => {
    if (params.slug) {
      fetchBlog();
    }
  }, [params.slug, fetchBlog]);

  // Helper function to construct image URL
  const getImageUrl = (imageData) => {
    if (!imageData || !imageData.path) return null;
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
    const cleanPath = imageData.path.replace(/\\/g, '/');
    return `${baseUrl}/${cleanPath}`;
  };

  if (loading) {
    return <Loader text="Loading blog..." />;
  }

  if (error) {
    return (
      <div className="md:min-h-screen bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4 py-20">
          <div className="flex justify-center items-center h-64">
            <div className="text-center">
              <div className="text-lg text-red-600 mb-2">{error}</div>
              <Link href="/blogs" className="btn-primary">
                Back to Blogs
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="md:min-h-screen bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4 py-20">
          <div className="flex justify-center items-center h-64">
            <div className="text-center">
              <div className="text-lg text-gray-600 mb-2">Blog not found.</div>
              <Link href="/blogs" className="btn-primary">
                Back to Blogs
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="md:min-h-screen ">
      {/* Back Button */}
        {/* <div className="container mx-auto p-4">
        <Link 
          href="/blogs" 
          className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-6"
        >
          <svg className="w-4  mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blogs
        </Link>
      </div> */}

      <div className="">
        {/* Blog Header */}
        <div className="w-full bg-gradient-to-b from-purple-50 to-purple-100 py-20">
        <div className=" mx-auto px-4 text-center">
          <h2 className="banner-heading">  {blog.title}</h2>
        </div>
      </div>
        <div className="container mx-auto px-4 py-10">

          {/* Featured Image */}
          {blog.featured_image && (
            <div className="w-full h-80 mb-8 rounded-xl overflow-hidden bg-gray-100">
              <img
                src={getImageUrl(blog.featured_image)}
                alt={blog.title}
                className="object-fill w-full h-full"
              />
            </div>
          )}

          {/* Blog Content */}
          <div className="prose prose-lg max-w-none">
            {blog.content ? (
              <div 
                dangerouslySetInnerHTML={{ __html: blog.content }}
                className="text-gray-700 leading-relaxed [&>ol]:list-decimal [&>ol]:list-inside [&>ol]:space-y-2 [&>ol>li]:mb-2 [&>ul]:list-disc [&>ul]:list-inside [&>ul]:space-y-2 [&>ul>li]:mb-2 [&>p]:mb-4 [&>h1]:text-3xl [&>h1]:font-bold [&>h1]:mb-4 [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mb-3 [&>h3]:text-xl [&>h3]:font-bold [&>h3]:mb-2 [&>strong]:font-bold [&>em]:italic"
              />
            ) : (
              <div className="text-gray-600 text-center py-12">
                <p>Content not available</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

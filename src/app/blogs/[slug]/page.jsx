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
      
      // Debug: Log the blog meta fields
      if (blogResponse.result_info) {
        console.log("Blog meta fields:", {
          meta_title: blogResponse.result_info.meta_title,
          meta_description: blogResponse.result_info.meta_description
        });
      }
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

  // Update document title and meta tags when blog data changes
  useEffect(() => {
    if (blog) {
      // Update document title
      document.title = `${blog.meta_title || blog.title} | Equigini`;
      
      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', blog.meta_description || blog.excerpt || "Read our latest blog post");
      } else {
        // Create meta description if it doesn't exist
        const newMetaDescription = document.createElement('meta');
        newMetaDescription.name = 'description';
        newMetaDescription.content = blog.meta_description || blog.excerpt || "Read our latest blog post";
        document.head.appendChild(newMetaDescription);
      }

      // Update Open Graph tags
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute('content', blog.meta_title || blog.title);
      } else {
        const newOgTitle = document.createElement('meta');
        newOgTitle.setAttribute('property', 'og:title');
        newOgTitle.setAttribute('content', blog.meta_title || blog.title);
        document.head.appendChild(newOgTitle);
      }

      const ogDescription = document.querySelector('meta[property="og:description"]');
      if (ogDescription) {
        ogDescription.setAttribute('content', blog.meta_description || blog.excerpt || "Read our latest blog post");
      } else {
        const newOgDescription = document.createElement('meta');
        newOgDescription.setAttribute('property', 'og:description');
        newOgDescription.setAttribute('content', blog.meta_description || blog.excerpt || "Read our latest blog post");
        document.head.appendChild(newOgDescription);
      }

      // Update Twitter Card tags
      const twitterTitle = document.querySelector('meta[name="twitter:title"]');
      if (twitterTitle) {
        twitterTitle.setAttribute('content', blog.meta_title || blog.title);
      } else {
        const newTwitterTitle = document.createElement('meta');
        newTwitterTitle.setAttribute('name', 'twitter:title');
        newTwitterTitle.setAttribute('content', blog.meta_title || blog.title);
        document.head.appendChild(newTwitterTitle);
      }

      const twitterDescription = document.querySelector('meta[name="twitter:description"]');
      if (twitterDescription) {
        twitterDescription.setAttribute('content', blog.meta_description || blog.excerpt || "Read our latest blog post");
      } else {
        const newTwitterDescription = document.createElement('meta');
        newTwitterDescription.setAttribute('name', 'twitter:description');
        newTwitterDescription.setAttribute('content', blog.meta_description || blog.excerpt || "Read our latest blog post");
        document.head.appendChild(newTwitterDescription);
      }

      // Update Open Graph image if available
      if (blog.featured_image) {
        const ogImage = document.querySelector('meta[property="og:image"]');
        const imageUrl = getImageUrl(blog.featured_image);
        if (ogImage) {
          ogImage.setAttribute('content', imageUrl);
        } else {
          const newOgImage = document.createElement('meta');
          newOgImage.setAttribute('property', 'og:image');
          newOgImage.setAttribute('content', imageUrl);
          document.head.appendChild(newOgImage);
        }

        const twitterImage = document.querySelector('meta[name="twitter:image"]');
        if (twitterImage) {
          twitterImage.setAttribute('content', imageUrl);
        } else {
          const newTwitterImage = document.createElement('meta');
          newTwitterImage.setAttribute('name', 'twitter:image');
          newTwitterImage.setAttribute('content', imageUrl);
          document.head.appendChild(newTwitterImage);
        }
      }
    }
  }, [blog]);

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
    <div className="md:min-h-screen">
        <div className="">
          {/* Blog Header */}
          <div className="w-full bg-gradient-to-b from-purple-50 to-purple-100 py-20">
          <div className="mx-auto px-4 text-center">
            <h2 className="banner-heading">{blog.title}</h2>
            {/* Meta information */}
            <div className="flex items-center justify-center text-sm text-gray-600 mt-4">
              <span>Published on {new Date(blog.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
              {/* {blog.read_time && (
                <>
                  <span className="mx-2">•</span>
                  <span>{blog.read_time} min read</span>
                </>
              )} */}
            </div>
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

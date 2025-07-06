"use client";
import { useState } from "react";
import BlogsGrid from "@/components/BlogsGrid";
import Head from "next/head";

function ChevronLeft({ disabled = false }) {
  return (
    <svg
      className={`w-5 h-5 ${disabled ? 'text-gray-400' : 'text-purple-600'}`}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  );
}

function ChevronRight({ disabled = false }) {
  return (
    <svg
      className={`w-5 h-5 ${disabled ? 'text-gray-400' : 'text-purple-600'}`}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}

const BLOGS_PER_PAGE = 6;

export default function BlogsPage() {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Handle total pages update from BlogsGrid
  const handleTotalPagesUpdate = (total) => {
    setTotalPages(total);
  };

  return (
    <>
      <Head>
        <title>Blogs | Equigini</title>
        <meta name="description" content="Read our latest insights and articles on investment opportunities and market trends." />
        <meta property="og:title" content="Blogs | Equigini" />
        <meta property="og:description" content="Read our latest insights and articles on investment opportunities and market trends." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Blogs | Equigini" />
        <meta name="twitter:description" content="Read our latest insights and articles on investment opportunities and market trends." />
      </Head>
      
      <div className="md:min-h-screen bg-gradient-to-b from-purple-50 to-white">
        {/* Banner */}
        <div className="w-full bg-gradient-to-b from-purple-50 to-purple-100 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="banner-heading">Blogs</h1>
            <p className="banner-subheading">
              Stay updated with the latest insights, trends, and analysis in the investment world.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-10 md:py-20">
          {/* BlogsGrid Component */}
          <BlogsGrid 
            layout="default"
            maxBlogs={BLOGS_PER_PAGE}
            currentPage={page}
            onTotalPagesUpdate={handleTotalPagesUpdate}
          />

          {/* Pagination Controls */}
          {totalPages > 0 && (
            <div className="flex justify-center mt-10 gap-2 flex-wrap items-center">
              {/* Chevron Left */}
              {totalPages > 2 && <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className={`px-3 py-2 rounded-full font-semibold border transition-colors flex items-center justify-center ${page === 1 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-white text-purple-600 border-purple-600 hover:bg-purple-50'}`}
                aria-label="Previous Page"
              >
                <ChevronLeft disabled={page === 1} />
              </button>}
              {/* Page Numbers with Dots */}
              {(() => {
                let start = Math.max(1, page - 2);
                let end = Math.min(totalPages, page + 1);
                if (end - start < 3) {
                  end = Math.min(totalPages, start + 3);
                  start = Math.max(1, end - 3);
                }
                const pages = [];
                // Left dots
                if (start > 1) {
                  pages.push(
                    <span key="dots-left" className="px-2 py-2 text-gray-400">...</span>
                  );
                }
                for (let i = start; i <= end; i++) {
                  pages.push(
                    <button
                      key={i}
                      onClick={() => setPage(i)}
                      className={`px-3 py-2 rounded-full font-semibold border transition-colors ${page === i ? 'bg-purple-600 text-white border-purple-600' : 'bg-white text-purple-600 border-purple-200 hover:bg-purple-50'}`}
                    >
                      {i}
                    </button>
                  );
                }
                // Right dots
                if (end < totalPages) {
                  pages.push(
                    <span key="dots-right" className="px-2 py-2 text-gray-400">...</span>
                  );
                }
                return pages;
              })()}
              {/* Chevron Right */}
              {totalPages > 2 && <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className={`px-3 py-2 rounded-full font-semibold border transition-colors flex items-center justify-center ${page === totalPages ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-white text-purple-600 border-purple-600 hover:bg-purple-50'}`}
                aria-label="Next Page"
              >
                <ChevronRight disabled={page === totalPages} />
              </button>}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
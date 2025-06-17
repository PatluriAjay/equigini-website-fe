"use client";
import { useState } from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";
import { deals } from "@/data/deals";
import { DealIconMap } from "@/data/dealIcons";
import styles from "@/styles/Select.module.css";
import Link from "next/link";

const filters = {
  sectors: ["Technology", "Healthcare", "Finance", "Real Estate", "Energy", "Manufacturing"],
  stages: ["Seed", "Series A", "Series B", "Series C", "Growth", "Pre-IPO"],
  geographies: ["India", "USA", "Europe", "Asia", "Middle East", "Global"],
  statuses: ["Open", "Coming Soon", "Closed"],
  ticketSizes: ["₹50L - ₹2Cr", "₹7.5Cr - ₹22.5Cr"]
};

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

const DEALS_PER_PAGE = 8;

export default function DealsPage() {
  const [page, setPage] = useState(1);
  const [selectedFilters, setSelectedFilters] = useState({
    sector: "",
    stage: "",
    geography: "",
    status: "",
    ticketSize: ""
  });

  // Filter deals based on selected filters
  const filteredDeals = deals.filter(deal => {
    return (!selectedFilters.sector || deal.sector === selectedFilters.sector) &&
           (!selectedFilters.stage || deal.stage === selectedFilters.stage) &&
           (!selectedFilters.geography || deal.geography === selectedFilters.geography) &&
           (!selectedFilters.status || deal.status === selectedFilters.status) &&
           (!selectedFilters.ticketSize || deal.range === selectedFilters.ticketSize);
  });

  const totalPages = Math.ceil(filteredDeals.length / DEALS_PER_PAGE);
  const startIdx = (page - 1) * DEALS_PER_PAGE;
  const endIdx = startIdx + DEALS_PER_PAGE;
  const dealsToShow = filteredDeals.slice(startIdx, endIdx);

  return (
    <div className="md:min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Banner */}
      <div className="w-full bg-gradient-to-b from-purple-50 to-purple-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="banner-heading">Deals</h1>
          <p className="banner-subheading">
            Discover exclusive investment opportunities curated for you.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-10 md:py-20">
        {/* Filters */}
        <div className="mb-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <div>
            <select
              value={selectedFilters.sector}
              onChange={(e) => setSelectedFilters(prev => ({ ...prev, sector: e.target.value }))}
              className={`w-full px-4 py-3 rounded-lg bg-white border-2 border-purple-600 text-gray-900 ${styles.customSelect}`}
            >
              <option value="">All Sectors</option>
              {filters.sectors.map(sector => (
                <option key={sector} value={sector}>{sector}</option>
              ))}
            </select>
          </div>
          <div>
            <select
              value={selectedFilters.stage}
              onChange={(e) => setSelectedFilters(prev => ({ ...prev, stage: e.target.value }))}
              className={`w-full px-4 py-3 rounded-lg bg-white border-2 border-purple-600 text-gray-900 ${styles.customSelect}`}
            >
              <option value="">All Stages</option>
              {filters.stages.map(stage => (
                <option key={stage} value={stage}>{stage}</option>
              ))}
            </select>
          </div>
          <div>
            <select
              value={selectedFilters.geography}
              onChange={(e) => setSelectedFilters(prev => ({ ...prev, geography: e.target.value }))}
              className={`w-full px-4 py-3 rounded-lg bg-white border-2 border-purple-600 text-gray-900 ${styles.customSelect}`}
            >
              <option value="">All Geographies</option>
              {filters.geographies.map(geography => (
                <option key={geography} value={geography}>{geography}</option>
              ))}
            </select>
          </div>
          <div>
            <select
              value={selectedFilters.status}
              onChange={(e) => setSelectedFilters(prev => ({ ...prev, status: e.target.value }))}
              className={`w-full px-4 py-3 rounded-lg bg-white border-2 border-purple-600 text-gray-900 ${styles.customSelect}`}
            >
              <option value="">All Statuses</option>
              {filters.statuses.map(status => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
          </div>
          <div>
            <select
              value={selectedFilters.ticketSize}
              onChange={(e) => setSelectedFilters(prev => ({ ...prev, ticketSize: e.target.value }))}
              className={`w-full px-4 py-3 rounded-lg bg-white border-2 border-purple-600 text-gray-900 ${styles.customSelect}`}
            >
              <option value="">All Ticket Sizes</option>
              {filters.ticketSizes.map(size => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {dealsToShow.map((deal) => (
            <div key={deal.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100  flex flex-col">
              {/* Deal Image */}
              <div className="w-full h-40 mb-4 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                <img 
                  src={deal.imageUrl} 
                  alt={deal.name} 
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-200" 
                />
              </div>
              {/* Icon, Title, Status Row */}
              <div className="flex items-center gap-3 mb-4 px-4">
                <div className="card-icon-div">
                  <svg className="card-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"> 
                    {DealIconMap[deal.sector]}
                  </svg>
                </div>
                <h3 className="card-heading flex-1">{deal.name}</h3>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  deal.status === 'Open' 
                    ? 'bg-green-50 text-green-700' 
                    : 'bg-red-50 text-red-700'
                }`}>
                  {deal.status || 'Open'}
                </span>
              </div>
              {/* Sector & Stage Grid */}
              <div className="grid grid-cols-2 gap-2 mb-4 px-4 justify-between">
                <div className="card-paragraph2 flex flex-col items-start">
                  <p className="text-sm font-medium text-gray-700">Sector:</p> <p className="text-sm">{deal.sector}</p>
                </div>
                <div className="card-paragraph2 flex flex-col items-start">
                  <p className="text-sm font-medium text-gray-700">Stage:</p> <p className="text-sm">{deal.stage}</p>
                </div>
              </div>
              {/* Ticket Size */}
              <div className="card-paragraph mb-6 px-4 gap-2">
                <p className="text-sm font-medium text-gray-700">Ticket Size:</p> <p className="text-sm">{deal.range}</p>
              </div>
              <Link href={`https://equigini-draft-v3.vercel.app/login`} target="_blank"  className="w-full px-4 pb-4">
                <Button
                  variant={"rounded"}
                  className="w-full"
                  // disabled={deal.status === "Closed"}
                >
                  Read More
                </Button>
              </Link>
            </div>
          ))}
        </div>
        {dealsToShow.length === 0 && <div className="p-3 bg-white">
          <h3 className="text-center text-gray-600 font-medium text-xl">No Deals Found</h3>
        </div>}
        {/* Pagination Controls */}
        {totalPages > 1 && (
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
  );
}
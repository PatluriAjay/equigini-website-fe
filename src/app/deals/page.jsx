"use client";
import { useState, useEffect } from "react";
import DealsGrid from "@/components/DealsGrid";
import styles from "@/styles/Select.module.css";
import { getAllSectors, getAllStages, getAllStatuses, getAllTicketSizes } from "@/services/api";

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
  const [selectedFilters, setSelectedFilters] = useState({
    sector: "",
    stage: "",
    status: "",
    ticketSize: ""
  });

  const [filterOptions, setFilterOptions] = useState({
    sectors: [],
    stages: [],
    statuses: [],
    ticketSizes: []
  });

  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Fetch filter options from APIs
  useEffect(() => {
    fetchFilterOptions();
  }, []);

  const fetchFilterOptions = async () => {
    try {
      setLoading(true);
      
      // Fetch all filter options in parallel
      const [sectorsResponse, stagesResponse, statusesResponse, ticketSizesResponse] = await Promise.all([
        getAllSectors(),
        getAllStages(),
        getAllStatuses(),
        getAllTicketSizes()
      ]);

      setFilterOptions({
        sectors: sectorsResponse.result_info || [],
        stages: stagesResponse.result_info || [],
        statuses: statusesResponse.result_info || [],
        ticketSizes: ticketSizesResponse.result_info || []
      });
    } catch (error) {
      console.error("Error fetching filter options:", error);
    } finally {
      setLoading(false);
    }
  };

  // Convert filters to dropdown options format for DealsGrid
  const dropdownOptions = {
    sectors: filterOptions.sectors.map(sector => ({ value: sector._id || sector.id, label: sector.name || sector.label })),
    stages: filterOptions.stages.map(stage => ({ value: stage._id || stage.id, label: stage.name || stage.label })),
    statuses: filterOptions.statuses.map(status => ({ value: status._id || status.id, label: status.name || status.label })),
    ticketSizes: filterOptions.ticketSizes.map(size => ({ 
      value: size._id || size.id, 
      label: `${size.ticket_min} - ${size.ticket_max}` 
    }))
  };

  // Reset page when filters change
  useEffect(() => {
    setPage(1);
  }, [selectedFilters]);

  // Handle total pages update from DealsGrid
  const handleTotalPagesUpdate = (total) => {
    setTotalPages(total);
  };

  if (loading) {
    return (
      <div className="md:min-h-screen bg-gradient-to-b from-purple-50 to-white">
        <div className="w-full bg-gradient-to-b from-purple-50 to-purple-100 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="banner-heading">Deals</h1>
            <p className="banner-subheading">
              Discover exclusive investment opportunities curated for you.
            </p>
          </div>
        </div>
        <div className="container mx-auto px-4 py-10 md:py-20">
          <div className="flex justify-center items-center h-64">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primarycolor mx-auto mb-4"></div>
              <div className="text-lg text-gray-600">Loading filters...</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
        <div className="mb-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <select
              value={selectedFilters.sector}
              onChange={(e) => setSelectedFilters(prev => ({ ...prev, sector: e.target.value }))}
              className={`w-full px-4 py-3 rounded-lg bg-white border-2 border-purple-600 text-gray-900 ${styles.customSelect}`}
            >
              <option value="">All Sectors</option>
              {filterOptions.sectors.map(sector => (
                <option key={sector._id || sector.id} value={sector._id || sector.id}>
                  {sector.name || sector.label}
                </option>
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
              {filterOptions.stages.map(stage => (
                <option key={stage._id || stage.id} value={stage._id || stage.id}>
                  {stage.name || stage.label}
                </option>
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
              {filterOptions.statuses.map(status => (
                <option key={status._id || status.id} value={status._id || status.id}>
                  {status.name || status.label}
                </option>
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
              {filterOptions.ticketSizes.map(size => (
                <option key={size._id || size.id} value={size._id || size.id}>
                  {size.ticket_min} - {size.ticket_max}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* DealsGrid Component */}
        <DealsGrid 
          layout="default"
          filters={selectedFilters}
          searchTerm=""
          dropdownOptions={dropdownOptions}
          maxDeals={DEALS_PER_PAGE}
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
  );
}
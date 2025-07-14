"use client";
import { useState, useEffect, useMemo } from "react"; 
import { DealIconMap } from "../data/dealIcons";
import { getActiveDeals } from "../services/api";
import Link from "next/link";
import SectionLoader from "./SectionLoader";

export default function DealsGrid({ 
  maxDeals, 
  layout = "default", 
  filters = {}, 
  searchTerm = "", 
  dropdownOptions = {
    sectors: [],
    stages: [],
    statuses: [],
    ticketSizes: [],
  },
  currentPage = 1,
  onTotalPagesUpdate
}) {
  const [deals, setDeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch deals on component mount
  useEffect(() => {
    fetchDeals();
  }, []);

  const fetchDeals = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const dealsResponse = await getActiveDeals();
      
      if (dealsResponse.result_info) {
        setDeals(dealsResponse.result_info);
      }
    } catch (error) {
      console.error("Error fetching deals:", error);
      setError("Failed to fetch deals. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Transform backend data to frontend format
  const transformDealData = (deal) => {
    // Helper function to construct image URL
    const getImageUrl = (imageData) => {
      if (!imageData || !imageData.path) return null;
      const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
      // Convert Windows path separators to URL format and ensure proper URL structure
      const cleanPath = imageData.path.replace(/\\/g, '/');
      return `${baseUrl}/${cleanPath}`;
    };

    return {
      id: deal._id,
      name: deal.deal_title || '',
      slug: deal.slug || '',
      sector: deal.sector || '',
      stage: deal.stage || '',
      geography: deal.geography || '',
      range: deal.ticket_size_range || '',
      description: deal.summary || deal.full_description || '',
      fullDescription: deal.full_description || deal.summary || '',
      status: deal.status || '',
      priority: deal.deal_priority || '',
      visibility: deal.visibility || '',
      imageUrl: getImageUrl(deal.image),
      dealIconUrl: getImageUrl(deal.deal_icon),
      createdAt: deal.createdAt,
      updatedAt: deal.updatedAt,
      irr: deal.expected_irr || "-", 
      // For filtering - use the actual string values since they're stored as strings
      sectorId: deal.sector,
      stageId: deal.stage,
      statusId: deal.status,
      ticketSizeId: deal.ticket_size_range,
    };
  };

  // Apply filters to deals
  const filteredDeals = useMemo(() => {
    let filtered = deals.map(transformDealData);
    
    // Log all deals before filtering for debugging
    console.log("All deals before visibility filter:", filtered.map(d => ({ name: d.name, visibility: d.visibility })));
    
    // Filter to show only public deals
    filtered = filtered.filter(deal => deal.visibility === "Public");
    console.log("After visibility filter (public only):", filtered.length);
    console.log("Public deals:", filtered.map(d => d.name));
    
    // Apply search filter
    if (searchTerm && searchTerm.trim() !== "") {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(deal => 
        deal.name.toLowerCase().includes(searchLower) ||
        deal.sector.toLowerCase().includes(searchLower) ||
        deal.stage.toLowerCase().includes(searchLower) ||
        deal.description.toLowerCase().includes(searchLower)
      );
      console.log("After search filter:", filtered.length);
    }
    
    // Apply sector filter - compare with the actual sector name
    if (filters.sector && filters.sector !== "" && dropdownOptions?.sectors) {
      // Find the sector label for the selected ID
      const selectedSectorOption = dropdownOptions.sectors.find(opt => opt.value === filters.sector);
      const sectorLabel = selectedSectorOption ? selectedSectorOption.label : filters.sector;
      
      filtered = filtered.filter(deal => deal.sector === sectorLabel);
    }
    
    // Apply stage filter - compare with the actual stage name
    if (filters.stage && filters.stage !== "" && dropdownOptions?.stages) {
      // Find the stage label for the selected ID
      const selectedStageOption = dropdownOptions.stages.find(opt => opt.value === filters.stage);
      const stageLabel = selectedStageOption ? selectedStageOption.label : filters.stage;
      
      filtered = filtered.filter(deal => deal.stage === stageLabel);
    }
    
    // Apply status filter - compare with the actual status name
    if (filters.status && filters.status !== "" && dropdownOptions?.statuses) {
      // Find the status label for the selected ID
      const selectedStatusOption = dropdownOptions.statuses.find(opt => opt.value === filters.status);
      const statusLabel = selectedStatusOption ? selectedStatusOption.label : filters.status;
      
      filtered = filtered.filter(deal => deal.status === statusLabel);
    }
    
    // Apply ticket size filter - compare with the actual ticket size name
    if (filters.ticketSize && filters.ticketSize !== "" && dropdownOptions?.ticketSizes) {
      // Find the ticket size label for the selected ID
      const selectedTicketSizeOption = dropdownOptions.ticketSizes.find(opt => opt.value === filters.ticketSize);
      const ticketSizeLabel = selectedTicketSizeOption ? selectedTicketSizeOption.label : filters.ticketSize;
      
      filtered = filtered.filter(deal => deal.range === ticketSizeLabel);
    }
    
    return filtered;
  }, [deals, filters, searchTerm, dropdownOptions]);

  // Calculate total pages
  const totalPages = useMemo(() => {
    if (!maxDeals) return 1;
    return Math.ceil(filteredDeals.length / maxDeals);
  }, [filteredDeals.length, maxDeals]);

  // Update total pages in parent component
  useEffect(() => {
    if (onTotalPagesUpdate) {
      onTotalPagesUpdate(totalPages);
    }
  }, [totalPages, onTotalPagesUpdate]);

  // Apply pagination
  const displayDeals = useMemo(() => {
    if (!maxDeals) return filteredDeals;
    
    const startIdx = (currentPage - 1) * maxDeals;
    const endIdx = startIdx + maxDeals;
    return filteredDeals.slice(startIdx, endIdx);
  }, [filteredDeals, maxDeals, currentPage]);

  const gridCols = layout === "compact" ? "lg:grid-cols-3" : "lg:grid-cols-4";

  // Show SweetAlert loader during loading
  if (loading) {
    return <SectionLoader text="" size="large" />;
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-center">
          <div className="text-lg text-red-600 mb-2">{error}</div>
          <button 
            onClick={fetchDeals}
            className="btn-primary"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (!loading && (!deals || deals.length === 0)) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-center">
          <div className="text-lg text-gray-600 mb-2">No deals available at the moment.</div>
          <button 
            onClick={fetchDeals}
            className="btn-secondary"
          >
            Refresh
          </button>
        </div>
      </div>
    );
  }

  // Check if filters are applied but no results found
  const hasActiveFilters = Object.values(filters).some(filter => filter && filter !== "");
  const hasSearchTerm = searchTerm && searchTerm.trim() !== "";
  if (!loading && deals.length > 0 && filteredDeals.length === 0 && (hasActiveFilters || hasSearchTerm)) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-center">
          <div className="text-lg text-gray-600 mb-2">
            {hasSearchTerm && hasActiveFilters 
              ? "No deals match your search and filter criteria." 
              : hasSearchTerm 
                ? "No deals match your search criteria." 
                : "No deals match your current filters."
            }
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ${gridCols} gap-6 `}>
      {displayDeals && displayDeals.length > 0 ? (
        displayDeals.map((deal) => (
          <Link 
            key={deal.id}
            href="http://localhost:9000/login"
            className="block"
            target="_blank"
          >
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100 flex flex-col relative group cursor-pointer h-full">
              {/* Deal Image */}
              <div className="w-full h-45 mb-4 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center relative">
                {deal.imageUrl ? (
                  <img
                    src={deal.imageUrl}
                    alt={deal.name}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-200"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-4xl text-gray-300">
                    {deal.name.charAt(0)}
                  </div>
                )}
              </div>
              
              {/* Icon, Title, Status Row */}
              <div className="flex items-center gap-3 mb-2 px-4">
                <div className="card-icon-div ">
                  {/* First try to use custom deal icon from backend, then fallback to sector-based icon */}
                  {deal.dealIconUrl ? (
                    <img 
                      src={deal.dealIconUrl} 
                      alt={`${deal.sector} icon`}
                      className="w-6 h-6 object-contain"
                    />
                  ) : (
                    DealIconMap[deal.sector] || DealIconMap[deal.icon] || (
                      <div className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">
                        {deal.sector ? deal.sector.charAt(0) : 'D'}
                      </div>
                    )
                  )}
                </div>
                <h3 className="card-heading text-secondary-override line-clamp-2 flex-1">
                  {deal.name}
                </h3>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    deal.status?.toLowerCase() === "open"
                      ? "bg-green-50 text-green-700"
                      : deal.status?.toLowerCase() === "closed"
                      ? "bg-red-50 text-red-700"
                      : "bg-gray-50 text-gray-700"
                  }`}
                >
                  {deal.status || "Open"}
                </span>
              </div>
              
              {/* Sector & Stage Grid */}
              <div className="grid grid-cols-2 gap-2 mb-2 px-4 justify-between">
                <div className="card-paragraph2 flex flex-col items-start">
                  <p className="text-sm font-medium text-primarycolor">Sector:</p>
                  <p className="text-sm">{deal.sector}</p>
                </div>
                <div className="card-paragraph2 flex flex-col items-start">
                  <p className="text-sm font-medium text-primarycolor">Stage:</p>
                  <p className="text-sm">{deal.stage}</p>
                </div>
              </div>
              
              {/* Description Paragraph */}
              <div className="px-4 mb-2">
                <p className="text-sm text-gray-700 line-clamp-2">
                  {deal.description}
                </p>
              </div>
              
              {/* Ticket Size & IRR */}
              <div className="grid grid-cols-2 gap-2 mb-2 px-4 justify-between">
                <div className="card-paragraph2 flex flex-col items-start">
                  <p className="text-sm font-medium text-primarycolor">Ticket Size:</p>
                  <p className="text-sm">{deal.range}</p>
                </div>
                <div className="card-paragraph2 flex flex-col items-start">
                  <p className="text-sm font-medium text-primarycolor">Expected IRR:</p>
                  <p className="text-sm">{deal.irr}</p>
                </div>
              </div>
              
              {/* Read More Button */}
              <div className="w-full px-4 pb-4 mt-auto">
                <button className="px-6 py-1 md:py-2.5 text-sm md:text-xxl h-10 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center justify-center rounded-lg bg-purple-600 text-white border border-purple-600 hover:bg-white hover:text-purple-600 focus:ring-transparent w-full">
                  Know More
                </button>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <p className="col-span-full p-small text-secondary3">No deals found.</p>
      )}
    </div>
  );
} 
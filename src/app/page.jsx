"use client";
import Button from "../components/Button";
import Card from "../components/Card";
import Footer from "../components/Footer";
import { deals } from "../data/deals";
import { blogs } from "../data/blogs";
import { investors } from "../data/investors";
import RotatingText from "../components/RotatingText";
import { DealIconMap } from "../data/dealIcons";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { getPublicHomeData } from "../services/api";


export default function Home() {
  const [publicData, setPublicData] = useState({ latest_blogs: [], latest_deals: [], testimonials: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPublicData = async () => {
      try {
        const data = await getPublicHomeData();
        setPublicData(data);
      } catch (error) {
        console.error('Error fetching public data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPublicData();
  }, []);

  return (<>
    <div className="bg-gradient-to-b from-purple-50 to-purple-100">
      {/* Hero Section */}
      <section className="md:min-h-screen flex flex-col items-center justify-center text-center px-4 py-20">
        <h1 className="banner-heading mb-4">
          Discover Curated Private<br />
          <RotatingText />
        </h1>
        <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          A secure, invite-only platform for discerning investors
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/deals">
            <Button variant="primary" className="text-lg px-8">Explore Deals</Button>
          </Link>
          <Link href="http://localhost:9000/register" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" className="text-lg px-8">Register Now</Button>
          </Link>
        </div>
      </section>
    </div>

    {/* What is EquiGini Section */}
    <div className="bg-white py-8 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-4 md:mb-8">What is EquiGini?</h2>
        <p className="text-sm md:text-lg text-gray-600 text-center max-w-4xl mx-auto mb-8 md:mb-16">
          An exclusive, invite-only platform that connects verified investors with premium private investment opportunities. 
          Our compliance-first approach ensures all deals are thoroughly vetted and NDA-protected.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 relative">
          {/* Connecting Arrows - Only visible on desktop */}
          <div className="hidden md:flex absolute left-[33%] right-[33%] top-12 items-center justify-between">
            {/* First Arrow */}
            <div className="flex-1 flex items-center">
              <div className="w-8 h-8 rounded-full border-2 border-purple-300 flex items-center justify-center">
                  <svg className="w-5 h-5 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
            </div>
          </div>
          <div className="hidden md:flex absolute left-[66%] right-[33%] top-12 items-center justify-between">
            {/* First Arrow */}
            <div className="flex-1 flex items-center">
              <div className="w-8 h-8 rounded-full border-2 border-purple-300 flex items-center justify-center">
                  <svg className="w-5 h-5 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
            </div>
          </div>
          
          {/* Discover */}
          <div className="flex flex-col items-center text-center group">
            <div className="relative mb-6">
              <div className="w-16 md:w-24 h-16 md:h-24 bg-purple-600 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 md:w-12 md:h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-3">Discover</h3>
            <p className="text-gray-600 mb-2">Browse curated opportunities</p>
            <p className="text-sm text-gray-500 max-w-xs">Explore vetted, high-quality investment opportunities across various sectors and stages.</p>
          </div>

          {/* Sign NDA */}
          <div className="flex flex-col items-center text-center group">
            <div className="relative mb-6">
              <div className="w-16 md:w-24 h-16 md:h-24 bg-purple-600 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 md:w-12 md:h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-3">Sign NDA</h3>
            <p className="text-gray-600 mb-2">Access detailed information</p>
            <p className="text-sm text-gray-500 max-w-xs">Sign confidentiality agreements to unlock comprehensive deal information and due diligence materials.</p>
          </div>

          {/* Invest */}
          <div className="flex flex-col items-center text-center group">
            <div className="relative mb-6">
              <div className="w-16 md:w-24 h-16 md:h-24 bg-purple-600 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 md:w-12 md:h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-3">Invest</h3>
            <p className="text-gray-600 mb-2">Express interest & invest</p>
            <p className="text-sm text-gray-500 max-w-xs">Connect with deal sponsors and complete your investment through our secure platform.</p>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-gray-100">
      {/* Featured Opportunities */}
      <section className="container mx-auto py-10 md:py-20  px-4">
        <div className="flex flex-row items-center justify-between mb-8 gap-4">
          <h2 className="text-2xl md:text-4xl font-bold">Featured Deals</h2>
          <Link href="/deals" className="text-purple-600 hover:text-purple-700 flex items-center gap-2 font-semibold group">
            View All
            <svg className="w-5 h-5 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col relative animate-pulse">
                <div className="w-full h-45 mb-4 rounded-lg bg-gray-200"></div>
                <div className="flex items-center gap-3 mb-2 px-4">
                  <div className="w-6 h-6 bg-gray-200 rounded"></div>
                  <div className="flex-1">
                    <div className="h-4 bg-gray-200 rounded mb-1"></div>
                    <div className="h-3 bg-gray-200 rounded w-16"></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 mb-2 px-4">
                  <div className="h-8 bg-gray-200 rounded"></div>
                  <div className="h-8 bg-gray-200 rounded"></div>
                </div>
                <div className="px-4 mb-2">
                  <div className="h-3 bg-gray-200 rounded mb-1"></div>
                  <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                </div>
                <div className="grid grid-cols-2 gap-2 mb-2 px-4">
                  <div className="h-8 bg-gray-200 rounded"></div>
                  <div className="h-8 bg-gray-200 rounded"></div>
                </div>
                <div className="w-full px-4 pb-4 mt-auto">
                  <div className="h-10 bg-gray-200 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {publicData.latest_deals.slice(0, 4).map((deal) => (
              <Link 
                key={deal._id}
                href="http://localhost:9000/login"
                className="block"
              >
                <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100 flex flex-col relative group cursor-pointer h-full">
                  {/* Deal Image */}
                  <div className="w-full h-45 mb-4 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center relative">
                    {deal.image ? (
                      <img
                        src={`http://localhost:4000/${deal.image.path.replace(/\\/g, '/')}`}
                        alt={deal.deal_title}
                        className="object-cover w-full h-full hover:scale-105 transition-transform duration-200"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-4xl text-gray-300">
                        {deal.deal_title.charAt(0)}
                      </div>
                    )}
                  </div>
                  
                  {/* Icon, Title, Status Row */}
                  <div className="flex items-center gap-3 mb-2 px-4">
                    <div className="card-icon-div">
                      {/* First try to use custom deal icon from backend, then fallback to sector-based icon */}
                      {deal.deal_icon ? (
                        <img 
                          src={`http://localhost:4000/${deal.deal_icon.path.replace(/\\/g, '/')}`}
                          alt={`${deal.sector} icon`}
                          className="w-6 h-6 object-contain"
                        />
                      ) : (
                        DealIconMap[deal.sector] || (
                          <div className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">
                            {deal.sector ? deal.sector.charAt(0) : 'D'}
                          </div>
                        )
                      )}
                    </div>
                    <h3 className="card-heading text-secondary-override line-clamp-2 flex-1">
                      {deal.deal_title}
                    </h3>
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-50 text-green-700">
                      Open
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
                      {deal.summary}
                    </p>
                  </div>
                  
                  {/* Ticket Size & IRR */}
                  <div className="grid grid-cols-2 gap-2 mb-2 px-4 justify-between">
                    <div className="card-paragraph2 flex flex-col items-start">
                      <p className="text-sm font-medium text-primarycolor">Ticket Size:</p>
                      <p className="text-sm">{deal.ticket_size_range}</p>
                    </div>
                    <div className="card-paragraph2 flex flex-col items-start">
                      <p className="text-sm font-medium text-primarycolor">Expected IRR:</p>
                      <p className="text-sm">{deal.expected_irr || "-"}</p>
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
            ))}
          </div>
        )}
      </section>
    </div>
    {/* How It Works Section */}
    <div className="bg-white   py-10 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-16">How It Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 relative">
          {/* Register & Verify */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-6">
              <div className="w-16 md:w-24 h-16 md:h-24 bg-purple-600 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 md:w-12 md:h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-3">Register & Verify</h3>
            <p className="text-sm text-gray-500 max-w-xs">Complete our verification process to access exclusive opportunities</p>
          </div>

          {/* Sign NDA */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-6">
              <div className="w-16 md:w-24 h-16 md:h-24 bg-purple-600 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 md:w-12 md:h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-3">Sign NDA</h3>
            <p className="text-sm text-gray-500 max-w-xs">Secure confidential access to detailed deal information</p>
          </div>

          {/* Discover & Invest */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-6">
              <div className="w-16 md:w-24 h-16 md:h-24 bg-purple-600 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 md:w-12 md:h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-3">Discover & Invest</h3>
            <p className="text-sm text-gray-500 max-w-xs">Explore opportunities and express your investment interest</p>
          </div>
        </div>

        <div className="mt-12">
          <Link href="http://localhost:9000/register" target="_blank" rel="noopener noreferrer">
          <Button variant="primary" className="text-lg px-8 mx-auto">Start Your Journey</Button>
          </Link>
        </div>
      </div>
    </div>

    <div className="bg-gray-100">
      {/* Latest Blogs */}
      <section className="container mx-auto py-12 px-4">
        <div className="flex flex-row items-center justify-between mb-8 gap-4">
          <h2 className="text-2xl md:text-4xl font-bold">Latest Blogs</h2>
          <Link href="/blogs" className="text-purple-600 hover:text-purple-700 flex items-center gap-2 font-semibold group">
            View All
            <svg className="w-5 h-5 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 animate-pulse">
                <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-3 bg-gray-200 rounded mb-4"></div>
                <div className="h-10 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {publicData.latest_blogs.slice(0, 4).map((blog, idx) => (
              <Card 
                key={blog._id} 
                title={blog.title} 
                description={blog.excerpt} 
                imageUrl={blog.featured_image && blog.featured_image.path ? `http://localhost:4000/${blog.featured_image.path.replace(/\\/g, '/')}` : '/next.svg'}
              >
                <Link href={`/blogs/${blog.slug}`} className="w-full">
                  <Button variant="primary" className="w-full mt-auto">Read More</Button>
                </Link>
              </Card>
            ))}
          </div>
        )}
      </section>
    </div>

    {/* What Our Investors Say Section */}
    <div className="bg-white py-10 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-16">What Our Investors Say</h2>
        {/* Carousel Implementation */}
        <InvestorCarousel testimonials={publicData.testimonials} loading={loading} />
      </div>
    </div>
  </>);

  // Carousel Component
// Carousel Component - Replace the existing InvestorCarousel function with this
function InvestorCarousel({ testimonials, loading }) {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const total = testimonials?.length || 0;

  // Touch state for swipe
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const itemsToShow = isMobile ? 1 : 2;
  const maxIndex = Math.max(0, total - itemsToShow);

  // Infinite navigation
  const prev = () => {
    if (current === 0) {
      setCurrent(maxIndex);
    } else {
      setCurrent((prev) => prev - 1);
    }
  };
  const next = () => {
    if (current >= maxIndex) {
      setCurrent(0);
    } else {
      setCurrent((prev) => prev + 1);
    }
  };

  // Touch handlers for swipe
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };
  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };
  const handleTouchEnd = () => {
    if (touchStartX !== null && touchEndX !== null) {
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 40) {
        if (diff > 0) {
          next(); // swipe left
        } else {
          prev(); // swipe right
        }
      }
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  const getVisibleTestimonials = () => {
    if (!testimonials || testimonials.length === 0) return [];
    // For infinite loop, wrap around
    let result = [];
    for (let i = 0; i < itemsToShow; i++) {
      result.push(testimonials[(current + i) % total]);
    }
    return result;
  };

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[...Array(2)].map((_, idx) => (
          <div key={idx} className="bg-gray-100 rounded-2xl p-6 md:p-8 animate-pulse">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-200 rounded-full"></div>
              <div className="flex-1">
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-3 bg-gray-200 rounded"></div>
              </div>
            </div>
            <div className="h-20 bg-gray-200 rounded"></div>
          </div>
        ))}
      </div>
    );
  }

  if (!testimonials || testimonials.length === 0) {
    return (
      <div className="text-center text-gray-500 py-8">
        <p>No testimonials available at the moment.</p>
      </div>
    );
  }

  return (
    <div className="relative mx-auto">
      <div className="flex items-center justify-center gap-4">
        {/* Left Arrow Button */}
        <button 
          onClick={prev} 
          aria-label="Previous" 
          className={`hidden md:inline bg-white border border-gray-300 rounded-full p-2 shadow transition-colors hover:bg-purple-100`}
        >
          <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Cards Container */}
        <div className="flex-1 overflow-hidden">
          <div className="transition-all duration-500">
            <div
              className={`grid gap-6 ${isMobile ? 'grid-cols-1' : 'grid-cols-2'}`}
              onTouchStart={isMobile ? handleTouchStart : undefined}
              onTouchMove={isMobile ? handleTouchMove : undefined}
              onTouchEnd={isMobile ? handleTouchEnd : undefined}
            >
              {getVisibleTestimonials().map((testimonial, idx) => (
                <div key={current + '-' + idx} className="bg-gray-100 rounded-2xl p-6 md:p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden flex-shrink-0">
                      <img 
                        src={testimonial.user_img ? `http://localhost:4000/${testimonial.user_img.replace(/\\/g, '/')}` : '/next.svg'} 
                        alt={testimonial.user_name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg md:text-xl font-semibold truncate">{testimonial.user_name}</h3>
                      <p className="text-gray-500 font-semibold text-sm md:text-base truncate">{testimonial.investor_type}</p>
                    </div>
                  </div>
                  <p className="text-black font-semibold italic text-sm md:text-base leading-relaxed">
                    &ldquo;{testimonial.message}&rdquo;
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Arrow Button */}
        <button 
          onClick={next} 
          aria-label="Next" 
          className={`hidden md:inline bg-white border border-gray-300 rounded-full p-2 shadow transition-colors hover:bg-purple-100`}
        >
          <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots Indicator */}
      {maxIndex > 0 && (
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: maxIndex + 1 }, (_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full transition-colors ${
                idx === current ? 'bg-purple-600' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
}

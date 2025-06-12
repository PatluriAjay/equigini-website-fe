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

export default function Home() {
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
          <Button variant="outline" className="text-lg px-8">Register Now</Button>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {deals.slice(0, 3).map((deal) => (
            <div key={deal.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100 p-6 flex flex-col">
              <div className="flex items-start mb-6 gap-3">
                <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    {DealIconMap[deal.sector]}
                  </svg>
                </div>
                <div>
                  <h3 className="card-heading deal-heading-lg-override">{deal.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    deal.status === 'Open' 
                      ? 'bg-green-50 text-green-700' 
                      : 'bg-red-50 text-red-700'
                  }`}>
                    {deal.status || 'Open'}
                  </span>
                </div>
              </div>
              <div className="space-y-3 mb-6 flex-grow">
                <div className="card-paragraph">
                  <span className="text-sm">Sector: {deal.sector}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="text-sm">Stage: {deal.stage}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="text-sm">Ticket Size: {deal.range}</span>
                </div>
              </div>
              <Button 
                variant={'primary'}
                className="w-full"
                disabled={deal.status === 'Closed'}
              >
                Know More
              </Button>
            </div>
          ))}
        </div>
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
          <Button variant="primary" className="text-lg px-8 mx-auto">Start Your Journey</Button>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {blogs.slice(0, 4).map((blog, idx) => (
            <Card key={blog.id} title={blog.title} description={blog.description} imageUrl={blog.imageUrl}>
              {idx == 0 && <Link href="/blogs/ai-investments" className="w-full">
                  <Button variant="primary" className="w-full mt-auto">Know More</Button>
                </Link>}
                {idx !== 0 && <Button variant="primary" className="mt-auto">Know More</Button>}
            </Card>
          ))}
        </div>
      </section>
    </div>

    {/* What Our Investors Say Section */}
    <div className="bg-white py-10 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-16">What Our Investors Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto">
          {investors.map((investor) => (
            <div key={investor.id} className="bg-gray-100 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image 
                    src={investor.image} 
                    alt={investor.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{investor.name}</h3>
                  <p className="text-gray-500 font-semibold">{investor.position}</p>
                </div>
              </div>
              <p className="text-black font-semibold italic">&ldquo;{investor.testimonial}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>);
}

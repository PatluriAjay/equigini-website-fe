"use client";
import Button from "../../components/Button";

export default function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-purple-50 to-purple-100">
        <div className="container mx-auto px-4 py-20">
          <div className=" mx-auto text-center">
            <h1 className="banner-heading">
              Get in Touch with <span className="text-purple-600">EquiGini</span>
            </h1>
            <p className="banner-subheading">
              Have questions about investment opportunities or need support? We&#39;re here to help you navigate private investments with confidence.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-white   py-10 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12  mx-auto">
            {/* Contact Information */}
            <div>
              <h2 className="section-heading text-start-override">Contact Information</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="card-heading deal-heading-lg-override mb-2">Office Address</h3>
                  <p className="card-paragraph">
                    123 Investment Avenue<br />
                    Financial District<br />
                    Mumbai, 400001
                  </p>
                </div>
                <div>
                  <h3 className="card-heading deal-heading-lg-override mb-2">Email Us</h3>
                  <a href="mailto:info@equigini.com" className="text-purple-600 hover:text-purple-700 text-sm">
                    info@equigini.com
                  </a>
                </div>
                <div>
                  <h3 className="card-heading deal-heading-lg-override mb-2">Call Us</h3>
                  <p className="card-paragraph">+91 (123) 456-7890</p>
                </div>
                <div>
                  <h3 className="card-heading deal-heading-lg-override mb-2">Business Hours</h3>
                  <p className="card-paragraph">
                    Monday - Friday: 9:00 AM - 6:00 PM IST<br />
                    Saturday - Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h2 className="section-heading text-start-override">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block card-subheading">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block card-subheading">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block card-subheading">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block card-subheading">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    required
                  ></textarea>
                </div>
                <Button
                  type="submit"
                  variant="primary"
                  className="w-full"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Map or Additional Information Section */}
      <div className="bg-gray-100 py-10 md:py-20">
        <div className="container mx-auto px-4">
          <div className=" mx-auto text-center">
            <h2 className="section-heading">Connect With Us</h2>
            <p className="section-paragraph">
              Whether you&#39;re an investor looking for opportunities or a business seeking funding,
              we&#39;re here to help you achieve your financial goals.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* For Investors */}
              <div className="bg-white p-6 rounded-xl">
                <h3 className="card-heading">For Investors</h3>
                <p className="card-paragraph">
                  Discover curated investment opportunities and grow your portfolio
                </p>
              </div>
              {/* For Businesses */}
              <div className="bg-white p-6 rounded-xl">
                <h3 className="card-heading">For Businesses</h3>
                <p className="card-paragraph">
                  Connect with verified investors and secure funding for growth
                </p>
              </div>
              {/* Support */}
              <div className="bg-white p-6 rounded-xl">
                <h3 className="card-heading">Support</h3>
                <p className="card-subheading">
                  Get help with your account or technical assistance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 
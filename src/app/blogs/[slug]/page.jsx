  "use client"  
import { notFound, useParams } from "next/navigation";
import { blogs } from "@/data/blogs";
import Image from "next/image";

const blogContent = [
  {
    author: {
      name: "Priya Sharma",
      role: "Investment Analyst",
      // avatar: "/team/madhu.jpg"
    },
    title: 'AI Investments: Trends and Deals',
    slug: 'ai-investments',
    publishDate: "2025-06-11",
    category: "Investment Insights",
    tags: ["Artificial Intelligence", "Technology", "Investment Trends", "Machine Learning"],
    readTime: "8 min read",
    content: [
      { type: "img", src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80", alt: "AI Technology Visualization", caption: "AI is transforming the way we approach investments and business decisions" },
      { type: "p", text: "As we navigate through 2025, artificial intelligence continues to reshape the investment landscape, presenting unprecedented opportunities for investors across the globe." },
      { type: "h2", text: "The Evolution of AI Investments" },
      { type: "p", text: "The AI industry has witnessed exponential growth over the past decade, with global investments reaching $500 billion in 2025. This surge is driven by breakthrough advancements in machine learning, natural language processing, and autonomous systems." },
      { type: "blockquote", text: "AI is not just changing how we invest; it's transforming what we invest in. The opportunities are boundless for those who understand the technology's potential." },
      { type: "h2", text: "Key Investment Sectors" },
      { type: "p", text: "Several sectors are leading the AI revolution, each presenting unique investment opportunities:" },
      { type: "list", items: [
        "Healthcare: AI-powered diagnostics and drug discovery",
        "Financial Services: Algorithmic trading and risk assessment",
        "Manufacturing: Smart factories and predictive maintenance",
        "Transportation: Autonomous vehicles and logistics optimization"
      ]},
      // { type: "img", src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80", alt: "AI in Healthcare", caption: "AI is revolutionizing healthcare diagnostics and treatment planning" },
      { type: "h2", text: "Investment Strategies" },
      { type: "p", text: "When considering AI investments, it's crucial to evaluate both direct and indirect exposure opportunities:" },
      { type: "list", items: [
        "Direct investments in AI-focused companies",
        "ETFs specializing in technology and AI",
        "Traditional companies implementing AI solutions",
        "Infrastructure supporting AI development"
      ]},
      { type: "conclusion", text: "As we look ahead, AI investments represent not just a trend, but a fundamental shift in how value is created and captured in the global economy. Understanding these dynamics is crucial for investors seeking to capitalize on this transformative technology." }
    ]
  // Add more blog content for other IDs as needed
}];

export default function BlogDetailPage() {
  const params = useParams();
  console.log(params);
  
  const {slug} = params || {slug: ''};
  console.log(slug);
  
  const blog = blogContent.filter((b) => b.slug === slug)[0];
  if (!blog) return notFound();

  const { author, publishDate, category, tags, readTime, content } = blog;
  const formattedDate = new Date(publishDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="md:min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Banner */}
      <div className="w-full bg-gradient-to-b from-purple-50 to-purple-100 py-16 mb-10">
        <div className="container mx-auto px-4">
          <h1 className="banner-heading text-center mb-0-override">{blog.title}</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 mb-10 md:mb-20">
        <div className="mx-auto">

          {/* Main Content */}
          <div className="rounded-2xl md:shadow-lg md:p-8 space-y-4">
            {content.map((block, idx) => {
            switch (block.type) {
              case "h2":
                return <h2 key={idx} className="blog-heading text-start-override">{block.text}</h2>;
              case "h3":
                return <h3 key={idx} className="text-xl font-semibold mt-6 mb-4 text-gray-900">{block.text}</h3>;
              case "p":
                return <p key={idx} className="blog-paragraph text-start-override">{block.text}</p>;
              case "blockquote":
                return (
                  <blockquote key={idx} className="border-l-4 border-purple-600 pl-4 my-6 italic text-gray-700">
                    {block.text}
                  </blockquote>
                );
              case "list":
                return (
                  <ul key={idx} className="list-disc list-inside space-y-2 section-container-paragraph">
                    {block.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                );
              case "img":
                return (
                  <figure key={idx} className="my-8">
                    <div className="relative h-[400px] w-full">
                      <Image
                        src={block.src}
                        alt={block.alt}
                        fill
                        className="rounded-xl object-cover"
                      />
                    </div>
                    {block.caption && (
                      <figcaption className="mt-2 text-center text-sm text-gray-600">
                        {block.caption}
                      </figcaption>
                    )}
                  </figure>
                );
              case "conclusion":
                return (
                  <div key={idx} className="mt-12 p-3 md:p-6 bg-purple-50 rounded-xl">
                    <h2 className="blog-heading text-start-override">Conclusion</h2>
                    <p className="blog-paragraph text-start-override mb-0-override">{block.text}</p>
                  </div>
                );
              default:
                return null;
            }
            })}
          </div>
        </div>
        <div className="mt-8 md:mt-10">
            <div className="flex items-center gap-4 mb-2">
                <h3 className="banner-subheading font-semibold" style={{margin: 0}}>{author.name}</h3>
                <span className="card-paragraph">{formattedDate}</span>
            </div>
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
      </div>
    </div>
  );
}

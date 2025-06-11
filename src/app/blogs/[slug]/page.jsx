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
    title: 'AI Investments: Trends and Opportunities',
    slug: 'ai-investments',
    publishDate: "2025-06-11",
    category: "Investment Insights",
    tags: ["Artificial Intelligence", "Technology", "Investment Trends", "Machine Learning"],
    readTime: "8 min read",
    content: [
      { type: "p", text: "As we navigate through 2025, artificial intelligence continues to reshape the investment landscape, presenting unprecedented opportunities for investors across the globe." },
      { type: "img", src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80", alt: "AI Technology Visualization", caption: "AI is transforming the way we approach investments and business decisions" },
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
      { type: "img", src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80", alt: "AI in Healthcare", caption: "AI is revolutionizing healthcare diagnostics and treatment planning" },
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
    <div className="md:min-h-screen bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-black">
      {/* Banner */}
      <div className="w-full bg-gradient-to-b from-purple-50 to-purple-100 dark:from-gray-800 dark:to-gray-900 py-16 mb-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl text-center font-extrabold text-gray-900 dark:text-white mb-6">{blog.title}</h1>
            
          <div className="mx-auto">
            <div className="flex items-center justify-center text-center gap-4 mb-6">
              {content.author && <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={author.avatar}
                  alt={author.name}
                  fill
                  className="object-cover"
                />
              </div>}
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">{author.name}</h3>
                {/* <p className="text-sm text-gray-600 dark:text-gray-400">{author.role}</p> */}
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <span>{formattedDate}</span>
              <span>•</span>
              <span>{readTime}</span>
              <span>•</span>
              <span className="text-purple-600 dark:text-purple-400">{category}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mb-20">
        <div className="mx-auto">
          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Main Content */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 space-y-8">
            {content.map((block, idx) => {
            switch (block.type) {
              case "h2":
                return <h2 key={idx} className="text-2xl font-semibold mt-12 mb-6 text-gray-900 dark:text-white">{block.text}</h2>;
              case "h3":
                return <h3 key={idx} className="text-xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">{block.text}</h3>;
              case "p":
                return <p key={idx} className="text-gray-700 dark:text-gray-300 leading-relaxed">{block.text}</p>;
              case "blockquote":
                return (
                  <blockquote key={idx} className="border-l-4 border-purple-600 pl-4 my-6 italic text-gray-700 dark:text-gray-300">
                    {block.text}
                  </blockquote>
                );
              case "list":
                return (
                  <ul key={idx} className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
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
                      <figcaption className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
                        {block.caption}
                      </figcaption>
                    )}
                  </figure>
                );
              case "conclusion":
                return (
                  <div key={idx} className="mt-12 p-6 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                    <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Conclusion</h2>
                    <p className="text-gray-700 dark:text-gray-300">{block.text}</p>
                  </div>
                );
              default:
                return null;
            }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

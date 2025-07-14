import { useState } from "react";
import { IoMdAdd, IoMdClose } from "react-icons/io";


const faqs = [
  {
    question: "What is EquiGini?",
    answer:
      "EquiGini is a digital investment banking platform for curated transactions. The platform also provides access to peers, insights to trending industry news, etc. And GUESS WHAT - ALL OF THIS AT YOUR FINGERTIPS. While social and professional networks connect people, we connect the deals & industry trends they are working on.",
  },
  {
    question: "Is EquiGini just another Finance Social Network?",
    answer:
      "Ideally no as EquiGini is a platform connects deals and capital, globally. We assimilate, organize, analyze, verify and introduce opportunities, using algorithms and a team of IB analysts. We ensure to bring suitable & curated opportunities to our investors.",
  },
  {
    question: "How do I request company info on EquiGini?",
    answer:
      "When you find a transaction to be of value, simply walk through the steps for Non-Disclosure Agreement and you should find detailed info including Information Memorandum, etc.",
  },
  {
    question: "How many deals can I expect to see?",
    answer:
      "We will continue sending lucrative opportunities for you indefinitely. You can mark the deals that delight you as “favourites” to quick look when you desire.",
  },
  {
    question: "What are the News & Blog features?",
    answer:
      "Information features include NEWS & BLOGS that will provide informative content relevant to the industry ecosystem, in the form of videos, blogs/articles, downloadable artefacts like reports and guidelines, etc.",
  },
  {
    question: "What is Discussion Board?",
    answer:
      "Discussion board is a place to share your relevant thoughts, articles or other content on the platform.",
  },
  {
    question: "How do I network with other members?",
    answer:
      "You can send a connection request to communicate with other active members, event attendees, and members that you aren’t already connected with. You’ll be notified if you receive a connection request, and you can decide to either accept or privately decline.",
  },
  {
    question: "What are the commercials/charges to use the platform?",
    answer:
      "Since these are curated and onboarded transactions by our Team, access to the platform is free.",
  },
  {
    question: "What’s the onboarding process?",
    answer:
      "Simply contact us on (+91) xxxxxxxxx or email us at onboard@equigini.com and we shall help you.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  // Responsive font sizes
  const questionClass =
    "text-sm md:text-base text-gray-600 font-semibold";
  const answerClass =
    "text-xs md:text-sm text-gray-500";

  return (
    <div className="container mx-auto px-0 px-4">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-16">
        FAQ
      </h2>
      <div className="flex flex-col gap-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={faq.question}
              className={`transition-all duration-200 bg-white rounded-2xl shadow-sm border border-gray-200 ${
                isOpen ? "pb-4" : ""
              }`}
            >
              <button
                className={`w-full flex items-center justify-between px-6 py-5 md:py-6 rounded-2xl focus:outline-none transition-colors duration-150 text-left group ${
                  isOpen
                    ? "bg-white"
                    : "hover:bg-purple-50"
                }`}
                onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${idx}`}
              >
                <span className={questionClass}>{faq.question}</span>
                <span className="ml-4 flex-shrink-0">
                  {isOpen ? (
                    // X (close) icon
                    <IoMdClose className=" text-purple-600" size={20} />
                  ) : (
                    // Plus icon
                    <IoMdAdd className=" text-purple-600" size={20} />
                  )}
                </span>
              </button>
              {isOpen && (
                <div
                  id={`faq-answer-${idx}`}
                  className={`px-6 pt-0 md:pt-0 ${answerClass}`}
                >
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
} 
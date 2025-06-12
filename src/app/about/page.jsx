import React from "react";
import ValuesCard from "@/components/ValuesCard";
import TeamCard from "@/components/TeamCard";

const team = [
  {
    name: "Kunal",
    role: "Founder & CEO",
    imageUrl: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?q=80&w=3024",
    bio: "Mahavir leads EquiGini with a vision to democratize investment opportunities.",
  },
  {
    name: "Apurv",
    role: "CTO",
    imageUrl: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=2960",
    bio: "Apurv drives our technology and product innovation.",
  },
  // Add more team members as needed
];

export default function AboutPage() {
  return (<>
    <div className="bg-gradient-to-b from-purple-50 to-white">
      {/* Banner */}
      <div className="w-full bg-gradient-to-b from-purple-50 to-purple-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="banner-heading">About <span className="text-primary">EquiGini</span></h1>
          <p className="banner-subheading">
            EquiGini is committed to connecting investors with premium opportunities across sectors. Our mission is to make investing accessible, transparent, and rewarding for everyone.
          </p>
          {/* <Button variant="primary" className="mt-6">Contact Us</Button> */}
        </div>
      </div>
    </div>
    <div className="bg-white py-10 md:py-20">
      <div className="container mx-auto px-4">
          {/* Our Values */}
          <section>
            <h2 className="section-heading">Our Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <ValuesCard title="Transparency" description="We believe in open and honest communication at every step." />
              <ValuesCard title="Accessibility" description="Investment opportunities for all, regardless of background." />
              <ValuesCard title="Innovation" description="Constantly evolving to provide the best platform and experience." />
            </div>
          </section>
      </div>
      </div>
      <div className="bg-gray-100 py-10 md:py-20">
          <div className="container mx-auto px-4">
          {/* Meet the Team */}
          <section>
            <h2 className="section-heading">Meet the Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {team.map((member) => (
                <TeamCard
                  key={member.name}
                  title={member.name}
                  description={member.bio}
                  imageUrl={member.imageUrl}
                >
                  <div className="mt-2 text-sm text-gray-500">{member.role}</div>
                </TeamCard>
              ))}
            </div>
          </section>
      </div>
    </div>
  </>);
}
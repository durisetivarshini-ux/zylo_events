import React from "react";

const teamMembers = [
  {
    name: "Vidhi",
    role: "Client Service Manager",
    description:
      "Introducing our event client service manager extraordinaire! A multitasking marvel with a knack for show flow and a memory that never fails. She's best at handling guests and clients, making every event a breeze!",
  },
  {
    name: "Gowtham",
    role: "Managing Director",
    description:
      "Founder with entrepreneurial spirit and passion for creating experiences for clients. Sorcerer when it comes to planning and executing events.",
  },
  {
    name: "Snehal",
    role: "Managing Director",
    description:
      "Co-Founder and Event Designer! NO one as creative as her. She experiments with innovations. Works closely with our vendor partners and to deliver events with absolute perfection.",
  },
  {
    name: "Naveen",
    role: "Logistics Manager",
    description:
      "Multi tasker and executes every job with utmost dedication. A person with big heart and helps people around him in anyway possible in all departments.",
  },
  {
    name: "Sadhana",
    role: "Event Stylist",
    description:
      "Organized and a person with eye for detail. An expert when it comes to executing event installations, and dealing with workforce from multiple departments.",
  },
  {
    name: "Prashant",
    role: "Event 3D Designer",    description:
      "An event 3D designer celebrated for his meticulous attention to detail and unwavering commitment to creativity and perfection. With a keen eye for aesthtics and a passion for precision, he crafts designs that captivate and inspire.",
  },
];

export default function TeamSection() {
  return (
    <section className="team-section">
      <div className="container">
        <div className="team-header">
          <span>OUR TEAM</span>
          <h2>Meet The Creative Minds</h2>
          <p>
            Our talented team combines creativity, strategy, logistics, and
            innovation to craft unforgettable corporate experiences.
          </p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div className="team-card" key={index}>
              <div className="team-image-placeholder">
                Add Image
              </div>

              <h3>{member.name}</h3>

              <h4>{member.role}</h4>


              <p className="description">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
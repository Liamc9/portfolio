// IMPORTS
import React from 'react';
import { AccordionCard } from 'liamc9npm';

// CREATE FUNCTION
export default function CV() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-md shadow-md">
        {/* Header */}
        <h1 className="text-3xl font-bold mb-6 text-center">Curriculum Vitae</h1>

        {/* Education Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <div className="space-y-4">
            <AccordionCard
              description="This program combines advanced mechanical engineering concepts with business strategies, providing a comprehensive understanding that bridges technical and commercial domains."
              gpa="3.68"
              grade="1:1"
              institution="University College Dublin"
              subtitle="Mechanical Engineering With Business"
              title="ME"
            />
            <AccordionCard
              description="This program combines advanced mechanical engineering concepts with business strategies, providing a comprehensive understanding that bridges technical and commercial domains."
              gpa="3.72"
              grade="1:1"
              institution="University College Dublin"
              subtitle="Mechanical Engineering With Business"
              title="BSc"
            />
            <AccordionCard
              description="Focused on AI development, covering machine learning, neural networks, and advanced algorithms. Completed a capstone project on reinforcement learning applied to robotics."
              gpa="4.0"
              grade="Summa Cum Laude"
              institution="Massachusetts Institute of Technology"
              subtitle="Artificial Intelligence"
              title="MSc"
            />
            <AccordionCard
              description="A two-year program focused on leadership, strategy, and innovation in the business world."
              gpa="3.9"
              grade="Distinction"
              institution="Harvard Business School"
              subtitle="Business Administration"
              title="MBA"
            />
          </div>
        </section>

        {/* Skills and Projects Section */}
        <section className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Skills */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Skills</h2>
              <div className="bg-white border rounded-md p-4 shadow-sm">
                <ul className="list-disc list-inside space-y-2">
                  <li>Programming Languages: Python, JavaScript, C++</li>
                  <li>Frameworks: React, Node.js, Django</li>
                  <li>Tools: Git, Docker, AWS</li>
                  <li>Machine Learning & Data Analysis</li>
                  <li>Project Management</li>
                </ul>
              </div>
            </div>

            {/* Projects */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Projects</h2>
              <div className="bg-white border rounded-md p-4 shadow-sm">
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong>Renewable Energy Solutions:</strong> Led a team project on sustainable energy solutions.
                  </li>
                  <li>
                    <strong>AI Robotics:</strong> Developed reinforcement learning algorithms for robotics applications.
                  </li>
                  <li>
                    <strong>Business Analytics Tool:</strong> Created a tool for analyzing market trends.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Positions of Responsibility and Other Section */}
        <section className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Positions of Responsibility */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Positions of Responsibility</h2>
              <div className="bg-white border rounded-md p-4 shadow-sm">
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong>Team Lead at XYZ Corp:</strong> Managed a team of engineers in developing software solutions.
                  </li>
                  <li>
                    <strong>President of Engineering Society:</strong> Organized events and workshops for engineering students.
                  </li>
                </ul>
              </div>
            </div>

            {/* Other */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Other</h2>
              <div className="bg-white border rounded-md p-4 shadow-sm">
                <p>
                  Fluent in Spanish and French. Avid traveler and photographer. Volunteer at local community centers teaching coding to youth.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

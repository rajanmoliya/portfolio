import { Code2, GraduationCap, CheckCircle2 } from "lucide-react";

const About = () => {
  const skills = [
    "Dynamic and skilled Full-Stack Developer with a strong foundation in JavaScript.",
    "Experienced in building robust web applications using frameworks like React, Express, and Next.js.",
    "Proficient in backend development with Node.js, as well as both NoSQL (MongoDB) and SQL (Postgres) databases.",
    "Adept at containerization with Docker and familiar with Monorepo architecture for efficient code management.",
    "Experienced in version control using GitHub and skilled in working in Linux environments.",
    "Passionate about creating scalable and efficient solutions to complex problems.",
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-8">
        <p className="text-center text-gray-600 text-lg">Get To Know More</p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mt-4 mb-12">
          About Me
        </h1>

        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="flex-grow w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {/* Experience Card */}
              <div className="bg-white rounded-2xl p-6 flex flex-col items-center transform transition-all duration-300 hover:-translate-y-1 border border-gray-700">
                <div className="rounded-full bg-blue-100 p-3 mb-4">
                  <Code2 className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Experience</h3>
                <p className="text-gray-600">1+ years Full-Stack Development</p>
                <span className="mt-4 px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-full">
                  Full Stack
                </span>
              </div>

              {/* Education Card */}
              <div className="bg-white rounded-2xl p-6 flex flex-col items-center transform transition-all duration-300 hover:-translate-y-1 border border-gray-700">
                <div className="rounded-full bg-purple-100 p-3 mb-4">
                  <GraduationCap className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Education</h3>
                <p className="text-gray-600">Bachelors Degree</p>
                <span className="mt-4 px-3 py-1 text-sm bg-purple-100 text-purple-600 rounded-full">
                  Computer Applications
                </span>
              </div>
            </div>

            {/* Skills Section */}
            <div className="rounded-xl p-6">
              <h3 className="text-xl font-bold mb-6 text-gray-800">
                Professional Profile
              </h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <CheckCircle2 className="w-5 h-5 mt-1 text-green-500 flex-shrink-0 group-hover:text-green-600 transition-colors" />
                    <p className="text-gray-700 group-hover:text-gray-900 transition-colors">
                      {skill}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

const About = () => {
  return (
    <section id="about" className="py-20 flex items-center justify-center">
      <div className="container mx-auto px-8">
        <p className="text-center text-gray-600 text-lg">Get To Know More</p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mt-4 mb-8">
          About Me
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* <div className="section__pic-container order-2 md:order-1">
            <img
              src="./assets/about-pic.png"
              alt="Profile picture"
              className="w-48 md:w-64 rounded-lg"
            />
          </div> */}
          <div className="about-details-container md:order-2 flex-grow mt-4">
            <div className="grid grid-cols-2 gap-8">
              <div className="details-container rounded-lg border border-gray-700 p-4 flex flex-col items-center">
                <img
                  src="./assets/experience.png"
                  alt="Experience icon"
                  className="icon w-8 h-8 mb-2"
                />
                <div className="text-center">
                  <h3 className="text-lg font-semibold">Experience</h3>
                  <p className="text-sm">1+ years Frontend Development</p>
                </div>
              </div>
              <div className="details-container rounded-lg border border-gray-700 p-4 flex flex-col items-center">
                <img
                  src="./assets/education.png"
                  alt="Education icon"
                  className="icon w-8 h-8 mb-2"
                />
                <div className="text-center">
                  <h3 className="text-lg font-semibold">Education</h3>
                  <p className="text-sm">BCA Bachelors Degree</p>
                </div>
              </div>
            </div>
            <div className="text-container mt-8 md:mt-0">
              <ul className="list-disc list-inside text-lg text-gray-700 mt-16 text-left space-y-4">
                <li>
                  Dynamic and skilled Full-Stack Developer with a strong
                  foundation in JavaScript.
                </li>
                <li>
                  Experienced in building robust web applications using
                  frameworks like React, Express, and Next.js.
                </li>
                <li>
                  Proficient in backend development with Node.js, as well as
                  both NoSQL (MongoDB) and SQL (Postgres) databases.
                </li>
                <li>
                  Adept at containerization with Docker and familiar with
                  Monorepo architecture for efficient code management.
                </li>
                <li>
                  Experienced in version control using GitHub and skilled in
                  working in Linux environments.
                </li>
                <li>
                  Passionate about creating scalable and efficient solutions to
                  complex problems.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

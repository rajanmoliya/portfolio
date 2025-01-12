const projects = [
  {
    title: "Online Code Editor",
    image: "assets/IDE.JPG",
    github: "https://github.com/rajanmoliya/code-editor",
    liveDemo: "https://ide.rajanmoliya.me",
  },
  {
    title: "SDJ EventHub",
    image: "assets/cems.png",
    github: "https://github.com/rajanmoliya/college-event-management",
    liveDemo: "https://cems.rajanmoliya.me",
  },
  {
    title: "Vnsgu Result Checker",
    image: "assets/vnsgu-result.png",
    github: "https://github.com/rajanmoliya",
    liveDemo: "https://vnsgu-result.vercel.app/",
  },
  {
    title: "Blog Website",
    image: "assets/medium-blog.png",
    github: "https://github.com/rajanmoliya/medium-blog-app",
    liveDemo: "https://blog.rajanmoliya.me",
  },

  {
    title: "Online Saree Shop",
    image: "assets/swastik-creation.png",
    github: "https://github.com/rajanmoliya",
    liveDemo: "https://swastik-creation.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className=" py-10  ">
      <div className="container mx-auto px-8">
        <div className="text-center mb-8">
          <p className="text-center text-gray-600 text-lg">Browse My Recent</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mt-4 mb-8">
            Projects
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  ">
          {projects.map((project, index) => (
            <div
              key={index}
              className="details-container p-4 rounded-lg border rounded-2xl border-gray-700 mt-4"
            >
              <div className="article-container mb-4">
                <img
                  src={project.image}
                  alt={`Project ${index + 1}`}
                  className="project-img w-full h-48 object-cover rounded-md hover:scale-105 transition-transform duration-200 ease-in-out hover:shadow-2xl"
                />
              </div>
              <h2 className="experience-sub-title project-title text-2xl font-semibold mb-4">
                {project.title}
              </h2>
              <div className="btn-container flex justify-between">
                <button
                  className="btn btn-color-2 project-btn bg-gray-800 text-white py-2 px-4 rounded hover:bg-black transform hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-2xl"
                  onClick={() => window.open(project.github, "_blank")}
                >
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn bg-green-700 text-white py-2 px-4 rounded hover:bg-green-800 transform hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-2xl"
                  onClick={() => window.open(project.liveDemo, "_blank")}
                >
                  Live Demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

const projects = [
  {
    title: "Project One",
    image: "assets/",
    github: "https://github.com/rajanmoliya",
    liveDemo: "https://github.com/rajanmoliya",
  },
  {
    title: "Medium Clone",
    image: "assets/project-1.png",
    github: "https://github.com/rajanmoliya/medium-blog-app",
    liveDemo: "https://blog.rajanmoliya.me",
  },

  {
    title: "Project Three",
    image: "assets/",
    github: "https://github.com/rajanmoliya",
    liveDemo: "https://github.com/rajanmoliya",
  },
];

const Projects = () => {
  return (
    <section id="projects" className=" py-20  ">
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
              className="details-container bg-gray-100 p-4 rounded-lg shadow-lg"
            >
              <div className="article-container mb-4">
                <img
                  src={project.image}
                  alt={`Project ${index + 1}`}
                  className="project-img w-full h-48 object-cover rounded-md"
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

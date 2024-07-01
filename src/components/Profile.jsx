const Profile = () => (
  <section
    id="profile"
    className="flex flex-col lg:flex-row items-center justify-center py-10 lg:py-20 lg:px-60 "
  >
    <div className="section__pic-container flex justify-center lg:w-1/2 mb-8 lg:mb-0 ">
      <img
        src="./assets/profile-pic.png"
        alt="Rajan Moliya profile picture"
        className="rounded-full w-60 h-60 lg:w-80 lg:h-80 object-cover"
      />
    </div>
    <div className="section__text text-center lg:text-center lg:w-1/2 lg:mr-8  ">
      <p className="section__text__p1 text-md text-gray-600 font-semibold">
        {"Hello, I'm"}
      </p>
      <h1 className="title text-3xl lg:text-5xl font-bold my-4">
        Rajan Moliya
      </h1>
      <p className="section__text__p2 text-xl lg:text-2xl text-gray-600 mb-6">
        Full-Stack Developer
      </p>
      <div className="btn-container flex justify-center lg:justify-center gap-4 mb-6">
        <button
          className="btn btn-color-2 border border-gray-700 px-6 py-3 rounded-full text-md  transition-all hover:bg-gray-700 hover:text-white transform hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-2xl"
          onClick={() => window.open("./assets/resume-example.pdf")}
        >
          Download CV
        </button>
        <button
          className="btn btn-color-1 bg-gray-800 text-white px-6 py-3 rounded-full text-md font-thin  transition-all hover:bg-black transform hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-2xl"
          onClick={() => (window.location.href = "./#contact")}
        >
          Contact Info
        </button>
      </div>
      <div
        id="socials-container"
        className="flex justify-center lg:justify-center gap-4"
      >
        <img
          src="./assets/linkedin.png"
          alt="My LinkedIn profile"
          className="icon w-8 h-8 cursor-pointer transform hover:scale-110 transition-transform duration-300 ease-in-out hover:shadow-2xl "
          onClick={() =>
            window.open("https://www.linkedin.com/in/rajanmoliya/", "_blank")
          }
        />
        <img
          src="./assets/github.png"
          alt="My Github profile"
          className="icon w-8 h-8 cursor-pointer transform hover:scale-110 transition-transform duration-300 ease-in-out hover:shadow-2xl"
          onClick={() =>
            window.open("https://github.com/rajanmoliya", "_blank")
          }
        />
      </div>
    </div>
  </section>
);

export default Profile;

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20  flex items-center justify-center"
    >
      <div className="container mx-auto px-8">
        <p className="section__text__p1 text-center text-gray-600 text-lg">
          Explore My
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mt-4 mb-8">
          Skills
        </h1>
        <div className="experience-details-container ">
          <div className="about-containers flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 ">
            <div className="details-container border rounded-2xl border-gray-700 p-8 w-full ">
              <h2 className="experience-sub-title text-center md:text-left text-xl lg:text-2xl font-semibold mb-4 text-gray-600">
                Web Development
              </h2>
              <div className="article-container grid grid-cols-2 md:grid-cols-3 gap-4  ">
                <article className="flex items-center gap-2 my-2">
                  <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    className="icon w-6 h-6 md:w-8 md:h-8"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">HTML/CSS</h3>
                    <p className="text-sm">Experienced</p>
                  </div>
                </article>

                <article className="flex items-center gap-2 my-2">
                  <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    className="icon w-6 h-6 md:w-8 md:h-8"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">JAVASCRIPT</h3>
                    <p className="text-sm">Experienced</p>
                  </div>
                </article>
                <article className="flex items-center gap-2 my-2">
                  <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    className="icon w-6 h-6 md:w-8 md:h-8"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">REACT</h3>
                    <p className="text-sm">Experienced</p>
                  </div>
                </article>
                <article className="flex items-center gap-2 my-2">
                  <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    className="icon w-6 h-6 md:w-8 md:h-8"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">NODE JS</h3>
                    <p className="text-sm">Intermediate</p>
                  </div>
                </article>
                <article className="flex items-center gap-2 my-2">
                  <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    className="icon w-6 h-6 md:w-8 md:h-8"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">NEXT JS</h3>
                    <p className="text-sm">Intermediate</p>
                  </div>
                </article>
                <article className="flex items-center gap-2 my-2">
                  <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    className="icon w-6 h-6 md:w-8 md:h-8"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">REST APIs</h3>
                    <p className="text-sm">Intermediate</p>
                  </div>
                </article>

                {/* Add other articles for different technologies */}
              </div>
            </div>
            <div className="details-container border rounded-2xl border-gray-700 p-8 w-full">
              <h2 className="experience-sub-title text-center md:text-left text-xl lg:text-2xl font-semibold mb-4 text-gray-600">
                Other Technologies
              </h2>
              <div className="article-container grid grid-cols-2 md:grid-cols-3 gap-4 ">
                <article className="flex items-center gap-2 my-2">
                  <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    className="icon w-6 h-6 md:w-8 md:h-8"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">DOCKER</h3>
                    <p className="text-sm">Intermediate</p>
                  </div>
                </article>
                <article className="flex items-center gap-2 my-2">
                  <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    className="icon w-6 h-6 md:w-8 md:h-8"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">MONOREPO</h3>
                    <p className="text-sm">Intermediate</p>
                  </div>
                </article>
                <article className="flex items-center gap-2 my-2">
                  <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    className="icon w-6 h-6 md:w-8 md:h-8"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">POSTGRESS</h3>
                    <p className="text-sm">Intermediate</p>
                  </div>
                </article>
                <article className="flex items-center gap-2 my-2">
                  <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    className="icon w-6 h-6 md:w-8 md:h-8"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">MONGO DB</h3>
                    <p className="text-sm">Intermediate</p>
                  </div>
                </article>
                {/* Add other articles for different technologies */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

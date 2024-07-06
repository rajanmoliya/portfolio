const Contact = () => {
  return (
    <section id="contact" className="py-10">
      <div className="text-center mb-8">
        <p className="text-center text-gray-600 text-lg">Get in Touch</p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mt-4 mb-8">
          Contact Me
        </h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        <div className="contact-info-container flex items-center gap-4 border-black border p-4 rounded-full">
          <img
            src="assets/email.png"
            alt="Email icon"
            className="icon contact-icon email-icon w-12 h-12 md:w-12 md:h-12 lg:w-12 lg:h-12"
          />
          <p>
            <a
              href="mailto:rajanmoliya2801@gmail.com"
              className="text-md md:text-xl lg:text-2x hover:border-b hover:text-slate-600"
            >
              rajanmoliya2801@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

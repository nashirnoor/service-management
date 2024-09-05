const Contact = () => {
  
  return (
    <div className="bg-gray-100">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-green-400 to-purple-500 py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl text-black font-extrabold">
              Get in Touch
          </h1>
          <p className="mt-2 text-lg text-white">We'd love to hear from you!</p>
        </div>
      </div>

      {/* Form Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className=" p-8">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
              Contact Us
            </h2>
            <form className="space-y-6">
              <div className="flex flex-col">
                <label
                  className="text-sm font-semibold text-gray-700 mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  type="text"
                  placeholder="Your Name"
                  id="name"
                />
              </div>
              <div className="flex flex-col">
                <label
                  className="text-sm font-semibold text-gray-700 mb-2"
                  htmlFor="email"
                >
                  Your Email
                </label>
                <input
                  className="border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  type="email"
                  placeholder="Your email address"
                  id="email"
                />
              </div>
              <div className="flex flex-col">
                <label
                  className="text-sm font-semibold text-gray-700 mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black resize-none h-32"
                  placeholder="Enter your message"
                  id="message"
                ></textarea>
              </div>
              <button className="w-full px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-ring-black transition-colors duration-200 ease-in-out">
                Submit
              </button>
            </form>
          </div>

          {/* Map Section */}
          <div className="relative overflow-hidden flex items-center justify-center p-6">
             <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7218.832349515398!2d51.43234498763451!3d25.22290396673116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45d16069f3c5c3%3A0xc35808f5067811ce!2sAl%20Naqsh%20Pools%20and%20Contracting%20WLL!5e0!3m2!1sen!2sus!4v1724048268954!5m2!1sen!2sus"
              width="100%"
              height="100%"
              loading="lazy"
              className="w-full h-[70%]"
              style={{ border: 0 }}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

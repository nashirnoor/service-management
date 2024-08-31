const Project = () => {
  return (
    <div className="bg-gray-100">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-green-400 to-purple-500 py-16 text-center text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Our Projects
          </h1>
          <p className="text-lg md:text-xl">
            We’d love to hear from you!
          </p>
        </div>
      </header>

      {/* Project Section */}
      <section className="container mx-auto px-4 py-16 my-7">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project Card 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=606,h=384,fit=crop/m7V8PnDoX2ur9GvK/img_1092-mv0laQ0V0BfavbLP.jpg"
              alt="Walters Coffee"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Walters Coffee</h2>
              <p className="text-lg text-gray-600">
                "Awaken Your Senses, Sip by Sip."
              </p>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=606,h=384,fit=crop/m7V8PnDoX2ur9GvK/img_1092-mv0laQ0V0BfavbLP.jpg"
              alt="Walters Coffee"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Walters Coffee</h2>
              <p className="text-lg text-gray-600">
                "Awaken Your Senses, Sip by Sip."
              </p>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=606,h=384,fit=crop/m7V8PnDoX2ur9GvK/img_1092-mv0laQ0V0BfavbLP.jpg"
              alt="Walters Coffee"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Walters Coffee</h2>
              <p className="text-lg text-gray-600">
                "Awaken Your Senses, Sip by Sip."
              </p>
            </div>
          </div>

          {/* Project Card 4 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=606,h=384,fit=crop/m7V8PnDoX2ur9GvK/img_1092-mv0laQ0V0BfavbLP.jpg"
              alt="Walters Coffee"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Walters Coffee</h2>
              <p className="text-lg text-gray-600">
                "Awaken Your Senses, Sip by Sip."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;

const About = () => {
  return (
    <div className="px-6 md:px-10 py-8 bg-gray-100">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
          Swimming Pools
        </h1>
        <p className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed">
          We started as a small interior design firm in downtown Michigan, aiming to help home buyers make do with the new space that they had acquired. It soon became obvious that it would make sense to help our clients see beyond the walls and floor plans and be there with them from the get-go. Currently, we offer house realtor, interior design, and architecture services in order to help our customers find their forever homes as seamlessly and painlessly as possible.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            International Business Partners
          </h2>
          <p className="text-lg text-gray-700">
            We are a group of three companies working together to provide international business solutions. With our expertise and global network, we help businesses connect and thrive in the global market.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1532547616536-557a0d4d29ad?auto=format&fit=crop&w=1224&h=544"
            alt="Business Partners"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="flex flex-col items-center text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Summerwind</h3>
        </div>
        <div className="flex flex-col items-center text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Astral Spain</h3>
        </div>
        <div className="flex flex-col items-center text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Swis Spain</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700">
            We're on a mission to change the way the housing market works. Rather than offering one service or another, we want to combine as many and make our clients' lives easy and carefree. Our goal is to match our clients with the perfect properties that fit their tastes, needs, and budgets.
          </p>
        </div>
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h2>
          <p className="text-lg text-gray-700">
            We want to live in a world where people can buy homes that match their needs rather than having to find a compromise and settle on the second-best option. That's why we take a lot of time and care in getting to know our clients from the moment they reach out to us and ask for our help.
          </p>
        </div>
      </div>

      <img
        src="https://images.unsplash.com/photo-1531591022136-eb8b0da1e6d0?auto=format&fit=crop&w=1224&h=544"
        alt="Team"
        className="w-full h-auto rounded-lg mb-12"
      />

      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Team</h2>
        <p className="text-lg text-gray-700 mx-auto max-w-4xl">
          Our strength lies in our individuality. Set up by Esther Bryce, the team strives to bring in the best talent in various fields, from architecture to interior design and sales.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-center text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-2">A. Kumar</h3>
          <p className="text-lg text-gray-600">Founder</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Lianne Wilson</h3>
          <p className="text-lg text-gray-600">Broker</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Jaden Smith</h3>
          <p className="text-lg text-gray-600">Architect</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Jessica Kim</h3>
          <p className="text-lg text-gray-600">Photographer</p>
        </div>
      </div>
    </div>
  );
};

export default About;

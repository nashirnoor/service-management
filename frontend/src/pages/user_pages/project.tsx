import { fetchProject } from "@/api/Route";
import { projectCardProps } from "@/components/user_components/common/service_card/type";
import { useEffect, useState } from "react";

const Project = () => {
  const [data, setData] = useState<projectCardProps[]>([]);

  const fetchData = async () => {
    const response: projectCardProps[] = await fetchProject() as projectCardProps[];
    console.log(response, "Fetched projects:");
    setData(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-green-400 to-purple-500 py-16 text-center text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">Our Projects</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            We take pride in our work. Here are some of our most recent projects.
          </p>
        </div>
      </header>

      {/* Project Section */}
      <section className="container mx-auto px-4 py-16 my-8">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {data.map((project, index) => (
      <div
        key={index}
        className="group bg-gray-50 rounded-xl overflow-hidden transition-all duration-300 hover:bg-white hover:shadow-lg cursor-pointer"
      >
        <div className="relative aspect-video">
          <img
            src={`http://localhost:8000${project.image}` || "/placeholder-image.jpg"}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
        </div>
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
            {project.title}
          </h2>
          <p className="text-gray-600 text-sm line-clamp-3 group-hover:text-gray-700 transition-colors duration-300">
            {project.description || "Description Not Available"}
          </p>
        </div>
        <div className="px-6 pb-4">
          <div className="w-full h-px bg-gray-200 group-hover:bg-indigo-500 transition-colors duration-300"></div>
        </div>
      </div>
    ))}
  </div>
</section>
      
    </div>
  );
};

export default Project;

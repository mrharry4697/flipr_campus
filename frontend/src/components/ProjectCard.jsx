function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
      <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{project.description}</p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition">
          Read More
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;

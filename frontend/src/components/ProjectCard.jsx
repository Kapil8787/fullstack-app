export default function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden">

      {/* Image */}
      <div className="w-full aspect-[4/3] bg-gray-100 overflow-hidden rounded-t-xl flex items-center justify-center">
        <img
          src={`https://flipr-backend-sm6h.onrender.com/uploads/${project.image}`}
          alt={project.name}
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="p-5 text-center">
        <h3 className="text-blue-600 font-semibold text-base mb-1">
          {project.name}
        </h3>

        <p className="text-sm text-gray-500 mb-4">
          {project.description}
        </p>

        <button className="bg-orange-500 text-white px-5 py-2 rounded-md text-sm hover:bg-orange-600 transition">
          READ MORE
        </button>
      </div>
    </div>
  );
}

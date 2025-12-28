import { useEffect, useState } from "react";
import AdminLayout from "../../components/admin/AdminLayout";
import API from "../../services/api";
import AddProjectModal from "../../components/admin/AddProjectModal";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const deleteProject = async (id) => {
    if (!window.confirm("Are you sure you want to delete this project?"))
      return;

    try {
      await API.delete(`/projects/${id}`);
      setProjects(projects.filter((p) => p._id !== id));
    } catch (err) {
      alert("Failed to delete project");
      console.error(err);
    }
  };

  useEffect(() => {
    (async () => {
      const res = await API.get("/projects");
      setProjects(res.data);
    })();
  }, []);

  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Projects</h1>
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          + Add Project
        </button>
      </div>

      <table className="w-full border">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">Title</th>
            <th className="border p-2">Description</th>
            <th className="border p-2">Image</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>

        <tbody>
          {projects.map((p) => (
            <tr key={p._id}>
              <td className="border p-2">{p.name}</td>
              <td className="border p-2">{p.description}</td>
              <td className="border p-2">
                <img
                  src={`https://flipr-backend-sm6h.onrender.com/uploads/${p.image}`}
                  alt={p.name}
                  className="h-16"
                />
              </td>
              <td className="border p-2">
                <button
                  className="text-red-600 hover:underline"
                  onClick={() => deleteProject(p._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
  <AddProjectModal
    onClose={() => setShowModal(false)}
    onSuccess={() => {
      API.get("/projects").then((res) => setProjects(res.data));
    }}
  />
)}

    </AdminLayout>
  );
}

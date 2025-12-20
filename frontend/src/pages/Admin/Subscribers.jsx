import { useEffect, useState } from "react";
import AdminLayout from "../../components/admin/AdminLayout";
import API from "../../services/api";

export default function Subscribers() {
  const [subs, setSubs] = useState([]);

  useEffect(() => {
    API.get("/subscribers").then((res) => setSubs(res.data));
  }, []);

  const deleteSub = async (id) => {
    if (!window.confirm("Delete subscriber?")) return;
    await API.delete(`/subscribers/${id}`);
    setSubs(subs.filter((s) => s._id !== id));
  };

  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold mb-6">Subscribers</h1>

      <table className="w-full border">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">Email</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>

        <tbody>
          {subs.map((s) => (
            <tr key={s._id}>
              <td className="border p-2">{s.email}</td>
              <td className="border p-2">
                <button
                  onClick={() => deleteSub(s._id)}
                  className="text-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </AdminLayout>
  );
}

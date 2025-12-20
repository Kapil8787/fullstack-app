import { useEffect, useState } from "react";
import AdminLayout from "../../components/admin/AdminLayout";
import API from "../../services/api";

export default function Contacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    API.get("/contact").then((res) => setContacts(res.data));
  }, []);

  const deleteContact = async (id) => {
  if (!window.confirm("Delete this contact?")) return;

  try {
    await API.delete(`/contact/${id}`);

    // ✅ Update UI immediately
    setContacts((prev) => prev.filter((c) => c._id !== id));
  } catch (err) {
    console.error("DELETE ERROR:", err.response?.data || err.message);
    alert("Failed to delete contact");
  }
};


  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold mb-6">Contact Submissions</h1>

      <table className="w-full border">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Mobile</th>
            <th className="border p-2">City</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>

        <tbody>
          {contacts.map((c) => (
            <tr key={c._id}>
              <td className="border p-2">{c.fullName}</td>
              <td className="border p-2">{c.email}</td>
              <td className="border p-2">{c.mobile}</td>
              <td className="border p-2">{c.city}</td>
              <td className="border p-2">
                <button
                  onClick={() => deleteContact(c._id)}
                  className="text-red-600 hover:underline"
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

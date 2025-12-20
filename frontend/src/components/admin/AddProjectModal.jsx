import { useState } from "react";
import API from "../../services/api";
import ImageCropper from "./ImageCropper";

export default function AddProjectModal({ onClose, onSuccess }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const [imagePreview, setImagePreview] = useState(null);   // preview URL
  const [croppedImage, setCroppedImage] = useState(null);   // cropped blob
  const [loading, setLoading] = useState(false);

  // Handle image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImagePreview(URL.createObjectURL(file));
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!croppedImage) {
      alert("Please crop the image before submitting");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("image", croppedImage); // 👈 CROPPED IMAGE ONLY

    try {
      setLoading(true);

      await API.post("/projects", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Project added successfully");
      onSuccess();
      onClose();
    } catch (err) {
      console.error("ADD PROJECT ERROR:", err.response?.data || err.message);
      alert("Failed to add project");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-lg relative">

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
        >
          ✕
        </button>

        <h2 className="text-xl font-bold mb-4 text-center">
          Add Project
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">

          <input
            type="text"
            placeholder="Project Name"
            className="w-full p-2 border rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <textarea
            placeholder="Project Description"
            className="w-full p-2 border rounded"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />

          {/* Image input */}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
          />

          {/* Image Cropper */}
          {imagePreview && (
            <div className="mt-4">
              <ImageCropper
                image={imagePreview}
                onCropComplete={(blob) => setCroppedImage(blob)}
              />
            </div>
          )}

          {/* Buttons */}
          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="border px-4 py-1 rounded"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 disabled:opacity-60"
            >
              {loading ? "Adding..." : "Add"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

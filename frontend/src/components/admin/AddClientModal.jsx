import { useState } from "react";
import API from "../../services/api";
import ImageCropper from "./ImageCropper";

export default function AddClientModal({ onClose, onSuccess }) {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [description, setDescription] = useState("");

  const [imagePreview, setImagePreview] = useState(null);   // preview image
  const [croppedImage, setCroppedImage] = useState(null);   // cropped blob
  const [loading, setLoading] = useState(false);

  // STEP 3: Handle image selection
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

    const data = new FormData();
    data.append("name", name);
    data.append("designation", designation);
    data.append("description", description);
    data.append("image", croppedImage);

    try {
      setLoading(true);
      await API.post("/clients", data);
      alert("Client added successfully");
      onSuccess();
      onClose();
    } catch (err) {
      console.error(err);
      alert("Failed to add client");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-lg relative">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
        >
          ✕
        </button>

        <h2 className="text-xl font-bold mb-4 text-center">
          Add Client
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">

          <input
            type="text"
            placeholder="Client Name"
            className="w-full p-2 border rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Designation (CEO, Designer, etc.)"
            className="w-full p-2 border rounded"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
            required
          />

          <textarea
            placeholder="Client Description"
            className="w-full p-2 border rounded"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />

          {/* Image Upload */}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
          />

          {/* STEP 3: Image Cropper */}
          {imagePreview && (
            <div className="mt-4">
              <ImageCropper
                image={imagePreview}
                onCropComplete={(blob) => setCroppedImage(blob)}
              />
            </div>
          )}

          {/* Actions */}
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

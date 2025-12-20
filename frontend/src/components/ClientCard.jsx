export default function ClientCard({ client }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
      {/* Client Image */}
        <div className="flex justify-center -mt-14 mb-4">
      <img
        src={`https://flipr-backend-sm6h.onrender.com/${client.image}`}
        alt={client.name}
       className="w-20 h-20 rounded-full object-cover border-4 border-white shadow"
      />
      </div>
   {/* Description */}
      <p className="text-sm text-gray-600 mb-4 leading-relaxed">
        {client.description}
      </p>

      {/* Name */}
      <h4 className="font-semibold text-gray-800">
        {client.name}
      </h4>

      {/* Designation */}
      <p className="text-xs text-gray-500">
        {client.designation}
      </p>
    </div>
  );
}

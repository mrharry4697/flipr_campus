function ClientCard({ client }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition">
      <img
        src={client.image}
        alt={client.name}
        className="w-24 h-24 rounded-full object-cover mb-4"
      />
      <h3 className="text-lg font-semibold">{client.name}</h3>
      <p className="text-sm text-gray-500 mb-2">{client.designation}</p>
      <p className="text-gray-600 text-sm">{client.description}</p>
    </div>
  );
}

export default ClientCard;

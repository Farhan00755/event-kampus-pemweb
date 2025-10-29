export default function CardEvent({ events, onDeleteEvent }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {events.map((event) => (
                <div key={event.idNumber} className="bg-white rounded-lg shadow-md overflow-hidden hover:translate-y-[-10px] hover:shadow-lg transition-all duration-300 mx-5 my-5 relative">
                    <button
                        onClick={() => onDeleteEvent(event.idNumber)}
                        className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm hover:bg-red-600 transition-colors"
                        title="Hapus Event"
                    >
                        ✕
                    </button>
                    <img src={event.image} alt={event.name} className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h3 className="text-xl font-bold mb-2">{event.name}</h3>
                        <p className="text-gray-600 mb-2">{event.day}, {event.date} at {event.time}</p>
                        <p className="text-gray-600 mb-2">📍 {event.location}</p>
                        <p className="text-gray-700">{event.description}</p>
                        <p className="text-gray-800 text-xl font-bold mt-3">status : {event.status}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
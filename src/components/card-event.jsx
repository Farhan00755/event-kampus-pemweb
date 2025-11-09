export default function CardEvent({ event, onDelete }) {
    const getStatusColor = (status) => {
        switch (status) {
            case 'upcoming':
                return 'bg-blue-500'
            case 'ongoing':
                return 'bg-green-500'
            case 'completed':
                return 'bg-gray-500'
            default:
                return 'bg-gray-500'
        }
    }

    const getStatusText = (status) => {
        switch (status) {
            case 'upcoming':
                return 'Akan Datang'
            case 'ongoing':
                return 'Sedang Berlangsung'
            case 'completed':
                return 'Selesai'
            default:
                return status
        }
    }

    return (
        <div className="group bg-linear-to-br from-white via-gray-50 to-gray-100 rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden hover:-translate-y-3 transition-all duration-500 mx-5 my-5 relative border border-gray-200">
            {onDelete && (
                <button
                    onClick={() => onDelete(event.idNumber)}
                    className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-lg z-10 transition-all duration-200 hover:scale-110"
                    title="Hapus Event"
                >
                    ✕
                </button>
            )}

            {/* Image Container */}
            <div className="relative overflow-hidden">
                <img
                    src={event.image}
                    alt={event.name}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Status Badge */}
                <div className={`absolute top-4 left-4 ${getStatusColor(event.status)} text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg`}>
                    {getStatusText(event.status)}
                </div>
            </div>

            {/* Content */}
            <div className="p-6 bg-blue-900">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-600 transition-colors duration-200 overflow-hidden text-ellipsis whitespace-nowrap">
                    {event.name}
                </h3>

                {/* Date & Time */}
                <div className="flex items-center text-white mb-3">
                    <div className="bg-blue-100 p-2 rounded-lg mr-3">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                    </div>
                    <div>
                        <p className="font-medium text-sm text-white">{event.day}, {event.date}</p>
                        <p className="text-xs text-white">Pukul {event.time}</p>
                    </div>
                </div>

                {/* Location */}
                <div className="flex items-center text-white mb-4">
                    <div className="bg-red-100 p-2 rounded-lg mr-3">
                        <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                    </div>
                    <p className="text-sm font-medium text-white">{event.location}</p>
                </div>

                {/* Description */}
                <p className="text-white text-sm leading-relaxed overflow-hidden" style={{display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical'}}>
                    {event.description}
                </p>

                {/* Decorative Element */}
                <div className="mt-4 flex justify-end">
                    <div className="w-12 h-1 bg-linear-to-r from-blue-400 to-purple-500 rounded-full"></div>
                </div>
            </div>
        </div>
    )
}
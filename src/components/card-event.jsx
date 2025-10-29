export default function CardEvent() {
    const cardEvent = [
        {
            idNumber : "1",
            name : "Event 1",
            day : "Monday",
            date : "2022-01-01",
            time : "10:00",
            location : "Location 1",
            description : "Description 1",
            image : "https://www.laroche.edu/uploadedImages/About/event_rental.jpg",
            status : "upcoming"
        },
        {
            idNumber : "2",
            name : "Event 2",
            day : "Tuesday",
            date : "2022-01-02",
            time : "11:00",
            location : "Location 2",
            description : "Description 2",
            image : "https://b1952583.smushcdn.com/1952583/wp-content/uploads/2015/11/venue-image_web.jpg?lossy=0&strip=1&webp=1",
            status : "upcoming"
        },
        {
            idNumber : "3",
            name : "Event 3",
            day : "Wednesday",
            date : "2022-01-03",
            time : "12:00",
            location : "Location 3",
            description : "Description 3",
            image : "https://cdn2.hubspot.net/hub/4887707/hubfs/mazevo%20event%20room%20layout.jpg?width=1474&name=mazevo%20event%20room%20layout.jpg",
            status : "upcoming"
        },
        {
            idNumber : "4",
            name : "Event 4",
            day : "Tuesday",
            date : "2022-01-04",
            time : "13:00",
            location : "Location 4",
            description : "Description 4",
            image : "https://i.pinimg.com/736x/c2/50/19/c2501941b21bde118799048232f03fe8.jpg",
            status : "upcoming"
        },
        {
            idNumber : "5",
            name : "Event 5",
            day : "Thursday",
            date : "2022-01-05",
            time : "14:00",
            location : "Location 5",
            description : "Description 5",
            image : "https://i.pinimg.com/736x/11/56/9c/11569c3e04b0feeca3bc0a73343abfdc.jpg",
            status : "upcoming"
        },
        {
            idNumber : "6",
            name : "Event 6",
            day : "Friday",
            date : "2022-01-06",
            time : "15:00",
            location : "Location 6",
            description : "Description 6",
            image : "https://i.pinimg.com/736x/60/12/17/601217917899b90a4c1ddce13e8f6a68.jpg",
            status : "upcoming"
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {cardEvent.map((event) => (
                <div key={event.idNumber} className="bg-white rounded-lg shadow-md overflow-hidden hover:translate-y-[-10px] hover:shadow-lg transition-all duration-300 mx-5 my-5">
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
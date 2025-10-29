import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/nav.jsx'
import Footer from './components/footer.jsx'
import CardEvent from './components/card-event.jsx'
import FormCardEvent from './components/form-card-event.jsx'

export default function App() {
  const [events, setEvents] = useState([
    {
      idNumber: "1",
      name: "Event 1",
      day: "Monday",
      date: "2022-01-01",
      time: "10:00",
      location: "Location 1",
      description: "Description 1",
      image: "https://www.laroche.edu/uploadedImages/About/event_rental.jpg",
      status: "upcoming"
    },
    {
      idNumber: "2",
      name: "Event 2",
      day: "Tuesday",
      date: "2022-01-02",
      time: "11:00",
      location: "Location 2",
      description: "Description 2",
      image: "https://b1952583.smushcdn.com/1952583/wp-content/uploads/2015/11/venue-image_web.jpg?lossy=0&strip=1&webp=1",
      status: "upcoming"
    },
    {
      idNumber: "3",
      name: "Event 3",
      day: "Wednesday",
      date: "2022-01-03",
      time: "12:00",
      location: "Location 3",
      description: "Description 3",
      image: "https://cdn2.hubspot.net/hub/4887707/hubfs/mazevo%20event%20room%20layout.jpg?width=1474&name=mazevo%20event%20room%20layout.jpg",
      status: "upcoming"
    },
    {
      idNumber: "4",
      name: "Event 4",
      day: "Tuesday",
      date: "2022-01-04",
      time: "13:00",
      location: "Location 4",
      description: "Description 4",
      image: "https://i.pinimg.com/736x/c2/50/19/c2501941b21bde118799048232f03fe8.jpg",
      status: "upcoming"
    },
    {
      idNumber: "5",
      name: "Event 5",
      day: "Thursday",
      date: "2022-01-05",
      time: "14:00",
      location: "Location 5",
      description: "Description 5",
      image: "https://i.pinimg.com/736x/11/56/9c/11569c3e04b0feeca3bc0a73343abfdc.jpg",
      status: "upcoming"
    },
    {
      idNumber: "6",
      name: "Event 6",
      day: "Friday",
      date: "2022-01-06",
      time: "15:00",
      location: "Location 6",
      description: "Description 6",
      image: "https://i.pinimg.com/736x/60/12/17/601217917899b90a4c1ddce13e8f6a68.jpg",
      status: "upcoming"
    }
  ])

  const [currentPage, setCurrentPage] = useState('events')

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1) || 'events'
      setCurrentPage(hash)
    }

    handleHashChange() // Set initial page
    window.addEventListener('hashchange', handleHashChange)

    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const addEvent = (newEvent) => {
    const idNumber = (events.length + 1).toString()
    setEvents([...events, { ...newEvent, idNumber }])
  }

  const deleteEvent = (idNumber) => {
    setEvents(events.filter(event => event.idNumber !== idNumber))
  }

  return (
    <>
      <nav className="sticky top-0 z-50">
        <Navbar />
      </nav>

      <div id="home" className="flex flex-col items-center text-center justify-center bg-[#F8F9FA] px-4 py-10 min-h-screen">
        <h1 className="text-5xl mb-5 text-[#343A40]">selamat datang di laman event kampus</h1>
        <h3 className="text-2xl text-[#343A40]">disini kalian bisa melihat event-event yang ada di kampus</h3>
      </div>

      <div id="events" className="bg-[#FFFFFF] my-10">
        <CardEvent events={events} onDeleteEvent={deleteEvent} />
      </div>

      {currentPage === 'add-event' && (
        <FormCardEvent onAddEvent={addEvent} />
      )}

      <div id="contact" className="min-h-screen flex flex-col items-center text-center justify-center bg-[#E9ECEF] px-4 py-10">
        <h2 className="text-4xl mb-5 text-[#343A40]">Hubungi Kami</h2>
        <p className="text-lg mb-3 text-[#343A40]">Jika Anda memiliki pertanyaan atau ingin mengetahui lebih lanjut tentang event kampus, jangan ragu untuk menghubungi kami!</p>
          {/* <p className="text-lg text-[#343A40]">Email: </p> */}
      </div>
      
      <footer>
        <Footer />
      </footer>
    </>
  )
}
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/nav';
import Footer from './components/footer';
import Home from './pages/Home';
import AddEvent from './pages/AddEvent';
import LogIn from './pages/login';

function App() {
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

  const handleAddEvent = (newEvent) => {
    const idNumber = (events.length + 1).toString()
    setEvents([...events, { ...newEvent, idNumber }])
  }

  const deleteEvent = (idNumber) => {
    setEvents(events.filter(event => event.idNumber !== idNumber))
  }

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-slate-900">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home events={events} onDeleteEvent={deleteEvent} />} />
            <Route 
              path="/add" 
              element={<AddEvent onAddEvent={handleAddEvent} />} 
            />
            <Route 
              path="/login" 
              element={<LogIn />} 
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
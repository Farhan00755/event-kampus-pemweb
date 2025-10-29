import { useState } from 'react'

export default function FormCardEvent({ onAddEvent }) {
  const [newEvent, setNewEvent] = useState({
    name: '',
    day: '',
    date: '',
    time: '',
    location: '',
    description: '',
    image: '',
    status: 'upcoming'
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setNewEvent({ ...newEvent, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (onAddEvent) {
      onAddEvent(newEvent)
      setNewEvent({
        name: '',
        day: '',
        date: '',
        time: '',
        location: '',
        description: '',
        image: '',
        status: 'upcoming'
      })
      // Navigate to events page after adding
      window.location.hash = 'events'
    }
  }

  return (
    <div id="add-event" className="bg-[#F0F0F0] py-10 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-[#343A40]">Tambah Event Baru</h2>
          <button
            onClick={() => window.location.hash = 'events'}
            className="bg-[#343A40] text-white px-4 py-2 rounded hover:bg-[#495057] transition-colors"
          >
            ← Kembali ke Events
          </button>
        </div>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Nama Event"
              value={newEvent.name}
              onChange={handleInputChange}
              className="border p-2 rounded"
              required
            />
            <select
              name="day"
              value={newEvent.day}
              onChange={handleInputChange}
              className="border p-2 rounded"
              required
            >
              <option value="">Pilih Hari</option>
              <option value="Monday">Senin</option>
              <option value="Tuesday">Selasa</option>
              <option value="Wednesday">Rabu</option>
              <option value="Thursday">Kamis</option>
              <option value="Friday">Jumat</option>
              <option value="Saturday">Sabtu</option>
              <option value="Sunday">Minggu</option>
            </select>
            <input
              type="date"
              name="date"
              value={newEvent.date}
              onChange={handleInputChange}
              className="border p-2 rounded"
              required
            />
            <input
              type="time"
              name="time"
              value={newEvent.time}
              onChange={handleInputChange}
              className="border p-2 rounded"
              required
            />
            <input
              type="text"
              name="location"
              placeholder="Lokasi"
              value={newEvent.location}
              onChange={handleInputChange}
              className="border p-2 rounded md:col-span-2"
              required
            />
            <input
              type="url"
              name="image"
              placeholder="URL Gambar"
              value={newEvent.image}
              onChange={handleInputChange}
              className="border p-2 rounded md:col-span-2"
              required
            />
            <textarea
              name="description"
              placeholder="Deskripsi"
              value={newEvent.description}
              onChange={handleInputChange}
              className="border p-2 rounded md:col-span-2"
              rows="3"
              required
            ></textarea>
            <select
              name="status"
              value={newEvent.status}
              onChange={handleInputChange}
              className="border p-2 rounded"
            >
              <option value="upcoming">Upcoming</option>
              <option value="ongoing">Ongoing</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          <button type="submit" className="mt-4 bg-[#343A40] text-white px-6 py-2 rounded hover:bg-[#495057]">
            Tambah Event
          </button>
        </form>
      </div>
    </div>
  )
}

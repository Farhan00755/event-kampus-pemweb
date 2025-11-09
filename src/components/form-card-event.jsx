import { useState } from 'react';

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

    // Auto-fill day when date is selected
    if (name === 'date' && value) {
      const date = new Date(value)
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
      const dayNames = {
        'Monday': 'Senin',
        'Tuesday': 'Selasa',
        'Wednesday': 'Rabu',
        'Thursday': 'Kamis',
        'Friday': 'Jumat',
        'Saturday': 'Sabtu',
        'Sunday': 'Minggu'
      }
      const englishDay = days[date.getDay()]
      const indonesianDay = dayNames[englishDay]
      setNewEvent(prev => ({ ...prev, day: indonesianDay }))
    }
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
    }
  }

  return (
    <div id="add-event" className="py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
            Tambah Event Baru
          </h2>
          <p className="text-gray-300">Isi detail event kampus Anda</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-slate-700/50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Nama Event */}
            <div className="md:col-span-2">
              <label htmlFor="name" className="block text-gray-200 font-medium mb-2">Nama Event</label>
              <input
                type="text"
                id="name"
                name="name"
                value={newEvent.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                placeholder="Contoh: Webinar Teknologi Terkini"
                required
              />
            </div>

            {/* Tanggal */}
            <div>
              <label htmlFor="date" className="block text-gray-200 font-medium mb-2">Tanggal</label>
              <input
                type="date"
                id="date"
                name="date"
                value={newEvent.date}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                required
              />
            </div>

            {/* Waktu */}
            <div>
              <label htmlFor="time" className="block text-gray-200 font-medium mb-2">Waktu</label>
              <input
                type="time"
                id="time"
                name="time"
                value={newEvent.time}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                required
              />
            </div>

            {/* Lokasi */}
            <div className="md:col-span-2">
              <label htmlFor="location" className="block text-gray-200 font-medium mb-2">Lokasi</label>
              <input
                type="text"
                id="location"
                name="location"
                value={newEvent.location}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                placeholder="Contoh: Gedung Serba Guna Kampus"
                required
              />
            </div>

            {/* Status */}
            <div className="md:col-span-2">
              <label htmlFor="status" className="block text-gray-200 font-medium mb-2">Status Event</label>
              <select
                id="status"
                name="status"
                value={newEvent.status}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              >
                <option value="upcoming" className="bg-slate-800">Akan Datang</option>
                <option value="ongoing" className="bg-slate-800">Sedang Berlangsung</option>
                <option value="completed" className="bg-slate-800">Selesai</option>
              </select>
            </div>

            {/* URL Gambar */}
            <div className="md:col-span-2">
              <label htmlFor="image" className="block text-gray-200 font-medium mb-2 items-center">
                <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                URL Gambar
              </label>
              <input
                type="url"
                id="image"
                name="image"
                placeholder="https://example.com/image.jpg"
                value={newEvent.image}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                required
              />
              <p className="mt-2 text-sm text-gray-400">Pastikan URL gambar valid dan dapat diakses</p>
            </div>

            {/* Deskripsi */}
            <div className="md:col-span-2">
              <label htmlFor="description" className="block text-gray-200 font-medium mb-2">Deskripsi Event</label>
              <textarea
                id="description"
                name="description"
                value={newEvent.description}
                onChange={handleInputChange}
                rows="4"
                className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                placeholder="Jelaskan detail acara, pembicara, dan manfaat mengikuti acara ini"
                required
              ></textarea>
            </div>
          </div>

          {/* Tombol Aksi */}
          <div className="flex justify-between items-center mt-8">
            <a 
              href="/" 
              className="px-6 py-2.5 text-gray-300 hover:text-white transition-colors duration-200 flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Kembali
            </a>
            <button
              type="submit"
              className="px-8 py-3 bg-linear-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-800 flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Tambah Event
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

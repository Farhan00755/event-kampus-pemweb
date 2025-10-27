import React, { useState } from 'react';

// Data awal (bisa juga array kosong [])
const dataAwal = [
    {
        idNumber : "1",
        name : "Event 1",
        date : "2022-01-01",
        location : "Location 1",
        image : "https://www.laroche.edu/uploadedImages/About/event_rental.jpg",
    },
    {
        idNumber : "2",
        name : "Event 2",
        date : "2022-01-02",
        location : "Location 2",
        image : "https://b1952583.smushcdn.com/1952583/wp-content/uploads/2015/11/venue-image_web.jpg?lossy=0&strip=1&webp=1",
    }
];

// Objek kosong untuk mereset form
const formAwal = {
    name: '',
    date: '',
    location: '',
    image: '',
    // Kita tidak perlu idNumber atau status di form, bisa di-generate
};


function EventManager() {
  // 1. State untuk menyimpan DAFTAR event
  const [eventList, setEventList] = useState(dataAwal);

  // 2. State untuk menyimpan data FORM yang sedang diisi
  const [newEvent, setNewEvent] = useState(formAwal);

  // 3. Fungsi untuk menangani perubahan di setiap input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEvent( (prevEvent) => ({
      ...prevEvent,
      [name]: value 
      // [name] adalah sintaks dinamis. 
      // Jika input 'name="name"', dia update 'name'. 
      // Jika 'name="date"', dia update 'date'.
    }));
  };

  // 4. Fungsi untuk menangani submit form
  const handleSubmit = (e) => {
    e.preventDefault(); // Mencegah reload halaman

    // Buat objek event baru yang lengkap
    const eventBaruUntukDitambahkan = {
      ...newEvent,
      idNumber: Date.now().toString(), // Generate ID unik sederhana
      status: "upcoming" // Hardcode status
    };

    // 5. Tambahkan event baru ke state eventList
    setEventList( (prevList) => [...prevList, eventBaruUntukDitambahkan] );

    // 6. Kosongkan form
    setNewEvent(formAwal);
  };


  return (
    <div>
      {/* BAGIAN FORM INPUT */}
      <h2>Tambah Event Baru</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nama Event: </label>
          <input 
            type="text" 
            name="name" 
            value={newEvent.name} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label>Tanggal: </label>
          <input 
            type="date" 
            name="date" 
            value={newEvent.date} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label>Lokasi: </label>
          <input 
            type="text" 
            name="location" 
            value={newEvent.location} 
            onChange={handleChange} 
          />
        </div>
        <div>
          <label>URL Gambar: </label>
          <input 
            type="text" 
            name="image" 
            value={newEvent.image} 
            onChange={handleChange} 
          />
        </div>
        <button type="submit">Tambah Event</button>
      </form>

      <hr />

      {/* BAGIAN DAFTAR EVENT (yang di-passing) */}
      <h2>Daftar Event</h2>
      <div className="event-container">
        {eventList.map((event) => (
          <div key={event.idNumber} className="event-card">
            <img src={event.image} alt={event.name} style={{width: '200px'}} />
            <h3>{event.name}</h3>
            <p>{event.date}</p>
            <p>{event.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventManager;
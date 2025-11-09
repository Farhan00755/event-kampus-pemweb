import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CardEvent from '../components/card-event';

export default function Home({ events, onDeleteEvent }) {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#events') {
      const element = document.getElementById('events');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (location.hash === '#contact') {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (location.hash === '#home') {
      const element = document.getElementById('home');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } 
    }
  }, [location]);

  return (
    <>
      <section id="home" className="justify-center items-center flex flex-col bg-gray-900 min-h-screen">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-6 mt-23">Selamat Datang di EventKampus</h1>
          <p className="text-xl text-gray-300 mb-8">Temukan dan ikuti berbagai event kampus menarik</p>
          <a href="#events" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 inline-block">
            Lihat Event
          </a>
        </div>
      </section>

      <section id="events" className="py-20 bg-slate-800">
        <div className="container mx-auto px-6 pt-5">
          <h2 className="text-3xl font-bold text-white mb-12 text-center ">Daftar Event</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map(event => (
              <CardEvent key={event.idNumber} event={event} onDelete={onDeleteEvent} />
            ))}
          </div>
        </div>
      </section>

      <section id='contact' className='contact min-h-screen bg-gray-900 justify-center items-center flex flex-col'>
        <div className='container mx-auto px-6 py-20'>
          <h2 className="text-3xl font-bold text-white mb-5 text-center">Contact</h2>
          <p className="text-xl text-gray-300 mb-8 text-center">Hubungi kami untuk informasi lebih lanjut</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 p-6 rounded-xl hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-4">Alamat</h3>
              <p className="text-gray-300">Jl. Kampus Universitas, Kota, Provinsi</p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-4">Email</h3>
              <p className="text-gray-300">eventkampus@gmail.com</p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-4">Telepon</h3>
              <p className="text-gray-300">08123456789</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

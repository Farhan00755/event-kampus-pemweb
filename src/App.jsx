import './App.css'
import Navbar from './components/nav.jsx'
import Footer from './components/footer.jsx'
import CardEvent from './components/card-event.jsx'

export default function App() {
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
        <CardEvent />
      </div>

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
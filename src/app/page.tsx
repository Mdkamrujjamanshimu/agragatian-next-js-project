import Header from "@/components/Header";
import About from "@/components/About";
import Document from "@/components/Document";
import Writer from "@/components/Writer";
import Gallery from "@/components/Gallery";
import Order from '@/components/Order';
import Footer from "@/components/Footer";



export default async function Home() {
  return (
    <main>
      <Header />
      <About />
      <Document />
      <Writer />
      <Gallery />
      <Order />
      <Footer />
    </main>
  )
}

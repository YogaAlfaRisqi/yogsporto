import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

export default function App() {
  return (
    <>
      <div class="flex flex-col min-h-screen">
        <Navbar/>
        <main className="flex">
          <Home/>
        </main>
        <Footer/>
      </div>
    </>
  );
}

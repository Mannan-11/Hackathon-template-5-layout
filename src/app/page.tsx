import Herosection from "./Components/HeroSection"
import EditorsPick from "./Components/Editorspick";
import Cart1 from "./Components/FeaturedProducts"; 
import Vitaclassic from "./Components/Vitaclassicproduct";
import Neuraluniverse from "./Components/NeuralUniverse";
import FeaturedPost from "./Components/FeaturedPost";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";


export default function Home() {
  return (
   <main>
    <div className="hidden lg:block">
    <Header />
    </div>
    <div className="flex-col lg:flex">
    <Navbar />
    </div>
    <Herosection />
    <EditorsPick />
    <Cart1 />
    <Vitaclassic />
    <Neuraluniverse />
    <FeaturedPost />
    <Footer />
    </main>
  );
}

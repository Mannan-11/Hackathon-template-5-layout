import Destop1 from "./Componets/Destop1/page"
import Card1 from "./Componets/ProductCard/card1"
import Desktop1 from "./Componets/Desktop1/page"
import Post from "./Componets/Destop1/FeaturedPost/page"

export default function Home() {
  return (
    <div className="w-[1440px] justify-self-center"> 
      <div><Destop1 /></div>
      <div><Card1 /></div>
      <div><Desktop1 /></div>
      <div><Post /></div>
    </div>
  )
}

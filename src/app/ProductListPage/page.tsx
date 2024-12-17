import Card2 from "../Componets/ProductCard/card2"
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
import Nav3 from "../Componets/Navbar/nav3"
import Nav4 from "../Componets/Navbar/nav4"
  

const ProductListPage = ()=> {
    let image = <img src="c1.png" alt="img"
    width={239}
    height={427} />
    let h = "Graphic Design"
    let p = "English Department"
    let price = "$16.48"
    let prices = "$6.48"
    let colors = <img src="color.png" alt="img" />
    let im2 = <img src="c2.png" alt="img" />
    let im3 = <img src="c3.png" alt="img" />
    let im4 = <img src="c4.png" alt="img" />
    let im5 = <img src="c5.png" alt="img" />
    let im6 = <img src="c6.png" alt="img" />
    let im7 = <img src="c7.png" alt="img" />
    let im8 = <img src="c8.png" alt="img" />
    let im9 = <img src="c9.png" alt="img" />
    let im10 = <img src="c10.png" alt="img" />
    let im11 = <img src="c11.png" alt="img" />
    let im12 = <img src="c12.png" alt="img" />

    return(
        <div>
            <div className="flex flex-col font-Montserat">
               <div className="hidden lg:block"><Nav3 /></div>
                <div className="hidden lg:block"><Nav4 /></div>
                <div className="h-[92px] flex flex-row w-full bg-[#FAFAFA] items-center">
                    <h1 className="text-[#252B42] font-bold text-2xl ms-[195px]">Shop</h1>
                    <h2 className="font-bold ms-[830px] text-sm text-[#252B42]">Home</h2>
                    <h3 className="ms-[15px]"><img src="i7.png" alt="img" /></h3>
                    <h4 className="ms-[15px] text-sm text-[#BDBDBD] font-bold">Shop</h4>
                </div>
                <div className="h-[271px] bg-[#FAFAFA] w-full">
                    <div className="w-[1088px] justify-between flex flex-row h-[223px] justify-self-center">
                        <h1><img src="d1.png" alt="img" /></h1>
                        <h1><img src="d2.png" alt="img" /></h1>
                        <h1><img src="d3.png" alt="img" /></h1>
                        <h1><img src="d4.png" alt="img" /></h1>
                        <h1><img src="d5.png" alt="img" /></h1>
                    </div>
                </div>
                <div className="items-center w-[1050px] h-[98px] flex flex-row self-center">
                    <h1 className="font-bold text-sm text-[#737373]">Showing all 12 results</h1>
                    <h1 className="ms-[226px] font-bold text-sm text-[#737373]">Views:</h1>
                    <h2 className="ms-[15px]"><img src="icon1.png" alt="img" /></h2>
                    <h2 className="ms-[15px]"><img src="icon2.png" alt="img" /></h2>
                    <button className="ms-[227px] border font-normal text-sm text-[#737373] hover:font-bold boder-[#DDDDD] py-[10px] bg-[#F9F9F9] px-[30px] rounded-sm">Popularity</button>
                    <button className="ms-[15px] py-[10px] hover:bg-sky-400 px-[20px] bg-[#23A6F0] text-white font-bold rounded-sm text-sm">Filter</button>
                </div>
                <div className="w-full h-[175px] bg-[#FAFAFA]">
                     <div className="w-[1054px] justify-evenly justify-self-center items-center h-[175px] flex flex-row">
                      <h1><img src="t1.png" alt="img" /></h1>
                      <h1><img src="t2.png" alt="img" /></h1>
                      <h1><img src="t3.png" alt="img" /></h1>
                      <h1><img src="t4.png" alt="img" /></h1>
                      <h1><img src="t2.png" alt="img" /></h1>
                      <h1><img src="t6.png" alt="img" /></h1>
                     </div>
                </div>
                <div className="flex flex-col items-center w-full h-auto">
                    <div className="flex flex-row w-[1124px] h-auto justify-evenly">
                    <Card2 
             img={image}
             h={h}
             p={p}
             price={price}
             prices={prices}
             circle={colors}
             />
                    <Card2 
             img={im2}
             h={h}
             p={p}
             price={price}
             prices={prices}
             circle={colors}
             />
                    <Card2 
             img={im3}
             h={h}
             p={p}
             price={price}
             prices={prices}
             circle={colors}
             />
                    <Card2 
             img={im4}
             h={h}
             p={p}
             price={price}
             prices={prices}
             circle={colors}
             />
             
                    </div>
                    <div className="flex flex-row w-[1124px] h-auto justify-evenly">
                    <Card2 
             img={im5}
             h={h}
             p={p}
             price={price}
             prices={prices}
             circle={colors}
             />
                    <Card2 
             img={im6}
             h={h}
             p={p}
             price={price}
             prices={prices}
             circle={colors}
             />
                    <Card2 
             img={im7}
             h={h}
             p={p}
             price={price}
             prices={prices}
             circle={colors}
             />
                    <Card2 
             img={im8}
             h={h}
             p={p}
             price={price}
             prices={prices}
             circle={colors}
             />
             
                    </div>
                    <div className="flex flex-row w-[1124px] h-auto justify-evenly">
                    <Card2 
             img={im9}
             h={h}
             p={p}
             price={price}
             prices={prices}
             circle={colors}
             />
                    <Card2 
             img={im10}
             h={h}
             p={p}
             price={price}
             prices={prices}
             circle={colors}
             />
                    <Card2 
             img={im11}
             h={h}
             p={p}
             price={price}
             prices={prices}
             circle={colors}
             />
                    <Card2 
             img={im12}
             h={h}
             p={p}
             price={price}
             prices={prices}
             circle={colors}
             />
             
                    </div>
                </div>
                <div className="mt-5 mb-5">
                <Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>

                </div>
            </div>
        </div>
    )
}
export default ProductListPage
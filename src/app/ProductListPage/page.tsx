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
import Image from "next/image"
  

const ProductListPage = ()=> {
    const image = <Image src="/c1.png" alt="img"
    width={239}
    height={300} />
    const h = "Graphic Design"
    const p = "English Department"
    const price = "$16.48"
    const prices = "$6.48"
    const colors = <Image src="/color.png" alt="img" width={82} height={16} />
    const im2 = <Image src="/c2.png" alt="img" width={239} height={300} />
    const im3 = <Image src="/c3.png" alt="img" width={239} height={300}/>
    const im4 = <Image src="/c4.png" alt="img" width={239} height={300}/>
    const im5 = <Image src="/c5.png" alt="img" width={239} height={300}/>
    const im6 = <Image src="/c6.png" alt="img" width={239} height={300}/>
    const im7 = <Image src="/c7.png" alt="img" width={239} height={300}/>
    const im8 = <Image src="/c8.png" alt="img" width={239} height={300}/>
    const im9 = <Image src="/c9.png" alt="img" width={239} height={300}/>
    const im10 = <Image src="/c10.png" alt="img" width={239} height={300}/>
    const im11 = <Image src="/c11.png" alt="img" width={239} height={300}/>
    const im12 = <Image src="/c12.png" alt="img" width={239} height={300}/>

    return(
        <div>
            <div className="flex flex-col font-Montserat">
               <div className="hidden lg:block"><Nav3 /></div>
                <div className="hidden lg:block"><Nav4 /></div>
                <div className="h-[92px] flex flex-row w-full bg-[#FAFAFA] items-center">
                    <h1 className="text-[#252B42] font-bold text-2xl ms-[195px]">Shop</h1>
                    <h2 className="font-bold ms-[830px] text-sm text-[#252B42]">Home</h2>
                    <h3 className="ms-[15px]"><Image src="/i7.png" alt="img" width={8.6} height={16}/></h3>
                    <h4 className="ms-[15px] text-sm text-[#BDBDBD] font-bold">Shop</h4>
                </div>
                <div className="h-[271px] bg-[#FAFAFA] w-full">
                    <div className="w-[1088px] justify-between flex flex-row h-[223px] justify-self-center">
                        <h1><Image src="/d1.png" alt="img" width={205} height={223}/></h1>
                        <h1><Image src="/d2.png" alt="img" width={205} height={223}/></h1>
                        <h1><Image src="/d3.png" alt="img" width={205} height={223}/></h1>
                        <h1><Image src="/d4.png" alt="img" width={205} height={223}/></h1>
                        <h1><Image src="/d5.png" alt="img" width={205} height={223}/></h1>
                    </div>
                </div>
                <div className="items-center w-[1050px] h-[98px] flex flex-row self-center">
                    <h1 className="font-bold text-sm text-[#737373]">Showing all 12 results</h1>
                    <h1 className="ms-[226px] font-bold text-sm text-[#737373]">Views:</h1>
                    <h2 className="ms-[15px]"><Image src="/icon1.png" alt="img" width={46} height={46}/></h2>
                    <h2 className="ms-[15px]"><Image src="/icon2.png" alt="img" width={46} height={46}/></h2>
                    <button className="ms-[227px] border font-normal text-sm text-[#737373] hover:font-bold boder-[#DDDDD] py-[10px] bg-[#F9F9F9] px-[30px] rounded-sm">Popularity</button>
                    <button className="ms-[15px] py-[10px] hover:bg-sky-400 px-[20px] bg-[#23A6F0] text-white font-bold rounded-sm text-sm">Filter</button>
                </div>
                <div className="w-full h-[175px] bg-[#FAFAFA]">
                     <div className="w-[1054px] justify-evenly justify-self-center items-center h-[175px] flex flex-row">
                      <h1><Image src="/t1.png" alt="img" width={152} height={34}/></h1>
                      <h1><Image src="/t2.png" alt="img" width={100} height={34}/></h1>
                      <h1><Image src="/t3.png" alt="img" width={100} height={75}/></h1>
                      <h1><Image src="/t4.png" alt="img" width={100} height={42}/></h1>
                      <h1><Image src="/t5.png" alt="img" width={100} height={62}/></h1>
                      <h1><Image src="/t6.png" alt="img" width={100} height={72}/></h1>
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
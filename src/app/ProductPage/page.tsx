
import Cart1 from "./Cart1"
import Nav3 from "../Componets/Navbar/nav3"
import Nav4 from "../Componets/Navbar/nav4"

export default function ProductPage (){
    let image1 = <img src="o1.png" alt="img" />
    let name = "Graphic Design"
    let more = "English Department"
    let prize = "$16.48"
    let discPrice = "$6.48"
    let image2 = <img src="o2.png" alt="img" />
    let image3 = <img src="o3.png" alt="img" />
    let image4 = <img src="o4.png" alt="img" />
    let image5 = <img src="o5.png" alt="img" />
    let image6 = <img src="o6.png" alt="img" />
    return(
        <div>
            <div className="flex flex-col font-Montserat">
           <div><Nav3 /></div>
           <div><Nav4 /></div>
                <div className="h-[92px] flex flex-row w-full bg-[#FAFAFA] items-center">
                    <h2 className="ms-52 font-bold text-sm text-[#252B42]">Home</h2>
                    <h3 className="ms-[15px]"><img src="i7.png" alt="img" /></h3>
                    <h4 className="ms-[15px] text-sm text-[#BDBDBD] font-bold">Shop</h4>
                </div>
                <div className="w-full h-[598px] bg-[#FAFAFA]">
                    <div className="w-[1050px] h-[550px] flex flex-row justify-self-center">
                        <div><img src="items.png" alt="img" /></div>
                        <div className="w-[471px] h-[510px] ms-[54px] ">
                           <h1 className="font-normal text-[20px] text-[#252B42]">Floating Phone</h1>
                           <div className="mt-[12px] flex flex-row">
                            <img src="stars.png" alt="img" />
                            <h1 className="font-bold ms-[10px] text-sm text-[#737373]">10 Reviews</h1>
                           </div>
                           <h1 className="mt-[20px] font-bold text-2xl text-[#252B42]">$1,139.33</h1>
                           <div className="mt-[5px] flex flex-row">
                            <h1 className="text-[#737373] text-sm font-bold">Availability  :</h1>
                            <h1 className="text-[#23A6F0] text-sm font-bold ms-[5px]">In Stock</h1>
                           </div>
                           <h1 className="font-normal text-sm text-[#858585] mt-[32px] w-[440px]">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</h1>
                           <h1 className="border mt-[27px]"></h1>
                           <h1 className="mt-[29px]"><img src="product-colors.png" alt="colors" /></h1>
                           <div className="flex flex-row mt-[67px]">
                            <button className="rounded-[5px] py-[10px] px-[20px] bg-[#23A6F0] text-white font-bold text-sm">Select Options</button>
                            <h1 className="ms-[5px]"><img src="like.png" alt="img" /></h1>
                            <h1 className="ms-[5px]"><img src="basket.png" alt="img" /></h1>
                            <h1 className="ms-[5px]" ><img src="more.png" alt="img" /></h1>
                             </div>
                           </div>
                   </div>
                </div>
                <div className="border-b-4 w-[1051px] h-[72px] flex self-center items-center gap-10 flex-row">
                <h1 className="text-sm font-semibold text-[#737373] ms-72">Description</h1>
                <h2 className="text-sm font-bold text-[#737373]">Additional Information</h2>
                <h3 className="text-sm font-bold text-[#737373]">Reviews</h3>
                <h4 className="text-[#23856D] text-sm font-bold -ml-8">(0)</h4>
                </div>
                <div className="w-[1056px] h-[427px] mt-[48px] self-center">
                <div className="flex flex-row -[1056px] h-[427px]">
                     <h1><img src="item.png" alt="img" /></h1>
                     <div className="flex flex-col ms-[30px] w-[332px] h-[427px]">
                        <h1 className="text-2xl font-bold text-[#252B42]">the quick fox jumps over</h1>
                        <h2 className="text-sm mt-[30px] text-[#737373] font-normal">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</h2>
                        <h2 className="text-sm mt-[30px] text-[#737373] font-normal">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</h2>
                        <h2 className="text-sm mt-[30px] text-[#737373] font-normal">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</h2>
                     </div>
                     <div className="w-[332px] h-[367px] flex flex-col ms-[30px]">
                     <h1 className="text-2xl font-bold text-[#252B42]">the quick fox jumps over</h1>
                     <div className="mt-[30px] flex flex-row">
                        <h1 className="mt-[4px]"><img src="i7.png" alt="img" width={8.7} height={16} /></h1>
                        <h2 className="text-sm ms-[20px] font-bold text-[#737373]">the quick fox jumps over the lazy dog</h2>
                     </div>
                     <div className="mt-[10px] flex flex-row">
                        <h1 className="mt-[4px]"><img src="i7.png" alt="img" width={8.7} height={16} /></h1>
                        <h2 className="text-sm ms-[20px] font-bold text-[#737373]">the quick fox jumps over the lazy dog</h2>
                     </div>
                     <div className="mt-[10px] flex flex-row">
                        <h1 className="mt-[4px]"><img src="i7.png" alt="img" width={8.7} height={16} /></h1>
                        <h2 className="text-sm ms-[20px] font-bold text-[#737373]">the quick fox jumps over the lazy dog</h2>
                     </div>
                     <div className="mt-[10px] flex flex-row">
                        <h1 className="mt-[4px]"><img src="i7.png" alt="img" width={8.7} height={16} /></h1>
                        <h2 className="text-sm ms-[20px] font-bold text-[#737373]">the quick fox jumps over the lazy dog</h2>
                     </div>
                     <h1 className="text-2xl font-bold text-[#252B42] mt-[30px]">the quick fox jumps over</h1>
                     <div className="mt-[30px] flex flex-row">
                        <h1 className="mt-[4px]"><img src="i7.png" alt="img" width={8.7} height={16} /></h1>
                        <h2 className="text-sm ms-[20px] font-bold text-[#737373]">the quick fox jumps over the lazy dog</h2>
                     </div>
                     <div className="mt-[10px] flex flex-row">
                        <h1 className="mt-[4px]"><img src="i7.png" alt="img" width={8.7} height={16} /></h1>
                        <h2 className="text-sm ms-[20px] font-bold text-[#737373]">the quick fox jumps over the lazy dog</h2>
                     </div>
                     <div className="mt-[10px] flex flex-row">
                        <h1 className="mt-[4px]"><img src="i7.png" alt="img" width={8.7} height={16} /></h1>
                        <h2 className="text-sm ms-[20px] font-bold text-[#737373]">the quick fox jumps over the lazy dog</h2>
                     </div>
                     </div>
                    </div>
                </div>
                      <div className="flex flex-col w-full h-[1086px] bg-[#FAFAFA]">
                        <div className="w-[1040px] h-[32px] mt-[48px] text-2xl text-[#252B42] font-bold self-center">BESTSELLER PRODUCTS</div>
                        <div className="border-b-4 w-[1042px] self-center mt-[24px] mb-[24px]"></div>
                          <div className="flex flex-row w-[1049px] h-[442px] justify-between self-center">
                            <Cart1
                            pic={image1}
                            naam={name}
                            or={more}
                            pkr={prize}
                            disc={discPrice} />
                              <Cart1
                            pic={image2}
                            naam={name}
                            or={more}
                            pkr={prize}
                            disc={discPrice} />  
                            <Cart1
                            pic={image3}
                            naam={name}
                            or={more}
                            pkr={prize}
                            disc={discPrice} />  
                            <Cart1
                            pic={image4}
                            naam={name}
                            or={more}
                            pkr={prize}
                            disc={discPrice} />
                          </div>
                          <div className="flex flex-row w-[1049px] mt-[24px] h-[442px] justify-between self-center">
                            <Cart1
                            pic={image5}
                            naam={name}
                            or={more}
                            pkr={prize}
                            disc={discPrice} />
                              <Cart1
                            pic={image6}
                            naam={name}
                            or={more}
                            pkr={prize}
                            disc={discPrice} />  
                            <Cart1
                            pic={image1}
                            naam={name}
                            or={more}
                            pkr={prize}
                            disc={discPrice} />  
                            <Cart1
                            pic={image2}
                            naam={name}
                            or={more}
                            pkr={prize}
                            disc={discPrice} />
                          </div>
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
            </div>
        </div>
    )
}
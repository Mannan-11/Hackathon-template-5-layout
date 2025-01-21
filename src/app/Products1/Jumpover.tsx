import Image from "next/image"
import { ChevronRight } from 'lucide-react';

export default function Jumpover() {

    return (

        <div className="justify-self-center font-Montserat">
            <div className="border-b-4 w-[1051px] h-[72px] flex self-center items-center gap-10 flex-row">
               <h1 className="text-sm font-semibold text-[#737373] ms-72">Description</h1>
               <h2 className="text-sm font-bold text-[#737373]">Additional Information</h2>
               <h3 className="text-sm font-bold text-[#737373]">Reviews</h3>
               <h4 className="text-[#23856D] text-sm font-bold -ml-8">(0)</h4>
            </div>
            <div className="w-[1056px] h-[427px] mt-[48px] self-center">
               <div className="flex flex-row -[1056px] h-[427px]">
                  <h1><Image src="/item.png" alt="img" width={337} height={392} /></h1>
                  <div className="flex flex-col ms-[30px] w-[332px] h-[427px]">
                     <h1 className="text-2xl font-bold text-[#252B42]">the quick fox jumps over</h1>
                     <h2 className="text-sm mt-[30px] text-[#737373] font-normal">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</h2>
                     <h2 className="text-sm mt-[30px] text-[#737373] font-normal">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</h2>
                     <h2 className="text-sm mt-[30px] text-[#737373] font-normal">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</h2>
                  </div>
                  <div className="w-[332px] h-[367px] flex flex-col ms-[30px]">
                     <h1 className="text-2xl font-bold text-[#252B42]">the quick fox jumps over</h1>
                     <div className="mt-[30px] flex flex-row">
                        <h1 className="mt-[4px]"><ChevronRight /></h1>
                        <h2 className="text-sm ms-[20px] font-bold text-[#737373]">the quick fox jumps over the lazy dog</h2>
                     </div>
                     <div className="mt-[10px] flex flex-row">
                        <h1 className="mt-[4px]"><ChevronRight /></h1>
                        <h2 className="text-sm ms-[20px] font-bold text-[#737373]">the quick fox jumps over the lazy dog</h2>
                     </div>
                     <div className="mt-[10px] flex flex-row">
                        <h1 className="mt-[4px]"><ChevronRight /></h1>
                        <h2 className="text-sm ms-[20px] font-bold text-[#737373]">the quick fox jumps over the lazy dog</h2>
                     </div>
                     <div className="mt-[10px] flex flex-row">
                        <h1 className="mt-[4px]"><ChevronRight /></h1>
                        <h2 className="text-sm ms-[20px] font-bold text-[#737373]">the quick fox jumps over the lazy dog</h2>
                     </div>
                     <h1 className="text-2xl font-bold text-[#252B42] mt-[30px]">the quick fox jumps over</h1>
                     <div className="mt-[30px] flex flex-row">
                        <h1 className="mt-[4px]"><ChevronRight /></h1>
                        <h2 className="text-sm ms-[20px] font-bold text-[#737373]">the quick fox jumps over the lazy dog</h2>
                     </div>
                     <div className="mt-[10px] flex flex-row">
                        <h1 className="mt-[4px]"><ChevronRight /></h1>
                        <h2 className="text-sm ms-[20px] font-bold text-[#737373]">the quick fox jumps over the lazy dog</h2>
                     </div>
                     <div className="mt-[10px] flex flex-row">
                        <h1 className="mt-[4px]"><ChevronRight /></h1>
                        <h2 className="text-sm ms-[20px] font-bold text-[#737373]">the quick fox jumps over the lazy dog</h2>
                     </div>
                  </div>
               </div>
            </div>
        </div>
    )

}

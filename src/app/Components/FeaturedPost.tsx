
import Images from "next/image"
import { AlarmClockCheck } from 'lucide-react';
import { ChartArea } from 'lucide-react';
import { ChevronRight } from 'lucide-react';

export default function FeaturedPost() {

    const Post = [
        {
            Image: "/Post1.png",
            title: "Loudest à la Madison #1 (L'integral)",
            Description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
            date: "22 April 2021", comments: "10 comments"
        },

        {
            Image: "/Post2.png",
            title: "Loudest à la Madison #1 (L'integral)",
            Description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
            date: "22 April 2021", comments: "10 comments"
        },

        {
            Image: "/Post3.png",
            title: "Loudest à la Madison #1 (L'integral)",
            Description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
            date: "22 April 2021", comments: "10 comments"
        },
    ]

    return (
        <div className="flex w-full h-[1044px]">
            <div className="flex flex-col w-[1050px] h-[1044px] mx-[242.5px] gap-[80px] py-[112px]">
                <div className="flex flex-col w-[691px] h-[134px] mx-[216px] gap-[10px]">
                    <h1 className="flex text-[14px] leading-[24px] text-[#23A6F0] w-[114px] h-[24px] mx-[287px] tracking-[0.2px]">Practice Advice</h1>
                    <p className="flex text-[40px] font-bold leading-[50px] text-[#252B42] tracking-[0.2px] w-[309px] h-[50px] mx-[186.5px]">Featured Posts</p>
                    <p className="flex text-[14px] leading-[20px] text-[#737373] w-[463px] h-[40px] mx-[114px] tracking-[0.2px] text-center">Problems trying to resolve the conflict between <br />
                        the two major realms of Classical physics: Newtonian mechanics </p>
                </div>
                <div className="flex w-[1065px] h-[606px] gap-[30px]">                  
                        {Post.map((Post, index) => {
                            return (
                                
                                <div key={index} className="flex w-[348px] h-[606px] shadow-md gap-[10px]">
                               <div className="relative">
                                    <Images src={Post.Image} alt="Post-1 Image" width={348} height={606} className="object-cover" />
                                    <span className="absolute top-5 left-5 bg-[#E74040] w-[58px] h-[24px] text-white text-xs uppercase px-[10px] py-1 rounded-[3px] text-center">
                                        New
                                    </span>
                                    <div className="flex flex-col w-[348px] h-[306px] px-[25px] pt-[25px] pb-[35px] gap-[10px]">
                                        <div className="flex w-[159px] h-[16px] gap-[15px]">
                                            <h1 className="text-[12px] text-[#8EC2F2] leading-[16px] tracking-[0.2px]">Goolge</h1>
                                            <h2 className="text-[12px] text-[#737373] leading-[16px] tracking-[0.2px]">Trending</h2>
                                            <h2 className="text-[12px] text-[#737373] leading-[16px] tracking-[0.2px]">New</h2>
                                        </div>
                                        <p className="text-[20px] text-[#252B42] leading-[30px] tracking-[0.2px]">{Post.title}</p>
                                        <p className="text-[14px] text-[#737373] leading-[20px] tracking-[0.2px]">{Post.Description}</p>
                                        <div className="flex w-[298px] h-[46px] py-[15px] gap-">
                                            <div className="flex w-[98px] h-[16px]">
                                                <p className="flex w-[16px] h-[16px] -my-[5px] text-[#23A6F0]"><AlarmClockCheck /></p>
                                                <p className="flex w-[77px] h-[16px] text-[12px] text-[#737373] leading-[16px] tracking-[0.2]">{Post.date}</p>
                                            </div>
                                            <div className="flex gap-[5px] w-[105px] h-[16px] ml-[95px]">
                                                <p className="flex w-[16px] h-[16px] -my-[6px] text-[#23856D]"><ChartArea /></p>
                                                <p className="flex w-[77px] h-[16px] text-[12px] text-[#737373] leading-[16px] tracking-[0.2]">{Post.comments}</p>
                                            </div>
                                        </div>
                                        <div className="flex w-[104px] h-[24px] gap-[10px]">
                                            <p className="w-[85px] h-[24px] text-[14px] text-[#737373] leading-[24px] tracking-[0.2] ">Learn More</p>
                                            <p className="flex w-[9px] h-[16px] text-[#23A6F0] text-[20px]"><ChevronRight /></p>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                
                            )
                        }
                        )
                        }                    
                </div>
            </div>
        </div>
    )
}
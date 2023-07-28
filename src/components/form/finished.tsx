"use client";
import { cn } from "@/utils"
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { Steps, setStep } from "@/redux/features/formReducer";
import Image from "next/image";
import { innerForm, mainContainer, subtitle, title } from "../stylesCommon";

export default function Finish() {
    const dispatch = useDispatch<AppDispatch>();
    const changeStep = (stp: Steps) => {
        dispatch(setStep(stp))
    }
    return (
        <div className={cn(mainContainer)}>
            <div className={cn(innerForm, "md:pb-0 pb-20 md:pt-0 pt-20")}>
                <div className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] relative">
                    <Image src="/icon-thank-you.svg" alt="finish icon" fill={true} />
                </div>
                <h1 className={cn(title, "mt-4 md:mt-9 mb-3 md:mb-4")}>Thank you!</h1>
                <h2 className={cn(subtitle, "text-center")}>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at suport@loremgaming.com.</h2>
            </div>
        </div>
    )
}

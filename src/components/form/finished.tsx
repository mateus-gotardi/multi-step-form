"use client";
import { cn } from "@/utils"
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { Steps, setStep } from "@/redux/features/formReducer";
import Image from "next/image";
import { mainContainer, subtitle, title } from "../stylesCommon";

export default function Finish() {
    const dispatch = useDispatch<AppDispatch>();
    const changeStep = (stp: Steps) => {
        dispatch(setStep(stp))
    }
    return (
        <div className={cn(mainContainer, "justify-center")}>
            <Image src="/icon-thank-you.svg" alt="finish icon" width={100} height={100} />
            <h1 className={cn(title, "mt-9 mb-4")}>Thank you!</h1>
            <h2 className={cn(subtitle, "text-center")}>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at suport@loremgaming.com.</h2>
        </div>
    )
}

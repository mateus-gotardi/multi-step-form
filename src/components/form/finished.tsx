"use client";
import { cn } from "@/utils"
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { Steps, setStep } from "@/redux/features/formReducer";
import Image from "next/image";

export default function Finish() {
    const dispatch = useDispatch<AppDispatch>();
    const changeStep = (stp: Steps) => {
        dispatch(setStep(stp))
    }
    return (
        <div className={cn("")}>
            <Image src="/icon-thank-you.svg" alt="finish icon" width={200} height={200} />
            <h1>Thank you!</h1>
            <h2>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at suport@loremgaming.com.</h2>
        </div>
    )
}

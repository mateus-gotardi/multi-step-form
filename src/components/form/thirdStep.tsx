"use client";
import { cn } from "@/utils"
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { Steps, setStep } from "@/redux/features/formReducer";

export default function StepThree() {
    const dispatch = useDispatch<AppDispatch>();
    const changeStep = (stp: Steps) => {
        dispatch(setStep(stp))
    }
    return (
        <div className={cn("")}>
            <h1>Add-ons</h1>
            <button onClick={() => changeStep(2)}>Go Back</button>
            <button onClick={() => changeStep(4)}>Next Step</button>
        </div>
    )
}

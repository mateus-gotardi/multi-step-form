"use client";
import { cn } from "@/utils"
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { Steps, setStep } from "@/redux/features/formReducer";

export default function StepTwo() {
    const dispatch = useDispatch<AppDispatch>();
    const changeStep = (stp: Steps) => {
        dispatch(setStep(stp))
    }
    return (
        <div className={cn("")}>
            <h1>Select Plan</h1>
            <button onClick={() => changeStep(1)}>Go Back</button>
            <button onClick={() => changeStep(3)}>Next Step</button>
        </div>
    )
}

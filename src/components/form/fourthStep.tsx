"use client";
import { cn } from "@/utils"
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { Steps, setFinished, setStep } from "@/redux/features/formReducer";

export default function StepFour() {
    const dispatch = useDispatch<AppDispatch>();
    const changeStep = (stp: Steps) => {
        dispatch(setStep(stp))
    }
    const finish = () => {
        dispatch(setFinished(true))
    }
    return (
        <div className={cn("")}>
            <h1>Summary</h1>
            <button onClick={() => changeStep(3)}>Go Back</button>
            <button onClick={() => finish()}>Confirm</button>
        </div>
    )
}

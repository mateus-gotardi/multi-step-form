"use client";
import { goBackBtn, navigationContainer, nextBtn } from "@/components/stylesCommon";
import { Steps, setStep } from "@/redux/features/formReducer";
import { AppDispatch } from "@/redux/store";
import { cn } from "@/utils";
import { useDispatch } from "react-redux";

export default function Navigation({ step }: { step: number }) {
    const dispatch = useDispatch<AppDispatch>();

    const changeStep = (stp: Steps) => {
        dispatch(setStep(stp))
    }

    return (
        <div className={cn(navigationContainer)}>
            <button className={cn(goBackBtn)} onClick={() => changeStep(step - 1 as Steps)}>Go Back</button>
            <button className={cn(nextBtn)} onClick={() => changeStep(step + 1 as Steps)}>Next Step</button>
        </div>
    )
}
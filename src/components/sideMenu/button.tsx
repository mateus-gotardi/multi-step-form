"use client";
import { cn, isValidEmail } from "@/utils"
import { AppDispatch, UseAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { Steps, setStep } from "@/redux/features/formReducer";
import { setErrEmail, setErrName, setErrPhone } from "@/redux/features/errorsReducer";

export default function SideBtn({ num, title }: { num: Steps, title: string }) {
    const dispatch = useDispatch<AppDispatch>();
    const value = UseAppSelector(state => state.formReducer.value)
    const step = value.step
    const sideButtonStyle = "flex flex-row items-center justify-start gap-5 w-full"
    const sideBtnInnerDiv = "flex flex-col items-start justify-center"
    const stepLabelStyle = "text-cool-gray font-light text-sm"
    const stepTitleStyle = "text-white font-medium text-base"
    const nmbStyle = (item: number) => {
        if (step === item) {
            return "rounded-full w-8 h-8 p-2 bg-pastel-blue font-bold text-black flex items-center justify-center"
        } else {
            return "rounded-full w-8 h-8 p-2 bg-transparent border-[1px] border-white text-white font-medium flex items-center justify-center"
        }
    }
    const changeStep = (stp: Steps) => {
        if (step === 1 && value.name === "" || step === 1 && value.email === "" || step === 1 && value.phone === "" || step === 1 && isValidEmail(value.email) === false) {
            if (value.phone === "") {
                dispatch(setErrPhone('empty'))
            }
            if (value.name === "") {
                dispatch(setErrName('empty'))
            }
            if (value.email === "") {
                dispatch(setErrEmail("empty"))
            } else if (isValidEmail(value.email) === false) {
                dispatch(setErrEmail("invalid"))
            }
            return
        }
        if (!value.finished && step !== stp) {
            dispatch(setStep(stp))
        }
    }

    return (
        <button className={cn(sideButtonStyle)} onClick={() => changeStep(num)}><span className={cn(nmbStyle(num))}>{num}</span>
            <div className={cn(sideBtnInnerDiv)}><span className={cn(stepLabelStyle)}>STEP {num}</span><h3 className={cn(stepTitleStyle)}>{title}</h3></div>
        </button>
    )
}
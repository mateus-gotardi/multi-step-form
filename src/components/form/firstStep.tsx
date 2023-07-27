"use client";
import { cn, isValidEmail } from "@/utils"
import { AppDispatch, UseAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { Steps, setStep } from "@/redux/features/formReducer";
import InputStp1 from "./components/input";
import { setErrEmail, setErrName, setErrPhone } from "@/redux/features/errorsReducer";

export default function StepOne() {
    const value = UseAppSelector(state => state.formReducer.value)
    const dispatch = useDispatch<AppDispatch>();
    const changeStep = (stp: Steps) => {
        if (value.name === "" || value.email === "" || value.phone === "" || !isValidEmail(value.email)) {
            if (value.phone === "") {
                dispatch(setErrPhone('empty'))
            }
            if (value.name === "") {
                dispatch(setErrName('empty'))
            }
            if (value.email === "") {
                dispatch(setErrEmail("empty"))
            } else if (!isValidEmail(value.email)) {
                dispatch(setErrEmail("invalid"))
            }
            return
        }
        dispatch(setStep(stp))
    }
    return (
        <div className={cn("")}>
            <h1>Personal info</h1>
            <h2>Please provide your name, email address, and phone number.</h2>
            <InputStp1 label="Name" id="name" type="text" />
            <InputStp1 label="Email" id="email" type="email" />
            <InputStp1 label="Phone" id="phone" type="tel" />
            <button onClick={() => changeStep(2)}>Next Step</button>
        </div>
    )
}

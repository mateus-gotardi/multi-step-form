"use client";
import { cn, isValidEmail } from "@/utils"
import { AppDispatch, UseAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { setEmail, setName, setPhone } from "@/redux/features/formReducer";
import { setErrEmail, setErrName, setErrPhone } from "@/redux/features/errorsReducer";

export default function InputStp1({ label, id, type, placeholder }: { label: string, id: "name" | "email" | "phone", type: string, placeholder: string }) {
    const dispatch = useDispatch<AppDispatch>();
    const value = UseAppSelector(state => state.formReducer.value)
    const errors = UseAppSelector(state => state.errorsReducer.value)
    const changeValue = (value: any) => {
        switch (id) {
            case "name":
                dispatch(setName(value))
                if (value === "") {
                    dispatch(setErrName('empty'))
                } else {
                    dispatch(setErrName(false))
                }
                break;
            case "email":
                dispatch(setEmail(value))
                if (value === "") {
                    dispatch(setErrEmail("empty"))
                }
                else {
                    dispatch(setErrEmail(false))
                }
                break;
            case "phone":
                dispatch(setPhone(value))
                if (value === "") {
                    dispatch(setErrPhone('empty'))
                } else {
                    dispatch(setErrPhone(false))
                }
                break;
            default:
                break;
        }
    }
    return (
        <div className={cn("flex flex-col gap-1 w-full")}>
            <div className={cn("flex items-center justify-between")}>
                <label htmlFor={id} className={cn("font-medium text-marine-blue text-base")}>{label}</label>
                {errors[id] === "empty" && <span className={cn("text-strawberry-red font-bold")}>This field is required</span>}
                {errors[id] === "invalid" && <span className={cn("text-strawberry-red")}>Invalid email address</span>}
            </div>
            <input className={cn("px-3 text-marine-blue font-bold rounded-lg w-full h-12 border-[1px] focus:outline-purplish-blue hover:border-purplish-blue", errors[id] ? "border-strawberry-red" : "border-light-gray")} value={value[id]} type={type} id={id} onChange={(e) => { changeValue(e.target.value) }} placeholder={placeholder} />
        </div>
    )
}

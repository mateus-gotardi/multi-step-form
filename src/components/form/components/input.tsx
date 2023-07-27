"use client";
import { cn, isValidEmail } from "@/utils"
import { AppDispatch, UseAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { setEmail, setName, setPhone } from "@/redux/features/formReducer";
import { setErrEmail, setErrName, setErrPhone } from "@/redux/features/errorsReducer";

export default function InputStp1({ label, id, type }: { label: string, id: "name" | "email" | "phone", type: string }) {
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
        <div className={cn("")}>
            <div>
                <label htmlFor={id}>{label}</label>
                {errors[id] === "empty" && <span className={cn("text-red-500")}>This field is required</span>}
                {errors[id] === "invalid" && <span className={cn("text-red-500")}>Invalid email address</span>}
            </div>
            <input value={value[id]} type={type} id={id} onChange={(e) => { changeValue(e.target.value) }} />
        </div>
    )
}

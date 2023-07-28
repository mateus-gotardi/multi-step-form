"use client";
import { cn, getAddOns } from "@/utils"
import { AppDispatch, UseAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { Addons, setAddons } from "@/redux/features/formReducer";
import { mainContainer, subtitle, title, titleContainer } from "../stylesCommon";
import Navigation from "./components/navigation";
import { HiCheck } from "react-icons/hi";

export default function StepThree() {
    const value = UseAppSelector(state => state.formReducer.value)
    const dispatch = useDispatch<AppDispatch>();
    const addOns = getAddOns()

    return (
        <div className={cn(mainContainer)}>
            <div className={cn(titleContainer)}>
                <h1 className={cn(title)}>Pick add-ons</h1>
                <h2 className={cn(subtitle)}>Add-ons help enhance your gaming experience</h2>
            </div>
            <div className={cn("w-full flex flex-col gap-3 items-center justify-between")}>
                {addOns.map((addOn, i) => (
                    <label className={cn("w-full flex py-4 px-5 border-[1px] border-light-gray rounded-lg items-center justify-between",
                        value.addons[addOn.tag as Addons] ? "bg-alabaster border-purplish-blue" : "", "hover:border-purplish-blue")} key={i}>
                        <div className="flex gap-5 items-center justify-start">
                            <div className="flex items-center justify-center">
                                <input type='checkbox' id="check" checked={value.addons[addOn.tag as Addons]} onClick={(e) => dispatch(setAddons(addOn.tag as Addons))}
                                    className={cn("w-5 h-5 rounded-[5px] appearance-none border-[1px] border-light-gray checked:bg-purplish-blue")} />
                                {value.addons[addOn.tag as Addons] && <span className={cn("absolute")}><HiCheck className={cn("text-white")} /></span>}
                            </div>
                            <div>
                                <h4 className={cn("font-bold text-marine-blue text-lg")}>{addOn.name}</h4>
                                <p className={cn("text-base text-cool-gray")}>{addOn.description}</p>
                            </div>
                        </div>
                        <span className={cn("text-purplish-blue")}>+${addOn[value.contract]}{value.contract === "monthly" ? "/mo" : "/yr"}</span>
                    </label>))}
            </div>
            <Navigation step={3} />
        </div>
    )
}

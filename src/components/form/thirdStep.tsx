"use client";
import { cn, getAddOns } from "@/utils"
import { AppDispatch, UseAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { Addons, Steps, setAddons, setStep } from "@/redux/features/formReducer";

export default function StepThree() {
    const value = UseAppSelector(state => state.formReducer.value)
    const dispatch = useDispatch<AppDispatch>();
    const addOns = getAddOns()
    const changeStep = (stp: Steps) => {
        dispatch(setStep(stp))
    }
    return (
        <div className={cn("")}>
            <h1>Pick add-ons</h1>
            <h2>Add-ons help enhance your gaming experience</h2>
            {addOns.map((addOn, i) => (
                <div key={i}>
                    <input type='checkbox' checked={value.addons[addOn.tag as Addons]} onClick={(e) => dispatch(setAddons(addOn.tag as Addons))} />
                    <div>
                        <h4>{addOn.name}</h4>
                        <p>{addOn.description}</p>
                    </div>
                    <span>{addOn[value.contract]}{value.contract === "monthly" ? "/mo" : "/yr"}</span>
                </div>))}
            <button onClick={() => changeStep(2)}>Go Back</button>
            <button onClick={() => changeStep(4)}>Next Step</button>
        </div>
    )
}

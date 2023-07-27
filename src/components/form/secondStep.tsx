"use client";
import { cn, getPlans } from "@/utils"
import { AppDispatch, UseAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { Plan, Steps, setContract, setPlan, setStep } from "@/redux/features/formReducer";
import Image from "next/image";

export default function StepTwo() {
    const value = UseAppSelector(state => state.formReducer.value)
    const dispatch = useDispatch<AppDispatch>();
    const plans = getPlans()
    const changeStep = (stp: Steps) => {
        dispatch(setStep(stp))
    }
    return (
        <div className={cn("")}>
            <h1>Select Plan</h1>
            <h2>You have the option of monthly or yearly billing</h2>
            {plans.map((plan, i) => (
                <button key={i} onClick={(e) => dispatch(setPlan(plan.name as Plan))}>
                    <Image src={plan.icon} alt={plan.name} width={50} height={50} />
                    <span>{plan.name}</span>
                    <span>${plan[value.contract]}{value.contract === "monthly" ? "/mo" : "/yr"}</span>
                    {value.contract === "yearly" && <span>{plan.yearlyPromo}</span>}
                </button>))}
            <div>
                <span>Monthly</span>
                <input type="checkbox" checked={value.contract === "yearly"} id="contract" onChange={() => dispatch(setContract())} />
                <span>Yearly</span>
            </div>
            <button onClick={() => changeStep(1)}>Go Back</button>
            <button onClick={() => changeStep(3)}>Next Step</button>
        </div>
    )
}

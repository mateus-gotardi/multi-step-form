"use client";
import { cn, getPlans } from "@/utils"
import { AppDispatch, UseAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { Plan, Steps, setContract, setPlan, setStep } from "@/redux/features/formReducer";
import Image from "next/image";
import { goBackBtn, innerForm, mainContainer, navigationContainer, nextBtn, subtitle, title, titleContainer } from "../stylesCommon";
import Navigation from "./components/navigation";

export default function StepTwo() {
    const value = UseAppSelector(state => state.formReducer.value)
    const dispatch = useDispatch<AppDispatch>();
    const plans = getPlans()

    return (
        <section className={cn(mainContainer)}>
            <div className={cn(innerForm)}>
                <div className={cn(titleContainer)}>
                    <h1 className={cn(title)}>Select your plan</h1>
                    <h2 className={cn(subtitle)}>You have the option of monthly or yearly billing.</h2>
                </div>
                <div className={cn("flex flex-col w-full items-center justify-between gap-7 mt-7")}>
                    <div className={cn("flex flex-col md:flex-row w-full items-center justify-between gap-4")}>
                        {plans.map((plan, i) => (
                            <button key={i} onClick={(e) => dispatch(setPlan(plan.name as Plan))}
                                className={cn("min-w-fit w-full p-4 flex md:flex-col md:gap-0 gap-3 items-center md:items-start border-[1px] rounded-lg border-light-gray hover:border-purplish-blue transition-all",
                                    value.plan === plan.name ? "bg-alabaster border-purplish-blue" : "")}>
                                <Image src={plan.icon} alt={plan.name} width={50} height={50}
                                    className={cn("md:mb-10")} />
                                <div className={cn("flex flex-col items-start justify-start")}>
                                    <span className={cn("font-bold text-marine-blue")}>{plan.name}</span>
                                    <span className={cn("text-cool-gray")}>${plan[value.contract]}{value.contract === "monthly" ? "/mo" : "/yr"}</span>
                                    {value.contract === "yearly" && <span className={cn("text-marine-blue text-sm")}>{plan.yearlyPromo}</span>}
                                </div>
                            </button>))}
                    </div>
                    <div className={cn("flex items-center justify-center gap-3 rounded-lg bg-alabaster w-full p-3")}>
                        <label className="flex items-center space-x-2 cursor-pointer">
                            <span className={cn(value.contract === "monthly" ? "text-marine-blue" : "text-cool-gray", "font-medium")}>Monthly</span>

                            <div className="relative">
                                <input type="checkbox" checked={value.contract === "yearly"} id="contract" onChange={() => dispatch(setContract())}
                                    className={cn("sr-only")} />
                                <div className={cn("w-10 h-5 bg-marine-blue rounded-full shadow-inner")}></div>
                                <div className={cn("absolute bottom-1 left-1 w-3 h-3 bg-white rounded-full transition-transform", value.contract === "yearly" ? 'transform translate-x-5' : '')}></div>
                            </div>

                            <span className={cn(value.contract === "yearly" ? "text-marine-blue" : "text-cool-gray", "font-medium")}>Yearly</span>
                        </label>
                    </div>
                </div>
            </div>
            <Navigation step={2} />
        </section>
    )
}

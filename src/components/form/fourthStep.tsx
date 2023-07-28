"use client";
import { cn, getAddOns, getPlans } from "@/utils"
import { AppDispatch, UseAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { Addons, Steps, setFinished, setStep } from "@/redux/features/formReducer";
import { goBackBtn, innerForm, mainContainer, navigationContainer, nextBtn, subtitle, title, titleContainer } from "../stylesCommon";

export default function StepFour() {
    const value = UseAppSelector(state => state.formReducer.value)
    const plans = getPlans()
    const plan = plans.find(plan => plan.name === value.plan)
    const addOns = getAddOns()
    const dispatch = useDispatch<AppDispatch>();

    const changeStep = (stp: Steps) => {
        dispatch(setStep(stp))
    }

    const finish = () => {
        dispatch(setFinished(true))
    }

    const getTotal = () => {
        let total = plan?.[value.contract] as number
        addOns.forEach(addOn => {
            if (value.addons[addOn.tag as Addons]) {
                total += addOn[value.contract] as number
            }
        })
        return total
    }

    const total = getTotal()
    const flexLine = "flex items-center justify-between w-full"
    return (
        <section className={cn(mainContainer)}>
            <div className={cn(innerForm)}>
                <div className={cn(titleContainer)}>
                    <h1 className={cn(title)}>Finishing up</h1>
                    <h2 className={cn(subtitle)}>Double-check everything looks OK before confirming.</h2>
                </div>
                <div className={cn("w-full flex flex-col gap-5 h-full items-start mt-9")}>
                    <section className={cn("w-full bg-alabaster py-4 px-6 rounded-lg")}>
                        <div className={cn(flexLine)}>
                            <div>
                                <h4 className={cn("text-marine-blue font-bold")}>{value.plan} ({value.contract})</h4>
                                <button className={cn("text-cool-gray underline underline-offset-2 hover:text-purplish-blue transition-all")} onClick={() => changeStep(2)}>Change</button>
                            </div>
                            <span className={cn("text-marine-blue font-bold")}>+${plan?.[value.contract]}{value.contract === 'monthly' ? "/mo" : "/yr"}</span>
                        </div>
                        <hr className={cn("text-light-gray my-5")} />
                        <div className={cn("flex flex-col gap-4")}>
                            {addOns.map((addOn, i) => {
                                if (!value.addons[addOn.tag as Addons]) return null
                                else {
                                    return (
                                        <div key={i} className={cn(flexLine)}>
                                            <h4 className={cn("text-cool-gray")}>{addOn.name}</h4>
                                            <span className={cn("text-marine-blue")}>+${addOn[value.contract]}{value.contract === 'monthly' ? "/mo" : "/yr"}</span>
                                        </div>
                                    )
                                }
                            })}
                        </div>
                    </section>
                    <div className={cn(flexLine, "px-6 md:mb-0 mb-4")}>
                        <h4 className={cn("text-cool-gray")}>Total ({value.contract === 'monthly' ? "per month" : "per year"})</h4>
                        <span className={cn("text-purplish-blue font-bold text-lg")}>+${total}{value.contract === 'monthly' ? "/mo" : "/yr"}</span>
                    </div>
                </div>
            </div>
            <div className={cn(navigationContainer)}>
                <button className={cn(goBackBtn)} onClick={() => changeStep(3)}>Go Back</button>
                <button className={cn(nextBtn, "bg-purplish-blue")} onClick={() => finish()}>Confirm</button>
            </div>
        </section>
    )
}

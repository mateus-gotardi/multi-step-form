"use client";
import { cn, getAddOns, getPlans } from "@/utils"
import { AppDispatch, UseAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { Addons, Steps, setFinished, setStep } from "@/redux/features/formReducer";

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

    return (
        <div className={cn("")}>
            <h1>Finishing up</h1>
            <h2>Double-check everything looks OK before confirming.</h2>
            <section>
                <div>
                    <div>
                        <h4>{value.plan} ({value.contract})</h4>
                        <button onClick={() => changeStep(2)}>Change</button>
                    </div>
                    <span>{plan?.[value.contract]}</span>
                </div>
                <hr />
                <div>
                    {addOns.map((addOn, i) => {
                        if (!value.addons[addOn.tag as Addons]) return null
                        else {
                            return (
                                <div key={i}>
                                    <h4>{addOn.name}</h4>
                                    <span>{addOn[value.contract]}</span>
                                </div>
                            )
                        }
                    })}
                </div>
            </section>
            <div>
                <h4>Total ({value.contract === 'monthly' ? "per month" : "per year"})</h4>
                <span>{total}{value.contract === 'monthly' ? "/mo" : "/yr"}</span>
            </div>
            <button onClick={() => changeStep(3)}>Go Back</button>
            <button onClick={() => finish()}>Confirm</button>
        </div>
    )
}

"use client";
import { cn } from "@/utils"
import { UseAppSelector } from "@/redux/store";
import { StepFour, StepOne, StepThree, StepTwo, Finish, SideMenu } from "@/components";

export default function Home() {
  const value = UseAppSelector(state => state.formReducer.value)
  const step = value.step

  const steps = [<StepOne />, <StepTwo />, <StepThree />, <StepFour />]

  return (
    <main className={cn("min-h-screen p-24")}>
      <div className={cn("w-full bg-white flex justify-between p-4 rounded-lg")}>
        <SideMenu />
        <div className={cn("")}>
          {value.finished ? <Finish /> : steps[step - 1]}
        </div>
      </div>
    </main>
  )
}

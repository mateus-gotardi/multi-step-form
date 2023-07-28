"use client";
import { cn } from "@/utils"
import { UseAppSelector } from "@/redux/store";
import { StepFour, StepOne, StepThree, StepTwo, Finish, SideMenu } from "@/components";

export default function Home() {
  const value = UseAppSelector(state => state.formReducer.value)
  const step = value.step

  const steps = [<StepOne />, <StepTwo />, <StepThree />, <StepFour />]

  return (
    <main className={cn("min-h-screen lg:px-40 lg:py-20")}>
      <div className={cn("w-full bg-white flex flex-col md:flex-row justify-between p-4 rounded-lg")}>
        <SideMenu />
        {value.finished ? <Finish /> : steps[step - 1]}
      </div>
    </main>
  )
}

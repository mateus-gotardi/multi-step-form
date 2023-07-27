"use client";
import { cn } from "@/utils"
import { AppDispatch, UseAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { Steps, setStep } from "@/redux/features/formReducer";
import { StepFour, StepOne, StepThree, StepTwo, Finish } from "@/components";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const value = UseAppSelector(state => state.formReducer.value)
  const step = value.step
  const sideButtonStyle = "flex flex-row items-center justify-start gap-5 w-full"
  const sideBtnInnerDiv = "flex flex-col items-start justify-center"
  const stepLabelStyle = "text-cool-gray font-light text-sm"
  const stepTitleStyle = "text-white font-medium text-base"
  const nmbStyle = (item: number) => {
    if (step === item) {
      return "rounded-full w-8 h-8 p-2 bg-pastel-blue font-bold text-black flex items-center justify-center"
    } else {
      return "rounded-full w-8 h-8 p-2 bg-transparent border-[1px] border-white text-white font-medium flex items-center justify-center"
    }
  }
  const changeStep = (stp: Steps) => {
    if (!value.finished) {
      dispatch(setStep(stp))
    }
  }
  const steps = [<StepOne />, <StepTwo />, <StepThree />, <StepFour />]

  return (
    <main className={cn("min-h-screen p-24")}>
      <div className={cn("w-full bg-white flex justify-between p-4 rounded-lg")}>
        <div className={cn("flex flex-col bg-sidebar-desktop bg-cover h-full rounded-lg gap-4 p-5 w-[17.25rem] h-[35.5rem]")}>
          <button className={cn(sideButtonStyle)} onClick={() => changeStep(1)}><span className={cn(nmbStyle(1))}>1</span>
            <div className={cn(sideBtnInnerDiv)}><span className={cn(stepLabelStyle)}>STEP 1</span><h3 className={cn(stepTitleStyle)}>YOUR INFO</h3></div>
          </button>
          <button className={cn(sideButtonStyle)} onClick={() => changeStep(2)}><span className={cn(nmbStyle(2))}>2</span>
            <div className={cn(sideBtnInnerDiv)}><span className={cn(stepLabelStyle)}>STEP 2</span><h3 className={cn(stepTitleStyle)}>SELECT PLAN</h3></div>
          </button>
          <button className={cn(sideButtonStyle)} onClick={() => changeStep(3)}><span className={cn(nmbStyle(3))}>3</span>
            <div className={cn(sideBtnInnerDiv)}><span className={cn(stepLabelStyle)}>STEP 3</span><h3 className={cn(stepTitleStyle)}>ADD-ONS</h3></div>
          </button>
          <button className={cn(sideButtonStyle)} onClick={() => changeStep(4)}><span className={cn(nmbStyle(4))}>4</span>
            <div className={cn(sideBtnInnerDiv)}><span className={cn(stepLabelStyle)}>STEP 4</span><h3 className={cn(stepTitleStyle)}>SUMMARY</h3></div>
          </button>
        </div>
        <div className={cn("")}>
          {value.finished ? <Finish /> : steps[step - 1]}
        </div>
      </div>
    </main>
  )
}

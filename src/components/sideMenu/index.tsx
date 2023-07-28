import { cn } from "@/utils"
import SideBtn from "./button";

export default function SideMenu() {
    return (
        <div className={cn("flex flex-col bg-sidebar-desktop bg-cover h-full rounded-lg gap-4 p-9 min-w-fit w-[33%] h-[35.5rem]")}>
            <SideBtn num={1} title="YOUR INFO" />
            <SideBtn num={2} title="SELECT PLAN" />
            <SideBtn num={3} title="ADD-ONS" />
            <SideBtn num={4} title="SUMMARY" />
        </div>
    )
}

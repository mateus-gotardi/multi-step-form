import { cn } from "@/utils"
import SideBtn from "./button";

export default function SideMenu() {
    return (
        <div className={cn("flex md:flex-col bg-sidebar-mobile md:bg-sidebar-desktop bg-cover bg-bottom md:rounded-lg gap-4 p-9 w-full md:min-w-fit md:w-[33%] h-[11.5rem] md:h-[35.5rem] items-start justify-center md:items-start md:justify-start mb-[-5.5rem] md:mb-0")}>
            <SideBtn num={1} title="YOUR INFO" />
            <SideBtn num={2} title="SELECT PLAN" />
            <SideBtn num={3} title="ADD-ONS" />
            <SideBtn num={4} title="SUMMARY" />
        </div>
    )
}

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isValidEmail(email: string): boolean {
  const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function getPlans() {
  /*here comes the api call, for matter of study i'll return the data*/
  return [
    { name: "Arcade", monthly: 9, yearly: 90, icon: "icon-arcade.svg", yearlyPromo: '2 months free' },
    { name: "Advanced", monthly: 12, yearly: 120, icon: "icon-advanced.svg", yearlyPromo: '2 months free' },
    { name: "Pro", monthly: 15, yearly: 150, icon: "icon-pro.svg", yearlyPromo: '2 months free' },
  ]
}

export function getAddOns() {
  /*here comes the api call, for matter of study i'll return the data*/
  return [
    { name: "Online service", description: "Access to multiplayer games", monthly: 1, yearly: 10, tag: "online" },
    { name: "Larger storage", description: "Extra 1TB of cloud save", monthly: 2, yearly: 20, tag: "storage" },
    { name: "Customize profile", description: "Custom theme on your profile", monthly: 2, yearly: 20, tag: "profile" }
  ]
}
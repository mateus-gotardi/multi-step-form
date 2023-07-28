# Frontend Mentor - Multi-step form solution

This is a solution to the [Multi-step form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)

- [The challenge](#the-challenge)

- [Screenshot](#screenshot)

- [Links](#links)

- [My process](#my-process)

- [Built with](#built-with)

- [What I learned](#what-i-learned)

- [Continued development](#continued-development)

- [Useful resources](#useful-resources)

- [Author](#author)

- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Complete each step of the sequence

- Go back to a previous step to update their selections

- See a summary of their selections on the final step and confirm their order

- View the optimal layout for the interface depending on their device's screen size

- See hover and focus states for all interactive elements on the page

- Receive form validation messages if:

- A field has been missed

- The email address is not formatted correctly

- A step is submitted, but no selection has been made

### Screenshot

![image](https://github.com/mateus-gotardi/multi-step-form/assets/98918812/863d5f91-0a02-4d35-a7cc-6a844b5e691c)

### Links

- Solution URL: [Github Repository](https://github.com/mateus-gotardi/multi-step-form)

- Live Site URL: [Cervel Deploy](https://multi-step-form-eight-livid.vercel.app)

## My process

### Built with

- Typescript

- [Next.js](https://nextjs.org/) - React framework

- [ReduxJS](https://redux.js.org) - State manage

- [Tailwind CSS](https://tailwindcss.com) - For styles

### What I learned

I improved my skills in tailwind and used a function calld cn to improve performance, I also organized the project into components and subcomponents to improve code readability.
I create functions getPlans and getAddOns in my utils file to easily put API's requests if necessary without causing errors on the code.

This is the cn function that i spoke:

```ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### Continued development

This project has potential to be used as a template for bigger projects, adding a payment section for example or adapting for other projects necessities

## Author

- Website - [Mateus Gotardi](https://mateusgotardi.vercel.app)

- Frontend Mentor - [@mateus-gotardi](https://www.frontendmentor.io/profile/mateus-gotardi)

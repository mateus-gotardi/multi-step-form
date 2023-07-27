import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
    value: {
        step: Steps,
        finished: boolean,
        name: string,
        email: string,
        phone: string,
        plan: Plan,
        addons: {
            online: boolean,
            storage: boolean,
            profile: boolean,
        },
        contract: ContractType,
    }
}
export type Steps = 1 | 2 | 3 | 4
export type Plan = "Arcade" | "Advanced" | "Pro"
export type ContractType = "monthly" | "yearly"
export type Addons = "online" | "storage" | "profile"

const initialState = {
    value: {
        step: 1,
        finished: false,
        name: "",
        email: "",
        phone: "",
        plan: "Arcade",
        addons: {
            online: false,
            storage: false,
            profile: false,
        },
        contract: "monthly",
    }
} as InitialState

export const planForm = createSlice({
    name: 'planForm',
    initialState: initialState,
    reducers: {
        setStep: (state, action: PayloadAction<Steps>) => {
            state.value.step = action.payload
        },
        setFinished: (state, action: PayloadAction<boolean>) => {
            state.value.finished = action.payload
        },
        setName: (state, action: PayloadAction<string>) => {
            state.value.name = action.payload
        },
        setEmail: (state, action: PayloadAction<string>) => {
            state.value.email = action.payload
        },
        setPhone: (state, action: PayloadAction<string>) => {
            state.value.phone = action.payload
        },
        setPlan: (state, action: PayloadAction<Plan>) => {
            state.value.plan = action.payload
        },
        setAddons: (state, action: PayloadAction<Addons>) => {
            switch (action.payload) {
                case "online":
                    state.value.addons.online = !state.value.addons.online
                    break;
                case "storage":
                    state.value.addons.storage = !state.value.addons.storage
                    break;
                case "profile":
                    state.value.addons.profile = !state.value.addons.profile
                    break;
                default:
                    break;
            }
        },
        setContract: (state) => {
            state.value.contract = state.value.contract === "monthly" ? "yearly" : "monthly"
        },
    }
})

export const { setStep, setFinished, setPlan, setAddons, setContract, setEmail, setName, setPhone } = planForm.actions
export default planForm.reducer
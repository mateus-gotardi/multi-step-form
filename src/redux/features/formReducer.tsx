import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
    value: {
        step: Steps,
        finished: boolean,
        plan: Plan,
        addons: {
            online: boolean,
            storage: boolean,
            customProfile: boolean,
        },
        contract: ContractType,
    }
}
export type Steps = 1 | 2 | 3 | 4
export type Plan = "arcade" | "advanced" | "pro"
export type ContractType = "monthly" | "yearly"
export type Addons = "online" | "storage" | "customProfile"

const initialState = {
    value: {
        step: 1,
        finished: false,
        plan: "arcade",
        addons: {
            online: false,
            storage: false,
            customProfile: false,
        },
        contract: "monthly",
    }
} as InitialState

export const planForm = createSlice({
    name: 'planForm',
    initialState: initialState,
    reducers: {
        setStep: (state, action: PayloadAction<1 | 2 | 3 | 4>) => {
            state.value.step = action.payload
        },
        setFinished: (state, action: PayloadAction<boolean>) => {
            state.value.finished = action.payload
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
                case "customProfile":
                    state.value.addons.customProfile = !state.value.addons.customProfile
                    break;
                default:
                    break;
            }
        },
        setContract: (state, action: PayloadAction<ContractType>) => {
            state.value.contract = action.payload
        },
    }
})

export const { setStep, setFinished, setPlan, setAddons, setContract } = planForm.actions
export default planForm.reducer
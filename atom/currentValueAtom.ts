import { atom } from "recoil";

export const currentValue : any = atom({
    key: 'currentValue',
    default: 'all'
})
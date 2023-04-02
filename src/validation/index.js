import {object,string} from "yup";

export const form1Val = object({
    name:string().required().max(10),
    surname:string().required().max(20)
})


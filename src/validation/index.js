import {object,string,} from "yup";

export const form1Val = object({
    name:string().required().max(10),
    surname:string().required().max(20),
   
})

export const form2Val = object({
    email:string().required().max(30),
    number:string().required().max(30)
})

export const form3Val = object({
    date:string().required().max(30),
    adress:string().required().max(50)
})

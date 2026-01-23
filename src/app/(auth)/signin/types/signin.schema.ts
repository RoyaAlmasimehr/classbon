import {z} from 'zod'

export const signInSchema=z.object({
    mobile:z.string()
    .regex(/^09[0-9]{0}$/,{
        message:'شماره موبایل باید یازده رقم باشد و فرمت آن صحیح باشد'
    })
})
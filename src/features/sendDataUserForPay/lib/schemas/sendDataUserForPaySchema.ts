import {z} from 'zod'

export const sendDataUserForPaySchema = z.object({
    fullName: z.string().trim().min(1, 'Обязательное поле'),
    phoneNumber: z.string().regex(
        /^\+996\s?\d{3}\s?\d{3}\s?\d{3}$/,
        'Некорректный номер телефона'
    ),
    email: z.email('Некорректный email'),
})

export type ISendDataUserForPaySchema = z.infer<typeof sendDataUserForPaySchema>
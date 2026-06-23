'use client'

import styles from './FormSendDataUserForPay.module.scss'
import {LabelInput} from "@/shared";
import {useTranslations} from "next-intl";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {ISendDataUserForPaySchema, sendDataUserForPaySchema} from "../lib";

function FormSendDataUserForPay() {
    const localizer = useTranslations()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ISendDataUserForPaySchema>({
        resolver: zodResolver(sendDataUserForPaySchema),
        defaultValues: {
            fullName: '',
            phoneNumber: '',
            email: '',
        },
    });

    const onSubmit = (data: ISendDataUserForPaySchema) => {
        console.log(data);
    };

    return (
        <form
            className={styles.form}
            onSubmit={handleSubmit(onSubmit)}
            id={'payment-form'}
        >
            <LabelInput
                label={localizer('fullName')}
                placeholder="Иванов Иван Иванович"
                {...register('fullName')}
                error={errors.fullName?.message}
            />

            <LabelInput
                label={localizer('phoneNumber')}
                placeholder="+996 555 123 456"
                {...register('phoneNumber')}
                error={errors.phoneNumber?.message}
            />

            <LabelInput
                label="Email"
                type="email"
                placeholder="example@mail.com"
                {...register('email')}
                error={errors.email?.message}
            />
        </form>
    );
}

export default FormSendDataUserForPay;
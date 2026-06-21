import styles from './FormSendDataUserForPay.module.scss'
import {LabelInput} from "@/shared";
import {useTranslations} from "next-intl";

function FormSendDataUserForPay() {
    const localizer = useTranslations()

    return (
        <form className={styles.form}>
            <LabelInput label={localizer('fullName')} placeholder={'Иванов Иван Иванович'}/>
            <LabelInput label={localizer('phoneNumber')} type={'number'} placeholder={'+996 123 456 789'} />
            <LabelInput label={'Email'} type={'email'} placeholder={'emaple@mail.com'}/>
        </form>
    );
}

export default FormSendDataUserForPay;
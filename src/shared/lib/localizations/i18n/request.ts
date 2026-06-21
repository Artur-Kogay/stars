import {getRequestConfig} from 'next-intl/server';
import type {AbstractIntlMessages} from 'next-intl';

type Locale = 'ru' | 'en' | 'ky';

export default getRequestConfig(async ({ requestLocale }) => {
    const locale = await requestLocale;

    const typedLocale = (locale || 'ru') as Locale;

    const messages = (await import(
        `../${typedLocale}.json`
        )).default as AbstractIntlMessages;

    return {
        locale: typedLocale,
        messages
    };
});
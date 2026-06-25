import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "@/shared/lib/styles/globals.scss";
import styles from './Home.module.scss';
import {Footer, Header} from '@/widgets';
import {ThemeProvider} from "next-themes";
import {NextIntlClientProvider} from "next-intl";
import {getMessages} from "next-intl/server";
import {SearchOverlay} from '@/widgets'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stars",
  description: "Marketplace for artists",
};

async function LocaleLayout({children, params,}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const {locale} = await params;
    const messages = await getMessages();

    return (
        <html
            lang={locale}
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            suppressHydrationWarning
        >
        <body className={'flex flex-col'}>
        <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
            <NextIntlClientProvider messages={messages}>
                <SearchOverlay/>
                <div className={styles.wrapper}>
                    <Header/>
                    <main className={'flex-1'}>{children}</main>
                    <Footer/>
                </div>
            </NextIntlClientProvider>
        </ThemeProvider>
        </body>
        </html>
    );
}

export default LocaleLayout
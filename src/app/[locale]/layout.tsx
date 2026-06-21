import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "@/shared/lib/styles/globals.scss";
import styles from './Home.module.scss';
import {Footer, Header} from '@/widgets';
import {ThemeProvider} from "next-themes";
import {NextIntlClientProvider} from "next-intl";
import {getMessages} from "next-intl/server";

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

export default async function LocaleLayout({
                                             children,
                                             params,
                                           }: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
      <html
          lang={locale} // 👈 Подставляем динамически вместо статичного "en"
          className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
          suppressHydrationWarning
      >
      <body>
      <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
        <NextIntlClientProvider messages={messages}>
          <div className={styles.wrapper}>
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </ThemeProvider>
      </body>
      </html>
  );
}
import type {Metadata} from 'next';
import {Nunito_Sans} from 'next/font/google';
import './globals.css';
import {ThemeProvider} from '@/components/theme-provider';

const nunitoSans = Nunito_Sans({
    variable: '--ff-nunito-sans',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Countries',
    description: 'Countries application ',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${nunitoSans.variable}  antialiased`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}

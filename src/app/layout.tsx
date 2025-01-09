import type { Metadata } from "next";
import "./globals.scss";
import "./custom.scss";
import { ThemeProvider } from "../components/ThemeProvider";
import localFont from "next/font/local";

const Abadi = localFont({
	src: "./assets/fonts/abadi-mt-pro.ttf",
	variable: "--font-abadi",
});
const AbadiBold = localFont({
	src: "./assets/fonts/abadi-mt-pro-bold.ttf",
	variable: "--font-abadi-bold",
});
export const metadata: Metadata = {
	title: "rm | Portfolio",
	description: "Created by RMS",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>

            <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
          
			</head>
			<body
				className={`${Abadi.variable} ${AbadiBold.variable} font-abadi antialiased bg-stone-200 dark:bg-zinc-900 text-stone-900 dark:text-stone-200`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}

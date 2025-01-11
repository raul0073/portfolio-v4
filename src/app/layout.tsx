import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "../components/Theme/ThemeProvider";
import "./globals.scss";

const Abadi = localFont({
	src: "./assets/fonts/abadi-mt-pro.ttf",
	variable: "--font-abadi",
});
const AbadiBold = localFont({
	src: "./assets/fonts/abadi-mt-pro-bold.ttf",
	variable: "--font-abadi-bold",
});
const AxureFont = localFont({
	src: "./assets/fonts/7f68a670100a48f475fc330a0eb0cc92.ttf",
	variable: "--font-axure",
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
				<link
					rel="stylesheet"
					type="text/css"
					href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
				/>
					<script
					defer
					src="https://cloud.umami.is/script.js"
					data-website-id="202d637c-95fe-43d9-b27b-1751a1e91ced"></script>
			</head>
			<body
				className={`${Abadi.variable} ${AbadiBold.variable} ${AxureFont.variable} font-abadi antialiased bg-stone-200 dark:bg-zinc-900 text-stone-900 dark:text-stone-200`}>
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

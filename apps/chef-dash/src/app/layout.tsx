import type { Metadata } from "next";
import { Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
	variable: "--font-jakarta",
	subsets: ["latin"],
	weight: ["400", "700", "800"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
	weight: ["400", "600"],
});

export const metadata: Metadata = {
	title: "CHEF // OPERATOR DASH",
	description:
		"Tactical telemetry and control surface for the Chef DSP monorepo.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${jakarta.variable} ${geistMono.variable} antialiased selection:bg-aviation selection:text-cream min-h-[100dvh] flex flex-col`}
			>
				{children}
			</body>
		</html>
	);
}

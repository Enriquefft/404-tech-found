import { Inter, Orbitron } from "next/font/google";
export const orbitron = Orbitron({
	subsets: ["latin"],
	variable: "--font-mono",
});
export const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

import { Montserrat, Inter } from "next/font/google";

// Montserrat is a variable font — do NOT specify individual weights.
// Let it load the full weight axis for correct rendering on Chrome/Windows.
export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "block",
});

// Inter is also a variable font.
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "block",
});

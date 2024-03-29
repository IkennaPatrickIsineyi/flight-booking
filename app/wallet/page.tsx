import WalletPage from "@/components/walletPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wallet | Thriller",
  description: "Wallet section of Thriller Travels",
};

export default function Page() {
  return <WalletPage />;
}

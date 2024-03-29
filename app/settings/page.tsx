import SettingsPage from "@/components/settingsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settings | Thriller",
  description: "Settings section of Thriller Travels",
};

export default function Page() {
  return <SettingsPage />;
}

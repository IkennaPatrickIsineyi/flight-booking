
import DashboardPage from "@/components/dashboardPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thriller",
  description: "Welcome to Thriller Travels",
};

export default function Page() {
  return <DashboardPage />;
}

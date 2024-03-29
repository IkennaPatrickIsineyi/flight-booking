import ReportsPage from "@/components/reportsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reports | Thriller",
  description: "Reports section of Thriller Travels",
};

export default function Page() {
  return <ReportsPage />;
}

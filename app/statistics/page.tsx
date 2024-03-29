import StatisticsPage from "@/components/statisticsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Statistics | Thriller",
  description: "Statistics section of Thriller Travels",
};

export default function Page() {
  return <StatisticsPage />;
}

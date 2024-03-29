
import FlightsPage from "@/components/flightsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flights | Thriller",
  description: "Flights section of Thriller Travels",
};

export default function Page() {
  return <FlightsPage />;
}

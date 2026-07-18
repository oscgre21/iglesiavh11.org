import { Hero } from "@/components/sections/Hero";
import { Welcome } from "@/components/sections/Welcome";
import { Schedule } from "@/components/sections/Schedule";
import { HistoryTeaser } from "@/components/sections/HistoryTeaser";
import { VideoWelcome } from "@/components/sections/VideoWelcome";
import { InfoIcons } from "@/components/sections/InfoIcons";

export default function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <Schedule />
      <HistoryTeaser />
      <VideoWelcome />
      <InfoIcons />
    </>
  );
}

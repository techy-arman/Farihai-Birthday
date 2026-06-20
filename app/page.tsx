import JourneyExperience from "@/components/journey/JourneyExperience";
import { getJourneyContent } from "@/lib/content";

export default function Home() {
  const content = getJourneyContent();

  return <JourneyExperience content={content} />;
}

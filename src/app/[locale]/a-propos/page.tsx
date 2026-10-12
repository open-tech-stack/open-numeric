import {
  AboutHero,
  AboutMission,
  AboutValues,
  AboutStats,
  AboutTeam,
  AboutCta,
} from "@/components/about";
import { getTeamMembers } from "@/lib/endpoints";

export default async function AboutPage() {
  const teamMembers = await getTeamMembers();

  return (
    <>
      <AboutHero />
      <AboutMission />
      <AboutValues />
      <AboutStats />
      <AboutTeam members={teamMembers} />
      <AboutCta />
    </>
  );
}
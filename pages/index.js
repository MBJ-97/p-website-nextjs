import HeroSection from "../components/HeroSection";
import WorkSection from "../components/WorkSection";
import SkillsSection from "../components/SkillsSection";
import GetInTouchSection from "../components/getInTouchSection";

export default function Home() {
  return (
    <div className="mx-auto">
      <HeroSection />
      <WorkSection />
      <SkillsSection />
      <GetInTouchSection />
    </div>
  );
}

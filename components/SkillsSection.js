import Image from "next/image";
import next_white from "../public/images/skills/next_white.png";
import next from "../public/images/skills/next.png";
import { useTheme } from "next-themes";

export default function SkillsSection() {
  const { theme, setTheme } = useTheme();

  const SKILLS = [
    {
      name: "HTML",
      image: "html",
      width: "72",
      height: "72",
    },
    {
      name: "CSS",
      image: "css",
      width: "63",
      height: "72",
    },
    {
      name: "JavaScript",
      image: "js",
      width: "72",
      height: "72",
    },
    {
      name: "React",
      image: "react",
      width: "82",
      height: "72",
    },
    {
      name: "PHP",
      image: "php",
      width: "105",
      height: "72",
    },
    {
      name: "Git",
      image: "git",
      width: "160",
      height: "72",
    },
    {
      name: "JAMstack",
      image: "jamstack",
      width: "72",
      height: "72",
    },
    {
      name: "Figma",
      image: "figma",
      width: "46",
      height: "72",
    },
    {
      name: "Meta Ads",
      image: "meta",
      width: "105",
      height: "72",
    },
  ];
  return (
    <div className="32">
      <h2 className="text-2xl md:text-4xl font-semibold my-10">
        Skills & Tools
      </h2>

      <div className="hwrap flex items-center">
        <div className="hmove">
          {SKILLS.map((i) => (
            <div className="hitem" key={i}>
              <div className="item-box">
                {" "}
                {/* here I should make the two ele on extremes */}
                <Image
                  src={`/images/skills/${i.image}.png`}
                  width={i.width}
                  height={i.height}
                />
                <p>{i.name}</p>
              </div>
            </div>
          ))}
          <div className="hitem">
            {theme === "dark" ? (
              <Image src={next_white} width={105} height={72}></Image>
            ) : (
              <Image src={next} width={105} height={72}></Image>
            )}

            <p>NextJS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

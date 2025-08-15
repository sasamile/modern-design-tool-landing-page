import Tag from "./common/Tag";
import figmaIcon from "@/public/images/figma-logo.svg";
import notionIcon from "@/public/images/notion-logo.svg";
import slackIcon from "@/public/images/slack-logo.svg";
import relumeIcon from "@/public/images/relume-logo.svg";
import framerIcon from "@/public/images/framer-logo.svg";
import githubIcon from "@/public/images/github-logo.svg";
import Image from "next/image";
import IntegrationsColumn from "./common/IntegrationsColumn";

const integrations = [
  {
    name: "Figma",
    icon: figmaIcon,
    description: "Figma is a collaborative interface design tool.",
  },
  {
    name: "Notion",
    icon: notionIcon,
    description: "Notion is an all-in-one workspace for notes and docs.",
  },
  {
    name: "Slack",
    icon: slackIcon,
    description: "Slack is a powerful team communication platform.",
  },
  {
    name: "Relume",
    icon: relumeIcon,
    description: "Relume is a no-code website builder and design system.",
  },
  {
    name: "Framer",
    icon: framerIcon,
    description: "Framer is a professional website prototyping tool.",
  },
  {
    name: "GitHub",
    icon: githubIcon,
    description: "GitHub is the leading platform for code collaboration.",
  },
];
export type integrationType = typeof integrations;

export default function Integrations() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 items-center lg:gap-16">
          <div>
            <Tag>Integrations</Tag>

            <h2 className="text-6xl font-medium mt-6 ">
              Plays well with <span className="text-lime-400">others</span>
            </h2>
            <p className="text-white/50 mt-4 text-lg">
              Layer seamlessly connects with your favorite tools makint easy
              plug intro any collaborate and platforms.
            </p>
          </div>
          <div>
            <div className="h-[400px] lg:h-[800px] overflow-hidden grid md:grid-cols-2 mt-8 lg:mt-0 gap-4 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] ">
                <IntegrationsColumn integrations={integrations} />
                <IntegrationsColumn
                  integrations={integrations.slice().reverse()}
                  className="hidden md:flex"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

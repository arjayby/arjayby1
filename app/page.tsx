import { ArrowUpRight } from "lucide-react";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const profile = {
  name: "Arjay",
  title: "Software Developer",
  subtitle: "& Product Builder.",
  intro:
    "I build design tools for developers. Mostly with React and Next.js.",
  about: (
    <>
      I&apos;m a frontend engineer based in Philippines. I build design tools for
      developers. I care a lot about how they look and
      feel. These days, I've been exploring better agentic workflows and building{" "}
      <a
        href="https://agentkogei.vercel.app/"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-1"
      >
        <img
          src="/agentkogei.svg"
          alt=""
          aria-hidden="true"
          className="size-3.5 rounded-sm"
        />
        AgentKogei
      </a>
      ,
      a free, open source design system collection for React and Next.js. Peaked Masters rank in both <a href="https://www.ea.com/games/apex-legends" target="_blank">Apex</a> and <a href="https://www.leagueoflegends.com/" target="_blank">League</a>.
    </>
  ),
  links: {
    resume: "#",
    call: "https://cal.com/arjayby/30min",
  },
};

const experience = [
  {
    company: "Bounty",
    role: "Software Developer",
    period: "2023 – 2024",
    current: false,
  },
  {
    company: "Advance Intelligence Group",
    role: "Frontend Engineer",
    period: "2021 – 2023",
    current: false,
  },
  {
    company: "StackTrek",
    role: "Software Engineer",
    period: "2018 – 2021",
    current: false,
  },
];

const projects = [
  {
    name: "AgentKogei",
    icon: "/agentkogei.svg",
    type: "Open source",
    description: "Complete design systems for coding agents. One visual direction across every screen.",
    href: "https://agentkogei.vercel.app/",
  },
  {
    name: "Aeri UI",
    icon: "/aeriui.svg",
    type: "Open source",
    description:
      "An open-source collection of React components and UI blocks with playful animations, polished interactions, and fluid motion.",
    href: "https://aeri-ui.vercel.app/",
  },
];

const stack = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Base UI",
  "shadcn/ui",
  "Drizzle",
  "Neon",
  "Better Auth",
  "Polar",
  "Convex"
];

const tools = ["Codex", "Claude Code", "Cursor", "Mobbin", "GitHub", "Vercel", "Linear"];

export default function Home() {
  return (
    <main className="min-h-screen px-6 pb-20 pt-16 sm:px-10 sm:pb-24 sm:pt-24 lg:pt-32">
      <div className="mx-auto w-full max-w-170 px-6">
        <section aria-labelledby="portfolio-heading">
          <Avatar className="size-10 rounded-lg after:rounded-lg">
            <AvatarImage
              src="/me.jpg"
              alt={`Portrait of ${profile.name}`}
              className="rounded-lg"
            />
            <AvatarFallback className="rounded-lg">
              {profile.name.slice(0, 2)}
            </AvatarFallback>
          </Avatar>

          <h1
            id="portfolio-heading"
            className="mt-7 font-pixel text-[2.2rem] font-black leading-[0.98] tracking-tight text-foreground sm:mt-8 sm:text-[2.9rem]"
          >
            <span className="block">{profile.title}</span>
            <span className="block text-muted-foreground">
              {profile.subtitle}
            </span>
          </h1>

          <p className="mt-9 max-w-155 text-sm leading-6 text-muted-foreground">
            {profile.intro}
          </p>

          <nav
            aria-label="Portfolio links"
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Button
              render={
                <a href="https://www.linkedin.com/in/arjay-by-3a1b3a1b3a1b/" />
              }
              nativeButton={false}
              size="lg"
              className="rounded-full px-5"
            >
              Resume
              <ArrowUpRight aria-hidden="true" />
            </Button>
            <a
              href={profile.links.call}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "rounded-full px-5",
              )}
            >
              Book a call
            </a>
          </nav>
        </section>

        <section aria-labelledby="about-heading" className="mt-24">
          <h2
            id="about-heading"
            className="text-sm font-medium tracking-wider text-muted-foreground"
          >
            About
          </h2>

          <p className="mt-9 max-w-170 text-sm leading-6 text-muted-foreground [&_a]:font-medium [&_a]:text-foreground [&_a]:underline [&_a]:decoration-border [&_a]:underline-offset-4">
            {profile.about}
          </p>

          <div className="mt-10 flex flex-col gap-6">
            {experience.map((item) => (
              <div
                key={item.company}
                className="grid grid-cols-[1fr_auto] items-baseline gap-5 text-sm"
              >
                <p className="flex min-w-0 flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="font-semibold text-foreground">
                    {item.company}
                  </span>
                  {item.current ? (
                    <span
                      className="size-1.5 rounded-full bg-amber-400"
                      aria-label="Current role"
                    />
                  ) : null}
                  <span className="text-muted-foreground">{item.role}</span>
                </p>
                <time className="text-xs text-muted-foreground/60">
                  {item.period}
                </time>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="projects-heading" className="mt-24">
          <h2
            id="projects-heading"
            className="text-sm font-medium tracking-wider text-muted-foreground"
          >
            Projects
          </h2>

          <Accordion className="mt-6">
            {projects.map((project) => (
              <AccordionItem key={project.name} value={project.name}>
                <AccordionTrigger className="py-5 hover:no-underline">
                  <span className="flex min-w-0 flex-1 items-baseline justify-between gap-4 pr-3">
                    <span className="flex items-center gap-2 text-sm font-semibold text-foreground">
                      {"icon" in project && project.icon ? (
                        <img
                          src={project.icon}
                          alt=""
                          aria-hidden="true"
                          className="size-4 rounded-sm"
                        />
                      ) : null}
                      {project.name}
                    </span>
                    <span className="text-xs font-normal text-muted-foreground/60">
                      {project.type}
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="flex flex-col items-start gap-4 pb-6 pr-8 text-muted-foreground">
                  <p className="max-w-150 leading-6">
                    {project.description}
                  </p>
                  <a
                    href={project.href}
                    className="inline-flex items-center gap-1.5 font-medium text-foreground"
                  >
                    View project
                    <ArrowUpRight aria-hidden="true" className="size-3.5" />
                  </a>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <section
          aria-label="Stack and tools"
          className="mt-24 grid gap-12 sm:grid-cols-2 sm:gap-10"
        >
          <div>
            <h2 className="text-sm font-medium tracking-wider text-muted-foreground">
              Stack
            </h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {stack.map((item) => (
                <Badge key={item} variant="secondary">
                  {item}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-medium tracking-wider text-muted-foreground">
              Tools
            </h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {tools.map((item) => (
                <Badge key={item} variant="outline">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

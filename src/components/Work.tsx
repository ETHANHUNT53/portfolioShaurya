import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import project3Png from "../assets/project-3.png";

gsap.registerPlugin(ScrollTrigger);

type WorkItem = {
  title: string;
  category: string;
  description: string;
  image: string;
  link?: string;
};

const projectModules = import.meta.glob<{ default: string }>(
  "../assets/project-*.{png,svg,jpg,jpeg,webp}",
  { eager: true }
);

const projectImages: string[] = Object.entries(projectModules)
  .map(([path, mod]) => {
    const m = path.match(/project-(\d+)/i);
    return m ? { n: Number(m[1]), src: mod.default } : null;
  })
  .filter((x): x is { n: number; src: string } => x !== null)
  .sort((a, b) => a.n - b.n)
  .map((x) => x.src);

const workItems: WorkItem[] = [
  {
    title: "Sharp Industries",
    category: "Ecommerce Webapp",
    description:
      "Enterprise-style web tools and workflows: dashboards, integrations, and maintainable TypeScript/React frontends backed by Node services.",
    image: projectImages[0] ?? "/images/placeholder.webp",
    link: "https://www.sharpindustries.org.in/",
  },
  {
    title: "Gold By Monk",
    category: "E‑commerce · Product UI",
    description:
      "A polished shopping experience with responsive layouts, cart flows, and performance-minded asset loading.",
    image: projectImages[1] ?? "/images/placeholder.webp",
    link: "https://goldbymonk.vercel.app/",
  },
  {
    title: "Netflix GPT",
    category: "React · APIs · AI-assisted UX",
    description:
      "A Netflix-inspired browsing UI with search and recommendations patterns—modern React state, routing, and third-party API integration.",
    image: project3Png,
    link: "https://netflix-gpt-eight-ashen.vercel.app/",
  },
];

const Work = () => {
  useGSAP(() => {
    const mm = gsap.matchMedia();
    let desktopCleanup: (() => void) | undefined;

    mm.add("(min-width: 1025px)", () => {
      let translateX = 0;

      function setTranslateX() {
        const box = document.getElementsByClassName("work-box");
        const container = document.querySelector(".work-container");
        if (!box.length || !container) return;
        const rectLeft = container.getBoundingClientRect().left;
        const rect = box[0].getBoundingClientRect();
        const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
        const padding =
          parseInt(window.getComputedStyle(box[0]).padding || "0", 10) / 2;
        translateX =
          rect.width * box.length - (rectLeft + parentWidth) + padding;
      }

      setTranslateX();

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".work-section",
          start: "top top",
          end: `+=${translateX}`,
          scrub: true,
          pin: true,
          id: "work",
        },
      });

      timeline.to(".work-flex", {
        x: -translateX,
        ease: "none",
      });

      desktopCleanup = () => {
        timeline.kill();
        ScrollTrigger.getById("work")?.kill();
      };
    });

    return () => {
      desktopCleanup?.();
      mm.revert();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {workItems.map((item, index) => (
            <div className="work-box" key={item.title}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.category}</p>
                  </div>
                </div>
                <h4>Overview</h4>
                <p>{item.description}</p>
              </div>
              <WorkImage
                image={item.image}
                alt={item.title}
                link={item.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;

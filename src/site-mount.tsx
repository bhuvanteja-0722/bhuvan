import { createRoot } from "react-dom/client";
import AetherFlowHero from "../components/ui/aether-flow-hero";
import PathDrawingPortfolioHero from "../components/ui/path-drawing-portfolio-hero";
import WorksWheel from "../components/ui/works-wheel";

type Project = {
  title: string;
  url: string;
  liveUrl?: string;
  image: string;
};

declare global {
  interface Window {
    PORTFOLIO_DATA?: { projects?: Project[] };
  }
}

const nameRoot = document.getElementById("hero-name-root");
if (nameRoot) {
  createRoot(nameRoot).render(
    <PathDrawingPortfolioHero
      brand="Bhuvan Teja"
      eyebrow="AI + DATA SCIENCE · BENGALURU, INDIA"
      tagline="I turn data and ideas into useful software."
      fromColor="#ff3f58"
      toColor="#ffc1ae"
      fontSize={136}
      className="btp-name-draw"
    />,
  );
}

const aetherRoot = document.getElementById("hero-aether-root");
if (aetherRoot) {
  createRoot(aetherRoot).render(<AetherFlowHero particleDensity={0.82} />);
}

const wheelRoot = document.getElementById("works-wheel-root");
const projects = window.PORTFOLIO_DATA?.projects ?? [];
if (wheelRoot && projects.length) {
  createRoot(wheelRoot).render(
    <WorksWheel
      items={projects.map((project) => ({
        title: project.title,
        image: project.image,
        imageAlt: project.imageAlt,
        href: project.liveUrl || project.url,
        liveUrl: project.liveUrl,
        sourceUrl: project.url,
      }))}
      label="Selected work"
      action="Open project"
      className="works-wheel"
    />,
  );
}

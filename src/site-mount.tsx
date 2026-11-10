import { createRoot } from "react-dom/client";
import AetherFlowHero from "../components/ui/aether-flow-hero";
import { ContactIdCard } from "../components/ui/contact-id-card";
import PathDrawingPortfolioHero from "../components/ui/path-drawing-portfolio-hero";
import WorksWheel from "../components/ui/works-wheel";
import { AshenPress } from "./shaders/ashen-press/AshenPress";
import { UplinkLoader } from "./shaders/uplink-loader/UplinkLoader";

type Project = {
  title: string;
  url: string;
  liveUrl?: string;
  image?: string;
  imageAlt?: string;
  img?: string;
  cover?: string;
  thumbnail?: string;
};

declare global {
  interface Window {
    PORTFOLIO_DATA?: { projects?: Project[] };
    BTP_UPLINK?: { unmount: () => void };
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

const aetherRoot = document.getElementById("site-aether-root");
if (aetherRoot) {
  createRoot(aetherRoot).render(
    <AetherFlowHero className="site-aether-field" particleDensity={1.65} />,
  );
}

const credentialPressRoot = document.getElementById("credential-press-root");
if (credentialPressRoot) {
  createRoot(credentialPressRoot).render(
    <AshenPress className="credential-press-frame" />,
  );
}

const idCardRoot = document.getElementById("id-card-root");
if (idCardRoot) {
  createRoot(idCardRoot).render(<ContactIdCard />);
}

const uplinkLoaderRoot = document.getElementById("uplink-loader-root");
if (uplinkLoaderRoot && document.documentElement.classList.contains("intro-active")) {
  const uplinkApp = createRoot(uplinkLoaderRoot);
  uplinkApp.render(
    <UplinkLoader className="portfolio-uplink-loader" />,
  );
  window.BTP_UPLINK = { unmount: () => uplinkApp.unmount() };
}

const wheelRoot = document.getElementById("works-wheel-root");
const projects = window.PORTFOLIO_DATA?.projects ?? [];
const projectArtByTitle: Record<string, string> = {
  proofpass: "assets/project-art/data-network.jpg",
  "career signal": "assets/project-art/career-signal-live.jpg",
  "superrr selector": "assets/project-art/superrr-live.jpg",
  "superrr pressure dashboard": "assets/project-art/cricket-stadium.jpg",
  "the 4 pm hunger detective": "assets/project-art/hunger-detective-live.jpg",
  novaos: "assets/project-art/motherboard.jpg",
  flowpilot: "assets/project-art/analytics-laptop.jpg",
  spotwise: "assets/project-art/city-grid.jpg",
  "applied data science notebooks": "assets/project-art/analytics-laptop.jpg",
  "india cricket vision": "assets/project-art/india-cricket-live.jpg",
  "ai resume screening": "assets/project-art/resume-screening-live.jpg",
  "knowledge base q&a": "assets/project-art/pypal-live.jpg",
  recoverai: "assets/project-art/analytics-laptop.jpg",
  "outbreak agent demo": "assets/project-art/microorganisms.jpg",
  sevattrack: "assets/project-art/city-grid.jpg",
  "crop ai": "assets/project-art/rice-field.jpg",
  "flyrank ml": "assets/project-art/data-network.jpg",
  "flyrank ai · search intelligence": "assets/project-art/data-network.jpg",
  "razorpay track 3 · recoverai": "assets/project-art/analytics-laptop.jpg",
  "steer lab": "assets/project-art/steerlab-live.jpg",
  "baahubali · epic warrior": "assets/project-art/baahubali-temple.jpg",
  "smart scheduler": "assets/project-art/smart-scheduler-live.jpg",
};

function projectImage(project: Project) {
  return (
    project.image ||
    project.img ||
    project.cover ||
    project.thumbnail ||
    projectArtByTitle[project.title.trim().toLowerCase()] ||
    "assets/project-art/data-network.jpg"
  );
}

if (wheelRoot && projects.length) {
  createRoot(wheelRoot).render(
    <WorksWheel
      items={projects.map((project) => ({
        title: project.title,
        image: projectImage(project),
        imageAlt: project.imageAlt || `${project.title} project preview`,
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

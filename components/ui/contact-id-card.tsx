import { useEffect, useState } from "react";
import { IDCardLanyard } from "./id-card-lanyard";

export function ContactIdCard() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const host = document.getElementById("id-card-root");
    if (!host) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { rootMargin: "100px 0px", threshold: 0 },
    );
    observer.observe(host);
    return () => observer.disconnect();
  }, []);

  if (!visible) return null;

  return (
    <IDCardLanyard
      name="Bhuvan Teja"
      role="AI & Data Science"
      brand="Bhuvan Teja"
      brandTagline="AI / DATA SCIENCE"
      pillars={["Applied AI", "Data", "Software"]}
      location="Bengaluru, India"
      idNumber="BTP · AD24"
      validThru="2028"
      site="bhuvan-teja-portfolio.onrender.com"
      photoSrc="assets/bhuvan-id-portrait.jpg"
      photoAlt="Bhuvan Teja in a blue suit"
      githubUrl="https://github.com/bhuvanteja-0722"
      linkedinUrl="https://www.linkedin.com/in/bhuvanteja-ponakala-696206330/"
      instagramUrl="https://www.instagram.com/bhuvan_teja_0722/"
      anchorX="72%"
      anchorY={125}
      zIndex={2}
      className="idcl-contact-card"
      showHint
    />
  );
}

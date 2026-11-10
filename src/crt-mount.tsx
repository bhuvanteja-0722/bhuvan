import { createRoot, type Root } from "react-dom/client";
import { CrtBackground, type CrtVariant } from "./shaders/crt/CrtBackground";

declare global {
  interface Window {
    BTP_CRT?: {
      render: (variant: CrtVariant) => void;
      unmount: () => void;
    };
  }
}

const mount = document.getElementById("crt-react-root");
let root: Root | undefined;

window.BTP_CRT = {
  render(variant) {
    if (!mount) return;
    root ??= createRoot(mount);
    root.render(
      <CrtBackground
        variant={variant}
        speed={1.00}
        typeSpeed={1.00}
        motion={1.00}
        hue={0}
        saturation={1.00}
        brightness={1.00}
        opacity={1.00}
      />
    );
  },
  unmount() {
    root?.unmount();
    root = undefined;
  },
};

import type { DetailedHTMLProps, HTMLAttributes } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
        src?: string;
        environmentImage?: string;
        exposure?: string;
        cameraOrbit?: string;
        fieldOfView?: string;
        disableZoom?: boolean;
        interactionPrompt?: string;
      };
    }
  }
}

export {};
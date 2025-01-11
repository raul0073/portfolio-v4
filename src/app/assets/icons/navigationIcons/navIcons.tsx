import * as React from "react";
import { SVGProps } from "react";
const SvgHome = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M12 20c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8m0-18C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m-1 12h2v3h3v-5h2l-6-5-6 5h2v5h3v-3" />
  </svg>
);
export { SvgHome as IconHomeCircleOutline };

const SvgInfo = (props: SVGProps<SVGSVGElement>) => (
    <svg
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 192 512"
    {...props}
  >
    <path d="M48 80a48 48 0 1 1 96 0 48 48 0 1 1-96 0zM0 224c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v224h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h32V256H32c-17.7 0-32-14.3-32-32z" />
  </svg>
);
export { SvgInfo as IconInfo16 };



const SvgTimeline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M5 12c0 1.11-.89 2-2 2a2 2 0 1 1 2-2M4 2v6H2V2h2M2 22v-6h2v6H2M24 6v12c0 1.11-.89 2-2 2H10a2 2 0 0 1-2-2v-4l-2-2 2-2V6a2 2 0 0 1 2-2h12c1.11 0 2 .89 2 2m-2 0H10v4.83L8.83 12 10 13.17V18h12V6M12 9h8v2h-8V9m0 4h6v2h-6v-2z" />
  </svg>
);
export { SvgTimeline as IconTimelineTextOutline };



const SvgLayers = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
);
export { SvgLayers as IconLayers };

const SvgToTopbar = (props: SVGProps<SVGSVGElement>) => (
    <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
      <path fill="currentColor" fillOpacity={0.3} d="M8 16h8V9h3v10H5V9h3v7z" />
      <path fill="currentColor" d="M5 7h14V4H5v3z" />
    </svg>
  );
  export { SvgToTopbar as IconBorderTop };


  const SvgContact = (props: SVGProps<SVGSVGElement>) => (
    <svg
      width="1em"
      height="1em"
      fill="currentColor"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M20 0H4v2h16V0M4 24h16v-2H4v2M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m-8 2.75A2.25 2.25 0 0 1 14.25 9 2.25 2.25 0 0 1 12 11.25 2.25 2.25 0 0 1 9.75 9 2.25 2.25 0 0 1 12 6.75M17 17H7v-1.5c0-1.67 3.33-2.5 5-2.5s5 .83 5 2.5V17z" />
    </svg>
  );
  export { SvgContact as IconContacts };
import { Options } from "$fresh/plugins/twind.ts";
import { css } from "twind/css#css_directive";
import { Colors, GlobalStyle } from "@/styles/global.style.ts";

export default {
  selfURL: import.meta.url,
  darkMode: "class",
  hash: true,
  theme: {
    colors: Colors,
    extend: {
      fontFamily: {
        "montserrat": "Montserrat",
      },
    },
  },
  preflight: (preflight) =>
    css`
    ${preflight}
    ${GlobalStyle}
    `,
} as Options;

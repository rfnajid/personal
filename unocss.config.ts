import { defineConfig, presetWebFonts } from "unocss";
import { presetWind } from "@unocss/preset-wind";

export default defineConfig({
  presets: [
    presetWind(),
    presetWebFonts({
      provider: "google", // default provider
      fonts: {
        // these will extend the default theme
        sans: "Roboto",
        mono: ["Space Mono"],
      },
    }),
  ],
});

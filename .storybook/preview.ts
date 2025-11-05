import type { Preview } from "@storybook/nextjs-vite";
import "@/app/globals.css";
import { createElement } from "react";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "dark",
      values: [
        { name: "dark", value: "#1f1f23" },
        { name: "light", value: "#ffffff" },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: "todo",
    },
  },
  decorators: [
    (Story) => {
      return createElement(
        "div",
        { className: "dark min-h-screen" },
        createElement(Story)
      );
    },
  ],
};

export default preview;

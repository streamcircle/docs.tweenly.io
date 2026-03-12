import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://docs.tweenly.io",
  integrations: [
    starlight({
      title: "Tweenly",
      logo: {
        light: "./src/assets/logo_tweenly_light.svg",
        dark: "./src/assets/logo_tweenly_dark.svg",
        alt: "Tweenly",
        replacesTitle: true,
      },
      social: {
        facebook: "https://www.facebook.com/app.tween.ly/",
        linkedin: "https://www.linkedin.com/company/tween-ly/",
        youtube: "https://www.youtube.com/@Tweenly",
      },
      sidebar: [
        {
          label: "Getting Started",
          items: [
            { label: "Installation", link: "/getting-started/installation/" },
            {
              label: "Manage License",
              link: "/getting-started/manage-license/",
            },
            {
              label: "Wizard Tutorial",
              link: "/getting-started/wizard-tutorial/",
            },
            {
              label: "Export Options",
              link: "/getting-started/export-options/",
            },
            // { label: "Create Your First Graphics", link: "/getting-started/create-your-first-graphics/" },
          ],
        },
        {
          label: "Main Features",
          items: [
            { label: "Tickers", link: "/main-features/tickers/" },
            {
              label: "Image sequences",
              link: "/main-features/image-sequences/",
            },
            { label: "Code triggers", link: "/main-features/code-triggers/" },
            {
              label: "Data source & API control",
              link: "/main-features/data-source-api-control/",
            },
            {
              label: "Built-in Test App",
              link: "/main-features/built-in-test-app/",
            },
          ],
        },
        {
          label: "User Guide",
          items: [
            {
              label: "Application Overview",
              link: "/user-guide/application-overview",
            },
            { label: "Editor", link: "/user-guide/editor-overview/" },
            { label: "Gallery", link: "/user-guide/gallery-overview/" },
            { label: "Workspaces", link: "/user-guide/workspaces-overview/" },
            { label: "Profile", link: "/user-guide/profile-overview/" },
            { label: "Graphics Files", link: "/user-guide/graphics-files/" },
            { label: "Assets", link: "/user-guide/assets/" },
            {
              label: "Keyboard shortcuts",
              link: "/user-guide/keyboard-shortcuts/",
            },
          ],
        },
        // {
        //     label: "User Guide",
        //     autogenerate: { directory: "user-guide" },
        // },
        {
          label: "Release Notes",
          collapsed: true,
          items: [
            {
              label: "v1.12.0",
              link: "/release-notes/v1120",
              badge: { text: "current", variant: "success" },
            },
            { label: "v1.11.0", link: "/release-notes/v1110" },
            { label: "v1.10.2", link: "/release-notes/v1102" },
            { label: "v1.10.1", link: "/release-notes/v1101" },
            { label: "v1.9.3", link: "/release-notes/v193" },
            { label: "v1.9.2", link: "/release-notes/v192" },
            { label: "v1.9.0", link: "/release-notes/v190" },
            { label: "v1.8.0", link: "/release-notes/v180" },
            { label: "v1.7.0", link: "/release-notes/v170" },
            { label: "v1.6.1", link: "/release-notes/v161" },
            { label: "v1.6.0", link: "/release-notes/v160" },
            { label: "v1.5.0", link: "/release-notes/v150" },
            { label: "v1.4.4", link: "/release-notes/v144" },
            { label: "v1.4.3", link: "/release-notes/v143" },
            { label: "v1.4.2", link: "/release-notes/v142" },
            { label: "v1.4.1", link: "/release-notes/v141" },
            { label: "v1.4.0", link: "/release-notes/v140" },
          ],
        },
        {
          label: "Appendices",
          autogenerate: { directory: "appendices" },
        },
        {
          label: "Support & Contact",
          link: "/support-and-contact/",
        },
      ],
      // customCss: ["@fontsource/roboto", "./src/tailwind.css"],
      customCss: ["@fontsource/inter", "./src/tailwind.css"],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});

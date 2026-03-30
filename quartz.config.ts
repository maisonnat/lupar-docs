import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Lupar Docs — Quartz 4 Configuration
 *
 * Knowledge Base para compliance officers y compradores del SaaS.
 * Generado con Quartz 4 + Obsidian Flavored Markdown.
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Lupar Docs",
    pageTitleSuffix: " — Shadow AI Compliance",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "es-ES",
    baseUrl: "lupar-docs.pages.dev",
    ignorePatterns: ["private", "templates", ".obsidian", "drafts"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Inter",
        body: "Inter",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#fefefe",
          lightgray: "#f0f0f0",
          gray: "#b8b8b8",
          darkgray: "#4e4e4e",
          dark: "#1a1a2e",
          secondary: "#dc2626",
          tertiary: "#7c3aed",
          highlight: "rgba(220, 38, 38, 0.08)",
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#0f0f1a",
          lightgray: "#1e1e2e",
          gray: "#646464",
          darkgray: "#e4e4e7",
          dark: "#fafafa",
          secondary: "#ef4444",
          tertiary: "#a78bfa",
          highlight: "rgba(239, 68, 68, 0.1)",
          textHighlight: "#b3aa0288",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      Plugin.CustomOgImages(),
    ],
  },
}

export default config

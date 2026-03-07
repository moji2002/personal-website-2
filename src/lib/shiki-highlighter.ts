import { createHighlighterCore } from "shiki/core";
import { createJavaScriptRegexEngine } from "shiki/engine/javascript";

/** Map common aliases to Shiki lang IDs we've loaded */
const LANG_ALIASES: Record<string, string> = {
  ts: "typescript",
  cts: "typescript",
  mts: "typescript",
  js: "javascript",
  mjs: "javascript",
  cjs: "javascript",
  sh: "bash",
  shell: "bash",
  shellscript: "bash",
  md: "markdown",
  py: "python",
  yml: "yaml",
  gql: "graphql",
};

const LOADED_LANGS = new Set([
  "typescript",
  "javascript",
  "json",
  "jsonc",
  "bash",
  "markdown",
  "html",
  "css",
  "python",
  "yaml",
  "toml",
  "sql",
  "graphql",
  "diff",
  "jsx",
  "tsx",
]);

const highlighterPromise = createHighlighterCore({
  themes: [
    import("@shikijs/themes/github-light"),
    import("@shikijs/themes/github-dark"),
  ],
  langs: [
    import("@shikijs/langs/typescript"),
    import("@shikijs/langs/javascript"),
    import("@shikijs/langs/json"),
    import("@shikijs/langs/jsonc"),
    import("@shikijs/langs/bash"),
    import("@shikijs/langs/markdown"),
    import("@shikijs/langs/html"),
    import("@shikijs/langs/css"),
    import("@shikijs/langs/python"),
    import("@shikijs/langs/yaml"),
    import("@shikijs/langs/toml"),
    import("@shikijs/langs/sql"),
    import("@shikijs/langs/graphql"),
    import("@shikijs/langs/diff"),
    import("@shikijs/langs/jsx"),
    import("@shikijs/langs/tsx"),
  ],
  engine: createJavaScriptRegexEngine(),
});

export async function highlightCode(
  code: string,
  lang: string
): Promise<string> {
  const normalizedLang = lang.toLowerCase().replace(/^language-/, "");
  const resolvedLang = LANG_ALIASES[normalizedLang] ?? normalizedLang;
  const supportedLang = LOADED_LANGS.has(resolvedLang) ? resolvedLang : "plaintext";

  const highlighter = await highlighterPromise;

  try {
    if (supportedLang === "plaintext") {
      return escapeHtml(code);
    }

    const html = highlighter.codeToHtml(code, {
      lang: supportedLang,
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
      defaultColor: false,
    });

    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    return doc.querySelector("code")?.innerHTML ?? escapeHtml(code);
  } catch {
    return escapeHtml(code);
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

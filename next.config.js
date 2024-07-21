const { remarkCodeHike } = require("@code-hike/mdx");

const withMDX = require("@next/mdx")({
  remarkPlugins: [[remarkCodeHike, { theme: "nord" }]],
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
  output: "export",
  distDir: "dist",
};

module.exports = withMDX(nextConfig);

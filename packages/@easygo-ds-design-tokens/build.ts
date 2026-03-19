import StyleDictionary from "style-dictionary";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const packageRoot = path.resolve(__dirname, "..");
const tokensDir = path.join(packageRoot, "src", "tokens");
const toGlob = (...segments: string[]) =>
  path.join(tokensDir, ...segments).replace(/\\/g, "/");
const brands = ["kick", "stake", "moon", "upcoming"] as const;

type BrandName = (typeof brands)[number];

const baseSources = [toGlob("core/**/*.json"), toGlob("primitives/**/*.json"), toGlob("semantics/**/*.json")];

const createBrandConfig = (brand: BrandName) => ({
  source: [...baseSources, toGlob(`products/${brand}.json`)],
  platforms: {
    css: {
      transformGroup: "css",
      buildPath: path.join(packageRoot, "build", brand, "/"),
      files: [
        {
          destination: "tokens.css",
          format: "css/variables",
          options: { selector: ":root" }
        },
        {
          destination: "tokens.json",
          format: "json/nested"
        }
      ]
    }
  }
});

async function buildAll() {
  for (const brand of brands) {
    const instance = new StyleDictionary();
    const dictionary = await instance.extend(createBrandConfig(brand));
    console.log(`\nBuilding tokens for ${brand}...`);
    await dictionary.buildAllPlatforms();
  }
}

buildAll().catch((error) => {
  console.error(error);
  process.exit(1);
});

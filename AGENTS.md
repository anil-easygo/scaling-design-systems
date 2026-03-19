# AGENTS.md — Easygo DS Multi-Brand POC (Kick + Stake) using Style Dictionary + Tailwind

You are Codex. Rebuild this project **from scratch** as a stable multi-brand design system POC.

## High-level Goal

We have:
- **Kick** product built with **React + TypeScript**
- **Stake** product built with **Svelte + TypeScript**

We will ship a **Button** component in **two packages**:
- `@easygo-ds-kick-button` (React)
- `@easygo-ds-stake-button` (Svelte)

Both must have the **same conceptual API** and look correct, but values differ by brand (multi-brand theming).

The system uses:
- **Style Dictionary** to generate tokens (CSS variables + optional TS types/JSON)
- **Tailwind** to style the components (Tailwind classes in component code)
- **Storybook** for both React and Svelte, including **docs pages** that explain token layers and show the Button.

## Required Folder Structure (follow exactly)

/packages
  /@easygo-ds-design-tokens
    /src
      /tokens
        /core
          /dimension.json
        /primitives
          /border-width.json
          /opacity.json
          /radius.json
          /sizes.json
          /spacing.json
        /products
          /kick.json
          /stake.json
          /moon.json
          /upcoming.json
        /semantics
          /colors.(json|ts)
          /typography.(json|ts)
  /components
    /@easygo-ds-kick-button
    /@easygo-ds-stake-button
package.json


You can add `apps/` for Storybooks (recommended), but tokens and component packages must exist under the structure above.

## Tooling Constraints

- Use **pnpm workspaces** for monorepo management.
- Use **TypeScript** everywhere.
- Use **Vite-based Storybook** for React and Svelte.
- Use **Tailwind** as the styling authoring method in button packages.
- Tokens are the source of truth; components should consume tokens via CSS variables and Tailwind theme mapping.

## Token Architecture

We will use the layers implied by your directories:

1) **Core / primitives** (shared across brands)
2) **Semantics** (stable meaning-based keys, independent of brand)
3) **Products** (brand/product overrides: Kick/Stake/Moon/Upcoming)

### Contract rules (important)
- Components MUST reference **semantic tokens** (e.g. semantic color/typography) and **core primitives** (e.g. spacing, radius, size).
- Products override values so **same semantic token key** can resolve differently per brand.
- The goal is that the Button code does not change when brand changes.

### Your provided token sources (must be included)
Create these exact files under `packages/@easygo-ds-design-tokens/src/tokens/...`:

**core/dimension.json**
```json
{
  "core": {
    "dimension": {
      "base": {
        "$type": "dimension",
        "$value": "0.25rem",
        "$description": "Base spacing step. Brands can override this value."
      }
    }
  }
}


primitives/border-width.json
{
  "primitives": {
    "border": {
      "width": {
        "$description": "Border width primitives.",
        "default": { "$type": "dimension", "$value": "1px" },
        "strong": { "$type": "dimension", "$value": "2px" }
      }
    }
  }
}

primitives/opacity.json
{
  "primitives": {
    "opacity": {
      "$description": "Opacity primitives used across the system.",
      "disabled": { "$type": "opacity", "$value": "0.38" },
      "subtle": { "$type": "opacity", "$value": "0.6" },
      "default": { "$type": "opacity", "$value": "1" }
    }
  }
}

primitives/radius.json
{
  "core": {
    "radius": {
      "none": { "$value": "0rem" },
      "sm": { "$value": "0.25rem" },
      "md": { "$value": "0.5rem" },
      "full": { "$value": "9999px" }
    }
  }
}


primitives/sizes.json
{
  "core": {
    "size": {
      "$description": "Primitive size scale derived from --dimension.",
      "xs": { "$type": "dimension", "$value": "calc(var(--dimension) * 2)" },
      "sm": { "$type": "dimension", "$value": "calc(var(--dimension) * 4)" },
      "md": { "$type": "dimension", "$value": "calc(var(--dimension) * 6)" },
      "lg": { "$type": "dimension", "$value": "calc(var(--dimension) * 8)" },
      "xl": { "$type": "dimension", "$value": "calc(var(--dimension) * 10)" },
      "2xl": { "$type": "dimension", "$value": "calc(var(--dimension) * 12)" },
      "3xl": { "$type": "dimension", "$value": "calc(var(--dimension) * 14)" }
    }
  }
}


primitives/spacing.json
{
  "core": {
    "space": {
      "0": { "$type": "dimension", "$value": "0" },
      "0.5": { "$type": "dimension", "$value": "calc(var(--dimension) * 0.5)" },
      "1": { "$type": "dimension", "$value": "calc(var(--dimension) * 1)" },
      "1.5": { "$type": "dimension", "$value": "calc(var(--dimension) * 1.5)" },
      "2": { "$type": "dimension", "$value": "calc(var(--dimension) * 2)" },
      "3": { "$type": "dimension", "$value": "calc(var(--dimension) * 3)" },
      "4": { "$type": "dimension", "$value": "calc(var(--dimension) * 4)" },
      "5": { "$type": "dimension", "$value": "calc(var(--dimension) * 5)" },
      "6": { "$type": "dimension", "$value": "calc(var(--dimension) * 6)" },
      "8": { "$type": "dimension", "$value": "calc(var(--dimension) * 8)" },
      "10": { "$type": "dimension", "$value": "calc(var(--dimension) * 10)" },
      "12": { "$type": "dimension", "$value": "calc(var(--dimension) * 12)" }
    }
  }
}

Semantic tokens (create minimal set for Button)

Create src/tokens/semantics/colors.(json or ts) and src/tokens/semantics/typography.(json or ts).

This current Stake color primitives

import { Tokens } from "style-dictionary";

const colorTokens: Tokens = {
  color: {
    attributes: { toggleCategory: "color" },
    blue: {
      "50": {
        $type: "color",
        $value: "#f1faff",
      },
      "100": {
        $type: "color",
        $value: "#e4f4fe",
      },
      "150": {
        $type: "color",
        $value: "#d5edfe",
      },
      "200": {
        $type: "color",
        $value: "#c6e6ff",
      },
      "250": {
        $type: "color",
        $value: "#b6ddfb",
      },
      "300": {
        $type: "color",
        $value: "#a7d7ff",
      },
      "350": {
        $type: "color",
        $value: "#90cbfd",
      },
      "400": {
        $type: "color",
        $value: "#7bc0ff",
      },
      "450": {
        $type: "color",
        $value: "#64b2fa",
      },
      "500": {
        $type: "color",
        $value: "#4aa4fb",
      },
      "550": {
        $type: "color",
        $value: "#2895fa",
      },
      "600": {
        $type: "color",
        $value: "#037fef",
      },
      "650": {
        $type: "color",
        $value: "#1475e1",
      },
      "700": {
        $type: "color",
        $value: "#0168cb",
      },
      "750": {
        $type: "color",
        $value: "#0359b0",
      },
      "800": {
        $type: "color",
        $value: "#0d519d",
      },
      "850": {
        $type: "color",
        $value: "#044588",
      },
      "900": {
        $type: "color",
        $value: "#0a386d",
      },
      "950": {
        $type: "color",
        $value: "#08294f",
      },
    },
    green: {
      "50": {
        $type: "color",
        $value: "#eeffee",
      },
      "100": {
        $type: "color",
        $value: "#deffde",
      },
      "150": {
        $type: "color",
        $value: "#d3ffd4",
      },
      "200": {
        $type: "color",
        $value: "#c4ffc7",
      },
      "250": {
        $type: "color",
        $value: "#a1ffa5",
      },
      "300": {
        $type: "color",
        $value: "#79fc7f",
      },
      "350": {
        $type: "color",
        $value: "#5ef45a",
      },
      "400": {
        $type: "color",
        $value: "#37f140",
      },
      "450": {
        $type: "color",
        $value: "#03e625",
      },
      "500": {
        $type: "color",
        $value: "#01d612",
      },
      "550": {
        $type: "color",
        $value: "#00be0e",
      },
      "600": {
        $type: "color",
        $value: "#0fa112",
      },
      "650": {
        $type: "color",
        $value: "#078e0f",
      },
      "700": {
        $type: "color",
        $value: "#007d09",
      },
      "750": {
        $type: "color",
        $value: "#0c6f13",
      },
      "800": {
        $type: "color",
        $value: "#0e6713",
      },
      "850": {
        $type: "color",
        $value: "#0c5b12",
      },
      "900": {
        $type: "color",
        $value: "#04490a",
      },
      "950": {
        $type: "color",
        $value: "#003305",
      },
    },
    yellow: {
      "50": {
        $type: "color",
        $value: "#fff5eb",
      },
      "100": {
        $type: "color",
        $value: "#ffe6c7",
      },
      "150": {
        $type: "color",
        $value: "#ffdcad",
      },
      "200": {
        $type: "color",
        $value: "#ffd08a",
      },
      "250": {
        $type: "color",
        $value: "#fec368",
      },
      "300": {
        $type: "color",
        $value: "#ffb947",
      },
      "350": {
        $type: "color",
        $value: "#ffb132",
      },
      "400": {
        $type: "color",
        $value: "#ffa91f",
      },
      "450": {
        $type: "color",
        $value: "#fd9d05",
      },
      "500": {
        $type: "color",
        $value: "#f69200",
      },
      "550": {
        $type: "color",
        $value: "#e58200",
      },
      "600": {
        $type: "color",
        $value: "#cb6804",
      },
      "650": {
        $type: "color",
        $value: "#b75b06",
      },
      "700": {
        $type: "color",
        $value: "#a44f00",
      },
      "750": {
        $type: "color",
        $value: "#924d0c",
      },
      "800": {
        $type: "color",
        $value: "#86490d",
      },
      "850": {
        $type: "color",
        $value: "#78440d",
      },
      "900": {
        $type: "color",
        $value: "#623607",
      },
      "950": {
        $type: "color",
        $value: "#452702",
      },
    },
    red: {
      "50": {
        $type: "color",
        $value: "#fff0f1",
      },
      "100": {
        $type: "color",
        $value: "#ffe2e4",
      },
      "150": {
        $type: "color",
        $value: "#ffd9dc",
      },
      "200": {
        $type: "color",
        $value: "#ffcad0",
      },
      "250": {
        $type: "color",
        $value: "#ffb6be",
      },
      "300": {
        $type: "color",
        $value: "#ff9fa9",
      },
      "350": {
        $type: "color",
        $value: "#ff8391",
      },
      "400": {
        $type: "color",
        $value: "#ff697c",
      },
      "450": {
        $type: "color",
        $value: "#ff4e68",
      },
      "500": {
        $type: "color",
        $value: "#fd3252",
      },
      "550": {
        $type: "color",
        $value: "#f00f41",
      },
      "600": {
        $type: "color",
        $value: "#da0736",
      },
      "650": {
        $type: "color",
        $value: "#c80833",
      },
      "700": {
        $type: "color",
        $value: "#b30230",
      },
      "750": {
        $type: "color",
        $value: "#a70a32",
      },
      "800": {
        $type: "color",
        $value: "#9a082f",
      },
      "850": {
        $type: "color",
        $value: "#8f0c31",
      },
      "900": {
        $type: "color",
        $value: "#780a26",
      },
      "950": {
        $type: "color",
        $value: "#500115",
      },
    },
    slate: {
      "50": {
        $type: "color",
        $value: "#f7fafc",
      },
      "100": {
        $type: "color",
        $value: "#e2f4ff",
      },
      "150": {
        $type: "color",
        $value: "#dbeffc",
      },
      "200": {
        $type: "color",
        $value: "#d0e6f4",
      },
      "250": {
        $type: "color",
        $value: "#b6d2e3",
      },
      "300": {
        $type: "color",
        $value: "#9fbed0",
      },
      "350": {
        $type: "color",
        $value: "#91b1c4",
      },
      "400": {
        $type: "color",
        $value: "#83a3b6",
      },
      "450": {
        $type: "color",
        $value: "#68889a",
      },
      "500": {
        $type: "color",
        $value: "#4f6c7e",
      },
      "550": {
        $type: "color",
        $value: "#395565",
      },
      "600": {
        $type: "color",
        $value: "#2c4553",
      },
      "650": {
        $type: "color",
        $value: "#273f4c",
      },
      "700": {
        $type: "color",
        $value: "#203743",
      },
      "750": {
        $type: "color",
        $value: "#1d333f",
      },
      "800": {
        $type: "color",
        $value: "#1a2e39",
      },
      "850": {
        $type: "color",
        $value: "#182832",
      },
      "900": {
        $type: "color",
        $value: "#13232d",
      },
      "950": {
        $type: "color",
        $value: "#101d25",
      },
    },
    "translucent-dark": {
      "20": {
        $type: "color",
        $value: "#00000005",
      },
      "50": {
        $type: "color",
        $value: "#0000000a",
      },
      "100": {
        $type: "color",
        $value: "#00000014",
      },
      "200": {
        $type: "color",
        $value: "#0000001f",
      },
      "300": {
        $type: "color",
        $value: "#00000029",
      },
      "400": {
        $type: "color",
        $value: "#0000003d",
      },
      "500": {
        $type: "color",
        $value: "#00000052",
      },
      "600": {
        $type: "color",
        $value: "#00000066",
      },
      "700": {
        $type: "color",
        $value: "#0000007a",
      },
      "800": {
        $type: "color",
        $value: "#0000008f",
      },
      "900": {
        $type: "color",
        $value: "#000000bd",
      },
      "950": {
        $type: "color",
        $value: "#000000d1",
      },
    },
    "translucent-light": {
      "20": {
        $type: "color",
        $value: "#ffffff05",
      },
      "50": {
        $type: "color",
        $value: "#ffffff0a",
      },
      "100": {
        $type: "color",
        $value: "#ffffff14",
      },
      "200": {
        $type: "color",
        $value: "#ffffff1f",
      },
      "300": {
        $type: "color",
        $value: "#ffffff29",
      },
      "400": {
        $type: "color",
        $value: "#ffffff3d",
      },
      "500": {
        $type: "color",
        $value: "#ffffff52",
      },
      "600": {
        $type: "color",
        $value: "#ffffff66",
      },
      "700": {
        $type: "color",
        $value: "#ffffff7a",
      },
      "800": {
        $type: "color",
        $value: "#ffffff8f",
      },
      "900": {
        $type: "color",
        $value: "#ffffffbd",
      },
      "950": {
        $type: "color",
        $value: "#ffffffd1",
      },
    },
    white: {
      $type: "color",
      $value: "#ffffff",
    },
    black: {
      $type: "color",
      $value: "#000000",
    },
    "accent-rock": {
      "50": {
        $type: "color",
        $value: "#f6f8f9",
      },
      "100": {
        $type: "color",
        $value: "#eceff2",
      },
      "150": {
        $type: "color",
        $value: "#e4e7ea",
      },
      "200": {
        $type: "color",
        $value: "#d4dce3",
      },
      "250": {
        $type: "color",
        $value: "#c2ced8",
      },
      "300": {
        $type: "color",
        $value: "#aebfcb",
      },
      "350": {
        $type: "color",
        $value: "#97adbd",
      },
      "400": {
        $type: "color",
        $value: "#829bae",
      },
      "450": {
        $type: "color",
        $value: "#718ca1",
      },
      "500": {
        $type: "color",
        $value: "#627f93",
      },
      "550": {
        $type: "color",
        $value: "#546f83",
      },
      "600": {
        $type: "color",
        $value: "#485f73",
      },
      "650": {
        $type: "color",
        $value: "#425466",
      },
      "700": {
        $type: "color",
        $value: "#3e4d5d",
      },
      "750": {
        $type: "color",
        $value: "#3b4956",
      },
      "800": {
        $type: "color",
        $value: "#38444f",
      },
      "850": {
        $type: "color",
        $value: "#303b45",
      },
      "900": {
        $type: "color",
        $value: "#28323b",
      },
      "950": {
        $type: "color",
        $value: "#212830",
      },
    },
    "accent-brown": {
      "50": {
        $type: "color",
        $value: "#f9f5ed",
      },
      "100": {
        $type: "color",
        $value: "#f0e4d1",
      },
      "150": {
        $type: "color",
        $value: "#e9d7bc",
      },
      "200": {
        $type: "color",
        $value: "#e2caa6",
      },
      "250": {
        $type: "color",
        $value: "#d7b689",
      },
      "300": {
        $type: "color",
        $value: "#d1a773",
      },
      "350": {
        $type: "color",
        $value: "#cc9d68",
      },
      "400": {
        $type: "color",
        $value: "#c3935e",
      },
      "450": {
        $type: "color",
        $value: "#b58251",
      },
      "500": {
        $type: "color",
        $value: "#a77447",
      },
      "550": {
        $type: "color",
        $value: "#93613a",
      },
      "600": {
        $type: "color",
        $value: "#855033",
      },
      "650": {
        $type: "color",
        $value: "#784630",
      },
      "700": {
        $type: "color",
        $value: "#6e402f",
      },
      "750": {
        $type: "color",
        $value: "#683a2b",
      },
      "800": {
        $type: "color",
        $value: "#613629",
      },
      "850": {
        $type: "color",
        $value: "#572e24",
      },
      "900": {
        $type: "color",
        $value: "#47241e",
      },
      "950": {
        $type: "color",
        $value: "#331915",
      },
    },
    "accent-gray": {
      "50": {
        $type: "color",
        $value: "#f8f8f8",
      },
      "100": {
        $type: "color",
        $value: "#f1f1f1",
      },
      "150": {
        $type: "color",
        $value: "#e7e7e7",
      },
      "200": {
        $type: "color",
        $value: "#dcdcdc",
      },
      "250": {
        $type: "color",
        $value: "#cecece",
      },
      "300": {
        $type: "color",
        $value: "#bdbdbd",
      },
      "350": {
        $type: "color",
        $value: "#a9a9a9",
      },
      "400": {
        $type: "color",
        $value: "#989898",
      },
      "450": {
        $type: "color",
        $value: "#898989",
      },
      "500": {
        $type: "color",
        $value: "#797979",
      },
      "550": {
        $type: "color",
        $value: "#6a6a6a",
      },
      "600": {
        $type: "color",
        $value: "#5b5b5b",
      },
      "650": {
        $type: "color",
        $value: "#525252",
      },
      "700": {
        $type: "color",
        $value: "#4a4a4a",
      },
      "750": {
        $type: "color",
        $value: "#464646",
      },
      "800": {
        $type: "color",
        $value: "#414141",
      },
      "850": {
        $type: "color",
        $value: "#383838",
      },
      "900": {
        $type: "color",
        $value: "#303030",
      },
      "950": {
        $type: "color",
        $value: "#292929",
      },
    },
    "accent-amber": {
      "50": {
        $type: "color",
        $value: "#fff5eb",
      },
      "100": {
        $type: "color",
        $value: "#ffe7c7",
      },
      "150": {
        $type: "color",
        $value: "#ffdba9",
      },
      "200": {
        $type: "color",
        $value: "#ffd08a",
      },
      "250": {
        $type: "color",
        $value: "#ffc366",
      },
      "300": {
        $type: "color",
        $value: "#ffb947",
      },
      "350": {
        $type: "color",
        $value: "#ffb02a",
      },
      "400": {
        $type: "color",
        $value: "#ffa91f",
      },
      "450": {
        $type: "color",
        $value: "#ffa10f",
      },
      "500": {
        $type: "color",
        $value: "#f69200",
      },
      "550": {
        $type: "color",
        $value: "#e78206",
      },
      "600": {
        $type: "color",
        $value: "#cb6a08",
      },
      "650": {
        $type: "color",
        $value: "#b75b06",
      },
      "700": {
        $type: "color",
        $value: "#a55306",
      },
      "750": {
        $type: "color",
        $value: "#924d0c",
      },
      "800": {
        $type: "color",
        $value: "#87480c",
      },
      "850": {
        $type: "color",
        $value: "#78440d",
      },
      "900": {
        $type: "color",
        $value: "#603503",
      },
      "950": {
        $type: "color",
        $value: "#452702",
      },
    },
    "accent-turquoise": {
      "50": {
        $type: "color",
        $value: "#effcfb",
      },
      "100": {
        $type: "color",
        $value: "#d6f7f7",
      },
      "150": {
        $type: "color",
        $value: "#c3f2f2",
      },
      "200": {
        $type: "color",
        $value: "#b2eeef",
      },
      "250": {
        $type: "color",
        $value: "#9ae9eb",
      },
      "300": {
        $type: "color",
        $value: "#7ce0e4",
      },
      "350": {
        $type: "color",
        $value: "#5cd2d8",
      },
      "400": {
        $type: "color",
        $value: "#40c8d0",
      },
      "450": {
        $type: "color",
        $value: "#1cc1ca",
      },
      "500": {
        $type: "color",
        $value: "#1dafb8",
      },
      "550": {
        $type: "color",
        $value: "#2099a5",
      },
      "600": {
        $type: "color",
        $value: "#227c89",
      },
      "650": {
        $type: "color",
        $value: "#21707d",
      },
      "700": {
        $type: "color",
        $value: "#1b636f",
      },
      "750": {
        $type: "color",
        $value: "#235c67",
      },
      "800": {
        $type: "color",
        $value: "#225560",
      },
      "850": {
        $type: "color",
        $value: "#214d58",
      },
      "900": {
        $type: "color",
        $value: "#19424c",
      },
      "950": {
        $type: "color",
        $value: "#11323b",
      },
    },
    "accent-orchid": {
      "50": {
        $type: "color",
        $value: "#fbf5ff",
      },
      "100": {
        $type: "color",
        $value: "#f4e5ff",
      },
      "150": {
        $type: "color",
        $value: "#f0ddff",
      },
      "200": {
        $type: "color",
        $value: "#edd6ff",
      },
      "250": {
        $type: "color",
        $value: "#e4c5fd",
      },
      "300": {
        $type: "color",
        $value: "#deb4fe",
      },
      "350": {
        $type: "color",
        $value: "#d39bff",
      },
      "400": {
        $type: "color",
        $value: "#c983fc",
      },
      "450": {
        $type: "color",
        $value: "#be6ff4",
      },
      "500": {
        $type: "color",
        $value: "#b15aeb",
      },
      "550": {
        $type: "color",
        $value: "#a346e0",
      },
      "600": {
        $type: "color",
        $value: "#9335d0",
      },
      "650": {
        $type: "color",
        $value: "#892ec2",
      },
      "700": {
        $type: "color",
        $value: "#802fb3",
      },
      "750": {
        $type: "color",
        $value: "#732b9c",
      },
      "800": {
        $type: "color",
        $value: "#67268c",
      },
      "850": {
        $type: "color",
        $value: "#591f7a",
      },
      "900": {
        $type: "color",
        $value: "#4e186d",
      },
      "950": {
        $type: "color",
        $value: "#410c5f",
      },
    },
    "accent-orange": {
      "50": {
        $type: "color",
        $value: "#ffefeb",
      },
      "100": {
        $type: "color",
        $value: "#fee2d7",
      },
      "150": {
        $type: "color",
        $value: "#ffd4c4",
      },
      "200": {
        $type: "color",
        $value: "#fdc2aa",
      },
      "250": {
        $type: "color",
        $value: "#fcaf8e",
      },
      "300": {
        $type: "color",
        $value: "#fb9f74",
      },
      "350": {
        $type: "color",
        $value: "#fa8752",
      },
      "400": {
        $type: "color",
        $value: "#f8773f",
      },
      "450": {
        $type: "color",
        $value: "#f7682b",
      },
      "500": {
        $type: "color",
        $value: "#f25816",
      },
      "550": {
        $type: "color",
        $value: "#e74e07",
      },
      "600": {
        $type: "color",
        $value: "#d0450b",
      },
      "650": {
        $type: "color",
        $value: "#b84012",
      },
      "700": {
        $type: "color",
        $value: "#a93d13",
      },
      "750": {
        $type: "color",
        $value: "#993c14",
      },
      "800": {
        $type: "color",
        $value: "#8c3812",
      },
      "850": {
        $type: "color",
        $value: "#7d330d",
      },
      "900": {
        $type: "color",
        $value: "#632a09",
      },
      "950": {
        $type: "color",
        $value: "#441e08",
      },
    },
    "accent-rose": {
      "50": {
        $type: "color",
        $value: "#fff1f5",
      },
      "100": {
        $type: "color",
        $value: "#fce8ed",
      },
      "150": {
        $type: "color",
        $value: "#fadde4",
      },
      "200": {
        $type: "color",
        $value: "#fcd0dc",
      },
      "250": {
        $type: "color",
        $value: "#fabdce",
      },
      "300": {
        $type: "color",
        $value: "#f9a9c0",
      },
      "350": {
        $type: "color",
        $value: "#fa8bad",
      },
      "400": {
        $type: "color",
        $value: "#f3729d",
      },
      "450": {
        $type: "color",
        $value: "#f05e8e",
      },
      "500": {
        $type: "color",
        $value: "#eb477e",
      },
      "550": {
        $type: "color",
        $value: "#e02e6c",
      },
      "600": {
        $type: "color",
        $value: "#cc1d58",
      },
      "650": {
        $type: "color",
        $value: "#be194d",
      },
      "700": {
        $type: "color",
        $value: "#ac1547",
      },
      "750": {
        $type: "color",
        $value: "#9a1844",
      },
      "800": {
        $type: "color",
        $value: "#8c1941",
      },
      "850": {
        $type: "color",
        $value: "#7c183d",
      },
      "900": {
        $type: "color",
        $value: "#681333",
      },
      "950": {
        $type: "color",
        $value: "#500724",
      },
    },
    "accent-emerald": {
      "50": {
        $type: "color",
        $value: "#f0fdf2",
      },
      "100": {
        $type: "color",
        $value: "#dbfde3",
      },
      "150": {
        $type: "color",
        $value: "#cdfcd7",
      },
      "200": {
        $type: "color",
        $value: "#b9f9c7",
      },
      "250": {
        $type: "color",
        $value: "#94f3a8",
      },
      "300": {
        $type: "color",
        $value: "#6eed8a",
      },
      "350": {
        $type: "color",
        $value: "#4ee773",
      },
      "400": {
        $type: "color",
        $value: "#30e061",
      },
      "450": {
        $type: "color",
        $value: "#1ed851",
      },
      "500": {
        $type: "color",
        $value: "#15c743",
      },
      "550": {
        $type: "color",
        $value: "#16b03b",
      },
      "600": {
        $type: "color",
        $value: "#179232",
      },
      "650": {
        $type: "color",
        $value: "#12832e",
      },
      "700": {
        $type: "color",
        $value: "#14752a",
      },
      "750": {
        $type: "color",
        $value: "#146729",
      },
      "800": {
        $type: "color",
        $value: "#115a25",
      },
      "850": {
        $type: "color",
        $value: "#104c21",
      },
      "900": {
        $type: "color",
        $value: "#0c3e1a",
      },
      "950": {
        $type: "color",
        $value: "#042f11",
      },
    },
  },
};

export default colorTokens;

and this is current Stake typography primitives
import { Tokens } from "style-dictionary";
import { pixelsToRem } from "../../util";

const typographyTokens: Tokens = {
  font: {
    $description: "Typography tokens for the design system.",
    family: {
      default: {
        $type: "fontFamily",
        $description: "Primary font family with fallback.",
        $tailwindOptions: { namespace: "font" },
        $value: "'proxima-nova', ui-sans-serif, -apple-system, system-ui, sans-serif",
      },
      code: {
        $type: "fontFamily",
        $description: "Monospace font family for code snippets.",
        $tailwindOptions: { namespace: "font" },
        $value: "'JetBrains Mono', monospace",
      },
    },
    weight: {
      default: {
        $type: "fontWeight",
        $tailwindOptions: { namespace: "font" },
        $value: "400",
      },
      thick: {
        $type: "fontWeight",
        $tailwindOptions: { namespace: "font" },
        $value: "600",
      },
      heavy: {
        $type: "fontWeight",
        $tailwindOptions: { namespace: "font" },
        $value: "700",
      },
    },
    size: {
      xs: { $type: "fontSize", $tailwindOptions: { namespace: "text" }, $value: pixelsToRem(12) },
      sm: { $type: "fontSize", $tailwindOptions: { namespace: "text" }, $value: pixelsToRem(14) },
      md: { $type: "fontSize", $tailwindOptions: { namespace: "text" }, $value: pixelsToRem(16) },
      lg: { $type: "fontSize", $tailwindOptions: { namespace: "text" }, $value: pixelsToRem(18) },
      xl: { $type: "fontSize", $tailwindOptions: { namespace: "text" }, $value: pixelsToRem(20) },
      "2xl": {
        $type: "fontSize",
        $tailwindOptions: { namespace: "text" },
        $value: pixelsToRem(24),
      },
      "3xl": {
        $type: "fontSize",
        $tailwindOptions: { namespace: "text" },
        $value: pixelsToRem(28),
      },
      "4xl": {
        $type: "fontSize",
        $tailwindOptions: { namespace: "text" },
        $value: pixelsToRem(32),
      },
      "5xl": {
        $type: "fontSize",
        $tailwindOptions: { namespace: "text" },
        $value: pixelsToRem(36),
      },
      "6xl": {
        $type: "fontSize",
        $tailwindOptions: { namespace: "text" },
        $value: pixelsToRem(48),
      },
    },
    lineHeight: {
      $tailwindOptions: { namespace: "leading" },
      "4": { $type: "dimension", $value: pixelsToRem(16) },
      "5": { $type: "dimension", $value: pixelsToRem(20) },
      "6": { $type: "dimension", $value: pixelsToRem(24) },
      "7": { $type: "dimension", $value: pixelsToRem(28) },
      "9": { $type: "dimension", $value: pixelsToRem(36) },
      "10": { $type: "dimension", $value: pixelsToRem(40) },
      "12": { $type: "dimension", $value: pixelsToRem(48) },
      "16": { $type: "dimension", $value: pixelsToRem(64) },
    },
    feature: {
      settings: {
        $type: "fontFeatureSettings",
        $value: "'salt' on",
      },
    },
    variant: {
      numeric: {
        $type: "fontVariantNumeric",
        $value: "lining-nums tabular-nums",
      },
    },
  },
};

export default typographyTokens;

Kick using fully tailwind. Use these as base color and typography and do product overrides If it is possible.


You may implement them as JSON or as TS that exports a tokens object. Keep it minimal for the POC; do NOT paste the entire giant example list—only what Button needs, but follow the same idea (semantic keys referencing primitives).

Required semantic color keys for Button

At minimum create:

semantic.color.button.bg.primary

semantic.color.button.bg.primaryHover

semantic.color.button.text.onPrimary

semantic.color.button.bg.disabled

semantic.color.button.text.disabled

Required semantic typography keys for Button

At minimum create:

semantic.typography.button.fontFamily

semantic.typography.button.fontSize

semantic.typography.button.fontWeight

semantic.typography.button.lineHeight

These semantic typography values can either be:

direct values (preferred for POC), OR

references to a small primitive font scale you define (optional).

Product overrides (Kick/Stake/Moon/Upcoming)

Create product files under src/tokens/products/.

They should override semantic values and (to prove multi-brand) override at least one core primitive too.

Must demonstrate differences

For example: core.radius.md differs:

Kick: 0.125rem (2px)

Stake: 0.25rem (4px)

Also ensure button primary colors differ per brand.

Minimum required product files:

kick.json

stake.json

Also create stub/example files:

moon.json

upcoming.json
These can be minimal and not wired to storybook, but present as examples.

Style Dictionary Build

In packages/@easygo-ds-design-tokens:

Add style-dictionary dependency.

Create a Style Dictionary config that:

Loads core + primitives + semantics

Builds per-product (kick/stake) outputs by merging tokens in this order:

core + primitives

semantics

product overrides (kick or stake)

Produces:

build/kick/tokens.css (CSS variables)

build/stake/tokens.css

build/kick/tokens.json (optional)

build/stake/tokens.json (optional)

Also output a small build/index.d.ts or build/tokens.d.ts (optional) for token key types.

Variable naming

Generate CSS variables with a consistent prefix:

--core-dimension-base

--core-radius-md

--core-space-3

--semantic-color-button-bg-primary

etc.

Also create an alias variable for convenience:

:root { --dimension: var(--core-dimension-base); }
Because your spacing/sizes use var(--dimension).

Tailwind Integration

Tailwind must be usable by:

React Button package

Svelte Button package

Both Storybooks

Key requirement

Tailwind theme values must point to the generated CSS variables so brand switching works.

Create a shared Tailwind preset/config (recommended):

packages/tailwind-preset (or packages/@easygo-ds-tailwind-preset)

This preset must map:

theme.spacing to var(--core-space-*)

theme.borderRadius to var(--core-radius-*)

theme.colors to semantic vars (button colors)

theme.fontFamily, fontSize, fontWeight, lineHeight to semantic vars for button typography

Example mapping patterns (implement properly):

spacing: { 3: "var(--core-space-3)", 4: "var(--core-space-4)" }

borderRadius: { md: "var(--core-radius-md)" }

colors: { button: { primary: "var(--semantic-color-button-bg-primary)" } }

Ensure Tailwind content scanning includes:

both button packages source files

both storybook apps

any docs MDX stories

Button Component Packages

Create two packages under:

packages/@easygo-ds-design-tokens/src/components/@easygo-ds-kick-button

packages/@easygo-ds-design-tokens/src/components/@easygo-ds-stake-button

Even though it’s unusual to nest packages under tokens, follow the user structure. Make them real packages with their own package.json.

Button API (must be consistent)

Both buttons must support:

variant?: "primary" (only one required)

size?: "sm" | "md"

disabled?: boolean

loading?: boolean (optional but useful for POC)

fullWidth?: boolean (optional)

className?: string (React) / class?: string passthrough (Svelte)

Click handling:

React: onClick

Svelte: use normal on:click

Document any tiny framework differences in Storybook docs, but keep the same conceptual API.

Styling rules

Use Tailwind classes in component code.

Use the token-backed Tailwind theme values (spacing/radius/colors/typography).

Ensure states:

hover (primaryHover)

disabled (uses disabled bg/text + opacity token)

focus visible ring (can be minimal; can use a semantic focus token if you add it, or use a simple Tailwind ring using an existing semantic color)

Button must visibly demonstrate:

shared spacing/dimensions usage (padding + height from token-derived values)

radius differences per brand (Kick vs Stake)

brand color differences per brand (Kick vs Stake)

Storybook Apps

Create two apps (recommended):

apps/storybook-react

apps/storybook-svelte

React Storybook

Uses @storybook/react-vite

Imports:

Tailwind CSS entry (with base/components/utilities)

Kick product tokens CSS: .../build/kick/tokens.css

Has stories for Kick Button and docs MDX.

Svelte Storybook

Uses @storybook/svelte-vite

Imports:

Tailwind CSS entry

Stake product tokens CSS: .../build/stake/tokens.css

Has stories for Stake Button and docs MDX.

Docs requirements

Each Storybook must include an MDX page that explains:

Core vs primitives vs semantics vs products

How the same semantic token key maps to different values per brand

How Tailwind is configured to read from CSS variables

How to switch brand (swap imported tokens.css)

Also include a Button docs page that describes props and shows examples for size + disabled.

Scripts / Commands

Root scripts must work:

pnpm i

pnpm build (build tokens first, then storybooks/packages if needed)

pnpm dev:sb:react

pnpm dev:sb:svelte

If you use turbo/nx, keep it minimal and stable.

Acceptance Criteria (must pass)

Running pnpm dev:sb:react shows a Kick button styled with Kick colors and Kick radius.

Running pnpm dev:sb:svelte shows a Stake button styled with Stake colors and Stake radius.

Both buttons share the same conceptual API and docs show it.

Tailwind classes are used in both button implementations.

Tokens are generated via Style Dictionary and consumed via CSS variables + Tailwind theme mapping.

Demonstrate product overrides:

at least radius md differs (Kick vs Stake)

at least button primary bg differs (Kick vs Stake)

Implementation Guidance (do not skip)

Prefer compiling Tailwind CSS in the Storybook apps (they are the “hosts”).

Button packages should not require their own CSS build pipeline beyond using Tailwind classes.

Ensure Tailwind content includes package sources so utilities aren’t purged.

Keep tokens minimal—only add what Button requires.

Keep the repo stable and runnable without manual fixes.
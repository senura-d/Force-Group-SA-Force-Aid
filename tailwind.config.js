/** Auto-generated: merged from per-page inline Tailwind configs. */
module.exports = {
  content: ['./*.html'],
  darkMode: "class",
  theme: {
    extend: {
      transitionProperty: {
        colors: 'color, background-color, border-color, text-decoration-color, fill, stroke',
        transform: 'transform',
        all: 'all',
        DEFAULT: 'color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter',
        none: 'none',
        opacity: 'opacity',
        shadow: 'box-shadow',
      },
      colors: {
      "on-primary-fixed": "#00201e",
      "surface-container": "#eeeeee",
      "tertiary-fixed": "#e7e1e2",
      "on-secondary-fixed-variant": "#5b421f",
      "on-tertiary": "#ffffff",
      "primary": "#216963",
      "primary-container": "#7abdb6",
      "on-primary-container": "#004d48",
      "tertiary": "#615d5e",
      "secondary": "#755a34",
      "surface-bright": "#f9f9f9",
      "background": "#f9f9f9",
      "inverse-surface": "#303030",
      "on-secondary": "#ffffff",
      "on-surface": "#1b1b1b",
      "surface-container-highest": "#e2e2e2",
      "outline": "#6f7977",
      "surface": "#f9f9f9",
      "on-surface-variant": "#3f4947",
      "on-background": "#1b1b1b",
      "on-tertiary-fixed": "#1d1b1c",
      "on-secondary-container": "#795e38",
      "surface-container-low": "#f3f3f3",
      "primary-fixed": "#abefe8",
      "on-error-container": "#93000a",
      "surface-dim": "#dadada",
      "inverse-on-surface": "#f1f1f1",
      "error": "#ba1a1a",
      "tertiary-container": "#b5b0b1",
      "on-tertiary-fixed-variant": "#494647",
      "surface-container-high": "#e8e8e8",
      "on-error": "#ffffff",
      "secondary-container": "#ffdaab",
      "secondary-fixed-dim": "#e5c193",
      "on-secondary-fixed": "#291800",
      "surface-variant": "#e2e2e2",
      "surface-tint": "#216963",
      "on-primary": "#ffffff",
      "secondary-fixed": "#ffddb3",
      "inverse-primary": "#8fd3cb",
      "tertiary-fixed-dim": "#cac5c6",
      "primary-fixed-dim": "#8fd3cb",
      "surface-container-lowest": "#ffffff",
      "on-tertiary-container": "#464344",
      "on-primary-fixed-variant": "#00504b",
      "outline-variant": "#bec9c6",
      "error-container": "#ffdad6"
},
      borderRadius: {
      "DEFAULT": "0.125rem",
      "lg": "0.25rem",
      "xl": "0.5rem",
      "full": "0.75rem"
},
      spacing: {
      "lg": "48px",
      "container-max": "1280px",
      "gutter": "24px",
      "xs": "4px",
      "base": "8px",
      "md": "24px",
      "sm": "12px",
      "xl": "80px",
      "section-gap": "120px",
      "margin-desktop": "64px",
      "stack-lg": "32px",
      "stack-sm": "8px",
      "stack-md": "16px"
},
      fontFamily: {
      "body-lg": [
            "Work Sans"
      ],
      "body-sm": [
            "Work Sans"
      ],
      "label-caps": [
            "JetBrains Mono"
      ],
      "headline-lg-mobile": [
            "Hanken Grotesk"
      ],
      "body-md": [
            "Work Sans"
      ],
      "headline-lg": [
            "Hanken Grotesk"
      ],
      "headline-xl": [
            "Hanken Grotesk"
      ],
      "headline-md": [
            "Hanken Grotesk"
      ],
      "display-xl": [
            "Hanken Grotesk"
      ],
      "display-lg": [
            "Hanken Grotesk"
      ],
      "label-sm": [
            "Work Sans"
      ],
      "label-md": [
            "Work Sans"
      ]
},
      fontSize: {
      "body-lg": [
            "18px",
            {
                  "lineHeight": "28px",
                  "fontWeight": "400"
            }
      ],
      "body-sm": [
            "14px",
            {
                  "lineHeight": "20px",
                  "fontWeight": "400"
            }
      ],
      "label-caps": [
            "12px",
            {
                  "lineHeight": "16px",
                  "letterSpacing": "0.05em",
                  "fontWeight": "500"
            }
      ],
      "headline-lg-mobile": [
            "28px",
            {
                  "lineHeight": "36px",
                  "fontWeight": "600"
            }
      ],
      "body-md": [
            "16px",
            {
                  "lineHeight": "24px",
                  "fontWeight": "400"
            }
      ],
      "headline-lg": [
            "32px",
            {
                  "lineHeight": "40px",
                  "letterSpacing": "-0.01em",
                  "fontWeight": "600"
            }
      ],
      "headline-xl": [
            "48px",
            {
                  "lineHeight": "56px",
                  "letterSpacing": "-0.02em",
                  "fontWeight": "700"
            }
      ],
      "headline-md": [
            "24px",
            {
                  "lineHeight": "32px",
                  "fontWeight": "600"
            }
      ],
      "display-xl": [
            "60px",
            {
                  "lineHeight": "72px",
                  "letterSpacing": "-0.02em",
                  "fontWeight": "700"
            }
      ],
      "display-lg": [
            "48px",
            {
                  "lineHeight": "56px",
                  "letterSpacing": "-0.02em",
                  "fontWeight": "700"
            }
      ],
      "label-sm": [
            "12px",
            {
                  "lineHeight": "16px",
                  "letterSpacing": "0.05em",
                  "fontWeight": "600"
            }
      ],
      "label-md": [
            "14px",
            {
                  "lineHeight": "20px",
                  "letterSpacing": "0.01em",
                  "fontWeight": "500"
            }
      ]
},
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
};

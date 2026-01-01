import type { Config } from 'tailwindcss';

// export default {
//   content: ['./src/**/*.{html,ts}'],
//   theme: {
//     extend: {
//       colors: {
//         "back": '#0de43cff',
//         "surface": 'rgba(255,255,255,0.05)',
//         surfaceHover: 'rgba(255,255,255,0.08)',
//         borderSoft: 'rgba(255,255,255,0.12)',
//         accent: '#7C5CFF',
//         accentSoft: 'rgba(124,92,255,0.25)',
//       },
//     },
//   },
const config: Config = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        back: '#0f1115',
        surface: 'rgba(255,255,255,0.04)',
        surfaceHover: 'rgba(255,255,255,0.06)',
        borderSoft: 'rgba(255,255,255,0.08)',
        accent: '#7C5CFF',
        accentSoft: 'rgba(124,92,255,0.25)',
        primary: 'var(--primary-color)',
        text: 'rgba(255,255,255,0.92)',
        muted: 'rgba(255,255,255,0.64)',
        codeBg: '#0b0c0e',
      },
    },
  },
  plugins: [],
};

export default config;

//   plugins: [],
// } satisfies Config;

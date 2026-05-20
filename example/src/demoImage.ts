// Inline SVG data URI so the demo works fully offline. Represents a fake
// product screenshot the user can annotate.
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#f6f8fb"/>
      <stop offset="1" stop-color="#e6ebf3"/>
    </linearGradient>
  </defs>
  <rect width="800" height="500" fill="url(#bg)"/>

  <!-- top nav -->
  <rect x="0" y="0" width="800" height="56" fill="#1f2330"/>
  <circle cx="32" cy="28" r="10" fill="#2f6df6"/>
  <rect x="56" y="22" width="80" height="12" rx="2" fill="#ffffff" opacity="0.85"/>
  <rect x="700" y="20" width="72" height="18" rx="9" fill="#2f6df6"/>

  <!-- card 1 -->
  <rect x="60" y="100" width="280" height="140" rx="8" fill="white" stroke="#d4d8e1"/>
  <rect x="80" y="125" width="160" height="14" rx="2" fill="#1f2330"/>
  <rect x="80" y="150" width="220" height="8" rx="2" fill="#9aa1b3"/>
  <rect x="80" y="165" width="200" height="8" rx="2" fill="#9aa1b3"/>
  <rect x="80" y="200" width="90" height="26" rx="4" fill="#2f6df6"/>

  <!-- card 2 -->
  <rect x="380" y="100" width="360" height="140" rx="8" fill="white" stroke="#d4d8e1"/>
  <rect x="400" y="125" width="200" height="14" rx="2" fill="#1f2330"/>
  <rect x="400" y="150" width="300" height="8" rx="2" fill="#9aa1b3"/>
  <rect x="400" y="165" width="270" height="8" rx="2" fill="#9aa1b3"/>
  <rect x="400" y="180" width="280" height="8" rx="2" fill="#9aa1b3"/>

  <!-- card 3 -->
  <rect x="60" y="270" width="680" height="200" rx="8" fill="white" stroke="#d4d8e1"/>
  <rect x="80" y="290" width="220" height="14" rx="2" fill="#1f2330"/>
  <rect x="80" y="320" width="640" height="8" rx="2" fill="#9aa1b3"/>
  <rect x="80" y="335" width="600" height="8" rx="2" fill="#9aa1b3"/>
  <rect x="80" y="350" width="620" height="8" rx="2" fill="#9aa1b3"/>
  <rect x="80" y="420" width="120" height="30" rx="4" fill="#1f2330"/>
  <rect x="220" y="420" width="120" height="30" rx="4" fill="white" stroke="#d4d8e1"/>
</svg>`

export const DEMO_IMAGE = `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`

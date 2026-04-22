import{i as t,p as s,n as r,V as a}from"./index-DO3JajC9.js";import{r as i}from"./index-hEdiZV1j.js";const n=t(s.div)`
  width: 56px;
  height: 56px;
  flex-shrink: 0; /* Prevents squashing in flex containers */
  border-radius: 50%;
  background: ${e=>e.theme.colors.surface};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e=>e.theme.colors.primary};
  cursor: pointer;
  border: 2px solid ${e=>e.theme.colors.primary};
  transition: all 0.2s ease;

  &:hover {
    background: ${e=>e.theme.colors.primary};
    color: ${e=>e.theme.colors.onPrimary};
  }
`,m=({text:e,lang:o="en-US"})=>r.jsx(n,{"data-testid":"comp-speak-icon",onClick:()=>i(e,o),whileHover:{scale:1.1},whileTap:{scale:.95},role:"button","aria-label":"Read text",children:r.jsx(a,{size:28,strokeWidth:2.5})});export{m as S};

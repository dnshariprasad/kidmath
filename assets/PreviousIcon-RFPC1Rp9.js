import{i as o,p as s,n as r,a as t,C as i}from"./index-0BhnDQbh.js";const n=o(s.div)`
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
`,l=({onClick:e})=>r.jsx(n,{"data-testid":"comp-next-icon",onClick:e,whileHover:{scale:1.1},whileTap:{scale:.95},children:r.jsx(t,{size:32,strokeWidth:2.5})}),a=o(s.div)`
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
`,h=({onClick:e})=>r.jsx(a,{"data-testid":"comp-previous-icon",onClick:e,whileHover:{scale:1.1},whileTap:{scale:.95},children:r.jsx(i,{size:32,strokeWidth:2.5})});export{l as N,h as P};

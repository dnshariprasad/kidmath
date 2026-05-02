import{k as a,r as o,p as r,V as l}from"./index-DknSt3NM.js";import{r as n}from"./index-TgxMRlWw.js";const i=a(o.div)`
  width: ${e=>{switch(e.$size){case"huge":return"120px";case"large":return"80px";case"small":return"40px";default:return"56px"}}};
  height: ${e=>{switch(e.$size){case"huge":return"120px";case"large":return"80px";case"small":return"40px";default:return"56px"}}};
  flex-shrink: 0;
  border-radius: 50%;
  background: ${e=>e.theme.colors.surface};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e=>e.theme.colors.primary};
  cursor: pointer;
  border: 2px solid ${e=>e.theme.colors.primary};
  transition: all 0.2s ease;

  svg {
    width: ${e=>{switch(e.$size){case"huge":return"60px";case"large":return"40px";case"small":return"20px";default:return"28px"}}};
    height: ${e=>{switch(e.$size){case"huge":return"60px";case"large":return"40px";case"small":return"20px";default:return"28px"}}};
  }

  &:hover {
    background: ${e=>e.theme.colors.primary};
    color: ${e=>e.theme.colors.onPrimary};
  }
`,p=({text:e,lang:t="en-US",size:s})=>r.jsx(i,{"data-testid":"comp-speak-icon",$size:s,onClick:()=>n(e,t),whileHover:{scale:1.1},whileTap:{scale:.95},role:"button","aria-label":e.length<=2?e:"Read text",children:r.jsx(l,{strokeWidth:2.5})});export{p as S};

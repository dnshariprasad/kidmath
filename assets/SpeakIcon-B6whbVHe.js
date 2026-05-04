import{k as a,s as n,p as t,V as i}from"./index-C6BBkSek.js";import{r as o}from"./index-DW3S6kjG.js";const l=a(n.div)`
  width: ${e=>{if(typeof e.$size=="number")return`${e.$size}px`;switch(e.$size){case"huge":return"120px";case"large":return"80px";case"small":return"40px";default:return"56px"}}};
  height: ${e=>{if(typeof e.$size=="number")return`${e.$size}px`;switch(e.$size){case"huge":return"120px";case"large":return"80px";case"small":return"40px";default:return"56px"}}};
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
`,p=({text:e,lang:s="en-US",size:r})=>t.jsx(l,{"data-testid":"comp-speak-icon",$size:r,onClick:()=>o(e,s),whileHover:{scale:1.1},whileTap:{scale:.95},role:"button","aria-label":e.length<=2?e:"Read text",children:t.jsx(i,{strokeWidth:2.5,size:r?typeof r=="number"?r*.5:"1em":void 0})});export{p as S};

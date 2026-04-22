import{i as a,p as u,x as c,n as t,P as h,G as v,y as j,A as d,v as m,C as g,a as f,z as y}from"./index-z4hkVttP.js";import{C as b}from"./ChallengeHeader-CsoM-KCR.js";import{S as w}from"./SurpriseCard-Y3YeZqtA.js";import{r as o}from"./index-DEFkihkY.js";import{H as $,P as C}from"./play-B3aHq7k2.js";const S=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
`,k=a(u.div)`
  font-size: 15rem;
  font-weight: 900;
  color: ${e=>e.theme.colors.primary};
  text-shadow: 8px 8px 0px ${e=>e.theme.colors.primary}15;
  line-height: 1;
  font-family: ${e=>e.theme.fonts.primary};
  cursor: pointer;
  user-select: none;

  @media (max-width: 768px) {
    font-size: 8rem;
  }
`,z=a.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: center;
  min-height: 250px;
  max-width: 800px;
  width: 100%;
  padding: 40px;
  background: ${e=>e.theme.colors.surfaceVariant}30;
  border-radius: 32px;
  border: 3px dashed ${e=>e.theme.colors.primary}15;
  box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.05);
`,N=a(u.div)`
  font-size: 3rem;
  cursor: pointer;
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`,P=a.div`
  display: flex;
  gap: 20px;
  align-items: center;
  margin-top: 20px;

  @media (max-width: 480px) {
    width: 100%;
    justify-content: space-between;
  }
`,A=a.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  margin-top: 40px;
  width: 100%;
  max-width: 500px;

  @media (max-width: 480px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,G=a.button`
  padding: 12px;
  border-radius: 12px;
  border: 2px solid
    ${e=>e.$active?e.theme.colors.primary:e.theme.colors.primary+"20"};
  background: ${e=>e.$active?e.theme.colors.primary+"10":"transparent"};
  color: ${e=>e.$active?e.theme.colors.primary:e.theme.colors.textSecondary};
  font-weight: ${e=>e.$active?"800":"600"};
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: ${e=>e.theme.fonts.primary};

  &:hover {
    transform: scale(1.05);
    border-color: ${e=>e.theme.colors.primary};
  }
`,n=[{value:1,emoji:"🍎"},{value:2,emoji:"🍌"},{value:3,emoji:"🥕"},{value:4,emoji:"🍦"},{value:5,emoji:"🚗"},{value:6,emoji:"⚽"},{value:7,emoji:"🦋"},{value:8,emoji:"🍭"},{value:9,emoji:"🎈"},{value:10,emoji:"⭐"},{value:11,emoji:"🍓"},{value:12,emoji:"🧸"},{value:13,emoji:"🚁"},{value:14,emoji:"🐳"},{value:15,emoji:"🍕"},{value:16,emoji:"🦁"},{value:17,emoji:"🦖"},{value:18,emoji:"🍩"},{value:19,emoji:"🎸"},{value:20,emoji:"🚀"}],M=()=>{const[e,s]=c.useState(0),i=n[e];c.useEffect(()=>{o(i.value.toString())},[e,i.value]);const p=()=>{e<n.length-1&&s(e+1)},x=()=>{e>0&&s(e-1)};return t.jsx(h,{children:t.jsxs(v,{children:[t.jsx(b,{icon:$,title:"Learn Numbers",subtitle:"Discover numbers and count fun things together!",streak:0}),t.jsx(w,{title:"Counting is Fun! 🔢",subtitle:"Click on the objects to hear them counted, or use the numbers below to jump to any count."}),t.jsx(j,{children:t.jsxs(S,{children:[t.jsx(d,{mode:"wait",children:t.jsx(k,{initial:{scale:.5,opacity:0,rotate:-10},animate:{scale:1,opacity:1,rotate:0},exit:{scale:1.5,opacity:0,rotate:10},onClick:()=>o(i.value.toString()),children:i.value},i.value)}),t.jsx(z,{children:t.jsx(d,{mode:"popLayout",children:Array.from({length:i.value}).map((l,r)=>t.jsx(N,{initial:{scale:0},animate:{scale:1},exit:{scale:0},transition:{delay:r*.05,type:"spring"},whileHover:{scale:1.2,rotate:10},whileTap:{scale:.9},onClick:()=>o((r+1).toString()),children:i.emoji},`${i.value}-${r}`))})}),t.jsxs(P,{children:[t.jsx(m,{title:"Previous",onClick:x,variant:"secondary",disabled:e===0,icon:t.jsx(g,{size:24})}),t.jsx(m,{title:"Repeat",onClick:()=>o(i.value.toString()),variant:"primary",icon:t.jsx(C,{size:20})}),t.jsx(m,{title:"Next",onClick:p,variant:"secondary",disabled:e===n.length-1,icon:t.jsx(f,{size:24})})]})]})}),t.jsx(y,{children:t.jsx(A,{children:n.map((l,r)=>t.jsx(G,{$active:e===r,onClick:()=>s(r),children:l.value},l.value))})})]})})};export{M as default};

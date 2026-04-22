import{i as l,p as h,x as p,aj as y,n as e,P as b,G as C,y as S,A as d,N as $,z as w,F as N,H as z,J as k,Q as I}from"./index-Byl_Y193.js";import{C as M,S as P}from"./ChallengeHeader-BNrbxctj.js";import{S as A}from"./SpeakIcon-TwcDU24E.js";import{P as L,N as T}from"./PreviousIcon-nDO0CUZX.js";import{r as c}from"./index-8hKcjs1a.js";import{H}from"./hash-DzDcJO4z.js";const E=l.div`
  position: relative;
  width: 100%;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;

  @media (max-width: 768px) {
    min-height: 250px;
  }
`,G=l(h.div)`
  font-size: clamp(8rem, 25vw, 16rem);
  font-weight: 900;
  color: ${t=>t.theme.colors.primary};
  text-shadow: 0 10px 30px ${t=>t.theme.colors.primary}30;
  line-height: 1;
  font-family: ${t=>t.theme.fonts.primary};
  cursor: pointer;
  user-select: none;
  z-index: 10;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`,D=l.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 5;
`,F=l(h.div)`
  position: absolute;
  top: ${t=>t.$top};
  left: ${t=>t.$left};
  font-size: 4rem;
  cursor: pointer;
  pointer-events: auto;
  filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.15));

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`,m=Array.from({length:100}).map((t,a)=>{const i=["🍎","🍌","🥕","🍦","🚗","⚽","🦋","🍭","🎈","⭐","🍓","🧸","🚁","🐳","🍕","🦁","🦖","🍩","🎸","🚀","🍒","🍇","🍔","🍰","🚲","⛵","🎨","🧩","🦄","🐼"];return{value:a+1,emoji:i[a%i.length]}}),q=()=>{const[t,a]=p.useState(0),i=m[t],x=y.useMemo(()=>{const s=[];for(let r=0;r<6;r++)for(let o=0;o<6;o++)r>=2&&r<=3&&o>=2&&o<=3||s.push({r,c:o});return[...s].sort(()=>Math.random()-.5).slice(0,i.value).map(r=>{const o=16.666666666666668,u=20+Math.random()*60,v=20+Math.random()*60,j=r.c*o+u*o/100;return{top:`${r.r*o+v*o/100}%`,left:`${j}%`,rotate:Math.random()*40-20}})},[i.value]);p.useEffect(()=>{c(i.value.toString())},[t,i.value]);const f=()=>{t<m.length-1&&a(t+1)},g=()=>{t>0&&a(t-1)};return e.jsx(b,{children:e.jsxs(C,{children:[e.jsx(M,{icon:H,title:"Learn Numbers",subtitle:"Discover numbers and count fun things together!",streak:0}),e.jsx(P,{title:"Counting is Fun! 🔢",subtitle:i.value<=9?"Click on the items around the number to count them one by one!":"Look at this big number! Can you say it out loud?"}),e.jsxs(S,{children:[e.jsxs(E,{children:[e.jsx(d,{mode:"wait",children:e.jsx(G,{initial:{scale:.5,opacity:0,rotate:-5},animate:{scale:1,opacity:1,rotate:0},exit:{scale:1.5,opacity:0,rotate:5},transition:{type:"spring",stiffness:260,damping:20},onClick:()=>c(i.value.toString()),children:i.value},i.value)}),i.value<=9&&e.jsx(D,{children:e.jsx(d,{mode:"popLayout",children:x.map((n,s)=>e.jsx(F,{$top:n.top,$left:n.left,initial:{scale:0,opacity:0},animate:{scale:1,opacity:1,rotate:n.rotate},exit:{scale:0,opacity:0},transition:{delay:s*.05,type:"spring"},whileHover:{scale:1.3,rotate:n.rotate+10},whileTap:{scale:.8},onClick:()=>c((s+1).toString()),children:i.emoji},`${i.value}-${s}`))})})]}),e.jsxs($,{children:[e.jsx(L,{onClick:g}),e.jsx(A,{text:i.value.toString()}),e.jsx(T,{onClick:f})]})]}),e.jsx(w,{children:e.jsxs(N,{children:[e.jsx(z,{children:"Pick a Number"}),e.jsx(k,{children:m.map((n,s)=>e.jsx(I,{$isActive:t===s,onClick:()=>a(s),children:n.value},n.value))})]})})]})})};export{q as default};

import{i as h,p as j,m as v,r as s,n as e,A as S,q as y,K as C}from"./index-NzOoTDV7.js";import{P as k,G as W,d as b,N as L,S as P,e as T,f as A,T as E,g as I}from"./globalStyles-CxNgPgHO.js";import{S as M}from"./SpeakIcon-DgGc79ve.js";import{P as N,N as R}from"./PreviousIcon-DQAYp6nu.js";import{C as z,S as B,D as w,r as D}from"./DifficultyPicker-Y23e4tn9.js";import{g as G}from"./wordUtils-Bwq53kUM.js";import{B as K}from"./book-open-BDbT_G7N.js";import{W as $}from"./wand-sparkles-CaSBif2c.js";const q=h(j.div)`
  font-size: clamp(6rem, 15vw, 12rem);
  font-weight: 900;
  color: ${n=>n.theme.colors.primary};
  text-align: center;
  margin: 40px 0;
  font-family: ${n=>n.theme.fonts.primary};
  text-transform: capitalize;
`,F=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 40px;
`,O=h.span`
  margin-right: 10px;
  display: flex;
  align-items: center;
`,_=()=>{const n=v(t=>t.alphabet.userStats.streak),[a,p]=s.useState(1),[i,o]=s.useState(0),m=G(),r=s.useMemo(()=>m.filter(t=>a===1?t.length<=4:a===2?t.length>4&&t.length<=6:t.length>6),[m,a]),l=s.useRef(null);s.useEffect(()=>{o(0)},[a]),s.useEffect(()=>{l.current&&l.current.scrollIntoView({behavior:"smooth",inline:"center",block:"nearest"})},[i]);const g=()=>o(t=>(t+1)%r.length),f=()=>o(t=>(t-1+r.length)%r.length),x=()=>{const t=Math.floor(Math.random()*3)+1;p(t),D("Sight Word Surprise!")},c=r[i],u=[{value:1,label:"Level 1"},{value:2,label:"Level 2"},{value:3,label:"Level 3"}];return e.jsx(k,{"data-testid":"page-sight-words",children:e.jsxs(W,{children:[e.jsx(z,{icon:K,title:"Sight Words",subtitle:"Practice reading and speaking high-frequency words!",streak:n}),e.jsx(B,{title:"Reading surprise?",onShuffle:x}),e.jsx(b,{children:r.length>0?e.jsxs(e.Fragment,{children:[e.jsx(S,{mode:"wait",children:e.jsx(q,{initial:{x:50,opacity:0},animate:{x:0,opacity:1},exit:{x:-50,opacity:0},transition:{type:"spring",damping:15},children:c},c)}),e.jsxs(L,{children:[e.jsx(N,{onClick:f}),e.jsx(M,{text:c}),e.jsx(R,{onClick:g})]})]}):e.jsxs(F,{children:[e.jsxs(y,{fontSize:"xl",color:"textSecondary",fontWeight:"bold",children:["Tap the word you hear:",e.jsx("br",{}),"Let's try another! 🎈"]}),e.jsxs(C,{variant:"primary",onClick:x,children:[e.jsx(O,{children:e.jsx($,{size:20})}),"Magic Shuffle"]})]})}),e.jsxs(P,{children:[e.jsx(w,{title:"Reading Level",name:"level",options:u,currentValue:a,onChange:p}),e.jsxs(T,{children:[e.jsx(A,{children:"Word List"}),e.jsx(E,{children:r.map((t,d)=>e.jsx(I,{$isActive:i===d,onClick:()=>o(d),ref:i===d?l:null,children:t},t))})]})]})]})})};export{_ as default};

import{i as f,p as u,m as j,r as c,n as e,f as C,A as y}from"./index-NzOoTDV7.js";import{P as S,G as b,d as L,N as A,S as v,e as P,f as k,T,g as I}from"./globalStyles-CxNgPgHO.js";import{S as N}from"./SpeakIcon-DgGc79ve.js";import{P as w,N as B}from"./PreviousIcon-DQAYp6nu.js";import{C as E,S as G,D,r as R}from"./DifficultyPicker-Y23e4tn9.js";import"./wand-sparkles-CaSBif2c.js";const M=f(u.div)`
  font-size: clamp(12rem, 30vw, 24rem);
  font-weight: 900;
  color: ${a=>a.theme.colors.primary};
  font-family: ${a=>a.theme.fonts.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
`,J=()=>{const a="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),d=j(t=>t.alphabet.userStats.streak),[n,s]=c.useState(0),[r,p]=c.useState("big"),o=a[n],i=r==="big"?o:o.toLowerCase(),h=()=>s(t=>(t+1)%a.length),m=()=>s(t=>(t-1+a.length)%a.length),x=()=>{const t=Math.floor(Math.random()*a.length);s(t),R("Alphabet Surprise!")},g=[{value:"big",label:"BIG LETTERS (A)"},{value:"small",label:"small letters (a)"}];return e.jsx(S,{"data-testid":"page-alphabet",children:e.jsxs(b,{children:[e.jsx(E,{icon:C,title:"ABC Alphabet",subtitle:"Learn letters and phonics with fun!",streak:d}),e.jsx(G,{title:"Ready for a surprise?",onShuffle:x}),e.jsxs(L,{"data-testid":"activity-area",children:[e.jsx(y,{mode:"wait",children:e.jsx(M,{initial:{scale:.5,opacity:0,rotate:-5},animate:{scale:1,opacity:1,rotate:0},exit:{scale:1.5,opacity:0,rotate:5},transition:{type:"spring",stiffness:260,damping:20},children:i},i)}),e.jsxs(A,{children:[e.jsx(w,{onClick:m}),e.jsx(N,{text:i}),e.jsx(B,{onClick:h})]})]}),e.jsxs(v,{"data-testid":"settings-area",children:[e.jsx(D,{title:"Letter Case",name:"case",options:g,currentValue:r,onChange:t=>p(t)}),e.jsxs(P,{children:[e.jsx(k,{children:"Pick a Letter"}),e.jsx(T,{children:a.map((t,l)=>e.jsx(I,{$isActive:n===l,onClick:()=>s(l),children:t},t))})]})]})]})})};export{J as default};

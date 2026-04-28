import{i as c,p as x,x as b,a6 as C,n as e,P as S,G as w,y as $,A as u,N as z,z as N,F as k}from"./index-CcpPQMlK.js";import{C as I,S as M}from"./ChallengeHeader-C_137u4A.js";import{S as P}from"./SpeakIcon-CRuUusk5.js";import{P as A,N as L}from"./PreviousIcon-_iDHCExw.js";import{r as h}from"./index-DF3CcTcq.js";import{H as T}from"./hash-ChGeQXlQ.js";const H=c.div`
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
`,D=c(x.div)`
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
`,E=c.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 5;
`,G=c(x.div)`
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
`,s=Array.from({length:100}).map((t,l)=>{const i=["🍎","🍌","🥕","🍦","🚗","⚽","🦋","🍭","🎈","⭐","🍓","🧸","🚁","🐳","🍕","🦁","🦖","🍩","🎸","🚀","🍒","🍇","🍔","🍰","🚲","⛵","🎨","🧩","🦄","🐼"];return{value:l+1,emoji:i[l%i.length]}}),X=()=>{const[t,l]=b.useState(0),i=s[t],f=C.useMemo(()=>{const o=[];for(let r=0;r<6;r++)for(let n=0;n<6;n++)r>=2&&r<=3&&n>=2&&n<=3||o.push({r,c:n});return[...o].sort(()=>Math.random()-.5).slice(0,i.value).map(r=>{const n=16.666666666666668,d=20+Math.random()*60,v=20+Math.random()*60,j=r.c*n+d*n/100;return{top:`${r.r*n+v*n/100}%`,left:`${j}%`,rotate:Math.random()*40-20}})},[i.value]),y=()=>{t<s.length-1&&l(t+1)},g=()=>{t>0&&l(t-1)};return e.jsx(S,{children:e.jsxs(w,{children:[e.jsx(I,{icon:T,title:"Learn Numbers",subtitle:"Discover numbers and count fun things together!",streak:0}),e.jsx(M,{title:"Counting is Fun! 🔢",subtitle:i.value<=9?"Click on the items around the number to count them one by one!":"Look at this big number! Can you say it out loud?"}),e.jsxs($,{children:[e.jsxs(H,{children:[e.jsx(u,{mode:"wait",children:e.jsx(D,{initial:{scale:.5,opacity:0,rotate:-5},animate:{scale:1,opacity:1,rotate:0},exit:{scale:1.5,opacity:0,rotate:5},transition:{type:"spring",stiffness:260,damping:20},onClick:()=>h(i.value.toString()),children:i.value},i.value)}),i.value<=9&&e.jsx(E,{children:e.jsx(u,{mode:"popLayout",children:f.map((a,o)=>e.jsx(G,{$top:a.top,$left:a.left,initial:{scale:0,opacity:0},animate:{scale:1,opacity:1,rotate:a.rotate},exit:{scale:0,opacity:0},transition:{delay:o*.05,type:"spring"},whileHover:{scale:1.3,rotate:a.rotate+10},whileTap:{scale:.8},onClick:()=>h((o+1).toString()),children:i.emoji},`${i.value}-${o}`))})})]}),e.jsxs(z,{children:[e.jsx(A,{onClick:g}),e.jsx(P,{text:i.value.toString()}),e.jsx(L,{onClick:y})]}),e.jsxs("div",{style:{marginTop:"20px",width:"100%"},children:[e.jsx("h4",{style:{display:"flex",justifyContent:"center",color:"inherit",fontSize:"0.85rem",marginBottom:"10px",fontWeight:700},children:"Pick a Number"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"6px",alignItems:"center"},children:[s.slice(0,10),s.slice(10,20),s.slice(20,30),s.slice(30,40),s.slice(40,50),s.slice(50,60),s.slice(60,70),s.slice(70,80),s.slice(80,90),s.slice(90,100)].map((a,o)=>e.jsx("div",{style:{display:"flex",gap:"6px",flexWrap:"nowrap"},children:a.map((m,p)=>e.jsx(N,{$isActive:t===o*10+p,onClick:()=>l(o*10+p),children:m.value},m.value))},o))})]})]}),e.jsx(k,{})]})})};export{X as default};

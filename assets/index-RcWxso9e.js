import{i as h,p as S,m as v,r as i,n as e,A as y,q as C,K as b}from"./index-DO3JajC9.js";import{P as k,G as W,d as L,S as P,N as A,e as T,f as N,g as E,h as M,i as I,j as w,k as z,T as B,l as R}from"./globalStyles-6jG7PpSt.js";import{S as $}from"./SpeakIcon-dzLiDEBu.js";import{P as D,N as G}from"./PreviousIcon-C9Ogl-Io.js";import{C as K,S as q,D as F}from"./DifficultyPicker-_DkQgrpu.js";import{r as O}from"./index-hEdiZV1j.js";import{g as V}from"./wordUtils-Bwq53kUM.js";import{B as _,W as H}from"./wand-sparkles-B8Qux98Z.js";const J=h(S.div)`
  font-size: clamp(4rem, 12vw, 8rem);
  font-weight: 900;
  color: ${s=>s.theme.colors.primary};
  text-align: center;
  margin: 40px 0;
  font-family: ${s=>s.theme.fonts.primary};
  text-transform: capitalize;
`,Q=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 40px;
`,U=h.span`
  margin-right: 10px;
  display: flex;
  align-items: center;
`,ie=()=>{const s=v(t=>{var r,g;return((g=(r=t.alphabet.gameStats)==null?void 0:r.sight_words)==null?void 0:g.streak)??0}),[n,m]=i.useState(1),[o,l]=i.useState(0),x=V(),a=i.useMemo(()=>x.filter(t=>n===1?t.length<=4:n===2?t.length>4&&t.length<=6:t.length>6),[x,n]),c=i.useRef(null);i.useEffect(()=>{l(0)},[n]),i.useEffect(()=>{c.current&&c.current.scrollIntoView({behavior:"smooth",inline:"center",block:"nearest"})},[o]);const p=()=>l(t=>(t+1)%a.length),f=()=>l(t=>(t-1+a.length)%a.length),u=()=>{const t=Math.floor(Math.random()*3)+1;m(t),O("Sight Word Surprise!")},d=a[o],j=[{value:1,label:"Level 1"},{value:2,label:"Level 2"},{value:3,label:"Level 3"}];return e.jsx(k,{"data-testid":"page-sight-words",children:e.jsxs(W,{children:[e.jsx(K,{icon:_,title:"Sight Words",subtitle:"Practice reading and speaking high-frequency words!",streak:s}),e.jsx(q,{title:"Certificate Progress",subtitle:s<10?`${10-s%10} more for a Certificate! 🏆`:"Milestone reached! 🎉"}),e.jsx(L,{"data-testid":"activity-area",children:a.length>0?e.jsxs(e.Fragment,{children:[e.jsxs(P,{children:[Array.from({length:s%10||(s>0?10:0)}).map((t,r)=>e.jsxs(A,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",damping:10,delay:r*.05},children:[e.jsx(T,{children:"⭐"}),e.jsx(N,{children:r+1})]},r)),s>=10&&e.jsx(E,{children:"+"})]}),e.jsx(y,{mode:"wait",children:e.jsx(J,{initial:{x:50,opacity:0},animate:{x:0,opacity:1},exit:{x:-50,opacity:0},transition:{type:"spring",damping:15},children:d},d)}),e.jsxs(M,{children:[e.jsx(D,{onClick:f}),e.jsx($,{text:d}),e.jsx(G,{onClick:p})]})]}):e.jsxs(Q,{children:[e.jsxs(C,{fontSize:"xl",color:"textSecondary",fontWeight:"bold",children:["Tap the word you hear:",e.jsx("br",{}),"Let's try another! 🎈"]}),e.jsxs(b,{variant:"primary",onClick:u,children:[e.jsx(U,{children:e.jsx(H,{size:20})}),"Magic Shuffle"]})]})}),e.jsxs(I,{children:[e.jsx(F,{title:"Reading Level",name:"level",options:j,currentValue:n,onChange:m}),e.jsxs(w,{children:[e.jsx(z,{children:"Word List"}),e.jsx(B,{children:a.map((t,r)=>e.jsx(R,{$isActive:o===r,onClick:()=>l(r),ref:o===r?c:null,children:t},t))})]})]})]})})};export{ie as default};

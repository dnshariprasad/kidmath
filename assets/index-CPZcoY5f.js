import{j as l,q as u,n as S,y as n,o as e,P as C,R as k,W as w,Y as W,_ as $,K as L,w as T,a0 as P,a1 as z,a2 as A,a3 as E,$ as I}from"./index-CGfIUdAK.js";import{S as f}from"./SpeakIcon-B2dlRdpW.js";import{P as D,N as M}from"./PreviousIcon-Hi7xVtmc.js";import{C as R,S as B}from"./ChallengeHeader-DZVXCHyh.js";import{r as N}from"./index-CEYcl8J1.js";import{g as K,a as g}from"./wordUtils-DPgh885X.js";import{D as O}from"./DifficultyPicker-CuuJKZSt.js";import{B as q}from"./book-open-OKdlXGhw.js";import{W as F}from"./wand-sparkles-DiOZxu3q.js";import"./info-CUGjh8Hh.js";const G=l(u.div)`
  font-size: clamp(4rem, 12vw, 8rem);
  font-weight: 900;
  color: ${i=>i.theme.colors.primary};
  text-align: center;
  margin: 40px 0;
  font-family: ${i=>i.theme.fonts.primary};
  text-transform: capitalize;
`,H=l.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 40px;
`,V=l.span`
  margin-right: 10px;
  display: flex;
  align-items: center;
`,_=l(u.div)`
  margin-top: 12px;
  padding: 16px 20px;
  background: ${i=>i.theme.colors.surface};
  border-radius: 16px;
  width: 100%;
  border: 1px solid ${i=>i.theme.colors.primary}10;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: ${i=>i.theme.colors.primary};
    opacity: 0.7;
  }
`,Y=l.div`
  font-size: 1rem;
  color: ${i=>i.theme.colors.textPrimary};
  font-weight: 600;
  line-height: 1.5;
  text-align: left;
  flex: 1;

  &::before {
    content: '"';
    color: ${i=>i.theme.colors.primary};
    margin-right: 2px;
    font-family: serif;
    font-size: 1.2rem;
  }

  &::after {
    content: '"';
    color: ${i=>i.theme.colors.primary};
    margin-left: 2px;
    font-family: serif;
    font-size: 1.2rem;
  }
`,ae=()=>{const i=S(t=>{var r,h;return((h=(r=t.alphabet.gameStats)==null?void 0:r.sight_words)==null?void 0:h.streak)??0}),[s,m]=n.useState(1),[c,d]=n.useState(0),x=K(),o=n.useMemo(()=>x.filter(t=>s===1?t.length<=4:s===2?t.length>4&&t.length<=6:t.length>6),[x,s]),p=n.useRef(null);n.useEffect(()=>{d(0)},[s]),n.useEffect(()=>{p.current&&p.current.scrollIntoView({behavior:"smooth",inline:"center",block:"nearest"})},[c]);const y=()=>d(t=>(t+1)%o.length),j=()=>d(t=>(t-1+o.length)%o.length),v=()=>{const t=Math.floor(Math.random()*3)+1;m(t),N("Sight Word Surprise!")},a=o[c],b=[{value:1,label:"Level 1"},{value:2,label:"Level 2"},{value:3,label:"Level 3"}];return e.jsx(C,{"data-testid":"page-sight-words",children:e.jsxs(k,{children:[e.jsx(R,{icon:q,title:"Sight Words",subtitle:"Practice reading and speaking high-frequency words!",streak:i}),e.jsx(B,{title:"Challenge Time? 📖",subtitle:"Head over to Practice mode to see how many of these words you can spell!"}),e.jsx(w,{"data-testid":"activity-area",children:o.length>0?e.jsxs(e.Fragment,{children:[e.jsx(W,{mode:"wait",children:e.jsx("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",width:"100%"},children:e.jsx(G,{initial:{x:50,opacity:0},animate:{x:0,opacity:1},exit:{x:-50,opacity:0},transition:{type:"spring",damping:15},children:a},a)})}),e.jsxs($,{children:[e.jsx(D,{onClick:j}),e.jsx(f,{text:a}),e.jsx(M,{onClick:y})]}),g(a).length>0&&e.jsx("div",{style:{width:"100%",marginTop:"20px",borderTop:"1px dashed rgba(99, 102, 241, 0.1)",paddingTop:"20px"},children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"8px",width:"100%"},children:g(a).slice(0,3).map((t,r)=>e.jsxs(_,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:r*.1},children:[e.jsx(Y,{children:t}),e.jsx(f,{text:t,size:"small"})]},`${a}-s-${r}`))})})]}):e.jsxs(H,{children:[e.jsxs(L,{fontSize:"xl",color:"textSecondary",fontWeight:"bold",children:["Tap the word you hear:",e.jsx("br",{}),"Let's try another! 🎈"]}),e.jsxs(T,{variant:"primary",onClick:v,children:[e.jsx(V,{children:e.jsx(F,{size:20})}),"Magic Shuffle"]})]})}),e.jsxs(P,{children:[e.jsx(O,{title:"Reading Level",name:"level",options:b,currentValue:s,onChange:m}),e.jsxs(z,{children:[e.jsx(A,{children:"Word List"}),e.jsx(E,{children:o.map((t,r)=>e.jsx(I,{$isActive:c===r,onClick:()=>d(r),ref:c===r?p:null,children:t},t))})]})]})]})})};export{ae as default};

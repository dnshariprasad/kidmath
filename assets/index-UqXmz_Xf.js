import{k as l,r as u,o as S,t as n,p as e,P as k,R as C,W,Y as w,Z as $,K as L,y as T,$ as P,a0 as z,a1 as A,a2 as E,_ as I}from"./index-BzFoXmKK.js";import{S as f}from"./SpeakIcon-BdM9E_99.js";import{P as D,N as M}from"./PreviousIcon-D4gTIoKI.js";import{S as R}from"./SurpriseCard-Bo2gq3xO.js";import{r as B}from"./index-vOEcMhmM.js";import{g as N,a as g}from"./wordUtils-DPgh885X.js";import{C as K}from"./ChallengeHeader-oinzm8Q3.js";import{D as O}from"./DifficultyPicker-DtGcWeAi.js";import{B as F}from"./book-open-CGiq1ltv.js";import{W as G}from"./wand-sparkles-B-Xm5nHI.js";import"./info-CdaYnKwS.js";const H=l(u.div)`
  font-size: clamp(4rem, 12vw, 8rem);
  font-weight: 900;
  color: ${r=>r.theme.colors.primary};
  text-align: center;
  margin: 40px 0;
  font-family: ${r=>r.theme.fonts.primary};
  text-transform: capitalize;
`,V=l.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 40px;
`,_=l.span`
  margin-right: 10px;
  display: flex;
  align-items: center;
`,q=l(u.div)`
  margin-top: 12px;
  padding: 16px 20px;
  background: ${r=>r.theme.colors.surface};
  border-radius: 16px;
  width: 100%;
  border: 1px solid ${r=>r.theme.colors.primary}10;
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
    background: ${r=>r.theme.colors.primary};
    opacity: 0.7;
  }
`,Y=l.div`
  font-size: 1rem;
  color: ${r=>r.theme.colors.textPrimary};
  font-weight: 600;
  line-height: 1.5;
  text-align: left;
  flex: 1;

  &::before {
    content: '"';
    color: ${r=>r.theme.colors.primary};
    margin-right: 2px;
    font-family: serif;
    font-size: 1.2rem;
  }

  &::after {
    content: '"';
    color: ${r=>r.theme.colors.primary};
    margin-left: 2px;
    font-family: serif;
    font-size: 1.2rem;
  }
`,ne=()=>{const r=S(t=>{var i,h;return((h=(i=t.alphabet.gameStats)==null?void 0:i.sight_words)==null?void 0:h.streak)??0}),[s,m]=n.useState(1),[c,d]=n.useState(0),x=N(),o=n.useMemo(()=>x.filter(t=>s===1?t.length<=4:s===2?t.length>4&&t.length<=6:t.length>6),[x,s]),p=n.useRef(null);n.useEffect(()=>{d(0)},[s]),n.useEffect(()=>{p.current&&p.current.scrollIntoView({behavior:"smooth",inline:"center",block:"nearest"})},[c]);const y=()=>d(t=>(t+1)%o.length),v=()=>d(t=>(t-1+o.length)%o.length),j=()=>{const t=Math.floor(Math.random()*3)+1;m(t),B("Sight Word Surprise!")},a=o[c],b=[{value:1,label:"Level 1"},{value:2,label:"Level 2"},{value:3,label:"Level 3"}];return e.jsx(k,{"data-testid":"page-sight-words",children:e.jsxs(C,{children:[e.jsx(K,{icon:F,title:"Sight Words",subtitle:"Practice reading and speaking high-frequency words!",streak:r}),e.jsx(R,{title:"Challenge Time? 📖",subtitle:"Head over to Practice mode to see how many of these words you can spell!"}),e.jsx(W,{"data-testid":"activity-area",children:o.length>0?e.jsxs(e.Fragment,{children:[e.jsx(w,{mode:"wait",children:e.jsx("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",width:"100%"},children:e.jsx(H,{initial:{x:50,opacity:0},animate:{x:0,opacity:1},exit:{x:-50,opacity:0},transition:{type:"spring",damping:15},children:a},a)})}),e.jsxs($,{children:[e.jsx(D,{onClick:v}),e.jsx(f,{text:a}),e.jsx(M,{onClick:y})]}),g(a).length>0&&e.jsx("div",{style:{width:"100%",marginTop:"20px",borderTop:"1px dashed rgba(99, 102, 241, 0.1)",paddingTop:"20px"},children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"8px",width:"100%"},children:g(a).slice(0,3).map((t,i)=>e.jsxs(q,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:i*.1},children:[e.jsx(Y,{children:t}),e.jsx(f,{text:t,size:"small"})]},`${a}-s-${i}`))})})]}):e.jsxs(V,{children:[e.jsxs(L,{fontSize:"xl",color:"textSecondary",fontWeight:"bold",children:["Tap the word you hear:",e.jsx("br",{}),"Let's try another! 🎈"]}),e.jsxs(T,{variant:"primary",onClick:j,children:[e.jsx(_,{children:e.jsx(G,{size:20})}),"Magic Shuffle"]})]})}),e.jsxs(P,{children:[e.jsx(O,{title:"Reading Level",name:"level",options:b,currentValue:s,onChange:m}),e.jsxs(z,{children:[e.jsx(A,{children:"Word List"}),e.jsx(E,{children:o.map((t,i)=>e.jsx(I,{$isActive:c===i,onClick:()=>d(i),ref:c===i?p:null,children:t},t))})]})]})]})})};export{ne as default};

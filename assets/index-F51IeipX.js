import{i as l,p as u,m as S,x as a,n as e,P as C,G as k,y as w,A as W,N as L,K as T,v as $,z,F as P,H as A,J as E,Q as I}from"./index-DFKAu_cK.js";import{S as f}from"./SpeakIcon-CvLt9ivL.js";import{P as D,N as M}from"./PreviousIcon-gGdtus7n.js";import{S as N}from"./SurpriseCard-CJ-2Fm2R.js";import{C as B,r as R}from"./ChallengeHeader-BNUm6G2b.js";import{g as F,a as g}from"./wordUtils-DPgh885X.js";import{D as G}from"./DifficultyPicker-CvJ-uU1P.js";import{B as H}from"./book-open-CP1W5uTS.js";import{W as K}from"./wand-sparkles-BmWeM9LZ.js";const O=l(u.div)`
  font-size: clamp(4rem, 12vw, 8rem);
  font-weight: 900;
  color: ${i=>i.theme.colors.primary};
  text-align: center;
  margin: 40px 0;
  font-family: ${i=>i.theme.fonts.primary};
  text-transform: capitalize;
`,V=l.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 40px;
`,q=l.span`
  margin-right: 10px;
  display: flex;
  align-items: center;
`,J=l(u.div)`
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
`,Q=l.div`
  font-size: 1rem;
  color: ${i=>i.theme.colors.text};
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
`,oe=()=>{const i=S(t=>{var r,h;return((h=(r=t.alphabet.gameStats)==null?void 0:r.sight_words)==null?void 0:h.streak)??0}),[s,m]=a.useState(1),[c,d]=a.useState(0),x=F(),o=a.useMemo(()=>x.filter(t=>s===1?t.length<=4:s===2?t.length>4&&t.length<=6:t.length>6),[x,s]),p=a.useRef(null);a.useEffect(()=>{d(0)},[s]),a.useEffect(()=>{p.current&&p.current.scrollIntoView({behavior:"smooth",inline:"center",block:"nearest"})},[c]);const y=()=>d(t=>(t+1)%o.length),v=()=>d(t=>(t-1+o.length)%o.length),j=()=>{const t=Math.floor(Math.random()*3)+1;m(t),R("Sight Word Surprise!")},n=o[c],b=[{value:1,label:"Level 1"},{value:2,label:"Level 2"},{value:3,label:"Level 3"}];return e.jsx(C,{"data-testid":"page-sight-words",children:e.jsxs(k,{children:[e.jsx(B,{icon:H,title:"Sight Words",subtitle:"Practice reading and speaking high-frequency words!",streak:i}),e.jsx(N,{title:"Challenge Time? 📖",subtitle:"Head over to Practice mode to see how many of these words you can spell!"}),e.jsx(w,{"data-testid":"activity-area",children:o.length>0?e.jsxs(e.Fragment,{children:[e.jsx(W,{mode:"wait",children:e.jsx("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",width:"100%"},children:e.jsx(O,{initial:{x:50,opacity:0},animate:{x:0,opacity:1},exit:{x:-50,opacity:0},transition:{type:"spring",damping:15},children:n},n)})}),e.jsxs(L,{children:[e.jsx(D,{onClick:v}),e.jsx(f,{text:n}),e.jsx(M,{onClick:y})]}),g(n).length>0&&e.jsx("div",{style:{width:"100%",marginTop:"20px",borderTop:"1px dashed rgba(99, 102, 241, 0.1)",paddingTop:"20px"},children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"8px",width:"100%"},children:g(n).slice(0,3).map((t,r)=>e.jsxs(J,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:r*.1},children:[e.jsx(Q,{children:t}),e.jsx(f,{text:t,size:"small"})]},`${n}-s-${r}`))})})]}):e.jsxs(V,{children:[e.jsxs(T,{fontSize:"xl",color:"textSecondary",fontWeight:"bold",children:["Tap the word you hear:",e.jsx("br",{}),"Let's try another! 🎈"]}),e.jsxs($,{variant:"primary",onClick:j,children:[e.jsx(q,{children:e.jsx(K,{size:20})}),"Magic Shuffle"]})]})}),e.jsxs(z,{children:[e.jsx(G,{title:"Reading Level",name:"level",options:b,currentValue:s,onChange:m}),e.jsxs(P,{children:[e.jsx(A,{children:"Word List"}),e.jsx(E,{children:o.map((t,r)=>e.jsx(I,{$isActive:c===r,onClick:()=>d(r),ref:c===r?p:null,children:t},t))})]})]})]})})};export{oe as default};

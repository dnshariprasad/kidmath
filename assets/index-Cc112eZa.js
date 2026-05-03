import{k as o,s as c,o as w,r as n,p as e,P as S,R as W,W as k,Y as C,Z as T,$ as z,K as $,y as P,_ as I,a0 as L,a1 as D}from"./index-C9GQ7pMr.js";import{S as g}from"./SpeakIcon-8wVeVruG.js";import{P as A,N as E}from"./PreviousIcon-Dt6A5C2z.js";import{r as R}from"./index-DhGl27sY.js";import{g as M,a as u}from"./wordUtils-DPgh885X.js";import{C as B}from"./ChallengeHeader-BrHaadvX.js";import{D as H}from"./DifficultyPicker-C8N_GHcF.js";import{D as K,P as N}from"./learnStyles-BVSwhalq.js";import{B as O}from"./book-open-BeT1M_Ce.js";import{W as F}from"./wand-sparkles-DfoHx2k4.js";import"./info-BbesOvZG.js";const G=o(c.div)`
  font-size: clamp(4rem, 12vw, 8rem);
  font-weight: 900;
  color: ${i=>i.theme.colors.primary};
  text-align: center;
  margin: 0;
  font-family: ${i=>i.theme.fonts.primary};
  text-transform: capitalize;
`,V=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 16px;
`,_=o.span`
  margin-right: 10px;
  display: flex;
  align-items: center;
`,q=o(c.div)`
  margin-top: 0;
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
`,Y=o.div`
  font-size: 1.1rem;
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
`,Z=o.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 800px;
`,oe=()=>{const i=w(t=>{var r,f;return((f=(r=t.alphabet.gameStats)==null?void 0:r.sight_words)==null?void 0:f.streak)??0}),[l,m]=n.useState(1),[d,p]=n.useState(0),x=M(),a=n.useMemo(()=>x.filter(t=>l===1?t.length<=4:l===2?t.length>4&&t.length<=6:t.length>6),[x,l]),h=n.useRef(null);n.useEffect(()=>{p(0)},[l]),n.useEffect(()=>{h.current&&h.current.scrollIntoView({behavior:"smooth",inline:"center",block:"nearest"})},[d]);const y=()=>p(t=>(t+1)%a.length),j=()=>p(t=>(t-1+a.length)%a.length),v=()=>{const t=Math.floor(Math.random()*3)+1;m(t),R("Sight Word Surprise!")},s=a[d],b=[{value:1,label:"Level 1"},{value:2,label:"Level 2"},{value:3,label:"Level 3"}];return e.jsx(S,{"data-testid":"page-sight-words",children:e.jsxs(W,{children:[e.jsxs(k,{"data-testid":"activity-area",children:[e.jsx(B,{icon:O,title:"Sight Words",subtitle:"Practice reading and speaking high-frequency words!",streak:i}),a.length>0?e.jsxs(e.Fragment,{children:[e.jsxs(K,{children:[e.jsx(N,{animate:{scale:[1,1.1,1],opacity:[.1,.15,.1]},transition:{duration:4,repeat:1/0,ease:"easeInOut"}}),e.jsx(C,{mode:"wait",children:e.jsx("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",width:"100%",zIndex:1},children:e.jsx(G,{initial:{scale:.2,opacity:0,rotate:-5,y:20},animate:{scale:1,opacity:1,rotate:0,y:0},exit:{scale:1.5,opacity:0,rotate:5,y:-20},transition:{type:"spring",stiffness:300,damping:15},children:s},s)})})]}),e.jsxs(T,{children:[e.jsx(c.div,{whileHover:{scale:1.1},whileTap:{scale:.9},children:e.jsx(A,{onClick:j})}),e.jsx(c.div,{animate:{scale:[1,1.05,1]},transition:{duration:2,repeat:1/0},children:e.jsx(g,{text:s,size:70})}),e.jsx(c.div,{whileHover:{scale:1.1},whileTap:{scale:.9},children:e.jsx(E,{onClick:y})})]}),u(s).length>0&&e.jsx("div",{style:{width:"100%",marginTop:"0",borderTop:"1px dashed rgba(99, 102, 241, 0.15)",paddingTop:"16px",maxWidth:"600px"},children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px",width:"100%"},children:u(s).slice(0,3).map((t,r)=>e.jsxs(q,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:r*.1},children:[e.jsx(Y,{children:t}),e.jsx(g,{text:t,size:"small"})]},`${s}-s-${r}`))})}),e.jsx(Z,{children:a.map((t,r)=>e.jsx(z,{$isActive:d===r,onClick:()=>p(r),ref:d===r?h:null,children:t},t))})]}):e.jsxs(V,{children:[e.jsxs($,{fontSize:"xl",color:"textSecondary",fontWeight:"bold",children:["Tap the word you hear:",e.jsx("br",{}),"Let's try another! 🎈"]}),e.jsxs(P,{variant:"primary",onClick:v,children:[e.jsx(_,{children:e.jsx(F,{size:20})}),"Magic Shuffle"]})]})]}),e.jsxs(I,{children:[e.jsx(H,{title:"Reading Level",name:"level",options:b,currentValue:l,onChange:m}),e.jsxs(L,{children:[e.jsx(D,{children:"Reading Tips! 🌟"}),e.jsxs("p",{style:{fontSize:"0.85rem",lineHeight:1.6,fontWeight:600,opacity:.8},children:["Sight words are common words that kids should recognize instantly without sounding them out.",e.jsx("br",{}),e.jsx("br",{}),"Keep practicing every day to become a reading superstar!"]})]})]})]})})};export{oe as default};

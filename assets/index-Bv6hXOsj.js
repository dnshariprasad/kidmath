import{k as a,s,o as b,r as m,p as t,P as j,W as $,Y as C,Z as A,_ as k,$ as I,v as S}from"./index-CqNqe0_u.js";import{S as T}from"./SpeakIcon-BEUaf5iO.js";import{P,N as z}from"./PreviousIcon-DJvvCf6V.js";import{C as N}from"./ChallengeHeader-CJHh2sOw.js";import{D as _}from"./DifficultyPicker-C7s_2laC.js";import{L as D}from"./languages-B9hybWLh.js";import"./index-B0YFU1Rv.js";import"./info-Cd6A2b_y.js";const G=[["అ","ఆ"],["ఇ","ఈ"],["ఉ","ఊ"],["ఋ","ౠ"],["ఎ","ఏ","ఐ"],["ఒ","ఓ","ఔ"],["అం","అః"]],u=G.flat(),L=[["క","ఖ","గ","ఘ","ఙ"],["చ","ఛ","జ","ఝ","ఞ"],["ట","ఠ","డ","ఢ","ణ"],["త","థ","ద","ధ","న"],["ప","ఫ","బ","భ","మ"],["య","ర","ల","వ"],["శ","ష","స","హ"],["ళ","క్ష","ఱ"]],x=L.flat(),V=[...u,...x],H=a.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (max-width: 768px) {
  }
`,O=a(s.div)`
  position: absolute;
  width: 250px;
  height: 250px;
  background: ${e=>e.theme.colors.primary}10;
  border-radius: 50%;
  z-index: 0;

  @media (max-width: 768px) {
    width: 180px;
    height: 180px;
  }
`,E=a(s.div)`
  font-size: clamp(6rem, 20vw, 12rem);
  font-weight: 900;
  color: ${e=>e.theme.colors.primary};
  font-family: ${e=>e.theme.fonts.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  z-index: 1;
  text-shadow: 0 20px 40px ${e=>e.theme.colors.primary}20;
`;a.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 12px;
  background: ${e=>e.theme.colors.surfaceVariant}20;
  border-radius: 16px;
  border: 1px solid ${e=>e.theme.colors.primary}08;
`;const F=a.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 12px;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;

  @media (max-width: 480px) {
    grid-template-columns: repeat(5, 1fr);
    gap: 8px;
  }
`,g=a(s.div)`
  aspect-ratio: 1;
  background: ${e=>e.$isActive?e.theme.colors.primary:e.theme.colors.surface};
  color: ${e=>e.$isActive?"white":e.theme.colors.textPrimary};
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 1.2rem;
  cursor: pointer;
  border: 2px solid
    ${e=>e.$isActive?e.theme.colors.primary:e.theme.colors.primary+"10"};
  box-shadow: ${e=>e.$isActive?`0 8px 16px ${e.theme.colors.primary}30`:"none"};
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-4px);
    border-color: ${e=>e.theme.colors.primary};
    background: ${e=>e.$isActive?e.theme.colors.primary:e.theme.colors.primary+"05"};
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    border-radius: 10px;
  }
`;a(g);const K=()=>{const e=b(i=>{var o,h;return((h=(o=i.alphabet.gameStats)==null?void 0:o.alphabet_telugu)==null?void 0:h.streak)??0}),[p,c]=m.useState(0),[n,f]=m.useState("all"),l=S.en,r=m.useMemo(()=>n==="vowels"?u:n==="consonants"?x:V,[n]),d=r[p%r.length],y=()=>c(i=>(i+1)%r.length),v=()=>c(i=>(i-1+r.length)%r.length),w=[{value:"all",label:"All Characters"},{value:"vowels",label:l.tel_achulu},{value:"consonants",label:l.tel_hallulu}];return t.jsx(j,{"data-testid":"view-telugu",children:t.jsxs($,{children:[t.jsxs(C,{"data-testid":"activity-area",children:[t.jsx(N,{icon:D,title:l.tel_title,subtitle:l.tel_subtitle,streak:e}),t.jsxs(H,{children:[t.jsx(O,{animate:{scale:[1,1.1,1],opacity:[.1,.15,.1]},transition:{duration:4,repeat:1/0,ease:"easeInOut"}}),t.jsx(A,{mode:"wait",children:t.jsx(E,{initial:{scale:.2,opacity:0,rotate:-20,y:40},animate:{scale:1,opacity:1,rotate:0,y:0},exit:{scale:1.5,opacity:0,rotate:20,y:-40},transition:{type:"spring",stiffness:300,damping:15},children:d},d)})]}),t.jsxs(k,{children:[t.jsx(s.div,{whileHover:{scale:1.1},whileTap:{scale:.9},children:t.jsx(P,{onClick:v})}),t.jsx(s.div,{animate:{scale:[1,1.05,1]},transition:{duration:2,repeat:1/0},children:t.jsx(T,{text:d,lang:"te-IN",size:70})}),t.jsx(s.div,{whileHover:{scale:1.1},whileTap:{scale:.9},children:t.jsx(z,{onClick:y})})]}),t.jsx(F,{children:r.map((i,o)=>t.jsx(g,{$isActive:p===o,onClick:()=>c(o),whileTap:{scale:.9},children:i},i))})]}),t.jsx(I,{"data-testid":"settings-area",children:t.jsx(_,{title:"Filter",name:"filter",options:w,currentValue:n,onChange:i=>f(i)})})]})})};export{K as default};

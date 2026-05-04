import{k as a,s,o as k,r as d,p as t,P as H,W as I,Y as P,Z as S,_ as z,$ as V}from"./index-C6BBkSek.js";import{S as D}from"./SpeakIcon-B6whbVHe.js";import{P as N,N as L}from"./PreviousIcon-DfacNgST.js";import{C as T}from"./ChallengeHeader-6svzIyZI.js";import{D as E}from"./DifficultyPicker-A9_M6bsr.js";import{L as G}from"./languages-B2l58rdZ.js";import"./index-DW3S6kjG.js";import"./info-BdRtwLd7.js";const p=["अ","आ","इ","ई","उ","ऊ","ऋ","ए","ऐ","ओ","औ","अं","अः"],x=["क","ख","ग","घ","ङ"],u=["च","छ","ज","झ","ञ"],f=["ट","ठ","ड","ढ","ण"],y=["त","थ","द","ध","न"],g=["प","फ","ब","भ","म"],v=["य","र","ल","व"],w=["श","ष","स","ह"],F=["क्ष","त्र","ज्ञ","श्र"],O=a.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (max-width: 768px) {
  }
`,W=a(s.div)`
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
`,Y=a(s.div)`
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
`;const _=a.div`
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
`,b=a(s.div)`
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
`;a(b);const U=()=>{const e=k(i=>{var n,h;return((h=(n=i.alphabet.gameStats)==null?void 0:n.alphabet_hindi)==null?void 0:h.streak)??0}),[m,l]=d.useState(0),[o,j]=d.useState("all"),r=d.useMemo(()=>o==="vowels"?p:o==="consonants"?[...x,...u,...g,...w,...f,...y,...v]:[...p,...x,...u,...g,...w,...f,...y,...v,...F],[o]),c=r[m%r.length],$=()=>l(i=>(i+1)%r.length),C=()=>l(i=>(i-1+r.length)%r.length),A=[{value:"all",label:"All Characters"},{value:"vowels",label:"Vowels (Svar)"},{value:"consonants",label:"Consonants (Vyanjan)"}];return t.jsx(H,{"data-testid":"view-hindi",children:t.jsxs(I,{children:[t.jsxs(P,{"data-testid":"activity-area",children:[t.jsx(T,{icon:G,title:"Hindi Alphabet",subtitle:"Explore the beautiful Hindi Varnamala!",streak:e}),t.jsxs(O,{children:[t.jsx(W,{animate:{scale:[1,1.1,1],opacity:[.1,.15,.1]},transition:{duration:4,repeat:1/0,ease:"easeInOut"}}),t.jsx(S,{mode:"wait",children:t.jsx(Y,{initial:{scale:.2,opacity:0,rotate:-20,y:40},animate:{scale:1,opacity:1,rotate:0,y:0},exit:{scale:1.5,opacity:0,rotate:20,y:-40},transition:{type:"spring",stiffness:300,damping:15},children:c},c)})]}),t.jsxs(z,{children:[t.jsx(s.div,{whileHover:{scale:1.1},whileTap:{scale:.9},children:t.jsx(N,{onClick:C})}),t.jsx(s.div,{animate:{scale:[1,1.05,1]},transition:{duration:2,repeat:1/0},children:t.jsx(D,{text:c,lang:"hi-IN",size:70})}),t.jsx(s.div,{whileHover:{scale:1.1},whileTap:{scale:.9},children:t.jsx(L,{onClick:$})})]}),t.jsx(_,{children:r.map((i,n)=>t.jsx(b,{$isActive:m===n,onClick:()=>l(n),whileTap:{scale:.9},children:i},i))})]}),t.jsx(V,{"data-testid":"settings-area",children:t.jsx(E,{title:"Filter",name:"filter",options:A,currentValue:o,onChange:i=>j(i)})})]})})};export{U as default};

import{i as b,p as k,m as A,r as l,n as e,A as w}from"./index-NzOoTDV7.js";import{P,G as H,d as I,N as L,S as N,e as T,f as V,T as $,g as D}from"./globalStyles-CxNgPgHO.js";import{S as E}from"./SpeakIcon-DgGc79ve.js";import{P as F,N as G}from"./PreviousIcon-DQAYp6nu.js";import{C as M,S as z,D as B,r as O}from"./DifficultyPicker-Y23e4tn9.js";import{L as R}from"./languages-CHJoMOmR.js";import"./wand-sparkles-CaSBif2c.js";const h=["अ","आ","इ","ई","उ","ऊ","ऋ","ए","ऐ","ओ","औ","अं","अः"],d=["क","ख","ग","घ","ङ"],m=["च","छ","ज","झ","ञ"],p=["ट","ठ","ड","ढ","ण"],x=["त","थ","द","ध","न"],u=["प","फ","ब","भ","म"],f=["य","र","ल","व"],g=["श","ष","स","ह"],q=["क्ष","त्र","ज्ञ","श्र"],J=b(k.div)`
  font-size: clamp(4rem, 20vw, 10rem);
  font-weight: 900;
  color: ${s=>s.theme.colors.primary};
  font-family: ${s=>s.theme.fonts.primary};
  margin-bottom: 20px;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: clamp(3rem, 25vw, 6rem);
  }
`,_=()=>{const s=A(t=>t.alphabet.userStats.streak),[c,n]=l.useState(0),[i,j]=l.useState("all"),a=l.useMemo(()=>i==="vowels"?h:i==="consonants"?[...d,...m,...u,...g,...p,...x,...f]:[...h,...d,...m,...u,...g,...p,...x,...f,...q],[i]),r=a[c%a.length],y=()=>n(t=>(t+1)%a.length),C=()=>n(t=>(t-1+a.length)%a.length),S=()=>{const t=Math.floor(Math.random()*a.length);n(t),O("Hindi Surprise!")},v=[{value:"all",label:"All Characters"},{value:"vowels",label:"Vowels (Svar)"},{value:"consonants",label:"Consonants (Vyanjan)"}];return e.jsx(P,{"data-testid":"page-hindi-alphabet",children:e.jsxs(H,{children:[e.jsx(M,{icon:R,title:"Hindi Alphabet",subtitle:"Explore the beautiful Hindi Varnamala!",streak:s}),e.jsx(z,{title:"Hindi surprise?",onShuffle:S}),e.jsxs(I,{children:[e.jsx(w,{mode:"wait",children:e.jsx(J,{initial:{y:20,opacity:0,scale:.8},animate:{y:0,opacity:1,scale:1},exit:{y:-20,opacity:0,scale:1.2},transition:{type:"spring",damping:12},children:r},r)}),e.jsxs(L,{children:[e.jsx(F,{onClick:C}),e.jsx(E,{text:r,lang:"hi-IN"}),e.jsx(G,{onClick:y})]})]}),e.jsxs(N,{"data-testid":"settings-area",children:[e.jsx(B,{title:"Filter",name:"filter",options:v,currentValue:i,onChange:t=>j(t)}),e.jsxs(T,{children:[e.jsx(V,{children:"Pick a Character"}),e.jsx($,{children:a.map((t,o)=>e.jsx(D,{$isActive:c===o,onClick:()=>n(o),children:t},`${t}-${o}`))})]})]})]})})};export{_ as default};

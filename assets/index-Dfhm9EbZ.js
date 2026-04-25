import{i as k,p as w,j as A,m as P,x as l,n as e,P as H,G as N,y as L,A as T,N as I,z as V,F as $,H as z,J as D,Q as E}from"./index-S6EAxzK5.js";import{S as F}from"./SpeakIcon-BhYWrM2h.js";import{P as G,N as _}from"./PreviousIcon-CTqiZtaM.js";import{C as B,S as J}from"./ChallengeHeader-Dd5GSdB_.js";import{D as M}from"./DifficultyPicker-BiSHlKTa.js";import{L as O}from"./languages-CM6MYhAI.js";const d=["अ","आ","इ","ई","उ","ऊ","ऋ","ए","ऐ","ओ","औ","अं","अः"],m=["क","ख","ग","घ","ङ"],p=["च","छ","ज","झ","ञ"],x=["ट","ठ","ड","ढ","ण"],g=["त","थ","द","ध","न"],u=["प","फ","ब","भ","म"],f=["य","र","ल","व"],j=["श","ष","स","ह"],Q=["क्ष","त्र","ज्ञ","श्र"],R=k(w.div)`
  font-size: clamp(4rem, 20vw, 10rem);
  font-weight: 900;
  color: ${i=>i.theme.colors.primary};
  font-family: ${i=>i.theme.fonts.primary};
  margin-bottom: 20px;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: clamp(3rem, 25vw, 6rem);
  }
`,Z=()=>{const i=A(),y=P(t=>{var s,h;return((h=(s=t.alphabet.gameStats)==null?void 0:s.alphabet_hindi)==null?void 0:h.streak)??0}),[c,o]=l.useState(0),[n,v]=l.useState("all"),a=l.useMemo(()=>n==="vowels"?d:n==="consonants"?[...m,...p,...u,...j,...x,...g,...f]:[...d,...m,...p,...u,...j,...x,...g,...f,...Q],[n]),r=a[c%a.length],C=()=>o(t=>(t+1)%a.length),b=()=>o(t=>(t-1+a.length)%a.length),S=[{value:"all",label:"All Characters"},{value:"vowels",label:"Vowels (Svar)"},{value:"consonants",label:"Consonants (Vyanjan)"}];return e.jsx(H,{"data-testid":"view-hindi",children:e.jsxs(N,{children:[e.jsx(B,{icon:O,title:"Hindi Alphabet",subtitle:"Explore the beautiful Hindi Varnamala!",streak:y}),e.jsx(J,{title:"Take the Test? ✍️",subtitle:"Try the Hindi Legend exam!",onClick:()=>i("/test/hindi_legend")}),e.jsxs(L,{"data-testid":"activity-area",children:[e.jsx(T,{mode:"wait",children:e.jsx(R,{initial:{y:20,opacity:0,scale:.8},animate:{y:0,opacity:1,scale:1},exit:{y:-20,opacity:0,scale:1.2},transition:{type:"spring",damping:12},children:r},r)}),e.jsxs(I,{children:[e.jsx(G,{onClick:b}),e.jsx(F,{text:r,lang:"hi-IN"}),e.jsx(_,{onClick:C})]})]}),e.jsxs(V,{"data-testid":"settings-area",children:[e.jsx(M,{title:"Filter",name:"filter",options:S,currentValue:n,onChange:t=>v(t)}),e.jsxs($,{children:[e.jsx(z,{children:"Pick a Character"}),e.jsx(D,{children:a.map((t,s)=>e.jsx(E,{$isActive:c===s,onClick:()=>o(s),children:t},`${t}-${s}`))})]})]})]})})};export{Z as default};

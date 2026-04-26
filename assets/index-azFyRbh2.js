import{i as s,p as C,q as me,K as v,al as je,j as be,l as ve,x,n as t,P as _e,G as Se,T as I,a3 as T,a7 as ee,a8 as te,v as D,A as V,am as ie,an as oe,ao as P,ap as Me,a2 as $e,N as Ce,a1 as ke}from"./index-Qm0jZaIu.js";import{c as ze}from"./confetti.module-ONDKWxYZ.js";import{S as Ae}from"./SpeakIcon-BNWB910a.js";import{P as Te,N as Re}from"./PreviousIcon-NO_EzJEL.js";import{D as We}from"./DifficultyPicker-C9YSz5lF.js";import{C as Ne}from"./ChallengeHeader-Dui8Vge4.js";import{r as re}from"./index-Cx5cuei5.js";import{g as Be,b as K}from"./wordUtils-DPgh885X.js";import{I as De}from"./info-Bg7H-jxJ.js";import{B as se,T as Y,C as ne,R as Le,H as ae}from"./timer-hgSTxBxZ.js";import{C as le}from"./circle-check-dSXsjVuJ.js";import{S as X}from"./search-CqJvsu6X.js";import{C as Pe,S as Fe}from"./spell-check-CBvGKMCF.js";import{S as Oe}from"./scale-Ds_-Fyue.js";import{L as Qe}from"./languages-B-Vual1i.js";import{A as Ee}from"./arrow-up-down-D_N7IY6v.js";s.div`
  position: sticky;
  top: 0;
  z-index: 100;
  background: ${e=>e.theme.colors.background}EE;
  backdrop-filter: blur(8px);
  padding: 15px 0;
  margin-bottom: 20px;
  width: 100%;
`;s.div`
  width: 100%;
  height: 8px;
  background: ${e=>e.theme.colors.primary}15;
  border-radius: 4px;
  overflow: hidden;
`;s(C.div)`
  height: 100%;
  background: ${e=>e.theme.colors.primary};
  border-radius: 4px;
`;const Ue=s.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  padding-bottom: 80px;
`,Ge=s(me)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 60px 30px 35px;
  position: relative;
  background: ${e=>e.theme.colors.surface};
  border-radius: 32px;
  border: 1px solid ${e=>e.theme.colors.primary}15;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: radial-gradient(
      ${e=>e.theme.colors.primary}10 1px,
      transparent 1px
    );
    background-size: 20px 20px;
    opacity: 0.3;
    pointer-events: none;
  }

  @media (max-width: 600px) {
    padding: 70px 20px 30px;
    gap: 20px;
    border-radius: 24px;
  }
`,He=s.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  background: ${e=>e.theme.colors.primary}15;
`,Ie=s(C.div)`
  height: 100%;
  background: ${e=>e.theme.colors.primary};
`,Ve=s.div`
  position: absolute;
  top: 25px;
  left: 30px;
  font-weight: 900;
  font-size: 0.75rem;
  letter-spacing: 2px;
  color: ${e=>e.theme.colors.textSecondary};
  opacity: 0.5;
  text-transform: uppercase;
  font-family: ${e=>e.theme.fonts.primary};

  @media (max-width: 600px) {
    top: 20px;
    left: 20px;
    font-size: 0.65rem;
  }
`,Ke=s.div`
  position: absolute;
  top: 25px;
  right: 30px;
  font-size: 0.75rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 6px 16px;
  border-radius: 12px;
  font-family: ${e=>e.theme.fonts.primary};
  background: ${e=>{switch(e.$type){case"math":return(e.theme.colors.math||e.theme.colors.primary)+"15";case"spelling":case"missing_letter":return(e.theme.colors.english||e.theme.colors.primary)+"15";case"hindi":return(e.theme.colors.hindi||e.theme.colors.primary)+"15";case"comparison":return(e.theme.colors.math||e.theme.colors.primary)+"15";default:return e.theme.colors.primary+"15"}}};
  color: ${e=>{switch(e.$type){case"math":return e.theme.colors.math||e.theme.colors.primary;case"spelling":case"missing_letter":return e.theme.colors.english||e.theme.colors.primary;case"hindi":return e.theme.colors.hindi||e.theme.colors.primary;case"comparison":return e.theme.colors.math||e.theme.colors.primary;default:return e.theme.colors.primary}}};

  @media (max-width: 600px) {
    top: 20px;
    right: 20px;
    font-size: 0.65rem;
    padding: 4px 12px;
  }
`,Ye=s.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 40px;

  @media (max-width: 480px) {
    flex-direction: column;
    text-align: center;
    gap: 8px;
  }
`,Xe=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  padding: 15px 0;

  @media (max-width: 600px) {
    gap: 30px;
    padding: 15px 0;
  }
`,F=s.div`
  font-size: ${e=>e.$fontSize||"clamp(2rem, 5vw, 3.5rem)"};
  font-weight: 900;
  color: ${e=>e.theme.colors.textPrimary};
  text-align: center;
  letter-spacing: 2px;
  font-family: ${e=>e.theme.fonts.primary};

  @media (max-width: 600px) {
    font-size: ${e=>e.$fontSize?"1.5rem":"2rem"};
    letter-spacing: 2px;
  }
`,Je=s(F)`
  font-size: clamp(1.8rem, 4vw, 3rem);
  letter-spacing: 12px;
`,Ze=s.div`
  display: grid;
  grid-template-columns: ${e=>e.$isLong?"1fr":"repeat(2, 1fr)"};
  gap: 20px;
  width: 100%;
  max-width: ${e=>e.$isLong?"600px":"800px"};
  margin: 20px auto 0;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    max-width: 100%;
    gap: 12px;
  }
`,qe=s(C.div)`
  background: ${e=>e.$selected?e.theme.colors.primary:e.theme.colors.primary+"10"};
  color: ${e=>e.$selected?"white":e.theme.colors.primary};
  padding: 12px 24px;
  border-radius: 24px;
  font-size: clamp(1.2rem, 4vw, 1.8rem);
  font-weight: 800;
  border: ${e=>e.$selected?"none":`2px solid ${e.theme.colors.primary}40`};
  cursor: pointer;
  flex: 1;
  min-width: 140px;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  white-space: nowrap;
  line-height: 1.2;
  font-family: ${e=>e.theme.fonts.primary};
  box-shadow: ${e=>e.$selected?e.theme.shadows.md:"none"};
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &:hover {
    background: ${e=>e.$selected?e.theme.colors.primary:e.theme.colors.primary+"15"};
    transform: translateY(-2px);
    box-shadow: ${e=>e.theme.shadows.lg};
  }

  @media (max-width: 576px) {
    height: 64px;
    font-size: 1.5rem;
    min-width: 0;
    width: 100%;
  }
`;s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 40px;
`;const et=s(C.div)`
  position: fixed;
  inset: 0;
  background: ${e=>e.theme.colors.background}FA;
  backdrop-filter: blur(15px);
  z-index: 2000;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
  text-align: center;
  overflow-y: auto;
`,tt=s.div`
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 30px 0;
  max-height: 400px;
  overflow-y: auto;
  padding: 10px;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${e=>e.theme.colors.primary}30;
    border-radius: 10px;
  }
`,it=s.div`
  background: ${e=>e.$correct?e.theme.colors.success+"08":e.theme.colors.warning+"08"};
  border: 1px solid
    ${e=>e.$correct?e.theme.colors.success+"20":e.theme.colors.warning+"20"};
  padding: 24px;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  text-align: left;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.01);
  }
`,ce=s.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;
`,ot=s.div`
  color: #6366f1;
`,rt=s(v)`
  text-align: center;
`,st=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;s.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;s.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;const nt=s(C.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${e=>e.theme.colors.surface};
  padding: 60px;
  border-radius: 48px;
  box-shadow: 0 40px 100px -20px rgba(0, 0, 0, 0.15);
  border: 1px solid ${e=>e.theme.colors.primary}10;
  max-width: 800px;
  width: 90%;
  position: relative;
  overflow: visible;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at center,
      ${e=>e.theme.colors.primary}05 0%,
      transparent 70%
    );
    border-radius: inherit;
    pointer-events: none;
  }

  @media (max-width: 600px) {
    padding: 40px 20px;
  }
`,at=s(C.div)`
  padding: 12px 30px;
  border-radius: 100px;
  background: ${e=>e.$score>=8?"#FFD700":"#94A3B8"}20;
  color: ${e=>e.$score>=8?"#D97706":"#475569"};
  font-weight: 900;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-top: 20px;
  border: 2px solid ${e=>e.$score>=8?"#FFD700":"#94A3B8"}40;
  font-family: ${e=>e.theme.fonts.primary};
`,lt=s(v)`
  margin-bottom: 10px;
`,ct=s(v)`
  margin: 15px 0;
`,dt=s(v)`
  margin-bottom: 10px;
`,mt=s(v)`
  margin-bottom: 25px;
  max-width: 500px;
`,de=s.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  width: 100%;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;

    & > button {
      width: 100%;
    }
  }
`,pt=s(C.div)`
  width: 95%;
  max-width: 900px;
  background: ${e=>e.theme.colors.surface};
  padding: 50px;
  border-radius: 48px;
  box-shadow: 0 40px 100px -20px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 600px) {
    padding: 30px 15px;
  }
`,ht=s(v)`
  margin-bottom: 20px;
`,xt=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;s.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
`;const gt=s(C.div)`
  width: 100%;
`,ft=s.div`
  position: fixed;
  inset: 0;
  z-index: 3000;
  background: white;
`,ut=(e,m,O,z,_)=>{const A=[];let j=["math","spelling","missing_letter","comparison","hindi","logic","sorting"];(e==="math_addition"||e==="math_subtraction"||e==="math_multiplication"||e==="math_division")&&(j=["math"]),e==="math_test"&&(j=["math","comparison","sorting"]),e==="math_sorting"&&(j=["sorting"]),e==="english_missing_letters"&&(j=["missing_letter"]),e==="english_spelling"&&(j=["spelling"]),e==="spelling_test"&&(j=["spelling","missing_letter"]),e==="hindi_test"&&(j=["hindi"]),e==="logic_test"&&(j=["logic","comparison"]);const S=Be();let M=S;m===1?M=S.filter(g=>g.length<=4):m===2||m===3?M=S.filter(g=>g.length>4&&g.length<=7):M=S.filter(g=>g.length>7),M.length===0&&(M=S);const y=["अ","आ","इ","ई","उ","ऊ","ए","ऐ","ओ","औ","क","ख","ग","घ"],L=new Set;for(let g=1;g<=10;g++){let l={},R=0,w="";for(;R<20;){const $=j[Math.floor(Math.random()*j.length)];if(l={id:g,type:$},$==="math"){let o,n;if(m===1)o=Math.floor(Math.random()*9)+1,n=Math.floor(Math.random()*9)+1;else if(m===2){const d=Math.random()>.5;o=d?Math.floor(Math.random()*9)+1:Math.floor(Math.random()*90)+10,n=d?Math.floor(Math.random()*90)+10:Math.floor(Math.random()*9)+1}else m===3?(o=Math.floor(Math.random()*90)+10,n=Math.floor(Math.random()*90)+10):(o=Math.floor(Math.random()*900)+100,n=Math.floor(Math.random()*900)+100);let a="+";if(e==="math_addition")a="+";else if(e==="math_subtraction")a="-";else if(e==="math_multiplication")a="*";else if(e==="math_division")a="/";else{const d=["+","-"];(e==="math_test"||!e||e==="math_multiplication"||e==="math_division")&&m!==1&&(d.push("*"),m>=3&&d.push("/")),a=d[Math.floor(Math.random()*d.length)]}let c=o,p=n,h=0;if(a==="+")h=o+n;else if(a==="-")O?(c=o,p=n):(c=Math.max(o,n),p=Math.min(o,n)),h=c-p;else if(a==="*"){let d=5;(m===2||m===3)&&(d=8),m===4&&(d=12),c=Math.floor(Math.random()*d)+1,p=Math.floor(Math.random()*d)+1,h=c*p}else if(a==="/"){const d=m===1?5:m===2?8:12;if(p=Math.floor(Math.random()*d)+1,z)c=Math.floor(Math.random()*(d*5))+1,h=Number((c/p).toFixed(1));else{const W=Math.floor(Math.random()*d)+1,k=Math.floor(Math.random()*p);c=p*W+k,h=`Q:${W} R:${k}`}}w=`math-${c}${a}${p}`,l.prompt=_.math_solveMath,l.correctAnswer=h.toString();const f=new Set([l.correctAnswer]);for(;f.size<4;){const d=Math.floor(Math.random()*5)+1;if(typeof h=="number")f.add((Math.random()>.5?h+d:Math.max(0,h-d)).toString());else{const W=Math.floor(Math.random()*3)-1,k=Math.floor(Math.random()*3)-1,Q=Math.max(0,Math.floor(c/(p||1))+W),N=Math.max(0,c%(p||1)+k);f.add(`Q:${Q} R:${N}`)}}l.data={n1:c,n2:p,op:a,optionsStrings:Array.from(f).sort(()=>Math.random()-.5)}}else if($==="spelling"){const o=K(M).toUpperCase();w=`spelling-${o}`,l.prompt=_.eng_tapTheWord,l.correctAnswer=o;const n=new Set([o]);for(;n.size<4;)n.add(K(M).toUpperCase());l.data={word:o,optionsStrings:Array.from(n).sort(()=>Math.random()-.5)}}else if($==="missing_letter"){const o=K(M).toUpperCase(),n=Math.floor(Math.random()*o.length),a=o.split(""),c=a[n];a[n]="_",w=`missing-${o}-${n}`,l.prompt=_.eng_chooseMissing,l.correctAnswer=c;const p="ABCDEFGHIJKLMNOPQRSTUVWXYZ",h=new Set([c]);for(;h.size<4;)h.add(p[Math.floor(Math.random()*26)]);l.data={displayWord:a.join(""),word:o,optionsStrings:Array.from(h).sort(()=>Math.random()-.5)}}else if($==="comparison"){const o=[];let n=20;for((m===2||m===3)&&(n=50),m===4&&(n=1e3);o.length<4;){const c=Math.floor(Math.random()*n);o.includes(c)||o.push(c)}const a=Math.random()>.5;w=`comp-${o.sort().join(",")}-${a}`,l.prompt=a?_.math_smallestNumber:_.math_biggestNumber,l.correctAnswer=a?Math.min(...o).toString():Math.max(...o).toString(),l.data={optionsStrings:o.map(String)}}else if($==="logic"){const o=[{sequence:["🍎","🍌","🍎"],next:"🍌"},{sequence:["🐶","🐱","🐶"],next:"🐱"},{sequence:["1","2","1"],next:"2"},{sequence:["⭐","🌙","⭐"],next:"🌙"},{sequence:["🔴","🔵","🔴"],next:"🔵"},{sequence:["🚗","🚕","🚗"],next:"🚕"},{sequence:["🍦","🍩","🍦"],next:"🍩"}],n=o[Math.floor(Math.random()*o.length)];w=`logic-${n.sequence.join("")}`,l.prompt=_.log_whatNext,l.correctAnswer=n.next;const a=new Set([n.next]);for(;a.size<4;){const c=o[Math.floor(Math.random()*o.length)].next;a.add(c)}l.data={displayWord:n.sequence.join(" ")+" ?",optionsStrings:Array.from(a).sort(()=>Math.random()-.5)}}else if($==="hindi"){const o=y[Math.floor(Math.random()*y.length)];w=`hindi-${o}`,l.prompt=_.hindi_tapLetter,l.correctAnswer=o;const n=new Set([o]);for(;n.size<4;)n.add(y[Math.floor(Math.random()*y.length)]);l.data={letter:o,optionsStrings:Array.from(n).sort(()=>Math.random()-.5)}}else if($==="sorting"){const o=[];let n=3,a=10;for((m===2||m===3)&&(n=4,a=20),m===4&&(n=5,a=50);o.length<n;){const f=Math.floor(Math.random()*a)+1;o.includes(f)||o.push(f)}const c=Math.random()>.5;w=`sort-${o.sort().join(",")}-${c}`,l.prompt=c?_.math_sortAsc:_.math_sortDesc;const p=c?[...o].sort((f,d)=>f-d):[...o].sort((f,d)=>d-f);l.correctAnswer=p.join(", ");const h=new Set([l.correctAnswer]);for(;h.size<4;){const f=[...o].sort(()=>Math.random()-.5);h.add(f.join(", "))}l.data={displayWord:o.join("  •  "),optionsStrings:Array.from(h).sort(()=>Math.random()-.5)}}if(!L.has(w)){L.add(w);break}R++}A.push(l)}return A},J=e=>{if(e.type==="math"){const m={"+":"plus","-":"minus","*":"times","/":"divided by"};return`What is ${e.data.n1} ${m[e.data.op||"+"]} ${e.data.n2}?`}return e.type==="missing_letter"?`What is the missing letter in the word ${e.data.word}?`:e.data.word||e.data.letter||e.prompt},yt=e=>e===10?"GRAND MASTER":e===9?"LEGEND":e===8?"PRODIGY":"KIDDOO HERO",Bt=()=>{const{testId:e}=je(),m=be(),O=ve(),[z,_]=x.useState([]),[A,j]=x.useState({}),[S,M]=x.useState(!1),[y,L]=x.useState(0),[g,l]=x.useState(0),[R,w]=x.useState(!1),[$,o]=x.useState(!1),[n,a]=x.useState(!1),[c,p]=x.useState(!1),[h,f]=x.useState(1),[d,W]=x.useState(!1),[k,Q]=x.useState(!1),[N,Z]=x.useState(!1),[B,E]=x.useState(0),U=e==="master_test"||!e,r=$e.en,pe=[{value:1,label:r.com_level+" 1",info:"Single digits (1-9)"},{value:2,label:r.com_level+" 2",info:"One single & one double digit"},{value:3,label:r.com_level+" 3",info:"Two double digits (10-99)"},{value:4,label:r.com_level+" 4",info:"3-digit numbers (100-999)"}],he=()=>{if(U)return r.mst_grandMaster;switch(e){case"math_addition":return r.math_addition;case"math_subtraction":return r.math_subtraction;case"math_multiplication":return r.math_multiplication;case"math_division":return r.math_division;case"math_test":return r.math_mathHero;case"math_sorting":return r.math_sorting;case"english_missing_letters":return r.eng_missingLetters;case"english_spelling":return r.eng_listenAndFind;case"spelling_test":return r.eng_spellingHero;case"hindi_test":return r.hindi_hindiLegend;case"logic_test":return r.log_grandLogic;default:return r.com_tryAgain}},G=x.useCallback(()=>{const i=ut(e,h,d,k,r);_(i),j({}),M(!1),o(!1),w(!1),L(0),l(0),E(0),window.scrollTo({top:0,behavior:"smooth"})},[e,r,h,d,k]);x.useEffect(()=>{G()},[G]),x.useEffect(()=>{let i;return N&&!S&&(i=setInterval(()=>{E(u=>u+1)},1e3)),()=>clearInterval(i)},[N,S]);const H=z[g],xe=(i,u)=>{j(b=>({...b,[i]:u}))},ge=()=>{Z(!0),E(0)},fe=()=>{let i=0;z.forEach(u=>{var b;((b=A[u.id])==null?void 0:b.trim().toUpperCase())===u.correctAnswer.trim().toUpperCase()&&i++}),L(i),M(!0),i>=8&&(ze({particleCount:150,spread:70,origin:{y:.6}}),O(ke("master_test")))},q=()=>{g<z.length-1?(l(i=>i+1),window.scrollTo({top:0,behavior:"smooth"})):fe()},ue=()=>{g>0&&l(i=>i-1)},ye=i=>{if(!i)return null;const u=A[i.id]||"";return t.jsxs(Ge,{$type:i.type,children:[t.jsx(He,{children:t.jsx(Ie,{initial:{width:0},animate:{width:`${(g+1)/10*100}%`},transition:{type:"spring",stiffness:100}})}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[t.jsxs(Ve,{children:[r.test_question," ",i.id," ",r.test_of," 10"]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",color:T.primary,fontWeight:"bold",marginTop:"20px"},children:[t.jsx(Y,{size:18}),Math.floor(B/60),":",(B%60).toString().padStart(2,"0")]})]}),t.jsx(Ke,{$type:i.type,children:i.type.replace("_"," ")}),i.type!=="math"&&t.jsxs(Ye,{children:[t.jsxs(ot,{children:[i.type==="spelling"&&t.jsx(Fe,{size:40}),i.type==="missing_letter"&&t.jsx(X,{size:40}),i.type==="comparison"&&t.jsx(Oe,{size:40}),i.type==="hindi"&&t.jsx(Qe,{size:40}),i.type==="logic"&&t.jsx(se,{size:40}),i.type==="sorting"&&t.jsx(Ee,{size:40})]}),t.jsx(rt,{fontSize:"clamp(1.2rem, 4vw, 1.75rem)",fontWeight:900,color:"textPrimary",children:i.prompt})]}),t.jsxs(Xe,{children:[i.type==="math"&&i.data&&t.jsxs(F,{onClick:()=>re(J(i),i.type==="hindi"?"hi-IN":"en-US"),children:[i.data.n1??0," ",i.data.op??"+"," ",i.data.n2??0]}),(i.type==="spelling"||i.type==="hindi")&&i.data&&t.jsx(st,{children:t.jsx(v,{color:"textSecondary",fontSize:"md",fontWeight:600,children:r.eng_tapSpeaker})}),i.type==="missing_letter"&&i.data&&t.jsx(F,{onClick:()=>re(J(i),i.type==="hindi"?"hi-IN":"en-US"),children:i.data.displayWord}),i.type==="logic"&&i.data&&t.jsx(Je,{children:i.data.displayWord}),i.type==="sorting"&&i.data&&t.jsx(F,{$fontSize:"clamp(2rem, 8vw, 4rem)",children:i.data.displayWord}),i.data.optionsStrings&&t.jsx(Ze,{$isLong:i.data.optionsStrings.some(b=>b.length>12),children:i.data.optionsStrings.map((b,we)=>t.jsx(qe,{$selected:u===b,$color:T.primary,onClick:()=>xe(i.id,b),whileTap:{scale:.95},children:b},we))}),t.jsxs(Ce,{children:[t.jsx(Te,{onClick:ue}),t.jsx(Ae,{text:J(i),lang:i.type==="hindi"?"hi-IN":"en-US"}),g===z.length-1?t.jsx(D,{title:r.com_finish.toUpperCase(),onClick:q,variant:"primary",minWidth:"180px"}):t.jsx(Re,{onClick:q})]})]})]})};return t.jsxs(_e,{children:[t.jsxs(Se,{children:[t.jsx("div",{style:{gridColumn:"1 / -1",width:"100%"},children:t.jsx(Ne,{icon:I,title:he(),subtitle:r.mst_subtitle,streak:0})}),!N&&!S&&t.jsx("div",{style:{gridColumn:"1 / -1",display:"flex",flexDirection:"column",gap:"32px",width:"100%",maxWidth:"none",margin:"0 auto",padding:0},children:t.jsx("div",{style:{width:"100%",borderRadius:"24px",overflow:"hidden"},children:t.jsx(me,{children:t.jsxs("div",{style:{padding:"20px 40px 40px",textAlign:"center"},children:[t.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:"20px"},children:t.jsx("div",{style:{width:"80px",height:"80px",borderRadius:"50%",background:T.primary+"15",display:"flex",alignItems:"center",justifyContent:"center",color:T.primary},children:t.jsx(De,{size:40})})}),t.jsx("div",{style:{marginBottom:"30px"},children:t.jsx(v,{fontSize:"xxl",fontWeight:900,color:"primary",children:r.test_instructions})}),t.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"20px",textAlign:"left",marginBottom:"40px"},children:[{icon:t.jsx(se,{size:20}),text:r.test_qCount},{icon:t.jsx(le,{size:20}),text:r.test_selectBest},{icon:t.jsx(Y,{size:20}),text:r.test_timeRecorded},{icon:t.jsx(I,{size:20}),text:r.test_scoreForCert}].map((i,u)=>t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",padding:"16px",background:T.primary+"08",borderRadius:"16px",border:"1px solid "+T.primary+"15",color:"#475569",fontWeight:600},children:[t.jsx("div",{style:{color:T.primary},children:i.icon}),i.text]},u))}),t.jsxs("div",{style:{marginTop:"40px"},children:[t.jsx(We,{name:"complexity",title:r.com_difficulty,options:pe,currentValue:h,onChange:i=>f(Number(i))}),(e==="math_subtraction"||e==="math_test"||U)&&t.jsxs(ee,{children:[t.jsx(te,{type:"checkbox",checked:d,onChange:i=>W(i.target.checked)}),r.com_allowNegative]}),(e==="math_division"||e==="math_test"||U)&&t.jsxs(ee,{children:[t.jsx(te,{type:"checkbox",checked:k,onChange:i=>Q(i.target.checked)}),r.com_allowDecimals]})]}),t.jsx("div",{style:{marginTop:"40px"},children:t.jsx(D,{title:r.test_start,onClick:ge,variant:"primary",size:"xl",width:"100%"})})]})})})}),N&&!S&&t.jsx("div",{style:{gridColumn:"1 / -1",width:"100%"},children:t.jsx(Ue,{children:t.jsx(V,{mode:"wait",children:H&&t.jsx(gt,{initial:{x:50,opacity:0},animate:{x:0,opacity:1},exit:{x:-50,opacity:0},transition:{type:"spring",damping:20,stiffness:100},children:ye(H)},H.id)})})})]}),S&&t.jsxs(et,{initial:{opacity:0},animate:{opacity:1},children:[!$&&!R&&t.jsxs(nt,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},children:[t.jsx(C.div,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",damping:10},children:t.jsx(I,{size:120,color:y>=8?"#FFD700":"#94A3B8"})}),t.jsxs(ct,{fontSize:"4rem",fontWeight:900,color:"primary",children:[y," / 10"]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",fontSize:"1.5rem",fontWeight:"bold",color:"#64748B",marginBottom:"20px"},children:[t.jsx(Y,{size:24}),"Time: ",Math.floor(B/60),":",(B%60).toString().padStart(2,"0")]}),t.jsx(at,{$score:y,initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.3},children:yt(y)}),t.jsx(dt,{fontSize:"2rem",fontWeight:800,children:y>=8?r.com_genius:r.com_goodEffort}),t.jsx(mt,{fontSize:"lg",color:"textSecondary",children:y>=8?r.com_masteredCurriculum:r.test_keepPracticing}),t.jsxs(de,{children:[y>=8&&t.jsx(D,{title:r.com_getCertificate,onClick:()=>w(!0),variant:"primary"}),t.jsx(D,{title:"Options ▾",onClick:()=>a(!n),variant:"secondary",icon:t.jsx(ne,{size:20})}),t.jsx(V,{children:n&&t.jsxs(t.Fragment,{children:[t.jsx(ie,{onClick:()=>a(!1)}),t.jsxs(oe,{initial:{opacity:0,y:10,scale:.9},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:10,scale:.9},children:[t.jsxs(P,{onClick:()=>{o(!0),a(!1)},children:[t.jsx(X,{size:18})," ",r.com_reviewAnswers]}),t.jsxs(P,{onClick:()=>{G(),Z(!1),a(!1)},children:[t.jsx(Le,{size:18})," ",r.com_tryAgain]}),t.jsxs(P,{onClick:()=>{m("/"),a(!1)},children:[t.jsx(ae,{size:18})," ",r.com_home]})]})]})})]})]}),$&&!R&&t.jsxs(pt,{initial:{x:50,opacity:0},animate:{x:0,opacity:1},children:[t.jsx(lt,{fontSize:"2rem",fontWeight:900,color:"primary",children:r.com_testReview}),t.jsx(ht,{color:"textSecondary",children:r.com_seeWhatLearned}),t.jsx(tt,{children:z.map(i=>{var b;const u=((b=A[i.id])==null?void 0:b.trim().toUpperCase())===i.correctAnswer.trim().toUpperCase();return t.jsxs(it,{$correct:u,children:[t.jsxs(xt,{children:[t.jsxs(v,{fontSize:"md",fontWeight:800,color:"textPrimary",children:["Question ",i.id,": ",i.prompt]}),u?t.jsx(le,{color:"#10B981",size:24}):t.jsx(Pe,{color:"#F59E0B",size:24})]}),t.jsxs(ce,{children:[t.jsx(v,{fontSize:"sm",color:"textSecondary",children:r.com_yourAnswer}),t.jsx(v,{fontSize:"sm",fontWeight:700,color:u?"success":"warning",children:A[i.id]||"(No answer)"})]}),!u&&t.jsxs(ce,{children:[t.jsx(v,{fontSize:"sm",color:"textSecondary",children:r.com_correctAnswer}),t.jsx(v,{fontSize:"sm",fontWeight:700,color:"success",children:i.correctAnswer})]})]},i.id)})}),t.jsxs(de,{children:[y>=8&&t.jsx(D,{title:r.com_getCertificate,onClick:()=>w(!0),variant:"primary"}),t.jsx(D,{title:"Options ▾",onClick:()=>p(!c),variant:"secondary",icon:t.jsx(ne,{size:20})}),t.jsx(V,{children:c&&t.jsxs(t.Fragment,{children:[t.jsx(ie,{onClick:()=>p(!1)}),t.jsxs(oe,{initial:{opacity:0,y:10,scale:.9},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:10,scale:.9},children:[t.jsxs(P,{onClick:()=>{o(!1),p(!1)},children:[t.jsx(X,{size:18})," ",r.com_backToScore]}),t.jsxs(P,{onClick:()=>{m("/"),p(!1)},children:[t.jsx(ae,{size:18})," ",r.com_home]})]})]})})]})]}),R&&t.jsx(ft,{children:t.jsx(Me,{onClose:()=>w(!1),challengeName:(e==null?void 0:e.replace("_"," ").toUpperCase())||"Master Test",score:y,level:"Genius",timeTaken:`${Math.floor(B/60)}:${(B%60).toString().padStart(2,"0")}`})})]})]})};export{Bt as default};

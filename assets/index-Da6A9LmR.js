import{i as o,p as S,q as ae,K as f,aj as se,j as ne,l as ce,x as w,n as i,P as le,G as de,T as Q,A as me,z as pe,v as $,a0 as he,a6 as xe,N as ge,a2 as fe}from"./index-D3dMVveu.js";import{c as ue}from"./confetti.module-ONDKWxYZ.js";import{S as ye}from"./SpeakIcon-J3yoH8lr.js";import{P as we,N as be}from"./PreviousIcon-CgKgewDX.js";import{D as _e}from"./DifficultyPicker-kjdIYDHK.js";import{r as je,C as Se,S as ve}from"./ChallengeHeader-6TPUvztg.js";import{g as $e,b as P}from"./wordUtils-DPgh885X.js";import{C as Ce}from"./circle-check-lp104h0n.js";import{C as Me,S as ke}from"./spell-check-CEW9gBrb.js";import{S as ze}from"./search-D-3O4DID.js";import{S as Ae}from"./scale-CA9UO5DH.js";import{L as Te}from"./languages-gfjfJaaf.js";import{B as We}from"./brain-Bm3LLqmb.js";import{A as Ne}from"./arrow-up-down-CYoFHL_m.js";o.div`
  position: sticky;
  top: 0;
  z-index: 100;
  background: ${e=>e.theme.colors.background}EE;
  backdrop-filter: blur(8px);
  padding: 15px 0;
  margin-bottom: 20px;
  width: 100%;
`;o.div`
  width: 100%;
  height: 8px;
  background: ${e=>e.theme.colors.primary}15;
  border-radius: 4px;
  overflow: hidden;
`;o(S.div)`
  height: 100%;
  background: ${e=>e.theme.colors.primary};
  border-radius: 4px;
`;const Re=o.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  padding-bottom: 80px;
`,Ee=o(ae)`
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
`,Le=o.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  background: ${e=>e.theme.colors.primary}15;
`,De=o(S.div)`
  height: 100%;
  background: ${e=>e.theme.colors.primary};
`,Pe=o.div`
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
`,Be=o.div`
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
`,Fe=o.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 40px;

  @media (max-width: 480px) {
    flex-direction: column;
    text-align: center;
    gap: 8px;
  }
`,Ie=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  padding: 15px 0;

  @media (max-width: 600px) {
    gap: 30px;
    padding: 15px 0;
  }
`,N=o.div`
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
`,Ue=o(N)`
  font-size: clamp(1.8rem, 4vw, 3rem);
  letter-spacing: 12px;
`,He=o.div`
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
`,Oe=o(S.div)`
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
  word-break: break-word;
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
`;o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 40px;
`;const Qe=o(S.div)`
  position: fixed;
  inset: 0;
  background: ${e=>e.theme.colors.background}FA;
  backdrop-filter: blur(15px);
  z-index: 2000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  text-align: center;
  overflow-y: auto;
`,Ge=o.div`
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
`,Ke=o.div`
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
`,G=o.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;
`,Ve=o.div`
  color: #6366f1;
`,Ye=o(f)`
  text-align: center;
`,Xe=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;o.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;o.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;const Je=o(S.div)`
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
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle,
      ${e=>e.theme.colors.primary}05 0%,
      transparent 70%
    );
    pointer-events: none;
  }

  @media (max-width: 600px) {
    padding: 40px 20px;
  }
`,Ze=o(S.div)`
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
`,qe=o(f)`
  margin-bottom: 10px;
`,et=o(f)`
  margin: 30px 0;
`,tt=o(f)`
  margin-bottom: 10px;
`,it=o(f)`
  margin-bottom: 50px;
  max-width: 500px;
`,K=o.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
`,rt=o(S.div)`
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
`,ot=o(f)`
  margin-bottom: 20px;
`,at=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;o.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
`;const st=o(S.div)`
  width: 100%;
`,nt=o.div`
  position: fixed;
  inset: 0;
  z-index: 3000;
  background: white;
`,jt=()=>{const{testId:e}=se(),B=ne(),V=ce(),[k,Y]=w.useState([]),[z,F]=w.useState({}),[A,I]=w.useState(!1),[u,U]=w.useState(0),[C,R]=w.useState(0),[E,T]=w.useState(!1),[H,L]=w.useState(!1),[x,X]=w.useState("Easy"),J=e==="master_test"||!e,r=xe.en,Z=C>0||Object.keys(z).length>0,q=[{value:"Easy",label:r.com_easy},{value:"Medium",label:r.com_medium},{value:"Hard",label:r.com_hard}],ee=()=>{if(J)return r.mst_grandMaster;switch(e){case"math_addition":return r.math_addition;case"math_subtraction":return r.math_subtraction;case"math_multiplication":return r.math_multiplication;case"math_test":return r.math_mathHero;case"math_sorting":return r.math_sorting;case"english_missing_letters":return r.eng_missingLetters;case"english_spelling":return r.eng_listenAndFind;case"spelling_test":return r.eng_spellingHero;case"hindi_test":return r.hindi_hindiLegend;case"logic_test":return r.log_grandLogic;default:return r.com_tryAgain}},D=w.useCallback(()=>{const t=[];let n=["math","spelling","missing_letter","comparison","hindi","logic","sorting"];(e==="math_addition"||e==="math_subtraction"||e==="math_multiplication")&&(n=["math"]),e==="math_test"&&(n=["math","comparison","sorting"]),e==="math_sorting"&&(n=["sorting"]),e==="english_missing_letters"&&(n=["missing_letter"]),e==="english_spelling"&&(n=["spelling"]),e==="spelling_test"&&(n=["spelling","missing_letter"]),e==="hindi_test"&&(n=["hindi"]),e==="logic_test"&&(n=["logic","comparison"]);const l=$e();let b=l;x==="Easy"?b=l.filter(_=>_.length<=4):x==="Medium"?b=l.filter(_=>_.length>4&&_.length<=7):b=l.filter(_=>_.length>7),b.length===0&&(b=l);const W=["अ","आ","इ","ई","उ","ऊ","ए","ऐ","ओ","औ","क","ख","ग","घ"];for(let _=1;_<=10;_++){const v=n[Math.floor(Math.random()*n.length)],c={id:_,type:v};if(v==="math"){let a=10;x==="Medium"&&(a=20),x==="Hard"&&(a=50);const s=Math.floor(Math.random()*a)+1,d=Math.floor(Math.random()*a)+1;let m="+";if(e==="math_addition")m="+";else if(e==="math_subtraction")m="-";else if(e==="math_multiplication")m="*";else{const y=["+","-"];(e==="math_test"||!e||e==="math_multiplication")&&x!=="Easy"&&y.push("*"),m=y[Math.floor(Math.random()*y.length)]}let j=s,g=d,h=0;if(m==="+")h=s+d;else if(m==="-")j=Math.max(s,d),g=Math.min(s,d),h=j-g;else{let y=5;x==="Medium"&&(y=6),x==="Hard"&&(y=10),j=Math.floor(Math.random()*y)+1,g=Math.floor(Math.random()*y)+1,h=j*g}c.prompt=r.math_solveMath,c.correctAnswer=h.toString();const M=new Set([c.correctAnswer]);for(;M.size<4;){const y=Math.floor(Math.random()*5)+1;M.add((Math.random()>.5?h+y:Math.max(0,h-y)).toString())}c.data={n1:j,n2:g,op:m,optionsStrings:Array.from(M).sort(()=>Math.random()-.5)}}else if(v==="spelling"){const a=P(b).toUpperCase();c.prompt=r.eng_tapTheWord,c.correctAnswer=a;const s=new Set([a]);for(;s.size<4;)s.add(P(b).toUpperCase());c.data={word:a,optionsStrings:Array.from(s).sort(()=>Math.random()-.5)}}else if(v==="missing_letter"){const a=P(b).toUpperCase(),s=Math.floor(Math.random()*a.length),d=a.split(""),m=d[s];d[s]="_",c.prompt=r.eng_chooseMissing,c.correctAnswer=m;const j="ABCDEFGHIJKLMNOPQRSTUVWXYZ",g=new Set([m]);for(;g.size<4;)g.add(j[Math.floor(Math.random()*26)]);c.data={displayWord:d.join(""),word:a,optionsStrings:Array.from(g).sort(()=>Math.random()-.5)}}else if(v==="comparison"){const a=[];let s=20;for(x==="Medium"&&(s=50),x==="Hard"&&(s=100);a.length<4;){const m=Math.floor(Math.random()*s);a.includes(m)||a.push(m)}const d=Math.random()>.5;c.prompt=d?r.math_smallestNumber:r.math_biggestNumber,c.correctAnswer=d?Math.min(...a).toString():Math.max(...a).toString(),c.data={optionsStrings:a.map(String)}}else if(v==="logic"){const a=[{sequence:["🍎","🍌","🍎"],next:"🍌"},{sequence:["🐶","🐱","🐶"],next:"🐱"},{sequence:["1","2","1"],next:"2"},{sequence:["⭐","🌙","⭐"],next:"🌙"},{sequence:["🔴","🔵","🔴"],next:"🔵"},{sequence:["🚗","🚕","🚗"],next:"🚕"},{sequence:["🍦","🍩","🍦"],next:"🍩"}],s=a[Math.floor(Math.random()*a.length)];c.prompt=r.log_whatNext,c.correctAnswer=s.next;const d=new Set([s.next]);for(;d.size<4;){const m=a[Math.floor(Math.random()*a.length)].next;d.add(m)}c.data={displayWord:s.sequence.join(" ")+" ?",optionsStrings:Array.from(d).sort(()=>Math.random()-.5)}}else if(v==="hindi"){const a=W[Math.floor(Math.random()*W.length)];c.prompt=r.hindi_tapLetter,c.correctAnswer=a;const s=new Set([a]);for(;s.size<4;)s.add(W[Math.floor(Math.random()*W.length)]);c.data={letter:a,optionsStrings:Array.from(s).sort(()=>Math.random()-.5)}}else if(v==="sorting"){const a=[];let s=3,d=10;for(x==="Medium"&&(s=4,d=20),x==="Hard"&&(s=5,d=50);a.length<s;){const h=Math.floor(Math.random()*d)+1;a.includes(h)||a.push(h)}const m=Math.random()>.5;c.prompt=m?r.math_sortAsc:r.math_sortDesc;const j=m?[...a].sort((h,M)=>h-M):[...a].sort((h,M)=>M-h);c.correctAnswer=j.join(", ");const g=new Set([c.correctAnswer]);for(;g.size<4;){const h=[...a].sort(()=>Math.random()-.5);g.add(h.join(", "))}c.data={displayWord:a.join("  •  "),optionsStrings:Array.from(g).sort(()=>Math.random()-.5)}}t.push(c)}Y(t),F({}),I(!1),L(!1),T(!1),U(0),R(0),window.scrollTo({top:0,behavior:"smooth"})},[e,r,x]);w.useEffect(()=>{D()},[D]);const p=k[C];w.useEffect(()=>{if(p&&!A){const t=p.type==="math"?`What is ${p.data.n1} ${p.data.op==="+"?"plus":p.data.op==="-"?"minus":"times"} ${p.data.n2}?`:p.type==="missing_letter"?`What is the missing letter in the word ${p.data.word}?`:p.data.word||p.data.letter||p.prompt,n=p.type==="hindi"?"hi-IN":"en-US",l=setTimeout(()=>{je(t,n)},600);return()=>clearTimeout(l)}},[C,p,A]);const te=(t,n)=>{F(l=>({...l,[t]:n}))},ie=()=>{let t=0;k.forEach(n=>{var l;((l=z[n.id])==null?void 0:l.trim().toUpperCase())===n.correctAnswer.trim().toUpperCase()&&t++}),U(t),I(!0),t>=8&&(ue({particleCount:150,spread:70,origin:{y:.6}}),V(fe("master_test")))},O=()=>{C<k.length-1?(R(t=>t+1),window.scrollTo({top:0,behavior:"smooth"})):ie()},re=()=>{C>0&&R(t=>t-1)},oe=t=>{if(!t)return null;const n=z[t.id]||"";return i.jsxs(Ee,{$type:t.type,children:[i.jsx(Le,{children:i.jsx(De,{initial:{width:0},animate:{width:`${(C+1)/10*100}%`},transition:{type:"spring",stiffness:100}})}),i.jsxs(Pe,{children:["QUESTION ",t.id," OF 10"]}),i.jsx(Be,{$type:t.type,children:t.type.replace("_"," ")}),t.type!=="math"&&i.jsxs(Fe,{children:[i.jsxs(Ve,{children:[t.type==="spelling"&&i.jsx(ke,{size:40}),t.type==="missing_letter"&&i.jsx(ze,{size:40}),t.type==="comparison"&&i.jsx(Ae,{size:40}),t.type==="hindi"&&i.jsx(Te,{size:40}),t.type==="logic"&&i.jsx(We,{size:40}),t.type==="sorting"&&i.jsx(Ne,{size:40})]}),i.jsx(Ye,{fontSize:"clamp(1.2rem, 4vw, 1.75rem)",fontWeight:900,color:"textPrimary",children:t.prompt})]}),i.jsxs(Ie,{children:[t.type==="math"&&t.data&&i.jsxs(N,{children:[t.data.n1??0," ",t.data.op??"+"," ",t.data.n2??0]}),(t.type==="spelling"||t.type==="hindi")&&t.data&&i.jsx(Xe,{children:i.jsx(f,{color:"textSecondary",fontSize:"md",fontWeight:600,children:r.eng_tapSpeaker})}),t.type==="missing_letter"&&t.data&&i.jsx(N,{children:t.data.displayWord}),t.type==="logic"&&t.data&&i.jsx(Ue,{children:t.data.displayWord}),t.type==="sorting"&&t.data&&i.jsx(N,{$fontSize:"clamp(2rem, 8vw, 4rem)",children:t.data.displayWord}),t.data.optionsStrings&&i.jsx(He,{$isLong:t.data.optionsStrings.some(l=>l.length>12),children:t.data.optionsStrings.map((l,b)=>i.jsx(Oe,{$selected:n===l,$color:"#6366F1",onClick:()=>te(t.id,l),whileTap:{scale:.95},children:l},b))}),i.jsxs(ge,{children:[i.jsx(we,{onClick:re}),i.jsx(ye,{text:t.type==="math"?`What is ${t.data.n1} ${t.data.op==="+"?"plus":t.data.op==="-"?"minus":"times"} ${t.data.n2}?`:t.type==="missing_letter"?`What is the missing letter in the word ${t.data.word}?`:t.data.word||t.data.letter||t.prompt,lang:t.type==="hindi"?"hi-IN":"en-US"}),C===k.length-1?i.jsx($,{title:r.com_finish.toUpperCase(),onClick:O,variant:"primary",minWidth:"180px"}):i.jsx(be,{onClick:O})]})]})]})};return i.jsxs(le,{children:[i.jsxs(de,{children:[i.jsx(Se,{icon:Q,title:ee(),subtitle:r.mst_subtitle,streak:0}),i.jsx(ve,{title:r.com_readyForTest,subtitle:r.mst_subtitle,onClick:()=>{}}),i.jsx(Re,{children:i.jsx(me,{mode:"wait",children:p&&i.jsx(st,{initial:{x:50,opacity:0},animate:{x:0,opacity:1},exit:{x:-50,opacity:0},transition:{type:"spring",damping:20,stiffness:100},children:oe(p)},p.id)})}),!A&&i.jsx(pe,{"data-testid":"settings-area",children:i.jsx(_e,{name:"complexity",title:r.com_difficulty,options:q,currentValue:x,onChange:t=>X(t),disabled:Z})})]}),A&&i.jsxs(Qe,{initial:{opacity:0},animate:{opacity:1},children:[!H&&!E&&i.jsxs(Je,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},children:[i.jsx(S.div,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",damping:10},children:i.jsx(Q,{size:120,color:u>=8?"#FFD700":"#94A3B8"})}),i.jsxs(et,{fontSize:"4rem",fontWeight:900,color:"primary",children:[u," / 10"]}),i.jsx(Ze,{$score:u,initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.3},children:u===10?"GRAND MASTER":u===9?"LEGEND":u===8?"PRODIGY":"KIDDOO HERO"}),i.jsx(tt,{fontSize:"2rem",fontWeight:800,children:u>=8?r.com_genius:r.com_goodEffort}),i.jsx(it,{fontSize:"lg",color:"textSecondary",children:u>=8?r.com_masteredCurriculum:r.com_keepPracticing}),i.jsxs(K,{children:[i.jsx($,{title:r.com_reviewAnswers,onClick:()=>L(!0),variant:"secondary"}),u>=8&&i.jsx($,{title:r.com_getCertificate,onClick:()=>T(!0),variant:"primary"}),i.jsx($,{title:r.com_tryAgain,onClick:D,variant:"secondary"}),i.jsx($,{title:r.com_home,onClick:()=>B("/"),variant:"primary"})]})]}),H&&!E&&i.jsxs(rt,{initial:{x:50,opacity:0},animate:{x:0,opacity:1},children:[i.jsx(qe,{fontSize:"2rem",fontWeight:900,color:"primary",children:r.com_testReview}),i.jsx(ot,{color:"textSecondary",children:r.com_seeWhatLearned}),i.jsx(Ge,{children:k.map(t=>{var l;const n=((l=z[t.id])==null?void 0:l.trim().toUpperCase())===t.correctAnswer.trim().toUpperCase();return i.jsxs(Ke,{$correct:n,children:[i.jsxs(at,{children:[i.jsxs(f,{fontSize:"md",fontWeight:800,color:"textPrimary",children:["Question ",t.id,": ",t.prompt]}),n?i.jsx(Ce,{color:"#10B981",size:24}):i.jsx(Me,{color:"#F59E0B",size:24})]}),i.jsxs(G,{children:[i.jsx(f,{fontSize:"sm",color:"textSecondary",children:r.com_yourAnswer}),i.jsx(f,{fontSize:"sm",fontWeight:700,color:n?"success":"warning",children:z[t.id]||"(No answer)"})]}),!n&&i.jsxs(G,{children:[i.jsx(f,{fontSize:"sm",color:"textSecondary",children:r.com_correctAnswer}),i.jsx(f,{fontSize:"sm",fontWeight:700,color:"success",children:t.correctAnswer})]})]},t.id)})}),i.jsxs(K,{children:[i.jsx($,{title:r.com_backToScore,onClick:()=>L(!1),variant:"secondary"}),u>=8&&i.jsx($,{title:r.com_getCertificate,onClick:()=>T(!0),variant:"primary"}),i.jsx($,{title:r.com_home,onClick:()=>B("/"),variant:"primary"})]})]}),E&&i.jsx(nt,{children:i.jsx(he,{onClose:()=>T(!1),challengeName:(e==null?void 0:e.replace("_"," ").toUpperCase())||"Master Test",score:u,level:"Genius"})})]})]})};export{jt as default};

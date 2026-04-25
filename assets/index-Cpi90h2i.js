import{i as a,p as $,q as le,K as f,ak as ce,j as de,l as me,x as w,n as i,P as pe,G as he,T as V,A as xe,z as ge,v as C,a0 as fe,a6 as ue,N as ye,a2 as we}from"./index-S6EAxzK5.js";import{c as be}from"./confetti.module-ONDKWxYZ.js";import{S as _e}from"./SpeakIcon-BhYWrM2h.js";import{P as je,N as Se}from"./PreviousIcon-CTqiZtaM.js";import{D as $e}from"./DifficultyPicker-BiSHlKTa.js";import{r as ve,C as Ce,S as Me}from"./ChallengeHeader-Dd5GSdB_.js";import{g as ke,b as B}from"./wordUtils-DPgh885X.js";import{C as ze}from"./circle-check-DwGEYaaa.js";import{C as Ae,S as Te}from"./spell-check-Cxyfi5mP.js";import{S as We}from"./search-BqMoK05i.js";import{S as Ne}from"./scale-ByjwYly4.js";import{L as Re}from"./languages-CM6MYhAI.js";import{B as Ee}from"./brain-COQQBGM5.js";import{A as Le}from"./arrow-up-down-C9VwkFuw.js";a.div`
  position: sticky;
  top: 0;
  z-index: 100;
  background: ${e=>e.theme.colors.background}EE;
  backdrop-filter: blur(8px);
  padding: 15px 0;
  margin-bottom: 20px;
  width: 100%;
`;a.div`
  width: 100%;
  height: 8px;
  background: ${e=>e.theme.colors.primary}15;
  border-radius: 4px;
  overflow: hidden;
`;a($.div)`
  height: 100%;
  background: ${e=>e.theme.colors.primary};
  border-radius: 4px;
`;const De=a.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  padding-bottom: 80px;
`,Pe=a(le)`
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
`,Be=a.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  background: ${e=>e.theme.colors.primary}15;
`,Fe=a($.div)`
  height: 100%;
  background: ${e=>e.theme.colors.primary};
`,Ie=a.div`
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
`,Ue=a.div`
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
`,He=a.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 40px;

  @media (max-width: 480px) {
    flex-direction: column;
    text-align: center;
    gap: 8px;
  }
`,Oe=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  padding: 15px 0;

  @media (max-width: 600px) {
    gap: 30px;
    padding: 15px 0;
  }
`,R=a.div`
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
`,Qe=a(R)`
  font-size: clamp(1.8rem, 4vw, 3rem);
  letter-spacing: 12px;
`,Ge=a.div`
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
`,Ke=a($.div)`
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
`;a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 40px;
`;const Ve=a($.div)`
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
`,Ye=a.div`
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
`,Xe=a.div`
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
`,Y=a.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;
`,Je=a.div`
  color: #6366f1;
`,Ze=a(f)`
  text-align: center;
`,qe=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;a.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;a.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;const et=a($.div)`
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
`,tt=a($.div)`
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
`,it=a(f)`
  margin-bottom: 10px;
`,rt=a(f)`
  margin: 30px 0;
`,ot=a(f)`
  margin-bottom: 10px;
`,at=a(f)`
  margin-bottom: 50px;
  max-width: 500px;
`,X=a.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
`,st=a($.div)`
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
`,nt=a(f)`
  margin-bottom: 20px;
`,lt=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;a.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
`;const ct=a($.div)`
  width: 100%;
`,dt=a.div`
  position: fixed;
  inset: 0;
  z-index: 3000;
  background: white;
`,vt=()=>{const{testId:e}=ce(),F=de(),J=me(),[z,Z]=w.useState([]),[A,I]=w.useState({}),[T,U]=w.useState(!1),[u,H]=w.useState(0),[M,E]=w.useState(0),[L,W]=w.useState(!1),[O,D]=w.useState(!1),[g,q]=w.useState("Easy"),ee=e==="master_test"||!e,r=ue.en,te=M>0||Object.keys(A).length>0,ie=[{value:"Easy",label:r.com_easy},{value:"Medium",label:r.com_medium},{value:"Hard",label:r.com_hard}],re=()=>{if(ee)return r.mst_grandMaster;switch(e){case"math_addition":return r.math_addition;case"math_subtraction":return r.math_subtraction;case"math_multiplication":return r.math_multiplication;case"math_test":return r.math_mathHero;case"math_sorting":return r.math_sorting;case"english_missing_letters":return r.eng_missingLetters;case"english_spelling":return r.eng_listenAndFind;case"spelling_test":return r.eng_spellingHero;case"hindi_test":return r.hindi_hindiLegend;case"logic_test":return r.log_grandLogic;default:return r.com_tryAgain}},P=w.useCallback(()=>{const t=[];let l=["math","spelling","missing_letter","comparison","hindi","logic","sorting"];(e==="math_addition"||e==="math_subtraction"||e==="math_multiplication")&&(l=["math"]),e==="math_test"&&(l=["math","comparison","sorting"]),e==="math_sorting"&&(l=["sorting"]),e==="english_missing_letters"&&(l=["missing_letter"]),e==="english_spelling"&&(l=["spelling"]),e==="spelling_test"&&(l=["spelling","missing_letter"]),e==="hindi_test"&&(l=["hindi"]),e==="logic_test"&&(l=["logic","comparison"]);const c=ke();let b=c;g==="Easy"?b=c.filter(_=>_.length<=4):g==="Medium"?b=c.filter(_=>_.length>4&&_.length<=7):b=c.filter(_=>_.length>7),b.length===0&&(b=c);const N=["अ","आ","इ","ई","उ","ऊ","ए","ऐ","ओ","औ","क","ख","ग","घ"],G=new Set;for(let _=1;_<=10;_++){let n={},K=0,S="";for(;K<20;){const v=l[Math.floor(Math.random()*l.length)];if(n={id:_,type:v},v==="math"){let o=10;g==="Medium"&&(o=20),g==="Hard"&&(o=50);const s=Math.floor(Math.random()*o)+1,d=Math.floor(Math.random()*o)+1;let m="+";if(e==="math_addition")m="+";else if(e==="math_subtraction")m="-";else if(e==="math_multiplication")m="*";else{const y=["+","-"];(e==="math_test"||!e||e==="math_multiplication")&&g!=="Easy"&&y.push("*"),m=y[Math.floor(Math.random()*y.length)]}let j=s,x=d,h=0;if(m==="+")h=s+d;else if(m==="-")j=Math.max(s,d),x=Math.min(s,d),h=j-x;else{let y=5;g==="Medium"&&(y=6),g==="Hard"&&(y=10),j=Math.floor(Math.random()*y)+1,x=Math.floor(Math.random()*y)+1,h=j*x}S=`math-${j}${m}${x}`,n.prompt=r.math_solveMath,n.correctAnswer=h.toString();const k=new Set([n.correctAnswer]);for(;k.size<4;){const y=Math.floor(Math.random()*5)+1;k.add((Math.random()>.5?h+y:Math.max(0,h-y)).toString())}n.data={n1:j,n2:x,op:m,optionsStrings:Array.from(k).sort(()=>Math.random()-.5)}}else if(v==="spelling"){const o=B(b).toUpperCase();S=`spelling-${o}`,n.prompt=r.eng_tapTheWord,n.correctAnswer=o;const s=new Set([o]);for(;s.size<4;)s.add(B(b).toUpperCase());n.data={word:o,optionsStrings:Array.from(s).sort(()=>Math.random()-.5)}}else if(v==="missing_letter"){const o=B(b).toUpperCase(),s=Math.floor(Math.random()*o.length),d=o.split(""),m=d[s];d[s]="_",S=`missing-${o}-${s}`,n.prompt=r.eng_chooseMissing,n.correctAnswer=m;const j="ABCDEFGHIJKLMNOPQRSTUVWXYZ",x=new Set([m]);for(;x.size<4;)x.add(j[Math.floor(Math.random()*26)]);n.data={displayWord:d.join(""),word:o,optionsStrings:Array.from(x).sort(()=>Math.random()-.5)}}else if(v==="comparison"){const o=[];let s=20;for(g==="Medium"&&(s=50),g==="Hard"&&(s=100);o.length<4;){const m=Math.floor(Math.random()*s);o.includes(m)||o.push(m)}const d=Math.random()>.5;S=`comp-${o.sort().join(",")}-${d}`,n.prompt=d?r.math_smallestNumber:r.math_biggestNumber,n.correctAnswer=d?Math.min(...o).toString():Math.max(...o).toString(),n.data={optionsStrings:o.map(String)}}else if(v==="logic"){const o=[{sequence:["🍎","🍌","🍎"],next:"🍌"},{sequence:["🐶","🐱","🐶"],next:"🐱"},{sequence:["1","2","1"],next:"2"},{sequence:["⭐","🌙","⭐"],next:"🌙"},{sequence:["🔴","🔵","🔴"],next:"🔵"},{sequence:["🚗","🚕","🚗"],next:"🚕"},{sequence:["🍦","🍩","🍦"],next:"🍩"}],s=o[Math.floor(Math.random()*o.length)];S=`logic-${s.sequence.join("")}`,n.prompt=r.log_whatNext,n.correctAnswer=s.next;const d=new Set([s.next]);for(;d.size<4;){const m=o[Math.floor(Math.random()*o.length)].next;d.add(m)}n.data={displayWord:s.sequence.join(" ")+" ?",optionsStrings:Array.from(d).sort(()=>Math.random()-.5)}}else if(v==="hindi"){const o=N[Math.floor(Math.random()*N.length)];S=`hindi-${o}`,n.prompt=r.hindi_tapLetter,n.correctAnswer=o;const s=new Set([o]);for(;s.size<4;)s.add(N[Math.floor(Math.random()*N.length)]);n.data={letter:o,optionsStrings:Array.from(s).sort(()=>Math.random()-.5)}}else if(v==="sorting"){const o=[];let s=3,d=10;for(g==="Medium"&&(s=4,d=20),g==="Hard"&&(s=5,d=50);o.length<s;){const h=Math.floor(Math.random()*d)+1;o.includes(h)||o.push(h)}const m=Math.random()>.5;S=`sort-${o.sort().join(",")}-${m}`,n.prompt=m?r.math_sortAsc:r.math_sortDesc;const j=m?[...o].sort((h,k)=>h-k):[...o].sort((h,k)=>k-h);n.correctAnswer=j.join(", ");const x=new Set([n.correctAnswer]);for(;x.size<4;){const h=[...o].sort(()=>Math.random()-.5);x.add(h.join(", "))}n.data={displayWord:o.join("  •  "),optionsStrings:Array.from(x).sort(()=>Math.random()-.5)}}if(!G.has(S)){G.add(S);break}K++}t.push(n)}Z(t),I({}),U(!1),D(!1),W(!1),H(0),E(0),window.scrollTo({top:0,behavior:"smooth"})},[e,r,g]);w.useEffect(()=>{P()},[P]);const p=z[M];w.useEffect(()=>{if(p&&!T){const t=p.type==="math"?`What is ${p.data.n1} ${p.data.op==="+"?"plus":p.data.op==="-"?"minus":"times"} ${p.data.n2}?`:p.type==="missing_letter"?`What is the missing letter in the word ${p.data.word}?`:p.data.word||p.data.letter||p.prompt,l=p.type==="hindi"?"hi-IN":"en-US",c=setTimeout(()=>{ve(t,l)},600);return()=>clearTimeout(c)}},[M,p,T]);const oe=(t,l)=>{I(c=>({...c,[t]:l}))},ae=()=>{let t=0;z.forEach(l=>{var c;((c=A[l.id])==null?void 0:c.trim().toUpperCase())===l.correctAnswer.trim().toUpperCase()&&t++}),H(t),U(!0),t>=8&&(be({particleCount:150,spread:70,origin:{y:.6}}),J(we("master_test")))},Q=()=>{M<z.length-1?(E(t=>t+1),window.scrollTo({top:0,behavior:"smooth"})):ae()},se=()=>{M>0&&E(t=>t-1)},ne=t=>{if(!t)return null;const l=A[t.id]||"";return i.jsxs(Pe,{$type:t.type,children:[i.jsx(Be,{children:i.jsx(Fe,{initial:{width:0},animate:{width:`${(M+1)/10*100}%`},transition:{type:"spring",stiffness:100}})}),i.jsxs(Ie,{children:["QUESTION ",t.id," OF 10"]}),i.jsx(Ue,{$type:t.type,children:t.type.replace("_"," ")}),t.type!=="math"&&i.jsxs(He,{children:[i.jsxs(Je,{children:[t.type==="spelling"&&i.jsx(Te,{size:40}),t.type==="missing_letter"&&i.jsx(We,{size:40}),t.type==="comparison"&&i.jsx(Ne,{size:40}),t.type==="hindi"&&i.jsx(Re,{size:40}),t.type==="logic"&&i.jsx(Ee,{size:40}),t.type==="sorting"&&i.jsx(Le,{size:40})]}),i.jsx(Ze,{fontSize:"clamp(1.2rem, 4vw, 1.75rem)",fontWeight:900,color:"textPrimary",children:t.prompt})]}),i.jsxs(Oe,{children:[t.type==="math"&&t.data&&i.jsxs(R,{children:[t.data.n1??0," ",t.data.op??"+"," ",t.data.n2??0]}),(t.type==="spelling"||t.type==="hindi")&&t.data&&i.jsx(qe,{children:i.jsx(f,{color:"textSecondary",fontSize:"md",fontWeight:600,children:r.eng_tapSpeaker})}),t.type==="missing_letter"&&t.data&&i.jsx(R,{children:t.data.displayWord}),t.type==="logic"&&t.data&&i.jsx(Qe,{children:t.data.displayWord}),t.type==="sorting"&&t.data&&i.jsx(R,{$fontSize:"clamp(2rem, 8vw, 4rem)",children:t.data.displayWord}),t.data.optionsStrings&&i.jsx(Ge,{$isLong:t.data.optionsStrings.some(c=>c.length>12),children:t.data.optionsStrings.map((c,b)=>i.jsx(Ke,{$selected:l===c,$color:"#6366F1",onClick:()=>oe(t.id,c),whileTap:{scale:.95},children:c},b))}),i.jsxs(ye,{children:[i.jsx(je,{onClick:se}),i.jsx(_e,{text:t.type==="math"?`What is ${t.data.n1} ${t.data.op==="+"?"plus":t.data.op==="-"?"minus":"times"} ${t.data.n2}?`:t.type==="missing_letter"?`What is the missing letter in the word ${t.data.word}?`:t.data.word||t.data.letter||t.prompt,lang:t.type==="hindi"?"hi-IN":"en-US"}),M===z.length-1?i.jsx(C,{title:r.com_finish.toUpperCase(),onClick:Q,variant:"primary",minWidth:"180px"}):i.jsx(Se,{onClick:Q})]})]})]})};return i.jsxs(pe,{children:[i.jsxs(he,{children:[i.jsx(Ce,{icon:V,title:re(),subtitle:r.mst_subtitle,streak:0}),i.jsx(Me,{title:r.com_readyForTest,subtitle:r.mst_subtitle,onClick:()=>{}}),i.jsx(De,{children:i.jsx(xe,{mode:"wait",children:p&&i.jsx(ct,{initial:{x:50,opacity:0},animate:{x:0,opacity:1},exit:{x:-50,opacity:0},transition:{type:"spring",damping:20,stiffness:100},children:ne(p)},p.id)})}),!T&&i.jsx(ge,{"data-testid":"settings-area",children:i.jsx($e,{name:"complexity",title:r.com_difficulty,options:ie,currentValue:g,onChange:t=>q(t),disabled:te})})]}),T&&i.jsxs(Ve,{initial:{opacity:0},animate:{opacity:1},children:[!O&&!L&&i.jsxs(et,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},children:[i.jsx($.div,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",damping:10},children:i.jsx(V,{size:120,color:u>=8?"#FFD700":"#94A3B8"})}),i.jsxs(rt,{fontSize:"4rem",fontWeight:900,color:"primary",children:[u," / 10"]}),i.jsx(tt,{$score:u,initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.3},children:u===10?"GRAND MASTER":u===9?"LEGEND":u===8?"PRODIGY":"KIDDOO HERO"}),i.jsx(ot,{fontSize:"2rem",fontWeight:800,children:u>=8?r.com_genius:r.com_goodEffort}),i.jsx(at,{fontSize:"lg",color:"textSecondary",children:u>=8?r.com_masteredCurriculum:r.com_keepPracticing}),i.jsxs(X,{children:[i.jsx(C,{title:r.com_reviewAnswers,onClick:()=>D(!0),variant:"secondary"}),u>=8&&i.jsx(C,{title:r.com_getCertificate,onClick:()=>W(!0),variant:"primary"}),i.jsx(C,{title:r.com_tryAgain,onClick:P,variant:"secondary"}),i.jsx(C,{title:r.com_home,onClick:()=>F("/"),variant:"primary"})]})]}),O&&!L&&i.jsxs(st,{initial:{x:50,opacity:0},animate:{x:0,opacity:1},children:[i.jsx(it,{fontSize:"2rem",fontWeight:900,color:"primary",children:r.com_testReview}),i.jsx(nt,{color:"textSecondary",children:r.com_seeWhatLearned}),i.jsx(Ye,{children:z.map(t=>{var c;const l=((c=A[t.id])==null?void 0:c.trim().toUpperCase())===t.correctAnswer.trim().toUpperCase();return i.jsxs(Xe,{$correct:l,children:[i.jsxs(lt,{children:[i.jsxs(f,{fontSize:"md",fontWeight:800,color:"textPrimary",children:["Question ",t.id,": ",t.prompt]}),l?i.jsx(ze,{color:"#10B981",size:24}):i.jsx(Ae,{color:"#F59E0B",size:24})]}),i.jsxs(Y,{children:[i.jsx(f,{fontSize:"sm",color:"textSecondary",children:r.com_yourAnswer}),i.jsx(f,{fontSize:"sm",fontWeight:700,color:l?"success":"warning",children:A[t.id]||"(No answer)"})]}),!l&&i.jsxs(Y,{children:[i.jsx(f,{fontSize:"sm",color:"textSecondary",children:r.com_correctAnswer}),i.jsx(f,{fontSize:"sm",fontWeight:700,color:"success",children:t.correctAnswer})]})]},t.id)})}),i.jsxs(X,{children:[i.jsx(C,{title:r.com_backToScore,onClick:()=>D(!1),variant:"secondary"}),u>=8&&i.jsx(C,{title:r.com_getCertificate,onClick:()=>W(!0),variant:"primary"}),i.jsx(C,{title:r.com_home,onClick:()=>F("/"),variant:"primary"})]})]}),L&&i.jsx(dt,{children:i.jsx(fe,{onClose:()=>W(!1),challengeName:(e==null?void 0:e.replace("_"," ").toUpperCase())||"Master Test",score:u,level:"Genius"})})]})]})};export{vt as default};

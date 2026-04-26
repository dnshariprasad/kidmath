import{i as r,p as v,q as we,K as u,ak as be,j as je,l as Se,x as f,n as t,P as _e,G as ve,T as te,A as H,z as $e,v as T,al as ie,am as se,an as W,a0 as Ce,a6 as Me,N as ke,a2 as ze}from"./index-CfMFGCh5.js";import{c as Ae}from"./confetti.module-ONDKWxYZ.js";import{S as Te}from"./SpeakIcon-CFTpvR-C.js";import{P as We,N as Re}from"./PreviousIcon-0EK-1rrn.js";import{D as Ne}from"./DifficultyPicker-DM8nRwAN.js";import{r as Ee,C as De,S as Fe}from"./ChallengeHeader-Dktj-9mS.js";import{g as Le,b as O}from"./wordUtils-DPgh885X.js";import{C as oe,R as Pe,H as re,B as Ie}from"./rotate-ccw-BcJmiHnX.js";import{S as U}from"./search-BhW6yPOJ.js";import{C as Be}from"./circle-check-C25B30nm.js";import{C as He,S as Oe}from"./spell-check-3sivN31C.js";import{S as Ue}from"./scale-CbNX_7qk.js";import{L as Qe}from"./languages-C4w3-ZcM.js";import{A as Ge}from"./arrow-up-down-CM3KlfzU.js";r.div`
  position: sticky;
  top: 0;
  z-index: 100;
  background: ${e=>e.theme.colors.background}EE;
  backdrop-filter: blur(8px);
  padding: 15px 0;
  margin-bottom: 20px;
  width: 100%;
`;r.div`
  width: 100%;
  height: 8px;
  background: ${e=>e.theme.colors.primary}15;
  border-radius: 4px;
  overflow: hidden;
`;r(v.div)`
  height: 100%;
  background: ${e=>e.theme.colors.primary};
  border-radius: 4px;
`;const Ke=r.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  padding-bottom: 80px;
`,Ve=r(we)`
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
`,Ye=r.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  background: ${e=>e.theme.colors.primary}15;
`,Xe=r(v.div)`
  height: 100%;
  background: ${e=>e.theme.colors.primary};
`,Je=r.div`
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
`,Ze=r.div`
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
`,qe=r.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 40px;

  @media (max-width: 480px) {
    flex-direction: column;
    text-align: center;
    gap: 8px;
  }
`,et=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  padding: 15px 0;

  @media (max-width: 600px) {
    gap: 30px;
    padding: 15px 0;
  }
`,F=r.div`
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
`,tt=r(F)`
  font-size: clamp(1.8rem, 4vw, 3rem);
  letter-spacing: 12px;
`,it=r.div`
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
`,st=r(v.div)`
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
`;r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 40px;
`;const ot=r(v.div)`
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
`,rt=r.div`
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
`,at=r.div`
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
`,ae=r.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;
`,nt=r.div`
  color: #6366f1;
`,lt=r(u)`
  text-align: center;
`,ct=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;r.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;r.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;const dt=r(v.div)`
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
`,mt=r(v.div)`
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
`,pt=r(u)`
  margin-bottom: 10px;
`,ht=r(u)`
  margin: 15px 0;
`,xt=r(u)`
  margin-bottom: 10px;
`,gt=r(u)`
  margin-bottom: 25px;
  max-width: 500px;
`,ne=r.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
`,ft=r(v.div)`
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
`,ut=r(u)`
  margin-bottom: 20px;
`,yt=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;r.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
`;const wt=r(v.div)`
  width: 100%;
`,bt=r.div`
  position: fixed;
  inset: 0;
  z-index: 3000;
  background: white;
`,Et=()=>{const{testId:e}=be(),Q=je(),le=Se(),[k,ce]=f.useState([]),[z,G]=f.useState({}),[R,K]=f.useState(!1),[y,V]=f.useState(0),[C,L]=f.useState(0),[P,N]=f.useState(!1),[Y,I]=f.useState(!1),[X,A]=f.useState(!1),[J,E]=f.useState(!1),[g,de]=f.useState("Easy"),me=e==="master_test"||!e,s=Me.en,pe=C>0||Object.keys(z).length>0,he=[{value:"Easy",label:s.com_easy},{value:"Medium",label:s.com_medium},{value:"Hard",label:s.com_hard}],xe=()=>{if(me)return s.mst_grandMaster;switch(e){case"math_addition":return s.math_addition;case"math_subtraction":return s.math_subtraction;case"math_multiplication":return s.math_multiplication;case"math_test":return s.math_mathHero;case"math_sorting":return s.math_sorting;case"english_missing_letters":return s.eng_missingLetters;case"english_spelling":return s.eng_listenAndFind;case"spelling_test":return s.eng_spellingHero;case"hindi_test":return s.hindi_hindiLegend;case"logic_test":return s.log_grandLogic;default:return s.com_tryAgain}},B=f.useCallback(()=>{const i=[];let l=["math","spelling","missing_letter","comparison","hindi","logic","sorting"];(e==="math_addition"||e==="math_subtraction"||e==="math_multiplication")&&(l=["math"]),e==="math_test"&&(l=["math","comparison","sorting"]),e==="math_sorting"&&(l=["sorting"]),e==="english_missing_letters"&&(l=["missing_letter"]),e==="english_spelling"&&(l=["spelling"]),e==="spelling_test"&&(l=["spelling","missing_letter"]),e==="hindi_test"&&(l=["hindi"]),e==="logic_test"&&(l=["logic","comparison"]);const c=Le();let b=c;g==="Easy"?b=c.filter(j=>j.length<=4):g==="Medium"?b=c.filter(j=>j.length>4&&j.length<=7):b=c.filter(j=>j.length>7),b.length===0&&(b=c);const D=["अ","आ","इ","ई","उ","ऊ","ए","ऐ","ओ","औ","क","ख","ग","घ"],q=new Set;for(let j=1;j<=10;j++){let n={},ee=0,_="";for(;ee<20;){const $=l[Math.floor(Math.random()*l.length)];if(n={id:j,type:$},$==="math"){let o=10;g==="Medium"&&(o=20),g==="Hard"&&(o=50);const a=Math.floor(Math.random()*o)+1,d=Math.floor(Math.random()*o)+1;let m="+";if(e==="math_addition")m="+";else if(e==="math_subtraction")m="-";else if(e==="math_multiplication")m="*";else{const w=["+","-"];(e==="math_test"||!e||e==="math_multiplication")&&g!=="Easy"&&w.push("*"),m=w[Math.floor(Math.random()*w.length)]}let S=a,x=d,h=0;if(m==="+")h=a+d;else if(m==="-")S=Math.max(a,d),x=Math.min(a,d),h=S-x;else{let w=5;g==="Medium"&&(w=6),g==="Hard"&&(w=10),S=Math.floor(Math.random()*w)+1,x=Math.floor(Math.random()*w)+1,h=S*x}_=`math-${S}${m}${x}`,n.prompt=s.math_solveMath,n.correctAnswer=h.toString();const M=new Set([n.correctAnswer]);for(;M.size<4;){const w=Math.floor(Math.random()*5)+1;M.add((Math.random()>.5?h+w:Math.max(0,h-w)).toString())}n.data={n1:S,n2:x,op:m,optionsStrings:Array.from(M).sort(()=>Math.random()-.5)}}else if($==="spelling"){const o=O(b).toUpperCase();_=`spelling-${o}`,n.prompt=s.eng_tapTheWord,n.correctAnswer=o;const a=new Set([o]);for(;a.size<4;)a.add(O(b).toUpperCase());n.data={word:o,optionsStrings:Array.from(a).sort(()=>Math.random()-.5)}}else if($==="missing_letter"){const o=O(b).toUpperCase(),a=Math.floor(Math.random()*o.length),d=o.split(""),m=d[a];d[a]="_",_=`missing-${o}-${a}`,n.prompt=s.eng_chooseMissing,n.correctAnswer=m;const S="ABCDEFGHIJKLMNOPQRSTUVWXYZ",x=new Set([m]);for(;x.size<4;)x.add(S[Math.floor(Math.random()*26)]);n.data={displayWord:d.join(""),word:o,optionsStrings:Array.from(x).sort(()=>Math.random()-.5)}}else if($==="comparison"){const o=[];let a=20;for(g==="Medium"&&(a=50),g==="Hard"&&(a=100);o.length<4;){const m=Math.floor(Math.random()*a);o.includes(m)||o.push(m)}const d=Math.random()>.5;_=`comp-${o.sort().join(",")}-${d}`,n.prompt=d?s.math_smallestNumber:s.math_biggestNumber,n.correctAnswer=d?Math.min(...o).toString():Math.max(...o).toString(),n.data={optionsStrings:o.map(String)}}else if($==="logic"){const o=[{sequence:["🍎","🍌","🍎"],next:"🍌"},{sequence:["🐶","🐱","🐶"],next:"🐱"},{sequence:["1","2","1"],next:"2"},{sequence:["⭐","🌙","⭐"],next:"🌙"},{sequence:["🔴","🔵","🔴"],next:"🔵"},{sequence:["🚗","🚕","🚗"],next:"🚕"},{sequence:["🍦","🍩","🍦"],next:"🍩"}],a=o[Math.floor(Math.random()*o.length)];_=`logic-${a.sequence.join("")}`,n.prompt=s.log_whatNext,n.correctAnswer=a.next;const d=new Set([a.next]);for(;d.size<4;){const m=o[Math.floor(Math.random()*o.length)].next;d.add(m)}n.data={displayWord:a.sequence.join(" ")+" ?",optionsStrings:Array.from(d).sort(()=>Math.random()-.5)}}else if($==="hindi"){const o=D[Math.floor(Math.random()*D.length)];_=`hindi-${o}`,n.prompt=s.hindi_tapLetter,n.correctAnswer=o;const a=new Set([o]);for(;a.size<4;)a.add(D[Math.floor(Math.random()*D.length)]);n.data={letter:o,optionsStrings:Array.from(a).sort(()=>Math.random()-.5)}}else if($==="sorting"){const o=[];let a=3,d=10;for(g==="Medium"&&(a=4,d=20),g==="Hard"&&(a=5,d=50);o.length<a;){const h=Math.floor(Math.random()*d)+1;o.includes(h)||o.push(h)}const m=Math.random()>.5;_=`sort-${o.sort().join(",")}-${m}`,n.prompt=m?s.math_sortAsc:s.math_sortDesc;const S=m?[...o].sort((h,M)=>h-M):[...o].sort((h,M)=>M-h);n.correctAnswer=S.join(", ");const x=new Set([n.correctAnswer]);for(;x.size<4;){const h=[...o].sort(()=>Math.random()-.5);x.add(h.join(", "))}n.data={displayWord:o.join("  •  "),optionsStrings:Array.from(x).sort(()=>Math.random()-.5)}}if(!q.has(_)){q.add(_);break}ee++}i.push(n)}ce(i),G({}),K(!1),I(!1),N(!1),V(0),L(0),window.scrollTo({top:0,behavior:"smooth"})},[e,s,g]);f.useEffect(()=>{B()},[B]);const p=k[C];f.useEffect(()=>{if(p&&!R){const i=p.type==="math"?`What is ${p.data.n1} ${p.data.op==="+"?"plus":p.data.op==="-"?"minus":"times"} ${p.data.n2}?`:p.type==="missing_letter"?`What is the missing letter in the word ${p.data.word}?`:p.data.word||p.data.letter||p.prompt,l=p.type==="hindi"?"hi-IN":"en-US",c=setTimeout(()=>{Ee(i,l)},600);return()=>clearTimeout(c)}},[C,p,R]);const ge=(i,l)=>{G(c=>({...c,[i]:l}))},fe=()=>{let i=0;k.forEach(l=>{var c;((c=z[l.id])==null?void 0:c.trim().toUpperCase())===l.correctAnswer.trim().toUpperCase()&&i++}),V(i),K(!0),i>=8&&(Ae({particleCount:150,spread:70,origin:{y:.6}}),le(ze("master_test")))},Z=()=>{C<k.length-1?(L(i=>i+1),window.scrollTo({top:0,behavior:"smooth"})):fe()},ue=()=>{C>0&&L(i=>i-1)},ye=i=>{if(!i)return null;const l=z[i.id]||"";return t.jsxs(Ve,{$type:i.type,children:[t.jsx(Ye,{children:t.jsx(Xe,{initial:{width:0},animate:{width:`${(C+1)/10*100}%`},transition:{type:"spring",stiffness:100}})}),t.jsxs(Je,{children:["QUESTION ",i.id," OF 10"]}),t.jsx(Ze,{$type:i.type,children:i.type.replace("_"," ")}),i.type!=="math"&&t.jsxs(qe,{children:[t.jsxs(nt,{children:[i.type==="spelling"&&t.jsx(Oe,{size:40}),i.type==="missing_letter"&&t.jsx(U,{size:40}),i.type==="comparison"&&t.jsx(Ue,{size:40}),i.type==="hindi"&&t.jsx(Qe,{size:40}),i.type==="logic"&&t.jsx(Ie,{size:40}),i.type==="sorting"&&t.jsx(Ge,{size:40})]}),t.jsx(lt,{fontSize:"clamp(1.2rem, 4vw, 1.75rem)",fontWeight:900,color:"textPrimary",children:i.prompt})]}),t.jsxs(et,{children:[i.type==="math"&&i.data&&t.jsxs(F,{children:[i.data.n1??0," ",i.data.op??"+"," ",i.data.n2??0]}),(i.type==="spelling"||i.type==="hindi")&&i.data&&t.jsx(ct,{children:t.jsx(u,{color:"textSecondary",fontSize:"md",fontWeight:600,children:s.eng_tapSpeaker})}),i.type==="missing_letter"&&i.data&&t.jsx(F,{children:i.data.displayWord}),i.type==="logic"&&i.data&&t.jsx(tt,{children:i.data.displayWord}),i.type==="sorting"&&i.data&&t.jsx(F,{$fontSize:"clamp(2rem, 8vw, 4rem)",children:i.data.displayWord}),i.data.optionsStrings&&t.jsx(it,{$isLong:i.data.optionsStrings.some(c=>c.length>12),children:i.data.optionsStrings.map((c,b)=>t.jsx(st,{$selected:l===c,$color:"#6366F1",onClick:()=>ge(i.id,c),whileTap:{scale:.95},children:c},b))}),t.jsxs(ke,{children:[t.jsx(We,{onClick:ue}),t.jsx(Te,{text:i.type==="math"?`What is ${i.data.n1} ${i.data.op==="+"?"plus":i.data.op==="-"?"minus":"times"} ${i.data.n2}?`:i.type==="missing_letter"?`What is the missing letter in the word ${i.data.word}?`:i.data.word||i.data.letter||i.prompt,lang:i.type==="hindi"?"hi-IN":"en-US"}),C===k.length-1?t.jsx(T,{title:s.com_finish.toUpperCase(),onClick:Z,variant:"primary",minWidth:"180px"}):t.jsx(Re,{onClick:Z})]})]})]})};return t.jsxs(_e,{children:[t.jsxs(ve,{children:[t.jsx(De,{icon:te,title:xe(),subtitle:s.mst_subtitle,streak:0}),t.jsx(Fe,{title:s.com_readyForTest,subtitle:s.mst_subtitle,onClick:()=>{}}),t.jsx(Ke,{children:t.jsx(H,{mode:"wait",children:p&&t.jsx(wt,{initial:{x:50,opacity:0},animate:{x:0,opacity:1},exit:{x:-50,opacity:0},transition:{type:"spring",damping:20,stiffness:100},children:ye(p)},p.id)})}),!R&&t.jsx($e,{"data-testid":"settings-area",children:t.jsx(Ne,{name:"complexity",title:s.com_difficulty,options:he,currentValue:g,onChange:i=>de(i),disabled:pe})})]}),R&&t.jsxs(ot,{initial:{opacity:0},animate:{opacity:1},children:[!Y&&!P&&t.jsxs(dt,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},children:[t.jsx(v.div,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",damping:10},children:t.jsx(te,{size:120,color:y>=8?"#FFD700":"#94A3B8"})}),t.jsxs(ht,{fontSize:"4rem",fontWeight:900,color:"primary",children:[y," / 10"]}),t.jsx(mt,{$score:y,initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.3},children:y===10?"GRAND MASTER":y===9?"LEGEND":y===8?"PRODIGY":"KIDDOO HERO"}),t.jsx(xt,{fontSize:"2rem",fontWeight:800,children:y>=8?s.com_genius:s.com_goodEffort}),t.jsx(gt,{fontSize:"lg",color:"textSecondary",children:y>=8?s.com_masteredCurriculum:s.com_keepPracticing}),t.jsxs(ne,{children:[y>=8&&t.jsx(T,{title:s.com_getCertificate,onClick:()=>N(!0),variant:"primary"}),t.jsx(T,{title:"Options ▾",onClick:()=>A(!X),variant:"secondary",icon:t.jsx(oe,{size:20})}),t.jsx(H,{children:X&&t.jsxs(t.Fragment,{children:[t.jsx(ie,{onClick:()=>A(!1)}),t.jsxs(se,{initial:{opacity:0,y:10,scale:.9},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:10,scale:.9},children:[t.jsxs(W,{onClick:()=>{I(!0),A(!1)},children:[t.jsx(U,{size:18})," ",s.com_reviewAnswers]}),t.jsxs(W,{onClick:()=>{B(),A(!1)},children:[t.jsx(Pe,{size:18})," ",s.com_tryAgain]}),t.jsxs(W,{onClick:()=>{Q("/"),A(!1)},children:[t.jsx(re,{size:18})," ",s.com_home]})]})]})})]})]}),Y&&!P&&t.jsxs(ft,{initial:{x:50,opacity:0},animate:{x:0,opacity:1},children:[t.jsx(pt,{fontSize:"2rem",fontWeight:900,color:"primary",children:s.com_testReview}),t.jsx(ut,{color:"textSecondary",children:s.com_seeWhatLearned}),t.jsx(rt,{children:k.map(i=>{var c;const l=((c=z[i.id])==null?void 0:c.trim().toUpperCase())===i.correctAnswer.trim().toUpperCase();return t.jsxs(at,{$correct:l,children:[t.jsxs(yt,{children:[t.jsxs(u,{fontSize:"md",fontWeight:800,color:"textPrimary",children:["Question ",i.id,": ",i.prompt]}),l?t.jsx(Be,{color:"#10B981",size:24}):t.jsx(He,{color:"#F59E0B",size:24})]}),t.jsxs(ae,{children:[t.jsx(u,{fontSize:"sm",color:"textSecondary",children:s.com_yourAnswer}),t.jsx(u,{fontSize:"sm",fontWeight:700,color:l?"success":"warning",children:z[i.id]||"(No answer)"})]}),!l&&t.jsxs(ae,{children:[t.jsx(u,{fontSize:"sm",color:"textSecondary",children:s.com_correctAnswer}),t.jsx(u,{fontSize:"sm",fontWeight:700,color:"success",children:i.correctAnswer})]})]},i.id)})}),t.jsxs(ne,{children:[y>=8&&t.jsx(T,{title:s.com_getCertificate,onClick:()=>N(!0),variant:"primary"}),t.jsx(T,{title:"Options ▾",onClick:()=>E(!J),variant:"secondary",icon:t.jsx(oe,{size:20})}),t.jsx(H,{children:J&&t.jsxs(t.Fragment,{children:[t.jsx(ie,{onClick:()=>E(!1)}),t.jsxs(se,{initial:{opacity:0,y:10,scale:.9},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:10,scale:.9},children:[t.jsxs(W,{onClick:()=>{I(!1),E(!1)},children:[t.jsx(U,{size:18})," ",s.com_backToScore]}),t.jsxs(W,{onClick:()=>{Q("/"),E(!1)},children:[t.jsx(re,{size:18})," ",s.com_home]})]})]})})]})]}),P&&t.jsx(bt,{children:t.jsx(Ce,{onClose:()=>N(!1),challengeName:(e==null?void 0:e.replace("_"," ").toUpperCase())||"Master Test",score:y,level:"Genius"})})]})]})};export{Et as default};

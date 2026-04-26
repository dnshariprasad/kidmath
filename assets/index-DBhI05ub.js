import{i as n,p as _,q as _e,K as b,al as Me,j as $e,l as Ce,x,a1 as ke,n as t,P as ze,G as Te,T as O,a7 as te,a8 as ie,v as D,A as K,Z as Ae,am as oe,an as re,ao as F,ap as We,a2 as Re,a3 as ne,N as Ne}from"./index-DKgGRrO2.js";import{c as Be}from"./confetti.module-ONDKWxYZ.js";import{S as De}from"./SpeakIcon-CgkKnTyn.js";import{P as Pe,N as Fe}from"./PreviousIcon-Bqd5oDnj.js";import{D as ae}from"./DifficultyPicker-CvJTgsLr.js";import{C as Le}from"./ChallengeHeader-DXOEuJad.js";import{r as se}from"./index-DLMUowaz.js";import{g as Ee,b as Y}from"./wordUtils-DPgh885X.js";import{B as le,T as Z,R as ce,C as de,H as me}from"./timer-BrorxDL9.js";import{C as pe}from"./circle-check-BQCb0p9T.js";import{S as X}from"./search-DqERNBar.js";import{C as Oe,S as Qe}from"./spell-check-qj9JMA_6.js";import{S as Ie}from"./scale-Bk0DMVrd.js";import{L as Ue}from"./languages-C0UDSm9S.js";import{A as Ge}from"./arrow-up-down-B3B07OPm.js";import"./info-C2t8V-sz.js";n.div`
  position: sticky;
  top: 0;
  z-index: 100;
  background: ${e=>e.theme.colors.background}EE;
  backdrop-filter: blur(8px);
  padding: 15px 0;
  margin-bottom: 20px;
  width: 100%;
`;n.div`
  width: 100%;
  height: 8px;
  background: ${e=>e.theme.colors.primary}15;
  border-radius: 4px;
  overflow: hidden;
`;n(_.div)`
  height: 100%;
  background: ${e=>e.theme.colors.primary};
  border-radius: 4px;
`;const He=n.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding-bottom: 80px;
`,Ve=n(_e)`
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
`,Ke=n.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  background: ${e=>e.theme.colors.primary}15;
`,Ye=n(_.div)`
  height: 100%;
  background: ${e=>e.theme.colors.primary};
`,Ze=n.div`
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
`,Xe=n.div`
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
`,Je=n.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 40px;

  @media (max-width: 480px) {
    flex-direction: column;
    text-align: center;
    gap: 8px;
  }
`,qe=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  padding: 15px 0;

  @media (max-width: 600px) {
    gap: 30px;
    padding: 15px 0;
  }
`,Q=n.div`
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
`,et=n(Q)`
  font-size: clamp(1.8rem, 4vw, 3rem);
  letter-spacing: 12px;
`,tt=n.div`
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
`,it=n(_.div)`
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
`;n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 40px;
`;const ot=n(_.div)`
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
`,rt=n.div`
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
`,nt=n.div`
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
`,he=n.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;
`,at=n.div`
  color: #6366f1;
`,st=n(b)`
  text-align: center;
`,lt=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;n.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;n.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;const ct=n(_.div)`
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
`,dt=n(_.div)`
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
`,mt=n(b)`
  margin-bottom: 10px;
`,pt=n(b)`
  margin: 15px 0;
`,ht=n(b)`
  margin-bottom: 10px;
`,xt=n(b)`
  margin-bottom: 25px;
  max-width: 500px;
`,xe=n.div`
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
`,gt=n(_.div)`
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
`,ft=n(b)`
  margin-bottom: 20px;
`,ut=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;n.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
`;const yt=n(_.div)`
  width: 100%;
`,wt=n.div`
  position: fixed;
  inset: 0;
  z-index: 3000;
  background: white;
`,bt=n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  margin-bottom: 40px;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 16px;
    margin-bottom: 24px;
  }
`,jt=n(_.div)`
  width: 80px;
  height: 80px;
  border-radius: 24px;
  background: ${e=>e.theme.colors.primary}15;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e=>e.theme.colors.primary};
  flex-shrink: 0;
`,vt=n(_.div)`
  padding: 40px;
  background: ${e=>e.theme.colors.surface};
  border: 1px solid ${e=>e.theme.colors.primary}15;
  border-radius: 48px;
  box-shadow: 0 40px 100px -20px rgba(0, 0, 0, 0.08);
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 200px;
    height: 200px;
    background: radial-gradient(
      circle at center,
      ${e=>e.theme.colors.primary}08 0%,
      transparent 70%
    );
    pointer-events: none;
  }

  @media (max-width: 600px) {
    padding: 30px 20px;
    border-radius: 32px;
  }
`,St=n.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
  margin: 40px 0;
  text-align: left;
`;n.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;const _t=n(_.div)`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 24px;
  background: ${e=>e.theme.colors.primary}05;
  border-radius: 24px;
  border: 1px solid ${e=>e.theme.colors.primary}10;
  transition: all 0.3s ease;

  &:hover {
    background: ${e=>e.theme.colors.primary}08;
    transform: translateY(-2px);
    border-color: ${e=>e.theme.colors.primary}25;
  }

  svg {
    color: ${e=>e.theme.colors.primary};
    flex-shrink: 0;
  }

  span {
    color: ${e=>e.theme.colors.textSecondary};
    font-weight: 700;
    font-size: 0.95rem;
    line-height: 1.4;
  }
`,Mt=n.div`
  margin-top: ${e=>e.$minimal?"0":"50px"};
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-top: ${e=>e.$minimal?"0":"40px"};
  border-top: ${e=>e.$minimal?"none":`2px dashed ${e.theme.colors.primary}15`};
  width: 100%;
`;n(b)`
  margin-bottom: -15px;
  text-align: center;
  opacity: 0.6;
  letter-spacing: 2px;
`;const $t=(e,m,L,T,M)=>{const A=[];let S=["math","spelling","missing_letter","comparison","hindi","logic","sorting"];(e==="math_addition"||e==="math_subtraction"||e==="math_multiplication"||e==="math_division")&&(S=["math"]),e==="math_test"&&(S=["math","comparison","sorting"]),e==="math_sorting"&&(S=["sorting"]),e==="english_missing_letters"&&(S=["missing_letter"]),e==="english_spelling"&&(S=["spelling"]),e==="spelling_test"&&(S=["spelling","missing_letter"]),e==="hindi_test"&&(S=["hindi"]),e==="logic_test"&&(S=["logic","comparison"]);const $=Ee();let C=$;m===1?C=$.filter(g=>g.length<=4):m===2||m===3?C=$.filter(g=>g.length>4&&g.length<=7):C=$.filter(g=>g.length>7),C.length===0&&(C=$);const j=["अ","आ","इ","ई","उ","ऊ","ए","ऐ","ओ","औ","क","ख","ग","घ"],P=new Set;for(let g=1;g<=10;g++){let l={},R=0,v="";for(;R<20;){const k=S[Math.floor(Math.random()*S.length)];if(l={id:g,type:k},k==="math"){let r,a;if(m===1)r=Math.floor(Math.random()*9)+1,a=Math.floor(Math.random()*9)+1;else if(m===2){const d=Math.random()>.5;r=d?Math.floor(Math.random()*9)+1:Math.floor(Math.random()*90)+10,a=d?Math.floor(Math.random()*90)+10:Math.floor(Math.random()*9)+1}else m===3?(r=Math.floor(Math.random()*90)+10,a=Math.floor(Math.random()*90)+10):(r=Math.floor(Math.random()*900)+100,a=Math.floor(Math.random()*900)+100);let s="+";if(e==="math_addition")s="+";else if(e==="math_subtraction")s="-";else if(e==="math_multiplication")s="*";else if(e==="math_division")s="/";else{const d=["+","-"];(e==="math_test"||!e||e==="math_multiplication"||e==="math_division")&&m!==1&&(d.push("*"),m>=3&&d.push("/")),s=d[Math.floor(Math.random()*d.length)]}let c=r,p=a,h=0;if(s==="+")h=r+a;else if(s==="-")L?(c=r,p=a):(c=Math.max(r,a),p=Math.min(r,a)),h=c-p;else if(s==="*"){let d=5;(m===2||m===3)&&(d=8),m===4&&(d=12),c=Math.floor(Math.random()*d)+1,p=Math.floor(Math.random()*d)+1,h=c*p}else if(s==="/"){const d=m===1?5:m===2?8:12;if(p=Math.floor(Math.random()*d)+1,T)c=Math.floor(Math.random()*(d*5))+1,h=Number((c/p).toFixed(1));else{const N=Math.floor(Math.random()*d)+1,W=Math.floor(Math.random()*p);c=p*N+W,h=`Q:${N} R:${W}`}}v=`math-${c}${s}${p}`,l.prompt=M.math_solveMath,l.correctAnswer=h.toString();const y=new Set([l.correctAnswer]);for(;y.size<4;){const d=Math.floor(Math.random()*5)+1;if(typeof h=="number")y.add((Math.random()>.5?h+d:Math.max(0,h-d)).toString());else{const N=Math.floor(Math.random()*3)-1,W=Math.floor(Math.random()*3)-1,I=Math.max(0,Math.floor(c/(p||1))+N),B=Math.max(0,c%(p||1)+W);y.add(`Q:${I} R:${B}`)}}l.data={n1:c,n2:p,op:s,optionsStrings:Array.from(y).sort(()=>Math.random()-.5)}}else if(k==="spelling"){const r=Y(C).toUpperCase();v=`spelling-${r}`,l.prompt=M.eng_tapTheWord,l.correctAnswer=r;const a=new Set([r]);for(;a.size<4;)a.add(Y(C).toUpperCase());l.data={word:r,optionsStrings:Array.from(a).sort(()=>Math.random()-.5)}}else if(k==="missing_letter"){const r=Y(C).toUpperCase(),a=Math.floor(Math.random()*r.length),s=r.split(""),c=s[a];s[a]="_",v=`missing-${r}-${a}`,l.prompt=M.eng_chooseMissing,l.correctAnswer=c;const p="ABCDEFGHIJKLMNOPQRSTUVWXYZ",h=new Set([c]);for(;h.size<4;)h.add(p[Math.floor(Math.random()*26)]);l.data={displayWord:s.join(""),word:r,optionsStrings:Array.from(h).sort(()=>Math.random()-.5)}}else if(k==="comparison"){const r=[];let a=20;for((m===2||m===3)&&(a=50),m===4&&(a=1e3);r.length<4;){const c=Math.floor(Math.random()*a);r.includes(c)||r.push(c)}const s=Math.random()>.5;v=`comp-${r.sort().join(",")}-${s}`,l.prompt=s?M.math_smallestNumber:M.math_biggestNumber,l.correctAnswer=s?Math.min(...r).toString():Math.max(...r).toString(),l.data={optionsStrings:r.map(String)}}else if(k==="logic"){const r=[{sequence:["🍎","🍌","🍎"],next:"🍌"},{sequence:["🐶","🐱","🐶"],next:"🐱"},{sequence:["1","2","1"],next:"2"},{sequence:["⭐","🌙","⭐"],next:"🌙"},{sequence:["🔴","🔵","🔴"],next:"🔵"},{sequence:["🚗","🚕","🚗"],next:"🚕"},{sequence:["🍦","🍩","🍦"],next:"🍩"}],a=r[Math.floor(Math.random()*r.length)];v=`logic-${a.sequence.join("")}`,l.prompt=M.log_whatNext,l.correctAnswer=a.next;const s=new Set([a.next]);for(;s.size<4;){const c=r[Math.floor(Math.random()*r.length)].next;s.add(c)}l.data={displayWord:a.sequence.join(" ")+" ?",optionsStrings:Array.from(s).sort(()=>Math.random()-.5)}}else if(k==="hindi"){const r=j[Math.floor(Math.random()*j.length)];v=`hindi-${r}`,l.prompt=M.hindi_tapLetter,l.correctAnswer=r;const a=new Set([r]);for(;a.size<4;)a.add(j[Math.floor(Math.random()*j.length)]);l.data={letter:r,optionsStrings:Array.from(a).sort(()=>Math.random()-.5)}}else if(k==="sorting"){const r=[];let a=3,s=10;for((m===2||m===3)&&(a=4,s=20),m===4&&(a=5,s=50);r.length<a;){const y=Math.floor(Math.random()*s)+1;r.includes(y)||r.push(y)}const c=Math.random()>.5;v=`sort-${r.sort().join(",")}-${c}`,l.prompt=c?M.math_sortAsc:M.math_sortDesc;const p=c?[...r].sort((y,d)=>y-d):[...r].sort((y,d)=>d-y);l.correctAnswer=p.join(", ");const h=new Set([l.correctAnswer]);for(;h.size<4;){const y=[...r].sort(()=>Math.random()-.5);h.add(y.join(", "))}l.data={displayWord:r.join("  •  "),optionsStrings:Array.from(h).sort(()=>Math.random()-.5)}}if(!P.has(v)){P.add(v);break}R++}A.push(l)}return A},J=e=>{if(e.type==="math"){const m={"+":"plus","-":"minus","*":"times","/":"divided by"};return`What is ${e.data.n1} ${m[e.data.op||"+"]} ${e.data.n2}?`}return e.type==="missing_letter"?`What is the missing letter in the word ${e.data.word}?`:e.data.word||e.data.letter||e.prompt},Ct=e=>e===10?"GRAND MASTER":e===9?"LEGEND":e===8?"PRODIGY":"KIDDOO HERO",Ut=()=>{const{testId:e}=Me(),m=$e(),L=Ce(),[T,M]=x.useState([]),[A,S]=x.useState({}),[$,C]=x.useState(!1),[j,P]=x.useState(0),[g,l]=x.useState(0),[R,v]=x.useState(!1),[k,r]=x.useState(!1),[a,s]=x.useState(!1),[c,p]=x.useState(!1),[h,y]=x.useState(1),[d,N]=x.useState(!1),[W,I]=x.useState(!1),[B,q]=x.useState(!1),[z,U]=x.useState(0),[w,ge]=x.useState(0),E=e==="master_test"||!e,o=Re.en,fe=[{value:1,label:o.com_level+" 1",info:"Single digits (1-9)"},{value:2,label:o.com_level+" 2",info:"One single & one double digit"},{value:3,label:o.com_level+" 3",info:"Two double digits (10-99)"},{value:4,label:o.com_level+" 4",info:"3-digit numbers (100-999)"}],ue=[{value:0,label:o.test_noLimit,info:"Take all the time you need"},{value:30,label:"30s",info:"Quick Sprint"},{value:60,label:"1 Min",info:"Quick Challenge"},{value:120,label:"2 Min",info:"Standard Pace"},{value:180,label:"3 Min",info:"Relaxed Pace"},{value:240,label:"4 Min",info:"Focused Pace"},{value:300,label:"5 Min",info:"Taking it Slow"}],ye=()=>{if(E)return o.mst_grandMaster;switch(e){case"math_addition":return o.math_addition;case"math_subtraction":return o.math_subtraction;case"math_multiplication":return o.math_multiplication;case"math_division":return o.math_division;case"math_test":return o.math_mathHero;case"math_sorting":return o.math_sorting;case"english_missing_letters":return o.eng_missingLetters;case"english_spelling":return o.eng_listenAndFind;case"spelling_test":return o.eng_spellingHero;case"hindi_test":return o.hindi_hindiLegend;case"logic_test":return o.log_grandLogic;default:return o.com_tryAgain}},G=x.useCallback(()=>{const i=$t(e,h,d,W,o);M(i),S({}),C(!1),r(!1),v(!1),P(0),l(0),U(0),window.scrollTo({top:0,behavior:"smooth"})},[e,o,h,d,W]),H=x.useCallback(()=>{let i=0;T.forEach(f=>{var u;((u=A[f.id])==null?void 0:u.trim().toUpperCase())===f.correctAnswer.trim().toUpperCase()&&i++}),P(i),C(!0),i>=8&&(Be({particleCount:150,spread:70,origin:{y:.6}}),L(ke("master_test")))},[T,A,L]);x.useEffect(()=>{G()},[G]),x.useEffect(()=>{let i;return B&&!$&&(i=setInterval(()=>{U(f=>{const u=f+1;return w>0&&u>=w?(clearInterval(i),H(),w):u})},1e3)),()=>clearInterval(i)},[B,$,w,H]);const V=T[g],we=(i,f)=>{S(u=>({...u,[i]:f}))},be=()=>{q(!0),U(0)},ee=()=>{g<T.length-1?(l(i=>i+1),window.scrollTo({top:0,behavior:"smooth"})):H()},je=()=>{g>0&&l(i=>i-1)},ve=i=>{if(!i)return null;const f=A[i.id]||"";return t.jsxs(Ve,{$type:i.type,children:[t.jsx(Ke,{children:t.jsx(Ye,{initial:{width:0},animate:{width:`${(g+1)/10*100}%`},transition:{type:"spring",stiffness:100}})}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[t.jsxs(Ze,{children:[o.test_question," ",i.id," ",o.test_of," 10"]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",color:ne.primary,fontWeight:"bold",marginTop:"20px"},children:[t.jsx(Z,{size:18}),Math.floor(z/60),":",(z%60).toString().padStart(2,"0"),w>0&&t.jsxs("span",{style:{fontSize:"0.8rem",opacity:.6,marginLeft:"4px"},children:["/ ",Math.floor(w/60),":",(w%60).toString().padStart(2,"0")]})]})]}),t.jsx(Xe,{$type:i.type,children:i.type.replace("_"," ")}),i.type!=="math"&&t.jsxs(Je,{children:[t.jsxs(at,{children:[i.type==="spelling"&&t.jsx(Qe,{size:40}),i.type==="missing_letter"&&t.jsx(X,{size:40}),i.type==="comparison"&&t.jsx(Ie,{size:40}),i.type==="hindi"&&t.jsx(Ue,{size:40}),i.type==="logic"&&t.jsx(le,{size:40}),i.type==="sorting"&&t.jsx(Ge,{size:40})]}),t.jsx(st,{fontSize:"clamp(1.2rem, 4vw, 1.75rem)",fontWeight:900,color:"textPrimary",children:i.prompt})]}),t.jsxs(qe,{children:[i.type==="math"&&i.data&&t.jsxs(Q,{onClick:()=>se(J(i),i.type==="hindi"?"hi-IN":"en-US"),children:[i.data.n1??0," ",i.data.op??"+"," ",i.data.n2??0]}),(i.type==="spelling"||i.type==="hindi")&&i.data&&t.jsx(lt,{children:t.jsx(b,{color:"textSecondary",fontSize:"md",fontWeight:600,children:o.eng_tapSpeaker})}),i.type==="missing_letter"&&i.data&&t.jsx(Q,{onClick:()=>se(J(i),i.type==="hindi"?"hi-IN":"en-US"),children:i.data.displayWord}),i.type==="logic"&&i.data&&t.jsx(et,{children:i.data.displayWord}),i.type==="sorting"&&i.data&&t.jsx(Q,{$fontSize:"clamp(2rem, 8vw, 4rem)",children:i.data.displayWord}),i.data.optionsStrings&&t.jsx(tt,{$isLong:i.data.optionsStrings.some(u=>u.length>12),children:i.data.optionsStrings.map((u,Se)=>t.jsx(it,{$selected:f===u,$color:ne.primary,onClick:()=>we(i.id,u),whileTap:{scale:.95},children:u},Se))}),t.jsxs(Ne,{children:[t.jsx(Pe,{onClick:je}),t.jsx(De,{text:J(i),lang:i.type==="hindi"?"hi-IN":"en-US"}),g===T.length-1?t.jsx(D,{title:o.com_finish.toUpperCase(),onClick:ee,variant:"primary",minWidth:"180px"}):t.jsx(Fe,{onClick:ee})]})]})]})};return t.jsxs(ze,{children:[t.jsxs(Te,{children:[t.jsx("div",{style:{gridColumn:"1 / -1",width:"100%",display:"flex",justifyContent:"center"},children:t.jsx("div",{style:{width:"100%",maxWidth:"1100px"},children:t.jsx(Le,{icon:O,title:ye(),subtitle:o.mst_subtitle,streak:0})})}),!B&&!$&&t.jsx("div",{style:{gridColumn:"1 / -1",width:"100%"},children:t.jsxs(vt,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{type:"spring",damping:20},children:[t.jsxs(bt,{children:[t.jsx(jt,{animate:{scale:[1,1.05,1],rotate:[0,5,-5,0]},transition:{duration:4,repeat:1/0,ease:"easeInOut"},children:t.jsx(O,{size:40})}),t.jsxs("div",{style:{textAlign:"left"},children:[t.jsx(b,{fontSize:"xxl",fontWeight:900,color:"primary",children:o.test_instructions}),t.jsx(b,{fontSize:"md",color:"textSecondary",fontWeight:600,children:"Follow these rules to become a Grand Master!"})]})]}),t.jsx(St,{children:[{icon:t.jsx(le,{size:24}),text:o.test_qCount},{icon:t.jsx(pe,{size:24}),text:o.test_selectBest},{icon:t.jsx(Z,{size:24}),text:o.test_timeRecorded},{icon:t.jsx(O,{size:24}),text:o.test_scoreForCert}].map((i,f)=>t.jsxs(_t,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.1*f},children:[i.icon,t.jsx("span",{children:i.text})]},f))}),t.jsxs(Mt,{children:[t.jsx(ae,{name:"complexity",title:o.com_difficulty,options:fe,currentValue:h,onChange:i=>y(Number(i))}),t.jsx(ae,{name:"targetTime",title:o.test_targetTime,options:ue,currentValue:w,onChange:i=>ge(Number(i))}),((e==null?void 0:e.includes("math"))||E)&&t.jsxs("div",{style:{display:"flex",gap:"24px",flexWrap:"wrap",justifyContent:"center"},children:[(e==="math_subtraction"||e==="math_test"||E)&&t.jsxs(te,{children:[t.jsx(ie,{type:"checkbox",checked:d,onChange:i=>N(i.target.checked)}),t.jsx("span",{style:{fontWeight:700,fontSize:"0.9rem"},children:o.com_allowNegative})]}),(e==="math_division"||e==="math_test"||E)&&t.jsxs(te,{children:[t.jsx(ie,{type:"checkbox",checked:W,onChange:i=>I(i.target.checked)}),t.jsx("span",{style:{fontWeight:700,fontSize:"0.9rem"},children:o.com_allowDecimals})]})]})]}),t.jsx("div",{style:{marginTop:"50px",width:"100%"},children:t.jsx(D,{title:o.test_start,onClick:be,variant:"primary",width:"100%",size:"lg"})})]})}),B&&!$&&t.jsx("div",{style:{gridColumn:"1 / -1",width:"100%"},children:t.jsx(He,{children:t.jsx(K,{mode:"wait",children:V&&t.jsx(yt,{initial:{x:50,opacity:0},animate:{x:0,opacity:1},exit:{x:-50,opacity:0},transition:{type:"spring",damping:20,stiffness:100},children:ve(V)},V.id)})})})]}),$&&t.jsxs(ot,{initial:{opacity:0},animate:{opacity:1},children:[!k&&!R&&t.jsxs(ct,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},children:[t.jsx(_.div,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",damping:10},children:t.jsx(O,{size:120,color:j>=8?"#FFD700":"#94A3B8"})}),t.jsxs(pt,{fontSize:"4rem",fontWeight:900,color:"primary",children:[j," / 10"]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",fontSize:"1.5rem",fontWeight:"bold",color:"#64748B",marginBottom:"20px"},children:[t.jsx(Z,{size:24}),"Time: ",Math.floor(z/60),":",(z%60).toString().padStart(2,"0")]}),t.jsx(dt,{$score:j,initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.3},children:Ct(j)}),w>0&&z>=w&&t.jsx("div",{style:{color:"#EF4444",fontWeight:900,fontSize:"1.2rem",marginTop:"10px"},children:"⏰ TIME'S UP!"}),t.jsx(ht,{fontSize:"2rem",fontWeight:800,children:j>=8?o.com_genius:o.com_goodEffort}),t.jsx(xt,{fontSize:"lg",color:"textSecondary",children:j>=8?o.com_masteredCurriculum:o.test_keepPracticing}),w>0&&t.jsxs("div",{style:{marginTop:"15px",padding:"10px 20px",borderRadius:"12px",background:z<=w?"#10B98115":"#F59E0B15",color:z<=w?"#059669":"#D97706",fontWeight:700,fontSize:"0.9rem",display:"flex",alignItems:"center",gap:"8px"},children:[z<=w?t.jsx(Ae,{size:18}):t.jsx(ce,{size:18}),z<=w?o.test_beatenTarget:o.test_missedTarget]}),t.jsxs(xe,{children:[j>=8&&t.jsx(D,{title:o.com_getCertificate,onClick:()=>v(!0),variant:"primary"}),t.jsx(D,{title:"Options ▾",onClick:()=>s(!a),variant:"secondary",icon:t.jsx(de,{size:20})}),t.jsx(K,{children:a&&t.jsxs(t.Fragment,{children:[t.jsx(oe,{onClick:()=>s(!1)}),t.jsxs(re,{initial:{opacity:0,y:10,scale:.9},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:10,scale:.9},children:[t.jsxs(F,{onClick:()=>{r(!0),s(!1)},children:[t.jsx(X,{size:18})," ",o.com_reviewAnswers]}),t.jsxs(F,{onClick:()=>{G(),q(!1),s(!1)},children:[t.jsx(ce,{size:18})," ",o.com_tryAgain]}),t.jsxs(F,{onClick:()=>{m("/"),s(!1)},children:[t.jsx(me,{size:18})," ",o.com_home]})]})]})})]})]}),k&&!R&&t.jsxs(gt,{initial:{x:50,opacity:0},animate:{x:0,opacity:1},children:[t.jsx(mt,{fontSize:"2rem",fontWeight:900,color:"primary",children:o.com_testReview}),t.jsx(ft,{color:"textSecondary",children:o.com_seeWhatLearned}),t.jsx(rt,{children:T.map(i=>{var u;const f=((u=A[i.id])==null?void 0:u.trim().toUpperCase())===i.correctAnswer.trim().toUpperCase();return t.jsxs(nt,{$correct:f,children:[t.jsxs(ut,{children:[t.jsxs(b,{fontSize:"md",fontWeight:800,color:"textPrimary",children:["Question ",i.id,": ",i.prompt]}),f?t.jsx(pe,{color:"#10B981",size:24}):t.jsx(Oe,{color:"#F59E0B",size:24})]}),t.jsxs(he,{children:[t.jsx(b,{fontSize:"sm",color:"textSecondary",children:o.com_yourAnswer}),t.jsx(b,{fontSize:"sm",fontWeight:700,color:f?"success":"warning",children:A[i.id]||"(No answer)"})]}),!f&&t.jsxs(he,{children:[t.jsx(b,{fontSize:"sm",color:"textSecondary",children:o.com_correctAnswer}),t.jsx(b,{fontSize:"sm",fontWeight:700,color:"success",children:i.correctAnswer})]})]},i.id)})}),t.jsxs(xe,{children:[j>=8&&t.jsx(D,{title:o.com_getCertificate,onClick:()=>v(!0),variant:"primary"}),t.jsx(D,{title:"Options ▾",onClick:()=>p(!c),variant:"secondary",icon:t.jsx(de,{size:20})}),t.jsx(K,{children:c&&t.jsxs(t.Fragment,{children:[t.jsx(oe,{onClick:()=>p(!1)}),t.jsxs(re,{initial:{opacity:0,y:10,scale:.9},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:10,scale:.9},children:[t.jsxs(F,{onClick:()=>{r(!1),p(!1)},children:[t.jsx(X,{size:18})," ",o.com_backToScore]}),t.jsxs(F,{onClick:()=>{m("/"),p(!1)},children:[t.jsx(me,{size:18})," ",o.com_home]})]})]})})]})]}),R&&t.jsx(wt,{children:t.jsx(We,{onClose:()=>v(!1),challengeName:(e==null?void 0:e.replace("_"," ").toUpperCase())||"Master Test",score:j,level:"Genius",timeTaken:`${Math.floor(z/60)}:${(z%60).toString().padStart(2,"0")}`})})]})]})};export{Ut as default};

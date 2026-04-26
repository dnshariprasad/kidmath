import{i as s,p as _,q as ke,K as w,am as ze,j as Ae,l as Te,x as u,n as t,P as Re,G as Ne,T as re,A as V,z as We,a8 as ne,a9 as le,v as T,an as ce,ao as de,ap as R,a0 as Le,a6 as De,N as Fe,a2 as Ie}from"./index-0BhnDQbh.js";import{c as Oe}from"./confetti.module-ONDKWxYZ.js";import{S as Pe}from"./SpeakIcon-B9Sc-jpu.js";import{P as Be,N as Ee}from"./PreviousIcon-RFPC1Rp9.js";import{D as Ue}from"./DifficultyPicker-Cx2vR5to.js";import{r as Qe,C as Ge,S as He}from"./ChallengeHeader-CnB1gIXD.js";import{g as Ve,b as K}from"./wordUtils-DPgh885X.js";import{C as me,R as Ke,H as he,B as Ye}from"./rotate-ccw-CdHZva7_.js";import{S as Y}from"./search-Df0AmZ6v.js";import{C as Xe}from"./circle-check-CZHGjLBo.js";import{C as Je,S as Ze}from"./spell-check-B6eWDl3n.js";import{S as qe}from"./scale-DRBjuiBS.js";import{L as et}from"./languages-HEuzTRQe.js";import{A as tt}from"./arrow-up-down-BQn2tZao.js";import"./info-Bi11dl1g.js";s.div`
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
`;s(_.div)`
  height: 100%;
  background: ${e=>e.theme.colors.primary};
  border-radius: 4px;
`;const it=s.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  padding-bottom: 80px;
`,ot=s(ke)`
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
`,at=s.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  background: ${e=>e.theme.colors.primary}15;
`,st=s(_.div)`
  height: 100%;
  background: ${e=>e.theme.colors.primary};
`,rt=s.div`
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
`,nt=s.div`
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
`,lt=s.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 40px;

  @media (max-width: 480px) {
    flex-direction: column;
    text-align: center;
    gap: 8px;
  }
`,ct=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  padding: 15px 0;

  @media (max-width: 600px) {
    gap: 30px;
    padding: 15px 0;
  }
`,O=s.div`
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
`,dt=s(O)`
  font-size: clamp(1.8rem, 4vw, 3rem);
  letter-spacing: 12px;
`,mt=s.div`
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
`,ht=s(_.div)`
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
`;const pt=s(_.div)`
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
`,xt=s.div`
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
`,gt=s.div`
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
`,pe=s.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;
`,ft=s.div`
  color: #6366f1;
`,ut=s(w)`
  text-align: center;
`,yt=s.div`
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
`;const wt=s(_.div)`
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
`,bt=s(_.div)`
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
`,jt=s(w)`
  margin-bottom: 10px;
`,vt=s(w)`
  margin: 15px 0;
`,St=s(w)`
  margin-bottom: 10px;
`,_t=s(w)`
  margin-bottom: 25px;
  max-width: 500px;
`,xe=s.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
`,Mt=s(_.div)`
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
`,$t=s(w)`
  margin-bottom: 20px;
`,Ct=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;s.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
`;const kt=s(_.div)`
  width: 100%;
`,zt=s.div`
  position: fixed;
  inset: 0;
  z-index: 3000;
  background: white;
`,Gt=()=>{const{testId:e}=ze(),X=Ae(),ge=Te(),[k,fe]=u.useState([]),[z,J]=u.useState({}),[N,Z]=u.useState(!1),[b,q]=u.useState(0),[$,P]=u.useState(0),[B,W]=u.useState(!1),[ee,E]=u.useState(!1),[te,A]=u.useState(!1),[ie,L]=u.useState(!1),[h,ue]=u.useState(1),[U,ye]=u.useState(!1),[Q,we]=u.useState(!1),G=e==="master_test"||!e,a=De.en,C=$>0||Object.keys(z).length>0,be=[{value:1,label:"Level 1",info:"Single digits (1-9)"},{value:2,label:"Level 2",info:"One single & one double digit"},{value:3,label:"Level 3",info:"Two double digits (10-99)"},{value:4,label:"Level 4",info:"3-digit numbers (100-999)"}],je=()=>{if(G)return a.mst_grandMaster;switch(e){case"math_addition":return a.math_addition;case"math_subtraction":return a.math_subtraction;case"math_multiplication":return a.math_multiplication;case"math_division":return a.math_division;case"math_test":return a.math_mathHero;case"math_sorting":return a.math_sorting;case"english_missing_letters":return a.eng_missingLetters;case"english_spelling":return a.eng_listenAndFind;case"spelling_test":return a.eng_spellingHero;case"hindi_test":return a.hindi_hindiLegend;case"logic_test":return a.log_grandLogic;default:return a.com_tryAgain}},H=u.useCallback(()=>{const i=[];let c=["math","spelling","missing_letter","comparison","hindi","logic","sorting"];(e==="math_addition"||e==="math_subtraction"||e==="math_multiplication"||e==="math_division")&&(c=["math"]),e==="math_test"&&(c=["math","comparison","sorting"]),e==="math_sorting"&&(c=["sorting"]),e==="english_missing_letters"&&(c=["missing_letter"]),e==="english_spelling"&&(c=["spelling"]),e==="spelling_test"&&(c=["spelling","missing_letter"]),e==="hindi_test"&&(c=["hindi"]),e==="logic_test"&&(c=["logic","comparison"]);const p=Ve();let j=p;h===1?j=p.filter(v=>v.length<=4):h===2||h===3?j=p.filter(v=>v.length>4&&v.length<=7):j=p.filter(v=>v.length>7),j.length===0&&(j=p);const D=["अ","आ","इ","ई","उ","ऊ","ए","ऐ","ओ","औ","क","ख","ग","घ"],ae=new Set;for(let v=1;v<=10;v++){let l={},se=0,S="";for(;se<20;){const M=c[Math.floor(Math.random()*c.length)];if(l={id:v,type:M},M==="math"){let o,r;if(h===1)o=Math.floor(Math.random()*9)+1,r=Math.floor(Math.random()*9)+1;else if(h===2){const m=Math.random()>.5;o=m?Math.floor(Math.random()*9)+1:Math.floor(Math.random()*90)+10,r=m?Math.floor(Math.random()*90)+10:Math.floor(Math.random()*9)+1}else h===3?(o=Math.floor(Math.random()*90)+10,r=Math.floor(Math.random()*90)+10):(o=Math.floor(Math.random()*900)+100,r=Math.floor(Math.random()*900)+100);let n="+";if(e==="math_addition")n="+";else if(e==="math_subtraction")n="-";else if(e==="math_multiplication")n="*";else if(e==="math_division")n="/";else{const m=["+","-"];(e==="math_test"||!e||e==="math_multiplication"||e==="math_division")&&h!==1&&(m.push("*"),h>=3&&m.push("/")),n=m[Math.floor(Math.random()*m.length)]}let d=o,g=r,f=0;if(n==="+")f=o+r;else if(n==="-")U?(d=o,g=r):(d=Math.max(o,r),g=Math.min(o,r)),f=d-g;else if(n==="*"){let m=5;(h===2||h===3)&&(m=8),h===4&&(m=12),d=Math.floor(Math.random()*m)+1,g=Math.floor(Math.random()*m)+1,f=d*g}else if(n==="/"){const m=h===1?5:h===2?8:12;if(g=Math.floor(Math.random()*m)+1,Q)d=Math.floor(Math.random()*(m*5))+1,f=Number((d/g).toFixed(1));else{const F=Math.floor(Math.random()*m)+1,I=Math.floor(Math.random()*g);d=g*F+I,f=`Q:${F} R:${I}`}}S=`math-${d}${n}${g}`,l.prompt=a.math_solveMath,l.correctAnswer=f.toString();const y=new Set([l.correctAnswer]);for(;y.size<4;){const m=Math.floor(Math.random()*5)+1;if(typeof f=="number")y.add((Math.random()>.5?f+m:Math.max(0,f-m)).toString());else{const F=Math.floor(Math.random()*3)-1,I=Math.floor(Math.random()*3)-1,$e=Math.max(0,Math.floor(d/(g||1))+F),Ce=Math.max(0,d%(g||1)+I);y.add(`Q:${$e} R:${Ce}`)}}l.data={n1:d,n2:g,op:n,optionsStrings:Array.from(y).sort(()=>Math.random()-.5)}}else if(M==="spelling"){const o=K(j).toUpperCase();S=`spelling-${o}`,l.prompt=a.eng_tapTheWord,l.correctAnswer=o;const r=new Set([o]);for(;r.size<4;)r.add(K(j).toUpperCase());l.data={word:o,optionsStrings:Array.from(r).sort(()=>Math.random()-.5)}}else if(M==="missing_letter"){const o=K(j).toUpperCase(),r=Math.floor(Math.random()*o.length),n=o.split(""),d=n[r];n[r]="_",S=`missing-${o}-${r}`,l.prompt=a.eng_chooseMissing,l.correctAnswer=d;const g="ABCDEFGHIJKLMNOPQRSTUVWXYZ",f=new Set([d]);for(;f.size<4;)f.add(g[Math.floor(Math.random()*26)]);l.data={displayWord:n.join(""),word:o,optionsStrings:Array.from(f).sort(()=>Math.random()-.5)}}else if(M==="comparison"){const o=[];let r=20;for((h===2||h===3)&&(r=50),h===4&&(r=1e3);o.length<4;){const d=Math.floor(Math.random()*r);o.includes(d)||o.push(d)}const n=Math.random()>.5;S=`comp-${o.sort().join(",")}-${n}`,l.prompt=n?a.math_smallestNumber:a.math_biggestNumber,l.correctAnswer=n?Math.min(...o).toString():Math.max(...o).toString(),l.data={optionsStrings:o.map(String)}}else if(M==="logic"){const o=[{sequence:["🍎","🍌","🍎"],next:"🍌"},{sequence:["🐶","🐱","🐶"],next:"🐱"},{sequence:["1","2","1"],next:"2"},{sequence:["⭐","🌙","⭐"],next:"🌙"},{sequence:["🔴","🔵","🔴"],next:"🔵"},{sequence:["🚗","🚕","🚗"],next:"🚕"},{sequence:["🍦","🍩","🍦"],next:"🍩"}],r=o[Math.floor(Math.random()*o.length)];S=`logic-${r.sequence.join("")}`,l.prompt=a.log_whatNext,l.correctAnswer=r.next;const n=new Set([r.next]);for(;n.size<4;){const d=o[Math.floor(Math.random()*o.length)].next;n.add(d)}l.data={displayWord:r.sequence.join(" ")+" ?",optionsStrings:Array.from(n).sort(()=>Math.random()-.5)}}else if(M==="hindi"){const o=D[Math.floor(Math.random()*D.length)];S=`hindi-${o}`,l.prompt=a.hindi_tapLetter,l.correctAnswer=o;const r=new Set([o]);for(;r.size<4;)r.add(D[Math.floor(Math.random()*D.length)]);l.data={letter:o,optionsStrings:Array.from(r).sort(()=>Math.random()-.5)}}else if(M==="sorting"){const o=[];let r=3,n=10;for((h===2||h===3)&&(r=4,n=20),h===4&&(r=5,n=50);o.length<r;){const y=Math.floor(Math.random()*n)+1;o.includes(y)||o.push(y)}const d=Math.random()>.5;S=`sort-${o.sort().join(",")}-${d}`,l.prompt=d?a.math_sortAsc:a.math_sortDesc;const g=d?[...o].sort((y,m)=>y-m):[...o].sort((y,m)=>m-y);l.correctAnswer=g.join(", ");const f=new Set([l.correctAnswer]);for(;f.size<4;){const y=[...o].sort(()=>Math.random()-.5);f.add(y.join(", "))}l.data={displayWord:o.join("  •  "),optionsStrings:Array.from(f).sort(()=>Math.random()-.5)}}if(!ae.has(S)){ae.add(S);break}se++}i.push(l)}fe(i),J({}),Z(!1),E(!1),W(!1),q(0),P(0),window.scrollTo({top:0,behavior:"smooth"})},[e,a,h,U,Q]);u.useEffect(()=>{H()},[H]);const x=k[$];u.useEffect(()=>{if(x&&!N){const i=x.type==="math"?`What is ${x.data.n1} ${x.data.op==="+"?"plus":x.data.op==="-"?"minus":x.data.op==="*"?"times":"divided by"} ${x.data.n2}?`:x.type==="missing_letter"?`What is the missing letter in the word ${x.data.word}?`:x.data.word||x.data.letter||x.prompt,c=x.type==="hindi"?"hi-IN":"en-US",p=setTimeout(()=>{Qe(i,c)},600);return()=>clearTimeout(p)}},[$,x,N]);const ve=(i,c)=>{J(p=>({...p,[i]:c}))},Se=()=>{let i=0;k.forEach(c=>{var p;((p=z[c.id])==null?void 0:p.trim().toUpperCase())===c.correctAnswer.trim().toUpperCase()&&i++}),q(i),Z(!0),i>=8&&(Oe({particleCount:150,spread:70,origin:{y:.6}}),ge(Ie("master_test")))},oe=()=>{$<k.length-1?(P(i=>i+1),window.scrollTo({top:0,behavior:"smooth"})):Se()},_e=()=>{$>0&&P(i=>i-1)},Me=i=>{if(!i)return null;const c=z[i.id]||"";return t.jsxs(ot,{$type:i.type,children:[t.jsx(at,{children:t.jsx(st,{initial:{width:0},animate:{width:`${($+1)/10*100}%`},transition:{type:"spring",stiffness:100}})}),t.jsxs(rt,{children:["QUESTION ",i.id," OF 10"]}),t.jsx(nt,{$type:i.type,children:i.type.replace("_"," ")}),i.type!=="math"&&t.jsxs(lt,{children:[t.jsxs(ft,{children:[i.type==="spelling"&&t.jsx(Ze,{size:40}),i.type==="missing_letter"&&t.jsx(Y,{size:40}),i.type==="comparison"&&t.jsx(qe,{size:40}),i.type==="hindi"&&t.jsx(et,{size:40}),i.type==="logic"&&t.jsx(Ye,{size:40}),i.type==="sorting"&&t.jsx(tt,{size:40})]}),t.jsx(ut,{fontSize:"clamp(1.2rem, 4vw, 1.75rem)",fontWeight:900,color:"textPrimary",children:i.prompt})]}),t.jsxs(ct,{children:[i.type==="math"&&i.data&&t.jsxs(O,{children:[i.data.n1??0," ",i.data.op??"+"," ",i.data.n2??0]}),(i.type==="spelling"||i.type==="hindi")&&i.data&&t.jsx(yt,{children:t.jsx(w,{color:"textSecondary",fontSize:"md",fontWeight:600,children:a.eng_tapSpeaker})}),i.type==="missing_letter"&&i.data&&t.jsx(O,{children:i.data.displayWord}),i.type==="logic"&&i.data&&t.jsx(dt,{children:i.data.displayWord}),i.type==="sorting"&&i.data&&t.jsx(O,{$fontSize:"clamp(2rem, 8vw, 4rem)",children:i.data.displayWord}),i.data.optionsStrings&&t.jsx(mt,{$isLong:i.data.optionsStrings.some(p=>p.length>12),children:i.data.optionsStrings.map((p,j)=>t.jsx(ht,{$selected:c===p,$color:"#6366F1",onClick:()=>ve(i.id,p),whileTap:{scale:.95},children:p},j))}),t.jsxs(Fe,{children:[t.jsx(Be,{onClick:_e}),t.jsx(Pe,{text:i.type==="math"?`What is ${i.data.n1} ${i.data.op==="+"?"plus":i.data.op==="-"?"minus":i.data.op==="*"?"times":"divided by"} ${i.data.n2}?`:i.type==="missing_letter"?`What is the missing letter in the word ${i.data.word}?`:i.data.word||i.data.letter||i.prompt,lang:i.type==="hindi"?"hi-IN":"en-US"}),$===k.length-1?t.jsx(T,{title:a.com_finish.toUpperCase(),onClick:oe,variant:"primary",minWidth:"180px"}):t.jsx(Ee,{onClick:oe})]})]})]})};return t.jsxs(Re,{children:[t.jsxs(Ne,{children:[t.jsx(Ge,{icon:re,title:je(),subtitle:a.mst_subtitle,streak:0}),t.jsx(He,{title:a.com_readyForTest,subtitle:a.mst_subtitle,onClick:()=>{}}),t.jsx(it,{children:t.jsx(V,{mode:"wait",children:x&&t.jsx(kt,{initial:{x:50,opacity:0},animate:{x:0,opacity:1},exit:{x:-50,opacity:0},transition:{type:"spring",damping:20,stiffness:100},children:Me(x)},x.id)})}),!N&&t.jsxs(We,{"data-testid":"settings-area",children:[t.jsx(Ue,{name:"complexity",title:a.com_difficulty,options:be,currentValue:h,onChange:i=>ue(Number(i)),disabled:C}),(e==="math_subtraction"||e==="math_test"||G)&&t.jsxs(ne,{$disabled:C,children:[t.jsx(le,{type:"checkbox",checked:U,onChange:i=>!C&&ye(i.target.checked),disabled:C}),"Allow Negative Numbers"]}),(e==="math_division"||e==="math_test"||G)&&t.jsxs(ne,{$disabled:C,children:[t.jsx(le,{type:"checkbox",checked:Q,onChange:i=>!C&&we(i.target.checked),disabled:C}),a.com_allowDecimals]})]})]}),N&&t.jsxs(pt,{initial:{opacity:0},animate:{opacity:1},children:[!ee&&!B&&t.jsxs(wt,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},children:[t.jsx(_.div,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",damping:10},children:t.jsx(re,{size:120,color:b>=8?"#FFD700":"#94A3B8"})}),t.jsxs(vt,{fontSize:"4rem",fontWeight:900,color:"primary",children:[b," / 10"]}),t.jsx(bt,{$score:b,initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.3},children:b===10?"GRAND MASTER":b===9?"LEGEND":b===8?"PRODIGY":"KIDDOO HERO"}),t.jsx(St,{fontSize:"2rem",fontWeight:800,children:b>=8?a.com_genius:a.com_goodEffort}),t.jsx(_t,{fontSize:"lg",color:"textSecondary",children:b>=8?a.com_masteredCurriculum:a.com_keepPracticing}),t.jsxs(xe,{children:[b>=8&&t.jsx(T,{title:a.com_getCertificate,onClick:()=>W(!0),variant:"primary"}),t.jsx(T,{title:"Options ▾",onClick:()=>A(!te),variant:"secondary",icon:t.jsx(me,{size:20})}),t.jsx(V,{children:te&&t.jsxs(t.Fragment,{children:[t.jsx(ce,{onClick:()=>A(!1)}),t.jsxs(de,{initial:{opacity:0,y:10,scale:.9},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:10,scale:.9},children:[t.jsxs(R,{onClick:()=>{E(!0),A(!1)},children:[t.jsx(Y,{size:18})," ",a.com_reviewAnswers]}),t.jsxs(R,{onClick:()=>{H(),A(!1)},children:[t.jsx(Ke,{size:18})," ",a.com_tryAgain]}),t.jsxs(R,{onClick:()=>{X("/"),A(!1)},children:[t.jsx(he,{size:18})," ",a.com_home]})]})]})})]})]}),ee&&!B&&t.jsxs(Mt,{initial:{x:50,opacity:0},animate:{x:0,opacity:1},children:[t.jsx(jt,{fontSize:"2rem",fontWeight:900,color:"primary",children:a.com_testReview}),t.jsx($t,{color:"textSecondary",children:a.com_seeWhatLearned}),t.jsx(xt,{children:k.map(i=>{var p;const c=((p=z[i.id])==null?void 0:p.trim().toUpperCase())===i.correctAnswer.trim().toUpperCase();return t.jsxs(gt,{$correct:c,children:[t.jsxs(Ct,{children:[t.jsxs(w,{fontSize:"md",fontWeight:800,color:"textPrimary",children:["Question ",i.id,": ",i.prompt]}),c?t.jsx(Xe,{color:"#10B981",size:24}):t.jsx(Je,{color:"#F59E0B",size:24})]}),t.jsxs(pe,{children:[t.jsx(w,{fontSize:"sm",color:"textSecondary",children:a.com_yourAnswer}),t.jsx(w,{fontSize:"sm",fontWeight:700,color:c?"success":"warning",children:z[i.id]||"(No answer)"})]}),!c&&t.jsxs(pe,{children:[t.jsx(w,{fontSize:"sm",color:"textSecondary",children:a.com_correctAnswer}),t.jsx(w,{fontSize:"sm",fontWeight:700,color:"success",children:i.correctAnswer})]})]},i.id)})}),t.jsxs(xe,{children:[b>=8&&t.jsx(T,{title:a.com_getCertificate,onClick:()=>W(!0),variant:"primary"}),t.jsx(T,{title:"Options ▾",onClick:()=>L(!ie),variant:"secondary",icon:t.jsx(me,{size:20})}),t.jsx(V,{children:ie&&t.jsxs(t.Fragment,{children:[t.jsx(ce,{onClick:()=>L(!1)}),t.jsxs(de,{initial:{opacity:0,y:10,scale:.9},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:10,scale:.9},children:[t.jsxs(R,{onClick:()=>{E(!1),L(!1)},children:[t.jsx(Y,{size:18})," ",a.com_backToScore]}),t.jsxs(R,{onClick:()=>{X("/"),L(!1)},children:[t.jsx(he,{size:18})," ",a.com_home]})]})]})})]})]}),B&&t.jsx(zt,{children:t.jsx(Le,{onClose:()=>W(!1),challengeName:(e==null?void 0:e.replace("_"," ").toUpperCase())||"Master Test",score:b,level:"Genius"})})]})]})};export{Gt as default};

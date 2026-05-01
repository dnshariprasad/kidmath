import{j as o,q as v,r as Ne,K as S,au as Ee,k as Be,m as Oe,n as De,y as h,af as ne,aa as Pe,o as t,P as Fe,R as Qe,T as q,a2 as ae,ag as le,ah as ce,ac as L,w as F,Y as ee,Z as He,av as de,aw as me,ax as H,ay as Ue,ab as Ge,_ as Ve}from"./index-CUa6h4te.js";import{s as Ye}from"./testService-DpEVpqdb.js";import{c as Ke}from"./confetti.module-ONDKWxYZ.js";import{S as Ze}from"./SpeakIcon-C7gt1Pfd.js";import{P as Xe,N as Je}from"./PreviousIcon-Drqf6_TH.js";import{D as pe}from"./DifficultyPicker-D7_Cz65O.js";import{r as he}from"./index-B1L0o4MX.js";import{g as qe,b as te}from"./wordUtils-DPgh885X.js";import{b as z,M as xe}from"./mathUtils-B1Q27TTV.js";import{C as ge}from"./circle-check-D7RDZNrD.js";import{T as fe,B as ue}from"./timer-BkNHuC-6.js";import{R as ye,C as we,H as be}from"./rotate-ccw-CFh4Jayq.js";import{S as ie}from"./search-CKfC-PfC.js";import{C as et,S as tt}from"./spell-check-_FvniyxP.js";import{C as it}from"./calculator-uU6G2epG.js";import{B as st}from"./book-open-1n06cXMB.js";import{L as je}from"./languages-Xzc1oceZ.js";import{S as ot}from"./scale-DseBtahP.js";import{A as rt}from"./arrow-up-down-Bb3P7WcE.js";import"./info-DOyqp2Iq.js";o.div`
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
`;o(v.div)`
  height: 100%;
  background: ${e=>e.theme.colors.primary};
  border-radius: 4px;
`;const nt=o.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding-bottom: 80px;
`,at=o(Ne)`
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
`,lt=o.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  background: ${e=>e.theme.colors.primary}15;
`,ct=o(v.div)`
  height: 100%;
  background: ${e=>e.theme.colors.primary};
`,dt=o.div`
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
`,mt=o.div`
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
`,pt=o.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 40px;

  @media (max-width: 480px) {
    flex-direction: column;
    text-align: center;
    gap: 8px;
  }
`,ht=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  padding: 15px 0;

  @media (max-width: 600px) {
    gap: 30px;
    padding: 15px 0;
  }
`,Y=o.div`
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
`,xt=o(Y)`
  font-size: clamp(1.8rem, 4vw, 3rem);
  letter-spacing: 12px;
`,gt=o.div`
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
`,ft=o(v.div)`
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
`;o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 40px;
`;const ut=o(v.div)`
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
`,yt=o.div`
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
`,wt=o.div`
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
`,ve=o.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;
`,bt=o.div`
  color: ${e=>e.theme.colors.primary};
`,jt=o(S)`
  text-align: center;
`,vt=o.div`
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
`;const _t=o(v.div)`
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
`,$t=o(v.div)`
  padding: 12px 30px;
  border-radius: 100px;
  background: ${e=>e.$score>=8?e.theme.colors.gold:e.theme.colors.slate}20;
  color: ${e=>e.$score>=8?e.theme.colors.goldDark:e.theme.colors.slateDark};
  font-weight: 900;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-top: 20px;
  border: 2px solid
    ${e=>e.$score>=8?e.theme.colors.gold:e.theme.colors.slate}40;
  font-family: ${e=>e.theme.fonts.primary};
`,St=o(S)`
  margin-bottom: 10px;
`,Ct=o(S)`
  margin: 15px 0;
`,Mt=o(S)`
  margin-bottom: 10px;
`,kt=o(S)`
  margin-bottom: 25px;
  max-width: 500px;
`,_e=o.div`
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
`,zt=o(v.div)`
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
`,Tt=o(S)`
  margin-bottom: 20px;
`,At=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;o.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
`;const It=o(v.div)`
  width: 100%;
`,Lt=o.div`
  position: fixed;
  inset: 0;
  z-index: 3000;
  background: white;
`,Rt=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  gap: 12px;
  margin-bottom: 32px;
`,Wt=o(v.div)`
  width: 70px;
  height: 70px;
  border-radius: 24px;
  background: ${e=>e.theme.colors.primary}15;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e=>e.theme.colors.primary};
  flex-shrink: 0;
  margin-bottom: 8px;
`,Nt=o(v.h1)`
  font-size: 2.5rem;
  font-weight: 900;
  color: ${e=>e.theme.colors.primary};
  margin: 0;
  letter-spacing: -1px;
  line-height: 1.1;
  text-align: center;
  width: 100%;

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`,Et=o.div`
  color: ${e=>e.theme.colors.primary};
  font-weight: 800;
  font-size: 1.1rem;
  margin-bottom: 12px;
`,Bt=o(v.div)`
  padding: 30px;
  background: ${e=>e.theme.colors.surface};
  border: 1px solid ${e=>e.theme.colors.primary}15;
  border-radius: 40px;
  box-shadow: 0 40px 100px -20px rgba(0, 0, 0, 0.08);
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;

  @media (max-width: 600px) {
    padding: 20px 15px;
    border-radius: 28px;
  }
`,Ot=o.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin: 12px 0 24px;
  width: 100%;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;o.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;const Dt=o(v.div)`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 18px 24px;
  background: ${e=>e.theme.colors.surface};
  border-radius: 24px;
  border: 1px solid ${e=>e.theme.colors.primary}10;
  box-shadow: 0 8px 20px -10px ${e=>e.theme.colors.primary}20;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: ${e=>e.theme.colors.primary}30;
    box-shadow: 0 12px 25px -10px ${e=>e.theme.colors.primary}30;
  }

  svg {
    color: ${e=>e.theme.colors.primary};
    flex-shrink: 0;
  }

  span {
    color: ${e=>e.theme.colors.textSecondary};
    font-weight: 700;
    font-size: 0.9rem;
    line-height: 1.4;
  }
`,Pt=o.div`
  margin-top: ${e=>e.$minimal?"0":"16px"};
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: ${e=>e.$minimal?"0":"16px"};
  width: 100%;
`;o(S)`
  margin-bottom: -15px;
  text-align: center;
  opacity: 0.6;
  letter-spacing: 2px;
`;const Ft=o.div`
  display: flex;
  justify-content: flex-start;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 20px;
`,Qt=o(v.button)`
  padding: 12px 24px;
  border-radius: 100px;
  background: ${e=>e.$active?e.$color:e.theme.colors.surface};
  color: ${e=>e.$active?"white":e.theme.colors.textSecondary};
  border: 2px solid ${e=>e.$active?e.$color:e.theme.colors.primary+"20"};
  font-weight: 800;
  font-size: 0.9rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s ease;
  font-family: ${e=>e.theme.fonts.primary};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${e=>e.theme.shadows.md};
  }
`,Ht=o.div`
  display: flex;
  justify-content: flex-start;
  gap: 12px;
  flex-wrap: wrap;
`,Ut=o(v.button)`
  height: 50px;
  padding: 0 24px;
  border-radius: 16px;
  background: ${e=>e.$active?e.theme.colors.primary:e.theme.colors.surface};
  color: ${e=>e.$active?"white":e.theme.colors.primary};
  border: 2px solid
    ${e=>e.$active?e.theme.colors.primary:e.theme.colors.primary+"30"};
  font-size: 1.1rem;
  font-weight: 800;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  transition: all 0.2s ease;
  font-family: ${e=>e.theme.fonts.primary};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${e=>e.theme.shadows.md};
  }

  span:first-child {
    font-size: 1.6rem;
    font-weight: 900;
  }
`,Gt=(e,x,U,P,f,G=["+","-","*","/"])=>{const W=[];let C=["math","spelling","missing_letter","comparison","hindi","logic","sorting"];(e==="math_addition"||e==="math_subtraction"||e==="math_multiplication"||e==="math_division")&&(C=["math"]),e==="math_test"&&(C=["math"]),e==="math_sorting"&&(C=["sorting"]),e==="english_missing_letters"&&(C=["missing_letter"]),e==="english_spelling"&&(C=["spelling"]),e==="spelling_test"&&(C=["spelling","missing_letter"]),e==="hindi_test"&&(C=["hindi"]),e==="logic_test"&&(C=["logic","comparison"]);const T=qe();let A=T;x===1?A=T.filter($=>$.length<=4):x===2||x===3?A=T.filter($=>$.length>4&&$.length<=7):A=T.filter($=>$.length>7),A.length===0&&(A=T);const _=["अ","आ","इ","ई","उ","ऊ","ए","ऐ","ओ","औ","क","ख","ग","घ"],B=["అ","ఆ","ఇ","ఈ","ఉ","ఊ","ఎ","ఏ","ఐ","క","ఖ","గ","ఘ"],N=new Set;for(let $=1;$<=10;$++){let a={},O=0,M="";for(;O<100;){const k=C[Math.floor(Math.random()*C.length)];if(a={id:$,type:k},k==="math"){const r=`LEVEL_${x}`,n=xe[r]||xe.LEVEL_1;let l,c,d="+";if(e==="math_addition")d="+";else if(e==="math_subtraction")d="-";else if(e==="math_multiplication")d="*";else if(e==="math_division")d="/";else{const y=G.length>0?G:["+"];d=y[Math.floor(Math.random()*y.length)]}if(d==="*")l=z(1,n.multMax),c=z(1,n.multMax);else if(d==="/"){const y=Math.min(n.multMax,12);c=z(1,y),l=c*z(1,y),P&&x>=4&&(l+=z(0,c-1))}else if(x===2){const y=Math.random()>.5;l=y?z(1,9):z(10,99),c=y?z(10,99):z(1,9)}else x===3?(l=z(10,99),c=z(10,99)):(l=z(n.min,n.max),c=z(n.min,n.max));let g=l,m=c,w=0;if(d==="+")w=l+c;else if(d==="-")U||(g=Math.max(l,c),m=Math.min(l,c)),w=g-m;else if(d==="*")w=l*c;else if(d==="/")if(P&&x>=4)w=Number((g/m).toFixed(1));else{const y=Math.floor(g/m),R=g%m;w=R===0?y:`Q:${y} R:${R}`}M=`math-${g}${d}${m}`,a.prompt=f.math_solveMath,a.correctAnswer=w.toString();const E=new Set([a.correctAnswer]);for(;E.size<4;){const y=Math.floor(Math.random()*5)+1;if(typeof w=="number")E.add((Math.random()>.5?w+y:Math.max(0,w-y)).toString());else{const R=Math.floor(Math.random()*3)-1,V=Math.floor(Math.random()*3)-1,b=Math.max(0,Math.floor(g/(m||1))+R),Q=Math.max(0,g%(m||1)+V);E.add(`Q:${b} R:${Q}`)}}a.data={n1:g,n2:m,op:d,optionsStrings:Array.from(E).sort(()=>Math.random()-.5)}}else if(k==="spelling"){const r=te(A).toUpperCase();M=`spelling-${r}`,a.prompt=f.eng_tapTheWord,a.correctAnswer=r;const n=new Set([r]);for(;n.size<4;)n.add(te(A).toUpperCase());a.data={word:r,optionsStrings:Array.from(n).sort(()=>Math.random()-.5)}}else if(k==="missing_letter"){const r=te(A).toUpperCase(),n=Math.floor(Math.random()*r.length),l=r.split(""),c=l[n];l[n]="_",M=`missing-${r}-${n}`,a.prompt=f.eng_chooseMissing,a.correctAnswer=c;const d="ABCDEFGHIJKLMNOPQRSTUVWXYZ",g=new Set([c]);for(;g.size<4;)g.add(d[Math.floor(Math.random()*26)]);a.data={displayWord:l.join(""),word:r,optionsStrings:Array.from(g).sort(()=>Math.random()-.5)}}else if(k==="comparison"){const r=[];let n=20;for((x===2||x===3)&&(n=50),x===4&&(n=1e3);r.length<4;){const c=Math.floor(Math.random()*n);r.includes(c)||r.push(c)}const l=Math.random()>.5;M=`comp-${r.sort().join(",")}-${l}`,a.prompt=l?f.math_smallestNumber:f.math_biggestNumber,a.correctAnswer=l?Math.min(...r).toString():Math.max(...r).toString(),a.data={optionsStrings:r.map(String)}}else if(k==="logic"){const r=[{sequence:["🍎","🍌","🍎"],next:"🍌"},{sequence:["🐶","🐱","🐶"],next:"🐱"},{sequence:["1","2","1"],next:"2"},{sequence:["⭐","🌙","⭐"],next:"🌙"},{sequence:["🔴","🔵","🔴"],next:"🔵"},{sequence:["🚗","🚕","🚗"],next:"🚕"},{sequence:["🍦","🍩","🍦"],next:"🍩"},{sequence:["🛸","🚀","🛸"],next:"🚀"},{sequence:["🍎","🍎","🍌"],next:"🍌"},{sequence:["1","3","5"],next:"7"},{sequence:["A","B","A"],next:"B"},{sequence:["🔼","🔽","🔼"],next:"🔽"},{sequence:["🟢","🟡","🟢"],next:"🟡"},{sequence:["10","20","30"],next:"40"},{sequence:["M","N","M"],next:"N"},{sequence:["🦁","🐯","🦁"],next:"🐯"}],n=r[Math.floor(Math.random()*r.length)];M=`logic-${n.sequence.join("")}`,a.prompt=f.log_whatNext,a.correctAnswer=n.next;const l=new Set([n.next]);for(;l.size<4;){const c=r[Math.floor(Math.random()*r.length)].next;l.add(c)}a.data={displayWord:n.sequence.join(" ")+" ?",optionsStrings:Array.from(l).sort(()=>Math.random()-.5)}}else if(k==="hindi"){const r=_[Math.floor(Math.random()*_.length)];M=`hindi-${r}`,a.prompt=f.hindi_tapLetter,a.correctAnswer=r;const n=new Set([r]);for(;n.size<4;)n.add(_[Math.floor(Math.random()*_.length)]);a.data={letter:r,optionsStrings:Array.from(n).sort(()=>Math.random()-.5)}}else if(k==="telugu"){const r=B[Math.floor(Math.random()*B.length)];M=`telugu-${r}`,a.prompt=f.tel_tapLetter,a.correctAnswer=r;const n=new Set([r]);for(;n.size<4;)n.add(B[Math.floor(Math.random()*B.length)]);a.data={letter:r,optionsStrings:Array.from(n).sort(()=>Math.random()-.5)}}else if(k==="sorting"){const r=[];let n=3,l=10;for((x===2||x===3)&&(n=4,l=20),x===4&&(n=5,l=50);r.length<n;){const m=Math.floor(Math.random()*l)+1;r.includes(m)||r.push(m)}const c=Math.random()>.5;M=`sort-${r.sort().join(",")}-${c}`,a.prompt=c?f.math_sortAsc:f.math_sortDesc;const d=c?[...r].sort((m,w)=>m-w):[...r].sort((m,w)=>w-m);a.correctAnswer=d.join(", ");const g=new Set([a.correctAnswer]);for(;g.size<4;){const m=[...r].sort(()=>Math.random()-.5);g.add(m.join(", "))}a.data={displayWord:r.join("  •  "),optionsStrings:Array.from(g).sort(()=>Math.random()-.5)}}if(!N.has(M)){N.add(M);break}O++}W.push(a)}return W},se=e=>{if(e.type==="math"){const x={"+":"plus","-":"minus","*":"times","/":"divided by"};return`What is ${e.data.n1} ${x[e.data.op||"+"]} ${e.data.n2}?`}return e.type==="missing_letter"?`What is the missing letter in the word ${e.data.word}?`:e.type==="hindi"||e.type==="telugu"?e.data.letter||e.correctAnswer:e.data.word||e.data.letter||e.prompt},Vt=e=>e===10?"GRAND MASTER":e===9?"LEGEND":e===8?"PRODIGY":"KIDDOO HERO",xi=()=>{const{testId:e}=Ee(),x=Be(),U=Oe(),P=De(i=>i.alphabet.user),[f,G]=h.useState([]),[W,C]=h.useState({}),[T,A]=h.useState(!1),[_,B]=h.useState(0),[N,$]=h.useState(0),[a,O]=h.useState(!1),[M,k]=h.useState(!1),[r,n]=h.useState(!1),[l,c]=h.useState(!1),[d,g]=h.useState(1),[m,w]=h.useState(!1),[E,y]=h.useState(!1),[R,V]=h.useState(!1),[b,Q]=h.useState(0),[j,$e]=h.useState(0),[I,Se]=h.useState("math_test"),[D,Ce]=h.useState(["+"]),oe=I==="master_test",s=Ge.en,Me=[{id:"math_test",label:"Math",icon:t.jsx(it,{size:18}),color:"#6366F1"},{id:"spelling_test",label:"English",icon:t.jsx(st,{size:18}),color:"#6366F1"},{id:"hindi_test",label:"Hindi",icon:t.jsx(je,{size:18}),color:"#6366F1"},{id:"logic_test",label:"Logic",icon:t.jsx(ue,{size:18}),color:"#6366F1"},{id:"master_test",label:"Grand Master",icon:t.jsx(q,{size:18}),color:"#6366F1"}],ke=ne.useMemo(()=>[{value:1,label:s.diff_beginner,info:"Numbers 1-10"},{value:2,label:s.diff_explorer,info:"One single & one double digit"},{value:3,label:s.diff_achiever,info:"Two double digits (10-99)"},{value:4,label:s.diff_master,info:"3-digit numbers (100-999)"},{value:5,label:s.diff_elite,info:"4-digit numbers (1000-9999)"}],[s]),ze=ne.useMemo(()=>[{value:0,label:s.test_noLimit,info:s.test_timeLimitInfo.none},{value:30,label:s.test_time30s,info:s.test_timeLimitInfo.s30},{value:60,label:s.test_time1m,info:s.test_timeLimitInfo.m1},{value:120,label:s.test_time2m,info:s.test_timeLimitInfo.m2},{value:180,label:s.test_time3m,info:s.test_timeLimitInfo.m3},{value:240,label:s.test_time4m,info:s.test_timeLimitInfo.m4},{value:300,label:s.test_time5m,info:s.test_timeLimitInfo.m5}],[s]),Te=()=>[s.test_qCount,s.test_selectBest,s.test_timeRecorded,s.test_scoreForCert],K=()=>{if(oe)return s.mst_grandMaster;switch(I){case"math_addition":return s.math_addition;case"math_subtraction":return s.math_subtraction;case"math_multiplication":return s.math_multiplication;case"math_division":return s.math_division;case"math_test":return s.math_mathHero;case"math_sorting":return s.math_sorting;case"english_missing_letters":return s.eng_missingLetters;case"english_spelling":return s.eng_listenAndFind;case"spelling_test":return s.eng_spellingHero;case"hindi_test":return s.hindi_hindiLegend;case"logic_test":return s.log_grandLogic;default:return s.com_tryAgain}},Z=h.useCallback(()=>{const i=Gt(I,d,m,E,s,D);G(i),C({}),A(!1),k(!1),O(!1),B(0),$(0),Q(0),window.scrollTo({top:0,behavior:"smooth"})},[I,s,d,m,E,D]),X=h.useCallback(()=>{let i=0;f.forEach(p=>{var u;((u=W[p.id])==null?void 0:u.trim().toUpperCase())===p.correctAnswer.trim().toUpperCase()&&i++}),B(i),A(!0),i>=8&&(Ke({particleCount:150,spread:70,origin:{y:.6}}),U(Pe("master_test"))),P&&Ye({userId:P.uid,testId:I,testTitle:K(),score:i,totalQuestions:f.length,timeTaken:b,category:I,difficulty:d}).catch(p=>console.error("Failed to save test result:",p))},[f,W,U,P,I,d,b,K]);h.useEffect(()=>{Z()},[Z]),h.useEffect(()=>{let i;return R&&!T&&(i=setInterval(()=>{Q(p=>{const u=p+1;return j>0&&u>=j?(clearInterval(i),X(),j):u})},1e3)),()=>clearInterval(i)},[R,T,j,X]);const J=f[N],Ae=(i,p)=>{C(u=>({...u,[i]:p}))},Ie=()=>{V(!0),Q(0)},re=()=>{N<f.length-1?($(i=>i+1),window.scrollTo({top:0,behavior:"smooth"})):X()},Le=()=>{N>0&&$(i=>i-1)},Re=i=>{if(!i)return null;const p=W[i.id]||"";return t.jsxs(at,{$type:i.type,children:[t.jsx(lt,{children:t.jsx(ct,{initial:{width:0},animate:{width:`${(N+1)/10*100}%`},transition:{type:"spring",stiffness:100}})}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[t.jsxs(dt,{children:[s.test_question," ",i.id," ",s.test_of," 10"]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",color:L.primary,fontWeight:"bold",marginTop:"20px"},children:[t.jsx(fe,{size:18}),Math.floor(b/60),":",(b%60).toString().padStart(2,"0"),j>0&&t.jsxs("span",{style:{fontSize:"0.8rem",opacity:.6,marginLeft:"4px"},children:["/ ",Math.floor(j/60),":",(j%60).toString().padStart(2,"0")]})]})]}),t.jsx(mt,{$type:i.type,children:i.type.replace("_"," ")}),i.type!=="math"&&t.jsxs(pt,{children:[t.jsxs(bt,{children:[i.type==="spelling"&&t.jsx(tt,{size:40}),i.type==="missing_letter"&&t.jsx(ie,{size:40}),i.type==="comparison"&&t.jsx(ot,{size:40}),i.type==="hindi"&&t.jsx(je,{size:40}),i.type==="logic"&&t.jsx(ue,{size:40}),i.type==="sorting"&&t.jsx(rt,{size:40})]}),t.jsx(jt,{fontSize:"clamp(1.2rem, 4vw, 1.75rem)",fontWeight:900,color:"textPrimary",children:i.prompt})]}),t.jsxs(ht,{children:[i.type==="math"&&i.data&&t.jsxs(Y,{onClick:()=>he(se(i),i.type==="hindi"?"hi-IN":i.type==="telugu"?"te-IN":"en-US"),children:[i.data.n1??0," ",i.data.op??"+"," ",i.data.n2??0]}),(i.type==="spelling"||i.type==="hindi"||i.type==="telugu")&&i.data&&t.jsx(vt,{children:t.jsx(S,{color:"textSecondary",fontSize:"md",fontWeight:600,children:s.eng_tapSpeaker})}),i.type==="missing_letter"&&i.data&&t.jsx(Y,{onClick:()=>he(se(i),i.type==="hindi"?"hi-IN":i.type==="telugu"?"te-IN":"en-US"),children:i.data.displayWord}),i.type==="logic"&&i.data&&t.jsx(xt,{children:i.data.displayWord}),i.type==="sorting"&&i.data&&t.jsx(Y,{$fontSize:"clamp(2rem, 8vw, 4rem)",children:i.data.displayWord}),i.data.optionsStrings&&t.jsx(gt,{$isLong:i.data.optionsStrings.some(u=>u.length>12),children:i.data.optionsStrings.map((u,We)=>t.jsx(ft,{$selected:p===u,$color:L.primary,onClick:()=>Ae(i.id,u),whileTap:{scale:.95},children:u},We))}),t.jsxs(Ve,{children:[t.jsx(Xe,{onClick:Le}),t.jsx(Ze,{text:se(i),lang:i.type==="hindi"?"hi-IN":i.type==="telugu"?"te-IN":"en-US"}),N===f.length-1?t.jsx(F,{title:s.com_finish.toUpperCase(),onClick:re,variant:"primary",minWidth:"180px"}):t.jsx(Je,{onClick:re})]})]})]})};return t.jsxs(Fe,{children:[t.jsxs(Qe,{children:[!R&&!T&&t.jsx("div",{style:{gridColumn:"1 / -1",width:"100%"},children:t.jsxs(Bt,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{type:"spring",damping:20},children:[t.jsxs(Rt,{children:[t.jsx(Wt,{animate:{scale:[1,1.05,1],rotate:[0,5,-5,0]},transition:{duration:4,repeat:1/0,ease:"easeInOut"},children:t.jsx(q,{size:40})}),t.jsx(Nt,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},children:K()},I)]}),t.jsxs(Pt,{children:[t.jsx(ae,{children:"Choose Your Subject"}),t.jsx(Ft,{children:Me.map(i=>t.jsxs(Qt,{$active:I===i.id,$color:i.color,onClick:()=>Se(i.id),whileHover:{scale:1.05},whileTap:{scale:.95},children:[i.icon,i.label]},i.id))}),(I==="math_test"||oe)&&t.jsxs(t.Fragment,{children:[t.jsx(ae,{children:"Included Operations"}),t.jsx(Ht,{children:[{symbol:"+",label:s.math_addition},{symbol:"-",label:s.math_subtraction},{symbol:"*",label:s.math_multiplication,display:"×"},{symbol:"/",label:s.math_division,display:"÷"}].map(i=>t.jsxs(Ut,{$active:D.includes(i.symbol),onClick:()=>Ce(p=>p.includes(i.symbol)?p.filter(u=>u!==i.symbol):[...p,i.symbol]),whileHover:{scale:1.02},whileTap:{scale:.98},children:[t.jsx("span",{className:"symbol",children:i.display||i.symbol}),t.jsx("span",{className:"label",children:i.label})]},i.symbol))}),(D.includes("-")||D.includes("/"))&&t.jsxs("div",{style:{display:"flex",gap:"24px",flexWrap:"wrap",marginTop:"16px",marginBottom:"16px"},children:[D.includes("-")&&t.jsxs(le,{children:[t.jsx(ce,{type:"checkbox",checked:m,onChange:i=>w(i.target.checked)}),t.jsx("span",{style:{fontWeight:700,fontSize:"0.9rem"},children:s.com_allowNegative})]}),D.includes("/")&&t.jsxs(le,{children:[t.jsx(ce,{type:"checkbox",checked:E,onChange:i=>y(i.target.checked)}),t.jsx("span",{style:{fontWeight:700,fontSize:"0.9rem"},children:s.com_allowDecimals})]})]})]}),t.jsx("div",{style:{marginTop:"12px"},children:t.jsx(pe,{title:"Difficulty",options:ke,currentValue:d,onChange:i=>g(i),name:"test_complexity"})}),t.jsx("div",{style:{marginTop:"4px"},children:t.jsx(pe,{title:"Target Time",options:ze,currentValue:j,onChange:i=>$e(i),name:"test_target_time"})})]}),t.jsxs("div",{style:{width:"100%",marginTop:"32px",borderTop:`1px solid ${L.primary}10`,paddingTop:"24px"},children:[t.jsx(Et,{children:s.test_instructions}),t.jsx(Ot,{children:Te().map((i,p)=>t.jsxs(Dt,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:p*.1},children:[t.jsx(ge,{size:18,color:"#10B981"}),t.jsx(S,{fontSize:"md",fontWeight:600,color:"textPrimary",children:i})]},p))})]}),t.jsx("div",{style:{marginTop:"24px",width:"100%"},children:t.jsx(F,{title:s.test_start,onClick:Ie,variant:"primary",width:"100%",size:"lg"})})]})}),R&&!T&&t.jsx("div",{style:{gridColumn:"1 / -1",width:"100%"},children:t.jsx(nt,{children:t.jsx(ee,{mode:"wait",children:J&&t.jsx(It,{initial:{x:50,opacity:0},animate:{x:0,opacity:1},exit:{x:-50,opacity:0},transition:{type:"spring",damping:20,stiffness:100},children:Re(J)},J.id)})})})]}),T&&t.jsxs(ut,{initial:{opacity:0},animate:{opacity:1},children:[!M&&!a&&t.jsxs(_t,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},children:[t.jsx(v.div,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",damping:10},children:t.jsx(q,{size:120,color:_>=8?L.gold:L.slate})}),t.jsxs(Ct,{fontSize:"4rem",fontWeight:900,color:"primary",children:[_," / 10"]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",fontSize:"1.5rem",fontWeight:"bold",color:L.textSecondary,marginBottom:"20px"},children:[t.jsx(fe,{size:24}),s.com_time||"Time",": ",Math.floor(b/60),":",(b%60).toString().padStart(2,"0")]}),t.jsx($t,{$score:_,initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.3},children:Vt(_)}),j>0&&b>=j&&t.jsx("div",{style:{color:"#EF4444",fontWeight:900,fontSize:"1.2rem",marginTop:"10px"},children:"⏰ TIME'S UP!"}),t.jsx(Mt,{fontSize:"2rem",fontWeight:800,children:_>=8?s.com_genius:s.com_goodEffort}),t.jsx(kt,{fontSize:"lg",color:"textSecondary",children:_>=8?s.com_masteredCurriculum:s.test_keepPracticing}),j>0&&t.jsxs("div",{style:{marginTop:"15px",padding:"10px 20px",borderRadius:"12px",background:b<=j?`${L.success}15`:`${L.warning}15`,color:b<=j?L.successDark:L.goldDark,fontWeight:700,fontSize:"0.9rem",display:"flex",alignItems:"center",gap:"8px"},children:[b<=j?t.jsx(He,{size:18}):t.jsx(ye,{size:18}),b<=j?s.test_beatenTarget:s.test_timeExceeded]}),t.jsxs(_e,{children:[_>=8&&t.jsx(F,{title:s.com_getCertificate,onClick:()=>O(!0),variant:"primary"}),t.jsx(F,{title:"Options ▾",onClick:()=>n(!r),variant:"secondary",icon:t.jsx(we,{size:20})}),t.jsx(ee,{children:r&&t.jsxs(t.Fragment,{children:[t.jsx(de,{onClick:()=>n(!1)}),t.jsxs(me,{initial:{opacity:0,y:10,scale:.9},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:10,scale:.9},children:[t.jsxs(H,{onClick:()=>{k(!0),n(!1)},children:[t.jsx(ie,{size:18})," ",s.com_reviewAnswers]}),t.jsxs(H,{onClick:()=>{Z(),V(!1),n(!1)},children:[t.jsx(ye,{size:18})," ",s.com_tryAgain]}),t.jsxs(H,{onClick:()=>{x("/"),n(!1)},children:[t.jsx(be,{size:18})," ",s.com_home]})]})]})})]})]}),M&&!a&&t.jsxs(zt,{initial:{x:50,opacity:0},animate:{x:0,opacity:1},children:[t.jsx(St,{fontSize:"2rem",fontWeight:900,color:"primary",children:s.com_testReview}),t.jsx(Tt,{color:"textSecondary",children:s.com_seeWhatLearned}),t.jsx(yt,{children:f.map(i=>{var u;const p=((u=W[i.id])==null?void 0:u.trim().toUpperCase())===i.correctAnswer.trim().toUpperCase();return t.jsxs(wt,{$correct:p,children:[t.jsxs(At,{children:[t.jsxs(S,{fontSize:"md",fontWeight:800,color:"textPrimary",children:["Question ",i.id,": ",i.prompt]}),p?t.jsx(ge,{color:"#10B981",size:24}):t.jsx(et,{color:"#F59E0B",size:24})]}),t.jsxs(ve,{children:[t.jsx(S,{fontSize:"sm",color:"textSecondary",children:s.com_yourAnswer}),t.jsx(S,{fontSize:"sm",fontWeight:700,color:p?"success":"warning",children:W[i.id]||"(No answer)"})]}),!p&&t.jsxs(ve,{children:[t.jsx(S,{fontSize:"sm",color:"textSecondary",children:s.com_correctAnswer}),t.jsx(S,{fontSize:"sm",fontWeight:700,color:"success",children:i.correctAnswer})]})]},i.id)})}),t.jsxs(_e,{children:[_>=8&&t.jsx(F,{title:s.com_getCertificate,onClick:()=>O(!0),variant:"primary"}),t.jsx(F,{title:"Options ▾",onClick:()=>c(!l),variant:"secondary",icon:t.jsx(we,{size:20})}),t.jsx(ee,{children:l&&t.jsxs(t.Fragment,{children:[t.jsx(de,{onClick:()=>c(!1)}),t.jsxs(me,{initial:{opacity:0,y:10,scale:.9},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:10,scale:.9},children:[t.jsxs(H,{onClick:()=>{k(!1),c(!1)},children:[t.jsx(ie,{size:18})," ",s.com_backToScore]}),t.jsxs(H,{onClick:()=>{x("/"),c(!1)},children:[t.jsx(be,{size:18})," ",s.com_home]})]})]})})]})]}),a&&t.jsx(Lt,{children:t.jsx(Ue,{onClose:()=>O(!1),challengeName:(e==null?void 0:e.replace("_"," ").toUpperCase())||"Master Test",score:_,level:"Genius",timeTaken:`${Math.floor(b/60)}:${(b%60).toString().padStart(2,"0")}`})})]})]})};export{xi as default};

import{i as o,p as v,q as Ie,K as $,al as Ne,j as Ee,l as Be,x as p,a6 as oe,a1 as Oe,n as t,P as De,G as Pe,T as J,J as re,a7 as ne,a8 as ae,a3 as T,v as P,A as X,Z as Fe,am as le,an as ce,ao as H,ap as Ge,a2 as He,N as Qe}from"./index-BzdFQOCa.js";import{c as Ue}from"./confetti.module-ONDKWxYZ.js";import{S as Ve}from"./SpeakIcon-Dbx5sp4D.js";import{P as Ye,N as Ke}from"./PreviousIcon-gTOXJKlp.js";import{D as de}from"./DifficultyPicker-D00m2s40.js";import{r as me}from"./index-D_1LuV89.js";import{g as Ze,b as q}from"./wordUtils-DPgh885X.js";import{b as C,M as pe}from"./mathUtils-B1Q27TTV.js";import{C as he}from"./circle-check-1Uvwo0pQ.js";import{T as xe,R as ge,C as fe,H as ue,B as ye}from"./timer-BcTJCE_o.js";import{S as ee}from"./search-CzHTLUgF.js";import{C as Je,S as Xe}from"./spell-check-cblxE18f.js";import{C as qe}from"./calculator-DUzPXT1S.js";import{B as et}from"./book-open-ztpLZQv_.js";import{L as we}from"./languages-sVch-qvq.js";import{S as tt}from"./scale-Bamp4Dfn.js";import{A as it}from"./arrow-up-down-BqHHFZwO.js";import"./info-r8r59zua.js";o.div`
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
`;const st=o.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding-bottom: 80px;
`,ot=o(Ie)`
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
`,rt=o.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  background: ${e=>e.theme.colors.primary}15;
`,nt=o(v.div)`
  height: 100%;
  background: ${e=>e.theme.colors.primary};
`,at=o.div`
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
`,lt=o.div`
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
`,ct=o.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 40px;

  @media (max-width: 480px) {
    flex-direction: column;
    text-align: center;
    gap: 8px;
  }
`,dt=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  padding: 15px 0;

  @media (max-width: 600px) {
    gap: 30px;
    padding: 15px 0;
  }
`,V=o.div`
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
`,mt=o(V)`
  font-size: clamp(1.8rem, 4vw, 3rem);
  letter-spacing: 12px;
`,pt=o.div`
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
`,ht=o(v.div)`
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
`;const xt=o(v.div)`
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
`,gt=o.div`
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
`,ft=o.div`
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
`,be=o.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;
`,ut=o.div`
  color: ${e=>e.theme.colors.primary};
`,yt=o($)`
  text-align: center;
`,wt=o.div`
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
`;const bt=o(v.div)`
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
`,jt=o(v.div)`
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
`,vt=o($)`
  margin-bottom: 10px;
`,_t=o($)`
  margin: 15px 0;
`,$t=o($)`
  margin-bottom: 10px;
`,St=o($)`
  margin-bottom: 25px;
  max-width: 500px;
`,je=o.div`
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
`,Ct=o(v.div)`
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
`,kt=o($)`
  margin-bottom: 20px;
`,Mt=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;o.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
`;const zt=o(v.div)`
  width: 100%;
`,Tt=o.div`
  position: fixed;
  inset: 0;
  z-index: 3000;
  background: white;
`,At=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  gap: 12px;
  margin-bottom: 32px;
`,Lt=o(v.div)`
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
`,Rt=o(v.h1)`
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
`,Wt=o.div`
  padding: 6px 16px;
  background: ${e=>e.theme.colors.primary}10;
  color: ${e=>e.theme.colors.primary};
  border-radius: 100px;
  font-weight: 800;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-bottom: 4px;
  display: inline-block;
`,It=o(v.div)`
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
`,Nt=o.div`
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
`;const Et=o(v.div)`
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
`,Bt=o.div`
  margin-top: ${e=>e.$minimal?"0":"16px"};
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: ${e=>e.$minimal?"0":"16px"};
  width: 100%;
`;o($)`
  margin-bottom: -15px;
  text-align: center;
  opacity: 0.6;
  letter-spacing: 2px;
`;const Ot=o.div`
  display: flex;
  justify-content: flex-start;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 20px;
`,Dt=o(v.button)`
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
`,Pt=o.div`
  display: flex;
  justify-content: flex-start;
  gap: 12px;
  flex-wrap: wrap;
`,Ft=o(v.button)`
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
`,Gt=(e,x,Q,A,z,R=["+","-","*","/"])=>{const F=[];let y=["math","spelling","missing_letter","comparison","hindi","logic","sorting"];(e==="math_addition"||e==="math_subtraction"||e==="math_multiplication"||e==="math_division")&&(y=["math"]),e==="math_test"&&(y=["math"]),e==="math_sorting"&&(y=["sorting"]),e==="english_missing_letters"&&(y=["missing_letter"]),e==="english_spelling"&&(y=["spelling"]),e==="spelling_test"&&(y=["spelling","missing_letter"]),e==="hindi_test"&&(y=["hindi"]),e==="logic_test"&&(y=["logic","comparison"]);const W=Ze();let f=W;x===1?f=W.filter(_=>_.length<=4):x===2||x===3?f=W.filter(_=>_.length>4&&_.length<=7):f=W.filter(_=>_.length>7),f.length===0&&(f=W);const E=["अ","आ","इ","ई","उ","ऊ","ए","ऐ","ओ","औ","क","ख","ग","घ"],I=new Set;for(let _=1;_<=10;_++){let l={},B=0,k="";for(;B<100;){const M=y[Math.floor(Math.random()*y.length)];if(l={id:_,type:M},M==="math"){const r=`LEVEL_${x}`,n=pe[r]||pe.LEVEL_1;let a,c,m="+";if(e==="math_addition")m="+";else if(e==="math_subtraction")m="-";else if(e==="math_multiplication")m="*";else if(e==="math_division")m="/";else{const w=R.length>0?R:["+"];m=w[Math.floor(Math.random()*w.length)]}if(m==="*")a=C(1,n.multMax),c=C(1,n.multMax);else if(m==="/"){const w=Math.min(n.multMax,12);c=C(1,w),a=c*C(1,w),A&&x>=4&&(a+=C(0,c-1))}else if(x===2){const w=Math.random()>.5;a=w?C(1,9):C(10,99),c=w?C(10,99):C(1,9)}else x===3?(a=C(10,99),c=C(10,99)):(a=C(n.min,n.max),c=C(n.min,n.max));let g=a,d=c,b=0;if(m==="+")b=a+c;else if(m==="-")Q||(g=Math.max(a,c),d=Math.min(a,c)),b=g-d;else if(m==="*")b=a*c;else if(m==="/")if(A&&x>=4)b=Number((g/d).toFixed(1));else{const w=Math.floor(g/d),L=g%d;b=L===0?w:`Q:${w} R:${L}`}k=`math-${g}${m}${d}`,l.prompt=z.math_solveMath,l.correctAnswer=b.toString();const N=new Set([l.correctAnswer]);for(;N.size<4;){const w=Math.floor(Math.random()*5)+1;if(typeof b=="number")N.add((Math.random()>.5?b+w:Math.max(0,b-w)).toString());else{const L=Math.floor(Math.random()*3)-1,U=Math.floor(Math.random()*3)-1,S=Math.max(0,Math.floor(g/(d||1))+L),G=Math.max(0,g%(d||1)+U);N.add(`Q:${S} R:${G}`)}}l.data={n1:g,n2:d,op:m,optionsStrings:Array.from(N).sort(()=>Math.random()-.5)}}else if(M==="spelling"){const r=q(f).toUpperCase();k=`spelling-${r}`,l.prompt=z.eng_tapTheWord,l.correctAnswer=r;const n=new Set([r]);for(;n.size<4;)n.add(q(f).toUpperCase());l.data={word:r,optionsStrings:Array.from(n).sort(()=>Math.random()-.5)}}else if(M==="missing_letter"){const r=q(f).toUpperCase(),n=Math.floor(Math.random()*r.length),a=r.split(""),c=a[n];a[n]="_",k=`missing-${r}-${n}`,l.prompt=z.eng_chooseMissing,l.correctAnswer=c;const m="ABCDEFGHIJKLMNOPQRSTUVWXYZ",g=new Set([c]);for(;g.size<4;)g.add(m[Math.floor(Math.random()*26)]);l.data={displayWord:a.join(""),word:r,optionsStrings:Array.from(g).sort(()=>Math.random()-.5)}}else if(M==="comparison"){const r=[];let n=20;for((x===2||x===3)&&(n=50),x===4&&(n=1e3);r.length<4;){const c=Math.floor(Math.random()*n);r.includes(c)||r.push(c)}const a=Math.random()>.5;k=`comp-${r.sort().join(",")}-${a}`,l.prompt=a?z.math_smallestNumber:z.math_biggestNumber,l.correctAnswer=a?Math.min(...r).toString():Math.max(...r).toString(),l.data={optionsStrings:r.map(String)}}else if(M==="logic"){const r=[{sequence:["🍎","🍌","🍎"],next:"🍌"},{sequence:["🐶","🐱","🐶"],next:"🐱"},{sequence:["1","2","1"],next:"2"},{sequence:["⭐","🌙","⭐"],next:"🌙"},{sequence:["🔴","🔵","🔴"],next:"🔵"},{sequence:["🚗","🚕","🚗"],next:"🚕"},{sequence:["🍦","🍩","🍦"],next:"🍩"},{sequence:["🛸","🚀","🛸"],next:"🚀"},{sequence:["🍎","🍎","🍌"],next:"🍌"},{sequence:["1","3","5"],next:"7"},{sequence:["A","B","A"],next:"B"},{sequence:["🔼","🔽","🔼"],next:"🔽"},{sequence:["🟢","🟡","🟢"],next:"🟡"},{sequence:["10","20","30"],next:"40"},{sequence:["M","N","M"],next:"N"},{sequence:["🦁","🐯","🦁"],next:"🐯"}],n=r[Math.floor(Math.random()*r.length)];k=`logic-${n.sequence.join("")}`,l.prompt=z.log_whatNext,l.correctAnswer=n.next;const a=new Set([n.next]);for(;a.size<4;){const c=r[Math.floor(Math.random()*r.length)].next;a.add(c)}l.data={displayWord:n.sequence.join(" ")+" ?",optionsStrings:Array.from(a).sort(()=>Math.random()-.5)}}else if(M==="hindi"){const r=E[Math.floor(Math.random()*E.length)];k=`hindi-${r}`,l.prompt=z.hindi_tapLetter,l.correctAnswer=r;const n=new Set([r]);for(;n.size<4;)n.add(E[Math.floor(Math.random()*E.length)]);l.data={letter:r,optionsStrings:Array.from(n).sort(()=>Math.random()-.5)}}else if(M==="sorting"){const r=[];let n=3,a=10;for((x===2||x===3)&&(n=4,a=20),x===4&&(n=5,a=50);r.length<n;){const d=Math.floor(Math.random()*a)+1;r.includes(d)||r.push(d)}const c=Math.random()>.5;k=`sort-${r.sort().join(",")}-${c}`,l.prompt=c?z.math_sortAsc:z.math_sortDesc;const m=c?[...r].sort((d,b)=>d-b):[...r].sort((d,b)=>b-d);l.correctAnswer=m.join(", ");const g=new Set([l.correctAnswer]);for(;g.size<4;){const d=[...r].sort(()=>Math.random()-.5);g.add(d.join(", "))}l.data={displayWord:r.join("  •  "),optionsStrings:Array.from(g).sort(()=>Math.random()-.5)}}if(!I.has(k)){I.add(k);break}B++}F.push(l)}return F},te=e=>{if(e.type==="math"){const x={"+":"plus","-":"minus","*":"times","/":"divided by"};return`What is ${e.data.n1} ${x[e.data.op||"+"]} ${e.data.n2}?`}return e.type==="missing_letter"?`What is the missing letter in the word ${e.data.word}?`:e.data.word||e.data.letter||e.prompt},Ht=e=>e===10?"GRAND MASTER":e===9?"LEGEND":e===8?"PRODIGY":"KIDDOO HERO",ci=()=>{const{testId:e}=Ne(),x=Ee(),Q=Be(),[A,z]=p.useState([]),[R,F]=p.useState({}),[y,W]=p.useState(!1),[f,E]=p.useState(0),[I,_]=p.useState(0),[l,B]=p.useState(!1),[k,M]=p.useState(!1),[r,n]=p.useState(!1),[a,c]=p.useState(!1),[m,g]=p.useState(1),[d,b]=p.useState(!1),[N,w]=p.useState(!1),[L,U]=p.useState(!1),[S,G]=p.useState(0),[j,ve]=p.useState(0),[O,_e]=p.useState("math_test"),[D,$e]=p.useState(["+"]),ie=O==="master_test",s=He.en,Se=[{id:"math_test",label:"Math",icon:t.jsx(qe,{size:18}),color:"#6366F1"},{id:"spelling_test",label:"English",icon:t.jsx(et,{size:18}),color:"#6366F1"},{id:"hindi_test",label:"Hindi",icon:t.jsx(we,{size:18}),color:"#6366F1"},{id:"logic_test",label:"Logic",icon:t.jsx(ye,{size:18}),color:"#6366F1"},{id:"master_test",label:"Grand Master",icon:t.jsx(J,{size:18}),color:"#6366F1"}],Ce=oe.useMemo(()=>[{value:1,label:s.diff_beginner,info:"Numbers 1-10"},{value:2,label:s.diff_explorer,info:"One single & one double digit"},{value:3,label:s.diff_achiever,info:"Two double digits (10-99)"},{value:4,label:s.diff_master,info:"3-digit numbers (100-999)"},{value:5,label:s.diff_elite,info:"4-digit numbers (1000-9999)"}],[s]),ke=oe.useMemo(()=>[{value:0,label:s.test_noLimit,info:s.test_timeLimitInfo.none},{value:30,label:s.test_time30s,info:s.test_timeLimitInfo.s30},{value:60,label:s.test_time1m,info:s.test_timeLimitInfo.m1},{value:120,label:s.test_time2m,info:s.test_timeLimitInfo.m2},{value:180,label:s.test_time3m,info:s.test_timeLimitInfo.m3},{value:240,label:s.test_time4m,info:s.test_timeLimitInfo.m4},{value:300,label:s.test_time5m,info:s.test_timeLimitInfo.m5}],[s]),Me=()=>[s.test_qCount,s.test_selectBest,s.test_timeRecorded,s.test_scoreForCert],ze=()=>{if(ie)return s.mst_grandMaster;switch(O){case"math_addition":return s.math_addition;case"math_subtraction":return s.math_subtraction;case"math_multiplication":return s.math_multiplication;case"math_division":return s.math_division;case"math_test":return s.math_mathHero;case"math_sorting":return s.math_sorting;case"english_missing_letters":return s.eng_missingLetters;case"english_spelling":return s.eng_listenAndFind;case"spelling_test":return s.eng_spellingHero;case"hindi_test":return s.hindi_hindiLegend;case"logic_test":return s.log_grandLogic;default:return s.com_tryAgain}},Y=p.useCallback(()=>{const i=Gt(O,m,d,N,s,D);z(i),F({}),W(!1),M(!1),B(!1),E(0),_(0),G(0),window.scrollTo({top:0,behavior:"smooth"})},[O,s,m,d,N,D]),K=p.useCallback(()=>{let i=0;A.forEach(h=>{var u;((u=R[h.id])==null?void 0:u.trim().toUpperCase())===h.correctAnswer.trim().toUpperCase()&&i++}),E(i),W(!0),i>=8&&(Ue({particleCount:150,spread:70,origin:{y:.6}}),Q(Oe("master_test")))},[A,R,Q]);p.useEffect(()=>{Y()},[Y]),p.useEffect(()=>{let i;return L&&!y&&(i=setInterval(()=>{G(h=>{const u=h+1;return j>0&&u>=j?(clearInterval(i),K(),j):u})},1e3)),()=>clearInterval(i)},[L,y,j,K]);const Z=A[I],Te=(i,h)=>{F(u=>({...u,[i]:h}))},Ae=()=>{U(!0),G(0)},se=()=>{I<A.length-1?(_(i=>i+1),window.scrollTo({top:0,behavior:"smooth"})):K()},Le=()=>{I>0&&_(i=>i-1)},Re=i=>{if(!i)return null;const h=R[i.id]||"";return t.jsxs(ot,{$type:i.type,children:[t.jsx(rt,{children:t.jsx(nt,{initial:{width:0},animate:{width:`${(I+1)/10*100}%`},transition:{type:"spring",stiffness:100}})}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[t.jsxs(at,{children:[s.test_question," ",i.id," ",s.test_of," 10"]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",color:T.primary,fontWeight:"bold",marginTop:"20px"},children:[t.jsx(xe,{size:18}),Math.floor(S/60),":",(S%60).toString().padStart(2,"0"),j>0&&t.jsxs("span",{style:{fontSize:"0.8rem",opacity:.6,marginLeft:"4px"},children:["/ ",Math.floor(j/60),":",(j%60).toString().padStart(2,"0")]})]})]}),t.jsx(lt,{$type:i.type,children:i.type.replace("_"," ")}),i.type!=="math"&&t.jsxs(ct,{children:[t.jsxs(ut,{children:[i.type==="spelling"&&t.jsx(Xe,{size:40}),i.type==="missing_letter"&&t.jsx(ee,{size:40}),i.type==="comparison"&&t.jsx(tt,{size:40}),i.type==="hindi"&&t.jsx(we,{size:40}),i.type==="logic"&&t.jsx(ye,{size:40}),i.type==="sorting"&&t.jsx(it,{size:40})]}),t.jsx(yt,{fontSize:"clamp(1.2rem, 4vw, 1.75rem)",fontWeight:900,color:"textPrimary",children:i.prompt})]}),t.jsxs(dt,{children:[i.type==="math"&&i.data&&t.jsxs(V,{onClick:()=>me(te(i),i.type==="hindi"?"hi-IN":"en-US"),children:[i.data.n1??0," ",i.data.op??"+"," ",i.data.n2??0]}),(i.type==="spelling"||i.type==="hindi")&&i.data&&t.jsx(wt,{children:t.jsx($,{color:"textSecondary",fontSize:"md",fontWeight:600,children:s.eng_tapSpeaker})}),i.type==="missing_letter"&&i.data&&t.jsx(V,{onClick:()=>me(te(i),i.type==="hindi"?"hi-IN":"en-US"),children:i.data.displayWord}),i.type==="logic"&&i.data&&t.jsx(mt,{children:i.data.displayWord}),i.type==="sorting"&&i.data&&t.jsx(V,{$fontSize:"clamp(2rem, 8vw, 4rem)",children:i.data.displayWord}),i.data.optionsStrings&&t.jsx(pt,{$isLong:i.data.optionsStrings.some(u=>u.length>12),children:i.data.optionsStrings.map((u,We)=>t.jsx(ht,{$selected:h===u,$color:T.primary,onClick:()=>Te(i.id,u),whileTap:{scale:.95},children:u},We))}),t.jsxs(Qe,{children:[t.jsx(Ye,{onClick:Le}),t.jsx(Ve,{text:te(i),lang:i.type==="hindi"?"hi-IN":"en-US"}),I===A.length-1?t.jsx(P,{title:s.com_finish.toUpperCase(),onClick:se,variant:"primary",minWidth:"180px"}):t.jsx(Ke,{onClick:se})]})]})]})};return t.jsxs(De,{children:[t.jsxs(Pe,{children:[!L&&!y&&t.jsx("div",{style:{gridColumn:"1 / -1",width:"100%"},children:t.jsxs(It,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{type:"spring",damping:20},children:[t.jsxs(At,{children:[t.jsx(Lt,{animate:{scale:[1,1.05,1],rotate:[0,5,-5,0]},transition:{duration:4,repeat:1/0,ease:"easeInOut"},children:t.jsx(J,{size:40})}),t.jsx(Rt,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},children:ze()},O)]}),t.jsxs(Bt,{children:[t.jsx(re,{children:"Choose Your Subject"}),t.jsx(Ot,{children:Se.map(i=>t.jsxs(Dt,{$active:O===i.id,$color:i.color,onClick:()=>_e(i.id),whileHover:{scale:1.05},whileTap:{scale:.95},children:[i.icon,i.label]},i.id))}),(O==="math_test"||ie)&&t.jsxs(t.Fragment,{children:[t.jsx(re,{children:"Included Operations"}),t.jsx(Pt,{children:[{symbol:"+",label:s.math_addition},{symbol:"-",label:s.math_subtraction},{symbol:"*",label:s.math_multiplication,display:"×"},{symbol:"/",label:s.math_division,display:"÷"}].map(i=>t.jsxs(Ft,{$active:D.includes(i.symbol),onClick:()=>$e(h=>h.includes(i.symbol)?h.filter(u=>u!==i.symbol):[...h,i.symbol]),whileHover:{scale:1.02},whileTap:{scale:.98},children:[t.jsx("span",{className:"symbol",children:i.display||i.symbol}),t.jsx("span",{className:"label",children:i.label})]},i.symbol))}),(D.includes("-")||D.includes("/"))&&t.jsxs("div",{style:{display:"flex",gap:"24px",flexWrap:"wrap",marginTop:"16px",marginBottom:"16px"},children:[D.includes("-")&&t.jsxs(ne,{children:[t.jsx(ae,{type:"checkbox",checked:d,onChange:i=>b(i.target.checked)}),t.jsx("span",{style:{fontWeight:700,fontSize:"0.9rem"},children:s.com_allowNegative})]}),D.includes("/")&&t.jsxs(ne,{children:[t.jsx(ae,{type:"checkbox",checked:N,onChange:i=>w(i.target.checked)}),t.jsx("span",{style:{fontWeight:700,fontSize:"0.9rem"},children:s.com_allowDecimals})]})]})]}),t.jsx("div",{style:{marginTop:"12px"},children:t.jsx(de,{title:"Difficulty",options:Ce,currentValue:m,onChange:i=>g(i),name:"test_complexity"})}),t.jsx("div",{style:{marginTop:"4px"},children:t.jsx(de,{title:"Target Time",options:ke,currentValue:j,onChange:i=>ve(i),name:"test_target_time"})})]}),t.jsxs("div",{style:{width:"100%",marginTop:"32px",borderTop:`1px solid ${T.primary}10`,paddingTop:"24px"},children:[t.jsx(Wt,{children:s.test_instructions}),t.jsx(Nt,{children:Me().map((i,h)=>t.jsxs(Et,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:h*.1},children:[t.jsx(he,{size:18,color:"#10B981"}),t.jsx($,{fontSize:"md",fontWeight:600,color:"textPrimary",children:i})]},h))})]}),t.jsx("div",{style:{marginTop:"24px",width:"100%"},children:t.jsx(P,{title:s.test_start,onClick:Ae,variant:"primary",width:"100%",size:"lg"})})]})}),L&&!y&&t.jsx("div",{style:{gridColumn:"1 / -1",width:"100%"},children:t.jsx(st,{children:t.jsx(X,{mode:"wait",children:Z&&t.jsx(zt,{initial:{x:50,opacity:0},animate:{x:0,opacity:1},exit:{x:-50,opacity:0},transition:{type:"spring",damping:20,stiffness:100},children:Re(Z)},Z.id)})})})]}),y&&t.jsxs(xt,{initial:{opacity:0},animate:{opacity:1},children:[!k&&!l&&t.jsxs(bt,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},children:[t.jsx(v.div,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",damping:10},children:t.jsx(J,{size:120,color:f>=8?T.gold:T.slate})}),t.jsxs(_t,{fontSize:"4rem",fontWeight:900,color:"primary",children:[f," / 10"]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",fontSize:"1.5rem",fontWeight:"bold",color:T.textSecondary,marginBottom:"20px"},children:[t.jsx(xe,{size:24}),s.com_time||"Time",": ",Math.floor(S/60),":",(S%60).toString().padStart(2,"0")]}),t.jsx(jt,{$score:f,initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.3},children:Ht(f)}),j>0&&S>=j&&t.jsx("div",{style:{color:"#EF4444",fontWeight:900,fontSize:"1.2rem",marginTop:"10px"},children:"⏰ TIME'S UP!"}),t.jsx($t,{fontSize:"2rem",fontWeight:800,children:f>=8?s.com_genius:s.com_goodEffort}),t.jsx(St,{fontSize:"lg",color:"textSecondary",children:f>=8?s.com_masteredCurriculum:s.test_keepPracticing}),j>0&&t.jsxs("div",{style:{marginTop:"15px",padding:"10px 20px",borderRadius:"12px",background:S<=j?`${T.success}15`:`${T.warning}15`,color:S<=j?T.successDark:T.goldDark,fontWeight:700,fontSize:"0.9rem",display:"flex",alignItems:"center",gap:"8px"},children:[S<=j?t.jsx(Fe,{size:18}):t.jsx(ge,{size:18}),S<=j?s.test_beatenTarget:s.test_timeExceeded]}),t.jsxs(je,{children:[f>=8&&t.jsx(P,{title:s.com_getCertificate,onClick:()=>B(!0),variant:"primary"}),t.jsx(P,{title:"Options ▾",onClick:()=>n(!r),variant:"secondary",icon:t.jsx(fe,{size:20})}),t.jsx(X,{children:r&&t.jsxs(t.Fragment,{children:[t.jsx(le,{onClick:()=>n(!1)}),t.jsxs(ce,{initial:{opacity:0,y:10,scale:.9},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:10,scale:.9},children:[t.jsxs(H,{onClick:()=>{M(!0),n(!1)},children:[t.jsx(ee,{size:18})," ",s.com_reviewAnswers]}),t.jsxs(H,{onClick:()=>{Y(),U(!1),n(!1)},children:[t.jsx(ge,{size:18})," ",s.com_tryAgain]}),t.jsxs(H,{onClick:()=>{x("/"),n(!1)},children:[t.jsx(ue,{size:18})," ",s.com_home]})]})]})})]})]}),k&&!l&&t.jsxs(Ct,{initial:{x:50,opacity:0},animate:{x:0,opacity:1},children:[t.jsx(vt,{fontSize:"2rem",fontWeight:900,color:"primary",children:s.com_testReview}),t.jsx(kt,{color:"textSecondary",children:s.com_seeWhatLearned}),t.jsx(gt,{children:A.map(i=>{var u;const h=((u=R[i.id])==null?void 0:u.trim().toUpperCase())===i.correctAnswer.trim().toUpperCase();return t.jsxs(ft,{$correct:h,children:[t.jsxs(Mt,{children:[t.jsxs($,{fontSize:"md",fontWeight:800,color:"textPrimary",children:["Question ",i.id,": ",i.prompt]}),h?t.jsx(he,{color:"#10B981",size:24}):t.jsx(Je,{color:"#F59E0B",size:24})]}),t.jsxs(be,{children:[t.jsx($,{fontSize:"sm",color:"textSecondary",children:s.com_yourAnswer}),t.jsx($,{fontSize:"sm",fontWeight:700,color:h?"success":"warning",children:R[i.id]||"(No answer)"})]}),!h&&t.jsxs(be,{children:[t.jsx($,{fontSize:"sm",color:"textSecondary",children:s.com_correctAnswer}),t.jsx($,{fontSize:"sm",fontWeight:700,color:"success",children:i.correctAnswer})]})]},i.id)})}),t.jsxs(je,{children:[f>=8&&t.jsx(P,{title:s.com_getCertificate,onClick:()=>B(!0),variant:"primary"}),t.jsx(P,{title:"Options ▾",onClick:()=>c(!a),variant:"secondary",icon:t.jsx(fe,{size:20})}),t.jsx(X,{children:a&&t.jsxs(t.Fragment,{children:[t.jsx(le,{onClick:()=>c(!1)}),t.jsxs(ce,{initial:{opacity:0,y:10,scale:.9},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:10,scale:.9},children:[t.jsxs(H,{onClick:()=>{M(!1),c(!1)},children:[t.jsx(ee,{size:18})," ",s.com_backToScore]}),t.jsxs(H,{onClick:()=>{x("/"),c(!1)},children:[t.jsx(ue,{size:18})," ",s.com_home]})]})]})})]})]}),l&&t.jsx(Tt,{children:t.jsx(Ge,{onClose:()=>B(!1),challengeName:(e==null?void 0:e.replace("_"," ").toUpperCase())||"Master Test",score:f,level:"Genius",timeTaken:`${Math.floor(S/60)}:${(S%60).toString().padStart(2,"0")}`})})]})]})};export{ci as default};

import{i as s,p as S,q as Le,K as y,al as Re,j as Ne,l as Ie,x as p,a6 as re,a1 as Ee,n as t,P as Be,G as Oe,T as H,a7 as ae,a8 as le,v as D,A as q,a3 as W,Z as De,am as ce,an as de,ao as Q,ap as Pe,a2 as Fe,N as Ge}from"./index-BP7ZCa5e.js";import{c as He}from"./confetti.module-ONDKWxYZ.js";import{S as Qe}from"./SpeakIcon-8yv9DRoV.js";import{P as Ue,N as Ve}from"./PreviousIcon-C6oGgU9n.js";import{D as me}from"./DifficultyPicker-dUt9_6Vg.js";import{C as Ye}from"./ChallengeHeader-CKuj-zz-.js";import{r as pe}from"./index-dsz47keu.js";import{g as Ke,b as ee}from"./wordUtils-DPgh885X.js";import{b as C,M as he}from"./mathUtils-B1Q27TTV.js";import{B as te,T as ie,R as xe,C as ge,H as fe}from"./timer-l7gc6Zec.js";import{C as ue}from"./circle-check-BJ2pbr_e.js";import{S as oe}from"./search-DafwWh-B.js";import{C as Ze,S as Xe}from"./spell-check-vJvKFo2y.js";import{C as Je}from"./calculator-DloPtjVD.js";import{B as qe}from"./book-open-C03Rch2j.js";import{L as ye}from"./languages-D8HWXjl8.js";import{S as et}from"./scale-W5zFA89l.js";import{A as tt}from"./arrow-up-down-DhNAMuXW.js";import"./info-k4ZqiUND.js";s.div`
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
`;s(S.div)`
  height: 100%;
  background: ${e=>e.theme.colors.primary};
  border-radius: 4px;
`;const it=s.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding-bottom: 80px;
`,ot=s(Le)`
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
`,st=s.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  background: ${e=>e.theme.colors.primary}15;
`,nt=s(S.div)`
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
`,at=s.div`
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
`,Y=s.div`
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
`,dt=s(Y)`
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
`,pt=s(S.div)`
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
`;const ht=s(S.div)`
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
`,be=s.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;
`,ft=s.div`
  color: ${e=>e.theme.colors.primary};
`,ut=s(y)`
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
`;const bt=s(S.div)`
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
`,wt=s(S.div)`
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
`,jt=s(y)`
  margin-bottom: 10px;
`,vt=s(y)`
  margin: 15px 0;
`,_t=s(y)`
  margin-bottom: 10px;
`,St=s(y)`
  margin-bottom: 25px;
  max-width: 500px;
`,we=s.div`
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
`,$t=s(S.div)`
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
`,Ct=s(y)`
  margin-bottom: 20px;
`,kt=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;s.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
`;const Mt=s(S.div)`
  width: 100%;
`,zt=s.div`
  position: fixed;
  inset: 0;
  z-index: 3000;
  background: white;
`,Tt=s.div`
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
`,At=s(S.div)`
  width: 80px;
  height: 80px;
  border-radius: 24px;
  background: ${e=>e.theme.colors.primary}15;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e=>e.theme.colors.primary};
  flex-shrink: 0;
`,Wt=s(S.div)`
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
`,Lt=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
  margin: 40px 0;
  text-align: left;
`;s.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;const Rt=s(S.div)`
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
`,Nt=s.div`
  margin-top: ${e=>e.$minimal?"0":"50px"};
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-top: ${e=>e.$minimal?"0":"40px"};
  border-top: ${e=>e.$minimal?"none":`2px dashed ${e.theme.colors.primary}15`};
  width: 100%;
`;s(y)`
  margin-bottom: -15px;
  text-align: center;
  opacity: 0.6;
  letter-spacing: 2px;
`;const It=s.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 20px;
`,Et=s(S.button)`
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
`,Bt=s.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
`,Ot=s(S.button)`
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
`,Dt=(e,h,U,T,z,L=["+","-","*","/"])=>{const P=[];let b=["math","spelling","missing_letter","comparison","hindi","logic","sorting"];(e==="math_addition"||e==="math_subtraction"||e==="math_multiplication"||e==="math_division")&&(b=["math"]),e==="math_test"&&(b=["math","comparison","sorting"]),e==="math_sorting"&&(b=["sorting"]),e==="english_missing_letters"&&(b=["missing_letter"]),e==="english_spelling"&&(b=["spelling"]),e==="spelling_test"&&(b=["spelling","missing_letter"]),e==="hindi_test"&&(b=["hindi"]),e==="logic_test"&&(b=["logic","comparison"]);const R=Ke();let f=R;h===1?f=R.filter(_=>_.length<=4):h===2||h===3?f=R.filter(_=>_.length>4&&_.length<=7):f=R.filter(_=>_.length>7),f.length===0&&(f=R);const E=["अ","आ","इ","ई","उ","ऊ","ए","ऐ","ओ","औ","क","ख","ग","घ"],N=new Set;for(let _=1;_<=10;_++){let l={},B=0,k="";for(;B<100;){const M=b[Math.floor(Math.random()*b.length)];if(l={id:_,type:M},M==="math"){const n=`LEVEL_${h}`,r=he[n]||he.LEVEL_1;let a,c,d="+";if(e==="math_addition")d="+";else if(e==="math_subtraction")d="-";else if(e==="math_multiplication")d="*";else if(e==="math_division")d="/";else{const w=L.length>0?L:["+"];d=w[Math.floor(Math.random()*w.length)],h<2&&(d==="*"||d==="/")&&(d="+")}if(d==="*")a=C(1,r.multMax),c=C(1,r.multMax);else if(d==="/"){const w=Math.min(r.multMax,12);c=C(1,w),a=c*C(1,w),T&&h>=4&&(a+=C(0,c-1))}else if(h===2){const w=Math.random()>.5;a=w?C(1,9):C(10,99),c=w?C(10,99):C(1,9)}else h===3?(a=C(10,99),c=C(10,99)):(a=C(r.min,r.max),c=C(r.min,r.max));let g=a,m=c,j=0;if(d==="+")j=a+c;else if(d==="-")U||(g=Math.max(a,c),m=Math.min(a,c)),j=g-m;else if(d==="*")j=a*c;else if(d==="/")if(T&&h>=4)j=Number((g/m).toFixed(1));else{const w=Math.floor(g/m),A=g%m;j=A===0?w:`Q:${w} R:${A}`}k=`math-${g}${d}${m}`,l.prompt=z.math_solveMath,l.correctAnswer=j.toString();const I=new Set([l.correctAnswer]);for(;I.size<4;){const w=Math.floor(Math.random()*5)+1;if(typeof j=="number")I.add((Math.random()>.5?j+w:Math.max(0,j-w)).toString());else{const A=Math.floor(Math.random()*3)-1,V=Math.floor(Math.random()*3)-1,$=Math.max(0,Math.floor(g/(m||1))+A),F=Math.max(0,g%(m||1)+V);I.add(`Q:${$} R:${F}`)}}l.data={n1:g,n2:m,op:d,optionsStrings:Array.from(I).sort(()=>Math.random()-.5)}}else if(M==="spelling"){const n=ee(f).toUpperCase();k=`spelling-${n}`,l.prompt=z.eng_tapTheWord,l.correctAnswer=n;const r=new Set([n]);for(;r.size<4;)r.add(ee(f).toUpperCase());l.data={word:n,optionsStrings:Array.from(r).sort(()=>Math.random()-.5)}}else if(M==="missing_letter"){const n=ee(f).toUpperCase(),r=Math.floor(Math.random()*n.length),a=n.split(""),c=a[r];a[r]="_",k=`missing-${n}-${r}`,l.prompt=z.eng_chooseMissing,l.correctAnswer=c;const d="ABCDEFGHIJKLMNOPQRSTUVWXYZ",g=new Set([c]);for(;g.size<4;)g.add(d[Math.floor(Math.random()*26)]);l.data={displayWord:a.join(""),word:n,optionsStrings:Array.from(g).sort(()=>Math.random()-.5)}}else if(M==="comparison"){const n=[];let r=20;for((h===2||h===3)&&(r=50),h===4&&(r=1e3);n.length<4;){const c=Math.floor(Math.random()*r);n.includes(c)||n.push(c)}const a=Math.random()>.5;k=`comp-${n.sort().join(",")}-${a}`,l.prompt=a?z.math_smallestNumber:z.math_biggestNumber,l.correctAnswer=a?Math.min(...n).toString():Math.max(...n).toString(),l.data={optionsStrings:n.map(String)}}else if(M==="logic"){const n=[{sequence:["🍎","🍌","🍎"],next:"🍌"},{sequence:["🐶","🐱","🐶"],next:"🐱"},{sequence:["1","2","1"],next:"2"},{sequence:["⭐","🌙","⭐"],next:"🌙"},{sequence:["🔴","🔵","🔴"],next:"🔵"},{sequence:["🚗","🚕","🚗"],next:"🚕"},{sequence:["🍦","🍩","🍦"],next:"🍩"},{sequence:["🛸","🚀","🛸"],next:"🚀"},{sequence:["🍎","🍎","🍌"],next:"🍌"},{sequence:["1","3","5"],next:"7"},{sequence:["A","B","A"],next:"B"},{sequence:["🔼","🔽","🔼"],next:"🔽"},{sequence:["🟢","🟡","🟢"],next:"🟡"},{sequence:["10","20","30"],next:"40"},{sequence:["M","N","M"],next:"N"},{sequence:["🦁","🐯","🦁"],next:"🐯"}],r=n[Math.floor(Math.random()*n.length)];k=`logic-${r.sequence.join("")}`,l.prompt=z.log_whatNext,l.correctAnswer=r.next;const a=new Set([r.next]);for(;a.size<4;){const c=n[Math.floor(Math.random()*n.length)].next;a.add(c)}l.data={displayWord:r.sequence.join(" ")+" ?",optionsStrings:Array.from(a).sort(()=>Math.random()-.5)}}else if(M==="hindi"){const n=E[Math.floor(Math.random()*E.length)];k=`hindi-${n}`,l.prompt=z.hindi_tapLetter,l.correctAnswer=n;const r=new Set([n]);for(;r.size<4;)r.add(E[Math.floor(Math.random()*E.length)]);l.data={letter:n,optionsStrings:Array.from(r).sort(()=>Math.random()-.5)}}else if(M==="sorting"){const n=[];let r=3,a=10;for((h===2||h===3)&&(r=4,a=20),h===4&&(r=5,a=50);n.length<r;){const m=Math.floor(Math.random()*a)+1;n.includes(m)||n.push(m)}const c=Math.random()>.5;k=`sort-${n.sort().join(",")}-${c}`,l.prompt=c?z.math_sortAsc:z.math_sortDesc;const d=c?[...n].sort((m,j)=>m-j):[...n].sort((m,j)=>j-m);l.correctAnswer=d.join(", ");const g=new Set([l.correctAnswer]);for(;g.size<4;){const m=[...n].sort(()=>Math.random()-.5);g.add(m.join(", "))}l.data={displayWord:n.join("  •  "),optionsStrings:Array.from(g).sort(()=>Math.random()-.5)}}if(!N.has(k)){N.add(k);break}B++}P.push(l)}return P},se=e=>{if(e.type==="math"){const h={"+":"plus","-":"minus","*":"times","/":"divided by"};return`What is ${e.data.n1} ${h[e.data.op||"+"]} ${e.data.n2}?`}return e.type==="missing_letter"?`What is the missing letter in the word ${e.data.word}?`:e.data.word||e.data.letter||e.prompt},Pt=e=>e===10?"GRAND MASTER":e===9?"LEGEND":e===8?"PRODIGY":"KIDDOO HERO",ai=()=>{const{testId:e}=Re(),h=Ne(),U=Ie(),[T,z]=p.useState([]),[L,P]=p.useState({}),[b,R]=p.useState(!1),[f,E]=p.useState(0),[N,_]=p.useState(0),[l,B]=p.useState(!1),[k,M]=p.useState(!1),[n,r]=p.useState(!1),[a,c]=p.useState(!1),[d,g]=p.useState(1),[m,j]=p.useState(!1),[I,w]=p.useState(!1),[A,V]=p.useState(!1),[$,F]=p.useState(0),[v,je]=p.useState(0),[O,ve]=p.useState(e||"math_test"),[K,_e]=p.useState(["+"]),G=O==="master_test",o=Fe.en,Se=[{id:"math_test",label:"Math",icon:t.jsx(Je,{size:18}),color:"#10B981"},{id:"spelling_test",label:"English",icon:t.jsx(qe,{size:18}),color:"#F59E0B"},{id:"hindi_test",label:"Hindi",icon:t.jsx(ye,{size:18}),color:"#EC4899"},{id:"logic_test",label:"Logic",icon:t.jsx(te,{size:18}),color:"#8B5CF6"},{id:"master_test",label:"Grand Master",icon:t.jsx(H,{size:18}),color:"#6366F1"}],$e=re.useMemo(()=>[{value:1,label:o.diff_beginner,info:"Numbers 1-10"},{value:2,label:o.diff_explorer,info:"One single & one double digit"},{value:3,label:o.diff_achiever,info:"Two double digits (10-99)"},{value:4,label:o.diff_master,info:"3-digit numbers (100-999)"},{value:5,label:o.diff_elite,info:"4-digit numbers (1000-9999)"}],[o]),Ce=re.useMemo(()=>[{value:0,label:o.test_noLimit,info:o.test_timeLimitInfo.none},{value:30,label:o.test_time30s,info:o.test_timeLimitInfo.s30},{value:60,label:o.test_time1m,info:o.test_timeLimitInfo.m1},{value:120,label:o.test_time2m,info:o.test_timeLimitInfo.m2},{value:180,label:o.test_time3m,info:o.test_timeLimitInfo.m3},{value:240,label:o.test_time4m,info:o.test_timeLimitInfo.m4},{value:300,label:o.test_time5m,info:o.test_timeLimitInfo.m5}],[o]),ke=()=>{if(G)return o.mst_grandMaster;switch(O){case"math_addition":return o.math_addition;case"math_subtraction":return o.math_subtraction;case"math_multiplication":return o.math_multiplication;case"math_division":return o.math_division;case"math_test":return o.math_mathHero;case"math_sorting":return o.math_sorting;case"english_missing_letters":return o.eng_missingLetters;case"english_spelling":return o.eng_listenAndFind;case"spelling_test":return o.eng_spellingHero;case"hindi_test":return o.hindi_hindiLegend;case"logic_test":return o.log_grandLogic;default:return o.com_tryAgain}},Z=p.useCallback(()=>{const i=Dt(O,d,m,I,o,K);z(i),P({}),R(!1),M(!1),B(!1),E(0),_(0),F(0),window.scrollTo({top:0,behavior:"smooth"})},[O,o,d,m,I,K]),X=p.useCallback(()=>{let i=0;T.forEach(x=>{var u;((u=L[x.id])==null?void 0:u.trim().toUpperCase())===x.correctAnswer.trim().toUpperCase()&&i++}),E(i),R(!0),i>=8&&(He({particleCount:150,spread:70,origin:{y:.6}}),U(Ee("master_test")))},[T,L,U]);p.useEffect(()=>{Z()},[Z]),p.useEffect(()=>{let i;return A&&!b&&(i=setInterval(()=>{F(x=>{const u=x+1;return v>0&&u>=v?(clearInterval(i),X(),v):u})},1e3)),()=>clearInterval(i)},[A,b,v,X]);const J=T[N],Me=(i,x)=>{P(u=>({...u,[i]:x}))},ze=()=>{V(!0),F(0)},ne=()=>{N<T.length-1?(_(i=>i+1),window.scrollTo({top:0,behavior:"smooth"})):X()},Te=()=>{N>0&&_(i=>i-1)},Ae=i=>{if(!i)return null;const x=L[i.id]||"";return t.jsxs(ot,{$type:i.type,children:[t.jsx(st,{children:t.jsx(nt,{initial:{width:0},animate:{width:`${(N+1)/10*100}%`},transition:{type:"spring",stiffness:100}})}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[t.jsxs(rt,{children:[o.test_question," ",i.id," ",o.test_of," 10"]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",color:W.primary,fontWeight:"bold",marginTop:"20px"},children:[t.jsx(ie,{size:18}),Math.floor($/60),":",($%60).toString().padStart(2,"0"),v>0&&t.jsxs("span",{style:{fontSize:"0.8rem",opacity:.6,marginLeft:"4px"},children:["/ ",Math.floor(v/60),":",(v%60).toString().padStart(2,"0")]})]})]}),t.jsx(at,{$type:i.type,children:i.type.replace("_"," ")}),i.type!=="math"&&t.jsxs(lt,{children:[t.jsxs(ft,{children:[i.type==="spelling"&&t.jsx(Xe,{size:40}),i.type==="missing_letter"&&t.jsx(oe,{size:40}),i.type==="comparison"&&t.jsx(et,{size:40}),i.type==="hindi"&&t.jsx(ye,{size:40}),i.type==="logic"&&t.jsx(te,{size:40}),i.type==="sorting"&&t.jsx(tt,{size:40})]}),t.jsx(ut,{fontSize:"clamp(1.2rem, 4vw, 1.75rem)",fontWeight:900,color:"textPrimary",children:i.prompt})]}),t.jsxs(ct,{children:[i.type==="math"&&i.data&&t.jsxs(Y,{onClick:()=>pe(se(i),i.type==="hindi"?"hi-IN":"en-US"),children:[i.data.n1??0," ",i.data.op??"+"," ",i.data.n2??0]}),(i.type==="spelling"||i.type==="hindi")&&i.data&&t.jsx(yt,{children:t.jsx(y,{color:"textSecondary",fontSize:"md",fontWeight:600,children:o.eng_tapSpeaker})}),i.type==="missing_letter"&&i.data&&t.jsx(Y,{onClick:()=>pe(se(i),i.type==="hindi"?"hi-IN":"en-US"),children:i.data.displayWord}),i.type==="logic"&&i.data&&t.jsx(dt,{children:i.data.displayWord}),i.type==="sorting"&&i.data&&t.jsx(Y,{$fontSize:"clamp(2rem, 8vw, 4rem)",children:i.data.displayWord}),i.data.optionsStrings&&t.jsx(mt,{$isLong:i.data.optionsStrings.some(u=>u.length>12),children:i.data.optionsStrings.map((u,We)=>t.jsx(pt,{$selected:x===u,$color:W.primary,onClick:()=>Me(i.id,u),whileTap:{scale:.95},children:u},We))}),t.jsxs(Ge,{children:[t.jsx(Ue,{onClick:Te}),t.jsx(Qe,{text:se(i),lang:i.type==="hindi"?"hi-IN":"en-US"}),N===T.length-1?t.jsx(D,{title:o.com_finish.toUpperCase(),onClick:ne,variant:"primary",minWidth:"180px"}):t.jsx(Ve,{onClick:ne})]})]})]})};return t.jsxs(Be,{children:[t.jsxs(Oe,{children:[t.jsx("div",{style:{gridColumn:"1 / -1",width:"100%",display:"flex",justifyContent:"center"},children:t.jsx("div",{style:{width:"100%",maxWidth:"1100px"},children:t.jsx(Ye,{icon:H,title:ke(),subtitle:o.mst_subtitle,streak:0})})}),!A&&!b&&t.jsx("div",{style:{gridColumn:"1 / -1",width:"100%"},children:t.jsxs(Wt,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{type:"spring",damping:20},children:[t.jsxs(Tt,{children:[t.jsx(At,{animate:{scale:[1,1.05,1],rotate:[0,5,-5,0]},transition:{duration:4,repeat:1/0,ease:"easeInOut"},children:t.jsx(H,{size:40})}),t.jsxs("div",{style:{textAlign:"left"},children:[t.jsx(y,{fontSize:"xxl",fontWeight:900,color:"primary",children:o.test_instructions}),t.jsx(y,{fontSize:"md",color:"textSecondary",fontWeight:600,children:"Follow these rules to become a Grand Master!"})]})]}),t.jsx(Lt,{children:[{icon:t.jsx(te,{size:24}),text:o.test_qCount},{icon:t.jsx(ue,{size:24}),text:o.test_selectBest},{icon:t.jsx(ie,{size:24}),text:o.test_timeRecorded},{icon:t.jsx(H,{size:24}),text:o.test_scoreForCert}].map((i,x)=>t.jsxs(Rt,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.1*x},children:[i.icon,t.jsx("span",{children:i.text})]},x))}),t.jsxs(Nt,{children:[t.jsx("div",{style:{textAlign:"center",marginBottom:"10px"},children:t.jsx(y,{fontSize:"lg",fontWeight:800,color:"primary",children:"1. Choose Your Subject"})}),t.jsx(It,{children:Se.map(i=>t.jsxs(Et,{$active:O===i.id,$color:i.color,onClick:()=>ve(i.id),whileHover:{scale:1.05},whileTap:{scale:.95},children:[i.icon,i.label]},i.id))}),(O==="math_test"||G)&&t.jsxs(t.Fragment,{children:[t.jsx("div",{style:{textAlign:"center",marginTop:"10px",marginBottom:"10px"},children:t.jsx(y,{fontSize:"md",fontWeight:800,color:"primary",children:"Included Operations"})}),t.jsx(Bt,{children:[{symbol:"+",label:o.math_addition},{symbol:"-",label:o.math_subtraction},{symbol:"*",label:o.math_multiplication,display:"×"},{symbol:"/",label:o.math_division,display:"÷"}].map(i=>t.jsxs(Ot,{$active:K.includes(i.symbol),onClick:()=>_e(x=>x.includes(i.symbol)?x.filter(u=>u!==i.symbol):[...x,i.symbol]),whileHover:{scale:1.02},whileTap:{scale:.98},children:[t.jsx("span",{children:i.display||i.symbol}),t.jsx("span",{children:i.label})]},i.symbol))})]}),t.jsx("div",{style:{marginTop:"20px"}}),t.jsx(me,{name:"complexity",title:o.com_difficulty,options:$e,currentValue:d,onChange:i=>g(Number(i))}),t.jsx(me,{name:"targetTime",title:o.test_targetTime,options:Ce,currentValue:v,onChange:i=>je(Number(i))}),((e==null?void 0:e.includes("math"))||G)&&t.jsxs("div",{style:{display:"flex",gap:"24px",flexWrap:"wrap",justifyContent:"center"},children:[(e==="math_subtraction"||e==="math_test"||G)&&t.jsxs(ae,{children:[t.jsx(le,{type:"checkbox",checked:m,onChange:i=>j(i.target.checked)}),t.jsx("span",{style:{fontWeight:700,fontSize:"0.9rem"},children:o.com_allowNegative})]}),(e==="math_division"||e==="math_test"||G)&&t.jsxs(ae,{children:[t.jsx(le,{type:"checkbox",checked:I,onChange:i=>w(i.target.checked)}),t.jsx("span",{style:{fontWeight:700,fontSize:"0.9rem"},children:o.com_allowDecimals})]})]})]}),t.jsx("div",{style:{marginTop:"50px",width:"100%"},children:t.jsx(D,{title:o.test_start,onClick:ze,variant:"primary",width:"100%",size:"lg"})})]})}),A&&!b&&t.jsx("div",{style:{gridColumn:"1 / -1",width:"100%"},children:t.jsx(it,{children:t.jsx(q,{mode:"wait",children:J&&t.jsx(Mt,{initial:{x:50,opacity:0},animate:{x:0,opacity:1},exit:{x:-50,opacity:0},transition:{type:"spring",damping:20,stiffness:100},children:Ae(J)},J.id)})})})]}),b&&t.jsxs(ht,{initial:{opacity:0},animate:{opacity:1},children:[!k&&!l&&t.jsxs(bt,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},children:[t.jsx(S.div,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",damping:10},children:t.jsx(H,{size:120,color:f>=8?W.gold:W.slate})}),t.jsxs(vt,{fontSize:"4rem",fontWeight:900,color:"primary",children:[f," / 10"]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",fontSize:"1.5rem",fontWeight:"bold",color:W.textSecondary,marginBottom:"20px"},children:[t.jsx(ie,{size:24}),o.com_time||"Time",": ",Math.floor($/60),":",($%60).toString().padStart(2,"0")]}),t.jsx(wt,{$score:f,initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.3},children:Pt(f)}),v>0&&$>=v&&t.jsx("div",{style:{color:"#EF4444",fontWeight:900,fontSize:"1.2rem",marginTop:"10px"},children:"⏰ TIME'S UP!"}),t.jsx(_t,{fontSize:"2rem",fontWeight:800,children:f>=8?o.com_genius:o.com_goodEffort}),t.jsx(St,{fontSize:"lg",color:"textSecondary",children:f>=8?o.com_masteredCurriculum:o.test_keepPracticing}),v>0&&t.jsxs("div",{style:{marginTop:"15px",padding:"10px 20px",borderRadius:"12px",background:$<=v?`${W.success}15`:`${W.warning}15`,color:$<=v?W.successDark:W.goldDark,fontWeight:700,fontSize:"0.9rem",display:"flex",alignItems:"center",gap:"8px"},children:[$<=v?t.jsx(De,{size:18}):t.jsx(xe,{size:18}),$<=v?o.test_beatenTarget:o.test_timeExceeded]}),t.jsxs(we,{children:[f>=8&&t.jsx(D,{title:o.com_getCertificate,onClick:()=>B(!0),variant:"primary"}),t.jsx(D,{title:"Options ▾",onClick:()=>r(!n),variant:"secondary",icon:t.jsx(ge,{size:20})}),t.jsx(q,{children:n&&t.jsxs(t.Fragment,{children:[t.jsx(ce,{onClick:()=>r(!1)}),t.jsxs(de,{initial:{opacity:0,y:10,scale:.9},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:10,scale:.9},children:[t.jsxs(Q,{onClick:()=>{M(!0),r(!1)},children:[t.jsx(oe,{size:18})," ",o.com_reviewAnswers]}),t.jsxs(Q,{onClick:()=>{Z(),V(!1),r(!1)},children:[t.jsx(xe,{size:18})," ",o.com_tryAgain]}),t.jsxs(Q,{onClick:()=>{h("/"),r(!1)},children:[t.jsx(fe,{size:18})," ",o.com_home]})]})]})})]})]}),k&&!l&&t.jsxs($t,{initial:{x:50,opacity:0},animate:{x:0,opacity:1},children:[t.jsx(jt,{fontSize:"2rem",fontWeight:900,color:"primary",children:o.com_testReview}),t.jsx(Ct,{color:"textSecondary",children:o.com_seeWhatLearned}),t.jsx(xt,{children:T.map(i=>{var u;const x=((u=L[i.id])==null?void 0:u.trim().toUpperCase())===i.correctAnswer.trim().toUpperCase();return t.jsxs(gt,{$correct:x,children:[t.jsxs(kt,{children:[t.jsxs(y,{fontSize:"md",fontWeight:800,color:"textPrimary",children:["Question ",i.id,": ",i.prompt]}),x?t.jsx(ue,{color:"#10B981",size:24}):t.jsx(Ze,{color:"#F59E0B",size:24})]}),t.jsxs(be,{children:[t.jsx(y,{fontSize:"sm",color:"textSecondary",children:o.com_yourAnswer}),t.jsx(y,{fontSize:"sm",fontWeight:700,color:x?"success":"warning",children:L[i.id]||"(No answer)"})]}),!x&&t.jsxs(be,{children:[t.jsx(y,{fontSize:"sm",color:"textSecondary",children:o.com_correctAnswer}),t.jsx(y,{fontSize:"sm",fontWeight:700,color:"success",children:i.correctAnswer})]})]},i.id)})}),t.jsxs(we,{children:[f>=8&&t.jsx(D,{title:o.com_getCertificate,onClick:()=>B(!0),variant:"primary"}),t.jsx(D,{title:"Options ▾",onClick:()=>c(!a),variant:"secondary",icon:t.jsx(ge,{size:20})}),t.jsx(q,{children:a&&t.jsxs(t.Fragment,{children:[t.jsx(ce,{onClick:()=>c(!1)}),t.jsxs(de,{initial:{opacity:0,y:10,scale:.9},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:10,scale:.9},children:[t.jsxs(Q,{onClick:()=>{M(!1),c(!1)},children:[t.jsx(oe,{size:18})," ",o.com_backToScore]}),t.jsxs(Q,{onClick:()=>{h("/"),c(!1)},children:[t.jsx(fe,{size:18})," ",o.com_home]})]})]})})]})]}),l&&t.jsx(zt,{children:t.jsx(Pe,{onClose:()=>B(!1),challengeName:(e==null?void 0:e.replace("_"," ").toUpperCase())||"Master Test",score:f,level:"Genius",timeTaken:`${Math.floor($/60)}:${($%60).toString().padStart(2,"0")}`})})]})]})};export{ai as default};

import{i as s,p as v,q as Re,K as S,al as We,j as Ee,l as Be,x as m,a6 as se,a1 as Oe,n as t,P as De,G as Pe,T as J,J as re,a7 as ne,a8 as ae,a3 as A,v as P,A as X,Z as Fe,am as le,an as ce,ao as Q,ap as Ge,a2 as He,N as Qe}from"./index-CcpPQMlK.js";import{c as Ue}from"./confetti.module-ONDKWxYZ.js";import{S as Ve}from"./SpeakIcon-CRuUusk5.js";import{P as Ye,N as Ke}from"./PreviousIcon-_iDHCExw.js";import{D as de}from"./DifficultyPicker-DwpRum4D.js";import{r as me}from"./index-DF3CcTcq.js";import{g as Ze,b as q}from"./wordUtils-DPgh885X.js";import{b as M,M as pe}from"./mathUtils-B1Q27TTV.js";import{C as he}from"./circle-check-fvlRBku4.js";import{T as xe,R as ge,C as fe,H as ue,B as ye}from"./timer-C53bg7L2.js";import{S as ee}from"./search-Kyldn6G3.js";import{C as Je,S as Xe}from"./spell-check-rwvIRz8O.js";import{C as qe}from"./calculator-DKzgE5i4.js";import{B as et}from"./book-open-BoMarhq1.js";import{L as we}from"./languages-CzK2Lapu.js";import{S as tt}from"./scale-DMf3h1DX.js";import{A as it}from"./arrow-up-down-B-BR1u3o.js";import"./info-B6awMAJR.js";s.div`
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
`;s(v.div)`
  height: 100%;
  background: ${e=>e.theme.colors.primary};
  border-radius: 4px;
`;const ot=s.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding-bottom: 80px;
`,st=s(Re)`
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
`,rt=s.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  background: ${e=>e.theme.colors.primary}15;
`,nt=s(v.div)`
  height: 100%;
  background: ${e=>e.theme.colors.primary};
`,at=s.div`
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
`,lt=s.div`
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
`,ct=s.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 40px;

  @media (max-width: 480px) {
    flex-direction: column;
    text-align: center;
    gap: 8px;
  }
`,dt=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  padding: 15px 0;

  @media (max-width: 600px) {
    gap: 30px;
    padding: 15px 0;
  }
`,V=s.div`
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
`,mt=s(V)`
  font-size: clamp(1.8rem, 4vw, 3rem);
  letter-spacing: 12px;
`,pt=s.div`
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
`,ht=s(v.div)`
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
`;const xt=s(v.div)`
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
`,gt=s.div`
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
`,ft=s.div`
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
`,ut=s.div`
  color: ${e=>e.theme.colors.primary};
`,yt=s(S)`
  text-align: center;
`,wt=s.div`
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
`;const bt=s(v.div)`
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
`,jt=s(v.div)`
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
`,vt=s(S)`
  margin-bottom: 10px;
`,_t=s(S)`
  margin: 15px 0;
`,$t=s(S)`
  margin-bottom: 10px;
`,St=s(S)`
  margin-bottom: 25px;
  max-width: 500px;
`,je=s.div`
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
`,Ct=s(v.div)`
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
`,Mt=s(S)`
  margin-bottom: 20px;
`,kt=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;s.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
`;const zt=s(v.div)`
  width: 100%;
`,Tt=s.div`
  position: fixed;
  inset: 0;
  z-index: 3000;
  background: white;
`,At=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  gap: 12px;
  margin-bottom: 32px;
`,It=s(v.div)`
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
`,Lt=s(v.h1)`
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
`,Nt=s.div`
  color: ${e=>e.theme.colors.primary};
  font-weight: 800;
  font-size: 1.1rem;
  margin-bottom: 12px;
`,Rt=s(v.div)`
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
`,Wt=s.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin: 12px 0 24px;
  width: 100%;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;s.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;const Et=s(v.div)`
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
`,Bt=s.div`
  margin-top: ${e=>e.$minimal?"0":"16px"};
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: ${e=>e.$minimal?"0":"16px"};
  width: 100%;
`;s(S)`
  margin-bottom: -15px;
  text-align: center;
  opacity: 0.6;
  letter-spacing: 2px;
`;const Ot=s.div`
  display: flex;
  justify-content: flex-start;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 20px;
`,Dt=s(v.button)`
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
`,Pt=s.div`
  display: flex;
  justify-content: flex-start;
  gap: 12px;
  flex-wrap: wrap;
`,Ft=s(v.button)`
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
`,Gt=(e,x,U,I,k,L=["+","-","*","/"])=>{const F=[];let j=["math","spelling","missing_letter","comparison","hindi","logic","sorting"];(e==="math_addition"||e==="math_subtraction"||e==="math_multiplication"||e==="math_division")&&(j=["math"]),e==="math_test"&&(j=["math"]),e==="math_sorting"&&(j=["sorting"]),e==="english_missing_letters"&&(j=["missing_letter"]),e==="english_spelling"&&(j=["spelling"]),e==="spelling_test"&&(j=["spelling","missing_letter"]),e==="hindi_test"&&(j=["hindi"]),e==="logic_test"&&(j=["logic","comparison"]);const N=Ze();let u=N;x===1?u=N.filter(_=>_.length<=4):x===2||x===3?u=N.filter(_=>_.length>4&&_.length<=7):u=N.filter(_=>_.length>7),u.length===0&&(u=N);const R=["अ","आ","इ","ई","उ","ऊ","ए","ऐ","ओ","औ","क","ख","ग","घ"],T=["అ","ఆ","ఇ","ఈ","ఉ","ఊ","ఎ","ఏ","ఐ","క","ఖ","గ","ఘ"],O=new Set;for(let _=1;_<=10;_++){let a={},G=0,$="";for(;G<100;){const z=j[Math.floor(Math.random()*j.length)];if(a={id:_,type:z},z==="math"){const r=`LEVEL_${x}`,n=pe[r]||pe.LEVEL_1;let l,c,g="+";if(e==="math_addition")g="+";else if(e==="math_subtraction")g="-";else if(e==="math_multiplication")g="*";else if(e==="math_division")g="/";else{const f=L.length>0?L:["+"];g=f[Math.floor(Math.random()*f.length)]}if(g==="*")l=M(1,n.multMax),c=M(1,n.multMax);else if(g==="/"){const f=Math.min(n.multMax,12);c=M(1,f),l=c*M(1,f),I&&x>=4&&(l+=M(0,c-1))}else if(x===2){const f=Math.random()>.5;l=f?M(1,9):M(10,99),c=f?M(10,99):M(1,9)}else x===3?(l=M(10,99),c=M(10,99)):(l=M(n.min,n.max),c=M(n.min,n.max));let d=l,p=c,w=0;if(g==="+")w=l+c;else if(g==="-")U||(d=Math.max(l,c),p=Math.min(l,c)),w=d-p;else if(g==="*")w=l*c;else if(g==="/")if(I&&x>=4)w=Number((d/p).toFixed(1));else{const f=Math.floor(d/p),W=d%p;w=W===0?f:`Q:${f} R:${W}`}$=`math-${d}${g}${p}`,a.prompt=k.math_solveMath,a.correctAnswer=w.toString();const D=new Set([a.correctAnswer]);for(;D.size<4;){const f=Math.floor(Math.random()*5)+1;if(typeof w=="number")D.add((Math.random()>.5?w+f:Math.max(0,w-f)).toString());else{const W=Math.floor(Math.random()*3)-1,C=Math.floor(Math.random()*3)-1,H=Math.max(0,Math.floor(d/(p||1))+W),b=Math.max(0,d%(p||1)+C);D.add(`Q:${H} R:${b}`)}}a.data={n1:d,n2:p,op:g,optionsStrings:Array.from(D).sort(()=>Math.random()-.5)}}else if(z==="spelling"){const r=q(u).toUpperCase();$=`spelling-${r}`,a.prompt=k.eng_tapTheWord,a.correctAnswer=r;const n=new Set([r]);for(;n.size<4;)n.add(q(u).toUpperCase());a.data={word:r,optionsStrings:Array.from(n).sort(()=>Math.random()-.5)}}else if(z==="missing_letter"){const r=q(u).toUpperCase(),n=Math.floor(Math.random()*r.length),l=r.split(""),c=l[n];l[n]="_",$=`missing-${r}-${n}`,a.prompt=k.eng_chooseMissing,a.correctAnswer=c;const g="ABCDEFGHIJKLMNOPQRSTUVWXYZ",d=new Set([c]);for(;d.size<4;)d.add(g[Math.floor(Math.random()*26)]);a.data={displayWord:l.join(""),word:r,optionsStrings:Array.from(d).sort(()=>Math.random()-.5)}}else if(z==="comparison"){const r=[];let n=20;for((x===2||x===3)&&(n=50),x===4&&(n=1e3);r.length<4;){const c=Math.floor(Math.random()*n);r.includes(c)||r.push(c)}const l=Math.random()>.5;$=`comp-${r.sort().join(",")}-${l}`,a.prompt=l?k.math_smallestNumber:k.math_biggestNumber,a.correctAnswer=l?Math.min(...r).toString():Math.max(...r).toString(),a.data={optionsStrings:r.map(String)}}else if(z==="logic"){const r=[{sequence:["🍎","🍌","🍎"],next:"🍌"},{sequence:["🐶","🐱","🐶"],next:"🐱"},{sequence:["1","2","1"],next:"2"},{sequence:["⭐","🌙","⭐"],next:"🌙"},{sequence:["🔴","🔵","🔴"],next:"🔵"},{sequence:["🚗","🚕","🚗"],next:"🚕"},{sequence:["🍦","🍩","🍦"],next:"🍩"},{sequence:["🛸","🚀","🛸"],next:"🚀"},{sequence:["🍎","🍎","🍌"],next:"🍌"},{sequence:["1","3","5"],next:"7"},{sequence:["A","B","A"],next:"B"},{sequence:["🔼","🔽","🔼"],next:"🔽"},{sequence:["🟢","🟡","🟢"],next:"🟡"},{sequence:["10","20","30"],next:"40"},{sequence:["M","N","M"],next:"N"},{sequence:["🦁","🐯","🦁"],next:"🐯"}],n=r[Math.floor(Math.random()*r.length)];$=`logic-${n.sequence.join("")}`,a.prompt=k.log_whatNext,a.correctAnswer=n.next;const l=new Set([n.next]);for(;l.size<4;){const c=r[Math.floor(Math.random()*r.length)].next;l.add(c)}a.data={displayWord:n.sequence.join(" ")+" ?",optionsStrings:Array.from(l).sort(()=>Math.random()-.5)}}else if(z==="hindi"){const r=R[Math.floor(Math.random()*R.length)];$=`hindi-${r}`,a.prompt=k.hindi_tapLetter,a.correctAnswer=r;const n=new Set([r]);for(;n.size<4;)n.add(R[Math.floor(Math.random()*R.length)]);a.data={letter:r,optionsStrings:Array.from(n).sort(()=>Math.random()-.5)}}else if(z==="telugu"){const r=T[Math.floor(Math.random()*T.length)];$=`telugu-${r}`,a.prompt=k.tel_tapLetter,a.correctAnswer=r;const n=new Set([r]);for(;n.size<4;)n.add(T[Math.floor(Math.random()*T.length)]);a.data={letter:r,optionsStrings:Array.from(n).sort(()=>Math.random()-.5)}}else if(z==="sorting"){const r=[];let n=3,l=10;for((x===2||x===3)&&(n=4,l=20),x===4&&(n=5,l=50);r.length<n;){const p=Math.floor(Math.random()*l)+1;r.includes(p)||r.push(p)}const c=Math.random()>.5;$=`sort-${r.sort().join(",")}-${c}`,a.prompt=c?k.math_sortAsc:k.math_sortDesc;const g=c?[...r].sort((p,w)=>p-w):[...r].sort((p,w)=>w-p);a.correctAnswer=g.join(", ");const d=new Set([a.correctAnswer]);for(;d.size<4;){const p=[...r].sort(()=>Math.random()-.5);d.add(p.join(", "))}a.data={displayWord:r.join("  •  "),optionsStrings:Array.from(d).sort(()=>Math.random()-.5)}}if(!O.has($)){O.add($);break}G++}F.push(a)}return F},te=e=>{if(e.type==="math"){const x={"+":"plus","-":"minus","*":"times","/":"divided by"};return`What is ${e.data.n1} ${x[e.data.op||"+"]} ${e.data.n2}?`}return e.type==="missing_letter"?`What is the missing letter in the word ${e.data.word}?`:e.type==="hindi"||e.type==="telugu"?e.data.letter||e.correctAnswer:e.data.word||e.data.letter||e.prompt},Ht=e=>e===10?"GRAND MASTER":e===9?"LEGEND":e===8?"PRODIGY":"KIDDOO HERO",ci=()=>{const{testId:e}=We(),x=Ee(),U=Be(),[I,k]=m.useState([]),[L,F]=m.useState({}),[j,N]=m.useState(!1),[u,R]=m.useState(0),[T,O]=m.useState(0),[_,a]=m.useState(!1),[G,$]=m.useState(!1),[z,r]=m.useState(!1),[n,l]=m.useState(!1),[c,g]=m.useState(1),[d,p]=m.useState(!1),[w,D]=m.useState(!1),[f,W]=m.useState(!1),[C,H]=m.useState(0),[b,ve]=m.useState(0),[E,_e]=m.useState("math_test"),[B,$e]=m.useState(["+"]),ie=E==="master_test",o=He.en,Se=[{id:"math_test",label:"Math",icon:t.jsx(qe,{size:18}),color:"#6366F1"},{id:"spelling_test",label:"English",icon:t.jsx(et,{size:18}),color:"#6366F1"},{id:"hindi_test",label:"Hindi",icon:t.jsx(we,{size:18}),color:"#6366F1"},{id:"logic_test",label:"Logic",icon:t.jsx(ye,{size:18}),color:"#6366F1"},{id:"master_test",label:"Grand Master",icon:t.jsx(J,{size:18}),color:"#6366F1"}],Ce=se.useMemo(()=>[{value:1,label:o.diff_beginner,info:"Numbers 1-10"},{value:2,label:o.diff_explorer,info:"One single & one double digit"},{value:3,label:o.diff_achiever,info:"Two double digits (10-99)"},{value:4,label:o.diff_master,info:"3-digit numbers (100-999)"},{value:5,label:o.diff_elite,info:"4-digit numbers (1000-9999)"}],[o]),Me=se.useMemo(()=>[{value:0,label:o.test_noLimit,info:o.test_timeLimitInfo.none},{value:30,label:o.test_time30s,info:o.test_timeLimitInfo.s30},{value:60,label:o.test_time1m,info:o.test_timeLimitInfo.m1},{value:120,label:o.test_time2m,info:o.test_timeLimitInfo.m2},{value:180,label:o.test_time3m,info:o.test_timeLimitInfo.m3},{value:240,label:o.test_time4m,info:o.test_timeLimitInfo.m4},{value:300,label:o.test_time5m,info:o.test_timeLimitInfo.m5}],[o]),ke=()=>[o.test_qCount,o.test_selectBest,o.test_timeRecorded,o.test_scoreForCert],ze=()=>{if(ie)return o.mst_grandMaster;switch(E){case"math_addition":return o.math_addition;case"math_subtraction":return o.math_subtraction;case"math_multiplication":return o.math_multiplication;case"math_division":return o.math_division;case"math_test":return o.math_mathHero;case"math_sorting":return o.math_sorting;case"english_missing_letters":return o.eng_missingLetters;case"english_spelling":return o.eng_listenAndFind;case"spelling_test":return o.eng_spellingHero;case"hindi_test":return o.hindi_hindiLegend;case"logic_test":return o.log_grandLogic;default:return o.com_tryAgain}},Y=m.useCallback(()=>{const i=Gt(E,c,d,w,o,B);k(i),F({}),N(!1),$(!1),a(!1),R(0),O(0),H(0),window.scrollTo({top:0,behavior:"smooth"})},[E,o,c,d,w,B]),K=m.useCallback(()=>{let i=0;I.forEach(h=>{var y;((y=L[h.id])==null?void 0:y.trim().toUpperCase())===h.correctAnswer.trim().toUpperCase()&&i++}),R(i),N(!0),i>=8&&(Ue({particleCount:150,spread:70,origin:{y:.6}}),U(Oe("master_test")))},[I,L,U]);m.useEffect(()=>{Y()},[Y]),m.useEffect(()=>{let i;return f&&!j&&(i=setInterval(()=>{H(h=>{const y=h+1;return b>0&&y>=b?(clearInterval(i),K(),b):y})},1e3)),()=>clearInterval(i)},[f,j,b,K]);const Z=I[T],Te=(i,h)=>{F(y=>({...y,[i]:h}))},Ae=()=>{W(!0),H(0)},oe=()=>{T<I.length-1?(O(i=>i+1),window.scrollTo({top:0,behavior:"smooth"})):K()},Ie=()=>{T>0&&O(i=>i-1)},Le=i=>{if(!i)return null;const h=L[i.id]||"";return t.jsxs(st,{$type:i.type,children:[t.jsx(rt,{children:t.jsx(nt,{initial:{width:0},animate:{width:`${(T+1)/10*100}%`},transition:{type:"spring",stiffness:100}})}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[t.jsxs(at,{children:[o.test_question," ",i.id," ",o.test_of," 10"]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",color:A.primary,fontWeight:"bold",marginTop:"20px"},children:[t.jsx(xe,{size:18}),Math.floor(C/60),":",(C%60).toString().padStart(2,"0"),b>0&&t.jsxs("span",{style:{fontSize:"0.8rem",opacity:.6,marginLeft:"4px"},children:["/ ",Math.floor(b/60),":",(b%60).toString().padStart(2,"0")]})]})]}),t.jsx(lt,{$type:i.type,children:i.type.replace("_"," ")}),i.type!=="math"&&t.jsxs(ct,{children:[t.jsxs(ut,{children:[i.type==="spelling"&&t.jsx(Xe,{size:40}),i.type==="missing_letter"&&t.jsx(ee,{size:40}),i.type==="comparison"&&t.jsx(tt,{size:40}),i.type==="hindi"&&t.jsx(we,{size:40}),i.type==="logic"&&t.jsx(ye,{size:40}),i.type==="sorting"&&t.jsx(it,{size:40})]}),t.jsx(yt,{fontSize:"clamp(1.2rem, 4vw, 1.75rem)",fontWeight:900,color:"textPrimary",children:i.prompt})]}),t.jsxs(dt,{children:[i.type==="math"&&i.data&&t.jsxs(V,{onClick:()=>me(te(i),i.type==="hindi"?"hi-IN":i.type==="telugu"?"te-IN":"en-US"),children:[i.data.n1??0," ",i.data.op??"+"," ",i.data.n2??0]}),(i.type==="spelling"||i.type==="hindi"||i.type==="telugu")&&i.data&&t.jsx(wt,{children:t.jsx(S,{color:"textSecondary",fontSize:"md",fontWeight:600,children:o.eng_tapSpeaker})}),i.type==="missing_letter"&&i.data&&t.jsx(V,{onClick:()=>me(te(i),i.type==="hindi"?"hi-IN":i.type==="telugu"?"te-IN":"en-US"),children:i.data.displayWord}),i.type==="logic"&&i.data&&t.jsx(mt,{children:i.data.displayWord}),i.type==="sorting"&&i.data&&t.jsx(V,{$fontSize:"clamp(2rem, 8vw, 4rem)",children:i.data.displayWord}),i.data.optionsStrings&&t.jsx(pt,{$isLong:i.data.optionsStrings.some(y=>y.length>12),children:i.data.optionsStrings.map((y,Ne)=>t.jsx(ht,{$selected:h===y,$color:A.primary,onClick:()=>Te(i.id,y),whileTap:{scale:.95},children:y},Ne))}),t.jsxs(Qe,{children:[t.jsx(Ye,{onClick:Ie}),t.jsx(Ve,{text:te(i),lang:i.type==="hindi"?"hi-IN":i.type==="telugu"?"te-IN":"en-US"}),T===I.length-1?t.jsx(P,{title:o.com_finish.toUpperCase(),onClick:oe,variant:"primary",minWidth:"180px"}):t.jsx(Ke,{onClick:oe})]})]})]})};return t.jsxs(De,{children:[t.jsxs(Pe,{children:[!f&&!j&&t.jsx("div",{style:{gridColumn:"1 / -1",width:"100%"},children:t.jsxs(Rt,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{type:"spring",damping:20},children:[t.jsxs(At,{children:[t.jsx(It,{animate:{scale:[1,1.05,1],rotate:[0,5,-5,0]},transition:{duration:4,repeat:1/0,ease:"easeInOut"},children:t.jsx(J,{size:40})}),t.jsx(Lt,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},children:ze()},E)]}),t.jsxs(Bt,{children:[t.jsx(re,{children:"Choose Your Subject"}),t.jsx(Ot,{children:Se.map(i=>t.jsxs(Dt,{$active:E===i.id,$color:i.color,onClick:()=>_e(i.id),whileHover:{scale:1.05},whileTap:{scale:.95},children:[i.icon,i.label]},i.id))}),(E==="math_test"||ie)&&t.jsxs(t.Fragment,{children:[t.jsx(re,{children:"Included Operations"}),t.jsx(Pt,{children:[{symbol:"+",label:o.math_addition},{symbol:"-",label:o.math_subtraction},{symbol:"*",label:o.math_multiplication,display:"×"},{symbol:"/",label:o.math_division,display:"÷"}].map(i=>t.jsxs(Ft,{$active:B.includes(i.symbol),onClick:()=>$e(h=>h.includes(i.symbol)?h.filter(y=>y!==i.symbol):[...h,i.symbol]),whileHover:{scale:1.02},whileTap:{scale:.98},children:[t.jsx("span",{className:"symbol",children:i.display||i.symbol}),t.jsx("span",{className:"label",children:i.label})]},i.symbol))}),(B.includes("-")||B.includes("/"))&&t.jsxs("div",{style:{display:"flex",gap:"24px",flexWrap:"wrap",marginTop:"16px",marginBottom:"16px"},children:[B.includes("-")&&t.jsxs(ne,{children:[t.jsx(ae,{type:"checkbox",checked:d,onChange:i=>p(i.target.checked)}),t.jsx("span",{style:{fontWeight:700,fontSize:"0.9rem"},children:o.com_allowNegative})]}),B.includes("/")&&t.jsxs(ne,{children:[t.jsx(ae,{type:"checkbox",checked:w,onChange:i=>D(i.target.checked)}),t.jsx("span",{style:{fontWeight:700,fontSize:"0.9rem"},children:o.com_allowDecimals})]})]})]}),t.jsx("div",{style:{marginTop:"12px"},children:t.jsx(de,{title:"Difficulty",options:Ce,currentValue:c,onChange:i=>g(i),name:"test_complexity"})}),t.jsx("div",{style:{marginTop:"4px"},children:t.jsx(de,{title:"Target Time",options:Me,currentValue:b,onChange:i=>ve(i),name:"test_target_time"})})]}),t.jsxs("div",{style:{width:"100%",marginTop:"32px",borderTop:`1px solid ${A.primary}10`,paddingTop:"24px"},children:[t.jsx(Nt,{children:o.test_instructions}),t.jsx(Wt,{children:ke().map((i,h)=>t.jsxs(Et,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:h*.1},children:[t.jsx(he,{size:18,color:"#10B981"}),t.jsx(S,{fontSize:"md",fontWeight:600,color:"textPrimary",children:i})]},h))})]}),t.jsx("div",{style:{marginTop:"24px",width:"100%"},children:t.jsx(P,{title:o.test_start,onClick:Ae,variant:"primary",width:"100%",size:"lg"})})]})}),f&&!j&&t.jsx("div",{style:{gridColumn:"1 / -1",width:"100%"},children:t.jsx(ot,{children:t.jsx(X,{mode:"wait",children:Z&&t.jsx(zt,{initial:{x:50,opacity:0},animate:{x:0,opacity:1},exit:{x:-50,opacity:0},transition:{type:"spring",damping:20,stiffness:100},children:Le(Z)},Z.id)})})})]}),j&&t.jsxs(xt,{initial:{opacity:0},animate:{opacity:1},children:[!G&&!_&&t.jsxs(bt,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},children:[t.jsx(v.div,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",damping:10},children:t.jsx(J,{size:120,color:u>=8?A.gold:A.slate})}),t.jsxs(_t,{fontSize:"4rem",fontWeight:900,color:"primary",children:[u," / 10"]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",fontSize:"1.5rem",fontWeight:"bold",color:A.textSecondary,marginBottom:"20px"},children:[t.jsx(xe,{size:24}),o.com_time||"Time",": ",Math.floor(C/60),":",(C%60).toString().padStart(2,"0")]}),t.jsx(jt,{$score:u,initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.3},children:Ht(u)}),b>0&&C>=b&&t.jsx("div",{style:{color:"#EF4444",fontWeight:900,fontSize:"1.2rem",marginTop:"10px"},children:"⏰ TIME'S UP!"}),t.jsx($t,{fontSize:"2rem",fontWeight:800,children:u>=8?o.com_genius:o.com_goodEffort}),t.jsx(St,{fontSize:"lg",color:"textSecondary",children:u>=8?o.com_masteredCurriculum:o.test_keepPracticing}),b>0&&t.jsxs("div",{style:{marginTop:"15px",padding:"10px 20px",borderRadius:"12px",background:C<=b?`${A.success}15`:`${A.warning}15`,color:C<=b?A.successDark:A.goldDark,fontWeight:700,fontSize:"0.9rem",display:"flex",alignItems:"center",gap:"8px"},children:[C<=b?t.jsx(Fe,{size:18}):t.jsx(ge,{size:18}),C<=b?o.test_beatenTarget:o.test_timeExceeded]}),t.jsxs(je,{children:[u>=8&&t.jsx(P,{title:o.com_getCertificate,onClick:()=>a(!0),variant:"primary"}),t.jsx(P,{title:"Options ▾",onClick:()=>r(!z),variant:"secondary",icon:t.jsx(fe,{size:20})}),t.jsx(X,{children:z&&t.jsxs(t.Fragment,{children:[t.jsx(le,{onClick:()=>r(!1)}),t.jsxs(ce,{initial:{opacity:0,y:10,scale:.9},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:10,scale:.9},children:[t.jsxs(Q,{onClick:()=>{$(!0),r(!1)},children:[t.jsx(ee,{size:18})," ",o.com_reviewAnswers]}),t.jsxs(Q,{onClick:()=>{Y(),W(!1),r(!1)},children:[t.jsx(ge,{size:18})," ",o.com_tryAgain]}),t.jsxs(Q,{onClick:()=>{x("/"),r(!1)},children:[t.jsx(ue,{size:18})," ",o.com_home]})]})]})})]})]}),G&&!_&&t.jsxs(Ct,{initial:{x:50,opacity:0},animate:{x:0,opacity:1},children:[t.jsx(vt,{fontSize:"2rem",fontWeight:900,color:"primary",children:o.com_testReview}),t.jsx(Mt,{color:"textSecondary",children:o.com_seeWhatLearned}),t.jsx(gt,{children:I.map(i=>{var y;const h=((y=L[i.id])==null?void 0:y.trim().toUpperCase())===i.correctAnswer.trim().toUpperCase();return t.jsxs(ft,{$correct:h,children:[t.jsxs(kt,{children:[t.jsxs(S,{fontSize:"md",fontWeight:800,color:"textPrimary",children:["Question ",i.id,": ",i.prompt]}),h?t.jsx(he,{color:"#10B981",size:24}):t.jsx(Je,{color:"#F59E0B",size:24})]}),t.jsxs(be,{children:[t.jsx(S,{fontSize:"sm",color:"textSecondary",children:o.com_yourAnswer}),t.jsx(S,{fontSize:"sm",fontWeight:700,color:h?"success":"warning",children:L[i.id]||"(No answer)"})]}),!h&&t.jsxs(be,{children:[t.jsx(S,{fontSize:"sm",color:"textSecondary",children:o.com_correctAnswer}),t.jsx(S,{fontSize:"sm",fontWeight:700,color:"success",children:i.correctAnswer})]})]},i.id)})}),t.jsxs(je,{children:[u>=8&&t.jsx(P,{title:o.com_getCertificate,onClick:()=>a(!0),variant:"primary"}),t.jsx(P,{title:"Options ▾",onClick:()=>l(!n),variant:"secondary",icon:t.jsx(fe,{size:20})}),t.jsx(X,{children:n&&t.jsxs(t.Fragment,{children:[t.jsx(le,{onClick:()=>l(!1)}),t.jsxs(ce,{initial:{opacity:0,y:10,scale:.9},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:10,scale:.9},children:[t.jsxs(Q,{onClick:()=>{$(!1),l(!1)},children:[t.jsx(ee,{size:18})," ",o.com_backToScore]}),t.jsxs(Q,{onClick:()=>{x("/"),l(!1)},children:[t.jsx(ue,{size:18})," ",o.com_home]})]})]})})]})]}),_&&t.jsx(Tt,{children:t.jsx(Ge,{onClose:()=>a(!1),challengeName:(e==null?void 0:e.replace("_"," ").toUpperCase())||"Master Test",score:u,level:"Genius",timeTaken:`${Math.floor(C/60)}:${(C%60).toString().padStart(2,"0")}`})})]})]})};export{ci as default};

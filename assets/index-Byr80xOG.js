import{k as o,s as _,t as Qe,K as C,a2 as De,as as Ue,l as He,n as Ve,o as me,r as p,ad as oe,a9 as Ge,p as t,P as Ke,W as Ye,ae as pe,af as he,aa as P,z as H,Z as ne,T as xe,C as ge,at as fe,au as ue,av as K,aw as Ze,v as Xe,_ as Je}from"./index-C6BBkSek.js";import{s as qe}from"./testService-BIKzA5g1.js";import{c as et}from"./confetti.module-ONDKWxYZ.js";import{S as tt}from"./SpeakIcon-B6whbVHe.js";import{P as it,N as st}from"./PreviousIcon-DfacNgST.js";import{D as re}from"./DifficultyPicker-A9_M6bsr.js";import{r as ye}from"./index-DW3S6kjG.js";import{g as ot,b as ae}from"./wordUtils-DPgh885X.js";import{b as T,M as we}from"./mathUtils-B1Q27TTV.js";import{C as be}from"./circle-check-DrRZFkKn.js";import{T as je}from"./timer-DHL-USXm.js";import{Z as nt,R as ve,H as _e,B as Se}from"./zap-DC0lkfO1.js";import{S as le}from"./search-D5YkJGzT.js";import{C as rt,S as at}from"./spell-check-s-0lTbOc.js";import{C as lt}from"./calculator-5JmEZPPB.js";import{B as ct}from"./book-open-DZwDn8Hr.js";import{L as $e}from"./languages-B2l58rdZ.js";import{S as dt}from"./scale-o9rwRpo7.js";import{A as mt}from"./arrow-up-down-Cgp5Q29m.js";import"./info-BdRtwLd7.js";o.div`
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
`;o(_.div)`
  height: 100%;
  background: ${e=>e.theme.colors.primary};
  border-radius: 4px;
`;const pt=o.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding-bottom: 80px;
`,ht=o(Qe)`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 50px 30px 25px;
  position: relative;
  background: ${e=>e.theme.colors.surface};
  border-radius: 32px;
  border: 1px solid ${e=>e.theme.colors.primary}15;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1);
  margin-top: 10px;
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
    padding: 60px 20px 20px;
    gap: 15px;
    border-radius: 24px;
  }
`,xt=o.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  background: ${e=>e.theme.colors.primary}15;
`,gt=o(_.div)`
  height: 100%;
  background: ${e=>e.theme.colors.primary};
`,ft=o.div`
  position: absolute;
  top: 25px;
  left: 30px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-family: ${e=>e.theme.fonts.primary};
  width: calc(100% - 60px);

  @media (max-width: 600px) {
    top: 20px;
    left: 20px;
    width: calc(100% - 40px);
  }
`,ut=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  flex-wrap: wrap;
  width: 100%;
`,yt=o.div`
  font-weight: 900;
  font-size: 0.75rem;
  letter-spacing: 2px;
  color: ${e=>e.theme.colors.textSecondary};
  opacity: 0.5;
  text-transform: uppercase;

  @media (max-width: 600px) {
    font-size: 0.65rem;
  }
`,wt=o.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 900;
  font-size: 0.75rem;
  color: ${e=>e.theme.colors.primary};
  background: ${e=>e.theme.colors.primary}10;
  padding: 2px 10px;
  border-radius: 20px;
  letter-spacing: 1px;

  @media (max-width: 600px) {
    font-size: 0.65rem;
    padding: 2px 8px;
  }
`,bt=o.div`
  font-weight: 800;
  font-size: 0.85rem;
  color: ${e=>e.theme.colors.primary};
  text-transform: uppercase;
  letter-spacing: 1px;
  opacity: 0.8;

  @media (max-width: 600px) {
    font-size: 0.7rem;
  }
`;o.div`
  display: none;
`;const jt=o.div`
  display: none;
`,vt=o.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 40px;

  @media (max-width: 480px) {
    flex-direction: column;
    text-align: center;
    gap: 8px;
  }
`,_t=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 40px 0 10px;

  @media (max-width: 600px) {
    gap: 20px;
    padding: 30px 0 10px;
  }
`,X=o.div`
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
`,St=o(X)`
  font-size: clamp(1.8rem, 4vw, 3rem);
  letter-spacing: 12px;
`,$t=o.div`
  display: grid;
  grid-template-columns: ${e=>e.$isLong?"1fr":"repeat(2, 1fr)"};
  gap: 16px;
  width: 100%;
  max-width: ${e=>e.$isLong?"600px":"800px"};
  margin: 10px auto 0;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    max-width: 100%;
    gap: 12px;
  }
`,Ct=o(_.div)`
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
  min-height: 70px;
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
`;const kt=o(_.div)`
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
`,Mt=o.div`
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
`,zt=o.div`
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
`,Ce=o.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;
`,Tt=o.div`
  color: ${e=>e.theme.colors.primary};
`,At=o(C)`
  text-align: center;
`,Nt=o.div`
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
`;const Lt=o(_.div)`
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
`,Wt=o(_.div)`
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
`,Rt=o(C)`
  margin-bottom: 10px;
`,It=o(C)`
  margin: 15px 0;
`,Bt=o(C)`
  margin-bottom: 10px;
`,Ft=o(C)`
  margin-bottom: 25px;
  max-width: 500px;
`,ke=o.div`
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
`,Pt=o(_.div)`
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
`,Et=o(C)`
  margin-bottom: 20px;
`,Ot=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;o.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
`;const Qt=o(_.div)`
  width: 100%;
`,Dt=o.div`
  position: fixed;
  inset: 0;
  z-index: 3000;
  background: white;
`;o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  gap: 12px;
  margin-bottom: 16px;
`;o(_.div)`
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
`;o(_.h1)`
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
`;const Ut=o.div`
  color: ${e=>e.theme.colors.primary};
  font-weight: 800;
  font-size: 1.1rem;
  margin-bottom: 12px;
`,Ht=o(_.div)`
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
`,Vt=o.div`
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
`;const Gt=o(_.div)`
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
`,Kt=o.div`
  margin-top: ${e=>e.$minimal?"0":"16px"};
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: ${e=>e.$minimal?"0":"16px"};
  width: 100%;
`,Yt=o(C)`
  text-align: center;
  width: 100%;
  margin-bottom: 8px;
  font-weight: 900;
  color: ${e=>e.theme.colors.primary};
  letter-spacing: -0.5px;
`,Zt=o.div`
  display: flex;
  justify-content: flex-start;
  gap: 12px;
  flex-wrap: wrap;
`,Xt=o(_.button)`
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
`,Jt=o.div`
  display: flex;
  justify-content: flex-start;
  gap: 12px;
  flex-wrap: wrap;
`,qt=o(_.button)`
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
`,Me=o(De)`
  margin-top: 12px;
`,ei=(e,g,B,A,w,u=["+","-","*","/"],J=10)=>{const E=[];let k=["math","spelling","missing_letter","comparison","hindi","logic","sorting"];(e==="math_addition"||e==="math_subtraction"||e==="math_multiplication"||e==="math_division")&&(k=["math"]),e==="math_test"&&(k=["math"]),e==="math_sorting"&&(k=["sorting"]),e==="english_missing_letters"&&(k=["missing_letter"]),e==="english_spelling"&&(k=["spelling"]),e==="spelling_test"&&(k=["spelling","missing_letter"]),e==="hindi_test"&&(k=["hindi"]),e==="logic_test"&&(k=["logic","comparison"]);const W=ot();let R=W;g===1?R=W.filter($=>$.length<=4):g===2||g===3?R=W.filter($=>$.length>4&&$.length<=7):R=W.filter($=>$.length>7),R.length===0&&(R=W);const S=["अ","आ","इ","ई","उ","ऊ","ए","ऐ","ओ","औ","क","ख","ग","घ"],D=["అ","ఆ","ఇ","ఈ","ఉ","ఊ","ఎ","ఏ","ఐ","క","ఖ","గ","ఘ"],O=new Set;for(let $=1;$<=J;$++){let a={},U=0,M="";for(;U<100;){const z=k[Math.floor(Math.random()*k.length)];if(a={id:$,type:z},z==="math"){const n=`LEVEL_${g}`,r=we[n]||we.LEVEL_1;let l,c,d="+";if(e==="math_addition")d="+";else if(e==="math_subtraction")d="-";else if(e==="math_multiplication")d="*";else if(e==="math_division")d="/";else{const y=u.length>0?u:["+"];d=y[Math.floor(Math.random()*y.length)]}if(d==="*")l=T(1,r.multMax),c=T(1,r.multMax);else if(d==="/"){const y=Math.min(r.multMax,12);c=T(1,y),l=c*T(1,y),A&&g>=4&&(l+=T(0,c-1))}else if(g===2){const y=Math.random()>.5;l=y?T(1,9):T(10,99),c=y?T(10,99):T(1,9)}else g===3?(l=T(10,99),c=T(10,99)):(l=T(r.min,r.max),c=T(r.min,r.max));let f=l,h=c,b=0;if(d==="+")b=l+c;else if(d==="-")B||(f=Math.max(l,c),h=Math.min(l,c)),b=f-h;else if(d==="*")b=l*c;else if(d==="/")if(A&&g>=4)b=Number((f/h).toFixed(1));else{const y=Math.floor(f/h),F=f%h;b=F===0?y:`Q:${y} R:${F}`}M=`math-${f}${d}${h}`,a.prompt=w.math_solveMath,a.correctAnswer=b.toString();const Q=new Set([a.correctAnswer]);for(;Q.size<4;){const y=Math.floor(Math.random()*5)+1;if(typeof b=="number")Q.add((Math.random()>.5?b+y:Math.max(0,b-y)).toString());else{const F=Math.floor(Math.random()*3)-1,Y=Math.floor(Math.random()*3)-1,j=Math.max(0,Math.floor(f/(h||1))+F),V=Math.max(0,f%(h||1)+Y);Q.add(`Q:${j} R:${V}`)}}a.data={n1:f,n2:h,op:d,optionsStrings:Array.from(Q).sort(()=>Math.random()-.5)}}else if(z==="spelling"){const n=ae(R).toUpperCase();M=`spelling-${n}`,a.prompt=w.eng_tapTheWord,a.correctAnswer=n;const r=new Set([n]);for(;r.size<4;)r.add(ae(R).toUpperCase());a.data={word:n,optionsStrings:Array.from(r).sort(()=>Math.random()-.5)}}else if(z==="missing_letter"){const n=ae(R).toUpperCase(),r=Math.floor(Math.random()*n.length),l=n.split(""),c=l[r];l[r]="_",M=`missing-${n}-${r}`,a.prompt=w.eng_chooseMissing,a.correctAnswer=c;const d="ABCDEFGHIJKLMNOPQRSTUVWXYZ",f=new Set([c]);for(;f.size<4;)f.add(d[Math.floor(Math.random()*26)]);a.data={displayWord:l.join(""),word:n,optionsStrings:Array.from(f).sort(()=>Math.random()-.5)}}else if(z==="comparison"){const n=[];let r=20;for((g===2||g===3)&&(r=50),g===4&&(r=1e3);n.length<4;){const c=Math.floor(Math.random()*r);n.includes(c)||n.push(c)}const l=Math.random()>.5;M=`comp-${n.sort().join(",")}-${l}`,a.prompt=l?w.math_smallestNumber:w.math_biggestNumber,a.correctAnswer=l?Math.min(...n).toString():Math.max(...n).toString(),a.data={optionsStrings:n.map(String)}}else if(z==="logic"){const n=[{sequence:["🍎","🍌","🍎"],next:"🍌"},{sequence:["🐶","🐱","🐶"],next:"🐱"},{sequence:["1","2","1"],next:"2"},{sequence:["⭐","🌙","⭐"],next:"🌙"},{sequence:["🔴","🔵","🔴"],next:"🔵"},{sequence:["🚗","🚕","🚗"],next:"🚕"},{sequence:["🍦","🍩","🍦"],next:"🍩"},{sequence:["🛸","🚀","🛸"],next:"🚀"},{sequence:["🍎","🍎","🍌"],next:"🍌"},{sequence:["1","3","5"],next:"7"},{sequence:["A","B","A"],next:"B"},{sequence:["🔼","🔽","🔼"],next:"🔽"},{sequence:["🟢","🟡","🟢"],next:"🟡"},{sequence:["10","20","30"],next:"40"},{sequence:["M","N","M"],next:"N"},{sequence:["🦁","🐯","🦁"],next:"🐯"}],r=n[Math.floor(Math.random()*n.length)];M=`logic-${r.sequence.join("")}`,a.prompt=w.log_whatNext,a.correctAnswer=r.next;const l=new Set([r.next]);for(;l.size<4;){const c=n[Math.floor(Math.random()*n.length)].next;l.add(c)}a.data={displayWord:r.sequence.join(" ")+" ?",optionsStrings:Array.from(l).sort(()=>Math.random()-.5)}}else if(z==="hindi"){const n=S[Math.floor(Math.random()*S.length)];M=`hindi-${n}`,a.prompt=w.hindi_tapLetter,a.correctAnswer=n;const r=new Set([n]);for(;r.size<4;)r.add(S[Math.floor(Math.random()*S.length)]);a.data={letter:n,optionsStrings:Array.from(r).sort(()=>Math.random()-.5)}}else if(z==="telugu"){const n=D[Math.floor(Math.random()*D.length)];M=`telugu-${n}`,a.prompt=w.tel_tapLetter,a.correctAnswer=n;const r=new Set([n]);for(;r.size<4;)r.add(D[Math.floor(Math.random()*D.length)]);a.data={letter:n,optionsStrings:Array.from(r).sort(()=>Math.random()-.5)}}else if(z==="sorting"){const n=[];let r=3,l=10;for((g===2||g===3)&&(r=4,l=20),g===4&&(r=5,l=50);n.length<r;){const h=Math.floor(Math.random()*l)+1;n.includes(h)||n.push(h)}const c=Math.random()>.5;M=`sort-${n.sort().join(",")}-${c}`,a.prompt=c?w.math_sortAsc:w.math_sortDesc;const d=c?[...n].sort((h,b)=>h-b):[...n].sort((h,b)=>b-h);a.correctAnswer=d.join(", ");const f=new Set([a.correctAnswer]);for(;f.size<4;){const h=[...n].sort(()=>Math.random()-.5);f.add(h.join(", "))}a.data={displayWord:n.join("  •  "),optionsStrings:Array.from(f).sort(()=>Math.random()-.5)}}if(!O.has(M)){O.add(M);break}U++}E.push(a)}return E},ce=e=>{if(e.type==="math"){const g={"+":"plus","-":"minus","*":"times","/":"divided by"};return`What is ${e.data.n1} ${g[e.data.op||"+"]} ${e.data.n2}?`}return e.type==="missing_letter"?`What is the missing letter in the word ${e.data.word}?`:e.type==="hindi"||e.type==="telugu"?e.data.letter||e.correctAnswer:e.data.word||e.data.letter||e.prompt},ti=(e,g,B)=>{const A=e/g;return A===1?B.mst_rank1:A>=.9?B.mst_rank2:A>=.8?B.mst_rank3:B.mst_rank4},vi=()=>{const{testId:e}=Ue(),g=He(),B=Ve(),A=me(i=>i.alphabet.user),w=me(i=>i.alphabet.userName),[u,J]=p.useState([]),[E,k]=p.useState({}),[W,R]=p.useState(!1),[S,D]=p.useState(0),[O,$]=p.useState(0),[a,U]=p.useState(!1),[M,z]=p.useState(!1),[n,r]=p.useState(!1),[l,c]=p.useState(!1),[d,f]=p.useState(1),[h,b]=p.useState(!1),[Q,y]=p.useState(!1),[F,Y]=p.useState(!1),[j,V]=p.useState(0),[v,ze]=p.useState(0),[N,Te]=p.useState("math_test"),[I,Ae]=p.useState(["+"]),[q,Ne]=p.useState(10),G=N==="master_test",s=Xe.en,Le=[{id:"math_test",label:s.math_mathMagic,icon:t.jsx(lt,{size:18}),color:"#6366F1"},{id:"spelling_test",label:s.eng_spellingHero,icon:t.jsx(ct,{size:18}),color:"#6366F1"},{id:"hindi_test",label:s.hindi_hindiLegend,icon:t.jsx($e,{size:18}),color:"#6366F1"},{id:"logic_test",label:s.log_grandLogic,icon:t.jsx(Se,{size:18}),color:"#6366F1"},{id:"master_test",label:s.mst_grandMaster,icon:t.jsx(xe,{size:18}),color:"#6366F1"}],ee=oe.useMemo(()=>[{value:1,label:s.diff_beginner,info:"Numbers 1-10"},{value:2,label:s.diff_explorer,info:"One single & one double digit"},{value:3,label:s.diff_achiever,info:"Two double digits (10-99)"},{value:4,label:s.diff_master,info:"3-digit numbers (100-999)"},{value:5,label:s.diff_elite,info:"4-digit numbers (1000-9999)"}],[s]),We=oe.useMemo(()=>[{value:0,label:s.test_noLimit,info:s.test_timeLimitInfo.none},{value:30,label:s.test_time30s,info:s.test_timeLimitInfo.s30},{value:60,label:s.test_time1m,info:s.test_timeLimitInfo.m1},{value:120,label:s.test_time2m,info:s.test_timeLimitInfo.m2},{value:180,label:s.test_time3m,info:s.test_timeLimitInfo.m3},{value:240,label:s.test_time4m,info:s.test_timeLimitInfo.m4},{value:300,label:s.test_time5m,info:s.test_timeLimitInfo.m5}],[s]),Re=oe.useMemo(()=>[{value:10,label:`10 ${s.mst_questionsShort}`,info:"Perfect for a quick practice"},{value:15,label:`15 ${s.mst_questionsShort}`,info:"A bit more challenging"},{value:20,label:`20 ${s.mst_questionsShort}`,info:"Testing your endurance"},{value:25,label:`25 ${s.mst_questionsShort}`,info:"The ultimate challenge"},{value:50,label:`50 ${s.mst_questionsShort}`,info:"The Grand Master's Marathon"}],[]),Ie=()=>[s.test_qCount,s.test_selectBest,s.test_timeRecorded,s.test_scoreForCert],Z=p.useCallback(()=>{if(G)return s.mst_grandMaster;switch(N){case"math_addition":return s.math_addition;case"math_subtraction":return s.math_subtraction;case"math_multiplication":return s.math_multiplication;case"math_division":return s.math_division;case"math_test":return s.math_mathHero;case"math_sorting":return s.math_sorting;case"english_missing_letters":return s.eng_missingLetters;case"english_spelling":return s.eng_listenAndFind;case"spelling_test":return s.eng_spellingHero;case"hindi_test":return s.hindi_hindiLegend;case"logic_test":return s.log_grandLogic;default:return s.com_tryAgain}},[G,s,N]),Be=p.useCallback(()=>{const i=[Z()],x=ee.find(m=>m.value===d);if(x&&i.push(x.label),(N==="math_test"||G)&&I.length>0){const m=I.map(L=>L==="+"?"Add":L==="-"?"Sub":L==="*"?"Mult":L==="/"?"Div":L);i.push(m.join(", "))}return i.join(" • ")},[Z,ee,d,N,G,I]),te=p.useCallback(()=>{const i=ei(N,d,h,Q,s,I,q);J(i),k({}),R(!1),z(!1),U(!1),D(0),$(0),V(0),window.scrollTo({top:0,behavior:"smooth"})},[N,s,d,h,Q,I,q]),ie=p.useCallback(()=>{let i=0;u.forEach(m=>{var L;((L=E[m.id])==null?void 0:L.trim().toUpperCase())===m.correctAnswer.trim().toUpperCase()&&i++}),D(i),R(!0);const x=u.length*.8;if(i>=x&&(et({particleCount:150,spread:70,origin:{y:.6}}),B(Ge("master_test"))),A){const m=w&&w!=="Explorer"?w:A.displayName||A.email||"Hari";console.log("Saving test result for user:",m),qe({userId:A.uid,userName:m,testId:N,testTitle:Z(),score:i,scorePercentage:Math.round(i/u.length*100),totalQuestions:u.length,timeTaken:j,category:N,difficulty:d}).catch(L=>console.error("Failed to save test result:",L))}},[u,E,B,A,w,N,d,j,Z]);p.useEffect(()=>{te()},[te]),p.useEffect(()=>{let i;return F&&!W&&(i=setInterval(()=>{V(x=>{const m=x+1;return v>0&&m>=v?(clearInterval(i),ie(),v):m})},1e3)),()=>clearInterval(i)},[F,W,v,ie]);const se=u[O],Fe=(i,x)=>{k(m=>({...m,[i]:x}))},Pe=()=>{Y(!0),V(0)},de=()=>{O<u.length-1?($(i=>i+1),window.scrollTo({top:0,behavior:"smooth"})):ie()},Ee=()=>{O>0&&$(i=>i-1)},Oe=i=>{if(!i)return null;const x=E[i.id]||"";return t.jsxs(ht,{$type:i.type,children:[t.jsx(xt,{children:t.jsx(gt,{initial:{width:0},animate:{width:`${(O+1)/u.length*100}%`},transition:{type:"spring",stiffness:100}})}),t.jsx(ft,{children:t.jsxs(ut,{children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[t.jsxs(yt,{children:[s.test_question," ",i.id," ",s.test_of," ",u.length]}),t.jsxs(wt,{children:[t.jsx(je,{size:14}),Math.floor(j/60),":",(j%60).toString().padStart(2,"0"),v>0&&t.jsxs("span",{style:{fontSize:"0.6rem",opacity:.6,marginLeft:"4px"},children:["/ ",Math.floor(v/60),":",(v%60).toString().padStart(2,"0")]})]})]}),t.jsx(bt,{children:Be()})]})}),t.jsx(jt,{$type:i.type,children:i.type.replace("_"," ")}),i.type!=="math"&&t.jsxs(vt,{children:[t.jsxs(Tt,{children:[i.type==="spelling"&&t.jsx(at,{size:40}),i.type==="missing_letter"&&t.jsx(le,{size:40}),i.type==="comparison"&&t.jsx(dt,{size:40}),i.type==="hindi"&&t.jsx($e,{size:40}),i.type==="logic"&&t.jsx(Se,{size:40}),i.type==="sorting"&&t.jsx(mt,{size:40})]}),t.jsx(At,{fontSize:"clamp(1.2rem, 4vw, 1.75rem)",fontWeight:900,color:"textPrimary",children:i.prompt})]}),t.jsxs(_t,{children:[i.type==="math"&&i.data&&t.jsxs(X,{onClick:()=>ye(ce(i),i.type==="hindi"?"hi-IN":i.type==="telugu"?"te-IN":"en-US"),children:[i.data.n1??0," ",i.data.op??"+"," ",i.data.n2??0]}),(i.type==="spelling"||i.type==="hindi"||i.type==="telugu")&&i.data&&t.jsx(Nt,{children:t.jsx(C,{color:"textSecondary",fontSize:"md",fontWeight:600,children:s.eng_tapSpeaker})}),i.type==="missing_letter"&&i.data&&t.jsx(X,{onClick:()=>ye(ce(i),i.type==="hindi"?"hi-IN":i.type==="telugu"?"te-IN":"en-US"),children:i.data.displayWord}),i.type==="logic"&&i.data&&t.jsx(St,{children:i.data.displayWord}),i.type==="sorting"&&i.data&&t.jsx(X,{$fontSize:"clamp(2rem, 8vw, 4rem)",children:i.data.displayWord}),i.data.optionsStrings&&t.jsx($t,{$isLong:i.data.optionsStrings.some(m=>m.length>12),children:i.data.optionsStrings.map((m,L)=>t.jsx(Ct,{$selected:x===m,$color:P.primary,onClick:()=>Fe(i.id,m),whileTap:{scale:.95},children:m},L))}),t.jsxs(Je,{children:[t.jsx(it,{onClick:Ee}),t.jsx(tt,{text:ce(i),lang:i.type==="hindi"?"hi-IN":i.type==="telugu"?"te-IN":"en-US"}),O===u.length-1?t.jsx(H,{title:s.com_finish.toUpperCase(),onClick:de,variant:"primary",minWidth:"180px"}):t.jsx(st,{onClick:de})]})]})]})};return t.jsxs(Ke,{children:[t.jsxs(Ye,{children:[!F&&!W&&t.jsx("div",{style:{gridColumn:"1 / -1",width:"100%"},children:t.jsxs(Ht,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{type:"spring",damping:20},children:[t.jsx(Yt,{fontSize:"2xl",fontWeight:900,children:s.mst_ready}),t.jsxs(Kt,{children:[t.jsx(Me,{children:s.mst_chooseSubject}),t.jsx(Zt,{children:Le.map(i=>t.jsxs(Xt,{$active:N===i.id,$color:i.color,onClick:()=>Te(i.id),whileHover:{scale:1.05},whileTap:{scale:.95},children:[i.icon,i.label]},i.id))}),(N==="math_test"||G)&&t.jsxs(t.Fragment,{children:[t.jsx(Me,{children:s.mst_includedOperations}),t.jsx(Jt,{children:[{symbol:"+",label:s.math_addition},{symbol:"-",label:s.math_subtraction},{symbol:"*",label:s.math_multiplication,display:"×"},{symbol:"/",label:s.math_division,display:"÷"}].map(i=>t.jsxs(qt,{$active:I.includes(i.symbol),onClick:()=>Ae(x=>x.includes(i.symbol)?x.filter(m=>m!==i.symbol):[...x,i.symbol]),whileHover:{scale:1.02},whileTap:{scale:.98},children:[t.jsx("span",{className:"symbol",children:i.display||i.symbol}),t.jsx("span",{className:"label",children:i.label})]},i.symbol))}),(I.includes("-")||I.includes("/"))&&t.jsxs("div",{style:{display:"flex",gap:"24px",flexWrap:"wrap",marginTop:"16px",marginBottom:"16px"},children:[I.includes("-")&&t.jsxs(pe,{children:[t.jsx(he,{type:"checkbox",checked:h,onChange:i=>b(i.target.checked)}),t.jsx("span",{style:{fontWeight:700,fontSize:"0.9rem"},children:s.com_allowNegative})]}),I.includes("/")&&t.jsxs(pe,{children:[t.jsx(he,{type:"checkbox",checked:Q,onChange:i=>y(i.target.checked)}),t.jsx("span",{style:{fontWeight:700,fontSize:"0.9rem"},children:s.com_allowDecimals})]})]})]}),t.jsx(re,{title:s.com_difficulty,options:ee,currentValue:d,onChange:i=>f(i),name:"test_complexity"}),t.jsx(re,{title:s.mst_questionCount,options:Re,currentValue:q,onChange:i=>Ne(i),name:"test_question_count"}),t.jsx(re,{title:s.mst_targetTime,options:We,currentValue:v,onChange:i=>ze(i),name:"test_target_time"})]}),t.jsxs("div",{style:{width:"100%",marginTop:"32px",borderTop:`1px solid ${P.primary}10`,paddingTop:"24px"},children:[t.jsx(Ut,{children:s.test_instructions}),t.jsx(Vt,{children:Ie().map((i,x)=>t.jsxs(Gt,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:x*.1},children:[t.jsx(be,{size:18,color:"#10B981"}),t.jsx(C,{fontSize:"md",fontWeight:600,color:"textPrimary",children:i})]},x))})]}),t.jsx("div",{style:{marginTop:"24px",width:"100%"},children:t.jsx(H,{title:s.test_start,onClick:Pe,variant:"primary",width:"100%",size:"lg"})})]})}),F&&!W&&t.jsx("div",{style:{gridColumn:"1 / -1",width:"100%"},children:t.jsx(pt,{children:t.jsx(ne,{mode:"wait",children:se&&t.jsx(Qt,{initial:{x:50,opacity:0},animate:{x:0,opacity:1},exit:{x:-50,opacity:0},transition:{type:"spring",damping:20,stiffness:100},children:Oe(se)},se.id)})})})]}),W&&t.jsxs(kt,{initial:{opacity:0},animate:{opacity:1},children:[!M&&!a&&t.jsxs(Lt,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},children:[t.jsx(_.div,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",damping:10},children:t.jsx(xe,{size:120,color:S>=8?P.gold:P.slate})}),t.jsxs(It,{fontSize:"4rem",fontWeight:900,color:"primary",children:[S," / ",u.length]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",fontSize:"1.5rem",fontWeight:"bold",color:P.textSecondary,marginBottom:"20px"},children:[t.jsx(je,{size:24}),s.com_time||"Time",": ",Math.floor(j/60),":",(j%60).toString().padStart(2,"0")]}),t.jsx(Wt,{$score:S,initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.3},children:ti(S,u.length,s)}),v>0&&j>=v&&t.jsxs("div",{style:{color:"#EF4444",fontWeight:900,fontSize:"1.2rem",marginTop:"10px"},children:["⏰ ",s.mst_timesUp]}),t.jsx(Bt,{fontSize:"2rem",fontWeight:800,children:S>=u.length*.8?s.com_genius:s.com_goodEffort}),t.jsx(Ft,{fontSize:"lg",color:"textSecondary",children:S>=u.length*.8?s.com_masteredCurriculum:s.test_keepPracticing}),v>0&&t.jsxs("div",{style:{marginTop:"15px",padding:"10px 20px",borderRadius:"12px",background:j<=v?`${P.success}15`:`${P.warning}15`,color:j<=v?P.successDark:P.goldDark,fontWeight:700,fontSize:"0.9rem",display:"flex",alignItems:"center",gap:"8px"},children:[j<=v?t.jsx(nt,{size:18}):t.jsx(ve,{size:18}),j<=v?s.test_beatenTarget:s.test_timeExceeded]}),t.jsxs(ke,{children:[S>=8&&t.jsx(H,{title:s.com_getCertificate,onClick:()=>U(!0),variant:"primary"}),t.jsx(H,{title:`${s.mst_options} ▾`,onClick:()=>r(!n),variant:"secondary",icon:t.jsx(ge,{size:20})}),t.jsx(ne,{children:n&&t.jsxs(t.Fragment,{children:[t.jsx(fe,{onClick:()=>r(!1)}),t.jsxs(ue,{initial:{opacity:0,y:10,scale:.9},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:10,scale:.9},children:[t.jsxs(K,{onClick:()=>{z(!0),r(!1)},children:[t.jsx(le,{size:18})," ",s.com_reviewAnswers]}),t.jsxs(K,{onClick:()=>{te(),Y(!1),r(!1)},children:[t.jsx(ve,{size:18})," ",s.com_tryAgain]}),t.jsxs(K,{onClick:()=>{g("/"),r(!1)},children:[t.jsx(_e,{size:18})," ",s.com_home]})]})]})})]})]}),M&&!a&&t.jsxs(Pt,{initial:{x:50,opacity:0},animate:{x:0,opacity:1},children:[t.jsx(Rt,{fontSize:"2rem",fontWeight:900,color:"primary",children:s.com_testReview}),t.jsx(Et,{color:"textSecondary",children:s.com_seeWhatLearned}),t.jsx(Mt,{children:u.map(i=>{var m;const x=((m=E[i.id])==null?void 0:m.trim().toUpperCase())===i.correctAnswer.trim().toUpperCase();return t.jsxs(zt,{$correct:x,children:[t.jsxs(Ot,{children:[t.jsxs(C,{fontSize:"md",fontWeight:800,color:"textPrimary",children:[s.test_question," ",i.id,": ",i.prompt]}),x?t.jsx(be,{color:"#10B981",size:24}):t.jsx(rt,{color:"#F59E0B",size:24})]}),t.jsxs(Ce,{children:[t.jsx(C,{fontSize:"sm",color:"textSecondary",children:s.com_yourAnswer}),t.jsx(C,{fontSize:"sm",fontWeight:700,color:x?"success":"warning",children:E[i.id]||"(No answer)"})]}),!x&&t.jsxs(Ce,{children:[t.jsx(C,{fontSize:"sm",color:"textSecondary",children:s.com_correctAnswer}),t.jsx(C,{fontSize:"sm",fontWeight:700,color:"success",children:i.correctAnswer})]})]},i.id)})}),t.jsxs(ke,{children:[S>=8&&t.jsx(H,{title:s.com_getCertificate,onClick:()=>U(!0),variant:"primary"}),t.jsx(H,{title:"Options ▾",onClick:()=>c(!l),variant:"secondary",icon:t.jsx(ge,{size:20})}),t.jsx(ne,{children:l&&t.jsxs(t.Fragment,{children:[t.jsx(fe,{onClick:()=>c(!1)}),t.jsxs(ue,{initial:{opacity:0,y:10,scale:.9},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:10,scale:.9},children:[t.jsxs(K,{onClick:()=>{z(!1),c(!1)},children:[t.jsx(le,{size:18})," ",s.com_backToScore]}),t.jsxs(K,{onClick:()=>{g("/"),c(!1)},children:[t.jsx(_e,{size:18})," ",s.com_home]})]})]})})]})]}),a&&t.jsx(Dt,{children:t.jsx(Ze,{onClose:()=>U(!1),challengeName:(e==null?void 0:e.replace("_"," ").toUpperCase())||"Master Test",score:S,level:"Genius",timeTaken:`${Math.floor(j/60)}:${(j%60).toString().padStart(2,"0")}`})})]})]})};export{vi as default};

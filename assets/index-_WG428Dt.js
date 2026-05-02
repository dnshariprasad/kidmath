import{k as o,r as _,s as De,K as M,a1 as Oe,at as Pe,l as Fe,n as Ge,o as Ue,z as p,ae as se,a9 as He,p as t,P as Ve,R as Ye,af as de,ag as me,ab as I,x as F,Y as oe,T as pe,C as he,au as xe,av as ge,aw as Y,ax as Ke,aa as Ze,Z as Xe}from"./index-DknSt3NM.js";import{s as Je}from"./testService-U80onXDx.js";import{c as qe}from"./confetti.module-ONDKWxYZ.js";import{S as et}from"./SpeakIcon-CVKllE2l.js";import{P as tt,N as it}from"./PreviousIcon-B_T2_Ix6.js";import{D as ne}from"./DifficultyPicker-BrEqK9T0.js";import{r as fe}from"./index-TgxMRlWw.js";import{g as st,b as re}from"./wordUtils-DPgh885X.js";import{b as k,M as ue}from"./mathUtils-B1Q27TTV.js";import{C as ye}from"./circle-check-ChLIeNdS.js";import{T as we,B as be}from"./timer-CLBNU-8b.js";import{Z as ot,R as je,H as ve}from"./zap-Ckjof_iT.js";import{S as ae}from"./search-K0gHe9Fe.js";import{C as nt,S as rt}from"./spell-check-B5rUaAzk.js";import{C as at}from"./calculator-J_j3t4Cc.js";import{B as lt}from"./book-open-B_r6_oLl.js";import{L as Se}from"./languages-3eap_hc-.js";import{S as ct}from"./scale-gAbfhl_w.js";import{A as dt}from"./arrow-up-down-C08tEYAH.js";import"./info-DhAkLpSA.js";o.div`
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
`;const mt=o.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding-bottom: 80px;
`,pt=o(De)`
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
`,ht=o.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  background: ${e=>e.theme.colors.primary}15;
`,xt=o(_.div)`
  height: 100%;
  background: ${e=>e.theme.colors.primary};
`,gt=o.div`
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
`,ft=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  flex-wrap: wrap;
  width: 100%;
`,ut=o.div`
  font-weight: 900;
  font-size: 0.75rem;
  letter-spacing: 2px;
  color: ${e=>e.theme.colors.textSecondary};
  opacity: 0.5;
  text-transform: uppercase;

  @media (max-width: 600px) {
    font-size: 0.65rem;
  }
`,yt=o.div`
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
`,wt=o.div`
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
`;const bt=o.div`
  display: none;
`,jt=o.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 40px;

  @media (max-width: 480px) {
    flex-direction: column;
    text-align: center;
    gap: 8px;
  }
`,vt=o.div`
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
`,_t=o.div`
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
`,$t=o(_.div)`
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
`;const Ct=o(_.div)`
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
`,kt=o.div`
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
`,_e=o.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;
`,zt=o.div`
  color: ${e=>e.theme.colors.primary};
`,Tt=o(M)`
  text-align: center;
`,At=o.div`
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
`;const Rt=o(_.div)`
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
`,Lt=o(_.div)`
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
`,It=o(M)`
  margin-bottom: 10px;
`,Nt=o(M)`
  margin: 15px 0;
`,Wt=o(M)`
  margin-bottom: 10px;
`,Et=o(M)`
  margin-bottom: 25px;
  max-width: 500px;
`,$e=o.div`
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
`,Qt=o(_.div)`
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
`,Bt=o(M)`
  margin-bottom: 20px;
`,Dt=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;o.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
`;const Ot=o(_.div)`
  width: 100%;
`,Pt=o.div`
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
`;const Ft=o.div`
  color: ${e=>e.theme.colors.primary};
  font-weight: 800;
  font-size: 1.1rem;
  margin-bottom: 12px;
`,Gt=o(_.div)`
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
`,Ut=o.div`
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
`;const Ht=o(_.div)`
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
`,Vt=o.div`
  margin-top: ${e=>e.$minimal?"0":"16px"};
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: ${e=>e.$minimal?"0":"16px"};
  width: 100%;
`,Yt=o(M)`
  text-align: center;
  width: 100%;
  margin-bottom: 8px;
  font-weight: 900;
  color: ${e=>e.theme.colors.primary};
  letter-spacing: -0.5px;
`,Kt=o.div`
  display: flex;
  justify-content: flex-start;
  gap: 12px;
  flex-wrap: wrap;
`,Zt=o(_.button)`
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
`,Xt=o.div`
  display: flex;
  justify-content: flex-start;
  gap: 12px;
  flex-wrap: wrap;
`,Jt=o(_.button)`
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
`,Ce=o(Oe)`
  margin-top: 12px;
`,qt=(e,x,N,D,d,K=["+","-","*","/"],E=10)=>{const G=[];let v=["math","spelling","missing_letter","comparison","hindi","logic","sorting"];(e==="math_addition"||e==="math_subtraction"||e==="math_multiplication"||e==="math_division")&&(v=["math"]),e==="math_test"&&(v=["math"]),e==="math_sorting"&&(v=["sorting"]),e==="english_missing_letters"&&(v=["missing_letter"]),e==="english_spelling"&&(v=["spelling"]),e==="spelling_test"&&(v=["spelling","missing_letter"]),e==="hindi_test"&&(v=["hindi"]),e==="logic_test"&&(v=["logic","comparison"]);const W=st();let w=W;x===1?w=W.filter($=>$.length<=4):x===2||x===3?w=W.filter($=>$.length>4&&$.length<=7):w=W.filter($=>$.length>7),w.length===0&&(w=W);const Q=["अ","आ","इ","ई","उ","ऊ","ए","ऐ","ओ","औ","क","ख","ग","घ"],A=["అ","ఆ","ఇ","ఈ","ఉ","ఊ","ఎ","ఏ","ఐ","క","ఖ","గ","ఘ"],O=new Set;for(let $=1;$<=E;$++){let a={},U=0,C="";for(;U<100;){const z=v[Math.floor(Math.random()*v.length)];if(a={id:$,type:z},z==="math"){const n=`LEVEL_${x}`,r=ue[n]||ue.LEVEL_1;let l,c,u="+";if(e==="math_addition")u="+";else if(e==="math_subtraction")u="-";else if(e==="math_multiplication")u="*";else if(e==="math_division")u="/";else{const y=K.length>0?K:["+"];u=y[Math.floor(Math.random()*y.length)]}if(u==="*")l=k(1,r.multMax),c=k(1,r.multMax);else if(u==="/"){const y=Math.min(r.multMax,12);c=k(1,y),l=c*k(1,y),D&&x>=4&&(l+=k(0,c-1))}else if(x===2){const y=Math.random()>.5;l=y?k(1,9):k(10,99),c=y?k(10,99):k(1,9)}else x===3?(l=k(10,99),c=k(10,99)):(l=k(r.min,r.max),c=k(r.min,r.max));let g=l,f=c,b=0;if(u==="+")b=l+c;else if(u==="-")N||(g=Math.max(l,c),f=Math.min(l,c)),b=g-f;else if(u==="*")b=l*c;else if(u==="/")if(D&&x>=4)b=Number((g/f).toFixed(1));else{const y=Math.floor(g/f),B=g%f;b=B===0?y:`Q:${y} R:${B}`}C=`math-${g}${u}${f}`,a.prompt=d.math_solveMath,a.correctAnswer=b.toString();const P=new Set([a.correctAnswer]);for(;P.size<4;){const y=Math.floor(Math.random()*5)+1;if(typeof b=="number")P.add((Math.random()>.5?b+y:Math.max(0,b-y)).toString());else{const B=Math.floor(Math.random()*3)-1,S=Math.floor(Math.random()*3)-1,H=Math.max(0,Math.floor(g/(f||1))+B),j=Math.max(0,g%(f||1)+S);P.add(`Q:${H} R:${j}`)}}a.data={n1:g,n2:f,op:u,optionsStrings:Array.from(P).sort(()=>Math.random()-.5)}}else if(z==="spelling"){const n=re(w).toUpperCase();C=`spelling-${n}`,a.prompt=d.eng_tapTheWord,a.correctAnswer=n;const r=new Set([n]);for(;r.size<4;)r.add(re(w).toUpperCase());a.data={word:n,optionsStrings:Array.from(r).sort(()=>Math.random()-.5)}}else if(z==="missing_letter"){const n=re(w).toUpperCase(),r=Math.floor(Math.random()*n.length),l=n.split(""),c=l[r];l[r]="_",C=`missing-${n}-${r}`,a.prompt=d.eng_chooseMissing,a.correctAnswer=c;const u="ABCDEFGHIJKLMNOPQRSTUVWXYZ",g=new Set([c]);for(;g.size<4;)g.add(u[Math.floor(Math.random()*26)]);a.data={displayWord:l.join(""),word:n,optionsStrings:Array.from(g).sort(()=>Math.random()-.5)}}else if(z==="comparison"){const n=[];let r=20;for((x===2||x===3)&&(r=50),x===4&&(r=1e3);n.length<4;){const c=Math.floor(Math.random()*r);n.includes(c)||n.push(c)}const l=Math.random()>.5;C=`comp-${n.sort().join(",")}-${l}`,a.prompt=l?d.math_smallestNumber:d.math_biggestNumber,a.correctAnswer=l?Math.min(...n).toString():Math.max(...n).toString(),a.data={optionsStrings:n.map(String)}}else if(z==="logic"){const n=[{sequence:["🍎","🍌","🍎"],next:"🍌"},{sequence:["🐶","🐱","🐶"],next:"🐱"},{sequence:["1","2","1"],next:"2"},{sequence:["⭐","🌙","⭐"],next:"🌙"},{sequence:["🔴","🔵","🔴"],next:"🔵"},{sequence:["🚗","🚕","🚗"],next:"🚕"},{sequence:["🍦","🍩","🍦"],next:"🍩"},{sequence:["🛸","🚀","🛸"],next:"🚀"},{sequence:["🍎","🍎","🍌"],next:"🍌"},{sequence:["1","3","5"],next:"7"},{sequence:["A","B","A"],next:"B"},{sequence:["🔼","🔽","🔼"],next:"🔽"},{sequence:["🟢","🟡","🟢"],next:"🟡"},{sequence:["10","20","30"],next:"40"},{sequence:["M","N","M"],next:"N"},{sequence:["🦁","🐯","🦁"],next:"🐯"}],r=n[Math.floor(Math.random()*n.length)];C=`logic-${r.sequence.join("")}`,a.prompt=d.log_whatNext,a.correctAnswer=r.next;const l=new Set([r.next]);for(;l.size<4;){const c=n[Math.floor(Math.random()*n.length)].next;l.add(c)}a.data={displayWord:r.sequence.join(" ")+" ?",optionsStrings:Array.from(l).sort(()=>Math.random()-.5)}}else if(z==="hindi"){const n=Q[Math.floor(Math.random()*Q.length)];C=`hindi-${n}`,a.prompt=d.hindi_tapLetter,a.correctAnswer=n;const r=new Set([n]);for(;r.size<4;)r.add(Q[Math.floor(Math.random()*Q.length)]);a.data={letter:n,optionsStrings:Array.from(r).sort(()=>Math.random()-.5)}}else if(z==="telugu"){const n=A[Math.floor(Math.random()*A.length)];C=`telugu-${n}`,a.prompt=d.tel_tapLetter,a.correctAnswer=n;const r=new Set([n]);for(;r.size<4;)r.add(A[Math.floor(Math.random()*A.length)]);a.data={letter:n,optionsStrings:Array.from(r).sort(()=>Math.random()-.5)}}else if(z==="sorting"){const n=[];let r=3,l=10;for((x===2||x===3)&&(r=4,l=20),x===4&&(r=5,l=50);n.length<r;){const f=Math.floor(Math.random()*l)+1;n.includes(f)||n.push(f)}const c=Math.random()>.5;C=`sort-${n.sort().join(",")}-${c}`,a.prompt=c?d.math_sortAsc:d.math_sortDesc;const u=c?[...n].sort((f,b)=>f-b):[...n].sort((f,b)=>b-f);a.correctAnswer=u.join(", ");const g=new Set([a.correctAnswer]);for(;g.size<4;){const f=[...n].sort(()=>Math.random()-.5);g.add(f.join(", "))}a.data={displayWord:n.join("  •  "),optionsStrings:Array.from(g).sort(()=>Math.random()-.5)}}if(!O.has(C)){O.add(C);break}U++}G.push(a)}return G},le=e=>{if(e.type==="math"){const x={"+":"plus","-":"minus","*":"times","/":"divided by"};return`What is ${e.data.n1} ${x[e.data.op||"+"]} ${e.data.n2}?`}return e.type==="missing_letter"?`What is the missing letter in the word ${e.data.word}?`:e.type==="hindi"||e.type==="telugu"?e.data.letter||e.correctAnswer:e.data.word||e.data.letter||e.prompt},ei=(e,x)=>{const N=e/x;return N===1?"GRAND MASTER":N>=.9?"LEGEND":N>=.8?"PRODIGY":"KIDDOO HERO"},ji=()=>{const{testId:e}=Pe(),x=Fe(),N=Ge(),D=Ue(i=>i.alphabet.user),[d,K]=p.useState([]),[E,G]=p.useState({}),[v,W]=p.useState(!1),[w,Q]=p.useState(0),[A,O]=p.useState(0),[$,a]=p.useState(!1),[U,C]=p.useState(!1),[z,n]=p.useState(!1),[r,l]=p.useState(!1),[c,u]=p.useState(1),[g,f]=p.useState(!1),[b,P]=p.useState(!1),[y,B]=p.useState(!1),[S,H]=p.useState(0),[j,Me]=p.useState(0),[T,ke]=p.useState("math_test"),[R,ze]=p.useState(["+"]),[J,Te]=p.useState(10),V=T==="master_test",s=Ze.en,Ae=[{id:"math_test",label:"Math",icon:t.jsx(at,{size:18}),color:"#6366F1"},{id:"spelling_test",label:"English",icon:t.jsx(lt,{size:18}),color:"#6366F1"},{id:"hindi_test",label:"Hindi",icon:t.jsx(Se,{size:18}),color:"#6366F1"},{id:"logic_test",label:"Logic",icon:t.jsx(be,{size:18}),color:"#6366F1"},{id:"master_test",label:"Grand Master",icon:t.jsx(pe,{size:18}),color:"#6366F1"}],q=se.useMemo(()=>[{value:1,label:s.diff_beginner,info:"Numbers 1-10"},{value:2,label:s.diff_explorer,info:"One single & one double digit"},{value:3,label:s.diff_achiever,info:"Two double digits (10-99)"},{value:4,label:s.diff_master,info:"3-digit numbers (100-999)"},{value:5,label:s.diff_elite,info:"4-digit numbers (1000-9999)"}],[s]),Re=se.useMemo(()=>[{value:0,label:s.test_noLimit,info:s.test_timeLimitInfo.none},{value:30,label:s.test_time30s,info:s.test_timeLimitInfo.s30},{value:60,label:s.test_time1m,info:s.test_timeLimitInfo.m1},{value:120,label:s.test_time2m,info:s.test_timeLimitInfo.m2},{value:180,label:s.test_time3m,info:s.test_timeLimitInfo.m3},{value:240,label:s.test_time4m,info:s.test_timeLimitInfo.m4},{value:300,label:s.test_time5m,info:s.test_timeLimitInfo.m5}],[s]),Le=se.useMemo(()=>[{value:10,label:"10 Questions",info:"Perfect for a quick practice"},{value:15,label:"15 Questions",info:"A bit more challenging"},{value:20,label:"20 Questions",info:"Testing your endurance"},{value:25,label:"25 Questions",info:"The ultimate challenge"},{value:50,label:"50 Questions",info:"The Grand Master's Marathon"}],[]),Ie=()=>[s.test_qCount,s.test_selectBest,s.test_timeRecorded,s.test_scoreForCert],Z=p.useCallback(()=>{if(V)return s.mst_grandMaster;switch(T){case"math_addition":return s.math_addition;case"math_subtraction":return s.math_subtraction;case"math_multiplication":return s.math_multiplication;case"math_division":return s.math_division;case"math_test":return s.math_mathHero;case"math_sorting":return s.math_sorting;case"english_missing_letters":return s.eng_missingLetters;case"english_spelling":return s.eng_listenAndFind;case"spelling_test":return s.eng_spellingHero;case"hindi_test":return s.hindi_hindiLegend;case"logic_test":return s.log_grandLogic;default:return s.com_tryAgain}},[V,s,T]),Ne=p.useCallback(()=>{const i=[Z()],h=q.find(m=>m.value===c);if(h&&i.push(h.label),(T==="math_test"||V)&&R.length>0){const m=R.map(L=>L==="+"?"Add":L==="-"?"Sub":L==="*"?"Mult":L==="/"?"Div":L);i.push(m.join(", "))}return i.join(" • ")},[Z,q,c,T,V,R]),ee=p.useCallback(()=>{const i=qt(T,c,g,b,s,R,J);K(i),G({}),W(!1),C(!1),a(!1),Q(0),O(0),H(0),window.scrollTo({top:0,behavior:"smooth"})},[T,s,c,g,b,R,J]),te=p.useCallback(()=>{let i=0;d.forEach(m=>{var L;((L=E[m.id])==null?void 0:L.trim().toUpperCase())===m.correctAnswer.trim().toUpperCase()&&i++}),Q(i),W(!0);const h=d.length*.8;i>=h&&(qe({particleCount:150,spread:70,origin:{y:.6}}),N(He("master_test"))),D&&Je({userId:D.uid,testId:T,testTitle:Z(),score:i,totalQuestions:d.length,timeTaken:S,category:T,difficulty:c}).catch(m=>console.error("Failed to save test result:",m))},[d,E,N,D,T,c,S,Z]);p.useEffect(()=>{ee()},[ee]),p.useEffect(()=>{let i;return y&&!v&&(i=setInterval(()=>{H(h=>{const m=h+1;return j>0&&m>=j?(clearInterval(i),te(),j):m})},1e3)),()=>clearInterval(i)},[y,v,j,te]);const ie=d[A],We=(i,h)=>{G(m=>({...m,[i]:h}))},Ee=()=>{B(!0),H(0)},ce=()=>{A<d.length-1?(O(i=>i+1),window.scrollTo({top:0,behavior:"smooth"})):te()},Qe=()=>{A>0&&O(i=>i-1)},Be=i=>{if(!i)return null;const h=E[i.id]||"";return t.jsxs(pt,{$type:i.type,children:[t.jsx(ht,{children:t.jsx(xt,{initial:{width:0},animate:{width:`${(A+1)/d.length*100}%`},transition:{type:"spring",stiffness:100}})}),t.jsx(gt,{children:t.jsxs(ft,{children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[t.jsxs(ut,{children:[s.test_question," ",i.id," ",s.test_of," ",d.length]}),t.jsxs(yt,{children:[t.jsx(we,{size:14}),Math.floor(S/60),":",(S%60).toString().padStart(2,"0"),j>0&&t.jsxs("span",{style:{fontSize:"0.6rem",opacity:.6,marginLeft:"4px"},children:["/ ",Math.floor(j/60),":",(j%60).toString().padStart(2,"0")]})]})]}),t.jsx(wt,{children:Ne()})]})}),t.jsx(bt,{$type:i.type,children:i.type.replace("_"," ")}),i.type!=="math"&&t.jsxs(jt,{children:[t.jsxs(zt,{children:[i.type==="spelling"&&t.jsx(rt,{size:40}),i.type==="missing_letter"&&t.jsx(ae,{size:40}),i.type==="comparison"&&t.jsx(ct,{size:40}),i.type==="hindi"&&t.jsx(Se,{size:40}),i.type==="logic"&&t.jsx(be,{size:40}),i.type==="sorting"&&t.jsx(dt,{size:40})]}),t.jsx(Tt,{fontSize:"clamp(1.2rem, 4vw, 1.75rem)",fontWeight:900,color:"textPrimary",children:i.prompt})]}),t.jsxs(vt,{children:[i.type==="math"&&i.data&&t.jsxs(X,{onClick:()=>fe(le(i),i.type==="hindi"?"hi-IN":i.type==="telugu"?"te-IN":"en-US"),children:[i.data.n1??0," ",i.data.op??"+"," ",i.data.n2??0]}),(i.type==="spelling"||i.type==="hindi"||i.type==="telugu")&&i.data&&t.jsx(At,{children:t.jsx(M,{color:"textSecondary",fontSize:"md",fontWeight:600,children:s.eng_tapSpeaker})}),i.type==="missing_letter"&&i.data&&t.jsx(X,{onClick:()=>fe(le(i),i.type==="hindi"?"hi-IN":i.type==="telugu"?"te-IN":"en-US"),children:i.data.displayWord}),i.type==="logic"&&i.data&&t.jsx(St,{children:i.data.displayWord}),i.type==="sorting"&&i.data&&t.jsx(X,{$fontSize:"clamp(2rem, 8vw, 4rem)",children:i.data.displayWord}),i.data.optionsStrings&&t.jsx(_t,{$isLong:i.data.optionsStrings.some(m=>m.length>12),children:i.data.optionsStrings.map((m,L)=>t.jsx($t,{$selected:h===m,$color:I.primary,onClick:()=>We(i.id,m),whileTap:{scale:.95},children:m},L))}),t.jsxs(Xe,{children:[t.jsx(tt,{onClick:Qe}),t.jsx(et,{text:le(i),lang:i.type==="hindi"?"hi-IN":i.type==="telugu"?"te-IN":"en-US"}),A===d.length-1?t.jsx(F,{title:s.com_finish.toUpperCase(),onClick:ce,variant:"primary",minWidth:"180px"}):t.jsx(it,{onClick:ce})]})]})]})};return t.jsxs(Ve,{children:[t.jsxs(Ye,{children:[!y&&!v&&t.jsx("div",{style:{gridColumn:"1 / -1",width:"100%"},children:t.jsxs(Gt,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{type:"spring",damping:20},children:[t.jsx(Yt,{fontSize:"2xl",fontWeight:900,children:"Ready for a Challenge? Let's Go!"}),t.jsxs(Vt,{children:[t.jsx(Ce,{children:"Choose Your Subject"}),t.jsx(Kt,{children:Ae.map(i=>t.jsxs(Zt,{$active:T===i.id,$color:i.color,onClick:()=>ke(i.id),whileHover:{scale:1.05},whileTap:{scale:.95},children:[i.icon,i.label]},i.id))}),(T==="math_test"||V)&&t.jsxs(t.Fragment,{children:[t.jsx(Ce,{children:"Included Operations"}),t.jsx(Xt,{children:[{symbol:"+",label:s.math_addition},{symbol:"-",label:s.math_subtraction},{symbol:"*",label:s.math_multiplication,display:"×"},{symbol:"/",label:s.math_division,display:"÷"}].map(i=>t.jsxs(Jt,{$active:R.includes(i.symbol),onClick:()=>ze(h=>h.includes(i.symbol)?h.filter(m=>m!==i.symbol):[...h,i.symbol]),whileHover:{scale:1.02},whileTap:{scale:.98},children:[t.jsx("span",{className:"symbol",children:i.display||i.symbol}),t.jsx("span",{className:"label",children:i.label})]},i.symbol))}),(R.includes("-")||R.includes("/"))&&t.jsxs("div",{style:{display:"flex",gap:"24px",flexWrap:"wrap",marginTop:"16px",marginBottom:"16px"},children:[R.includes("-")&&t.jsxs(de,{children:[t.jsx(me,{type:"checkbox",checked:g,onChange:i=>f(i.target.checked)}),t.jsx("span",{style:{fontWeight:700,fontSize:"0.9rem"},children:s.com_allowNegative})]}),R.includes("/")&&t.jsxs(de,{children:[t.jsx(me,{type:"checkbox",checked:b,onChange:i=>P(i.target.checked)}),t.jsx("span",{style:{fontWeight:700,fontSize:"0.9rem"},children:s.com_allowDecimals})]})]})]}),t.jsx(ne,{title:"Difficulty",options:q,currentValue:c,onChange:i=>u(i),name:"test_complexity"}),t.jsx(ne,{title:"Number of Questions",options:Le,currentValue:J,onChange:i=>Te(i),name:"test_question_count"}),t.jsx(ne,{title:"Target Time",options:Re,currentValue:j,onChange:i=>Me(i),name:"test_target_time"})]}),t.jsxs("div",{style:{width:"100%",marginTop:"32px",borderTop:`1px solid ${I.primary}10`,paddingTop:"24px"},children:[t.jsx(Ft,{children:s.test_instructions}),t.jsx(Ut,{children:Ie().map((i,h)=>t.jsxs(Ht,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:h*.1},children:[t.jsx(ye,{size:18,color:"#10B981"}),t.jsx(M,{fontSize:"md",fontWeight:600,color:"textPrimary",children:i})]},h))})]}),t.jsx("div",{style:{marginTop:"24px",width:"100%"},children:t.jsx(F,{title:s.test_start,onClick:Ee,variant:"primary",width:"100%",size:"lg"})})]})}),y&&!v&&t.jsx("div",{style:{gridColumn:"1 / -1",width:"100%"},children:t.jsx(mt,{children:t.jsx(oe,{mode:"wait",children:ie&&t.jsx(Ot,{initial:{x:50,opacity:0},animate:{x:0,opacity:1},exit:{x:-50,opacity:0},transition:{type:"spring",damping:20,stiffness:100},children:Be(ie)},ie.id)})})})]}),v&&t.jsxs(Ct,{initial:{opacity:0},animate:{opacity:1},children:[!U&&!$&&t.jsxs(Rt,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},children:[t.jsx(_.div,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",damping:10},children:t.jsx(pe,{size:120,color:w>=8?I.gold:I.slate})}),t.jsxs(Nt,{fontSize:"4rem",fontWeight:900,color:"primary",children:[w," / ",d.length]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",fontSize:"1.5rem",fontWeight:"bold",color:I.textSecondary,marginBottom:"20px"},children:[t.jsx(we,{size:24}),s.com_time||"Time",": ",Math.floor(S/60),":",(S%60).toString().padStart(2,"0")]}),t.jsx(Lt,{$score:w,initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.3},children:ei(w,d.length)}),j>0&&S>=j&&t.jsx("div",{style:{color:"#EF4444",fontWeight:900,fontSize:"1.2rem",marginTop:"10px"},children:"⏰ TIME'S UP!"}),t.jsx(Wt,{fontSize:"2rem",fontWeight:800,children:w>=d.length*.8?s.com_genius:s.com_goodEffort}),t.jsx(Et,{fontSize:"lg",color:"textSecondary",children:w>=d.length*.8?s.com_masteredCurriculum:s.test_keepPracticing}),j>0&&t.jsxs("div",{style:{marginTop:"15px",padding:"10px 20px",borderRadius:"12px",background:S<=j?`${I.success}15`:`${I.warning}15`,color:S<=j?I.successDark:I.goldDark,fontWeight:700,fontSize:"0.9rem",display:"flex",alignItems:"center",gap:"8px"},children:[S<=j?t.jsx(ot,{size:18}):t.jsx(je,{size:18}),S<=j?s.test_beatenTarget:s.test_timeExceeded]}),t.jsxs($e,{children:[w>=8&&t.jsx(F,{title:s.com_getCertificate,onClick:()=>a(!0),variant:"primary"}),t.jsx(F,{title:"Options ▾",onClick:()=>n(!z),variant:"secondary",icon:t.jsx(he,{size:20})}),t.jsx(oe,{children:z&&t.jsxs(t.Fragment,{children:[t.jsx(xe,{onClick:()=>n(!1)}),t.jsxs(ge,{initial:{opacity:0,y:10,scale:.9},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:10,scale:.9},children:[t.jsxs(Y,{onClick:()=>{C(!0),n(!1)},children:[t.jsx(ae,{size:18})," ",s.com_reviewAnswers]}),t.jsxs(Y,{onClick:()=>{ee(),B(!1),n(!1)},children:[t.jsx(je,{size:18})," ",s.com_tryAgain]}),t.jsxs(Y,{onClick:()=>{x("/"),n(!1)},children:[t.jsx(ve,{size:18})," ",s.com_home]})]})]})})]})]}),U&&!$&&t.jsxs(Qt,{initial:{x:50,opacity:0},animate:{x:0,opacity:1},children:[t.jsx(It,{fontSize:"2rem",fontWeight:900,color:"primary",children:s.com_testReview}),t.jsx(Bt,{color:"textSecondary",children:s.com_seeWhatLearned}),t.jsx(Mt,{children:d.map(i=>{var m;const h=((m=E[i.id])==null?void 0:m.trim().toUpperCase())===i.correctAnswer.trim().toUpperCase();return t.jsxs(kt,{$correct:h,children:[t.jsxs(Dt,{children:[t.jsxs(M,{fontSize:"md",fontWeight:800,color:"textPrimary",children:["Question ",i.id,": ",i.prompt]}),h?t.jsx(ye,{color:"#10B981",size:24}):t.jsx(nt,{color:"#F59E0B",size:24})]}),t.jsxs(_e,{children:[t.jsx(M,{fontSize:"sm",color:"textSecondary",children:s.com_yourAnswer}),t.jsx(M,{fontSize:"sm",fontWeight:700,color:h?"success":"warning",children:E[i.id]||"(No answer)"})]}),!h&&t.jsxs(_e,{children:[t.jsx(M,{fontSize:"sm",color:"textSecondary",children:s.com_correctAnswer}),t.jsx(M,{fontSize:"sm",fontWeight:700,color:"success",children:i.correctAnswer})]})]},i.id)})}),t.jsxs($e,{children:[w>=8&&t.jsx(F,{title:s.com_getCertificate,onClick:()=>a(!0),variant:"primary"}),t.jsx(F,{title:"Options ▾",onClick:()=>l(!r),variant:"secondary",icon:t.jsx(he,{size:20})}),t.jsx(oe,{children:r&&t.jsxs(t.Fragment,{children:[t.jsx(xe,{onClick:()=>l(!1)}),t.jsxs(ge,{initial:{opacity:0,y:10,scale:.9},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:10,scale:.9},children:[t.jsxs(Y,{onClick:()=>{C(!1),l(!1)},children:[t.jsx(ae,{size:18})," ",s.com_backToScore]}),t.jsxs(Y,{onClick:()=>{x("/"),l(!1)},children:[t.jsx(ve,{size:18})," ",s.com_home]})]})]})})]})]}),$&&t.jsx(Pt,{children:t.jsx(Ke,{onClose:()=>a(!1),challengeName:(e==null?void 0:e.replace("_"," ").toUpperCase())||"Master Test",score:w,level:"Genius",timeTaken:`${Math.floor(S/60)}:${(S%60).toString().padStart(2,"0")}`})})]})]})};export{ji as default};

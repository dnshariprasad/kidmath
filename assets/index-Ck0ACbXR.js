import{i as s,p as k,q as ke,K as j,al as Me,j as ze,l as Te,x as g,a6 as ne,a1 as Ae,n as t,P as We,G as Re,T as G,a7 as se,a8 as oe,v as P,A as X,a3 as R,Z as Le,am as re,an as ae,ao as O,ap as Ne,a2 as Ee,N as Ie}from"./index-BievBFI0.js";import{c as De}from"./confetti.module-ONDKWxYZ.js";import{S as Pe}from"./SpeakIcon-QSuGvxLj.js";import{P as Be,N as Oe}from"./PreviousIcon-gpxnPIFa.js";import{D as le}from"./DifficultyPicker-CS0FpUlR.js";import{C as Qe}from"./ChallengeHeader-B5LRwc2G.js";import{r as ce}from"./index-CFRl78vb.js";import{g as Ue,b as J}from"./wordUtils-DPgh885X.js";import{b as C,M as de}from"./mathUtils-B1Q27TTV.js";import{B as me,T as q,R as pe,C as he,H as xe}from"./timer-8SzwZ9bc.js";import{C as ge}from"./circle-check-DbYesoKv.js";import{S as ee}from"./search-Bx6lR24B.js";import{C as Fe,S as Ge}from"./spell-check-BCyxFm2l.js";import{S as He}from"./scale-r5FeuPQQ.js";import{L as Ve}from"./languages-GT8AMUY_.js";import{A as Ke}from"./arrow-up-down-Di7qceQQ.js";import"./info-DQXGkS7g.js";s.div`
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
`;s(k.div)`
  height: 100%;
  background: ${e=>e.theme.colors.primary};
  border-radius: 4px;
`;const Ye=s.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding-bottom: 80px;
`,Ze=s(ke)`
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
`,Xe=s.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  background: ${e=>e.theme.colors.primary}15;
`,Je=s(k.div)`
  height: 100%;
  background: ${e=>e.theme.colors.primary};
`,qe=s.div`
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
`,et=s.div`
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
`,tt=s.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 40px;

  @media (max-width: 480px) {
    flex-direction: column;
    text-align: center;
    gap: 8px;
  }
`,it=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  padding: 15px 0;

  @media (max-width: 600px) {
    gap: 30px;
    padding: 15px 0;
  }
`,H=s.div`
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
`,nt=s(H)`
  font-size: clamp(1.8rem, 4vw, 3rem);
  letter-spacing: 12px;
`,st=s.div`
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
`,ot=s(k.div)`
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
`;const rt=s(k.div)`
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
`,at=s.div`
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
`,lt=s.div`
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
`,fe=s.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;
`,ct=s.div`
  color: ${e=>e.theme.colors.primary};
`,dt=s(j)`
  text-align: center;
`,mt=s.div`
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
`;const pt=s(k.div)`
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
`,ht=s(k.div)`
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
`,xt=s(j)`
  margin-bottom: 10px;
`,gt=s(j)`
  margin: 15px 0;
`,ft=s(j)`
  margin-bottom: 10px;
`,ut=s(j)`
  margin-bottom: 25px;
  max-width: 500px;
`,ue=s.div`
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
`,yt=s(k.div)`
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
`,wt=s(j)`
  margin-bottom: 20px;
`,bt=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;s.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
`;const jt=s(k.div)`
  width: 100%;
`,vt=s.div`
  position: fixed;
  inset: 0;
  z-index: 3000;
  background: white;
`,_t=s.div`
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
`,St=s(k.div)`
  width: 80px;
  height: 80px;
  border-radius: 24px;
  background: ${e=>e.theme.colors.primary}15;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e=>e.theme.colors.primary};
  flex-shrink: 0;
`,$t=s(k.div)`
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
`,Ct=s.div`
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
`;const kt=s(k.div)`
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
`,Mt=s.div`
  margin-top: ${e=>e.$minimal?"0":"50px"};
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-top: ${e=>e.$minimal?"0":"40px"};
  border-top: ${e=>e.$minimal?"none":`2px dashed ${e.theme.colors.primary}15`};
  width: 100%;
`;s(j)`
  margin-bottom: -15px;
  text-align: center;
  opacity: 0.6;
  letter-spacing: 2px;
`;const zt=(e,m,Q,W,M)=>{const L=[];let S=["math","spelling","missing_letter","comparison","hindi","logic","sorting"];(e==="math_addition"||e==="math_subtraction"||e==="math_multiplication"||e==="math_division")&&(S=["math"]),e==="math_test"&&(S=["math","comparison","sorting"]),e==="math_sorting"&&(S=["sorting"]),e==="english_missing_letters"&&(S=["missing_letter"]),e==="english_spelling"&&(S=["spelling"]),e==="spelling_test"&&(S=["spelling","missing_letter"]),e==="hindi_test"&&(S=["hindi"]),e==="logic_test"&&(S=["logic","comparison"]);const z=Ue();let T=z;m===1?T=z.filter(u=>u.length<=4):m===2||m===3?T=z.filter(u=>u.length>4&&u.length<=7):T=z.filter(u=>u.length>7),T.length===0&&(T=z);const v=["अ","आ","इ","ई","उ","ऊ","ए","ऐ","ओ","औ","क","ख","ग","घ"],B=new Set;for(let u=1;u<=10;u++){let l={},N=0,_="";for(;N<100;){const A=S[Math.floor(Math.random()*S.length)];if(l={id:u,type:A},A==="math"){const o=`LEVEL_${m}`,r=de[o]||de.LEVEL_1;let a,c,d="+";if(e==="math_addition")d="+";else if(e==="math_subtraction")d="-";else if(e==="math_multiplication")d="*";else if(e==="math_division")d="/";else{const x=["+","-"];(e==="math_test"||!e||e==="math_multiplication"||e==="math_division")&&m>=2&&(x.push("*"),m>=3&&x.push("/")),d=x[Math.floor(Math.random()*x.length)]}if(d==="*")a=C(1,r.multMax),c=C(1,r.multMax);else if(d==="/"){const x=Math.min(r.multMax,12);c=C(1,x),a=c*C(1,x),W&&m>=4&&(a+=C(0,c-1))}else if(m===2){const x=Math.random()>.5;a=x?C(1,9):C(10,99),c=x?C(10,99):C(1,9)}else m===3?(a=C(10,99),c=C(10,99)):(a=C(r.min,r.max),c=C(r.min,r.max));let p=a,h=c,f=0;if(d==="+")f=a+c;else if(d==="-")Q||(p=Math.max(a,c),h=Math.min(a,c)),f=p-h;else if(d==="*")f=a*c;else if(d==="/")if(W&&m>=4)f=Number((p/h).toFixed(1));else{const x=Math.floor(p/h),I=p%h;f=I===0?x:`Q:${x} R:${I}`}_=`math-${p}${d}${h}`,l.prompt=M.math_solveMath,l.correctAnswer=f.toString();const E=new Set([l.correctAnswer]);for(;E.size<4;){const x=Math.floor(Math.random()*5)+1;if(typeof f=="number")E.add((Math.random()>.5?f+x:Math.max(0,f-x)).toString());else{const I=Math.floor(Math.random()*3)-1,D=Math.floor(Math.random()*3)-1,U=Math.max(0,Math.floor(p/(h||1))+I),$=Math.max(0,p%(h||1)+D);E.add(`Q:${U} R:${$}`)}}l.data={n1:p,n2:h,op:d,optionsStrings:Array.from(E).sort(()=>Math.random()-.5)}}else if(A==="spelling"){const o=J(T).toUpperCase();_=`spelling-${o}`,l.prompt=M.eng_tapTheWord,l.correctAnswer=o;const r=new Set([o]);for(;r.size<4;)r.add(J(T).toUpperCase());l.data={word:o,optionsStrings:Array.from(r).sort(()=>Math.random()-.5)}}else if(A==="missing_letter"){const o=J(T).toUpperCase(),r=Math.floor(Math.random()*o.length),a=o.split(""),c=a[r];a[r]="_",_=`missing-${o}-${r}`,l.prompt=M.eng_chooseMissing,l.correctAnswer=c;const d="ABCDEFGHIJKLMNOPQRSTUVWXYZ",p=new Set([c]);for(;p.size<4;)p.add(d[Math.floor(Math.random()*26)]);l.data={displayWord:a.join(""),word:o,optionsStrings:Array.from(p).sort(()=>Math.random()-.5)}}else if(A==="comparison"){const o=[];let r=20;for((m===2||m===3)&&(r=50),m===4&&(r=1e3);o.length<4;){const c=Math.floor(Math.random()*r);o.includes(c)||o.push(c)}const a=Math.random()>.5;_=`comp-${o.sort().join(",")}-${a}`,l.prompt=a?M.math_smallestNumber:M.math_biggestNumber,l.correctAnswer=a?Math.min(...o).toString():Math.max(...o).toString(),l.data={optionsStrings:o.map(String)}}else if(A==="logic"){const o=[{sequence:["🍎","🍌","🍎"],next:"🍌"},{sequence:["🐶","🐱","🐶"],next:"🐱"},{sequence:["1","2","1"],next:"2"},{sequence:["⭐","🌙","⭐"],next:"🌙"},{sequence:["🔴","🔵","🔴"],next:"🔵"},{sequence:["🚗","🚕","🚗"],next:"🚕"},{sequence:["🍦","🍩","🍦"],next:"🍩"},{sequence:["🛸","🚀","🛸"],next:"🚀"},{sequence:["🍎","🍎","🍌"],next:"🍌"},{sequence:["1","3","5"],next:"7"},{sequence:["A","B","A"],next:"B"},{sequence:["🔼","🔽","🔼"],next:"🔽"},{sequence:["🟢","🟡","🟢"],next:"🟡"},{sequence:["10","20","30"],next:"40"},{sequence:["M","N","M"],next:"N"},{sequence:["🦁","🐯","🦁"],next:"🐯"}],r=o[Math.floor(Math.random()*o.length)];_=`logic-${r.sequence.join("")}`,l.prompt=M.log_whatNext,l.correctAnswer=r.next;const a=new Set([r.next]);for(;a.size<4;){const c=o[Math.floor(Math.random()*o.length)].next;a.add(c)}l.data={displayWord:r.sequence.join(" ")+" ?",optionsStrings:Array.from(a).sort(()=>Math.random()-.5)}}else if(A==="hindi"){const o=v[Math.floor(Math.random()*v.length)];_=`hindi-${o}`,l.prompt=M.hindi_tapLetter,l.correctAnswer=o;const r=new Set([o]);for(;r.size<4;)r.add(v[Math.floor(Math.random()*v.length)]);l.data={letter:o,optionsStrings:Array.from(r).sort(()=>Math.random()-.5)}}else if(A==="sorting"){const o=[];let r=3,a=10;for((m===2||m===3)&&(r=4,a=20),m===4&&(r=5,a=50);o.length<r;){const h=Math.floor(Math.random()*a)+1;o.includes(h)||o.push(h)}const c=Math.random()>.5;_=`sort-${o.sort().join(",")}-${c}`,l.prompt=c?M.math_sortAsc:M.math_sortDesc;const d=c?[...o].sort((h,f)=>h-f):[...o].sort((h,f)=>f-h);l.correctAnswer=d.join(", ");const p=new Set([l.correctAnswer]);for(;p.size<4;){const h=[...o].sort(()=>Math.random()-.5);p.add(h.join(", "))}l.data={displayWord:o.join("  •  "),optionsStrings:Array.from(p).sort(()=>Math.random()-.5)}}if(!B.has(_)){B.add(_);break}N++}L.push(l)}return L},te=e=>{if(e.type==="math"){const m={"+":"plus","-":"minus","*":"times","/":"divided by"};return`What is ${e.data.n1} ${m[e.data.op||"+"]} ${e.data.n2}?`}return e.type==="missing_letter"?`What is the missing letter in the word ${e.data.word}?`:e.data.word||e.data.letter||e.prompt},Tt=e=>e===10?"GRAND MASTER":e===9?"LEGEND":e===8?"PRODIGY":"KIDDOO HERO",Kt=()=>{const{testId:e}=Me(),m=ze(),Q=Te(),[W,M]=g.useState([]),[L,S]=g.useState({}),[z,T]=g.useState(!1),[v,B]=g.useState(0),[u,l]=g.useState(0),[N,_]=g.useState(!1),[A,o]=g.useState(!1),[r,a]=g.useState(!1),[c,d]=g.useState(!1),[p,h]=g.useState(1),[f,E]=g.useState(!1),[x,I]=g.useState(!1),[D,U]=g.useState(!1),[$,V]=g.useState(0),[b,ye]=g.useState(0),F=e==="master_test"||!e,n=Ee.en,we=ne.useMemo(()=>[{value:1,label:n.diff_beginner,info:"Numbers 1-10"},{value:2,label:n.diff_explorer,info:"One single & one double digit"},{value:3,label:n.diff_achiever,info:"Two double digits (10-99)"},{value:4,label:n.diff_master,info:"3-digit numbers (100-999)"},{value:5,label:n.diff_elite,info:"4-digit numbers (1000-9999)"}],[n]),be=ne.useMemo(()=>[{value:0,label:n.test_noLimit,info:n.test_timeLimitInfo.none},{value:30,label:n.test_time30s,info:n.test_timeLimitInfo.s30},{value:60,label:n.test_time1m,info:n.test_timeLimitInfo.m1},{value:120,label:n.test_time2m,info:n.test_timeLimitInfo.m2},{value:180,label:n.test_time3m,info:n.test_timeLimitInfo.m3},{value:240,label:n.test_time4m,info:n.test_timeLimitInfo.m4},{value:300,label:n.test_time5m,info:n.test_timeLimitInfo.m5}],[n]),je=()=>{if(F)return n.mst_grandMaster;switch(e){case"math_addition":return n.math_addition;case"math_subtraction":return n.math_subtraction;case"math_multiplication":return n.math_multiplication;case"math_division":return n.math_division;case"math_test":return n.math_mathHero;case"math_sorting":return n.math_sorting;case"english_missing_letters":return n.eng_missingLetters;case"english_spelling":return n.eng_listenAndFind;case"spelling_test":return n.eng_spellingHero;case"hindi_test":return n.hindi_hindiLegend;case"logic_test":return n.log_grandLogic;default:return n.com_tryAgain}},K=g.useCallback(()=>{const i=zt(e,p,f,x,n);M(i),S({}),T(!1),o(!1),_(!1),B(0),l(0),V(0),window.scrollTo({top:0,behavior:"smooth"})},[e,n,p,f,x]),Y=g.useCallback(()=>{let i=0;W.forEach(y=>{var w;((w=L[y.id])==null?void 0:w.trim().toUpperCase())===y.correctAnswer.trim().toUpperCase()&&i++}),B(i),T(!0),i>=8&&(De({particleCount:150,spread:70,origin:{y:.6}}),Q(Ae("master_test")))},[W,L,Q]);g.useEffect(()=>{K()},[K]),g.useEffect(()=>{let i;return D&&!z&&(i=setInterval(()=>{V(y=>{const w=y+1;return b>0&&w>=b?(clearInterval(i),Y(),b):w})},1e3)),()=>clearInterval(i)},[D,z,b,Y]);const Z=W[u],ve=(i,y)=>{S(w=>({...w,[i]:y}))},_e=()=>{U(!0),V(0)},ie=()=>{u<W.length-1?(l(i=>i+1),window.scrollTo({top:0,behavior:"smooth"})):Y()},Se=()=>{u>0&&l(i=>i-1)},$e=i=>{if(!i)return null;const y=L[i.id]||"";return t.jsxs(Ze,{$type:i.type,children:[t.jsx(Xe,{children:t.jsx(Je,{initial:{width:0},animate:{width:`${(u+1)/10*100}%`},transition:{type:"spring",stiffness:100}})}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[t.jsxs(qe,{children:[n.test_question," ",i.id," ",n.test_of," 10"]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",color:R.primary,fontWeight:"bold",marginTop:"20px"},children:[t.jsx(q,{size:18}),Math.floor($/60),":",($%60).toString().padStart(2,"0"),b>0&&t.jsxs("span",{style:{fontSize:"0.8rem",opacity:.6,marginLeft:"4px"},children:["/ ",Math.floor(b/60),":",(b%60).toString().padStart(2,"0")]})]})]}),t.jsx(et,{$type:i.type,children:i.type.replace("_"," ")}),i.type!=="math"&&t.jsxs(tt,{children:[t.jsxs(ct,{children:[i.type==="spelling"&&t.jsx(Ge,{size:40}),i.type==="missing_letter"&&t.jsx(ee,{size:40}),i.type==="comparison"&&t.jsx(He,{size:40}),i.type==="hindi"&&t.jsx(Ve,{size:40}),i.type==="logic"&&t.jsx(me,{size:40}),i.type==="sorting"&&t.jsx(Ke,{size:40})]}),t.jsx(dt,{fontSize:"clamp(1.2rem, 4vw, 1.75rem)",fontWeight:900,color:"textPrimary",children:i.prompt})]}),t.jsxs(it,{children:[i.type==="math"&&i.data&&t.jsxs(H,{onClick:()=>ce(te(i),i.type==="hindi"?"hi-IN":"en-US"),children:[i.data.n1??0," ",i.data.op??"+"," ",i.data.n2??0]}),(i.type==="spelling"||i.type==="hindi")&&i.data&&t.jsx(mt,{children:t.jsx(j,{color:"textSecondary",fontSize:"md",fontWeight:600,children:n.eng_tapSpeaker})}),i.type==="missing_letter"&&i.data&&t.jsx(H,{onClick:()=>ce(te(i),i.type==="hindi"?"hi-IN":"en-US"),children:i.data.displayWord}),i.type==="logic"&&i.data&&t.jsx(nt,{children:i.data.displayWord}),i.type==="sorting"&&i.data&&t.jsx(H,{$fontSize:"clamp(2rem, 8vw, 4rem)",children:i.data.displayWord}),i.data.optionsStrings&&t.jsx(st,{$isLong:i.data.optionsStrings.some(w=>w.length>12),children:i.data.optionsStrings.map((w,Ce)=>t.jsx(ot,{$selected:y===w,$color:R.primary,onClick:()=>ve(i.id,w),whileTap:{scale:.95},children:w},Ce))}),t.jsxs(Ie,{children:[t.jsx(Be,{onClick:Se}),t.jsx(Pe,{text:te(i),lang:i.type==="hindi"?"hi-IN":"en-US"}),u===W.length-1?t.jsx(P,{title:n.com_finish.toUpperCase(),onClick:ie,variant:"primary",minWidth:"180px"}):t.jsx(Oe,{onClick:ie})]})]})]})};return t.jsxs(We,{children:[t.jsxs(Re,{children:[t.jsx("div",{style:{gridColumn:"1 / -1",width:"100%",display:"flex",justifyContent:"center"},children:t.jsx("div",{style:{width:"100%",maxWidth:"1100px"},children:t.jsx(Qe,{icon:G,title:je(),subtitle:n.mst_subtitle,streak:0})})}),!D&&!z&&t.jsx("div",{style:{gridColumn:"1 / -1",width:"100%"},children:t.jsxs($t,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{type:"spring",damping:20},children:[t.jsxs(_t,{children:[t.jsx(St,{animate:{scale:[1,1.05,1],rotate:[0,5,-5,0]},transition:{duration:4,repeat:1/0,ease:"easeInOut"},children:t.jsx(G,{size:40})}),t.jsxs("div",{style:{textAlign:"left"},children:[t.jsx(j,{fontSize:"xxl",fontWeight:900,color:"primary",children:n.test_instructions}),t.jsx(j,{fontSize:"md",color:"textSecondary",fontWeight:600,children:"Follow these rules to become a Grand Master!"})]})]}),t.jsx(Ct,{children:[{icon:t.jsx(me,{size:24}),text:n.test_qCount},{icon:t.jsx(ge,{size:24}),text:n.test_selectBest},{icon:t.jsx(q,{size:24}),text:n.test_timeRecorded},{icon:t.jsx(G,{size:24}),text:n.test_scoreForCert}].map((i,y)=>t.jsxs(kt,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.1*y},children:[i.icon,t.jsx("span",{children:i.text})]},y))}),t.jsxs(Mt,{children:[t.jsx(le,{name:"complexity",title:n.com_difficulty,options:we,currentValue:p,onChange:i=>h(Number(i))}),t.jsx(le,{name:"targetTime",title:n.test_targetTime,options:be,currentValue:b,onChange:i=>ye(Number(i))}),((e==null?void 0:e.includes("math"))||F)&&t.jsxs("div",{style:{display:"flex",gap:"24px",flexWrap:"wrap",justifyContent:"center"},children:[(e==="math_subtraction"||e==="math_test"||F)&&t.jsxs(se,{children:[t.jsx(oe,{type:"checkbox",checked:f,onChange:i=>E(i.target.checked)}),t.jsx("span",{style:{fontWeight:700,fontSize:"0.9rem"},children:n.com_allowNegative})]}),(e==="math_division"||e==="math_test"||F)&&t.jsxs(se,{children:[t.jsx(oe,{type:"checkbox",checked:x,onChange:i=>I(i.target.checked)}),t.jsx("span",{style:{fontWeight:700,fontSize:"0.9rem"},children:n.com_allowDecimals})]})]})]}),t.jsx("div",{style:{marginTop:"50px",width:"100%"},children:t.jsx(P,{title:n.test_start,onClick:_e,variant:"primary",width:"100%",size:"lg"})})]})}),D&&!z&&t.jsx("div",{style:{gridColumn:"1 / -1",width:"100%"},children:t.jsx(Ye,{children:t.jsx(X,{mode:"wait",children:Z&&t.jsx(jt,{initial:{x:50,opacity:0},animate:{x:0,opacity:1},exit:{x:-50,opacity:0},transition:{type:"spring",damping:20,stiffness:100},children:$e(Z)},Z.id)})})})]}),z&&t.jsxs(rt,{initial:{opacity:0},animate:{opacity:1},children:[!A&&!N&&t.jsxs(pt,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},children:[t.jsx(k.div,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",damping:10},children:t.jsx(G,{size:120,color:v>=8?R.gold:R.slate})}),t.jsxs(gt,{fontSize:"4rem",fontWeight:900,color:"primary",children:[v," / 10"]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",fontSize:"1.5rem",fontWeight:"bold",color:R.textSecondary,marginBottom:"20px"},children:[t.jsx(q,{size:24}),n.com_time||"Time",": ",Math.floor($/60),":",($%60).toString().padStart(2,"0")]}),t.jsx(ht,{$score:v,initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.3},children:Tt(v)}),b>0&&$>=b&&t.jsx("div",{style:{color:"#EF4444",fontWeight:900,fontSize:"1.2rem",marginTop:"10px"},children:"⏰ TIME'S UP!"}),t.jsx(ft,{fontSize:"2rem",fontWeight:800,children:v>=8?n.com_genius:n.com_goodEffort}),t.jsx(ut,{fontSize:"lg",color:"textSecondary",children:v>=8?n.com_masteredCurriculum:n.test_keepPracticing}),b>0&&t.jsxs("div",{style:{marginTop:"15px",padding:"10px 20px",borderRadius:"12px",background:$<=b?`${R.success}15`:`${R.warning}15`,color:$<=b?R.successDark:R.goldDark,fontWeight:700,fontSize:"0.9rem",display:"flex",alignItems:"center",gap:"8px"},children:[$<=b?t.jsx(Le,{size:18}):t.jsx(pe,{size:18}),$<=b?n.test_beatenTarget:n.test_timeExceeded]}),t.jsxs(ue,{children:[v>=8&&t.jsx(P,{title:n.com_getCertificate,onClick:()=>_(!0),variant:"primary"}),t.jsx(P,{title:"Options ▾",onClick:()=>a(!r),variant:"secondary",icon:t.jsx(he,{size:20})}),t.jsx(X,{children:r&&t.jsxs(t.Fragment,{children:[t.jsx(re,{onClick:()=>a(!1)}),t.jsxs(ae,{initial:{opacity:0,y:10,scale:.9},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:10,scale:.9},children:[t.jsxs(O,{onClick:()=>{o(!0),a(!1)},children:[t.jsx(ee,{size:18})," ",n.com_reviewAnswers]}),t.jsxs(O,{onClick:()=>{K(),U(!1),a(!1)},children:[t.jsx(pe,{size:18})," ",n.com_tryAgain]}),t.jsxs(O,{onClick:()=>{m("/"),a(!1)},children:[t.jsx(xe,{size:18})," ",n.com_home]})]})]})})]})]}),A&&!N&&t.jsxs(yt,{initial:{x:50,opacity:0},animate:{x:0,opacity:1},children:[t.jsx(xt,{fontSize:"2rem",fontWeight:900,color:"primary",children:n.com_testReview}),t.jsx(wt,{color:"textSecondary",children:n.com_seeWhatLearned}),t.jsx(at,{children:W.map(i=>{var w;const y=((w=L[i.id])==null?void 0:w.trim().toUpperCase())===i.correctAnswer.trim().toUpperCase();return t.jsxs(lt,{$correct:y,children:[t.jsxs(bt,{children:[t.jsxs(j,{fontSize:"md",fontWeight:800,color:"textPrimary",children:["Question ",i.id,": ",i.prompt]}),y?t.jsx(ge,{color:"#10B981",size:24}):t.jsx(Fe,{color:"#F59E0B",size:24})]}),t.jsxs(fe,{children:[t.jsx(j,{fontSize:"sm",color:"textSecondary",children:n.com_yourAnswer}),t.jsx(j,{fontSize:"sm",fontWeight:700,color:y?"success":"warning",children:L[i.id]||"(No answer)"})]}),!y&&t.jsxs(fe,{children:[t.jsx(j,{fontSize:"sm",color:"textSecondary",children:n.com_correctAnswer}),t.jsx(j,{fontSize:"sm",fontWeight:700,color:"success",children:i.correctAnswer})]})]},i.id)})}),t.jsxs(ue,{children:[v>=8&&t.jsx(P,{title:n.com_getCertificate,onClick:()=>_(!0),variant:"primary"}),t.jsx(P,{title:"Options ▾",onClick:()=>d(!c),variant:"secondary",icon:t.jsx(he,{size:20})}),t.jsx(X,{children:c&&t.jsxs(t.Fragment,{children:[t.jsx(re,{onClick:()=>d(!1)}),t.jsxs(ae,{initial:{opacity:0,y:10,scale:.9},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:10,scale:.9},children:[t.jsxs(O,{onClick:()=>{o(!1),d(!1)},children:[t.jsx(ee,{size:18})," ",n.com_backToScore]}),t.jsxs(O,{onClick:()=>{m("/"),d(!1)},children:[t.jsx(xe,{size:18})," ",n.com_home]})]})]})})]})]}),N&&t.jsx(vt,{children:t.jsx(Ne,{onClose:()=>_(!1),challengeName:(e==null?void 0:e.replace("_"," ").toUpperCase())||"Master Test",score:v,level:"Genius",timeTaken:`${Math.floor($/60)}:${($%60).toString().padStart(2,"0")}`})})]})]})};export{Kt as default};

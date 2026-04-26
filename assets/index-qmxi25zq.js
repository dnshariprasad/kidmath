import{i as a,p as M,q as be,K as w,am as Fe,j as De,l as Le,x,n as t,P as Be,G as Pe,T as Y,a8 as me,a9 as pe,v as z,A as X,an as he,ao as xe,ap as R,a0 as Ee,a6 as Oe,N as Ue,a2 as Qe}from"./index-BLv60CrT.js";import{c as Ge}from"./confetti.module-ONDKWxYZ.js";import{S as He}from"./SpeakIcon-Cx6KIFn6.js";import{P as Ve,N as Ke}from"./PreviousIcon-GxdLi2PP.js";import{D as Ye}from"./DifficultyPicker-C14oJ6rC.js";import{r as Xe,C as Je}from"./ChallengeHeader-BG89Ch3U.js";import{g as Ze,b as J}from"./wordUtils-DPgh885X.js";import{I as qe}from"./info-DtBY2aVM.js";import{B as ge,T as Z,C as fe,R as et,H as ue}from"./timer-CrUDvap8.js";import{C as ye}from"./circle-check-B-MH8BCb.js";import{S as q}from"./search-f4XALAh1.js";import{C as tt,S as it}from"./spell-check-D3fFlYaR.js";import{S as ot}from"./scale-lWvmU--9.js";import{L as st}from"./languages-D5uYxYNH.js";import{A as at}from"./arrow-up-down-DF2GlG-N.js";a.div`
  position: sticky;
  top: 0;
  z-index: 100;
  background: ${e=>e.theme.colors.background}EE;
  backdrop-filter: blur(8px);
  padding: 15px 0;
  margin-bottom: 20px;
  width: 100%;
`;a.div`
  width: 100%;
  height: 8px;
  background: ${e=>e.theme.colors.primary}15;
  border-radius: 4px;
  overflow: hidden;
`;a(M.div)`
  height: 100%;
  background: ${e=>e.theme.colors.primary};
  border-radius: 4px;
`;const rt=a.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  padding-bottom: 80px;
`,nt=a(be)`
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
`,lt=a.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  background: ${e=>e.theme.colors.primary}15;
`,ct=a(M.div)`
  height: 100%;
  background: ${e=>e.theme.colors.primary};
`,dt=a.div`
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
`,mt=a.div`
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
`,pt=a.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 40px;

  @media (max-width: 480px) {
    flex-direction: column;
    text-align: center;
    gap: 8px;
  }
`,ht=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  padding: 15px 0;

  @media (max-width: 600px) {
    gap: 30px;
    padding: 15px 0;
  }
`,P=a.div`
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
`,xt=a(P)`
  font-size: clamp(1.8rem, 4vw, 3rem);
  letter-spacing: 12px;
`,gt=a.div`
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
`,ft=a(M.div)`
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
`;a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 40px;
`;const ut=a(M.div)`
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
`,yt=a.div`
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
`,wt=a.div`
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
`,we=a.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;
`,jt=a.div`
  color: #6366f1;
`,bt=a(w)`
  text-align: center;
`,vt=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;a.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;a.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;const St=a(M.div)`
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
`,Mt=a(M.div)`
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
`,_t=a(w)`
  margin-bottom: 10px;
`,$t=a(w)`
  margin: 15px 0;
`,Ct=a(w)`
  margin-bottom: 10px;
`,kt=a(w)`
  margin-bottom: 25px;
  max-width: 500px;
`,je=a.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
`,zt=a(M.div)`
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
`,At=a(w)`
  margin-bottom: 20px;
`,Tt=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;a.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
`;const Rt=a(M.div)`
  width: 100%;
`,Wt=a.div`
  position: fixed;
  inset: 0;
  z-index: 3000;
  background: white;
`,Yt=()=>{const{testId:e}=Fe(),ee=De(),ve=Le(),[A,Se]=x.useState([]),[W,te]=x.useState({}),[$,ie]=x.useState(!1),[j,oe]=x.useState(0),[C,E]=x.useState(0),[O,I]=x.useState(!1),[se,U]=x.useState(!1),[ae,T]=x.useState(!1),[re,N]=x.useState(!1),[p,Me]=x.useState(1),[Q,_e]=x.useState(!1),[G,$e]=x.useState(!1),[F,ne]=x.useState(!1),[k,H]=x.useState(0),V=e==="master_test"||!e,s=Oe.en,Ce=[{value:1,label:"Level 1",info:"Single digits (1-9)"},{value:2,label:"Level 2",info:"One single & one double digit"},{value:3,label:"Level 3",info:"Two double digits (10-99)"},{value:4,label:"Level 4",info:"3-digit numbers (100-999)"}],ke=()=>{if(V)return s.mst_grandMaster;switch(e){case"math_addition":return s.math_addition;case"math_subtraction":return s.math_subtraction;case"math_multiplication":return s.math_multiplication;case"math_division":return s.math_division;case"math_test":return s.math_mathHero;case"math_sorting":return s.math_sorting;case"english_missing_letters":return s.eng_missingLetters;case"english_spelling":return s.eng_listenAndFind;case"spelling_test":return s.eng_spellingHero;case"hindi_test":return s.hindi_hindiLegend;case"logic_test":return s.log_grandLogic;default:return s.com_tryAgain}},K=x.useCallback(()=>{const i=[];let n=["math","spelling","missing_letter","comparison","hindi","logic","sorting"];(e==="math_addition"||e==="math_subtraction"||e==="math_multiplication"||e==="math_division")&&(n=["math"]),e==="math_test"&&(n=["math","comparison","sorting"]),e==="math_sorting"&&(n=["sorting"]),e==="english_missing_letters"&&(n=["missing_letter"]),e==="english_spelling"&&(n=["spelling"]),e==="spelling_test"&&(n=["spelling","missing_letter"]),e==="hindi_test"&&(n=["hindi"]),e==="logic_test"&&(n=["logic","comparison"]);const h=Ze();let b=h;p===1?b=h.filter(v=>v.length<=4):p===2||p===3?b=h.filter(v=>v.length>4&&v.length<=7):b=h.filter(v=>v.length>7),b.length===0&&(b=h);const D=["अ","आ","इ","ई","उ","ऊ","ए","ऐ","ओ","औ","क","ख","ग","घ"],ce=new Set;for(let v=1;v<=10;v++){let c={},de=0,S="";for(;de<20;){const _=n[Math.floor(Math.random()*n.length)];if(c={id:v,type:_},_==="math"){let o,r;if(p===1)o=Math.floor(Math.random()*9)+1,r=Math.floor(Math.random()*9)+1;else if(p===2){const m=Math.random()>.5;o=m?Math.floor(Math.random()*9)+1:Math.floor(Math.random()*90)+10,r=m?Math.floor(Math.random()*90)+10:Math.floor(Math.random()*9)+1}else p===3?(o=Math.floor(Math.random()*90)+10,r=Math.floor(Math.random()*90)+10):(o=Math.floor(Math.random()*900)+100,r=Math.floor(Math.random()*900)+100);let l="+";if(e==="math_addition")l="+";else if(e==="math_subtraction")l="-";else if(e==="math_multiplication")l="*";else if(e==="math_division")l="/";else{const m=["+","-"];(e==="math_test"||!e||e==="math_multiplication"||e==="math_division")&&p!==1&&(m.push("*"),p>=3&&m.push("/")),l=m[Math.floor(Math.random()*m.length)]}let d=o,f=r,u=0;if(l==="+")u=o+r;else if(l==="-")Q?(d=o,f=r):(d=Math.max(o,r),f=Math.min(o,r)),u=d-f;else if(l==="*"){let m=5;(p===2||p===3)&&(m=8),p===4&&(m=12),d=Math.floor(Math.random()*m)+1,f=Math.floor(Math.random()*m)+1,u=d*f}else if(l==="/"){const m=p===1?5:p===2?8:12;if(f=Math.floor(Math.random()*m)+1,G)d=Math.floor(Math.random()*(m*5))+1,u=Number((d/f).toFixed(1));else{const L=Math.floor(Math.random()*m)+1,B=Math.floor(Math.random()*f);d=f*L+B,u=`Q:${L} R:${B}`}}S=`math-${d}${l}${f}`,c.prompt=s.math_solveMath,c.correctAnswer=u.toString();const y=new Set([c.correctAnswer]);for(;y.size<4;){const m=Math.floor(Math.random()*5)+1;if(typeof u=="number")y.add((Math.random()>.5?u+m:Math.max(0,u-m)).toString());else{const L=Math.floor(Math.random()*3)-1,B=Math.floor(Math.random()*3)-1,Ie=Math.max(0,Math.floor(d/(f||1))+L),Ne=Math.max(0,d%(f||1)+B);y.add(`Q:${Ie} R:${Ne}`)}}c.data={n1:d,n2:f,op:l,optionsStrings:Array.from(y).sort(()=>Math.random()-.5)}}else if(_==="spelling"){const o=J(b).toUpperCase();S=`spelling-${o}`,c.prompt=s.eng_tapTheWord,c.correctAnswer=o;const r=new Set([o]);for(;r.size<4;)r.add(J(b).toUpperCase());c.data={word:o,optionsStrings:Array.from(r).sort(()=>Math.random()-.5)}}else if(_==="missing_letter"){const o=J(b).toUpperCase(),r=Math.floor(Math.random()*o.length),l=o.split(""),d=l[r];l[r]="_",S=`missing-${o}-${r}`,c.prompt=s.eng_chooseMissing,c.correctAnswer=d;const f="ABCDEFGHIJKLMNOPQRSTUVWXYZ",u=new Set([d]);for(;u.size<4;)u.add(f[Math.floor(Math.random()*26)]);c.data={displayWord:l.join(""),word:o,optionsStrings:Array.from(u).sort(()=>Math.random()-.5)}}else if(_==="comparison"){const o=[];let r=20;for((p===2||p===3)&&(r=50),p===4&&(r=1e3);o.length<4;){const d=Math.floor(Math.random()*r);o.includes(d)||o.push(d)}const l=Math.random()>.5;S=`comp-${o.sort().join(",")}-${l}`,c.prompt=l?s.math_smallestNumber:s.math_biggestNumber,c.correctAnswer=l?Math.min(...o).toString():Math.max(...o).toString(),c.data={optionsStrings:o.map(String)}}else if(_==="logic"){const o=[{sequence:["🍎","🍌","🍎"],next:"🍌"},{sequence:["🐶","🐱","🐶"],next:"🐱"},{sequence:["1","2","1"],next:"2"},{sequence:["⭐","🌙","⭐"],next:"🌙"},{sequence:["🔴","🔵","🔴"],next:"🔵"},{sequence:["🚗","🚕","🚗"],next:"🚕"},{sequence:["🍦","🍩","🍦"],next:"🍩"}],r=o[Math.floor(Math.random()*o.length)];S=`logic-${r.sequence.join("")}`,c.prompt=s.log_whatNext,c.correctAnswer=r.next;const l=new Set([r.next]);for(;l.size<4;){const d=o[Math.floor(Math.random()*o.length)].next;l.add(d)}c.data={displayWord:r.sequence.join(" ")+" ?",optionsStrings:Array.from(l).sort(()=>Math.random()-.5)}}else if(_==="hindi"){const o=D[Math.floor(Math.random()*D.length)];S=`hindi-${o}`,c.prompt=s.hindi_tapLetter,c.correctAnswer=o;const r=new Set([o]);for(;r.size<4;)r.add(D[Math.floor(Math.random()*D.length)]);c.data={letter:o,optionsStrings:Array.from(r).sort(()=>Math.random()-.5)}}else if(_==="sorting"){const o=[];let r=3,l=10;for((p===2||p===3)&&(r=4,l=20),p===4&&(r=5,l=50);o.length<r;){const y=Math.floor(Math.random()*l)+1;o.includes(y)||o.push(y)}const d=Math.random()>.5;S=`sort-${o.sort().join(",")}-${d}`,c.prompt=d?s.math_sortAsc:s.math_sortDesc;const f=d?[...o].sort((y,m)=>y-m):[...o].sort((y,m)=>m-y);c.correctAnswer=f.join(", ");const u=new Set([c.correctAnswer]);for(;u.size<4;){const y=[...o].sort(()=>Math.random()-.5);u.add(y.join(", "))}c.data={displayWord:o.join("  •  "),optionsStrings:Array.from(u).sort(()=>Math.random()-.5)}}if(!ce.has(S)){ce.add(S);break}de++}i.push(c)}Se(i),te({}),ie(!1),U(!1),I(!1),oe(0),E(0),H(0),window.scrollTo({top:0,behavior:"smooth"})},[e,s,p,Q,G]);x.useEffect(()=>{K()},[K]),x.useEffect(()=>{let i;return F&&!$&&(i=setInterval(()=>{H(n=>n+1)},1e3)),()=>clearInterval(i)},[F,$]);const g=A[C];x.useEffect(()=>{if(g&&!$){const i=g.type==="math"?`What is ${g.data.n1} ${g.data.op==="+"?"plus":g.data.op==="-"?"minus":g.data.op==="*"?"times":"divided by"} ${g.data.n2}?`:g.type==="missing_letter"?`What is the missing letter in the word ${g.data.word}?`:g.data.word||g.data.letter||g.prompt,n=g.type==="hindi"?"hi-IN":"en-US",h=setTimeout(()=>{Xe(i,n)},600);return()=>clearTimeout(h)}},[C,g,$]);const ze=(i,n)=>{te(h=>({...h,[i]:n}))},Ae=()=>{ne(!0),H(0)},Te=()=>{let i=0;A.forEach(n=>{var h;((h=W[n.id])==null?void 0:h.trim().toUpperCase())===n.correctAnswer.trim().toUpperCase()&&i++}),oe(i),ie(!0),i>=8&&(Ge({particleCount:150,spread:70,origin:{y:.6}}),ve(Qe("master_test")))},le=()=>{C<A.length-1?(E(i=>i+1),window.scrollTo({top:0,behavior:"smooth"})):Te()},Re=()=>{C>0&&E(i=>i-1)},We=i=>{if(!i)return null;const n=W[i.id]||"";return t.jsxs(nt,{$type:i.type,children:[t.jsx(lt,{children:t.jsx(ct,{initial:{width:0},animate:{width:`${(C+1)/10*100}%`},transition:{type:"spring",stiffness:100}})}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[t.jsxs(dt,{children:["QUESTION ",i.id," OF 10"]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",color:"#6366F1",fontWeight:"bold",marginTop:"20px"},children:[t.jsx(Z,{size:18}),Math.floor(k/60),":",(k%60).toString().padStart(2,"0")]})]}),t.jsx(mt,{$type:i.type,children:i.type.replace("_"," ")}),i.type!=="math"&&t.jsxs(pt,{children:[t.jsxs(jt,{children:[i.type==="spelling"&&t.jsx(it,{size:40}),i.type==="missing_letter"&&t.jsx(q,{size:40}),i.type==="comparison"&&t.jsx(ot,{size:40}),i.type==="hindi"&&t.jsx(st,{size:40}),i.type==="logic"&&t.jsx(ge,{size:40}),i.type==="sorting"&&t.jsx(at,{size:40})]}),t.jsx(bt,{fontSize:"clamp(1.2rem, 4vw, 1.75rem)",fontWeight:900,color:"textPrimary",children:i.prompt})]}),t.jsxs(ht,{children:[i.type==="math"&&i.data&&t.jsxs(P,{children:[i.data.n1??0," ",i.data.op??"+"," ",i.data.n2??0]}),(i.type==="spelling"||i.type==="hindi")&&i.data&&t.jsx(vt,{children:t.jsx(w,{color:"textSecondary",fontSize:"md",fontWeight:600,children:s.eng_tapSpeaker})}),i.type==="missing_letter"&&i.data&&t.jsx(P,{children:i.data.displayWord}),i.type==="logic"&&i.data&&t.jsx(xt,{children:i.data.displayWord}),i.type==="sorting"&&i.data&&t.jsx(P,{$fontSize:"clamp(2rem, 8vw, 4rem)",children:i.data.displayWord}),i.data.optionsStrings&&t.jsx(gt,{$isLong:i.data.optionsStrings.some(h=>h.length>12),children:i.data.optionsStrings.map((h,b)=>t.jsx(ft,{$selected:n===h,$color:"#6366F1",onClick:()=>ze(i.id,h),whileTap:{scale:.95},children:h},b))}),t.jsxs(Ue,{children:[t.jsx(Ve,{onClick:Re}),t.jsx(He,{text:i.type==="math"?`What is ${i.data.n1} ${i.data.op==="+"?"plus":i.data.op==="-"?"minus":i.data.op==="*"?"times":"divided by"} ${i.data.n2}?`:i.type==="missing_letter"?`What is the missing letter in the word ${i.data.word}?`:i.data.word||i.data.letter||i.prompt,lang:i.type==="hindi"?"hi-IN":"en-US"}),C===A.length-1?t.jsx(z,{title:s.com_finish.toUpperCase(),onClick:le,variant:"primary",minWidth:"180px"}):t.jsx(Ke,{onClick:le})]})]})]})};return t.jsxs(Be,{children:[t.jsxs(Pe,{children:[t.jsx("div",{style:{gridColumn:"1 / -1",width:"100%"},children:t.jsx(Je,{icon:Y,title:ke(),subtitle:s.mst_subtitle,streak:0})}),!F&&!$&&t.jsx("div",{style:{gridColumn:"1 / -1",display:"flex",flexDirection:"column",gap:"32px",width:"100%",maxWidth:"none",margin:"0 auto",padding:0},children:t.jsx("div",{style:{width:"100%",borderRadius:"24px",overflow:"hidden"},children:t.jsx(be,{children:t.jsxs("div",{style:{padding:"20px 40px 40px",textAlign:"center"},children:[t.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:"20px"},children:t.jsx("div",{style:{width:"80px",height:"80px",borderRadius:"50%",background:"#6366F115",display:"flex",alignItems:"center",justifyContent:"center",color:"#6366F1"},children:t.jsx(qe,{size:40})})}),t.jsx("div",{style:{marginBottom:"30px"},children:t.jsx(w,{fontSize:"xxl",fontWeight:900,color:"primary",children:"Test Instructions"})}),t.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"20px",textAlign:"left",marginBottom:"40px"},children:[{icon:t.jsx(ge,{size:20}),text:"10 questions total"},{icon:t.jsx(ye,{size:20}),text:"Select the best answer"},{icon:t.jsx(Z,{size:20}),text:"Time will be recorded"},{icon:t.jsx(Y,{size:20}),text:"8+ score for certificate"}].map((i,n)=>t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",padding:"16px",background:"#6366F108",borderRadius:"16px",border:"1px solid #6366F115",color:"#475569",fontWeight:600},children:[t.jsx("div",{style:{color:"#6366F1"},children:i.icon}),i.text]},n))}),t.jsxs("div",{style:{marginTop:"40px"},children:[t.jsx(Ye,{name:"complexity",title:s.com_difficulty,options:Ce,currentValue:p,onChange:i=>Me(Number(i))}),(e==="math_subtraction"||e==="math_test"||V)&&t.jsxs(me,{children:[t.jsx(pe,{type:"checkbox",checked:Q,onChange:i=>_e(i.target.checked)}),"Allow Negative Numbers"]}),(e==="math_division"||e==="math_test"||V)&&t.jsxs(me,{children:[t.jsx(pe,{type:"checkbox",checked:G,onChange:i=>$e(i.target.checked)}),s.com_allowDecimals]})]}),t.jsx("div",{style:{marginTop:"40px"},children:t.jsx(z,{title:"START TEST",onClick:Ae,variant:"primary",size:"xl",width:"100%"})})]})})})}),F&&!$&&t.jsx("div",{style:{gridColumn:"1 / -1",width:"100%"},children:t.jsx(rt,{children:t.jsx(X,{mode:"wait",children:g&&t.jsx(Rt,{initial:{x:50,opacity:0},animate:{x:0,opacity:1},exit:{x:-50,opacity:0},transition:{type:"spring",damping:20,stiffness:100},children:We(g)},g.id)})})})]}),$&&t.jsxs(ut,{initial:{opacity:0},animate:{opacity:1},children:[!se&&!O&&t.jsxs(St,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},children:[t.jsx(M.div,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",damping:10},children:t.jsx(Y,{size:120,color:j>=8?"#FFD700":"#94A3B8"})}),t.jsxs($t,{fontSize:"4rem",fontWeight:900,color:"primary",children:[j," / 10"]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",fontSize:"1.5rem",fontWeight:"bold",color:"#64748B",marginBottom:"20px"},children:[t.jsx(Z,{size:24}),"Time: ",Math.floor(k/60),":",(k%60).toString().padStart(2,"0")]}),t.jsx(Mt,{$score:j,initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.3},children:j===10?"GRAND MASTER":j===9?"LEGEND":j===8?"PRODIGY":"KIDDOO HERO"}),t.jsx(Ct,{fontSize:"2rem",fontWeight:800,children:j>=8?s.com_genius:s.com_goodEffort}),t.jsx(kt,{fontSize:"lg",color:"textSecondary",children:j>=8?s.com_masteredCurriculum:s.com_keepPracticing}),t.jsxs(je,{children:[j>=8&&t.jsx(z,{title:s.com_getCertificate,onClick:()=>I(!0),variant:"primary"}),t.jsx(z,{title:"Options ▾",onClick:()=>T(!ae),variant:"secondary",icon:t.jsx(fe,{size:20})}),t.jsx(X,{children:ae&&t.jsxs(t.Fragment,{children:[t.jsx(he,{onClick:()=>T(!1)}),t.jsxs(xe,{initial:{opacity:0,y:10,scale:.9},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:10,scale:.9},children:[t.jsxs(R,{onClick:()=>{U(!0),T(!1)},children:[t.jsx(q,{size:18})," ",s.com_reviewAnswers]}),t.jsxs(R,{onClick:()=>{K(),ne(!1),T(!1)},children:[t.jsx(et,{size:18})," ",s.com_tryAgain]}),t.jsxs(R,{onClick:()=>{ee("/"),T(!1)},children:[t.jsx(ue,{size:18})," ",s.com_home]})]})]})})]})]}),se&&!O&&t.jsxs(zt,{initial:{x:50,opacity:0},animate:{x:0,opacity:1},children:[t.jsx(_t,{fontSize:"2rem",fontWeight:900,color:"primary",children:s.com_testReview}),t.jsx(At,{color:"textSecondary",children:s.com_seeWhatLearned}),t.jsx(yt,{children:A.map(i=>{var h;const n=((h=W[i.id])==null?void 0:h.trim().toUpperCase())===i.correctAnswer.trim().toUpperCase();return t.jsxs(wt,{$correct:n,children:[t.jsxs(Tt,{children:[t.jsxs(w,{fontSize:"md",fontWeight:800,color:"textPrimary",children:["Question ",i.id,": ",i.prompt]}),n?t.jsx(ye,{color:"#10B981",size:24}):t.jsx(tt,{color:"#F59E0B",size:24})]}),t.jsxs(we,{children:[t.jsx(w,{fontSize:"sm",color:"textSecondary",children:s.com_yourAnswer}),t.jsx(w,{fontSize:"sm",fontWeight:700,color:n?"success":"warning",children:W[i.id]||"(No answer)"})]}),!n&&t.jsxs(we,{children:[t.jsx(w,{fontSize:"sm",color:"textSecondary",children:s.com_correctAnswer}),t.jsx(w,{fontSize:"sm",fontWeight:700,color:"success",children:i.correctAnswer})]})]},i.id)})}),t.jsxs(je,{children:[j>=8&&t.jsx(z,{title:s.com_getCertificate,onClick:()=>I(!0),variant:"primary"}),t.jsx(z,{title:"Options ▾",onClick:()=>N(!re),variant:"secondary",icon:t.jsx(fe,{size:20})}),t.jsx(X,{children:re&&t.jsxs(t.Fragment,{children:[t.jsx(he,{onClick:()=>N(!1)}),t.jsxs(xe,{initial:{opacity:0,y:10,scale:.9},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:10,scale:.9},children:[t.jsxs(R,{onClick:()=>{U(!1),N(!1)},children:[t.jsx(q,{size:18})," ",s.com_backToScore]}),t.jsxs(R,{onClick:()=>{ee("/"),N(!1)},children:[t.jsx(ue,{size:18})," ",s.com_home]})]})]})})]})]}),O&&t.jsx(Wt,{children:t.jsx(Ee,{onClose:()=>I(!1),challengeName:(e==null?void 0:e.replace("_"," ").toUpperCase())||"Master Test",score:j,level:"Genius",timeTaken:`${Math.floor(k/60)}:${(k%60).toString().padStart(2,"0")}`})})]})]})};export{Yt as default};

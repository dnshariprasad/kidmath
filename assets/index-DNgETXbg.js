import{i as a,p as _,q as be,K as y,ak as je,j as Se,l as ve,x as f,n as t,P as _e,G as $e,T as oe,A as U,z as Me,al as Ce,am as ke,v as A,an as se,ao as ae,ap as T,a0 as ze,a6 as Ae,N as Te,a2 as We}from"./index-BfvEwcDZ.js";import{c as Ne}from"./confetti.module-ONDKWxYZ.js";import{S as Re}from"./SpeakIcon-CTHLebXZ.js";import{P as Le,N as De}from"./PreviousIcon-Cezoj9hE.js";import{D as Fe}from"./DifficultyPicker-DOrKCh9i.js";import{r as Ie,C as Pe,S as Be}from"./ChallengeHeader-Dzr6ORUm.js";import{g as Oe,b as Q}from"./wordUtils-DPgh885X.js";import{C as re,R as Ee,H as ne,B as Ue}from"./rotate-ccw-DzKUW2IT.js";import{S as G}from"./search-peqDmbZ-.js";import{C as Qe}from"./circle-check-BwDrArvg.js";import{C as Ge,S as He}from"./spell-check-BeSgts8l.js";import{S as Ke}from"./scale-Dxxh0ZBJ.js";import{L as Ve}from"./languages-vPVV3AL0.js";import{A as Ye}from"./arrow-up-down-6Ohc6W7S.js";import"./info-DXuBQ1Kn.js";a.div`
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
`;a(_.div)`
  height: 100%;
  background: ${e=>e.theme.colors.primary};
  border-radius: 4px;
`;const Xe=a.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  padding-bottom: 80px;
`,Je=a(be)`
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
`,Ze=a.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  background: ${e=>e.theme.colors.primary}15;
`,qe=a(_.div)`
  height: 100%;
  background: ${e=>e.theme.colors.primary};
`,et=a.div`
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
`,tt=a.div`
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
`,it=a.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 40px;

  @media (max-width: 480px) {
    flex-direction: column;
    text-align: center;
    gap: 8px;
  }
`,ot=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  padding: 15px 0;

  @media (max-width: 600px) {
    gap: 30px;
    padding: 15px 0;
  }
`,F=a.div`
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
`,st=a(F)`
  font-size: clamp(1.8rem, 4vw, 3rem);
  letter-spacing: 12px;
`,at=a.div`
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
`,rt=a(_.div)`
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
  word-break: break-word;
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
`;const nt=a(_.div)`
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
`,lt=a.div`
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
`,ct=a.div`
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
`,le=a.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;
`,dt=a.div`
  color: #6366f1;
`,mt=a(y)`
  text-align: center;
`,pt=a.div`
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
`;const ht=a(_.div)`
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
`,xt=a(_.div)`
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
`,gt=a(y)`
  margin-bottom: 10px;
`,ft=a(y)`
  margin: 15px 0;
`,ut=a(y)`
  margin-bottom: 10px;
`,yt=a(y)`
  margin-bottom: 25px;
  max-width: 500px;
`,ce=a.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
`,wt=a(_.div)`
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
`,bt=a(y)`
  margin-bottom: 20px;
`,jt=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;a.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
`;const St=a(_.div)`
  width: 100%;
`,vt=a.div`
  position: fixed;
  inset: 0;
  z-index: 3000;
  background: white;
`,Pt=()=>{const{testId:e}=je(),H=Se(),de=ve(),[C,me]=f.useState([]),[k,K]=f.useState({}),[W,V]=f.useState(!1),[w,Y]=f.useState(0),[M,I]=f.useState(0),[P,N]=f.useState(!1),[X,B]=f.useState(!1),[J,z]=f.useState(!1),[Z,R]=f.useState(!1),[p,pe]=f.useState(1),[O,he]=f.useState(!1),q=e==="master_test"||!e,s=Ae.en,L=M>0||Object.keys(k).length>0,xe=[{value:1,label:"Level 1",info:"Single digits (1-9)"},{value:2,label:"Level 2",info:"One single & one double digit"},{value:3,label:"Level 3",info:"Two double digits (10-99)"},{value:4,label:"Level 4",info:"3-digit numbers (100-999)"}],ge=()=>{if(q)return s.mst_grandMaster;switch(e){case"math_addition":return s.math_addition;case"math_subtraction":return s.math_subtraction;case"math_multiplication":return s.math_multiplication;case"math_test":return s.math_mathHero;case"math_sorting":return s.math_sorting;case"english_missing_letters":return s.eng_missingLetters;case"english_spelling":return s.eng_listenAndFind;case"spelling_test":return s.eng_spellingHero;case"hindi_test":return s.hindi_hindiLegend;case"logic_test":return s.log_grandLogic;default:return s.com_tryAgain}},E=f.useCallback(()=>{const i=[];let l=["math","spelling","missing_letter","comparison","hindi","logic","sorting"];(e==="math_addition"||e==="math_subtraction"||e==="math_multiplication")&&(l=["math"]),e==="math_test"&&(l=["math","comparison","sorting"]),e==="math_sorting"&&(l=["sorting"]),e==="english_missing_letters"&&(l=["missing_letter"]),e==="english_spelling"&&(l=["spelling"]),e==="spelling_test"&&(l=["spelling","missing_letter"]),e==="hindi_test"&&(l=["hindi"]),e==="logic_test"&&(l=["logic","comparison"]);const d=Oe();let j=d;p===1?j=d.filter(S=>S.length<=4):p===2||p===3?j=d.filter(S=>S.length>4&&S.length<=7):j=d.filter(S=>S.length>7),j.length===0&&(j=d);const D=["अ","आ","इ","ई","उ","ऊ","ए","ऐ","ओ","औ","क","ख","ग","घ"],te=new Set;for(let S=1;S<=10;S++){let n={},ie=0,v="";for(;ie<20;){const $=l[Math.floor(Math.random()*l.length)];if(n={id:S,type:$},$==="math"){let o,r;if(p===1)o=Math.floor(Math.random()*9)+1,r=Math.floor(Math.random()*9)+1;else if(p===2){const h=Math.random()>.5;o=h?Math.floor(Math.random()*9)+1:Math.floor(Math.random()*90)+10,r=h?Math.floor(Math.random()*90)+10:Math.floor(Math.random()*9)+1}else p===3?(o=Math.floor(Math.random()*90)+10,r=Math.floor(Math.random()*90)+10):(o=Math.floor(Math.random()*900)+100,r=Math.floor(Math.random()*900)+100);let c="+";if(e==="math_addition")c="+";else if(e==="math_subtraction")c="-";else if(e==="math_multiplication")c="*";else{const h=["+","-"];(e==="math_test"||!e||e==="math_multiplication")&&p!==1&&h.push("*"),c=h[Math.floor(Math.random()*h.length)]}let m=o,b=r,g=0;if(c==="+")g=o+r;else if(c==="-")O?(m=o,b=r):(m=Math.max(o,r),b=Math.min(o,r)),g=m-b;else{let h=5;(p===2||p===3)&&(h=8),p===4&&(h=12),m=Math.floor(Math.random()*h)+1,b=Math.floor(Math.random()*h)+1,g=m*b}v=`math-${m}${c}${b}`,n.prompt=s.math_solveMath,n.correctAnswer=g.toString();const u=new Set([n.correctAnswer]);for(;u.size<4;){const h=Math.floor(Math.random()*5)+1;u.add((Math.random()>.5?g+h:Math.max(0,g-h)).toString())}n.data={n1:m,n2:b,op:c,optionsStrings:Array.from(u).sort(()=>Math.random()-.5)}}else if($==="spelling"){const o=Q(j).toUpperCase();v=`spelling-${o}`,n.prompt=s.eng_tapTheWord,n.correctAnswer=o;const r=new Set([o]);for(;r.size<4;)r.add(Q(j).toUpperCase());n.data={word:o,optionsStrings:Array.from(r).sort(()=>Math.random()-.5)}}else if($==="missing_letter"){const o=Q(j).toUpperCase(),r=Math.floor(Math.random()*o.length),c=o.split(""),m=c[r];c[r]="_",v=`missing-${o}-${r}`,n.prompt=s.eng_chooseMissing,n.correctAnswer=m;const b="ABCDEFGHIJKLMNOPQRSTUVWXYZ",g=new Set([m]);for(;g.size<4;)g.add(b[Math.floor(Math.random()*26)]);n.data={displayWord:c.join(""),word:o,optionsStrings:Array.from(g).sort(()=>Math.random()-.5)}}else if($==="comparison"){const o=[];let r=20;for((p===2||p===3)&&(r=50),p===4&&(r=1e3);o.length<4;){const m=Math.floor(Math.random()*r);o.includes(m)||o.push(m)}const c=Math.random()>.5;v=`comp-${o.sort().join(",")}-${c}`,n.prompt=c?s.math_smallestNumber:s.math_biggestNumber,n.correctAnswer=c?Math.min(...o).toString():Math.max(...o).toString(),n.data={optionsStrings:o.map(String)}}else if($==="logic"){const o=[{sequence:["🍎","🍌","🍎"],next:"🍌"},{sequence:["🐶","🐱","🐶"],next:"🐱"},{sequence:["1","2","1"],next:"2"},{sequence:["⭐","🌙","⭐"],next:"🌙"},{sequence:["🔴","🔵","🔴"],next:"🔵"},{sequence:["🚗","🚕","🚗"],next:"🚕"},{sequence:["🍦","🍩","🍦"],next:"🍩"}],r=o[Math.floor(Math.random()*o.length)];v=`logic-${r.sequence.join("")}`,n.prompt=s.log_whatNext,n.correctAnswer=r.next;const c=new Set([r.next]);for(;c.size<4;){const m=o[Math.floor(Math.random()*o.length)].next;c.add(m)}n.data={displayWord:r.sequence.join(" ")+" ?",optionsStrings:Array.from(c).sort(()=>Math.random()-.5)}}else if($==="hindi"){const o=D[Math.floor(Math.random()*D.length)];v=`hindi-${o}`,n.prompt=s.hindi_tapLetter,n.correctAnswer=o;const r=new Set([o]);for(;r.size<4;)r.add(D[Math.floor(Math.random()*D.length)]);n.data={letter:o,optionsStrings:Array.from(r).sort(()=>Math.random()-.5)}}else if($==="sorting"){const o=[];let r=3,c=10;for((p===2||p===3)&&(r=4,c=20),p===4&&(r=5,c=50);o.length<r;){const u=Math.floor(Math.random()*c)+1;o.includes(u)||o.push(u)}const m=Math.random()>.5;v=`sort-${o.sort().join(",")}-${m}`,n.prompt=m?s.math_sortAsc:s.math_sortDesc;const b=m?[...o].sort((u,h)=>u-h):[...o].sort((u,h)=>h-u);n.correctAnswer=b.join(", ");const g=new Set([n.correctAnswer]);for(;g.size<4;){const u=[...o].sort(()=>Math.random()-.5);g.add(u.join(", "))}n.data={displayWord:o.join("  •  "),optionsStrings:Array.from(g).sort(()=>Math.random()-.5)}}if(!te.has(v)){te.add(v);break}ie++}i.push(n)}me(i),K({}),V(!1),B(!1),N(!1),Y(0),I(0),window.scrollTo({top:0,behavior:"smooth"})},[e,s,p,O]);f.useEffect(()=>{E()},[E]);const x=C[M];f.useEffect(()=>{if(x&&!W){const i=x.type==="math"?`What is ${x.data.n1} ${x.data.op==="+"?"plus":x.data.op==="-"?"minus":"times"} ${x.data.n2}?`:x.type==="missing_letter"?`What is the missing letter in the word ${x.data.word}?`:x.data.word||x.data.letter||x.prompt,l=x.type==="hindi"?"hi-IN":"en-US",d=setTimeout(()=>{Ie(i,l)},600);return()=>clearTimeout(d)}},[M,x,W]);const fe=(i,l)=>{K(d=>({...d,[i]:l}))},ue=()=>{let i=0;C.forEach(l=>{var d;((d=k[l.id])==null?void 0:d.trim().toUpperCase())===l.correctAnswer.trim().toUpperCase()&&i++}),Y(i),V(!0),i>=8&&(Ne({particleCount:150,spread:70,origin:{y:.6}}),de(We("master_test")))},ee=()=>{M<C.length-1?(I(i=>i+1),window.scrollTo({top:0,behavior:"smooth"})):ue()},ye=()=>{M>0&&I(i=>i-1)},we=i=>{if(!i)return null;const l=k[i.id]||"";return t.jsxs(Je,{$type:i.type,children:[t.jsx(Ze,{children:t.jsx(qe,{initial:{width:0},animate:{width:`${(M+1)/10*100}%`},transition:{type:"spring",stiffness:100}})}),t.jsxs(et,{children:["QUESTION ",i.id," OF 10"]}),t.jsx(tt,{$type:i.type,children:i.type.replace("_"," ")}),i.type!=="math"&&t.jsxs(it,{children:[t.jsxs(dt,{children:[i.type==="spelling"&&t.jsx(He,{size:40}),i.type==="missing_letter"&&t.jsx(G,{size:40}),i.type==="comparison"&&t.jsx(Ke,{size:40}),i.type==="hindi"&&t.jsx(Ve,{size:40}),i.type==="logic"&&t.jsx(Ue,{size:40}),i.type==="sorting"&&t.jsx(Ye,{size:40})]}),t.jsx(mt,{fontSize:"clamp(1.2rem, 4vw, 1.75rem)",fontWeight:900,color:"textPrimary",children:i.prompt})]}),t.jsxs(ot,{children:[i.type==="math"&&i.data&&t.jsxs(F,{children:[i.data.n1??0," ",i.data.op??"+"," ",i.data.n2??0]}),(i.type==="spelling"||i.type==="hindi")&&i.data&&t.jsx(pt,{children:t.jsx(y,{color:"textSecondary",fontSize:"md",fontWeight:600,children:s.eng_tapSpeaker})}),i.type==="missing_letter"&&i.data&&t.jsx(F,{children:i.data.displayWord}),i.type==="logic"&&i.data&&t.jsx(st,{children:i.data.displayWord}),i.type==="sorting"&&i.data&&t.jsx(F,{$fontSize:"clamp(2rem, 8vw, 4rem)",children:i.data.displayWord}),i.data.optionsStrings&&t.jsx(at,{$isLong:i.data.optionsStrings.some(d=>d.length>12),children:i.data.optionsStrings.map((d,j)=>t.jsx(rt,{$selected:l===d,$color:"#6366F1",onClick:()=>fe(i.id,d),whileTap:{scale:.95},children:d},j))}),t.jsxs(Te,{children:[t.jsx(Le,{onClick:ye}),t.jsx(Re,{text:i.type==="math"?`What is ${i.data.n1} ${i.data.op==="+"?"plus":i.data.op==="-"?"minus":"times"} ${i.data.n2}?`:i.type==="missing_letter"?`What is the missing letter in the word ${i.data.word}?`:i.data.word||i.data.letter||i.prompt,lang:i.type==="hindi"?"hi-IN":"en-US"}),M===C.length-1?t.jsx(A,{title:s.com_finish.toUpperCase(),onClick:ee,variant:"primary",minWidth:"180px"}):t.jsx(De,{onClick:ee})]})]})]})};return t.jsxs(_e,{children:[t.jsxs($e,{children:[t.jsx(Pe,{icon:oe,title:ge(),subtitle:s.mst_subtitle,streak:0}),t.jsx(Be,{title:s.com_readyForTest,subtitle:s.mst_subtitle,onClick:()=>{}}),t.jsx(Xe,{children:t.jsx(U,{mode:"wait",children:x&&t.jsx(St,{initial:{x:50,opacity:0},animate:{x:0,opacity:1},exit:{x:-50,opacity:0},transition:{type:"spring",damping:20,stiffness:100},children:we(x)},x.id)})}),!W&&t.jsxs(Me,{"data-testid":"settings-area",children:[t.jsx(Fe,{name:"complexity",title:s.com_difficulty,options:xe,currentValue:p,onChange:i=>pe(Number(i)),disabled:L}),(e==="math_subtraction"||e==="math_test"||q)&&t.jsxs(Ce,{$disabled:L,children:[t.jsx(ke,{type:"checkbox",checked:O,onChange:i=>!L&&he(i.target.checked),disabled:L}),"Allow Negative Numbers"]})]})]}),W&&t.jsxs(nt,{initial:{opacity:0},animate:{opacity:1},children:[!X&&!P&&t.jsxs(ht,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},children:[t.jsx(_.div,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",damping:10},children:t.jsx(oe,{size:120,color:w>=8?"#FFD700":"#94A3B8"})}),t.jsxs(ft,{fontSize:"4rem",fontWeight:900,color:"primary",children:[w," / 10"]}),t.jsx(xt,{$score:w,initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.3},children:w===10?"GRAND MASTER":w===9?"LEGEND":w===8?"PRODIGY":"KIDDOO HERO"}),t.jsx(ut,{fontSize:"2rem",fontWeight:800,children:w>=8?s.com_genius:s.com_goodEffort}),t.jsx(yt,{fontSize:"lg",color:"textSecondary",children:w>=8?s.com_masteredCurriculum:s.com_keepPracticing}),t.jsxs(ce,{children:[w>=8&&t.jsx(A,{title:s.com_getCertificate,onClick:()=>N(!0),variant:"primary"}),t.jsx(A,{title:"Options ▾",onClick:()=>z(!J),variant:"secondary",icon:t.jsx(re,{size:20})}),t.jsx(U,{children:J&&t.jsxs(t.Fragment,{children:[t.jsx(se,{onClick:()=>z(!1)}),t.jsxs(ae,{initial:{opacity:0,y:10,scale:.9},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:10,scale:.9},children:[t.jsxs(T,{onClick:()=>{B(!0),z(!1)},children:[t.jsx(G,{size:18})," ",s.com_reviewAnswers]}),t.jsxs(T,{onClick:()=>{E(),z(!1)},children:[t.jsx(Ee,{size:18})," ",s.com_tryAgain]}),t.jsxs(T,{onClick:()=>{H("/"),z(!1)},children:[t.jsx(ne,{size:18})," ",s.com_home]})]})]})})]})]}),X&&!P&&t.jsxs(wt,{initial:{x:50,opacity:0},animate:{x:0,opacity:1},children:[t.jsx(gt,{fontSize:"2rem",fontWeight:900,color:"primary",children:s.com_testReview}),t.jsx(bt,{color:"textSecondary",children:s.com_seeWhatLearned}),t.jsx(lt,{children:C.map(i=>{var d;const l=((d=k[i.id])==null?void 0:d.trim().toUpperCase())===i.correctAnswer.trim().toUpperCase();return t.jsxs(ct,{$correct:l,children:[t.jsxs(jt,{children:[t.jsxs(y,{fontSize:"md",fontWeight:800,color:"textPrimary",children:["Question ",i.id,": ",i.prompt]}),l?t.jsx(Qe,{color:"#10B981",size:24}):t.jsx(Ge,{color:"#F59E0B",size:24})]}),t.jsxs(le,{children:[t.jsx(y,{fontSize:"sm",color:"textSecondary",children:s.com_yourAnswer}),t.jsx(y,{fontSize:"sm",fontWeight:700,color:l?"success":"warning",children:k[i.id]||"(No answer)"})]}),!l&&t.jsxs(le,{children:[t.jsx(y,{fontSize:"sm",color:"textSecondary",children:s.com_correctAnswer}),t.jsx(y,{fontSize:"sm",fontWeight:700,color:"success",children:i.correctAnswer})]})]},i.id)})}),t.jsxs(ce,{children:[w>=8&&t.jsx(A,{title:s.com_getCertificate,onClick:()=>N(!0),variant:"primary"}),t.jsx(A,{title:"Options ▾",onClick:()=>R(!Z),variant:"secondary",icon:t.jsx(re,{size:20})}),t.jsx(U,{children:Z&&t.jsxs(t.Fragment,{children:[t.jsx(se,{onClick:()=>R(!1)}),t.jsxs(ae,{initial:{opacity:0,y:10,scale:.9},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:10,scale:.9},children:[t.jsxs(T,{onClick:()=>{B(!1),R(!1)},children:[t.jsx(G,{size:18})," ",s.com_backToScore]}),t.jsxs(T,{onClick:()=>{H("/"),R(!1)},children:[t.jsx(ne,{size:18})," ",s.com_home]})]})]})})]})]}),P&&t.jsx(vt,{children:t.jsx(ze,{onClose:()=>N(!1),challengeName:(e==null?void 0:e.replace("_"," ").toUpperCase())||"Master Test",score:w,level:"Genius"})})]})]})};export{Pt as default};

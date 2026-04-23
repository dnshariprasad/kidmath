import{i as n,p as y,q,K as x,ak as ee,j as te,l as ie,x as g,n as t,P as oe,T as Q,A as re,v as u,a0 as ne,a6 as se,N as ae,a2 as ce}from"./index-BwksFcI6.js";import{c as le}from"./confetti.module-ONDKWxYZ.js";import{S as de}from"./SpeakIcon-DCkhGVRc.js";import{P as me,N as pe}from"./PreviousIcon-sEVG0QqI.js";import{C as he}from"./ChallengeHeader-DVkjTkGt.js";import{g as xe,b as R}from"./wordUtils-DPgh885X.js";import{C as ge}from"./circle-check-Bk9hvLL8.js";import{C as fe,S as ue}from"./spell-check-D0VonLlh.js";import{S as ye}from"./search-SvZ6Sr5R.js";import{S as we}from"./scale-DlglbZB7.js";import{L as _e}from"./languages-BQwFCosT.js";import{B as je}from"./brain-DvwCR7Yh.js";import{A as Se}from"./arrow-up-down-CUXfdCZY.js";n.div`
  position: sticky;
  top: 0;
  z-index: 100;
  background: ${e=>e.theme.colors.background}EE;
  backdrop-filter: blur(8px);
  padding: 15px 0;
  margin-bottom: 20px;
  width: 100%;
`;n.div`
  width: 100%;
  height: 8px;
  background: ${e=>e.theme.colors.primary}15;
  border-radius: 4px;
  overflow: hidden;
`;n(y.div)`
  height: 100%;
  background: ${e=>e.theme.colors.primary};
  border-radius: 4px;
`;const be=n.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding-bottom: 80px;
`,ve=n(q)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 60px 30px 35px;
  position: relative;
  background: ${e=>e.theme.colors.surface};
  border-radius: 32px;
  border: 1px solid ${e=>e.theme.colors.primary}15;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
  margin-top: 20px;

  overflow: hidden;

  @media (max-width: 600px) {
    padding: 70px 20px 30px;
    gap: 20px;
    border-radius: 24px;
  }
`,Ce=n.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  background: ${e=>e.theme.colors.primary}15;
`,Me=n(y.div)`
  height: 100%;
  background: ${e=>e.theme.colors.primary};
`,$e=n.div`
  position: absolute;
  top: 25px;
  left: 30px;
  font-weight: 900;
  font-size: 0.75rem;
  letter-spacing: 2px;
  color: ${e=>e.theme.colors.textSecondary};
  opacity: 0.5;
  text-transform: uppercase;

  @media (max-width: 600px) {
    top: 20px;
    left: 20px;
    font-size: 0.65rem;
  }
`,ke=n.div`
  position: absolute;
  top: 25px;
  right: 30px;
  font-size: 0.75rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 6px 16px;
  border-radius: 12px;
  background: ${e=>{switch(e.$type){case"math":return(e.theme.colors.math||e.theme.colors.primary)+"15";case"spelling":case"missing_letter":return(e.theme.colors.english||e.theme.colors.primary)+"15";case"hindi":return(e.theme.colors.hindi||e.theme.colors.primary)+"15";case"comparison":return(e.theme.colors.math||e.theme.colors.primary)+"15";default:return e.theme.colors.primary+"15"}}};
  color: ${e=>{switch(e.$type){case"math":return e.theme.colors.math||e.theme.colors.primary;case"spelling":case"missing_letter":return e.theme.colors.english||e.theme.colors.primary;case"hindi":return e.theme.colors.hindi||e.theme.colors.primary;case"comparison":return e.theme.colors.math||e.theme.colors.primary;default:return e.theme.colors.primary}}};

  @media (max-width: 600px) {
    top: 20px;
    right: 20px;
    font-size: 0.65rem;
    padding: 4px 12px;
  }
`,ze=n.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 40px;

  @media (max-width: 480px) {
    flex-direction: column;
    text-align: center;
    gap: 8px;
  }
`,Ae=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  padding: 15px 0;

  @media (max-width: 600px) {
    gap: 30px;
    padding: 15px 0;
  }
`,M=n.div`
  font-size: ${e=>e.$fontSize||"clamp(2rem, 5vw, 3.5rem)"};
  font-weight: 900;
  color: ${e=>e.theme.colors.textPrimary};
  text-align: center;
  letter-spacing: 4px;
  font-family: ${e=>e.theme.fonts.secondary};

  @media (max-width: 600px) {
    font-size: ${e=>e.$fontSize?"1.5rem":"2rem"};
    letter-spacing: 2px;
  }
`,We=n(M)`
  font-size: clamp(1.8rem, 4vw, 3rem);
  letter-spacing: 12px;
`,Te=n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  width: 100%;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    gap: 20px;
    flex-direction: column;
  }
`,Ne=n(y.div)`
  background: ${e=>e.$selected?e.$color||e.theme.colors.primary:e.theme.colors.surfaceVariant+"30"};
  color: ${e=>e.$selected?"white":e.theme.colors.textPrimary};
  padding: 20px 40px;
  border-radius: 20px;
  font-size: 2rem;
  font-weight: 900;
  border: 3px solid
    ${e=>e.$selected?e.$color||e.theme.colors.primary:"transparent"};
  cursor: pointer;
  min-width: 150px;
  text-align: center;
  box-shadow: ${e=>e.$selected?e.theme.shadows.md:"none"};
  transition: all 0.2s ease;

  &:hover {
    background: ${e=>e.$selected?e.$color||e.theme.colors.primary:e.theme.colors.surfaceVariant+"60"};
    transform: translateY(-4px);
  }
`;n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 40px;
`;const Re=n(y.div)`
  position: fixed;
  inset: 0;
  background: ${e=>e.theme.colors.background}FA;
  backdrop-filter: blur(15px);
  z-index: 2000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  text-align: center;
  overflow-y: auto;
`,Pe=n.div`
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
`,Be=n.div`
  background: ${e=>e.$correct?e.theme.colors.success+"10":e.theme.colors.warning+"10"};
  border: 1px solid
    ${e=>e.$correct?e.theme.colors.success+"30":e.theme.colors.warning+"30"};
  padding: 15px 20px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: left;
`,E=n.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;
`,Le=n.div`
  color: #6366f1;
`,Ie=n(x)`
  text-align: center;
`,Ue=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;n.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;n.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;const Fe=n(y.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
`,Qe=n(x)`
  margin-bottom: 10px;
`,Ee=n(x)`
  margin: 30px 0;
`,De=n(x)`
  margin-bottom: 10px;
`,He=n(x)`
  margin-bottom: 50px;
  max-width: 500px;
`,D=n.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
`,Oe=n(y.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Ve=n(x)`
  margin-bottom: 20px;
`,Ge=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;n.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
`;const Ke=n(y.div)`
  width: 100%;
`,Xe=n.div`
  position: fixed;
  inset: 0;
  z-index: 3000;
  background: white;
`,lt=()=>{const{testId:e}=ee(),P=te(),H=ie(),[S,O]=g.useState([]),[v,B]=g.useState({}),[V,L]=g.useState(!1),[w,I]=g.useState(0),[b,$]=g.useState(0),[k,C]=g.useState(!1),[U,z]=g.useState(!1),G=e==="master_test"||!e,o=se.en,K=()=>{if(G)return o.mst_grandMaster;switch(e){case"math_addition":return o.math_addition;case"math_subtraction":return o.math_subtraction;case"math_multiplication":return o.math_multiplication;case"math_test":return o.math_mathHero;case"math_sorting":return o.math_sorting;case"english_missing_letters":return o.eng_missingLetters;case"english_spelling":return o.eng_listenAndFind;case"spelling_test":return o.eng_spellingHero;case"hindi_test":return o.hindi_hindiLegend;case"logic_test":return o.log_grandLogic;default:return o.com_tryAgain}},A=g.useCallback(()=>{const i=[];let c=["math","spelling","missing_letter","comparison","hindi","logic","sorting"];(e==="math_addition"||e==="math_subtraction"||e==="math_multiplication")&&(c=["math"]),e==="math_test"&&(c=["math","comparison","sorting"]),e==="math_sorting"&&(c=["sorting"]),e==="english_missing_letters"&&(c=["missing_letter"]),e==="english_spelling"&&(c=["spelling"]),e==="spelling_test"&&(c=["spelling","missing_letter"]),e==="hindi_test"&&(c=["hindi"]),e==="logic_test"&&(c=["logic","comparison"]);const d=xe(),_=["अ","आ","इ","ई","उ","ऊ","ए","ऐ","ओ","औ","क","ख","ग","घ"];for(let T=1;T<=10;T++){const f=c[Math.floor(Math.random()*c.length)],a={id:T,type:f};if(f==="math"){const r=Math.floor(Math.random()*10)+1,s=Math.floor(Math.random()*10)+1;let l="+";if(e==="math_addition")l="+";else if(e==="math_subtraction")l="-";else if(e==="math_multiplication")l="*";else{const j=["+","-"];(e==="math_test"||e==="math_multiplication"||!e)&&j.push("*"),l=j[Math.floor(Math.random()*j.length)]}let h=r,m=s,p=0;l==="+"?p=r+s:l==="-"?(h=Math.max(r,s),m=Math.min(r,s),p=h-m):p=r*s,a.prompt=o.math_solveMath,a.correctAnswer=p.toString();const N=new Set([a.correctAnswer]);for(;N.size<4;){const j=Math.floor(Math.random()*5)+1;N.add((Math.random()>.5?p+j:Math.max(0,p-j)).toString())}a.data={n1:h,n2:m,op:l,optionsStrings:Array.from(N).sort(()=>Math.random()-.5)}}else if(f==="spelling"){const r=R(d).toUpperCase();a.prompt=o.eng_tapTheWord,a.correctAnswer=r;const s=new Set([r]);for(;s.size<4;)s.add(R(d).toUpperCase());a.data={word:r,optionsStrings:Array.from(s).sort(()=>Math.random()-.5)}}else if(f==="missing_letter"){const r=R(d).toUpperCase(),s=Math.floor(Math.random()*r.length),l=r.split(""),h=l[s];l[s]="_",a.prompt=o.eng_chooseMissing,a.correctAnswer=h;const m="ABCDEFGHIJKLMNOPQRSTUVWXYZ",p=new Set([h]);for(;p.size<4;)p.add(m[Math.floor(Math.random()*26)]);a.data={displayWord:l.join(""),word:r,optionsStrings:Array.from(p).sort(()=>Math.random()-.5)}}else if(f==="comparison"){const r=[];for(;r.length<4;){const l=Math.floor(Math.random()*100);r.includes(l)||r.push(l)}const s=Math.random()>.5;a.prompt=s?o.math_smallestNumber:o.math_biggestNumber,a.correctAnswer=s?Math.min(...r).toString():Math.max(...r).toString(),a.data={optionsStrings:r.map(String)}}else if(f==="logic"){const r=[{sequence:["🍎","🍌","🍎"],next:"🍌"},{sequence:["🐶","🐱","🐶"],next:"🐱"},{sequence:["1","2","1"],next:"2"},{sequence:["⭐","🌙","⭐"],next:"🌙"},{sequence:["🔴","🔵","🔴"],next:"🔵"},{sequence:["🚗","🚕","🚗"],next:"🚕"},{sequence:["🍦","🍩","🍦"],next:"🍩"}],s=r[Math.floor(Math.random()*r.length)];a.prompt=o.log_whatNext,a.correctAnswer=s.next;const l=new Set([s.next]);for(;l.size<4;){const h=r[Math.floor(Math.random()*r.length)].next;l.add(h)}a.data={displayWord:s.sequence.join(" ")+" ?",optionsStrings:Array.from(l).sort(()=>Math.random()-.5)}}else if(f==="hindi"){const r=_[Math.floor(Math.random()*_.length)];a.prompt=o.hindi_tapLetter,a.correctAnswer=r;const s=new Set([r]);for(;s.size<4;)s.add(_[Math.floor(Math.random()*_.length)]);a.data={letter:r,optionsStrings:Array.from(s).sort(()=>Math.random()-.5)}}else if(f==="sorting"){const r=[];for(;r.length<3;){const m=Math.floor(Math.random()*20)+1;r.includes(m)||r.push(m)}const s=Math.random()>.5;a.prompt=s?o.math_sortAsc:o.math_sortDesc;const l=s?[...r].sort((m,p)=>m-p):[...r].sort((m,p)=>p-m);a.correctAnswer=l.join(", ");const h=new Set([a.correctAnswer]);for(;h.size<4;){const m=[...r].sort(()=>Math.random()-.5);h.add(m.join(", "))}a.data={displayWord:r.join("  •  "),optionsStrings:Array.from(h).sort(()=>Math.random()-.5)}}i.push(a)}O(i),B({}),L(!1),z(!1),C(!1),I(0),$(0),window.scrollTo({top:0,behavior:"smooth"})},[e,o]);g.useEffect(()=>{A()},[A]);const X=(i,c)=>{B(d=>({...d,[i]:c}))},Y=()=>{let i=0;S.forEach(c=>{var d;((d=v[c.id])==null?void 0:d.trim().toUpperCase())===c.correctAnswer.trim().toUpperCase()&&i++}),I(i),L(!0),i>=8&&(le({particleCount:150,spread:70,origin:{y:.6}}),H(ce("master_test")))},W=S[b],F=()=>{b<S.length-1?($(i=>i+1),window.scrollTo({top:0,behavior:"smooth"})):Y()},J=()=>{b>0&&$(i=>i-1)},Z=i=>{if(!i)return null;const c=v[i.id]||"";return t.jsxs(ve,{$type:i.type,children:[t.jsx(Ce,{children:t.jsx(Me,{initial:{width:0},animate:{width:`${(b+1)/10*100}%`},transition:{type:"spring",stiffness:100}})}),t.jsxs($e,{children:["QUESTION ",i.id," OF 10"]}),t.jsx(ke,{$type:i.type,children:i.type.replace("_"," ")}),i.type!=="math"&&t.jsxs(ze,{children:[t.jsxs(Le,{children:[i.type==="spelling"&&t.jsx(ue,{size:40}),i.type==="missing_letter"&&t.jsx(ye,{size:40}),i.type==="comparison"&&t.jsx(we,{size:40}),i.type==="hindi"&&t.jsx(_e,{size:40}),i.type==="logic"&&t.jsx(je,{size:40}),i.type==="sorting"&&t.jsx(Se,{size:40})]}),t.jsx(Ie,{fontSize:"clamp(1.2rem, 4vw, 1.75rem)",fontWeight:900,color:"textPrimary",children:i.prompt})]}),t.jsxs(Ae,{children:[i.type==="math"&&i.data&&t.jsxs(M,{children:[i.data.n1??0," ",i.data.op??"+"," ",i.data.n2??0]}),(i.type==="spelling"||i.type==="hindi")&&i.data&&t.jsx(Ue,{children:t.jsx(x,{color:"textSecondary",fontSize:"md",fontWeight:600,children:o.eng_tapSpeaker})}),i.type==="missing_letter"&&i.data&&t.jsx(M,{children:i.data.displayWord}),i.type==="logic"&&i.data&&t.jsx(We,{children:i.data.displayWord}),i.type==="sorting"&&i.data&&t.jsx(M,{$fontSize:"clamp(2rem, 8vw, 4rem)",children:i.data.displayWord}),i.data.optionsStrings&&t.jsx(Te,{children:i.data.optionsStrings.map((d,_)=>t.jsx(Ne,{$selected:c===d,$color:"#6366F1",onClick:()=>X(i.id,d),whileTap:{scale:.95},children:d},_))}),t.jsxs(ae,{children:[t.jsx(me,{onClick:J}),t.jsx(de,{text:i.type==="math"?`What is ${i.data.n1} ${i.data.op==="+"?"plus":i.data.op==="-"?"minus":"times"} ${i.data.n2}?`:i.type==="missing_letter"?`What is the missing letter in the word ${i.data.word}?`:i.data.word||i.data.letter||i.prompt}),b===S.length-1?t.jsx(u,{title:o.com_finish.toUpperCase(),onClick:F,variant:"primary",minWidth:"180px"}):t.jsx(pe,{onClick:F})]})]})]})};return t.jsxs(oe,{children:[t.jsx(he,{icon:Q,title:K(),subtitle:o.mst_subtitle,streak:0}),t.jsx(be,{children:t.jsx(re,{mode:"wait",children:W&&t.jsx(Ke,{initial:{x:50,opacity:0},animate:{x:0,opacity:1},exit:{x:-50,opacity:0},transition:{type:"spring",damping:20,stiffness:100},children:Z(W)},W.id)})}),V&&t.jsxs(Re,{initial:{opacity:0},animate:{opacity:1},children:[!U&&!k&&t.jsxs(Fe,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},children:[t.jsx(y.div,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",damping:10},children:t.jsx(Q,{size:120,color:w>=8?"#FFD700":"#94A3B8"})}),t.jsxs(Ee,{fontSize:"4rem",fontWeight:900,color:"primary",children:[w," / 10"]}),t.jsx(De,{fontSize:"2rem",fontWeight:800,children:w>=8?o.com_genius:o.com_goodEffort}),t.jsx(He,{fontSize:"lg",color:"textSecondary",children:w>=8?o.com_masteredCurriculum:o.com_keepPracticing}),t.jsxs(D,{children:[t.jsx(u,{title:o.com_reviewAnswers,onClick:()=>z(!0),variant:"secondary"}),w>=8&&t.jsx(u,{title:o.com_getCertificate,onClick:()=>C(!0),variant:"primary"}),t.jsx(u,{title:o.com_tryAgain,onClick:A,variant:"secondary"}),t.jsx(u,{title:o.com_home,onClick:()=>P("/"),variant:"primary"})]})]}),U&&!k&&t.jsxs(Oe,{initial:{x:50,opacity:0},animate:{x:0,opacity:1},children:[t.jsx(Qe,{fontSize:"2rem",fontWeight:900,color:"primary",children:o.com_testReview}),t.jsx(Ve,{color:"textSecondary",children:o.com_seeWhatLearned}),t.jsx(Pe,{children:S.map(i=>{var d;const c=((d=v[i.id])==null?void 0:d.trim().toUpperCase())===i.correctAnswer.trim().toUpperCase();return t.jsxs(Be,{$correct:c,children:[t.jsxs(Ge,{children:[t.jsxs(x,{fontSize:"md",fontWeight:800,color:"textPrimary",children:["Question ",i.id,": ",i.prompt]}),c?t.jsx(ge,{color:"#10B981",size:24}):t.jsx(fe,{color:"#F59E0B",size:24})]}),t.jsxs(E,{children:[t.jsx(x,{fontSize:"sm",color:"textSecondary",children:o.com_yourAnswer}),t.jsx(x,{fontSize:"sm",fontWeight:700,color:c?"success":"warning",children:v[i.id]||"(No answer)"})]}),!c&&t.jsxs(E,{children:[t.jsx(x,{fontSize:"sm",color:"textSecondary",children:o.com_correctAnswer}),t.jsx(x,{fontSize:"sm",fontWeight:700,color:"success",children:i.correctAnswer})]})]},i.id)})}),t.jsxs(D,{children:[t.jsx(u,{title:o.com_backToScore,onClick:()=>z(!1),variant:"secondary"}),w>=8&&t.jsx(u,{title:o.com_getCertificate,onClick:()=>C(!0),variant:"primary"}),t.jsx(u,{title:o.com_home,onClick:()=>P("/"),variant:"primary"})]})]}),k&&t.jsx(Xe,{children:t.jsx(ne,{onClose:()=>C(!1),challengeName:(e==null?void 0:e.replace("_"," ").toUpperCase())||"Master Test",score:w,level:"Genius"})})]})]})};export{lt as default};

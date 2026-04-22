import{i as o,p as f,q,K as m,ak as ee,j as te,l as ie,x as h,n as t,P as re,T as U,A as oe,v as g,a0 as ne,a6 as se,N as ae,a2 as ce}from"./index-DTSzmcfp.js";import{c as le}from"./confetti.module-ONDKWxYZ.js";import{S as de}from"./SpeakIcon-Bp-ZPSpI.js";import{P as me,N as pe}from"./PreviousIcon-JL06qyuo.js";import{C as he}from"./ChallengeHeader-fW6VHIYA.js";import{g as xe,b as N}from"./wordUtils-DPgh885X.js";import{C as ge}from"./circle-check-BHALkGvc.js";import{C as fe,S as ue}from"./spell-check-BPsJYvoq.js";import{S as ye}from"./search-BQfXG2dZ.js";import{S as we}from"./scale-BwzfoMYl.js";import{L as _e}from"./languages-CagTaGKU.js";import{B as je}from"./brain-By2qkdaC.js";o.div`
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
`;o(f.div)`
  height: 100%;
  background: ${e=>e.theme.colors.primary};
  border-radius: 4px;
`;const be=o.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding-bottom: 80px;
`,Se=o(q)`
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
`,ve=o.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  background: ${e=>e.theme.colors.primary}15;
`,Ce=o(f.div)`
  height: 100%;
  background: ${e=>e.theme.colors.primary};
`,ke=o.div`
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
`,Me=o.div`
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
`,$e=o.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 40px;

  @media (max-width: 480px) {
    flex-direction: column;
    text-align: center;
    gap: 8px;
  }
`,ze=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  padding: 15px 0;

  @media (max-width: 600px) {
    gap: 30px;
    padding: 15px 0;
  }
`,R=o.div`
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 900;
  color: ${e=>e.theme.colors.textPrimary};
  text-align: center;
  letter-spacing: 4px;
  font-family: ${e=>e.theme.fonts.secondary};

  @media (max-width: 600px) {
    font-size: 2rem;
    letter-spacing: 2px;
  }
`,Ae=o(R)`
  font-size: clamp(1.8rem, 4vw, 3rem);
  letter-spacing: 12px;
`,Te=o.div`
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
`,We=o(f.div)`
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
`;o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 40px;
`;const Ne=o(f.div)`
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
`,Re=o.div`
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
`,Pe=o.div`
  background: ${e=>e.$correct?e.theme.colors.success+"10":e.theme.colors.warning+"10"};
  border: 1px solid
    ${e=>e.$correct?e.theme.colors.success+"30":e.theme.colors.warning+"30"};
  padding: 15px 20px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: left;
`,E=o.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;
`,Be=o.div`
  color: #6366f1;
`,Le=o(m)`
  text-align: center;
`,Ie=o.div`
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
`;const Fe=o(f.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
`,Qe=o(m)`
  margin-bottom: 10px;
`,Ue=o(m)`
  margin: 30px 0;
`,Ee=o(m)`
  margin-bottom: 10px;
`,He=o(m)`
  margin-bottom: 50px;
  max-width: 500px;
`,H=o.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
`,Oe=o(f.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,De=o(m)`
  margin-bottom: 20px;
`,Ve=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;o.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
`;const Ge=o(f.div)`
  width: 100%;
`,Ke=o.div`
  position: fixed;
  inset: 0;
  z-index: 3000;
  background: white;
`,at=()=>{const{testId:e}=ee(),P=te(),O=ie(),[j,D]=h.useState([]),[v,B]=h.useState({}),[V,L]=h.useState(!1),[u,I]=h.useState(0),[b,k]=h.useState(0),[M,C]=h.useState(!1),[F,$]=h.useState(!1),G=e==="master_test"||!e,r=se.en,K=()=>{if(G)return r.mst_grandMaster;switch(e){case"math_addition":return r.math_addition;case"math_subtraction":return r.math_subtraction;case"math_multiplication":return r.math_multiplication;case"math_test":return r.math_mathHero;case"english_missing_letters":return r.eng_missingLetters;case"english_spelling":return r.eng_listenAndFind;case"spelling_test":return r.eng_spellingHero;case"hindi_test":return r.hindi_hindiLegend;case"logic_test":return r.log_grandLogic;default:return r.com_tryAgain}},z=h.useCallback(()=>{const i=[];let a=["math","spelling","missing_letter","comparison","hindi","logic"];(e==="math_addition"||e==="math_subtraction"||e==="math_multiplication")&&(a=["math"]),e==="math_test"&&(a=["math","comparison"]),e==="english_missing_letters"&&(a=["missing_letter"]),e==="english_spelling"&&(a=["spelling"]),e==="spelling_test"&&(a=["spelling","missing_letter"]),e==="hindi_test"&&(a=["hindi"]),e==="logic_test"&&(a=["logic","comparison"]);const d=xe(),w=["अ","आ","इ","ई","उ","ऊ","ए","ऐ","ओ","औ","क","ख","ग","घ"];for(let T=1;T<=10;T++){const y=a[Math.floor(Math.random()*a.length)],c={id:T,type:y};if(y==="math"){const n=Math.floor(Math.random()*10)+1,s=Math.floor(Math.random()*10)+1;let l="+";if(e==="math_addition")l="+";else if(e==="math_subtraction")l="-";else if(e==="math_multiplication")l="*";else{const _=["+","-"];(e==="math_test"||e==="math_multiplication"||!e)&&_.push("*"),l=_[Math.floor(Math.random()*_.length)]}let x=n,S=s,p=0;l==="+"?p=n+s:l==="-"?(x=Math.max(n,s),S=Math.min(n,s),p=x-S):p=n*s,c.prompt=r.math_solveMath,c.correctAnswer=p.toString();const W=new Set([c.correctAnswer]);for(;W.size<4;){const _=Math.floor(Math.random()*5)+1;W.add((Math.random()>.5?p+_:Math.max(0,p-_)).toString())}c.data={n1:x,n2:S,op:l,optionsStrings:Array.from(W).sort(()=>Math.random()-.5)}}else if(y==="spelling"){const n=N(d).toUpperCase();c.prompt=r.eng_tapTheWord,c.correctAnswer=n;const s=new Set([n]);for(;s.size<4;)s.add(N(d).toUpperCase());c.data={word:n,optionsStrings:Array.from(s).sort(()=>Math.random()-.5)}}else if(y==="missing_letter"){const n=N(d).toUpperCase(),s=Math.floor(Math.random()*n.length),l=n.split(""),x=l[s];l[s]="_",c.prompt=r.eng_chooseMissing,c.correctAnswer=x;const S="ABCDEFGHIJKLMNOPQRSTUVWXYZ",p=new Set([x]);for(;p.size<4;)p.add(S[Math.floor(Math.random()*26)]);c.data={displayWord:l.join(""),word:n,optionsStrings:Array.from(p).sort(()=>Math.random()-.5)}}else if(y==="comparison"){const n=[];for(;n.length<4;){const l=Math.floor(Math.random()*100);n.includes(l)||n.push(l)}const s=Math.random()>.5;c.prompt=s?r.math_smallestNumber:r.math_biggestNumber,c.correctAnswer=s?Math.min(...n).toString():Math.max(...n).toString(),c.data={optionsStrings:n.map(String)}}else if(y==="logic"){const n=[{sequence:["🍎","🍌","🍎"],next:"🍌"},{sequence:["🐶","🐱","🐶"],next:"🐱"},{sequence:["1","2","1"],next:"2"},{sequence:["⭐","🌙","⭐"],next:"🌙"},{sequence:["🔴","🔵","🔴"],next:"🔵"},{sequence:["🚗","🚕","🚗"],next:"🚕"},{sequence:["🍦","🍩","🍦"],next:"🍩"}],s=n[Math.floor(Math.random()*n.length)];c.prompt=r.log_whatNext,c.correctAnswer=s.next;const l=new Set([s.next]);for(;l.size<4;){const x=n[Math.floor(Math.random()*n.length)].next;l.add(x)}c.data={displayWord:s.sequence.join(" ")+" ?",optionsStrings:Array.from(l).sort(()=>Math.random()-.5)}}else if(y==="hindi"){const n=w[Math.floor(Math.random()*w.length)];c.prompt=r.hindi_tapLetter,c.correctAnswer=n;const s=new Set([n]);for(;s.size<4;)s.add(w[Math.floor(Math.random()*w.length)]);c.data={letter:n,optionsStrings:Array.from(s).sort(()=>Math.random()-.5)}}i.push(c)}D(i),B({}),L(!1),$(!1),C(!1),I(0),k(0),window.scrollTo({top:0,behavior:"smooth"})},[e,r]);h.useEffect(()=>{z()},[z]);const X=(i,a)=>{B(d=>({...d,[i]:a}))},Y=()=>{let i=0;j.forEach(a=>{var d;((d=v[a.id])==null?void 0:d.trim().toUpperCase())===a.correctAnswer.trim().toUpperCase()&&i++}),I(i),L(!0),i>=8&&(le({particleCount:150,spread:70,origin:{y:.6}}),O(ce("master_test")))},A=j[b],Q=()=>{b<j.length-1?(k(i=>i+1),window.scrollTo({top:0,behavior:"smooth"})):Y()},J=()=>{b>0&&k(i=>i-1)},Z=i=>{if(!i)return null;const a=v[i.id]||"";return t.jsxs(Se,{$type:i.type,children:[t.jsx(ve,{children:t.jsx(Ce,{initial:{width:0},animate:{width:`${(b+1)/10*100}%`},transition:{type:"spring",stiffness:100}})}),t.jsxs(ke,{children:["QUESTION ",i.id," OF 10"]}),t.jsx(Me,{$type:i.type,children:i.type.replace("_"," ")}),i.type!=="math"&&t.jsxs($e,{children:[t.jsxs(Be,{children:[i.type==="spelling"&&t.jsx(ue,{size:40}),i.type==="missing_letter"&&t.jsx(ye,{size:40}),i.type==="comparison"&&t.jsx(we,{size:40}),i.type==="hindi"&&t.jsx(_e,{size:40}),i.type==="logic"&&t.jsx(je,{size:40})]}),t.jsx(Le,{fontSize:"clamp(1.2rem, 4vw, 1.75rem)",fontWeight:900,color:"textPrimary",children:i.prompt})]}),t.jsxs(ze,{children:[i.type==="math"&&i.data&&t.jsxs(R,{children:[i.data.n1??0," ",i.data.op??"+"," ",i.data.n2??0]}),(i.type==="spelling"||i.type==="hindi")&&i.data&&t.jsx(Ie,{children:t.jsx(m,{color:"textSecondary",fontSize:"md",fontWeight:600,children:r.eng_tapSpeaker})}),i.type==="missing_letter"&&i.data&&t.jsx(R,{children:i.data.displayWord}),i.type==="logic"&&i.data&&t.jsx(Ae,{children:i.data.displayWord}),i.data.optionsStrings&&t.jsx(Te,{children:i.data.optionsStrings.map((d,w)=>t.jsx(We,{$selected:a===d,$color:"#6366F1",onClick:()=>X(i.id,d),whileTap:{scale:.95},children:d},w))}),t.jsxs(ae,{children:[t.jsx(me,{onClick:J}),t.jsx(de,{text:i.type==="math"?`What is ${i.data.n1} ${i.data.op==="+"?"plus":i.data.op==="-"?"minus":"times"} ${i.data.n2}?`:i.type==="missing_letter"?`What is the missing letter in the word ${i.data.word}?`:i.data.word||i.data.letter||i.prompt}),b===j.length-1?t.jsx(g,{title:r.com_finish.toUpperCase(),onClick:Q,variant:"primary",minWidth:"180px"}):t.jsx(pe,{onClick:Q})]})]})]})};return t.jsxs(re,{children:[t.jsx(he,{icon:U,title:K(),subtitle:r.mst_subtitle,streak:0}),t.jsx(be,{children:t.jsx(oe,{mode:"wait",children:A&&t.jsx(Ge,{initial:{x:50,opacity:0},animate:{x:0,opacity:1},exit:{x:-50,opacity:0},transition:{type:"spring",damping:20,stiffness:100},children:Z(A)},A.id)})}),V&&t.jsxs(Ne,{initial:{opacity:0},animate:{opacity:1},children:[!F&&!M&&t.jsxs(Fe,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},children:[t.jsx(f.div,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",damping:10},children:t.jsx(U,{size:120,color:u>=8?"#FFD700":"#94A3B8"})}),t.jsxs(Ue,{fontSize:"4rem",fontWeight:900,color:"primary",children:[u," / 10"]}),t.jsx(Ee,{fontSize:"2rem",fontWeight:800,children:u>=8?r.com_genius:r.com_goodEffort}),t.jsx(He,{fontSize:"lg",color:"textSecondary",children:u>=8?r.com_masteredCurriculum:r.com_keepPracticing}),t.jsxs(H,{children:[t.jsx(g,{title:r.com_reviewAnswers,onClick:()=>$(!0),variant:"secondary"}),u>=8&&t.jsx(g,{title:r.com_getCertificate,onClick:()=>C(!0),variant:"primary"}),t.jsx(g,{title:r.com_tryAgain,onClick:z,variant:"secondary"}),t.jsx(g,{title:r.com_home,onClick:()=>P("/"),variant:"primary"})]})]}),F&&!M&&t.jsxs(Oe,{initial:{x:50,opacity:0},animate:{x:0,opacity:1},children:[t.jsx(Qe,{fontSize:"2rem",fontWeight:900,color:"primary",children:r.com_testReview}),t.jsx(De,{color:"textSecondary",children:r.com_seeWhatLearned}),t.jsx(Re,{children:j.map(i=>{var d;const a=((d=v[i.id])==null?void 0:d.trim().toUpperCase())===i.correctAnswer.trim().toUpperCase();return t.jsxs(Pe,{$correct:a,children:[t.jsxs(Ve,{children:[t.jsxs(m,{fontSize:"md",fontWeight:800,color:"textPrimary",children:["Question ",i.id,": ",i.prompt]}),a?t.jsx(ge,{color:"#10B981",size:24}):t.jsx(fe,{color:"#F59E0B",size:24})]}),t.jsxs(E,{children:[t.jsx(m,{fontSize:"sm",color:"textSecondary",children:r.com_yourAnswer}),t.jsx(m,{fontSize:"sm",fontWeight:700,color:a?"success":"warning",children:v[i.id]||"(No answer)"})]}),!a&&t.jsxs(E,{children:[t.jsx(m,{fontSize:"sm",color:"textSecondary",children:r.com_correctAnswer}),t.jsx(m,{fontSize:"sm",fontWeight:700,color:"success",children:i.correctAnswer})]})]},i.id)})}),t.jsxs(H,{children:[t.jsx(g,{title:r.com_backToScore,onClick:()=>$(!1),variant:"secondary"}),u>=8&&t.jsx(g,{title:r.com_getCertificate,onClick:()=>C(!0),variant:"primary"}),t.jsx(g,{title:r.com_home,onClick:()=>P("/"),variant:"primary"})]})]}),M&&t.jsx(Ke,{children:t.jsx(ne,{onClose:()=>C(!1),challengeName:(e==null?void 0:e.replace("_"," ").toUpperCase())||"Master Test",score:u,level:"Genius"})})]})]})};export{at as default};

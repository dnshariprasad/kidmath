import{i as r,p as g,q as Z,K as d,aj as q,j as ee,l as te,x as p,n as t,P as ie,T as L,A as re,v as x,a0 as oe,N as ne,a2 as ae}from"./index-DsuWshuf.js";import{c as se}from"./confetti.module-ONDKWxYZ.js";import{S as ce}from"./SpeakIcon-Dx7bfajv.js";import{P as le,N as de}from"./PreviousIcon-CS7YMHVa.js";import{C as me}from"./ChallengeHeader-DKHPMaAk.js";import{g as pe,b as W}from"./wordUtils-DPgh885X.js";import{C as he}from"./circle-check-DuHLVLmK.js";import{C as xe,S as ge}from"./spell-check-Cu_vk4jA.js";import{S as fe}from"./search-BdkZboIT.js";import{S as ue}from"./scale-PGXcW7WZ.js";import{L as ye}from"./languages-BDZwOwFq.js";import{B as we}from"./brain-Bj6s8N7x.js";r.div`
  position: sticky;
  top: 0;
  z-index: 100;
  background: ${e=>e.theme.colors.background}EE;
  backdrop-filter: blur(8px);
  padding: 15px 0;
  margin-bottom: 20px;
  width: 100%;
`;r.div`
  width: 100%;
  height: 8px;
  background: ${e=>e.theme.colors.primary}15;
  border-radius: 4px;
  overflow: hidden;
`;r(g.div)`
  height: 100%;
  background: ${e=>e.theme.colors.primary};
  border-radius: 4px;
`;const je=r.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding-bottom: 80px;
`,Se=r(Z)`
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
`,be=r.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  background: ${e=>e.theme.colors.primary}15;
`,ve=r(g.div)`
  height: 100%;
  background: ${e=>e.theme.colors.primary};
`,Ce=r.div`
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
`,Me=r.div`
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
`,$e=r.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 40px;

  @media (max-width: 480px) {
    flex-direction: column;
    text-align: center;
    gap: 8px;
  }
`,ke=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  padding: 15px 0;

  @media (max-width: 600px) {
    gap: 30px;
    padding: 15px 0;
  }
`,R=r.div`
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
`,_e=r(R)`
  font-size: clamp(1.8rem, 4vw, 3rem);
  letter-spacing: 12px;
`,ze=r.div`
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
`,Te=r(g.div)`
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
`;r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 40px;
`;const Ae=r(g.div)`
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
`,We=r.div`
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
`,Re=r.div`
  background: ${e=>e.$correct?e.theme.colors.success+"10":e.theme.colors.warning+"10"};
  border: 1px solid
    ${e=>e.$correct?e.theme.colors.success+"30":e.theme.colors.warning+"30"};
  padding: 15px 20px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: left;
`,Q=r.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;
`,Pe=r.div`
  color: #6366f1;
`,Be=r(d)`
  text-align: center;
`,Ie=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;r.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;r.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;const Ne=r(g.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
`,Fe=r(d)`
  margin-bottom: 10px;
`,He=r(d)`
  margin: 30px 0;
`,Le=r(d)`
  margin-bottom: 10px;
`,Qe=r(d)`
  margin-bottom: 50px;
  max-width: 500px;
`,E=r.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
`,Ee=r(g.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Ge=r(d)`
  margin-bottom: 20px;
`,Ue=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;r.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
`;const Ye=r(g.div)`
  width: 100%;
`,De=r.div`
  position: fixed;
  inset: 0;
  z-index: 3000;
  background: white;
`,nt=()=>{const{testId:e}=q(),P=ee(),G=te(),[j,U]=p.useState([]),[v,B]=p.useState({}),[Y,I]=p.useState(!1),[f,N]=p.useState(0),[S,M]=p.useState(0),[$,C]=p.useState(!1),[F,k]=p.useState(!1),D=e==="master_test"||!e,K=()=>{if(D)return"Grand Master";switch(e){case"math_addition":return"Addition";case"math_subtraction":return"Subtraction";case"math_multiplication":return"Multiplication";case"math_test":return"Math Hero";case"english_missing_letters":return"Missing Letters";case"english_spelling":return"Listen and Find";case"spelling_test":return"Spelling Hero";case"hindi_test":return"Hindi Legend";case"logic_test":return"Grand Logic";default:return"Test Challenge"}},_=p.useCallback(()=>{const i=[];let a=["math","spelling","missing_letter","comparison","hindi","logic"];(e==="math_addition"||e==="math_subtraction"||e==="math_multiplication")&&(a=["math"]),e==="math_test"&&(a=["math","comparison"]),e==="english_missing_letters"&&(a=["missing_letter"]),e==="english_spelling"&&(a=["spelling"]),e==="spelling_test"&&(a=["spelling","missing_letter"]),e==="hindi_test"&&(a=["hindi"]),e==="logic_test"&&(a=["logic","comparison"]);const l=pe(),y=["अ","आ","इ","ई","उ","ऊ","ए","ऐ","ओ","औ","क","ख","ग","घ"];for(let T=1;T<=10;T++){const u=a[Math.floor(Math.random()*a.length)],s={id:T,type:u};if(u==="math"){const o=Math.floor(Math.random()*10)+1,n=Math.floor(Math.random()*10)+1;let c="+";if(e==="math_addition")c="+";else if(e==="math_subtraction")c="-";else if(e==="math_multiplication")c="*";else{const w=["+","-"];(e==="math_test"||e==="math_multiplication"||!e)&&w.push("*"),c=w[Math.floor(Math.random()*w.length)]}let h=o,b=n,m=0;c==="+"?m=o+n:c==="-"?(h=Math.max(o,n),b=Math.min(o,n),m=h-b):m=o*n,s.prompt="Solve the math!",s.correctAnswer=m.toString();const A=new Set([s.correctAnswer]);for(;A.size<4;){const w=Math.floor(Math.random()*5)+1;A.add((Math.random()>.5?m+w:Math.max(0,m-w)).toString())}s.data={n1:h,n2:b,op:c,optionsStrings:Array.from(A).sort(()=>Math.random()-.5)}}else if(u==="spelling"){const o=W(l).toUpperCase();s.prompt="Tap the word you hear!",s.correctAnswer=o;const n=new Set([o]);for(;n.size<4;)n.add(W(l).toUpperCase());s.data={word:o,optionsStrings:Array.from(n).sort(()=>Math.random()-.5)}}else if(u==="missing_letter"){const o=W(l).toUpperCase(),n=Math.floor(Math.random()*o.length),c=o.split(""),h=c[n];c[n]="_",s.prompt="Choose the missing letter!",s.correctAnswer=h;const b="ABCDEFGHIJKLMNOPQRSTUVWXYZ",m=new Set([h]);for(;m.size<4;)m.add(b[Math.floor(Math.random()*26)]);s.data={displayWord:c.join(""),word:o,optionsStrings:Array.from(m).sort(()=>Math.random()-.5)}}else if(u==="comparison"){const o=[];for(;o.length<4;){const c=Math.floor(Math.random()*100);o.includes(c)||o.push(c)}const n=Math.random()>.5;s.prompt=n?"Tap the smallest number!":"Tap the biggest number!",s.correctAnswer=n?Math.min(...o).toString():Math.max(...o).toString(),s.data={optionsStrings:o.map(String)}}else if(u==="logic"){const o=[{sequence:["🍎","🍌","🍎"],next:"🍌"},{sequence:["🐶","🐱","🐶"],next:"🐱"},{sequence:["1","2","1"],next:"2"},{sequence:["⭐","🌙","⭐"],next:"🌙"},{sequence:["🔴","🔵","🔴"],next:"🔵"},{sequence:["🚗","🚕","🚗"],next:"🚕"},{sequence:["🍦","🍩","🍦"],next:"🍩"}],n=o[Math.floor(Math.random()*o.length)];s.prompt="What comes next?",s.correctAnswer=n.next;const c=new Set([n.next]);for(;c.size<4;){const h=o[Math.floor(Math.random()*o.length)].next;c.add(h)}s.data={displayWord:n.sequence.join(" ")+" ?",optionsStrings:Array.from(c).sort(()=>Math.random()-.5)}}else if(u==="hindi"){const o=y[Math.floor(Math.random()*y.length)];s.prompt="Tap the letter you hear!",s.correctAnswer=o;const n=new Set([o]);for(;n.size<4;)n.add(y[Math.floor(Math.random()*y.length)]);s.data={letter:o,optionsStrings:Array.from(n).sort(()=>Math.random()-.5)}}i.push(s)}U(i),B({}),I(!1),k(!1),C(!1),N(0),M(0),window.scrollTo({top:0,behavior:"smooth"})},[e]);p.useEffect(()=>{_()},[_]);const O=(i,a)=>{B(l=>({...l,[i]:a}))},V=()=>{let i=0;j.forEach(a=>{var l;((l=v[a.id])==null?void 0:l.trim().toUpperCase())===a.correctAnswer.trim().toUpperCase()&&i++}),N(i),I(!0),i>=8&&(se({particleCount:150,spread:70,origin:{y:.6}}),G(ae("master_test")))},z=j[S],H=()=>{S<j.length-1?(M(i=>i+1),window.scrollTo({top:0,behavior:"smooth"})):V()},X=()=>{S>0&&M(i=>i-1)},J=i=>{if(!i)return null;const a=v[i.id]||"";return t.jsxs(Se,{$type:i.type,children:[t.jsx(be,{children:t.jsx(ve,{initial:{width:0},animate:{width:`${(S+1)/10*100}%`},transition:{type:"spring",stiffness:100}})}),t.jsxs(Ce,{children:["QUESTION ",i.id," OF 10"]}),t.jsx(Me,{$type:i.type,children:i.type.replace("_"," ")}),i.type!=="math"&&t.jsxs($e,{children:[t.jsxs(Pe,{children:[i.type==="spelling"&&t.jsx(ge,{size:40}),i.type==="missing_letter"&&t.jsx(fe,{size:40}),i.type==="comparison"&&t.jsx(ue,{size:40}),i.type==="hindi"&&t.jsx(ye,{size:40}),i.type==="logic"&&t.jsx(we,{size:40})]}),t.jsx(Be,{fontSize:"clamp(1.2rem, 4vw, 1.75rem)",fontWeight:900,color:"textPrimary",children:i.prompt})]}),t.jsxs(ke,{children:[i.type==="math"&&i.data&&t.jsxs(R,{children:[i.data.n1??0," ",i.data.op??"+"," ",i.data.n2??0]}),(i.type==="spelling"||i.type==="hindi")&&i.data&&t.jsx(Ie,{children:t.jsx(d,{color:"textSecondary",fontSize:"md",fontWeight:600,children:"Tap the speaker below to hear"})}),i.type==="missing_letter"&&i.data&&t.jsx(R,{children:i.data.displayWord}),i.type==="logic"&&i.data&&t.jsx(_e,{children:i.data.displayWord}),i.data.optionsStrings&&t.jsx(ze,{children:i.data.optionsStrings.map((l,y)=>t.jsx(Te,{$selected:a===l,$color:"#6366F1",onClick:()=>O(i.id,l),whileTap:{scale:.95},children:l},y))}),t.jsxs(ne,{children:[t.jsx(le,{onClick:X}),t.jsx(ce,{text:i.type==="math"?`What is ${i.data.n1} ${i.data.op==="+"?"plus":i.data.op==="-"?"minus":"times"} ${i.data.n2}?`:i.type==="missing_letter"?`What is the missing letter in the word ${i.data.word}?`:i.data.word||i.data.letter||i.prompt}),S===j.length-1?t.jsx(x,{title:"FINISH TEST",onClick:H,variant:"primary",minWidth:"180px"}):t.jsx(de,{onClick:H})]})]})]})};return t.jsxs(ie,{children:[t.jsx(me,{icon:L,title:K(),subtitle:"Show what you know and earn a certificate!",streak:0}),t.jsx(je,{children:t.jsx(re,{mode:"wait",children:z&&t.jsx(Ye,{initial:{x:50,opacity:0},animate:{x:0,opacity:1},exit:{x:-50,opacity:0},transition:{type:"spring",damping:20,stiffness:100},children:J(z)},z.id)})}),Y&&t.jsxs(Ae,{initial:{opacity:0},animate:{opacity:1},children:[!F&&!$&&t.jsxs(Ne,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},children:[t.jsx(g.div,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",damping:10},children:t.jsx(L,{size:120,color:f>=8?"#FFD700":"#94A3B8"})}),t.jsxs(He,{fontSize:"4rem",fontWeight:900,color:"primary",children:[f," / 10"]}),t.jsx(Le,{fontSize:"2rem",fontWeight:800,children:f>=8?"You're a Genius! 🎉":"Good effort! 💪"}),t.jsx(Qe,{fontSize:"lg",color:"textSecondary",children:f>=8?"You've mastered the curriculum! Your brain is officially a supercomputer.":"Keep practicing and you'll get a perfect score next time!"}),t.jsxs(E,{children:[t.jsx(x,{title:"Review Answers",onClick:()=>k(!0),variant:"secondary"}),f>=8&&t.jsx(x,{title:"Get Certificate",onClick:()=>C(!0),variant:"primary"}),t.jsx(x,{title:"Try Again",onClick:_,variant:"secondary"}),t.jsx(x,{title:"Home",onClick:()=>P("/"),variant:"primary"})]})]}),F&&!$&&t.jsxs(Ee,{initial:{x:50,opacity:0},animate:{x:0,opacity:1},children:[t.jsx(Fe,{fontSize:"2rem",fontWeight:900,color:"primary",children:"Test Review"}),t.jsx(Ge,{color:"textSecondary",children:"See what you learned today!"}),t.jsx(We,{children:j.map(i=>{var l;const a=((l=v[i.id])==null?void 0:l.trim().toUpperCase())===i.correctAnswer.trim().toUpperCase();return t.jsxs(Re,{$correct:a,children:[t.jsxs(Ue,{children:[t.jsxs(d,{fontSize:"md",fontWeight:800,color:"textPrimary",children:["Question ",i.id,": ",i.prompt]}),a?t.jsx(he,{color:"#10B981",size:24}):t.jsx(xe,{color:"#F59E0B",size:24})]}),t.jsxs(Q,{children:[t.jsx(d,{fontSize:"sm",color:"textSecondary",children:"Your answer:"}),t.jsx(d,{fontSize:"sm",fontWeight:700,color:a?"success":"warning",children:v[i.id]||"(No answer)"})]}),!a&&t.jsxs(Q,{children:[t.jsx(d,{fontSize:"sm",color:"textSecondary",children:"Correct answer:"}),t.jsx(d,{fontSize:"sm",fontWeight:700,color:"success",children:i.correctAnswer})]})]},i.id)})}),t.jsxs(E,{children:[t.jsx(x,{title:"Back to Score",onClick:()=>k(!1),variant:"secondary"}),f>=8&&t.jsx(x,{title:"Get Certificate",onClick:()=>C(!0),variant:"primary"}),t.jsx(x,{title:"Home",onClick:()=>P("/"),variant:"primary"})]})]}),$&&t.jsx(De,{children:t.jsx(oe,{onClose:()=>C(!1),challengeName:(e==null?void 0:e.replace("_"," ").toUpperCase())||"Master Test",score:f,level:"Genius"})})]})]})};export{nt as default};

import{i as r,p as x,q as Z,K as d,aj as q,j as ee,l as te,x as p,n as t,P as ie,T as Q,A as re,v as h,a0 as oe,N as ae,a2 as ne}from"./index-Befkp--T.js";import{c as se}from"./confetti.module-ONDKWxYZ.js";import{S as ce}from"./SpeakIcon-D2TIuKJ-.js";import{P as le,N as de}from"./PreviousIcon-B2dmu7qJ.js";import{C as me}from"./ChallengeHeader-CX0EvkHC.js";import{g as pe,b as W}from"./wordUtils-DPgh885X.js";import{C as he}from"./circle-check-BtNtLDZL.js";import{C as xe,S as fe}from"./spell-check-Dws2cOVa.js";import{S as ge}from"./search-Bi05SIfq.js";import{S as ue}from"./scale-BG_nVmXJ.js";import{L as ye}from"./languages-DPqw_PTM.js";r.div`
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
`;r(x.div)`
  height: 100%;
  background: ${e=>e.theme.colors.primary};
  border-radius: 4px;
`;const we=r.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding-bottom: 80px;
`,be=r(Z)`
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
`,je=r.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  background: ${e=>e.theme.colors.primary}15;
`,Se=r(x.div)`
  height: 100%;
  background: ${e=>e.theme.colors.primary};
`,ve=r.div`
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
`,Ce=r.div`
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
`,E=r.div`
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
`,Me=r.div`
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
`,ze=r(x.div)`
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
`;const _e=r(x.div)`
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
`,Te=r.div`
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
`,Ae=r.div`
  background: ${e=>e.$correct?e.theme.colors.success+"10":e.theme.colors.warning+"10"};
  border: 1px solid
    ${e=>e.$correct?e.theme.colors.success+"30":e.theme.colors.warning+"30"};
  padding: 15px 20px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: left;
`,H=r.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;
`,We=r.div`
  color: #6366f1;
`,Re=r(d)`
  text-align: center;
`,Pe=r.div`
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
`;const Ie=r(x.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
`,Be=r(d)`
  margin-bottom: 10px;
`,Ne=r(d)`
  margin: 30px 0;
`,Fe=r(d)`
  margin-bottom: 10px;
`,Qe=r(d)`
  margin-bottom: 50px;
  max-width: 500px;
`,U=r.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
`,Ee=r(x.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,He=r(d)`
  margin-bottom: 20px;
`,Ue=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;r.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
`;const Ge=r(x.div)`
  width: 100%;
`,Le=r.div`
  position: fixed;
  inset: 0;
  z-index: 3000;
  background: white;
`,it=()=>{const{testId:e}=q(),R=ee(),G=te(),[b,L]=p.useState([]),[v,P]=p.useState({}),[Y,I]=p.useState(!1),[f,B]=p.useState(0),[j,$]=p.useState(0),[k,C]=p.useState(!1),[N,M]=p.useState(!1),K=e==="master_test"||!e,O=()=>{if(K)return"Grand Master";switch(e){case"math_addition":return"Addition Master";case"math_subtraction":return"Subtraction Master";case"math_multiplication":return"Multiplication Master";case"math_test":return"Math Master";case"spelling_test":return"Spelling Hero";case"hindi_test":return"Hindi Legend";default:return"Test Challenge"}},z=p.useCallback(()=>{const i=[];let n=["math","spelling","missing_letter","comparison","hindi"];(e==="math_addition"||e==="math_subtraction"||e==="math_multiplication")&&(n=["math"]),e==="math_test"&&(n=["math","comparison"]),e==="spelling_test"&&(n=["spelling","missing_letter"]),e==="hindi_test"&&(n=["hindi"]);const c=pe(),g=["अ","आ","इ","ई","उ","ऊ","ए","ऐ","ओ","औ","क","ख","ग","घ"];for(let T=1;T<=10;T++){const u=n[Math.floor(Math.random()*n.length)],s={id:T,type:u};if(u==="math"){const o=Math.floor(Math.random()*10)+1,a=Math.floor(Math.random()*10)+1;let l="+";if(e==="math_addition")l="+";else if(e==="math_subtraction")l="-";else if(e==="math_multiplication")l="*";else{const w=["+","-"];(e==="math_test"||e==="math_multiplication"||!e)&&w.push("*"),l=w[Math.floor(Math.random()*w.length)]}let y=o,S=a,m=0;l==="+"?m=o+a:l==="-"?(y=Math.max(o,a),S=Math.min(o,a),m=y-S):m=o*a,s.prompt="Solve the math!",s.correctAnswer=m.toString();const A=new Set([s.correctAnswer]);for(;A.size<4;){const w=Math.floor(Math.random()*5)+1;A.add((Math.random()>.5?m+w:Math.max(0,m-w)).toString())}s.data={n1:y,n2:S,op:l,optionsStrings:Array.from(A).sort(()=>Math.random()-.5)}}else if(u==="spelling"){const o=W(c).toUpperCase();s.prompt="Tap the word you hear!",s.correctAnswer=o;const a=new Set([o]);for(;a.size<4;)a.add(W(c).toUpperCase());s.data={word:o,optionsStrings:Array.from(a).sort(()=>Math.random()-.5)}}else if(u==="missing_letter"){const o=W(c).toUpperCase(),a=Math.floor(Math.random()*o.length),l=o.split(""),y=l[a];l[a]="_",s.prompt="Choose the missing letter!",s.correctAnswer=y;const S="ABCDEFGHIJKLMNOPQRSTUVWXYZ",m=new Set([y]);for(;m.size<4;)m.add(S[Math.floor(Math.random()*26)]);s.data={displayWord:l.join(""),word:o,optionsStrings:Array.from(m).sort(()=>Math.random()-.5)}}else if(u==="comparison"){const o=[];for(;o.length<4;){const l=Math.floor(Math.random()*100);o.includes(l)||o.push(l)}const a=Math.random()>.5;s.prompt=a?"Tap the smallest number!":"Tap the biggest number!",s.correctAnswer=a?Math.min(...o).toString():Math.max(...o).toString(),s.data={optionsStrings:o.map(String)}}else if(u==="hindi"){const o=g[Math.floor(Math.random()*g.length)];s.prompt="Tap the letter you hear!",s.correctAnswer=o;const a=new Set([o]);for(;a.size<4;)a.add(g[Math.floor(Math.random()*g.length)]);s.data={letter:o,optionsStrings:Array.from(a).sort(()=>Math.random()-.5)}}i.push(s)}L(i),P({}),I(!1),M(!1),C(!1),B(0),$(0),window.scrollTo({top:0,behavior:"smooth"})},[e]);p.useEffect(()=>{z()},[z]);const V=(i,n)=>{P(c=>({...c,[i]:n}))},D=()=>{let i=0;b.forEach(n=>{var c;((c=v[n.id])==null?void 0:c.trim().toUpperCase())===n.correctAnswer.trim().toUpperCase()&&i++}),B(i),I(!0),i>=8&&(se({particleCount:150,spread:70,origin:{y:.6}}),G(ne("master_test")))},_=b[j],F=()=>{j<b.length-1?($(i=>i+1),window.scrollTo({top:0,behavior:"smooth"})):D()},X=()=>{j>0&&$(i=>i-1)},J=i=>{if(!i)return null;const n=v[i.id]||"";return t.jsxs(be,{$type:i.type,children:[t.jsx(je,{children:t.jsx(Se,{initial:{width:0},animate:{width:`${(j+1)/10*100}%`},transition:{type:"spring",stiffness:100}})}),t.jsxs(ve,{children:["QUESTION ",i.id," OF 10"]}),t.jsx(Ce,{$type:i.type,children:i.type.replace("_"," ")}),i.type!=="math"&&t.jsxs($e,{children:[t.jsxs(We,{children:[i.type==="spelling"&&t.jsx(fe,{size:40}),i.type==="missing_letter"&&t.jsx(ge,{size:40}),i.type==="comparison"&&t.jsx(ue,{size:40}),i.type==="hindi"&&t.jsx(ye,{size:40})]}),t.jsx(Re,{fontSize:"clamp(1.2rem, 4vw, 1.75rem)",fontWeight:900,color:"textPrimary",children:i.prompt})]}),t.jsxs(ke,{children:[i.type==="math"&&i.data&&t.jsxs(E,{children:[i.data.n1??0," ",i.data.op??"+"," ",i.data.n2??0]}),(i.type==="spelling"||i.type==="hindi")&&i.data&&t.jsx(Pe,{children:t.jsx(d,{color:"textSecondary",fontSize:"md",fontWeight:600,children:"Tap the speaker below to hear"})}),i.type==="missing_letter"&&i.data&&t.jsx(E,{children:i.data.displayWord}),i.data.optionsStrings&&t.jsx(Me,{children:i.data.optionsStrings.map((c,g)=>t.jsx(ze,{$selected:n===c,$color:"#6366F1",onClick:()=>V(i.id,c),whileTap:{scale:.95},children:c},g))}),t.jsxs(ae,{children:[t.jsx(le,{onClick:X}),t.jsx(ce,{text:i.type==="math"?`What is ${i.data.n1} ${i.data.op==="+"?"plus":i.data.op==="-"?"minus":"times"} ${i.data.n2}?`:i.type==="missing_letter"?`What is the missing letter in the word ${i.data.word}?`:i.data.word||i.data.letter||i.prompt}),j===b.length-1?t.jsx(h,{title:"FINISH TEST",onClick:F,variant:"primary",minWidth:"180px"}):t.jsx(de,{onClick:F})]})]})]})};return t.jsxs(ie,{children:[t.jsx(me,{icon:Q,title:O(),subtitle:"Show what you know and earn a certificate!",streak:0}),t.jsx(we,{children:t.jsx(re,{mode:"wait",children:_&&t.jsx(Ge,{initial:{x:50,opacity:0},animate:{x:0,opacity:1},exit:{x:-50,opacity:0},transition:{type:"spring",damping:20,stiffness:100},children:J(_)},_.id)})}),Y&&t.jsxs(_e,{initial:{opacity:0},animate:{opacity:1},children:[!N&&!k&&t.jsxs(Ie,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},children:[t.jsx(x.div,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",damping:10},children:t.jsx(Q,{size:120,color:f>=8?"#FFD700":"#94A3B8"})}),t.jsxs(Ne,{fontSize:"4rem",fontWeight:900,color:"primary",children:[f," / 10"]}),t.jsx(Fe,{fontSize:"2rem",fontWeight:800,children:f>=8?"You're a Genius! 🎉":"Good effort! 💪"}),t.jsx(Qe,{fontSize:"lg",color:"textSecondary",children:f>=8?"You've mastered the curriculum! Your brain is officially a supercomputer.":"Keep practicing and you'll get a perfect score next time!"}),t.jsxs(U,{children:[t.jsx(h,{title:"Review Answers",onClick:()=>M(!0),variant:"secondary"}),f>=8&&t.jsx(h,{title:"Get Certificate",onClick:()=>C(!0),variant:"primary"}),t.jsx(h,{title:"Try Again",onClick:z,variant:"secondary"}),t.jsx(h,{title:"Home",onClick:()=>R("/"),variant:"primary"})]})]}),N&&!k&&t.jsxs(Ee,{initial:{x:50,opacity:0},animate:{x:0,opacity:1},children:[t.jsx(Be,{fontSize:"2rem",fontWeight:900,color:"primary",children:"Test Review"}),t.jsx(He,{color:"textSecondary",children:"See what you learned today!"}),t.jsx(Te,{children:b.map(i=>{var c;const n=((c=v[i.id])==null?void 0:c.trim().toUpperCase())===i.correctAnswer.trim().toUpperCase();return t.jsxs(Ae,{$correct:n,children:[t.jsxs(Ue,{children:[t.jsxs(d,{fontSize:"md",fontWeight:800,color:"textPrimary",children:["Question ",i.id,": ",i.prompt]}),n?t.jsx(he,{color:"#10B981",size:24}):t.jsx(xe,{color:"#F59E0B",size:24})]}),t.jsxs(H,{children:[t.jsx(d,{fontSize:"sm",color:"textSecondary",children:"Your answer:"}),t.jsx(d,{fontSize:"sm",fontWeight:700,color:n?"success":"warning",children:v[i.id]||"(No answer)"})]}),!n&&t.jsxs(H,{children:[t.jsx(d,{fontSize:"sm",color:"textSecondary",children:"Correct answer:"}),t.jsx(d,{fontSize:"sm",fontWeight:700,color:"success",children:i.correctAnswer})]})]},i.id)})}),t.jsxs(U,{children:[t.jsx(h,{title:"Back to Score",onClick:()=>M(!1),variant:"secondary"}),f>=8&&t.jsx(h,{title:"Get Certificate",onClick:()=>C(!0),variant:"primary"}),t.jsx(h,{title:"Home",onClick:()=>R("/"),variant:"primary"})]})]}),k&&t.jsx(Le,{children:t.jsx(oe,{onClose:()=>C(!1),challengeName:(e==null?void 0:e.replace("_"," ").toUpperCase())||"Master Test",score:f,level:"Genius"})})]})]})};export{it as default};

import{i as r,p as g,q as J,K as c,aj as Z,j as q,l as ee,x as m,n as t,P as te,A as ie,T as P,v as p,a0 as re,a2 as oe}from"./index-z4hkVttP.js";import{C as ne}from"./ChallengeHeader-CsoM-KCR.js";import{c as ae}from"./confetti.module-ONDKWxYZ.js";import{S as se}from"./SpeakIcon-CTPfc8He.js";import{g as ce,b as E}from"./wordUtils-DPgh885X.js";import{C as le}from"./circle-check-eIjEBcwn.js";import{C as de,S as I}from"./spell-check-kNs0FZQN.js";import{C as F}from"./calculator-D76Fx5sp.js";import{S as me}from"./search-C9kkyYv0.js";import{S as pe}from"./scale-p2riQH8J.js";import{L as B}from"./languages-CRNY1-zn.js";import"./index-DEFkihkY.js";const xe=r.div`
  position: sticky;
  top: 0;
  z-index: 100;
  background: ${e=>e.theme.colors.background}EE;
  backdrop-filter: blur(8px);
  padding: 15px 0;
  margin-bottom: 20px;
  width: 100%;
`,he=r.div`
  width: 100%;
  height: 8px;
  background: ${e=>e.theme.colors.primary}15;
  border-radius: 4px;
  overflow: hidden;
`,ge=r(g.div)`
  height: 100%;
  background: ${e=>e.theme.colors.primary};
  border-radius: 4px;
`,ue=r.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding-bottom: 80px;
`,fe=r(J)`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 35px 30px;
  position: relative;
  background: ${e=>e.theme.colors.surface};
  border-radius: 32px;
  border: 1px solid ${e=>e.theme.colors.primary}15;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
  margin-top: 20px;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 8px;
    background: ${e=>{switch(e.$type){case"math":return e.theme.colors.math||e.theme.colors.primary;case"spelling":case"missing_letter":return e.theme.colors.english||e.theme.colors.primary;case"hindi":return e.theme.colors.hindi||e.theme.colors.primary;case"comparison":return e.theme.colors.math||e.theme.colors.primary;default:return e.theme.colors.primary}}};
    border-radius: 32px 0 0 32px;
  }
  @media (max-width: 600px) {
    padding: 60px 20px 30px;
    gap: 20px;
    border-radius: 24px;
  }
`,ye=r.div`
  position: absolute;
  top: 20px;
  left: 30px;
  font-weight: 900;
  font-size: 0.75rem;
  letter-spacing: 2px;
  color: ${e=>e.theme.colors.textSecondary};
  opacity: 0.5;
  text-transform: uppercase;

  @media (max-width: 600px) {
    top: 15px;
    left: 20px;
    font-size: 0.65rem;
  }
`,we=r.div`
  position: absolute;
  top: 20px;
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
    top: 15px;
    right: 20px;
    font-size: 0.65rem;
    padding: 4px 12px;
  }
`,je=r.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 5px;

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
    gap: 8px;
  }
`,be=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 20px 0;

  @media (max-width: 600px) {
    gap: 20px;
    padding: 10px 0;
  }
`,Q=r.div`
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
`,Se=r.div`
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
`,U=r(g.div)`
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
`,ve=r.div`
  font-size: 1.5rem;
  font-weight: 900;
  color: ${e=>e.theme.colors.textSecondary};
  opacity: 0.3;
`,Ce=r.input`
  width: 100%;
  max-width: 350px;
  padding: 15px 25px;
  border-radius: 18px;
  border: 3px solid ${e=>e.theme.colors.primary}15;
  background: ${e=>e.theme.colors.surfaceVariant}20;
  font-size: 1.25rem;
  font-weight: 800;
  text-align: center;
  color: ${e=>e.theme.colors.textPrimary};
  transition: all 0.2s ease;
  outline: none;

  &:focus {
    border-color: ${e=>e.theme.colors.primary};
    background: ${e=>e.theme.colors.surface};
    box-shadow: ${e=>e.theme.shadows.md};
  }

  &::placeholder {
    color: ${e=>e.theme.colors.textSecondary}40;
    font-size: 1rem;
    font-weight: 600;
  }
`,$e=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 40px;
`,ke=r(g.div)`
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
`,ze=r.div`
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
`,Te=r.div`
  background: ${e=>e.$correct?e.theme.colors.success+"10":e.theme.colors.warning+"10"};
  border: 1px solid
    ${e=>e.$correct?e.theme.colors.success+"30":e.theme.colors.warning+"30"};
  padding: 15px 20px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: left;
`,N=r.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;
`,Me=r.div`
  color: #6366f1;
`,We=r(c)`
  text-align: center;
`,Re=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`,_e=r($e)`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 600px) {
    flex-direction: column-reverse;
    align-items: stretch;
  }
`,Ae=r.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`,Pe=r.div`
  width: 100%;
  display: flex;
  justify-content: center;
`,Ee=r(g.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
`,Ie=r(c)`
  margin-bottom: 10px;
`,Fe=r(c)`
  margin: 30px 0;
`,Be=r(c)`
  margin-bottom: 10px;
`,Qe=r(c)`
  margin-bottom: 50px;
  max-width: 500px;
`,G=r.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
`,Ue=r(g.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Ne=r(c)`
  margin-bottom: 20px;
`,Ge=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,He=r.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
`,Le=r(g.div)`
  width: 100%;
`,Oe=r.div`
  position: fixed;
  inset: 0;
  z-index: 3000;
  background: white;
`,ot=()=>{const{testId:e}=Z(),T=q(),H=ee(),[f,L]=m.useState([]),[y,M]=m.useState({}),[O,W]=m.useState(!1),[h,R]=m.useState(0),[x,j]=m.useState(0),[b,w]=m.useState(!1),[_,S]=m.useState(!1),v=m.useCallback(()=>{const i=[];let n=["math","spelling","missing_letter","comparison"];e==="math_test"&&(n=["math","comparison"]),e==="spelling_test"&&(n=["spelling","missing_letter"]),e==="hindi_test"&&(n=["hindi"]);const l=ce(),A=["अ","आ","इ","ई","उ","ऊ","ए","ऐ","ओ","औ","क","ख","ग","घ"];for(let k=1;k<=10;k++){const u=n[Math.floor(Math.random()*n.length)],a={id:k,type:u};if(u==="math"){const o=Math.floor(Math.random()*10)+1,s=Math.floor(Math.random()*10)+1,d=Math.random()>.5?"+":"-",z=d==="+"?o+s:Math.max(o,s)-Math.min(o,s);a.prompt=`What is ${d==="+"?o:Math.max(o,s)} ${d} ${d==="+"?s:Math.min(o,s)}?`,a.correctAnswer=z.toString(),a.data={n1:d==="+"?o:Math.max(o,s),n2:d==="+"?s:Math.min(o,s),op:d}}else if(u==="spelling"){const o=E(l).toUpperCase();a.prompt="Listen and type the word!",a.correctAnswer=o,a.data={word:o}}else if(u==="missing_letter"){const o=E(l).toUpperCase(),s=Math.floor(Math.random()*o.length),d=o.split(""),z=d[s];d[s]="_",a.prompt="What is the missing letter?",a.correctAnswer=z,a.data={displayWord:d.join(""),word:o}}else if(u==="comparison"){const o=Math.floor(Math.random()*50),s=Math.floor(Math.random()*50);a.prompt="Tap the bigger number!",a.correctAnswer=o>s?o.toString():s.toString(),a.data={n1:o,n2:s}}else if(u==="hindi"){const o=A[Math.floor(Math.random()*A.length)];a.prompt="Listen and identify the letter!",a.correctAnswer=o,a.data={letter:o}}i.push(a)}L(i),M({}),W(!1),S(!1),w(!1),R(0),j(0),window.scrollTo({top:0,behavior:"smooth"})},[e]);m.useEffect(()=>{v()},[v]);const C=(i,n)=>{M(l=>({...l,[i]:n}))},V=()=>{let i=0;f.forEach(n=>{var l;((l=y[n.id])==null?void 0:l.trim().toUpperCase())===n.correctAnswer.trim().toUpperCase()&&i++}),R(i),W(!0),i>=8&&(ae({particleCount:150,spread:70,origin:{y:.6}}),H(oe("master_test")))},$=f[x],Y=()=>{x<f.length-1?(j(i=>i+1),window.scrollTo({top:0,behavior:"smooth"})):V()},K=()=>{x>0&&j(i=>i-1)},D=i=>{if(!i)return null;const n=y[i.id]||"";return t.jsxs(fe,{$type:i.type,children:[t.jsxs(ye,{children:["QUESTION ",i.id," OF 10"]}),t.jsx(we,{$type:i.type,children:i.type.replace("_"," ")}),t.jsxs(je,{children:[t.jsxs(Me,{children:[i.type==="math"&&t.jsx(F,{size:40}),i.type==="spelling"&&t.jsx(I,{size:40}),i.type==="missing_letter"&&t.jsx(me,{size:40}),i.type==="comparison"&&t.jsx(pe,{size:40}),i.type==="hindi"&&t.jsx(B,{size:40})]}),t.jsx(We,{fontSize:"xl",fontWeight:900,color:"textPrimary",children:i.prompt})]}),t.jsxs(be,{children:[i.type==="math"&&i.data&&t.jsxs(Q,{children:[i.data.n1??0," ",i.data.op??"+"," ",i.data.n2??0]}),(i.type==="spelling"||i.type==="hindi")&&i.data&&t.jsxs(Re,{children:[t.jsx(se,{text:i.data.word||i.data.letter||"",size:"huge"}),t.jsx(c,{color:"textSecondary",fontSize:"md",fontWeight:600,children:"Tap the speaker to hear"})]}),i.type==="missing_letter"&&i.data&&t.jsx(Q,{children:i.data.displayWord}),i.type==="comparison"&&i.data&&t.jsxs(Se,{children:[t.jsx(U,{$selected:n===(i.data.n1??0).toString(),$color:"#6366F1",onClick:()=>C(i.id,(i.data.n1??0).toString()),whileTap:{scale:.95},children:i.data.n1}),t.jsx(ve,{children:"VS"}),t.jsx(U,{$selected:n===(i.data.n2??0).toString(),$color:"#6366F1",onClick:()=>C(i.id,(i.data.n2??0).toString()),whileTap:{scale:.95},children:i.data.n2})]}),i.type!=="comparison"&&t.jsx(Pe,{children:t.jsx(Ce,{value:n,onChange:l=>C(i.id,l.target.value),placeholder:"Type answer here...",autoFocus:!0})}),t.jsxs(_e,{children:[t.jsx(p,{title:"PREVIOUS",onClick:K,variant:"secondary",isActive:x!==0,minWidth:"140px"}),t.jsx(p,{title:x===f.length-1?"FINISH TEST":"NEXT QUESTION",onClick:Y,variant:"primary",minWidth:"180px"})]})]})]})},X=()=>{switch(e){case"math_test":return F;case"spelling_test":return I;case"hindi_test":return B;default:return P}};return t.jsxs(te,{children:[t.jsx(ne,{icon:X(),title:(e==null?void 0:e.replace("_"," ").toUpperCase())||"Master Test",subtitle:"Focus on one question at a time. You've got this!",streak:0}),t.jsx(xe,{children:t.jsxs(He,{children:[t.jsxs(Ae,{children:[t.jsxs(c,{fontSize:"sm",fontWeight:700,color:"textSecondary",children:["QUESTION ",x+1," PROGRESS"]}),t.jsxs(c,{fontSize:"sm",fontWeight:900,color:"primary",children:[x+1," / 10"]})]}),t.jsx(he,{children:t.jsx(ge,{initial:{width:0},animate:{width:`${(x+1)/10*100}%`},transition:{type:"spring",stiffness:100}})})]})}),t.jsx(ue,{children:t.jsx(ie,{mode:"wait",children:$&&t.jsx(Le,{initial:{x:50,opacity:0},animate:{x:0,opacity:1},exit:{x:-50,opacity:0},transition:{type:"spring",damping:20,stiffness:100},children:D($)},$.id)})}),O&&t.jsxs(ke,{initial:{opacity:0},animate:{opacity:1},children:[!_&&!b&&t.jsxs(Ee,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},children:[t.jsx(g.div,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",damping:10},children:t.jsx(P,{size:120,color:h>=8?"#FFD700":"#94A3B8"})}),t.jsxs(Fe,{fontSize:"4rem",fontWeight:900,color:"primary",children:[h," / 10"]}),t.jsx(Be,{fontSize:"2rem",fontWeight:800,children:h>=8?"You're a Genius! 🎉":"Good effort! 💪"}),t.jsx(Qe,{fontSize:"lg",color:"textSecondary",children:h>=8?"You've mastered the curriculum! Your brain is officially a supercomputer.":"Keep practicing and you'll get a perfect score next time!"}),t.jsxs(G,{children:[t.jsx(p,{title:"Review Answers",onClick:()=>S(!0),variant:"secondary"}),h>=8&&t.jsx(p,{title:"Get Certificate",onClick:()=>w(!0),variant:"primary"}),t.jsx(p,{title:"Try Again",onClick:v,variant:"secondary"}),t.jsx(p,{title:"Home",onClick:()=>T("/"),variant:"primary"})]})]}),_&&!b&&t.jsxs(Ue,{initial:{x:50,opacity:0},animate:{x:0,opacity:1},children:[t.jsx(Ie,{fontSize:"2rem",fontWeight:900,color:"primary",children:"Test Review"}),t.jsx(Ne,{color:"textSecondary",children:"See what you learned today!"}),t.jsx(ze,{children:f.map(i=>{var l;const n=((l=y[i.id])==null?void 0:l.trim().toUpperCase())===i.correctAnswer.trim().toUpperCase();return t.jsxs(Te,{$correct:n,children:[t.jsxs(Ge,{children:[t.jsxs(c,{fontSize:"md",fontWeight:800,color:"textPrimary",children:["Question ",i.id,": ",i.prompt]}),n?t.jsx(le,{color:"#10B981",size:24}):t.jsx(de,{color:"#F59E0B",size:24})]}),t.jsxs(N,{children:[t.jsx(c,{fontSize:"sm",color:"textSecondary",children:"Your answer:"}),t.jsx(c,{fontSize:"sm",fontWeight:700,color:n?"success":"warning",children:y[i.id]||"(No answer)"})]}),!n&&t.jsxs(N,{children:[t.jsx(c,{fontSize:"sm",color:"textSecondary",children:"Correct answer:"}),t.jsx(c,{fontSize:"sm",fontWeight:700,color:"success",children:i.correctAnswer})]})]},i.id)})}),t.jsxs(G,{children:[t.jsx(p,{title:"Back to Score",onClick:()=>S(!1),variant:"secondary"}),h>=8&&t.jsx(p,{title:"Get Certificate",onClick:()=>w(!0),variant:"primary"}),t.jsx(p,{title:"Home",onClick:()=>T("/"),variant:"primary"})]})]}),b&&t.jsx(Oe,{children:t.jsx(re,{onClose:()=>w(!1),challengeName:(e==null?void 0:e.replace("_"," ").toUpperCase())||"Master Test",score:h,level:"Genius"})})]})]})};export{ot as default};

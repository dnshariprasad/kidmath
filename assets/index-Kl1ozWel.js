import{i as r,p as m,q as O,K as l,aj as V,j as D,l as X,x as d,n as t,P as J,A as Z,T as q,v as p,a0 as ee,N as te,a2 as ie}from"./index-ry-C20ZN.js";import{c as re}from"./confetti.module-ONDKWxYZ.js";import{S as oe}from"./SpeakIcon-k93HkiOb.js";import{P as ae,N as ne}from"./PreviousIcon-DOfsI869.js";import{g as se,b as A}from"./wordUtils-DPgh885X.js";import{C as ce}from"./circle-check-CbBvlLXr.js";import{C as le,S as de}from"./spell-check-8HZSCCeO.js";import{S as pe}from"./search-BSAlcNdl.js";import{S as me}from"./scale-Bvl-OzCX.js";import{L as he}from"./languages-B2YrZ4ls.js";import"./index-LAtfndeI.js";r.div`
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
`;r(m.div)`
  height: 100%;
  background: ${e=>e.theme.colors.primary};
  border-radius: 4px;
`;const xe=r.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding-bottom: 80px;
`,ge=r(O)`
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
`,fe=r.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  background: ${e=>e.theme.colors.primary}15;
`,ue=r(m.div)`
  height: 100%;
  background: ${e=>e.theme.colors.primary};
`,ye=r.div`
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
`,we=r.div`
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
`,je=r.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 40px;

  @media (max-width: 480px) {
    flex-direction: column;
    text-align: center;
    gap: 8px;
  }
`,ve=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  padding: 15px 0;

  @media (max-width: 600px) {
    gap: 30px;
    padding: 15px 0;
  }
`,N=r.div`
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
`,be=r.div`
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
`,Se=r(m.div)`
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
`;const Ce=r(m.div)`
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
`,$e=r.div`
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
`,ke=r.div`
  background: ${e=>e.$correct?e.theme.colors.success+"10":e.theme.colors.warning+"10"};
  border: 1px solid
    ${e=>e.$correct?e.theme.colors.success+"30":e.theme.colors.warning+"30"};
  padding: 15px 20px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: left;
`,F=r.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;
`,ze=r.div`
  color: #6366f1;
`,Me=r(l)`
  text-align: center;
`,Te=r.div`
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
`;const Ae=r(m.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
`,We=r(l)`
  margin-bottom: 10px;
`,Re=r(l)`
  margin: 30px 0;
`,Pe=r(l)`
  margin-bottom: 10px;
`,_e=r(l)`
  margin-bottom: 50px;
  max-width: 500px;
`,Q=r.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
`,Ie=r(m.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Be=r(l)`
  margin-bottom: 20px;
`,Ne=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;r.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
`;const Fe=r(m.div)`
  width: 100%;
`,Qe=r.div`
  position: fixed;
  inset: 0;
  z-index: 3000;
  background: white;
`,Je=()=>{const{testId:e}=V(),W=D(),E=X(),[w,U]=d.useState([]),[b,R]=d.useState({}),[G,P]=d.useState(!1),[h,_]=d.useState(0),[j,C]=d.useState(0),[$,S]=d.useState(!1),[I,k]=d.useState(!1),z=d.useCallback(()=>{const i=[];let n=["math","spelling","missing_letter","comparison"];e==="math_test"&&(n=["math","comparison"]),e==="spelling_test"&&(n=["spelling","missing_letter"]),e==="hindi_test"&&(n=["hindi"]);const c=se(),x=["अ","आ","इ","ई","उ","ऊ","ए","ऐ","ओ","औ","क","ख","ग","घ"];for(let T=1;T<=10;T++){const g=n[Math.floor(Math.random()*n.length)],s={id:T,type:g};if(g==="math"){const o=Math.floor(Math.random()*10)+1,a=Math.floor(Math.random()*10)+1,f=Math.random()>.5?"+":"-",u=f==="+"?o+a:Math.max(o,a)-Math.min(o,a);s.prompt="Solve the math!",s.correctAnswer=u.toString();const v=new Set([s.correctAnswer]);for(;v.size<4;){const y=Math.floor(Math.random()*5)+1;v.add((Math.random()>.5?u+y:Math.max(0,u-y)).toString())}s.data={n1:o,n2:a,op:f,optionsStrings:Array.from(v).sort(()=>Math.random()-.5)}}else if(g==="spelling"){const o=A(c).toUpperCase();s.prompt="Tap the word you hear!",s.correctAnswer=o;const a=new Set([o]);for(;a.size<4;)a.add(A(c).toUpperCase());s.data={word:o,optionsStrings:Array.from(a).sort(()=>Math.random()-.5)}}else if(g==="missing_letter"){const o=A(c).toUpperCase(),a=Math.floor(Math.random()*o.length),f=o.split(""),u=f[a];f[a]="_",s.prompt="Choose the missing letter!",s.correctAnswer=u;const v="ABCDEFGHIJKLMNOPQRSTUVWXYZ",y=new Set([u]);for(;y.size<4;)y.add(v[Math.floor(Math.random()*26)]);s.data={displayWord:f.join(""),word:o,optionsStrings:Array.from(y).sort(()=>Math.random()-.5)}}else if(g==="comparison"){const o=[];for(;o.length<4;){const a=Math.floor(Math.random()*100);o.includes(a)||o.push(a)}s.prompt="Tap the biggest number!",s.correctAnswer=Math.max(...o).toString(),s.data={optionsStrings:o.map(String)}}else if(g==="hindi"){const o=x[Math.floor(Math.random()*x.length)];s.prompt="Tap the letter you hear!",s.correctAnswer=o;const a=new Set([o]);for(;a.size<4;)a.add(x[Math.floor(Math.random()*x.length)]);s.data={letter:o,optionsStrings:Array.from(a).sort(()=>Math.random()-.5)}}i.push(s)}U(i),R({}),P(!1),k(!1),S(!1),_(0),C(0),window.scrollTo({top:0,behavior:"smooth"})},[e]);d.useEffect(()=>{z()},[z]);const H=(i,n)=>{R(c=>({...c,[i]:n}))},L=()=>{let i=0;w.forEach(n=>{var c;((c=b[n.id])==null?void 0:c.trim().toUpperCase())===n.correctAnswer.trim().toUpperCase()&&i++}),_(i),P(!0),i>=8&&(re({particleCount:150,spread:70,origin:{y:.6}}),E(ie("master_test")))},M=w[j],B=()=>{j<w.length-1?(C(i=>i+1),window.scrollTo({top:0,behavior:"smooth"})):L()},Y=()=>{j>0&&C(i=>i-1)},K=i=>{if(!i)return null;const n=b[i.id]||"";return t.jsxs(ge,{$type:i.type,children:[t.jsx(fe,{children:t.jsx(ue,{initial:{width:0},animate:{width:`${(j+1)/10*100}%`},transition:{type:"spring",stiffness:100}})}),t.jsxs(ye,{children:["QUESTION ",i.id," OF 10"]}),t.jsx(we,{$type:i.type,children:i.type.replace("_"," ")}),i.type!=="math"&&t.jsxs(je,{children:[t.jsxs(ze,{children:[i.type==="spelling"&&t.jsx(de,{size:40}),i.type==="missing_letter"&&t.jsx(pe,{size:40}),i.type==="comparison"&&t.jsx(me,{size:40}),i.type==="hindi"&&t.jsx(he,{size:40})]}),t.jsx(Me,{fontSize:"clamp(1.2rem, 4vw, 1.75rem)",fontWeight:900,color:"textPrimary",children:i.prompt})]}),t.jsxs(ve,{children:[i.type==="math"&&i.data&&t.jsxs(N,{children:[i.data.n1??0," ",i.data.op??"+"," ",i.data.n2??0]}),(i.type==="spelling"||i.type==="hindi")&&i.data&&t.jsx(Te,{children:t.jsx(l,{color:"textSecondary",fontSize:"md",fontWeight:600,children:"Tap the speaker below to hear"})}),i.type==="missing_letter"&&i.data&&t.jsx(N,{children:i.data.displayWord}),i.data.optionsStrings&&t.jsx(be,{children:i.data.optionsStrings.map((c,x)=>t.jsx(Se,{$selected:n===c,$color:"#6366F1",onClick:()=>H(i.id,c),whileTap:{scale:.95},children:c},x))}),t.jsxs(te,{children:[t.jsx(ae,{onClick:Y}),t.jsx(oe,{text:i.type==="math"?`What is ${i.data.n1} ${i.data.op==="+"?"plus":i.data.op==="-"?"minus":"times"} ${i.data.n2}?`:i.type==="missing_letter"?`What is the missing letter in the word ${i.data.word}?`:i.data.word||i.data.letter||i.prompt}),j===w.length-1?t.jsx(p,{title:"FINISH TEST",onClick:B,variant:"primary",minWidth:"180px"}):t.jsx(ne,{onClick:B})]})]})]})};return t.jsxs(J,{children:[t.jsx(xe,{children:t.jsx(Z,{mode:"wait",children:M&&t.jsx(Fe,{initial:{x:50,opacity:0},animate:{x:0,opacity:1},exit:{x:-50,opacity:0},transition:{type:"spring",damping:20,stiffness:100},children:K(M)},M.id)})}),G&&t.jsxs(Ce,{initial:{opacity:0},animate:{opacity:1},children:[!I&&!$&&t.jsxs(Ae,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},children:[t.jsx(m.div,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",damping:10},children:t.jsx(q,{size:120,color:h>=8?"#FFD700":"#94A3B8"})}),t.jsxs(Re,{fontSize:"4rem",fontWeight:900,color:"primary",children:[h," / 10"]}),t.jsx(Pe,{fontSize:"2rem",fontWeight:800,children:h>=8?"You're a Genius! 🎉":"Good effort! 💪"}),t.jsx(_e,{fontSize:"lg",color:"textSecondary",children:h>=8?"You've mastered the curriculum! Your brain is officially a supercomputer.":"Keep practicing and you'll get a perfect score next time!"}),t.jsxs(Q,{children:[t.jsx(p,{title:"Review Answers",onClick:()=>k(!0),variant:"secondary"}),h>=8&&t.jsx(p,{title:"Get Certificate",onClick:()=>S(!0),variant:"primary"}),t.jsx(p,{title:"Try Again",onClick:z,variant:"secondary"}),t.jsx(p,{title:"Home",onClick:()=>W("/"),variant:"primary"})]})]}),I&&!$&&t.jsxs(Ie,{initial:{x:50,opacity:0},animate:{x:0,opacity:1},children:[t.jsx(We,{fontSize:"2rem",fontWeight:900,color:"primary",children:"Test Review"}),t.jsx(Be,{color:"textSecondary",children:"See what you learned today!"}),t.jsx($e,{children:w.map(i=>{var c;const n=((c=b[i.id])==null?void 0:c.trim().toUpperCase())===i.correctAnswer.trim().toUpperCase();return t.jsxs(ke,{$correct:n,children:[t.jsxs(Ne,{children:[t.jsxs(l,{fontSize:"md",fontWeight:800,color:"textPrimary",children:["Question ",i.id,": ",i.prompt]}),n?t.jsx(ce,{color:"#10B981",size:24}):t.jsx(le,{color:"#F59E0B",size:24})]}),t.jsxs(F,{children:[t.jsx(l,{fontSize:"sm",color:"textSecondary",children:"Your answer:"}),t.jsx(l,{fontSize:"sm",fontWeight:700,color:n?"success":"warning",children:b[i.id]||"(No answer)"})]}),!n&&t.jsxs(F,{children:[t.jsx(l,{fontSize:"sm",color:"textSecondary",children:"Correct answer:"}),t.jsx(l,{fontSize:"sm",fontWeight:700,color:"success",children:i.correctAnswer})]})]},i.id)})}),t.jsxs(Q,{children:[t.jsx(p,{title:"Back to Score",onClick:()=>k(!1),variant:"secondary"}),h>=8&&t.jsx(p,{title:"Get Certificate",onClick:()=>S(!0),variant:"primary"}),t.jsx(p,{title:"Home",onClick:()=>W("/"),variant:"primary"})]})]}),$&&t.jsx(Qe,{children:t.jsx(ee,{onClose:()=>S(!1),challengeName:(e==null?void 0:e.replace("_"," ").toUpperCase())||"Master Test",score:h,level:"Genius"})})]})]})};export{Je as default};

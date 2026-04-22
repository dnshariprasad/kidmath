import{i as r,p,q as D,K as l,ai as V,j as X,l as J,x as d,n as i,P as Z,A as q,T as ee,v as m,$ as te,N as ie,a1 as re}from"./index-BpSq1QqG.js";import{c as oe}from"./confetti.module-ONDKWxYZ.js";import{S as ae}from"./SpeakIcon-BIwRomQa.js";import{P as ne,N as se}from"./PreviousIcon-B7LSSTI5.js";import{g as ce,b as T}from"./wordUtils-DPgh885X.js";import{C as le}from"./circle-check-Hrcxq4rj.js";import{C as de,S as pe}from"./spell-check-Ctt2MJtm.js";import{S as me}from"./search-BP2gZaT1.js";import{S as he}from"./scale-B1hERqNV.js";import{L as xe}from"./languages-Dtxy5IUr.js";import"./index-BPyUWacD.js";r.div`
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
`;r(p.div)`
  height: 100%;
  background: ${e=>e.theme.colors.primary};
  border-radius: 4px;
`;const fe=r.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding-bottom: 80px;
`,ge=r(D)`
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
`,ue=r.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  background: ${e=>e.theme.colors.primary}15;
`,ye=r(p.div)`
  height: 100%;
  background: ${e=>e.theme.colors.primary};
`,we=r.div`
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
`,be=r.div`
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
`,I=r.div`
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
`,Ce=r(p.div)`
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
`;const $e=r(p.div)`
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
`,ke=r.div`
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
`,ze=r.div`
  background: ${e=>e.$correct?e.theme.colors.success+"10":e.theme.colors.warning+"10"};
  border: 1px solid
    ${e=>e.$correct?e.theme.colors.success+"30":e.theme.colors.warning+"30"};
  padding: 15px 20px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: left;
`,E=r.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;
`,Me=r.div`
  color: #6366f1;
`,Ae=r(l)`
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
`;const We=r(p.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
`,Re=r(l)`
  margin-bottom: 10px;
`,Ne=r(l)`
  margin: 30px 0;
`,Pe=r(l)`
  margin-bottom: 10px;
`,_e=r(l)`
  margin-bottom: 50px;
  max-width: 500px;
`,F=r.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
`,Be=r(p.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Ie=r(l)`
  margin-bottom: 20px;
`,Ee=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;r.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
`;const Fe=r(p.div)`
  width: 100%;
`,Qe=r.div`
  position: fixed;
  inset: 0;
  z-index: 3000;
  background: white;
`,Ge=r(p.div)`
  font-size: 0.9rem;
  font-weight: 800;
  color: #6366f1;
  background: #6366f110;
  padding: 6px 14px;
  border-radius: 12px;
  border: 1px solid #6366f120;
  box-shadow: 0 4px 10px rgba(99, 102, 241, 0.05);

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 4px 10px;
  }
`,qe=()=>{const{testId:e}=V(),W=X(),Q=J(),[b,G]=d.useState([]),[v,R]=d.useState({}),[U,N]=d.useState(!1),[h,P]=d.useState(0),[x,C]=d.useState(0),[$,S]=d.useState(!1),[_,k]=d.useState(!1),z=d.useCallback(()=>{const t=[];let n=["math","spelling","missing_letter","comparison"];e==="math_test"&&(n=["math","comparison"]),e==="spelling_test"&&(n=["spelling","missing_letter"]),e==="hindi_test"&&(n=["hindi"]);const c=ce(),f=["अ","आ","इ","ई","उ","ऊ","ए","ऐ","ओ","औ","क","ख","ग","घ"];for(let A=1;A<=10;A++){const g=n[Math.floor(Math.random()*n.length)],s={id:A,type:g};if(g==="math"){const o=Math.floor(Math.random()*10)+1,a=Math.floor(Math.random()*10)+1,u=Math.random()>.5?"+":"-",y=u==="+"?o+a:Math.max(o,a)-Math.min(o,a);s.prompt="Solve the math!",s.correctAnswer=y.toString();const j=new Set([s.correctAnswer]);for(;j.size<4;){const w=Math.floor(Math.random()*5)+1;j.add((Math.random()>.5?y+w:Math.max(0,y-w)).toString())}s.data={n1:o,n2:a,op:u,optionsStrings:Array.from(j).sort(()=>Math.random()-.5)}}else if(g==="spelling"){const o=T(c).toUpperCase();s.prompt="Tap the word you hear!",s.correctAnswer=o;const a=new Set([o]);for(;a.size<4;)a.add(T(c).toUpperCase());s.data={word:o,optionsStrings:Array.from(a).sort(()=>Math.random()-.5)}}else if(g==="missing_letter"){const o=T(c).toUpperCase(),a=Math.floor(Math.random()*o.length),u=o.split(""),y=u[a];u[a]="_",s.prompt="Choose the missing letter!",s.correctAnswer=y;const j="ABCDEFGHIJKLMNOPQRSTUVWXYZ",w=new Set([y]);for(;w.size<4;)w.add(j[Math.floor(Math.random()*26)]);s.data={displayWord:u.join(""),word:o,optionsStrings:Array.from(w).sort(()=>Math.random()-.5)}}else if(g==="comparison"){const o=[];for(;o.length<4;){const a=Math.floor(Math.random()*100);o.includes(a)||o.push(a)}s.prompt="Tap the biggest number!",s.correctAnswer=Math.max(...o).toString(),s.data={optionsStrings:o.map(String)}}else if(g==="hindi"){const o=f[Math.floor(Math.random()*f.length)];s.prompt="Tap the letter you hear!",s.correctAnswer=o;const a=new Set([o]);for(;a.size<4;)a.add(f[Math.floor(Math.random()*f.length)]);s.data={letter:o,optionsStrings:Array.from(a).sort(()=>Math.random()-.5)}}t.push(s)}G(t),R({}),N(!1),k(!1),S(!1),P(0),C(0),window.scrollTo({top:0,behavior:"smooth"})},[e]);d.useEffect(()=>{z()},[z]);const Y=(t,n)=>{R(c=>({...c,[t]:n}))},H=t=>t===0?"Let's go! You can do it! 🚀":t===1?"Nice one! Next up... 🌟":t===2?"Great start! Keep going! 🔥":t===3?"You're a star! Super! ⭐":t===4?"Halfway there! Amazing! ✨":t===5?"Fantastic! You got this! 🙌":t===6?"So smart! Keep it up! 🧠":t===7?"Almost finished! Be careful! 💪":t===8?"Nearly there! On fire! 🚒":t===9?"Last one! Go for gold! 🏆":"Doing great! 🌟",L=()=>{let t=0;b.forEach(n=>{var c;((c=v[n.id])==null?void 0:c.trim().toUpperCase())===n.correctAnswer.trim().toUpperCase()&&t++}),P(t),N(!0),t>=8&&(oe({particleCount:150,spread:70,origin:{y:.6}}),Q(re("master_test")))},M=b[x],B=()=>{x<b.length-1?(C(t=>t+1),window.scrollTo({top:0,behavior:"smooth"})):L()},K=()=>{x>0&&C(t=>t-1)},O=t=>{if(!t)return null;const n=v[t.id]||"";return i.jsxs(ge,{$type:t.type,children:[i.jsx(ue,{children:i.jsx(ye,{initial:{width:0},animate:{width:`${(x+1)/10*100}%`},transition:{type:"spring",stiffness:100}})}),i.jsxs(we,{children:["QUESTION ",t.id," OF 10"]}),i.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[i.jsx(be,{$type:t.type,children:t.type.replace("_"," ")}),i.jsx(Ge,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},children:H(x)},x)]}),t.type!=="math"&&i.jsxs(je,{children:[i.jsxs(Me,{children:[t.type==="spelling"&&i.jsx(pe,{size:40}),t.type==="missing_letter"&&i.jsx(me,{size:40}),t.type==="comparison"&&i.jsx(he,{size:40}),t.type==="hindi"&&i.jsx(xe,{size:40})]}),i.jsx(Ae,{fontSize:"clamp(1.2rem, 4vw, 1.75rem)",fontWeight:900,color:"textPrimary",children:t.prompt})]}),i.jsxs(ve,{children:[t.type==="math"&&t.data&&i.jsxs(I,{children:[t.data.n1??0," ",t.data.op??"+"," ",t.data.n2??0]}),(t.type==="spelling"||t.type==="hindi")&&t.data&&i.jsx(Te,{children:i.jsx(l,{color:"textSecondary",fontSize:"md",fontWeight:600,children:"Tap the speaker below to hear"})}),t.type==="missing_letter"&&t.data&&i.jsx(I,{children:t.data.displayWord}),t.data.optionsStrings&&i.jsx(Se,{children:t.data.optionsStrings.map((c,f)=>i.jsx(Ce,{$selected:n===c,$color:"#6366F1",onClick:()=>Y(t.id,c),whileTap:{scale:.95},children:c},f))}),i.jsxs(ie,{children:[i.jsx(ne,{onClick:K}),i.jsx(ae,{text:t.type==="math"?`What is ${t.data.n1} ${t.data.op==="+"?"plus":t.data.op==="-"?"minus":"times"} ${t.data.n2}?`:t.type==="missing_letter"?`What is the missing letter in the word ${t.data.word}?`:t.data.word||t.data.letter||t.prompt}),x===b.length-1?i.jsx(m,{title:"FINISH TEST",onClick:B,variant:"primary",minWidth:"180px"}):i.jsx(se,{onClick:B})]})]})]})};return i.jsxs(Z,{children:[i.jsx(fe,{children:i.jsx(q,{mode:"wait",children:M&&i.jsx(Fe,{initial:{x:50,opacity:0},animate:{x:0,opacity:1},exit:{x:-50,opacity:0},transition:{type:"spring",damping:20,stiffness:100},children:O(M)},M.id)})}),U&&i.jsxs($e,{initial:{opacity:0},animate:{opacity:1},children:[!_&&!$&&i.jsxs(We,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},children:[i.jsx(p.div,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",damping:10},children:i.jsx(ee,{size:120,color:h>=8?"#FFD700":"#94A3B8"})}),i.jsxs(Ne,{fontSize:"4rem",fontWeight:900,color:"primary",children:[h," / 10"]}),i.jsx(Pe,{fontSize:"2rem",fontWeight:800,children:h>=8?"You're a Genius! 🎉":"Good effort! 💪"}),i.jsx(_e,{fontSize:"lg",color:"textSecondary",children:h>=8?"You've mastered the curriculum! Your brain is officially a supercomputer.":"Keep practicing and you'll get a perfect score next time!"}),i.jsxs(F,{children:[i.jsx(m,{title:"Review Answers",onClick:()=>k(!0),variant:"secondary"}),h>=8&&i.jsx(m,{title:"Get Certificate",onClick:()=>S(!0),variant:"primary"}),i.jsx(m,{title:"Try Again",onClick:z,variant:"secondary"}),i.jsx(m,{title:"Home",onClick:()=>W("/"),variant:"primary"})]})]}),_&&!$&&i.jsxs(Be,{initial:{x:50,opacity:0},animate:{x:0,opacity:1},children:[i.jsx(Re,{fontSize:"2rem",fontWeight:900,color:"primary",children:"Test Review"}),i.jsx(Ie,{color:"textSecondary",children:"See what you learned today!"}),i.jsx(ke,{children:b.map(t=>{var c;const n=((c=v[t.id])==null?void 0:c.trim().toUpperCase())===t.correctAnswer.trim().toUpperCase();return i.jsxs(ze,{$correct:n,children:[i.jsxs(Ee,{children:[i.jsxs(l,{fontSize:"md",fontWeight:800,color:"textPrimary",children:["Question ",t.id,": ",t.prompt]}),n?i.jsx(le,{color:"#10B981",size:24}):i.jsx(de,{color:"#F59E0B",size:24})]}),i.jsxs(E,{children:[i.jsx(l,{fontSize:"sm",color:"textSecondary",children:"Your answer:"}),i.jsx(l,{fontSize:"sm",fontWeight:700,color:n?"success":"warning",children:v[t.id]||"(No answer)"})]}),!n&&i.jsxs(E,{children:[i.jsx(l,{fontSize:"sm",color:"textSecondary",children:"Correct answer:"}),i.jsx(l,{fontSize:"sm",fontWeight:700,color:"success",children:t.correctAnswer})]})]},t.id)})}),i.jsxs(F,{children:[i.jsx(m,{title:"Back to Score",onClick:()=>k(!1),variant:"secondary"}),h>=8&&i.jsx(m,{title:"Get Certificate",onClick:()=>S(!0),variant:"primary"}),i.jsx(m,{title:"Home",onClick:()=>W("/"),variant:"primary"})]})]}),$&&i.jsx(Qe,{children:i.jsx(te,{onClose:()=>S(!1),challengeName:(e==null?void 0:e.replace("_"," ").toUpperCase())||"Master Test",score:h,level:"Genius"})})]})]})};export{qe as default};

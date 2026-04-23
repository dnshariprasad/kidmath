import{i as o,p as u,q,K as x,ak as ee,j as te,l as ie,x as f,n as t,P as re,T as L,A as oe,v as w,a0 as ne,a6 as ae,N as se,a2 as ce}from"./index-DFKAu_cK.js";import{c as le}from"./confetti.module-ONDKWxYZ.js";import{S as de}from"./SpeakIcon-CvLt9ivL.js";import{P as me,N as pe}from"./PreviousIcon-gGdtus7n.js";import{C as he}from"./ChallengeHeader-BNUm6G2b.js";import{g as xe,b as D}from"./wordUtils-DPgh885X.js";import{C as ge}from"./circle-check-DDcmYq3P.js";import{C as fe,S as ue}from"./spell-check-DhCq7XAq.js";import{S as ye}from"./search-D8Xi2da5.js";import{S as we}from"./scale-DjlbqarZ.js";import{L as be}from"./languages-C5ch2T-p.js";import{B as _e}from"./brain-qnCI8lEg.js";import{A as je}from"./arrow-up-down-B6KTVVnz.js";o.div`
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
`;o(u.div)`
  height: 100%;
  background: ${e=>e.theme.colors.primary};
  border-radius: 4px;
`;const ve=o.div`
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
`,$e=o.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  background: ${e=>e.theme.colors.primary}15;
`,Ce=o(u.div)`
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
  font-family: ${e=>e.theme.fonts.primary};

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
  font-family: ${e=>e.theme.fonts.primary};
  background: ${e=>{switch(e.$type){case"math":return(e.theme.colors.math||e.theme.colors.primary)+"15";case"spelling":case"missing_letter":return(e.theme.colors.english||e.theme.colors.primary)+"15";case"hindi":return(e.theme.colors.hindi||e.theme.colors.primary)+"15";case"comparison":return(e.theme.colors.math||e.theme.colors.primary)+"15";default:return e.theme.colors.primary+"15"}}};
  color: ${e=>{switch(e.$type){case"math":return e.theme.colors.math||e.theme.colors.primary;case"spelling":case"missing_letter":return e.theme.colors.english||e.theme.colors.primary;case"hindi":return e.theme.colors.hindi||e.theme.colors.primary;case"comparison":return e.theme.colors.math||e.theme.colors.primary;default:return e.theme.colors.primary}}};

  @media (max-width: 600px) {
    top: 20px;
    right: 20px;
    font-size: 0.65rem;
    padding: 4px 12px;
  }
`,ze=o.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 40px;

  @media (max-width: 480px) {
    flex-direction: column;
    text-align: center;
    gap: 8px;
  }
`,Ae=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  padding: 15px 0;

  @media (max-width: 600px) {
    gap: 30px;
    padding: 15px 0;
  }
`,C=o.div`
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
`,We=o(C)`
  font-size: clamp(1.8rem, 4vw, 3rem);
  letter-spacing: 12px;
`,Te=o.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`,Re=o(u.div)`
  background: ${e=>e.$selected?`linear-gradient(135deg, ${e.$color||e.theme.colors.primary}, ${e.$color||e.theme.colors.primary}DD)`:e.theme.colors.surfaceVariant+"15"};
  color: ${e=>e.$selected?"white":e.theme.colors.textPrimary};
  padding: 24px 48px;
  border-radius: 24px;
  font-size: 2.2rem;
  font-weight: 900;
  border: 3px solid
    ${e=>e.$selected?e.$color||e.theme.colors.primary:"transparent"};
  cursor: pointer;
  min-width: 160px;
  text-align: center;
  font-family: ${e=>e.theme.fonts.primary};
  box-shadow: ${e=>e.$selected?`0 10px 25px -5px ${e.theme.colors.primary}50`:"none"};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(rgba(255, 255, 255, 0.2), transparent);
    opacity: ${e=>e.$selected?1:0};
  }

  &:hover {
    background: ${e=>e.$selected?`linear-gradient(135deg, ${e.$color||e.theme.colors.primary}, ${e.$color||e.theme.colors.primary}DD)`:e.theme.colors.surfaceVariant+"25"};
    transform: translateY(-4px) scale(1.02);
    box-shadow: ${e=>e.$selected?`0 15px 30px -5px ${e.theme.colors.primary}60`:"0 8px 20px -5px rgba(0,0,0,0.1)"};
  }

  @media (max-width: 600px) {
    width: 100%;
    padding: 18px;
    font-size: 1.75rem;
  }
`;o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 40px;
`;const De=o(u.div)`
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
`,Ne=o.div`
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
`,U=o.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;
`,Be=o.div`
  color: #6366f1;
`,Fe=o(x)`
  text-align: center;
`,Ee=o.div`
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
`;const Ie=o(u.div)`
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
`,Le=o(u.div)`
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
`,Ue=o(x)`
  margin-bottom: 10px;
`,Qe=o(x)`
  margin: 30px 0;
`,Oe=o(x)`
  margin-bottom: 10px;
`,Ge=o(x)`
  margin-bottom: 50px;
  max-width: 500px;
`,Q=o.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
`,He=o(u.div)`
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
`,Ke=o(x)`
  margin-bottom: 20px;
`,Ve=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;o.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
`;const Ye=o(u.div)`
  width: 100%;
`,Xe=o.div`
  position: fixed;
  inset: 0;
  z-index: 3000;
  background: white;
`,dt=()=>{const{testId:e}=ee(),N=te(),O=ie(),[j,G]=f.useState([]),[S,P]=f.useState({}),[H,B]=f.useState(!1),[g,F]=f.useState(0),[v,k]=f.useState(0),[M,$]=f.useState(!1),[E,z]=f.useState(!1),K=e==="master_test"||!e,r=ae.en,V=()=>{if(K)return r.mst_grandMaster;switch(e){case"math_addition":return r.math_addition;case"math_subtraction":return r.math_subtraction;case"math_multiplication":return r.math_multiplication;case"math_test":return r.math_mathHero;case"math_sorting":return r.math_sorting;case"english_missing_letters":return r.eng_missingLetters;case"english_spelling":return r.eng_listenAndFind;case"spelling_test":return r.eng_spellingHero;case"hindi_test":return r.hindi_hindiLegend;case"logic_test":return r.log_grandLogic;default:return r.com_tryAgain}},A=f.useCallback(()=>{const i=[];let c=["math","spelling","missing_letter","comparison","hindi","logic","sorting"];(e==="math_addition"||e==="math_subtraction"||e==="math_multiplication")&&(c=["math"]),e==="math_test"&&(c=["math","comparison","sorting"]),e==="math_sorting"&&(c=["sorting"]),e==="english_missing_letters"&&(c=["missing_letter"]),e==="english_spelling"&&(c=["spelling"]),e==="spelling_test"&&(c=["spelling","missing_letter"]),e==="hindi_test"&&(c=["hindi"]),e==="logic_test"&&(c=["logic","comparison"]);const d=xe(),b=["अ","आ","इ","ई","उ","ऊ","ए","ऐ","ओ","औ","क","ख","ग","घ"];for(let T=1;T<=10;T++){const y=c[Math.floor(Math.random()*c.length)],s={id:T,type:y};if(y==="math"){const n=Math.floor(Math.random()*10)+1,a=Math.floor(Math.random()*10)+1;let l="+";if(e==="math_addition")l="+";else if(e==="math_subtraction")l="-";else if(e==="math_multiplication")l="*";else{const _=["+","-"];(e==="math_test"||e==="math_multiplication"||!e)&&_.push("*"),l=_[Math.floor(Math.random()*_.length)]}let h=n,m=a,p=0;l==="+"?p=n+a:l==="-"?(h=Math.max(n,a),m=Math.min(n,a),p=h-m):p=n*a,s.prompt=r.math_solveMath,s.correctAnswer=p.toString();const R=new Set([s.correctAnswer]);for(;R.size<4;){const _=Math.floor(Math.random()*5)+1;R.add((Math.random()>.5?p+_:Math.max(0,p-_)).toString())}s.data={n1:h,n2:m,op:l,optionsStrings:Array.from(R).sort(()=>Math.random()-.5)}}else if(y==="spelling"){const n=D(d).toUpperCase();s.prompt=r.eng_tapTheWord,s.correctAnswer=n;const a=new Set([n]);for(;a.size<4;)a.add(D(d).toUpperCase());s.data={word:n,optionsStrings:Array.from(a).sort(()=>Math.random()-.5)}}else if(y==="missing_letter"){const n=D(d).toUpperCase(),a=Math.floor(Math.random()*n.length),l=n.split(""),h=l[a];l[a]="_",s.prompt=r.eng_chooseMissing,s.correctAnswer=h;const m="ABCDEFGHIJKLMNOPQRSTUVWXYZ",p=new Set([h]);for(;p.size<4;)p.add(m[Math.floor(Math.random()*26)]);s.data={displayWord:l.join(""),word:n,optionsStrings:Array.from(p).sort(()=>Math.random()-.5)}}else if(y==="comparison"){const n=[];for(;n.length<4;){const l=Math.floor(Math.random()*100);n.includes(l)||n.push(l)}const a=Math.random()>.5;s.prompt=a?r.math_smallestNumber:r.math_biggestNumber,s.correctAnswer=a?Math.min(...n).toString():Math.max(...n).toString(),s.data={optionsStrings:n.map(String)}}else if(y==="logic"){const n=[{sequence:["🍎","🍌","🍎"],next:"🍌"},{sequence:["🐶","🐱","🐶"],next:"🐱"},{sequence:["1","2","1"],next:"2"},{sequence:["⭐","🌙","⭐"],next:"🌙"},{sequence:["🔴","🔵","🔴"],next:"🔵"},{sequence:["🚗","🚕","🚗"],next:"🚕"},{sequence:["🍦","🍩","🍦"],next:"🍩"}],a=n[Math.floor(Math.random()*n.length)];s.prompt=r.log_whatNext,s.correctAnswer=a.next;const l=new Set([a.next]);for(;l.size<4;){const h=n[Math.floor(Math.random()*n.length)].next;l.add(h)}s.data={displayWord:a.sequence.join(" ")+" ?",optionsStrings:Array.from(l).sort(()=>Math.random()-.5)}}else if(y==="hindi"){const n=b[Math.floor(Math.random()*b.length)];s.prompt=r.hindi_tapLetter,s.correctAnswer=n;const a=new Set([n]);for(;a.size<4;)a.add(b[Math.floor(Math.random()*b.length)]);s.data={letter:n,optionsStrings:Array.from(a).sort(()=>Math.random()-.5)}}else if(y==="sorting"){const n=[];for(;n.length<3;){const m=Math.floor(Math.random()*20)+1;n.includes(m)||n.push(m)}const a=Math.random()>.5;s.prompt=a?r.math_sortAsc:r.math_sortDesc;const l=a?[...n].sort((m,p)=>m-p):[...n].sort((m,p)=>p-m);s.correctAnswer=l.join(", ");const h=new Set([s.correctAnswer]);for(;h.size<4;){const m=[...n].sort(()=>Math.random()-.5);h.add(m.join(", "))}s.data={displayWord:n.join("  •  "),optionsStrings:Array.from(h).sort(()=>Math.random()-.5)}}i.push(s)}G(i),P({}),B(!1),z(!1),$(!1),F(0),k(0),window.scrollTo({top:0,behavior:"smooth"})},[e,r]);f.useEffect(()=>{A()},[A]);const Y=(i,c)=>{P(d=>({...d,[i]:c}))},X=()=>{let i=0;j.forEach(c=>{var d;((d=S[c.id])==null?void 0:d.trim().toUpperCase())===c.correctAnswer.trim().toUpperCase()&&i++}),F(i),B(!0),i>=8&&(le({particleCount:150,spread:70,origin:{y:.6}}),O(ce("master_test")))},W=j[v],I=()=>{v<j.length-1?(k(i=>i+1),window.scrollTo({top:0,behavior:"smooth"})):X()},J=()=>{v>0&&k(i=>i-1)},Z=i=>{if(!i)return null;const c=S[i.id]||"";return t.jsxs(Se,{$type:i.type,children:[t.jsx($e,{children:t.jsx(Ce,{initial:{width:0},animate:{width:`${(v+1)/10*100}%`},transition:{type:"spring",stiffness:100}})}),t.jsxs(ke,{children:["QUESTION ",i.id," OF 10"]}),t.jsx(Me,{$type:i.type,children:i.type.replace("_"," ")}),i.type!=="math"&&t.jsxs(ze,{children:[t.jsxs(Be,{children:[i.type==="spelling"&&t.jsx(ue,{size:40}),i.type==="missing_letter"&&t.jsx(ye,{size:40}),i.type==="comparison"&&t.jsx(we,{size:40}),i.type==="hindi"&&t.jsx(be,{size:40}),i.type==="logic"&&t.jsx(_e,{size:40}),i.type==="sorting"&&t.jsx(je,{size:40})]}),t.jsx(Fe,{fontSize:"clamp(1.2rem, 4vw, 1.75rem)",fontWeight:900,color:"textPrimary",children:i.prompt})]}),t.jsxs(Ae,{children:[i.type==="math"&&i.data&&t.jsxs(C,{children:[i.data.n1??0," ",i.data.op??"+"," ",i.data.n2??0]}),(i.type==="spelling"||i.type==="hindi")&&i.data&&t.jsx(Ee,{children:t.jsx(x,{color:"textSecondary",fontSize:"md",fontWeight:600,children:r.eng_tapSpeaker})}),i.type==="missing_letter"&&i.data&&t.jsx(C,{children:i.data.displayWord}),i.type==="logic"&&i.data&&t.jsx(We,{children:i.data.displayWord}),i.type==="sorting"&&i.data&&t.jsx(C,{$fontSize:"clamp(2rem, 8vw, 4rem)",children:i.data.displayWord}),i.data.optionsStrings&&t.jsx(Te,{children:i.data.optionsStrings.map((d,b)=>t.jsx(Re,{$selected:c===d,$color:"#6366F1",onClick:()=>Y(i.id,d),whileTap:{scale:.95},children:d},b))}),t.jsxs(se,{children:[t.jsx(me,{onClick:J}),t.jsx(de,{text:i.type==="math"?`What is ${i.data.n1} ${i.data.op==="+"?"plus":i.data.op==="-"?"minus":"times"} ${i.data.n2}?`:i.type==="missing_letter"?`What is the missing letter in the word ${i.data.word}?`:i.data.word||i.data.letter||i.prompt}),v===j.length-1?t.jsx(w,{title:r.com_finish.toUpperCase(),onClick:I,variant:"primary",minWidth:"180px"}):t.jsx(pe,{onClick:I})]})]})]})};return t.jsxs(re,{children:[t.jsx(he,{icon:L,title:V(),subtitle:r.mst_subtitle,streak:0}),t.jsx(ve,{children:t.jsx(oe,{mode:"wait",children:W&&t.jsx(Ye,{initial:{x:50,opacity:0},animate:{x:0,opacity:1},exit:{x:-50,opacity:0},transition:{type:"spring",damping:20,stiffness:100},children:Z(W)},W.id)})}),H&&t.jsxs(De,{initial:{opacity:0},animate:{opacity:1},children:[!E&&!M&&t.jsxs(Ie,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},children:[t.jsx(u.div,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",damping:10},children:t.jsx(L,{size:120,color:g>=8?"#FFD700":"#94A3B8"})}),t.jsxs(Qe,{fontSize:"4rem",fontWeight:900,color:"primary",children:[g," / 10"]}),t.jsx(Le,{$score:g,initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.3},children:g===10?"GRAND MASTER":g===9?"LEGEND":g===8?"PRODIGY":"KIDDOO HERO"}),t.jsx(Oe,{fontSize:"2rem",fontWeight:800,children:g>=8?r.com_genius:r.com_goodEffort}),t.jsx(Ge,{fontSize:"lg",color:"textSecondary",children:g>=8?r.com_masteredCurriculum:r.com_keepPracticing}),t.jsxs(Q,{children:[t.jsx(w,{title:r.com_reviewAnswers,onClick:()=>z(!0),variant:"secondary"}),g>=8&&t.jsx(w,{title:r.com_getCertificate,onClick:()=>$(!0),variant:"primary"}),t.jsx(w,{title:r.com_tryAgain,onClick:A,variant:"secondary"}),t.jsx(w,{title:r.com_home,onClick:()=>N("/"),variant:"primary"})]})]}),E&&!M&&t.jsxs(He,{initial:{x:50,opacity:0},animate:{x:0,opacity:1},children:[t.jsx(Ue,{fontSize:"2rem",fontWeight:900,color:"primary",children:r.com_testReview}),t.jsx(Ke,{color:"textSecondary",children:r.com_seeWhatLearned}),t.jsx(Ne,{children:j.map(i=>{var d;const c=((d=S[i.id])==null?void 0:d.trim().toUpperCase())===i.correctAnswer.trim().toUpperCase();return t.jsxs(Pe,{$correct:c,children:[t.jsxs(Ve,{children:[t.jsxs(x,{fontSize:"md",fontWeight:800,color:"textPrimary",children:["Question ",i.id,": ",i.prompt]}),c?t.jsx(ge,{color:"#10B981",size:24}):t.jsx(fe,{color:"#F59E0B",size:24})]}),t.jsxs(U,{children:[t.jsx(x,{fontSize:"sm",color:"textSecondary",children:r.com_yourAnswer}),t.jsx(x,{fontSize:"sm",fontWeight:700,color:c?"success":"warning",children:S[i.id]||"(No answer)"})]}),!c&&t.jsxs(U,{children:[t.jsx(x,{fontSize:"sm",color:"textSecondary",children:r.com_correctAnswer}),t.jsx(x,{fontSize:"sm",fontWeight:700,color:"success",children:i.correctAnswer})]})]},i.id)})}),t.jsxs(Q,{children:[t.jsx(w,{title:r.com_backToScore,onClick:()=>z(!1),variant:"secondary"}),g>=8&&t.jsx(w,{title:r.com_getCertificate,onClick:()=>$(!0),variant:"primary"}),t.jsx(w,{title:r.com_home,onClick:()=>N("/"),variant:"primary"})]})]}),M&&t.jsx(Xe,{children:t.jsx(ne,{onClose:()=>$(!1),challengeName:(e==null?void 0:e.replace("_"," ").toUpperCase())||"Master Test",score:g,level:"Genius"})})]})]})};export{dt as default};

import{i as n,p as E,l as N,m as A,x as r,n as e,P as D,G as F,y as z,R as G,W as P,Y as R,_ as B,$ as L,A as y,v as h,z as M,F as q,H as O,a0 as Q,a1 as H,a2 as V,a3 as _}from"./index-S6EAxzK5.js";import{C as K,S as U,g as W,r as b}from"./ChallengeHeader-Dd5GSdB_.js";import{c as X}from"./confetti.module-ONDKWxYZ.js";import{g as S,a as Y}from"./mathUtils-DtZIA5qY.js";import{D as I}from"./DifficultyPicker-BiSHlKTa.js";import{F as J}from"./FeedbackDisplay-DCXhlqE1.js";import{S as Z}from"./scale-ByjwYly4.js";const ee=n(E.div)`
  font-size: clamp(3rem, 12vw, 6rem);
  font-weight: 900;
  color: ${t=>t.theme.colors.primary};
  font-family: ${t=>t.theme.fonts.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
  white-space: nowrap;
  width: 100%;
  margin: 20px 0;

  @media (max-width: 768px) {
    font-size: clamp(2.5rem, 15vw, 4rem);
    gap: 15px;
  }
`,te=n.span`
  color: #dfe6e9;
  width: 80px;
  text-align: center;
  font-family: ${t=>t.theme.fonts.primary};
`,se=n.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 10px;

  & > button {
    width: 80px;
    height: 80px;
    font-size: 2rem;
    border-radius: 24px;
  }

  @media (max-width: 576px) {
    gap: 12px;
    & > button {
      width: 64px;
      height: 64px;
      font-size: 1.5rem;
      border-radius: 16px;
    }
  }
`,ae=n.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
`,u=n.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: ${t=>t.theme.colors.background};
  border-radius: 12px;
  border: 1px solid ${t=>t.theme.colors.border};
  transition: all 0.2s ease;

  &:hover {
    transform: translateX(4px);
    border-color: ${t=>t.theme.colors.primary}40;
  }
`,f=n.span`
  font-weight: 900;
  font-size: 1.2rem;
  color: ${t=>t.theme.colors.primary};
  width: 24px;
  text-align: center;
`,g=n.span`
  font-size: 0.9rem;
  color: ${t=>t.theme.colors.textSecondary};
  font-weight: 600;

  b {
    color: ${t=>t.theme.colors.textPrimary};
  }
`,de=()=>{const t=N(),s=A(i=>{var a,c;return((c=(a=i.alphabet.gameStats)==null?void 0:a.comparison)==null?void 0:c.streak)??0}),[m,C]=r.useState(2),[o,w]=r.useState(0),[l,v]=r.useState(0),[k,d]=r.useState(null),[$,j]=r.useState(!1),p=r.useCallback(()=>{const i=Y(m);w(S(i)),v(S(i)),d(null)},[m]);r.useEffect(()=>{p()},[p]),r.useEffect(()=>{s>0&&s%10===0&&j(!0)},[s]);const x=i=>{let a=!1;if((i==="greater"&&o>l||i==="less"&&o<l||i==="equal"&&o===l)&&(a=!0),a){const c=W(s);d({message:c,isCorrect:!0}),b(c),t(V("comparison")),X({particleCount:150,spread:70,origin:{y:.6},colors:["#6366F1","#4F46E5","#FF7675"]}),setTimeout(p,1500)}else d({message:"Oops! Try again! 😅",isCorrect:!1}),b("Oops! Try again"),t(_("comparison")),setTimeout(()=>d(null),1500)},T=[{value:1,label:"Numbers to 9"},{value:2,label:"Numbers to 99"},{value:3,label:"Numbers to 999"}];return e.jsxs(D,{"data-testid":"view-comparison",children:[e.jsxs(F,{children:[e.jsx(K,{icon:Z,title:"Big or Small?",subtitle:"Compare the numbers and pick the right sign!",streak:s}),e.jsx(U,{title:"Certificate Progress",subtitle:s<10?`${10-s%10} more for a Certificate! 🏆`:"Milestone reached! 🎉"}),e.jsxs(z,{"data-testid":"activity-area",children:[e.jsxs(G,{children:[Array.from({length:s%10||(s>0?10:0)}).map((i,a)=>e.jsxs(P,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",damping:10,delay:a*.05},children:[e.jsx(R,{children:"⭐"}),e.jsx(B,{children:a+1})]},a)),s>=10&&e.jsx(L,{children:"+"})]}),e.jsx(y,{mode:"wait",children:e.jsxs(ee,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:1.2,opacity:0},children:[e.jsx("span",{children:o}),e.jsx(te,{children:"?"}),e.jsx("span",{children:l})]},`${o}-${l}`)}),e.jsxs(se,{children:[e.jsx(h,{title:"<",onClick:()=>x("less"),variant:"secondary"}),e.jsx(h,{title:"=",onClick:()=>x("equal"),variant:"secondary"}),e.jsx(h,{title:">",onClick:()=>x("greater"),variant:"secondary"})]}),e.jsx(J,{feedback:k})]}),e.jsxs(M,{"data-testid":"settings-area",children:[e.jsx(I,{name:"digits",options:T,currentValue:m,onChange:C}),e.jsxs(q,{children:[e.jsx(O,{children:"Quick Tips"}),e.jsxs(ae,{children:[e.jsxs(u,{children:[e.jsx(f,{children:">"}),e.jsxs(g,{children:["means ",e.jsx("b",{children:"GREATER"})," than"]})]}),e.jsxs(u,{children:[e.jsx(f,{children:"<"}),e.jsxs(g,{children:["means ",e.jsx("b",{children:"LESS"})," than"]})]}),e.jsxs(u,{children:[e.jsx(f,{children:"="}),e.jsxs(g,{children:["means ",e.jsx("b",{children:"EQUAL"})," to"]})]})]})]})]})]}),e.jsx(y,{children:$&&e.jsx(Q,{onClose:()=>{j(!1),t(H())},challengeName:"Big or Small?",score:s,level:`${m} Digits`})})]})};export{de as GreaterLessEqualGame,de as default};

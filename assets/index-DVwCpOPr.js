import{i as n,p as N,l as E,m as A,r as i,n as e,A as b,K as x,s as D,t as F,v as G,w as P}from"./index-DO3JajC9.js";import{C as z,S as R,D as B}from"./DifficultyPicker-_DkQgrpu.js";import{P as L,G as M,d as q,S as O,N as Q,e as K,f as V,g as H,i as U,j as X,k as _}from"./globalStyles-6jG7PpSt.js";import{r as y}from"./index-hEdiZV1j.js";import{c as I}from"./confetti.module-ONDKWxYZ.js";import{g as S,a as J}from"./mathUtils-DtZIA5qY.js";import{F as W}from"./FeedbackDisplay-iKE_7PuK.js";import{S as Y}from"./scale-DLuzhKej.js";const Z=n(N.div)`
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
`,ee=n.span`
  color: #dfe6e9;
  width: 80px;
  text-align: center;
  font-family: ${t=>t.theme.fonts.primary};
`,te=n.div`
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
`,se=n.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
`,h=n.div`
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
`,u=n.span`
  font-weight: 900;
  font-size: 1.2rem;
  color: ${t=>t.theme.colors.primary};
  width: 24px;
  text-align: center;
`,f=n.span`
  font-size: 0.9rem;
  color: ${t=>t.theme.colors.textSecondary};
  font-weight: 600;

  b {
    color: ${t=>t.theme.colors.textPrimary};
  }
`,de=()=>{const t=E(),a=A(r=>{var s,j;return((j=(s=r.alphabet.gameStats)==null?void 0:s.comparison)==null?void 0:j.streak)??0}),[c,C]=i.useState(2),[o,w]=i.useState(0),[l,v]=i.useState(0),[k,m]=i.useState(null),[T,g]=i.useState(!1),d=i.useCallback(()=>{const r=J(c);w(S(r)),v(S(r)),m(null)},[c]);i.useEffect(()=>{d()},[d]),i.useEffect(()=>{a>0&&a%10===0&&g(!0)},[a]);const p=r=>{let s=!1;(r==="greater"&&o>l||r==="less"&&o<l||r==="equal"&&o===l)&&(s=!0),s?(m({message:"Correct! Awesome! 🌟",isCorrect:!0}),y("Correct"),t(G("comparison")),I({particleCount:150,spread:70,origin:{y:.6},colors:["#6366F1","#4F46E5","#FF7675"]}),setTimeout(d,1500)):(m({message:"Oops! Try again! 😅",isCorrect:!1}),y("Oops! Try again"),t(P("comparison")),setTimeout(()=>m(null),1500))},$=[{value:1,label:"Numbers to 9"},{value:2,label:"Numbers to 99"},{value:3,label:"Numbers to 999"}];return e.jsxs(L,{"data-testid":"view-comparison",children:[e.jsxs(M,{children:[e.jsx(z,{icon:Y,title:"Big or Small?",subtitle:"Compare the numbers and pick the right sign!",streak:a}),e.jsx(R,{title:"Certificate Progress",subtitle:a<10?`${10-a%10} more for a Certificate! 🏆`:"Milestone reached! 🎉"}),e.jsxs(q,{"data-testid":"activity-area",children:[e.jsxs(O,{children:[Array.from({length:a%10||(a>0?10:0)}).map((r,s)=>e.jsxs(Q,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",damping:10,delay:s*.05},children:[e.jsx(K,{children:"⭐"}),e.jsx(V,{children:s+1})]},s)),a>=10&&e.jsx(H,{children:"+"})]}),e.jsx(b,{mode:"wait",children:e.jsxs(Z,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:1.2,opacity:0},children:[e.jsx("span",{children:o}),e.jsx(ee,{children:"?"}),e.jsx("span",{children:l})]},`${o}-${l}`)}),e.jsxs(te,{children:[e.jsx(x,{title:"<",onClick:()=>p("less"),variant:"secondary"}),e.jsx(x,{title:"=",onClick:()=>p("equal"),variant:"secondary"}),e.jsx(x,{title:">",onClick:()=>p("greater"),variant:"secondary"})]}),e.jsx(W,{feedback:k})]}),e.jsxs(U,{"data-testid":"settings-area",children:[e.jsx(B,{name:"digits",options:$,currentValue:c,onChange:C}),e.jsxs(X,{children:[e.jsx(_,{children:"Quick Tips"}),e.jsxs(se,{children:[e.jsxs(h,{children:[e.jsx(u,{children:">"}),e.jsxs(f,{children:["means ",e.jsx("b",{children:"GREATER"})," than"]})]}),e.jsxs(h,{children:[e.jsx(u,{children:"<"}),e.jsxs(f,{children:["means ",e.jsx("b",{children:"LESS"})," than"]})]}),e.jsxs(h,{children:[e.jsx(u,{children:"="}),e.jsxs(f,{children:["means ",e.jsx("b",{children:"EQUAL"})," to"]})]})]})]})]})]}),e.jsx(b,{children:T&&e.jsx(D,{onClose:()=>{g(!1),t(F())},challengeName:"Big or Small?",score:a,level:`${c} Digits`})})]})};export{de as GreaterLessEqualGame,de as default};

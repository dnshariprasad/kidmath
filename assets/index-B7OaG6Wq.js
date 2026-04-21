import{i as r,p as E,l as A,m as D,r as a,n as e,A as y,K as x,s as N,t as F,v as G,w as z}from"./index-NzOoTDV7.js";import{C as L,S as M,D as P,r as h}from"./DifficultyPicker-Y23e4tn9.js";import{P as R,G as q,d as B,S as O,e as Q,f as K}from"./globalStyles-CxNgPgHO.js";import{c as V}from"./confetti.module-ONDKWxYZ.js";import{g as S,a as H}from"./mathUtils-DtZIA5qY.js";import{F as U}from"./FeedbackDisplay-BtCnoe-n.js";import{S as X}from"./scale-B4bZNBrU.js";import"./wand-sparkles-CaSBif2c.js";const I=r(E.div)`
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
`,J=r.span`
  color: #dfe6e9;
  width: 80px;
  text-align: center;
  font-family: ${t=>t.theme.fonts.primary};
`,W=r.div`
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
`,Y=r.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
`,u=r.div`
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
`,f=r.span`
  font-weight: 900;
  font-size: 1.2rem;
  color: ${t=>t.theme.colors.primary};
  width: 24px;
  text-align: center;
`,g=r.span`
  font-size: 0.9rem;
  color: ${t=>t.theme.colors.textSecondary};
  font-weight: 600;

  b {
    color: ${t=>t.theme.colors.textPrimary};
  }
`,ne=()=>{const t=A(),i=D(s=>s.alphabet.gameStats.comparison.streak),[l,j]=a.useState(2),[n,C]=a.useState(0),[o,w]=a.useState(0),[k,c]=a.useState(null),[v,b]=a.useState(!1),p=a.useCallback(()=>{const s=H(l);C(S(s)),w(S(s)),c(null)},[l]),T=()=>{const s=Math.floor(Math.random()*3)+1;j(s),h("Greater Less Surprise!")};a.useEffect(()=>{p()},[p]),a.useEffect(()=>{i>0&&i%10===0&&b(!0)},[i]);const d=s=>{let m=!1;(s==="greater"&&n>o||s==="less"&&n<o||s==="equal"&&n===o)&&(m=!0),m?(c({message:"Correct! Awesome! 🌟",isCorrect:!0}),h("Correct"),t(G("comparison")),V({particleCount:150,spread:70,origin:{y:.6},colors:["#6366F1","#4F46E5","#FF7675"]}),setTimeout(p,1500)):(c({message:"Oops! Try again! 😅",isCorrect:!1}),h("Oops! Try again"),t(z("comparison")),setTimeout(()=>c(null),1500))},$=[{value:1,label:"Numbers to 9"},{value:2,label:"Numbers to 99"},{value:3,label:"Numbers to 999"}];return e.jsxs(R,{"data-testid":"page-greater-less-equal",children:[e.jsxs(q,{children:[e.jsx(L,{icon:X,title:"Big or Small?",subtitle:"Compare the numbers and pick the right sign!",streak:i}),e.jsx(M,{title:"Size surprise?",onShuffle:T}),e.jsxs(B,{children:[e.jsx(y,{mode:"wait",children:e.jsxs(I,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:1.2,opacity:0},children:[e.jsx("span",{children:n}),e.jsx(J,{children:"?"}),e.jsx("span",{children:o})]},`${n}-${o}`)}),e.jsxs(W,{children:[e.jsx(x,{title:"<",onClick:()=>d("less"),variant:"secondary"}),e.jsx(x,{title:"=",onClick:()=>d("equal"),variant:"secondary"}),e.jsx(x,{title:">",onClick:()=>d("greater"),variant:"secondary"})]}),e.jsx(U,{feedback:k})]}),e.jsxs(O,{"data-testid":"settings-area",children:[e.jsx(P,{name:"digits",options:$,currentValue:l,onChange:j}),e.jsxs(Q,{children:[e.jsx(K,{children:"Quick Tips"}),e.jsxs(Y,{children:[e.jsxs(u,{children:[e.jsx(f,{children:">"}),e.jsxs(g,{children:["means ",e.jsx("b",{children:"GREATER"})," than"]})]}),e.jsxs(u,{children:[e.jsx(f,{children:"<"}),e.jsxs(g,{children:["means ",e.jsx("b",{children:"LESS"})," than"]})]}),e.jsxs(u,{children:[e.jsx(f,{children:"="}),e.jsxs(g,{children:["means ",e.jsx("b",{children:"EQUAL"})," to"]})]})]})]})]})]}),e.jsx(y,{children:v&&e.jsx(N,{onClose:()=>{b(!1),t(F())},challengeName:"Big or Small?",score:i,level:`${l} Digits`})})]})};export{ne as GreaterLessEqualGame,ne as default};

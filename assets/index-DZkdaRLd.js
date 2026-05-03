import{k as o,s as N,n as A,o as D,r as n,a2 as S,p as e,P as E,R as q,W as z,a3 as P,a4 as R,a5 as G,a6 as L,a7 as M,Y as F,y as g,_ as I,a0 as U,a1 as B,a9 as O,a8 as Q,aa as u}from"./index-C9GQ7pMr.js";import{r as h,g as V}from"./index-DhGl27sY.js";import{c as C}from"./confetti.module-ONDKWxYZ.js";import{C as Y}from"./ChallengeHeader-BrHaadvX.js";import{D as H}from"./DifficultyPicker-C8N_GHcF.js";import{F as K}from"./FeedbackDisplay-Ce-r1d2Y.js";import{g as w,a as W}from"./mathUtils-B1Q27TTV.js";import{S as X}from"./scale-DRBnYq8c.js";import"./info-BbesOvZG.js";const J=o(N.div)`
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
  margin: 0;

  @media (max-width: 768px) {
    font-size: clamp(2.5rem, 15vw, 4rem);
    gap: 15px;
  }
`,Z=o.span`
  color: ${t=>t.theme.colors.questionMark};

  width: 80px;
  text-align: center;
  font-family: ${t=>t.theme.fonts.primary};
`,ee=o.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 0;

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
`,te=o.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 0;
`,f=o.div`
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
`,j=o.span`
  font-weight: 900;
  font-size: 1.2rem;
  color: ${t=>t.theme.colors.primary};
  width: 24px;
  text-align: center;
`,y=o.span`
  font-size: 0.9rem;
  color: ${t=>t.theme.colors.textSecondary};
  font-weight: 600;

  b {
    color: ${t=>t.theme.colors.textPrimary};
  }
`,se=t=>{const s=W(t);return{num1:w(s),num2:w(s)}},ae=(t,s,a)=>a==="greater"?t>s:a==="less"?t<s:a==="equal"?t===s:!1,xe=()=>{const t=A(),s=O.en,a=D(i=>{var r,b;return((b=(r=i.alphabet.gameStats)==null?void 0:r.comparison)==null?void 0:b.streak)??0}),[c,k]=n.useState(2),[m,_]=n.useState(0),[p,v]=n.useState(0),[T,l]=n.useState(null),d=n.useCallback(()=>{const{num1:i,num2:r}=se(c);_(i),v(r),l(null)},[c]);n.useEffect(()=>{d()},[d]),n.useEffect(()=>{if(a>0&&a%10===0){l({message:"Incredible! 10 in a row! 🌟",isCorrect:!0}),h("Incredible! 10 in a row! You are a superstar!"),C({particleCount:300,spread:100,origin:{y:.6},colors:["#6366f1","#4f46e5","#818cf8"]});const i=setTimeout(()=>{t(S("comparison")),l(null)},3e3);return()=>clearTimeout(i)}},[a,t]);const x=i=>{if(ae(m,p,i)){const r=V(a);l({message:r,isCorrect:!0}),h(r),t(Q("comparison")),C({particleCount:150,spread:70,origin:{y:.6},colors:[u.primary,u.primaryDark,u.accentLight]}),setTimeout(d,1500)}else l({message:s.fb_oops,isCorrect:!1}),h(s.fb_oopsRead),t(S("comparison")),setTimeout(()=>l(null),1500)},$=[{value:1,label:s.gle_digits9},{value:2,label:s.gle_digits99},{value:3,label:s.gle_digits999}];return e.jsx(E,{"data-testid":"view-comparison",children:e.jsxs(q,{children:[e.jsxs(z,{"data-testid":"activity-area",children:[e.jsx(Y,{icon:X,title:s.gle_title,subtitle:s.gle_subtitle,streak:a}),e.jsxs(P,{children:[Array.from({length:a%10||(a>0?10:0)}).map((i,r)=>e.jsxs(R,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",damping:10,delay:r*.05},children:[e.jsx(G,{children:"⭐"}),e.jsx(L,{children:r+1})]},r)),a>=10&&e.jsx(M,{children:"+"})]}),e.jsx(F,{mode:"wait",children:e.jsxs(J,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:1.2,opacity:0},children:[e.jsx("span",{children:m}),e.jsx(Z,{children:"?"}),e.jsx("span",{children:p})]},`${m}-${p}`)}),e.jsxs(ee,{children:[e.jsx(g,{title:"<",onClick:()=>x("less"),variant:"secondary"}),e.jsx(g,{title:"=",onClick:()=>x("equal"),variant:"secondary"}),e.jsx(g,{title:">",onClick:()=>x("greater"),variant:"secondary"})]}),e.jsx(K,{feedback:T})]}),e.jsxs(I,{"data-testid":"settings-area",children:[e.jsx(H,{name:"digits",options:$,currentValue:c,onChange:k}),e.jsxs(U,{children:[e.jsx(B,{children:s.gle_quickTips}),e.jsxs(te,{children:[e.jsxs(f,{children:[e.jsx(j,{children:">"}),e.jsxs(y,{children:[s.gle_means," ",e.jsx("b",{children:s.gle_greater.toUpperCase()})," ",s.gle_than]})]}),e.jsxs(f,{children:[e.jsx(j,{children:"<"}),e.jsxs(y,{children:[s.gle_means," ",e.jsx("b",{children:s.gle_less.toUpperCase()})," ",s.gle_than]})]}),e.jsxs(f,{children:[e.jsx(j,{children:"="}),e.jsxs(y,{children:[s.gle_means," ",e.jsx("b",{children:s.gle_equal.toUpperCase()})," ",s.gle_to]})]})]})]})]})]})})};export{xe as GreaterLessEqualGame,xe as default};

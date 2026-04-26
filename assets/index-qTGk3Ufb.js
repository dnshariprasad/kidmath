import{i as o,p as A,l as N,m as D,x as n,R as S,n as e,P as E,G as P,y as R,W as q,Y as z,_ as G,$ as F,a0 as L,A as M,v as g,F as I,H as U,J as B,a2 as H,a1 as O,a3 as u}from"./index-DKgGRrO2.js";import{S as Q}from"./SurpriseCard-CtD6PH4i.js";import{r as h,g as V}from"./index-DLMUowaz.js";import{c as C}from"./confetti.module-ONDKWxYZ.js";import{C as Y}from"./ChallengeHeader-DXOEuJad.js";import{D as J}from"./DifficultyPicker-CvJTgsLr.js";import{F as K}from"./FeedbackDisplay-DAvM_Jr8.js";import{g as _,a as W}from"./mathUtils-DtZIA5qY.js";import{S as X}from"./scale-Bk0DMVrd.js";import"./info-C2t8V-sz.js";const Z=o(A.div)`
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
`,ee=o.span`
  color: ${t=>t.theme.colors.questionMark};

  width: 80px;
  text-align: center;
  font-family: ${t=>t.theme.fonts.primary};
`,te=o.div`
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
`,se=o.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
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
`,re=t=>{const s=W(t);return{num1:_(s),num2:_(s)}},ae=(t,s,r)=>r==="greater"?t>s:r==="less"?t<s:r==="equal"?t===s:!1,ue=()=>{const t=N(),s=H.en,r=D(i=>{var a,b;return((b=(a=i.alphabet.gameStats)==null?void 0:a.comparison)==null?void 0:b.streak)??0}),[c,k]=n.useState(2),[m,w]=n.useState(0),[p,v]=n.useState(0),[$,l]=n.useState(null),d=n.useCallback(()=>{const{num1:i,num2:a}=re(c);w(i),v(a),l(null)},[c]);n.useEffect(()=>{d()},[d]),n.useEffect(()=>{if(r>0&&r%10===0){l({message:"Incredible! 10 in a row! 🌟",isCorrect:!0}),h("Incredible! 10 in a row! You are a superstar!"),C({particleCount:300,spread:100,origin:{y:.6},colors:["#6366f1","#4f46e5","#818cf8"]});const i=setTimeout(()=>{t(S("comparison")),l(null)},3e3);return()=>clearTimeout(i)}},[r,t]);const x=i=>{if(ae(m,p,i)){const a=V(r);l({message:a,isCorrect:!0}),h(a),t(O("comparison")),C({particleCount:150,spread:70,origin:{y:.6},colors:[u.primary,u.primaryDark,u.accentLight]}),setTimeout(d,1500)}else l({message:s.fb_oops,isCorrect:!1}),h(s.fb_oopsRead),t(S("comparison")),setTimeout(()=>l(null),1500)},T=[{value:1,label:s.gle_digits9},{value:2,label:s.gle_digits99},{value:3,label:s.gle_digits999}];return e.jsx(E,{"data-testid":"view-comparison",children:e.jsxs(P,{children:[e.jsx(Y,{icon:X,title:s.gle_title,subtitle:s.gle_subtitle,streak:r}),e.jsx(Q,{title:s.sdk_certProgress,subtitle:r<10?`${10-r%10} ${s.sdk_moreForCert}`:s.sdk_milestoneReached}),e.jsxs(R,{"data-testid":"activity-area",children:[e.jsxs(q,{children:[Array.from({length:r%10||(r>0?10:0)}).map((i,a)=>e.jsxs(z,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",damping:10,delay:a*.05},children:[e.jsx(G,{children:"⭐"}),e.jsx(F,{children:a+1})]},a)),r>=10&&e.jsx(L,{children:"+"})]}),e.jsx(M,{mode:"wait",children:e.jsxs(Z,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:1.2,opacity:0},children:[e.jsx("span",{children:m}),e.jsx(ee,{children:"?"}),e.jsx("span",{children:p})]},`${m}-${p}`)}),e.jsxs(te,{children:[e.jsx(g,{title:"<",onClick:()=>x("less"),variant:"secondary"}),e.jsx(g,{title:"=",onClick:()=>x("equal"),variant:"secondary"}),e.jsx(g,{title:">",onClick:()=>x("greater"),variant:"secondary"})]}),e.jsx(K,{feedback:$})]}),e.jsxs(I,{"data-testid":"settings-area",children:[e.jsx(J,{name:"digits",options:T,currentValue:c,onChange:k}),e.jsxs(U,{children:[e.jsx(B,{children:s.gle_quickTips}),e.jsxs(se,{children:[e.jsxs(f,{children:[e.jsx(j,{children:">"}),e.jsxs(y,{children:[s.gle_means," ",e.jsx("b",{children:s.gle_greater.toUpperCase()})," ",s.gle_than]})]}),e.jsxs(f,{children:[e.jsx(j,{children:"<"}),e.jsxs(y,{children:[s.gle_means," ",e.jsx("b",{children:s.gle_less.toUpperCase()})," ",s.gle_than]})]}),e.jsxs(f,{children:[e.jsx(j,{children:"="}),e.jsxs(y,{children:[s.gle_means," ",e.jsx("b",{children:s.gle_equal.toUpperCase()})," ",s.gle_to]})]})]})]})]})]})})};export{ue as GreaterLessEqualGame,ue as default};

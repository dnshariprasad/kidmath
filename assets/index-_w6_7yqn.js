import{j as o,q as N,m as A,n as D,y as n,a4 as S,o as e,P as q,R as E,W as P,a5 as R,a6 as z,a7 as G,a8 as F,a9 as L,Y as M,w as g,a0 as I,a1 as U,a2 as B,ab as O,aa as Q,ac as u}from"./index-DlISxuOU.js";import{S as V}from"./SurpriseCard-D5rPf3Wl.js";import{r as h,g as Y}from"./index-B7ladXHc.js";import{c as C}from"./confetti.module-ONDKWxYZ.js";import{C as H}from"./ChallengeHeader-Cc1AXPky.js";import{D as K}from"./DifficultyPicker-CEVSvujo.js";import{F as W}from"./FeedbackDisplay-CialzeAv.js";import{g as w,a as X}from"./mathUtils-B1Q27TTV.js";import{S as J}from"./scale-DAcY6UGA.js";import"./info-DUtm9fgy.js";const Z=o(N.div)`
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
`,b=o.span`
  font-size: 0.9rem;
  color: ${t=>t.theme.colors.textSecondary};
  font-weight: 600;

  b {
    color: ${t=>t.theme.colors.textPrimary};
  }
`,ae=t=>{const s=X(t);return{num1:w(s),num2:w(s)}},re=(t,s,a)=>a==="greater"?t>s:a==="less"?t<s:a==="equal"?t===s:!1,ue=()=>{const t=A(),s=O.en,a=D(i=>{var r,y;return((y=(r=i.alphabet.gameStats)==null?void 0:r.comparison)==null?void 0:y.streak)??0}),[c,k]=n.useState(2),[m,_]=n.useState(0),[p,v]=n.useState(0),[T,l]=n.useState(null),d=n.useCallback(()=>{const{num1:i,num2:r}=ae(c);_(i),v(r),l(null)},[c]);n.useEffect(()=>{d()},[d]),n.useEffect(()=>{if(a>0&&a%10===0){l({message:"Incredible! 10 in a row! 🌟",isCorrect:!0}),h("Incredible! 10 in a row! You are a superstar!"),C({particleCount:300,spread:100,origin:{y:.6},colors:["#6366f1","#4f46e5","#818cf8"]});const i=setTimeout(()=>{t(S("comparison")),l(null)},3e3);return()=>clearTimeout(i)}},[a,t]);const x=i=>{if(re(m,p,i)){const r=Y(a);l({message:r,isCorrect:!0}),h(r),t(Q("comparison")),C({particleCount:150,spread:70,origin:{y:.6},colors:[u.primary,u.primaryDark,u.accentLight]}),setTimeout(d,1500)}else l({message:s.fb_oops,isCorrect:!1}),h(s.fb_oopsRead),t(S("comparison")),setTimeout(()=>l(null),1500)},$=[{value:1,label:s.gle_digits9},{value:2,label:s.gle_digits99},{value:3,label:s.gle_digits999}];return e.jsx(q,{"data-testid":"view-comparison",children:e.jsxs(E,{children:[e.jsx(H,{icon:J,title:s.gle_title,subtitle:s.gle_subtitle,streak:a}),e.jsx(V,{title:s.sdk_certProgress,subtitle:a<10?`${10-a%10} ${s.sdk_moreForCert}`:s.sdk_milestoneReached}),e.jsxs(P,{"data-testid":"activity-area",children:[e.jsxs(R,{children:[Array.from({length:a%10||(a>0?10:0)}).map((i,r)=>e.jsxs(z,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",damping:10,delay:r*.05},children:[e.jsx(G,{children:"⭐"}),e.jsx(F,{children:r+1})]},r)),a>=10&&e.jsx(L,{children:"+"})]}),e.jsx(M,{mode:"wait",children:e.jsxs(Z,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:1.2,opacity:0},children:[e.jsx("span",{children:m}),e.jsx(ee,{children:"?"}),e.jsx("span",{children:p})]},`${m}-${p}`)}),e.jsxs(te,{children:[e.jsx(g,{title:"<",onClick:()=>x("less"),variant:"secondary"}),e.jsx(g,{title:"=",onClick:()=>x("equal"),variant:"secondary"}),e.jsx(g,{title:">",onClick:()=>x("greater"),variant:"secondary"})]}),e.jsx(W,{feedback:T})]}),e.jsxs(I,{"data-testid":"settings-area",children:[e.jsx(K,{name:"digits",options:$,currentValue:c,onChange:k}),e.jsxs(U,{children:[e.jsx(B,{children:s.gle_quickTips}),e.jsxs(se,{children:[e.jsxs(f,{children:[e.jsx(j,{children:">"}),e.jsxs(b,{children:[s.gle_means," ",e.jsx("b",{children:s.gle_greater.toUpperCase()})," ",s.gle_than]})]}),e.jsxs(f,{children:[e.jsx(j,{children:"<"}),e.jsxs(b,{children:[s.gle_means," ",e.jsx("b",{children:s.gle_less.toUpperCase()})," ",s.gle_than]})]}),e.jsxs(f,{children:[e.jsx(j,{children:"="}),e.jsxs(b,{children:[s.gle_means," ",e.jsx("b",{children:s.gle_equal.toUpperCase()})," ",s.gle_to]})]})]})]})]})]})})};export{ue as GreaterLessEqualGame,ue as default};

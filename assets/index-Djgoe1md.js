import{k as v,s as P,n as Q,o as V,r as u,ad as I,a3 as $,p as a,P as G,W as H,Y as K,a4 as Y,a5 as B,a6 as W,a7 as Z,a8 as J,Z as U,z as X,$ as ee,ae as A,af as E,v as te,a9 as ae}from"./index-CqNqe0_u.js";import{r as _,g as se}from"./index-B0YFU1Rv.js";import{c as N}from"./confetti.module-ONDKWxYZ.js";import{C as ne}from"./ChallengeHeader-CJHh2sOw.js";import{D as O}from"./DifficultyPicker-C7s_2laC.js";import{F as ie}from"./FeedbackDisplay-w7gsEUMe.js";import{b as r,M as R}from"./mathUtils-B1Q27TTV.js";import{C as re}from"./calculator-BhpEJjXb.js";import"./info-Cd6A2b_y.js";const oe=v(P.div)`
  font-size: clamp(3rem, 12vw, 6rem);
  font-weight: 900;
  color: ${t=>t.theme.colors.primary};
  font-family: ${t=>t.theme.fonts.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: clamp(2.5rem, 15vw, 4rem);
    gap: 15px;
  }
`,ce=v.span`
  color: ${t=>t.theme.colors.operator};
`,le=v.span`
  color: ${t=>t.theme.colors.equalSign};
`,me=v.span`
  color: ${t=>t.theme.colors.questionMark};
`,de=v.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  gap: 16px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;

  & > button {
    width: 100%;
    height: 80px;
    font-size: clamp(1.2rem, 4vw, 1.8rem);
    white-space: nowrap;
  }

  @media (max-width: 576px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    max-width: 400px;

    & > button {
      height: 64px;
      font-size: 1.2rem;
      min-width: 0;
      white-space: nowrap;
    }
  }
`,T=(t,e,o,p)=>{if(o==="+")return t+e;if(o==="-")return t-e;if(o==="*")return t*e;if(o==="/"){if(e===0)return"∞";if(p)return Number((t/e).toFixed(1));{const j=Math.floor(t/e),l=t%e;return`Q:${j} R:${l}`}}return 0},ue=(t,e,o,p,j)=>{const l=`LEVEL_${t}`,d=R[l]||R.LEVEL_1;let g=0,n=0,s=0;for(;g<50;){if(e==="*")n=r(1,d.multMax),s=r(1,d.multMax);else if(e==="/"){const c=Math.min(d.multMax,12);if(s=r(1,c),p)n=r(d.min,d.max);else{const y=r(1,c),S=t>=3?r(0,s-1):0;n=s*y+S}}else if(t===2){const c=Math.random()>.5;n=c?r(1,9):r(10,99),s=c?r(10,99):r(1,9)}else t===3?(n=r(10,99),s=r(10,99)):(n=r(d.min,d.max),s=r(d.min,d.max));e==="-"&&n<s&&!o&&([n,s]=[s,n]);const x=`${n}${e}${s}`;if(!j.includes(x))break;g++}const f=T(n,s,e,p),h=new Set([f]);for(;h.size<4;)if(typeof f=="number"){const x=r(1,10)*(Math.random()>.5?1:-1),c=p?Number((f+x/10).toFixed(1)):f+x;(o||c>=0)&&h.add(c)}else{const x=r(-2,2),c=r(-2,2),y=Math.max(0,Math.floor(n/(s||1))+x),S=Math.max(0,n%(s||1)+c),k=`Q:${y} R:${S}`;k!==f&&h.add(k)}return{num1:n,num2:s,correctAnswer:f,options:Array.from(h).sort(()=>Math.random()-.5),signature:`${n}${e}${s}`}},Se=()=>{const t=Q(),e=te.en,o=V(i=>{var m,b;return((b=(m=i.alphabet.gameStats)==null?void 0:m.math)==null?void 0:b.streak)??0}),[p,j]=u.useState(1),[l,d]=u.useState("+"),[g,n]=u.useState(!1),[s,f]=u.useState(!1),[h,x]=u.useState(0),[c,y]=u.useState(0),[S,k]=u.useState([]),[D,w]=u.useState(null),C=I.useRef([]),M=u.useCallback(()=>{const{num1:i,num2:m,options:b,signature:F}=ue(p,l,s,g,C.current);C.current=[F,...C.current].slice(0,10),x(i),y(m),k(b),w(null)},[p,l,g,s]);u.useEffect(()=>{M()},[M]),u.useEffect(()=>{if(o>0&&o%10===0){w({message:"Incredible! 10 in a row! 🌟",isCorrect:!0}),_("Incredible! 10 in a row! You are a superstar!"),N({particleCount:300,spread:100,origin:{y:.6},colors:["#6366f1","#4f46e5","#818cf8"]});const i=setTimeout(()=>{t($("math")),w(null)},3e3);return()=>clearTimeout(i)}},[o,t]);const L=i=>{const m=T(h,c,l,g);if(i===m){const b=se(o);w({message:b,isCorrect:!0}),_(b),t(ae("math")),N({particleCount:150,spread:70,origin:{y:.6},colors:["#6366f1","#4f46e5","#818cf8"]}),setTimeout(M,1500)}else w({message:e.fb_keepTrying,isCorrect:!1}),_(e.fb_tryAgain),t($("math")),setTimeout(()=>w(null),1500)},q=[{value:"+",label:e.math_addition},{value:"-",label:e.math_subtraction},{value:"*",label:e.math_multiplication},{value:"/",label:e.math_division}],z=[{value:1,label:e.diff_beginner},{value:2,label:e.diff_explorer},{value:3,label:e.diff_achiever},{value:4,label:e.diff_master},{value:5,label:e.diff_elite}];return a.jsx(G,{"data-testid":"view-counting",children:a.jsxs(H,{children:[a.jsxs(K,{"data-testid":"activity-area",children:[a.jsx(ne,{icon:re,title:e.math_mathMagic,subtitle:e.math_countingDesc,streak:o}),a.jsxs(Y,{children:[Array.from({length:o%10||(o>0?10:0)}).map((i,m)=>a.jsxs(B,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",damping:10,delay:m*.05},children:[a.jsx(W,{children:"⭐"}),a.jsx(Z,{children:m+1})]},m)),o>=10&&a.jsx(J,{children:"+"})]}),a.jsx(U,{mode:"wait",children:a.jsxs(oe,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:1.2,opacity:0},children:[a.jsx("span",{children:h}),a.jsx(ce,{children:l}),a.jsx("span",{children:c}),a.jsx(le,{children:"="}),a.jsx(me,{children:"?"})]},`${h}-${c}-${l}`)}),a.jsx(de,{children:S.map((i,m)=>a.jsx(X,{variant:"secondary",size:"lg",onClick:()=>L(i),children:i},m))}),a.jsx(ie,{feedback:D})]}),a.jsxs(ee,{"data-testid":"settings-area",children:[a.jsx(O,{title:e.com_operation,name:"operator",options:q,currentValue:l,onChange:i=>d(i)}),l==="/"&&a.jsxs(A,{children:[a.jsx(E,{type:"checkbox",checked:g,onChange:i=>n(i.target.checked)}),e.com_allowDecimals]}),l==="-"&&a.jsxs(A,{children:[a.jsx(E,{type:"checkbox",checked:s,onChange:i=>f(i.target.checked)}),e.com_allowNegative]}),a.jsx(O,{name:"digits",options:z,currentValue:p,onChange:j})]})]})})};export{Se as MathChallenge,Se as default};

import{i as _,p as P,l as Q,m as V,x as u,a6 as G,R as $,n as t,P as I,G as H,y as K,W as Y,Y as B,_ as W,$ as J,a0 as U,A as X,v as Z,F as ee,a7 as A,a8 as E,a2 as te,a1 as ae}from"./index-BievBFI0.js";import{S as se}from"./SurpriseCard-CExCKdY9.js";import{r as M,g as ie}from"./index-CFRl78vb.js";import{c as T}from"./confetti.module-ONDKWxYZ.js";import{C as ne}from"./ChallengeHeader-B5LRwc2G.js";import{D as N}from"./DifficultyPicker-CS0FpUlR.js";import{F as re}from"./FeedbackDisplay-Ce9xqRAc.js";import{b as r,M as O}from"./mathUtils-B1Q27TTV.js";import{C as oe}from"./calculator-9kiJY_F1.js";import"./info-DQXGkS7g.js";const ce=_(P.div)`
  font-size: clamp(3rem, 12vw, 6rem);
  font-weight: 900;
  color: ${a=>a.theme.colors.primary};
  font-family: ${a=>a.theme.fonts.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 20px 0;

  @media (max-width: 768px) {
    font-size: clamp(2.5rem, 15vw, 4rem);
    gap: 15px;
  }
`,le=_.span`
  color: ${a=>a.theme.colors.operator};
`,me=_.span`
  color: ${a=>a.theme.colors.equalSign};
`,pe=_.span`
  color: ${a=>a.theme.colors.questionMark};
`,ue=_.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  gap: 20px;
  width: 100%;
  max-width: 600px;
  margin: 20px auto 0;

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
`,R=(a,e,o,d)=>{if(o==="+")return a+e;if(o==="-")return a-e;if(o==="*")return a*e;if(o==="/"){if(e===0)return"∞";if(d)return Number((a/e).toFixed(1));{const w=Math.floor(a/e),l=a%e;return`Q:${w} R:${l}`}}return 0},de=(a,e,o,d,w)=>{const l=`LEVEL_${a}`,p=O[l]||O.LEVEL_1;let g=0,i=0,s=0;for(;g<50;){if(e==="*")i=r(1,p.multMax),s=r(1,p.multMax);else if(e==="/"){const c=Math.min(p.multMax,12);if(s=r(1,c),d)i=r(p.min,p.max);else{const j=r(1,c),S=a>=3?r(0,s-1):0;i=s*j+S}}else if(a===2){const c=Math.random()>.5;i=c?r(1,9):r(10,99),s=c?r(10,99):r(1,9)}else a===3?(i=r(10,99),s=r(10,99)):(i=r(p.min,p.max),s=r(p.min,p.max));e==="-"&&i<s&&!o&&([i,s]=[s,i]);const x=`${i}${e}${s}`;if(!w.includes(x))break;g++}const f=R(i,s,e,d),h=new Set([f]);for(;h.size<4;)if(typeof f=="number"){const x=r(1,10)*(Math.random()>.5?1:-1),c=d?Number((f+x/10).toFixed(1)):f+x;(o||c>=0)&&h.add(c)}else{const x=r(-2,2),c=r(-2,2),j=Math.max(0,Math.floor(i/(s||1))+x),S=Math.max(0,i%(s||1)+c),v=`Q:${j} R:${S}`;v!==f&&h.add(v)}return{num1:i,num2:s,correctAnswer:f,options:Array.from(h).sort(()=>Math.random()-.5),signature:`${i}${e}${s}`}},ve=()=>{const a=Q(),e=te.en,o=V(n=>{var m,b;return((b=(m=n.alphabet.gameStats)==null?void 0:m.math)==null?void 0:b.streak)??0}),[d,w]=u.useState(1),[l,p]=u.useState("+"),[g,i]=u.useState(!1),[s,f]=u.useState(!1),[h,x]=u.useState(0),[c,j]=u.useState(0),[S,v]=u.useState([]),[D,y]=u.useState(null),C=G.useRef([]),k=u.useCallback(()=>{const{num1:n,num2:m,options:b,signature:z}=de(d,l,s,g,C.current);C.current=[z,...C.current].slice(0,10),x(n),j(m),v(b),y(null)},[d,l,g,s]);u.useEffect(()=>{k()},[k]),u.useEffect(()=>{if(o>0&&o%10===0){y({message:"Incredible! 10 in a row! 🌟",isCorrect:!0}),M("Incredible! 10 in a row! You are a superstar!"),T({particleCount:300,spread:100,origin:{y:.6},colors:["#6366f1","#4f46e5","#818cf8"]});const n=setTimeout(()=>{a($("math")),y(null)},3e3);return()=>clearTimeout(n)}},[o,a]);const L=n=>{const m=R(h,c,l,g);if(n===m){const b=ie(o);y({message:b,isCorrect:!0}),M(b),a(ae("math")),T({particleCount:150,spread:70,origin:{y:.6},colors:["#6366f1","#4f46e5","#818cf8"]}),setTimeout(k,1500)}else y({message:e.fb_keepTrying,isCorrect:!1}),M(e.fb_tryAgain),a($("math")),setTimeout(()=>y(null),1500)},q=[{value:"+",label:e.math_addition},{value:"-",label:e.math_subtraction},{value:"*",label:e.math_multiplication},{value:"/",label:e.math_division}],F=[{value:1,label:e.diff_beginner},{value:2,label:e.diff_explorer},{value:3,label:e.diff_achiever},{value:4,label:e.diff_master},{value:5,label:e.diff_elite}];return t.jsx(I,{"data-testid":"view-counting",children:t.jsxs(H,{children:[t.jsx(ne,{icon:oe,title:e.math_mathMagic,subtitle:e.math_countingDesc,streak:o}),t.jsx(se,{title:e.com_readyForTest,subtitle:e.com_masterTryTrophy}),t.jsxs(K,{"data-testid":"activity-area",children:[t.jsxs(Y,{children:[Array.from({length:o%10||(o>0?10:0)}).map((n,m)=>t.jsxs(B,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",damping:10,delay:m*.05},children:[t.jsx(W,{children:"⭐"}),t.jsx(J,{children:m+1})]},m)),o>=10&&t.jsx(U,{children:"+"})]}),t.jsx(X,{mode:"wait",children:t.jsxs(ce,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:1.2,opacity:0},children:[t.jsx("span",{children:h}),t.jsx(le,{children:l}),t.jsx("span",{children:c}),t.jsx(me,{children:"="}),t.jsx(pe,{children:"?"})]},`${h}-${c}-${l}`)}),t.jsx(ue,{children:S.map((n,m)=>t.jsx(Z,{title:n.toString(),onClick:()=>L(n),variant:"secondary"},m))}),t.jsx(re,{feedback:D})]}),t.jsxs(ee,{"data-testid":"settings-area",children:[t.jsx(N,{title:e.com_operation,name:"operator",options:q,currentValue:l,onChange:n=>p(n)}),l==="/"&&t.jsxs(A,{children:[t.jsx(E,{type:"checkbox",checked:g,onChange:n=>i(n.target.checked)}),e.com_allowDecimals]}),l==="-"&&t.jsxs(A,{children:[t.jsx(E,{type:"checkbox",checked:s,onChange:n=>f(n.target.checked)}),e.com_allowNegative]}),t.jsx(N,{name:"digits",options:F,currentValue:d,onChange:w})]})]})})};export{ve as MathChallenge,ve as default};

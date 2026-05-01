import{j as C,q as P,m as Q,n as V,y as d,af as I,a4 as $,o as t,P as G,R as H,W as K,a5 as Y,a6 as B,a7 as W,a8 as J,a9 as U,Y as X,w as Z,a0 as ee,ag as A,ah as E,ab as te,aa as ae}from"./index-DlISxuOU.js";import{S as se}from"./SurpriseCard-D5rPf3Wl.js";import{r as M,g as ie}from"./index-B7ladXHc.js";import{c as T}from"./confetti.module-ONDKWxYZ.js";import{C as ne}from"./ChallengeHeader-Cc1AXPky.js";import{D as N}from"./DifficultyPicker-CEVSvujo.js";import{F as re}from"./FeedbackDisplay-CialzeAv.js";import{b as r,M as O}from"./mathUtils-B1Q27TTV.js";import{C as oe}from"./calculator-DuMhLPiG.js";import"./info-DUtm9fgy.js";const ce=C(P.div)`
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
`,le=C.span`
  color: ${a=>a.theme.colors.operator};
`,me=C.span`
  color: ${a=>a.theme.colors.equalSign};
`,ue=C.span`
  color: ${a=>a.theme.colors.questionMark};
`,de=C.div`
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
`,R=(a,e,o,p)=>{if(o==="+")return a+e;if(o==="-")return a-e;if(o==="*")return a*e;if(o==="/"){if(e===0)return"∞";if(p)return Number((a/e).toFixed(1));{const w=Math.floor(a/e),l=a%e;return`Q:${w} R:${l}`}}return 0},pe=(a,e,o,p,w)=>{const l=`LEVEL_${a}`,u=O[l]||O.LEVEL_1;let g=0,i=0,s=0;for(;g<50;){if(e==="*")i=r(1,u.multMax),s=r(1,u.multMax);else if(e==="/"){const c=Math.min(u.multMax,12);if(s=r(1,c),p)i=r(u.min,u.max);else{const j=r(1,c),S=a>=3?r(0,s-1):0;i=s*j+S}}else if(a===2){const c=Math.random()>.5;i=c?r(1,9):r(10,99),s=c?r(10,99):r(1,9)}else a===3?(i=r(10,99),s=r(10,99)):(i=r(u.min,u.max),s=r(u.min,u.max));e==="-"&&i<s&&!o&&([i,s]=[s,i]);const x=`${i}${e}${s}`;if(!w.includes(x))break;g++}const f=R(i,s,e,p),h=new Set([f]);for(;h.size<4;)if(typeof f=="number"){const x=r(1,10)*(Math.random()>.5?1:-1),c=p?Number((f+x/10).toFixed(1)):f+x;(o||c>=0)&&h.add(c)}else{const x=r(-2,2),c=r(-2,2),j=Math.max(0,Math.floor(i/(s||1))+x),S=Math.max(0,i%(s||1)+c),_=`Q:${j} R:${S}`;_!==f&&h.add(_)}return{num1:i,num2:s,correctAnswer:f,options:Array.from(h).sort(()=>Math.random()-.5),signature:`${i}${e}${s}`}},_e=()=>{const a=Q(),e=te.en,o=V(n=>{var m,b;return((b=(m=n.alphabet.gameStats)==null?void 0:m.math)==null?void 0:b.streak)??0}),[p,w]=d.useState(1),[l,u]=d.useState("+"),[g,i]=d.useState(!1),[s,f]=d.useState(!1),[h,x]=d.useState(0),[c,j]=d.useState(0),[S,_]=d.useState([]),[q,y]=d.useState(null),v=I.useRef([]),k=d.useCallback(()=>{const{num1:n,num2:m,options:b,signature:z}=pe(p,l,s,g,v.current);v.current=[z,...v.current].slice(0,10),x(n),j(m),_(b),y(null)},[p,l,g,s]);d.useEffect(()=>{k()},[k]),d.useEffect(()=>{if(o>0&&o%10===0){y({message:"Incredible! 10 in a row! 🌟",isCorrect:!0}),M("Incredible! 10 in a row! You are a superstar!"),T({particleCount:300,spread:100,origin:{y:.6},colors:["#6366f1","#4f46e5","#818cf8"]});const n=setTimeout(()=>{a($("math")),y(null)},3e3);return()=>clearTimeout(n)}},[o,a]);const D=n=>{const m=R(h,c,l,g);if(n===m){const b=ie(o);y({message:b,isCorrect:!0}),M(b),a(ae("math")),T({particleCount:150,spread:70,origin:{y:.6},colors:["#6366f1","#4f46e5","#818cf8"]}),setTimeout(k,1500)}else y({message:e.fb_keepTrying,isCorrect:!1}),M(e.fb_tryAgain),a($("math")),setTimeout(()=>y(null),1500)},L=[{value:"+",label:e.math_addition},{value:"-",label:e.math_subtraction},{value:"*",label:e.math_multiplication},{value:"/",label:e.math_division}],F=[{value:1,label:e.diff_beginner},{value:2,label:e.diff_explorer},{value:3,label:e.diff_achiever},{value:4,label:e.diff_master},{value:5,label:e.diff_elite}];return t.jsx(G,{"data-testid":"view-counting",children:t.jsxs(H,{children:[t.jsx(ne,{icon:oe,title:e.math_mathMagic,subtitle:e.math_countingDesc,streak:o}),t.jsx(se,{title:e.com_readyForTest,subtitle:e.com_masterTryTrophy}),t.jsxs(K,{"data-testid":"activity-area",children:[t.jsxs(Y,{children:[Array.from({length:o%10||(o>0?10:0)}).map((n,m)=>t.jsxs(B,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",damping:10,delay:m*.05},children:[t.jsx(W,{children:"⭐"}),t.jsx(J,{children:m+1})]},m)),o>=10&&t.jsx(U,{children:"+"})]}),t.jsx(X,{mode:"wait",children:t.jsxs(ce,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:1.2,opacity:0},children:[t.jsx("span",{children:h}),t.jsx(le,{children:l}),t.jsx("span",{children:c}),t.jsx(me,{children:"="}),t.jsx(ue,{children:"?"})]},`${h}-${c}-${l}`)}),t.jsx(de,{children:S.map((n,m)=>t.jsx(Z,{title:n.toString(),onClick:()=>D(n),variant:"secondary"},m))}),t.jsx(re,{feedback:q})]}),t.jsxs(ee,{"data-testid":"settings-area",children:[t.jsx(N,{title:e.com_operation,name:"operator",options:L,currentValue:l,onChange:n=>u(n)}),l==="/"&&t.jsxs(A,{children:[t.jsx(E,{type:"checkbox",checked:g,onChange:n=>i(n.target.checked)}),e.com_allowDecimals]}),l==="-"&&t.jsxs(A,{children:[t.jsx(E,{type:"checkbox",checked:s,onChange:n=>f(n.target.checked)}),e.com_allowNegative]}),t.jsx(N,{name:"digits",options:F,currentValue:p,onChange:w})]})]})})};export{_e as MathChallenge,_e as default};

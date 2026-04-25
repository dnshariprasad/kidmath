import{i as u,p as R,l as z,m as P,x as r,a7 as G,n as e,P as K,G as V,y as L,R as Q,W as q,Y as B,_ as H,$ as I,A as b,v as W,z as Y,a0 as J,a1 as U,a6 as X,a2 as Z,a3 as ee}from"./index-S6EAxzK5.js";import{C as te,S as ae,g as se,r as C}from"./ChallengeHeader-Dd5GSdB_.js";import{c as ie}from"./confetti.module-ONDKWxYZ.js";import{g as y,a as ne}from"./mathUtils-DtZIA5qY.js";import{D as v}from"./DifficultyPicker-BiSHlKTa.js";import{F as re}from"./FeedbackDisplay-DCXhlqE1.js";import{C as oe}from"./calculator-B-Js-SyD.js";const ce=u(R.div)`
  font-size: clamp(3rem, 12vw, 6rem);
  font-weight: 900;
  color: ${l=>l.theme.colors.primary};
  font-family: ${l=>l.theme.fonts.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 20px 0;

  @media (max-width: 768px) {
    font-size: clamp(2.5rem, 15vw, 4rem);
    gap: 15px;
  }
`,le=u.span`
  color: #ff7675;
`,me=u.span`
  color: #6366f1;
`,pe=u.span`
  color: #dfe6e9;
`,de=u.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  flex-wrap: wrap;

  & > button {
    flex: 1;
    min-width: 120px;
    height: 80px;
    font-size: 2rem;
  }

  @media (max-width: 576px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    max-width: 400px;

    & > button {
      height: 64px;
      font-size: 1.5rem;
      min-width: 0;
    }
  }
`,Se=()=>{const l=z(),o=P(s=>{var a,t;return((t=(a=s.alphabet.gameStats)==null?void 0:a.math)==null?void 0:t.streak)??0}),[h,A]=r.useState(1),[i,_]=r.useState("+"),[m,$]=r.useState(0),[p,k]=r.useState(0),[E,N]=r.useState([]),[F,x]=r.useState(null),[T,S]=r.useState(!1),n=X.en,f=G.useRef([]),g=r.useCallback(()=>{const s=ne(h);let a=0,t=0,c=0;for(;a<10;){t=y(s),c=y(s),i==="-"&&t<c&&([t,c]=[c,t]);const d=`${t}${i}${c}`;if(!f.current.includes(d)){f.current=[d,...f.current].slice(0,10);break}a++}$(t),k(c);const w=i==="+"?t+c:i==="-"?t-c:t*c,j=new Set([w]);for(;j.size<4;){const d=y(10)-5;d!==0&&j.add(w+d)}N(Array.from(j).sort(()=>Math.random()-.5)),x(null)},[h,i]);r.useEffect(()=>{g()},[g]),r.useEffect(()=>{o>0&&o%10===0&&S(!0)},[o]);const D=s=>{const a=i==="+"?m+p:i==="-"?m-p:m*p;if(s===a){const t=se(o);x({message:t,isCorrect:!0}),C(t),l(Z("math")),ie({particleCount:150,spread:70,origin:{y:.6},colors:["#6366F1","#4F46E5","#FF7675"]}),setTimeout(g,1500)}else x({message:"Keep trying! 💪",isCorrect:!1}),C("Keep trying"),l(ee("math")),setTimeout(()=>x(null),1500)},M=[{value:"+",label:n.math_addition},{value:"-",label:n.math_subtraction},{value:"*",label:n.math_multiplication}],O=[{value:1,label:"1-9"},{value:2,label:"10-99"},{value:3,label:"100-999"}];return e.jsxs(K,{"data-testid":"view-counting",children:[e.jsxs(V,{children:[e.jsx(te,{icon:oe,title:n.math_mathMagic,subtitle:n.math_countingDesc,streak:o}),e.jsx(ae,{title:n.com_readyForTest,subtitle:n.com_masterTryTrophy}),e.jsxs(L,{"data-testid":"activity-area",children:[e.jsxs(Q,{children:[Array.from({length:o%10||(o>0?10:0)}).map((s,a)=>e.jsxs(q,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",damping:10,delay:a*.05},children:[e.jsx(B,{children:"⭐"}),e.jsx(H,{children:a+1})]},a)),o>=10&&e.jsx(I,{children:"+"})]}),e.jsx(b,{mode:"wait",children:e.jsxs(ce,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:1.2,opacity:0},children:[e.jsx("span",{children:m}),e.jsx(le,{children:i}),e.jsx("span",{children:p}),e.jsx(me,{children:"="}),e.jsx(pe,{children:"?"})]},`${m}-${p}-${i}`)}),e.jsx(de,{children:E.map((s,a)=>e.jsx(W,{title:s.toString(),onClick:()=>D(s),variant:"secondary"},a))}),e.jsx(re,{feedback:F})]}),e.jsxs(Y,{"data-testid":"settings-area",children:[e.jsx(v,{title:n.com_operation,name:"operator",options:M,currentValue:i,onChange:s=>_(s)}),e.jsx(v,{name:"digits",options:O,currentValue:h,onChange:A})]})]}),e.jsx(b,{children:T&&e.jsx(J,{onClose:()=>{S(!1),l(U())},challengeName:n.math_mathMagic,score:o,level:`${h} ${n.com_level}`})})]})};export{Se as MathChallenge,Se as default};

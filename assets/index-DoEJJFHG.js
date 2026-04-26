import{i as g,p as B,l as H,m as W,x as r,a7 as Y,n as e,P as J,G as U,y as X,R as Z,W as ee,Y as te,_ as ae,$ as se,A as $,v as ie,z as oe,a8 as A,a9 as N,a0 as ne,a1 as re,a6 as ce,a2 as le,a3 as me}from"./index-BLv60CrT.js";import{S as pe}from"./SurpriseCard-HevOW5Dv.js";import{C as de,g as he,r as _}from"./ChallengeHeader-BG89Ch3U.js";import{c as ue}from"./confetti.module-ONDKWxYZ.js";import{g as x,a as fe}from"./mathUtils-DtZIA5qY.js";import{D as M}from"./DifficultyPicker-C14oJ6rC.js";import{F as xe}from"./FeedbackDisplay-D0toh92i.js";import{C as ge}from"./calculator-CQxrGNf0.js";import"./info-DtBY2aVM.js";const je=g(B.div)`
  font-size: clamp(3rem, 12vw, 6rem);
  font-weight: 900;
  color: ${h=>h.theme.colors.primary};
  font-family: ${h=>h.theme.fonts.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 20px 0;

  @media (max-width: 768px) {
    font-size: clamp(2.5rem, 15vw, 4rem);
    gap: 15px;
  }
`,we=g.span`
  color: #ff7675;
`,ye=g.span`
  color: #6366f1;
`,be=g.span`
  color: #dfe6e9;
`,Se=g.div`
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
`,De=()=>{const h=H(),m=W(s=>{var a,t;return((t=(a=s.alphabet.gameStats)==null?void 0:a.math)==null?void 0:t.streak)??0}),[j,F]=r.useState(1),[o,D]=r.useState("+"),[f,R]=r.useState(!1),[w,E]=r.useState(!1),[p,O]=r.useState(0),[d,T]=r.useState(0),[z,q]=r.useState([]),[P,y]=r.useState(null),[Q,C]=r.useState(!1),n=ce.en,S=Y.useRef([]),v=r.useCallback(()=>{const s=fe(j);let a=0,t=0,i=0;for(;a<10;){t=x(s),i=x(s),o==="-"&&t<i&&!w&&([t,i]=[i,t]);const l=`${t}${o}${i}`;if(!S.current.includes(l)){S.current=[l,...S.current].slice(0,10);break}a++}O(t),T(i);let c;if(o==="+")c=t+i;else if(o==="-")c=t-i;else if(o==="*")c=t*i;else if(f)c=Number((t/(i||1)).toFixed(1));else{const l=Math.floor(t/(i||1)),u=t%(i||1);c=`Q:${l} R:${u}`}const b=new Set([c]);for(;b.size<4;)if(typeof c=="number"){const l=x(10)-5;if(l!==0){const u=f?Number((c+l/10).toFixed(1)):c+l;(w||u>=0)&&b.add(u)}}else{const l=x(5)-2,u=x(5)-2,I=Math.max(0,Math.floor(t/(i||1))+l),L=Math.max(0,t%(i||1)+u),k=`Q:${I} R:${L}`;k!==c&&b.add(k)}q(Array.from(b).sort(()=>Math.random()-.5)),y(null)},[j,o,f,w]);r.useEffect(()=>{v()},[v]),r.useEffect(()=>{m>0&&m%10===0&&C(!0)},[m]);const G=s=>{let a;if(o==="+")a=p+d;else if(o==="-")a=p-d;else if(o==="*")a=p*d;else if(f)a=Number((p/(d||1)).toFixed(1));else{const t=Math.floor(p/(d||1)),i=p%(d||1);a=`Q:${t} R:${i}`}if(s===a){const t=he(m);y({message:t,isCorrect:!0}),_(t),h(le("math")),ue({particleCount:150,spread:70,origin:{y:.6},colors:["#6366F1","#4F46E5","#FF7675"]}),setTimeout(v,1500)}else y({message:"Keep trying! 💪",isCorrect:!1}),_("Keep trying"),h(me("math")),setTimeout(()=>y(null),1500)},K=[{value:"+",label:n.math_addition},{value:"-",label:n.math_subtraction},{value:"*",label:n.math_multiplication},{value:"/",label:n.math_division}],V=[{value:1,label:"1-9"},{value:2,label:"10-99"},{value:3,label:"100-999"}];return e.jsxs(J,{"data-testid":"view-counting",children:[e.jsxs(U,{children:[e.jsx(de,{icon:ge,title:n.math_mathMagic,subtitle:n.math_countingDesc,streak:m}),e.jsx(pe,{title:n.com_readyForTest,subtitle:n.com_masterTryTrophy}),e.jsxs(X,{"data-testid":"activity-area",children:[e.jsxs(Z,{children:[Array.from({length:m%10||(m>0?10:0)}).map((s,a)=>e.jsxs(ee,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",damping:10,delay:a*.05},children:[e.jsx(te,{children:"⭐"}),e.jsx(ae,{children:a+1})]},a)),m>=10&&e.jsx(se,{children:"+"})]}),e.jsx($,{mode:"wait",children:e.jsxs(je,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:1.2,opacity:0},children:[e.jsx("span",{children:p}),e.jsx(we,{children:o}),e.jsx("span",{children:d}),e.jsx(ye,{children:"="}),e.jsx(be,{children:"?"})]},`${p}-${d}-${o}`)}),e.jsx(Se,{children:z.map((s,a)=>e.jsx(ie,{title:s.toString(),onClick:()=>G(s),variant:"secondary"},a))}),e.jsx(xe,{feedback:P})]}),e.jsxs(oe,{"data-testid":"settings-area",children:[e.jsx(M,{title:n.com_operation,name:"operator",options:K,currentValue:o,onChange:s=>D(s)}),o==="/"&&e.jsxs(A,{children:[e.jsx(N,{type:"checkbox",checked:f,onChange:s=>R(s.target.checked)}),n.com_allowDecimals]}),o==="-"&&e.jsxs(A,{children:[e.jsx(N,{type:"checkbox",checked:w,onChange:s=>E(s.target.checked)}),n.com_allowNegative]}),e.jsx(M,{name:"digits",options:V,currentValue:j,onChange:F})]})]}),e.jsx($,{children:Q&&e.jsx(ne,{onClose:()=>{C(!1),h(re())},challengeName:n.math_mathMagic,score:m,level:`${j} ${n.com_level}`})})]})};export{De as MathChallenge,De as default};

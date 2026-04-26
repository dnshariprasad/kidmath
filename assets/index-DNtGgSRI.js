import{i as y,p as P,l as Q,m as G,x as m,a6 as I,R as A,n as e,P as V,G as L,y as Y,W as B,Y as H,_ as K,$ as W,a0 as J,A as U,v as X,F as Z,a7 as _,a8 as M,a2 as ee,a1 as te}from"./index-D_Vj5qNg.js";import{S as ae}from"./SurpriseCard-BgU4r4Kx.js";import{r as $,C as se,g as re}from"./ChallengeHeader-DfezAMpN.js";import{c as N}from"./confetti.module-ONDKWxYZ.js";import{D as T}from"./DifficultyPicker-C1KzxUj3.js";import{F as ne}from"./FeedbackDisplay-Bg3EQWGR.js";import{g as w,a as ie}from"./mathUtils-DtZIA5qY.js";import{C as oe}from"./calculator-Cubk6L9Q.js";import"./info-DGKsZKiX.js";const ce=y(P.div)`
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
`,le=y.span`
  color: ${a=>a.theme.colors.operator};
`,me=y.span`
  color: ${a=>a.theme.colors.equalSign};
`,pe=y.span`
  color: ${a=>a.theme.colors.questionMark};
`,ue=y.div`
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
`,O=(a,t,r,u)=>{if(r==="+")return a+t;if(r==="-")return a-t;if(r==="*")return a*t;if(u)return Number((a/(t||1)).toFixed(1));{const g=Math.floor(a/(t||1)),i=a%(t||1);return`Q:${g} R:${i}`}},de=(a,t,r,u,g)=>{const i=ie(a);let j=0,n=0,o=0;for(;j<10;){n=w(i),o=w(i),t==="-"&&n<o&&!r&&([n,o]=[o,n]);const l=`${n}${t}${o}`;if(!g.includes(l))break;j++}const p=O(n,o,t,u),h=new Set([p]);for(;h.size<4;)if(typeof p=="number"){const l=w(10)-5;if(l!==0){const f=u?Number((p+l/10).toFixed(1)):p+l;(r||f>=0)&&h.add(f)}}else{const l=w(5)-2,f=w(5)-2,b=Math.max(0,Math.floor(n/(o||1))+l),C=Math.max(0,n%(o||1)+f),S=`Q:${b} R:${C}`;S!==p&&h.add(S)}return{num1:n,num2:o,correctAnswer:p,options:Array.from(h).sort(()=>Math.random()-.5),signature:`${n}${t}${o}`}},Ce=()=>{const a=Q(),t=ee.en,r=G(s=>{var c,d;return((d=(c=s.alphabet.gameStats)==null?void 0:c.math)==null?void 0:d.streak)??0}),[u,g]=m.useState(1),[i,j]=m.useState("+"),[n,o]=m.useState(!1),[p,h]=m.useState(!1),[l,f]=m.useState(0),[b,C]=m.useState(0),[S,D]=m.useState([]),[R,x]=m.useState(null),k=I.useRef([]),v=m.useCallback(()=>{const{num1:s,num2:c,options:d,signature:z}=de(u,i,p,n,k.current);k.current=[z,...k.current].slice(0,10),f(s),C(c),D(d),x(null)},[u,i,n,p]);m.useEffect(()=>{v()},[v]),m.useEffect(()=>{if(r>0&&r%10===0){x({message:"Incredible! 10 in a row! 🌟",isCorrect:!0}),$("Incredible! 10 in a row! You are a superstar!"),N({particleCount:300,spread:100,origin:{y:.6},colors:["#6366f1","#4f46e5","#818cf8"]});const s=setTimeout(()=>{a(A("math")),x(null)},3e3);return()=>clearTimeout(s)}},[r,a]);const E=s=>{const c=O(l,b,i,n);if(s===c){const d=re(r);x({message:d,isCorrect:!0}),$(d),a(te("math")),N({particleCount:150,spread:70,origin:{y:.6},colors:["#6366f1","#4f46e5","#818cf8"]}),setTimeout(v,1500)}else x({message:t.fb_keepTrying,isCorrect:!1}),$(t.fb_tryAgain),a(A("math")),setTimeout(()=>x(null),1500)},F=[{value:"+",label:t.math_addition},{value:"-",label:t.math_subtraction},{value:"*",label:t.math_multiplication},{value:"/",label:t.math_division}],q=[{value:1,label:"1-9"},{value:2,label:"10-99"},{value:3,label:"100-999"}];return e.jsx(V,{"data-testid":"view-counting",children:e.jsxs(L,{children:[e.jsx(se,{icon:oe,title:t.math_mathMagic,subtitle:t.math_countingDesc,streak:r}),e.jsx(ae,{title:t.com_readyForTest,subtitle:t.com_masterTryTrophy}),e.jsxs(Y,{"data-testid":"activity-area",children:[e.jsxs(B,{children:[Array.from({length:r%10||(r>0?10:0)}).map((s,c)=>e.jsxs(H,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",damping:10,delay:c*.05},children:[e.jsx(K,{children:"⭐"}),e.jsx(W,{children:c+1})]},c)),r>=10&&e.jsx(J,{children:"+"})]}),e.jsx(U,{mode:"wait",children:e.jsxs(ce,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:1.2,opacity:0},children:[e.jsx("span",{children:l}),e.jsx(le,{children:i}),e.jsx("span",{children:b}),e.jsx(me,{children:"="}),e.jsx(pe,{children:"?"})]},`${l}-${b}-${i}`)}),e.jsx(ue,{children:S.map((s,c)=>e.jsx(X,{title:s.toString(),onClick:()=>E(s),variant:"secondary"},c))}),e.jsx(ne,{feedback:R})]}),e.jsxs(Z,{"data-testid":"settings-area",children:[e.jsx(T,{title:t.com_operation,name:"operator",options:F,currentValue:i,onChange:s=>j(s)}),i==="/"&&e.jsxs(_,{children:[e.jsx(M,{type:"checkbox",checked:n,onChange:s=>o(s.target.checked)}),t.com_allowDecimals]}),i==="-"&&e.jsxs(_,{children:[e.jsx(M,{type:"checkbox",checked:p,onChange:s=>h(s.target.checked)}),t.com_allowNegative]}),e.jsx(T,{name:"digits",options:q,currentValue:u,onChange:g})]})]})})};export{Ce as MathChallenge,Ce as default};

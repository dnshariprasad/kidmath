import{i as C,p as P,l as Q,m as V,x as p,a6 as G,R as A,n as t,P as I,G as H,y as K,W as Y,Y as B,_ as W,$ as J,a0 as U,A as X,v as Z,F as ee,a7 as _,a8 as E,a2 as te,a1 as se}from"./index-D4H7arrp.js";import{S as ae}from"./SurpriseCard-BbDj38Ay.js";import{r as $,g as ie}from"./index-Dl6NpilP.js";import{c as T}from"./confetti.module-ONDKWxYZ.js";import{C as ne}from"./ChallengeHeader-_i8DXWdV.js";import{D as N}from"./DifficultyPicker-D7imnbWj.js";import{F as re}from"./FeedbackDisplay-BTbu4C7v.js";import{b as r,M as D}from"./mathUtils-B1Q27TTV.js";import{C as oe}from"./calculator-INByQJ0e.js";import"./info-KA8V6_Wr.js";const ce=C(P.div)`
  font-size: clamp(3rem, 12vw, 6rem);
  font-weight: 900;
  color: ${s=>s.theme.colors.primary};
  font-family: ${s=>s.theme.fonts.primary};
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
  color: ${s=>s.theme.colors.operator};
`,me=C.span`
  color: ${s=>s.theme.colors.equalSign};
`,ue=C.span`
  color: ${s=>s.theme.colors.questionMark};
`,pe=C.div`
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
`,O=(s,e,o,d)=>{if(o==="+")return s+e;if(o==="-")return s-e;if(o==="*")return s*e;if(o==="/"){if(e===0)return"∞";if(d)return Number((s/e).toFixed(1));{const w=Math.floor(s/e),l=s%e;return`Q:${w} R:${l}`}}return 0},de=(s,e,o,d,w)=>{const l=`LEVEL_${s}`,u=D[l]||D.LEVEL_1;let g=0,i=0,a=0;for(;g<50;){if(e==="*")i=r(1,u.multMax),a=r(1,u.multMax);else if(e==="/"){const c=Math.min(u.multMax,12);if(a=r(1,c),d)i=r(u.min,u.max);else{const j=r(1,c),S=s>=3?r(0,a-1):0;i=a*j+S}}else if(s===2){const c=Math.random()>.5;i=c?r(1,9):r(10,99),a=c?r(10,99):r(1,9)}else s===3?(i=r(10,99),a=r(10,99)):(i=r(u.min,u.max),a=r(u.min,u.max));e==="-"&&i<a&&!o&&([i,a]=[a,i]);const x=`${i}${e}${a}`;if(!w.includes(x))break;g++}const h=O(i,a,e,d),f=new Set([h]);for(;f.size<4;)if(typeof h=="number"){const x=r(1,10)*(Math.random()>.5?1:-1),c=d?Number((h+x/10).toFixed(1)):h+x;(o||c>=0)&&f.add(c)}else{const x=r(-2,2),c=r(-2,2),j=Math.max(0,Math.floor(i/(a||1))+x),S=Math.max(0,i%(a||1)+c),v=`Q:${j} R:${S}`;v!==h&&f.add(v)}return{num1:i,num2:a,correctAnswer:h,options:Array.from(f).sort(()=>Math.random()-.5),signature:`${i}${e}${a}`}},ve=()=>{const s=Q(),e=te.en,o=V(n=>{var m,b;return((b=(m=n.alphabet.gameStats)==null?void 0:m.math)==null?void 0:b.streak)??0}),[d,w]=p.useState(1),[l,u]=p.useState("+"),[g,i]=p.useState(!1),[a,h]=p.useState(!1),[f,x]=p.useState(0),[c,j]=p.useState(0),[S,v]=p.useState([]),[R,y]=p.useState(null),M=G.useRef([]),k=p.useCallback(()=>{const{num1:n,num2:m,options:b,signature:z}=de(d,l,a,g,M.current);M.current=[z,...M.current].slice(0,10),x(n),j(m),v(b),y(null)},[d,l,g,a]);p.useEffect(()=>{k()},[k]),p.useEffect(()=>{if(o>0&&o%10===0){y({message:"Incredible! 10 in a row! 🌟",isCorrect:!0}),$("Incredible! 10 in a row! You are a superstar!"),T({particleCount:300,spread:100,origin:{y:.6},colors:["#6366f1","#4f46e5","#818cf8"]});const n=setTimeout(()=>{s(A("math")),y(null)},3e3);return()=>clearTimeout(n)}},[o,s]);const L=n=>{const m=O(f,c,l,g);if(n===m){const b=ie(o);y({message:b,isCorrect:!0}),$(b),s(se("math")),T({particleCount:150,spread:70,origin:{y:.6},colors:["#6366f1","#4f46e5","#818cf8"]}),setTimeout(k,1500)}else y({message:e.fb_keepTrying,isCorrect:!1}),$(e.fb_tryAgain),s(A("math")),setTimeout(()=>y(null),1500)},q=[{value:"+",label:e.math_addition},{value:"-",label:e.math_subtraction},{value:"*",label:e.math_multiplication},{value:"/",label:e.math_division}],F=[{value:1,label:"1-10"},{value:2,label:"Mixed"},{value:3,label:"2-Digits"},{value:4,label:"3-Digits"},{value:5,label:"Elite"}];return t.jsx(I,{"data-testid":"view-counting",children:t.jsxs(H,{children:[t.jsx(ne,{icon:oe,title:e.math_mathMagic,subtitle:e.math_countingDesc,streak:o}),t.jsx(ae,{title:e.com_readyForTest,subtitle:e.com_masterTryTrophy}),t.jsxs(K,{"data-testid":"activity-area",children:[t.jsxs(Y,{children:[Array.from({length:o%10||(o>0?10:0)}).map((n,m)=>t.jsxs(B,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",damping:10,delay:m*.05},children:[t.jsx(W,{children:"⭐"}),t.jsx(J,{children:m+1})]},m)),o>=10&&t.jsx(U,{children:"+"})]}),t.jsx(X,{mode:"wait",children:t.jsxs(ce,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:1.2,opacity:0},children:[t.jsx("span",{children:f}),t.jsx(le,{children:l}),t.jsx("span",{children:c}),t.jsx(me,{children:"="}),t.jsx(ue,{children:"?"})]},`${f}-${c}-${l}`)}),t.jsx(pe,{children:S.map((n,m)=>t.jsx(Z,{title:n.toString(),onClick:()=>L(n),variant:"secondary"},m))}),t.jsx(re,{feedback:R})]}),t.jsxs(ee,{"data-testid":"settings-area",children:[t.jsx(N,{title:e.com_operation,name:"operator",options:q,currentValue:l,onChange:n=>u(n)}),l==="/"&&t.jsxs(_,{children:[t.jsx(E,{type:"checkbox",checked:g,onChange:n=>i(n.target.checked)}),e.com_allowDecimals]}),l==="-"&&t.jsxs(_,{children:[t.jsx(E,{type:"checkbox",checked:a,onChange:n=>h(n.target.checked)}),e.com_allowNegative]}),t.jsx(N,{name:"digits",options:F,currentValue:d,onChange:w})]})]})})};export{ve as MathChallenge,ve as default};

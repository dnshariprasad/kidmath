import{i as m,p as $,l as P,m as z,r,n as e,A as S,K as G,s as K,t as B,v as T,w as V}from"./index-DO3JajC9.js";import{C as Q,S as R,D as w}from"./DifficultyPicker-_DkQgrpu.js";import{P as q,G as H,d as L,S as _,N as I,e as J,f as U,g as W,i as X}from"./globalStyles-6jG7PpSt.js";import{r as y}from"./index-hEdiZV1j.js";import{c as Y}from"./confetti.module-ONDKWxYZ.js";import{g as x,a as Z}from"./mathUtils-DtZIA5qY.js";import{F as ee}from"./FeedbackDisplay-iKE_7PuK.js";import{C as te}from"./calculator-CLz8xtrj.js";const ae=m($.div)`
  font-size: clamp(3rem, 12vw, 6rem);
  font-weight: 900;
  color: ${o=>o.theme.colors.primary};
  font-family: ${o=>o.theme.fonts.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 20px 0;

  @media (max-width: 768px) {
    font-size: clamp(2.5rem, 15vw, 4rem);
    gap: 15px;
  }
`,se=m.span`
  color: #ff7675;
`,ie=m.span`
  color: #6366f1;
`,re=m.span`
  color: #dfe6e9;
`,ne=m.div`
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
`,xe=()=>{const o=P(),s=z(a=>{var t,i;return((i=(t=a.alphabet.gameStats)==null?void 0:t.math)==null?void 0:i.streak)??0}),[p,b]=r.useState(1),[n,C]=r.useState("+"),[l,v]=r.useState(0),[c,A]=r.useState(0),[M,k]=r.useState([]),[E,d]=r.useState(null),[N,h]=r.useState(!1),u=r.useCallback(()=>{const a=Z(p);let t=x(a),i=x(a);n==="-"&&t<i&&([t,i]=[i,t]),v(t),A(i);const g=n==="+"?t+i:n==="-"?t-i:t*i,f=new Set([g]);for(;f.size<4;){const j=x(10)-5;j!==0&&f.add(g+j)}k(Array.from(f).sort(()=>Math.random()-.5)),d(null)},[p,n]);r.useEffect(()=>{u()},[u]),r.useEffect(()=>{s>0&&s%10===0&&h(!0)},[s]);const D=a=>{const t=n==="+"?l+c:n==="-"?l-c:l*c;a===t?(d({message:"Brilliant! 🌟",isCorrect:!0}),y("Brilliant"),o(T("math")),Y({particleCount:150,spread:70,origin:{y:.6},colors:["#6366F1","#4F46E5","#FF7675"]}),setTimeout(u,1500)):(d({message:"Keep trying! 💪",isCorrect:!1}),y("Keep trying"),o(V("math")),setTimeout(()=>d(null),1500))},F=[{value:"+",label:"Addition"},{value:"-",label:"Subtraction"},{value:"*",label:"Multiplication"}],O=[{value:1,label:"1-9"},{value:2,label:"10-99"},{value:3,label:"100-999"}];return e.jsxs(q,{"data-testid":"view-counting",children:[e.jsxs(H,{children:[e.jsx(Q,{icon:te,title:"Math Magic",subtitle:"Master numbers with fun addition and subtraction!",streak:s}),e.jsx(R,{title:"Certificate Progress",subtitle:s<10?`${10-s%10} more for a Certificate! 🏆`:"Milestone reached! 🎉"}),e.jsxs(L,{"data-testid":"activity-area",children:[e.jsxs(_,{children:[Array.from({length:s%10||(s>0?10:0)}).map((a,t)=>e.jsxs(I,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",damping:10,delay:t*.05},children:[e.jsx(J,{children:"⭐"}),e.jsx(U,{children:t+1})]},t)),s>=10&&e.jsx(W,{children:"+"})]}),e.jsx(S,{mode:"wait",children:e.jsxs(ae,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:1.2,opacity:0},children:[e.jsx("span",{children:l}),e.jsx(se,{children:n}),e.jsx("span",{children:c}),e.jsx(ie,{children:"="}),e.jsx(re,{children:"?"})]},`${l}-${c}-${n}`)}),e.jsx(ne,{children:M.map((a,t)=>e.jsx(G,{title:a.toString(),onClick:()=>D(a),variant:"secondary"},t))}),e.jsx(ee,{feedback:E})]}),e.jsxs(X,{"data-testid":"settings-area",children:[e.jsx(w,{title:"Operation",name:"operator",options:F,currentValue:n,onChange:a=>C(a)}),e.jsx(w,{name:"digits",options:O,currentValue:p,onChange:b})]})]}),e.jsx(S,{children:N&&e.jsx(K,{onClose:()=>{h(!1),o(B())},challengeName:"Math Magic",score:s,level:`${p} Digits`})})]})};export{xe as MathChallenge,xe as default};

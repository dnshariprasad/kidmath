import{i as m,p as $,l as z,m as P,x as i,n as e,P as B,G,y as T,W as K,Y as R,Z as V,_ as Q,$ as _,A as y,v as q,z as H,a0 as L,a1 as W,a2 as Y,a3 as Z}from"./index-ry-C20ZN.js";import{C as I,S as J}from"./ChallengeHeader-D-7H121B.js";import{r as S}from"./index-LAtfndeI.js";import{c as U}from"./confetti.module-ONDKWxYZ.js";import{g as x,a as X}from"./mathUtils-DtZIA5qY.js";import{D as w}from"./DifficultyPicker-Csz6TwoM.js";import{F as ee}from"./FeedbackDisplay-Dlhati2E.js";import{C as te}from"./calculator-DL0bInUq.js";const ae=m($.div)`
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
`,ne=m.span`
  color: #dfe6e9;
`,re=m.div`
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
`,xe=()=>{const o=z(),r=P(a=>{var t,s;return((s=(t=a.alphabet.gameStats)==null?void 0:t.math)==null?void 0:s.streak)??0}),[p,b]=i.useState(1),[n,C]=i.useState("+"),[l,v]=i.useState(0),[c,A]=i.useState(0),[M,k]=i.useState([]),[E,d]=i.useState(null),[O,f]=i.useState(!1),u=i.useCallback(()=>{const a=X(p);let t=x(a),s=x(a);n==="-"&&t<s&&([t,s]=[s,t]),v(t),A(s);const g=n==="+"?t+s:n==="-"?t-s:t*s,h=new Set([g]);for(;h.size<4;){const j=x(10)-5;j!==0&&h.add(g+j)}k(Array.from(h).sort(()=>Math.random()-.5)),d(null)},[p,n]);i.useEffect(()=>{u()},[u]),i.useEffect(()=>{r>0&&r%10===0&&f(!0)},[r]);const D=a=>{const t=n==="+"?l+c:n==="-"?l-c:l*c;a===t?(d({message:"Brilliant! 🌟",isCorrect:!0}),S("Brilliant"),o(Y("math")),U({particleCount:150,spread:70,origin:{y:.6},colors:["#6366F1","#4F46E5","#FF7675"]}),setTimeout(u,1500)):(d({message:"Keep trying! 💪",isCorrect:!1}),S("Keep trying"),o(Z("math")),setTimeout(()=>d(null),1500))},F=[{value:"+",label:"Addition"},{value:"-",label:"Subtraction"},{value:"*",label:"Multiplication"}],N=[{value:1,label:"1-9"},{value:2,label:"10-99"},{value:3,label:"100-999"}];return e.jsxs(B,{"data-testid":"view-counting",children:[e.jsxs(G,{children:[e.jsx(I,{icon:te,title:"Math Magic",subtitle:"Master numbers with fun addition and subtraction!",streak:r}),e.jsx(J,{title:"Ready for the Big Test? 🏆",subtitle:"Once you master these sums, try the 'Math Master' test to win a trophy!"}),e.jsxs(T,{"data-testid":"activity-area",children:[e.jsxs(K,{children:[Array.from({length:r%10||(r>0?10:0)}).map((a,t)=>e.jsxs(R,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",damping:10,delay:t*.05},children:[e.jsx(V,{children:"⭐"}),e.jsx(Q,{children:t+1})]},t)),r>=10&&e.jsx(_,{children:"+"})]}),e.jsx(y,{mode:"wait",children:e.jsxs(ae,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:1.2,opacity:0},children:[e.jsx("span",{children:l}),e.jsx(se,{children:n}),e.jsx("span",{children:c}),e.jsx(ie,{children:"="}),e.jsx(ne,{children:"?"})]},`${l}-${c}-${n}`)}),e.jsx(re,{children:M.map((a,t)=>e.jsx(q,{title:a.toString(),onClick:()=>D(a),variant:"secondary"},t))}),e.jsx(ee,{feedback:E})]}),e.jsxs(H,{"data-testid":"settings-area",children:[e.jsx(w,{title:"Operation",name:"operator",options:F,currentValue:n,onChange:a=>C(a)}),e.jsx(w,{name:"digits",options:N,currentValue:p,onChange:b})]})]}),e.jsx(y,{children:O&&e.jsx(L,{onClose:()=>{f(!1),o(W())},challengeName:"Math Magic",score:r,level:`${p} Digits`})})]})};export{xe as MathChallenge,xe as default};

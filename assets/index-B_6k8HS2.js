import{i as m,p as $,l as z,m as P,x as i,n as e,P as G,G as R,y as T,R as K,W as V,Y as B,Z as Q,_,A as y,v as q,z as H,$ as L,a0 as W,a1 as Y,a2 as Z}from"./index-CEbG5vh1.js";import{C as I,S as J}from"./ChallengeHeader-eQ95iz1G.js";import{g as U,r as S}from"./index-BB5ta6JT.js";import{c as X}from"./confetti.module-ONDKWxYZ.js";import{g as x,a as ee}from"./mathUtils-DtZIA5qY.js";import{D as w}from"./DifficultyPicker-DiFjb-_B.js";import{F as te}from"./FeedbackDisplay-DScln1KN.js";import{C as ae}from"./calculator-I2lz5KMc.js";const se=m($.div)`
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
`,ie=m.span`
  color: #ff7675;
`,ne=m.span`
  color: #6366f1;
`,re=m.span`
  color: #dfe6e9;
`,oe=m.div`
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
`,fe=()=>{const o=z(),n=P(s=>{var t,a;return((a=(t=s.alphabet.gameStats)==null?void 0:t.math)==null?void 0:a.streak)??0}),[p,b]=i.useState(1),[r,C]=i.useState("+"),[l,v]=i.useState(0),[c,A]=i.useState(0),[M,k]=i.useState([]),[E,d]=i.useState(null),[O,f]=i.useState(!1),u=i.useCallback(()=>{const s=ee(p);let t=x(s),a=x(s);r==="-"&&t<a&&([t,a]=[a,t]),v(t),A(a);const g=r==="+"?t+a:r==="-"?t-a:t*a,h=new Set([g]);for(;h.size<4;){const j=x(10)-5;j!==0&&h.add(g+j)}k(Array.from(h).sort(()=>Math.random()-.5)),d(null)},[p,r]);i.useEffect(()=>{u()},[u]),i.useEffect(()=>{n>0&&n%10===0&&f(!0)},[n]);const D=s=>{const t=r==="+"?l+c:r==="-"?l-c:l*c;if(s===t){const a=U(n);d({message:a,isCorrect:!0}),S(a),o(Y("math")),X({particleCount:150,spread:70,origin:{y:.6},colors:["#6366F1","#4F46E5","#FF7675"]}),setTimeout(u,1500)}else d({message:"Keep trying! 💪",isCorrect:!1}),S("Keep trying"),o(Z("math")),setTimeout(()=>d(null),1500)},F=[{value:"+",label:"Addition"},{value:"-",label:"Subtraction"},{value:"*",label:"Multiplication"}],N=[{value:1,label:"1-9"},{value:2,label:"10-99"},{value:3,label:"100-999"}];return e.jsxs(G,{"data-testid":"view-counting",children:[e.jsxs(R,{children:[e.jsx(I,{icon:ae,title:"Math Magic",subtitle:"Master numbers with fun addition and subtraction!",streak:n}),e.jsx(J,{title:"Ready for the Big Test? 🏆",subtitle:"Once you master these sums, try the 'Math Master' test to win a trophy!"}),e.jsxs(T,{"data-testid":"activity-area",children:[e.jsxs(K,{children:[Array.from({length:n%10||(n>0?10:0)}).map((s,t)=>e.jsxs(V,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",damping:10,delay:t*.05},children:[e.jsx(B,{children:"⭐"}),e.jsx(Q,{children:t+1})]},t)),n>=10&&e.jsx(_,{children:"+"})]}),e.jsx(y,{mode:"wait",children:e.jsxs(se,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:1.2,opacity:0},children:[e.jsx("span",{children:l}),e.jsx(ie,{children:r}),e.jsx("span",{children:c}),e.jsx(ne,{children:"="}),e.jsx(re,{children:"?"})]},`${l}-${c}-${r}`)}),e.jsx(oe,{children:M.map((s,t)=>e.jsx(q,{title:s.toString(),onClick:()=>D(s),variant:"secondary"},t))}),e.jsx(te,{feedback:E})]}),e.jsxs(H,{"data-testid":"settings-area",children:[e.jsx(w,{title:"Operation",name:"operator",options:F,currentValue:r,onChange:s=>C(s)}),e.jsx(w,{name:"digits",options:N,currentValue:p,onChange:b})]})]}),e.jsx(y,{children:O&&e.jsx(L,{onClose:()=>{f(!1),o(W())},challengeName:"Math Magic",score:n,level:`${p} Digits`})})]})};export{fe as MathChallenge,fe as default};

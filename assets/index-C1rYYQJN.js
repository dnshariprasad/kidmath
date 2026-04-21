import{i as p,p as N,l as G,m as K,r as s,n as e,A as b,K as P,s as B,t as T,v as V,w as L}from"./index-NzOoTDV7.js";import{C as Q,S as R,D as C,r as f}from"./DifficultyPicker-Y23e4tn9.js";import{P as q,G as H,d as I,S as J}from"./globalStyles-CxNgPgHO.js";import{c as U}from"./confetti.module-ONDKWxYZ.js";import{g as x,a as W}from"./mathUtils-DtZIA5qY.js";import{F as X}from"./FeedbackDisplay-BtCnoe-n.js";import{C as Y}from"./calculator-CwqiLLzy.js";import"./wand-sparkles-CaSBif2c.js";const Z=p(N.div)`
  font-size: clamp(3rem, 12vw, 6rem);
  font-weight: 900;
  color: ${r=>r.theme.colors.primary};
  font-family: ${r=>r.theme.fonts.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 20px 0;

  @media (max-width: 768px) {
    font-size: clamp(2.5rem, 15vw, 4rem);
    gap: 15px;
  }
`,_=p.span`
  color: #ff7675;
`,ee=p.span`
  color: #6366f1;
`,te=p.span`
  color: #dfe6e9;
`,ae=p.div`
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
`,me=()=>{const r=G(),o=K(a=>a.alphabet.gameStats.math.streak),[m,g]=s.useState(1),[i,w]=s.useState("+"),[l,M]=s.useState(0),[c,v]=s.useState(0),[A,k]=s.useState([]),[D,d]=s.useState(null),[F,S]=s.useState(!1),u=s.useCallback(()=>{const a=W(m);let t=x(a),n=x(a);i==="-"&&t<n&&([t,n]=[n,t]),M(t),v(n);const j=i==="+"?t+n:i==="-"?t-n:t*n,h=new Set([j]);for(;h.size<4;){const y=x(10)-5;y!==0&&h.add(j+y)}k(Array.from(h).sort(()=>Math.random()-.5)),d(null)},[m,i]),O=()=>{const a=Math.floor(Math.random()*3)+1,t=["+","-","*"],n=t[Math.floor(Math.random()*t.length)];g(a),w(n),f("Math Surprise!")};s.useEffect(()=>{u()},[u]),s.useEffect(()=>{o>0&&o%10===0&&S(!0)},[o]);const E=a=>{const t=i==="+"?l+c:i==="-"?l-c:l*c;a===t?(d({message:"Brilliant! 🌟",isCorrect:!0}),f("Brilliant"),r(V("math")),U({particleCount:150,spread:70,origin:{y:.6},colors:["#6366F1","#4F46E5","#FF7675"]}),setTimeout(u,1500)):(d({message:"Keep trying! 💪",isCorrect:!1}),f("Keep trying"),r(L("math")),setTimeout(()=>d(null),1500))},$=[{value:"+",label:"Addition"},{value:"-",label:"Subtraction"},{value:"*",label:"Multiplication"}],z=[{value:1,label:"1-9"},{value:2,label:"10-99"},{value:3,label:"100-999"}];return e.jsxs(q,{"data-testid":"page-math-challenge",children:[e.jsxs(H,{children:[e.jsx(Q,{icon:Y,title:"Math Magic",subtitle:"Master numbers with fun addition and subtraction!",streak:o}),e.jsx(R,{title:"Math surprise?",onShuffle:O}),e.jsxs(I,{"data-testid":"activity-area",children:[e.jsx(b,{mode:"wait",children:e.jsxs(Z,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:1.2,opacity:0},children:[e.jsx("span",{children:l}),e.jsx(_,{children:i}),e.jsx("span",{children:c}),e.jsx(ee,{children:"="}),e.jsx(te,{children:"?"})]},`${l}-${c}-${i}`)}),e.jsx(ae,{children:A.map((a,t)=>e.jsx(P,{title:a.toString(),onClick:()=>E(a),variant:"secondary"},t))}),e.jsx(X,{feedback:D})]}),e.jsxs(J,{"data-testid":"settings-area",children:[e.jsx(C,{title:"Operation",name:"operator",options:$,currentValue:i,onChange:a=>w(a)}),e.jsx(C,{name:"digits",options:z,currentValue:m,onChange:g})]})]}),e.jsx(b,{children:F&&e.jsx(B,{onClose:()=>{S(!1),r(T())},challengeName:"Math Magic",score:o,level:`${m} Digits`})})]})};export{me as MathChallenge,me as default};

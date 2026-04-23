import{i as p,p as M,l as O,m as z,x as n,n as e,P,G,y as R,R as K,W as V,Y as L,_ as Q,$ as q,A as S,v as B,z as H,a0 as I,a1 as W,a6 as Y,a2 as J,a3 as U}from"./index-DFKAu_cK.js";import{S as X}from"./SurpriseCard-CJ-2Fm2R.js";import{C as Z,g as ee,r as w}from"./ChallengeHeader-BNUm6G2b.js";import{c as te}from"./confetti.module-ONDKWxYZ.js";import{g as f,a as ae}from"./mathUtils-DtZIA5qY.js";import{D as b}from"./DifficultyPicker-CvJ-uU1P.js";import{F as se}from"./FeedbackDisplay-BATAEUs6.js";import{C as ie}from"./calculator-px9WWTPR.js";const ne=p(M.div)`
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
`,re=p.span`
  color: #ff7675;
`,oe=p.span`
  color: #6366f1;
`,le=p.span`
  color: #dfe6e9;
`,ce=p.div`
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
`,je=()=>{const l=O(),r=z(s=>{var t,a;return((a=(t=s.alphabet.gameStats)==null?void 0:t.math)==null?void 0:a.streak)??0}),[d,C]=n.useState(1),[o,v]=n.useState("+"),[c,A]=n.useState(0),[m,_]=n.useState(0),[k,E]=n.useState([]),[N,u]=n.useState(null),[F,g]=n.useState(!1),i=Y.en,h=n.useCallback(()=>{const s=ae(d);let t=f(s),a=f(s);o==="-"&&t<a&&([t,a]=[a,t]),A(t),_(a);const j=o==="+"?t+a:o==="-"?t-a:t*a,x=new Set([j]);for(;x.size<4;){const y=f(10)-5;y!==0&&x.add(j+y)}E(Array.from(x).sort(()=>Math.random()-.5)),u(null)},[d,o]);n.useEffect(()=>{h()},[h]),n.useEffect(()=>{r>0&&r%10===0&&g(!0)},[r]);const T=s=>{const t=o==="+"?c+m:o==="-"?c-m:c*m;if(s===t){const a=ee(r);u({message:a,isCorrect:!0}),w(a),l(J("math")),te({particleCount:150,spread:70,origin:{y:.6},colors:["#6366F1","#4F46E5","#FF7675"]}),setTimeout(h,1500)}else u({message:"Keep trying! 💪",isCorrect:!1}),w("Keep trying"),l(U("math")),setTimeout(()=>u(null),1500)},$=[{value:"+",label:i.math_addition},{value:"-",label:i.math_subtraction},{value:"*",label:i.math_multiplication}],D=[{value:1,label:"1-9"},{value:2,label:"10-99"},{value:3,label:"100-999"}];return e.jsxs(P,{"data-testid":"view-counting",children:[e.jsxs(G,{children:[e.jsx(Z,{icon:ie,title:i.math_mathMagic,subtitle:i.math_countingDesc,streak:r}),e.jsx(X,{title:i.com_readyForTest,subtitle:i.com_masterTryTrophy}),e.jsxs(R,{"data-testid":"activity-area",children:[e.jsxs(K,{children:[Array.from({length:r%10||(r>0?10:0)}).map((s,t)=>e.jsxs(V,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",damping:10,delay:t*.05},children:[e.jsx(L,{children:"⭐"}),e.jsx(Q,{children:t+1})]},t)),r>=10&&e.jsx(q,{children:"+"})]}),e.jsx(S,{mode:"wait",children:e.jsxs(ne,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:1.2,opacity:0},children:[e.jsx("span",{children:c}),e.jsx(re,{children:o}),e.jsx("span",{children:m}),e.jsx(oe,{children:"="}),e.jsx(le,{children:"?"})]},`${c}-${m}-${o}`)}),e.jsx(ce,{children:k.map((s,t)=>e.jsx(B,{title:s.toString(),onClick:()=>T(s),variant:"secondary"},t))}),e.jsx(se,{feedback:N})]}),e.jsxs(H,{"data-testid":"settings-area",children:[e.jsx(b,{title:i.com_operation,name:"operator",options:$,currentValue:o,onChange:s=>v(s)}),e.jsx(b,{name:"digits",options:D,currentValue:d,onChange:C})]})]}),e.jsx(S,{children:F&&e.jsx(I,{onClose:()=>{g(!1),l(W())},challengeName:i.math_mathMagic,score:r,level:`${d} ${i.com_level}`})})]})};export{je as MathChallenge,je as default};

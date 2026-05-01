import{j as o,q as f,n as u,y as n,k as y,o as r,aF as j,P as w,T as b,ac as a,w as $}from"./index-CGfIUdAK.js";import{g as v}from"./testService-CTrRxNIP.js";import{C as S}from"./calendar-DTSSIGW9.js";import{T,B as z}from"./timer-BNkGhE6w.js";import{A as k}from"./award-BgCW9t3J.js";const H=o.div`
  width: 100%;
  max-width: 100%;
  margin: 0;
  padding: 40px;
  background: ${({theme:e})=>e.colors.background};
  min-height: calc(100vh - 80px);

  @media (max-width: 768px) {
    padding: 20px;
  }
`,B=o.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 40px;
  text-align: left;
`,L=o.h1`
  font-size: clamp(2.5rem, 6vw, 3.5rem);
  font-weight: 900;
  color: ${({theme:e})=>e.colors.primary};
  margin: 0;
`,x=o.p`
  font-size: 1.3rem;
  color: ${({theme:e})=>e.colors.textSecondary};
  font-weight: 700;
  opacity: 0.8;
`,C=o.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`,D=o(f.div)`
  background: ${({theme:e})=>e.colors.surface};
  padding: 20px 32px;
  border-radius: 24px;
  box-shadow: ${({theme:e})=>{var s;return((s=e.shadows)==null?void 0:s.sm)||"0 4px 12px rgba(0, 0, 0, 0.05)"}};
  border: 2px solid ${({theme:e})=>e.colors.border};
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1.5fr;
  align-items: center;
  gap: 20px;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.005);
    box-shadow: ${({theme:e})=>{var s;return((s=e.shadows)==null?void 0:s.md)||"0 8px 24px rgba(0, 0, 0, 0.08)"}};
    border-color: ${({theme:e})=>e.colors.primary}40;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
    padding: 20px;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`,E=o.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,P=o.h3`
  font-size: 1.2rem;
  font-weight: 900;
  color: ${({theme:e})=>e.colors.primary};
  margin: 0;
`,A=o.span`
  font-size: 0.9rem;
  color: ${({theme:e})=>e.colors.textSecondary};
  font-weight: 700;
`,c=o.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,l=o.span`
  font-size: 0.8rem;
  color: ${({theme:e})=>e.colors.textSecondary};
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,d=o.span`
  font-size: 1.1rem;
  font-weight: 900;
  color: ${e=>e.$color||(({theme:s})=>s.colors.textPrimary)};
  display: flex;
  align-items: center;
  gap: 6px;
`,R=o.div`
  padding: 10px 20px;
  border-radius: 16px;
  background: ${e=>e.$score>=8?e.theme.colors.success+"15":e.theme.colors.warning+"15"};
  color: ${e=>e.$score>=8?e.theme.colors.success:e.theme.colors.warning};
  font-weight: 900;
  font-size: 1.2rem;
  text-align: center;
  border: 2px solid ${e=>e.$score>=8?e.theme.colors.success+"25":e.theme.colors.warning+"25"};
  min-width: 120px;

  @media (max-width: 768px) {
    width: 100%;
  }
`,I=o.div`
  text-align: center;
  padding: 100px 40px;
  background: ${({theme:e})=>e.colors.surfaceVariant};
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  border: 2px dashed ${({theme:e})=>e.colors.border};
  width: 100%;
`,K=()=>{const e=u(t=>t.alphabet.user),[s,p]=n.useState([]),[m,h]=n.useState(!0),g=y();return n.useEffect(()=>{(async()=>{if(e)try{const i=await v(e.uid);p(i)}catch(i){console.error("Error fetching history:",i)}finally{h(!1)}})()},[e]),m?r.jsx(j,{}):r.jsx(w,{children:r.jsxs(H,{children:[r.jsxs(B,{children:[r.jsx(L,{children:"Achievement Board"}),r.jsx(x,{children:"Tracking your journey to becoming a superstar! 🌟"})]}),s.length===0?r.jsxs(I,{children:[r.jsx(b,{size:80,color:a.slate,opacity:.3}),r.jsx(x,{children:"Your achievement board is empty. Ready for your first challenge?"}),r.jsx($,{title:"Start a Test",onClick:()=>g("/master_test"),variant:"primary",size:"lg"})]}):r.jsx(C,{children:s.map((t,i)=>r.jsxs(D,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:i*.05},children:[r.jsxs(E,{children:[r.jsx(P,{children:t.testTitle}),r.jsxs(A,{children:[r.jsx(S,{size:14,style:{marginRight:4,verticalAlign:"middle"}}),t.timestamp.toDate().toLocaleDateString(void 0,{year:"numeric",month:"long",day:"numeric"})]})]}),r.jsxs(c,{children:[r.jsx(l,{children:"Duration"}),r.jsxs(d,{children:[r.jsx(T,{size:18}),Math.floor(t.timeTaken/60),":",(t.timeTaken%60).toString().padStart(2,"0")]})]}),r.jsxs(c,{children:[r.jsx(l,{children:"Difficulty"}),r.jsxs(d,{$color:a.primary,children:[r.jsx(z,{size:18}),"Level ",t.difficulty]})]}),r.jsxs(c,{children:[r.jsx(l,{children:"Performance"}),r.jsxs(d,{$color:t.score>=8?a.success:a.warning,children:[r.jsx(k,{size:18}),t.score>=8?"Mastered":"Practicing"]})]}),r.jsxs(R,{$score:t.score,children:[t.score," / ",t.totalQuestions]})]},t.id))})]})})};export{K as default};

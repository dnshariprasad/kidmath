import{j as s,q as h,n as f,y as n,k as u,o as r,aE as y,P as j,T as w,ac as i,w as b}from"./index-DlISxuOU.js";import{g as $}from"./testService-GAkx5tqQ.js";import{C as v}from"./ChallengeHeader-Cc1AXPky.js";import{M as S,A as T}from"./medal-CVBp5yhH.js";import{C as z}from"./calendar-iy0btwGe.js";import{T as k,B as H}from"./timer-COCoGG2P.js";const C=s.div`
  width: 100%;
  max-width: 100%;
  margin: 0;
  padding: 10px 40px 40px 40px;
  background: ${({theme:e})=>e.colors.background};
  min-height: calc(100vh - 80px);

  @media (max-width: 768px) {
    padding: 10px 20px 20px 20px;
  }
`,E=s.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  margin-top: 32px;
`,B=s(h.div)`
  background: ${({theme:e})=>e.colors.surface};
  padding: 20px 32px;
  border-radius: 24px;
  box-shadow: ${({theme:e})=>{var o;return((o=e.shadows)==null?void 0:o.sm)||"0 4px 12px rgba(0, 0, 0, 0.05)"}};
  border: 2px solid ${({theme:e})=>e.colors.border};
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1.5fr;
  align-items: center;
  gap: 20px;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.005);
    box-shadow: ${({theme:e})=>{var o;return((o=e.shadows)==null?void 0:o.md)||"0 8px 24px rgba(0, 0, 0, 0.08)"}};
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
`,L=s.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,D=s.h3`
  font-size: 1.2rem;
  font-weight: 900;
  color: ${({theme:e})=>e.colors.primary};
  margin: 0;
`,M=s.span`
  font-size: 0.9rem;
  color: ${({theme:e})=>e.colors.textSecondary};
  font-weight: 700;
`,c=s.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,l=s.span`
  font-size: 0.8rem;
  color: ${({theme:e})=>e.colors.textSecondary};
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,d=s.span`
  font-size: 1.1rem;
  font-weight: 900;
  color: ${e=>e.$color||(({theme:o})=>o.colors.textPrimary)};
  display: flex;
  align-items: center;
  gap: 6px;
`,P=s.div`
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
`,A=s.div`
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
`,R=s.p`
  font-size: 1.2rem;
  color: ${({theme:e})=>e.colors.textSecondary};
  font-weight: 700;
  opacity: 0.8;
  max-width: 400px;
  margin: 0;
`,U=()=>{const e=f(t=>t.alphabet.user),[o,x]=n.useState([]),[p,m]=n.useState(!0),g=u();return n.useEffect(()=>{(async()=>{if(e)try{const a=await $(e.uid);x(a)}catch(a){console.error("Error fetching history:",a)}finally{m(!1)}})()},[e]),p?r.jsx(y,{}):r.jsx(j,{children:r.jsxs(C,{children:[r.jsx(v,{icon:S,title:"Achievement Board",subtitle:"Tracking your journey to becoming a superstar! 🌟",streak:0}),o.length===0?r.jsxs(A,{children:[r.jsx(w,{size:80,color:i.slate,opacity:.3}),r.jsx(R,{children:"Your achievement board is empty. Ready for your first challenge?"}),r.jsx(b,{title:"Start a Test",onClick:()=>g("/master_test"),variant:"primary",size:"lg"})]}):r.jsx(E,{children:o.map((t,a)=>r.jsxs(B,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:a*.05},children:[r.jsxs(L,{children:[r.jsx(D,{children:t.testTitle}),r.jsxs(M,{children:[r.jsx(z,{size:14,style:{marginRight:4,verticalAlign:"middle"}}),t.timestamp.toDate().toLocaleDateString(void 0,{year:"numeric",month:"long",day:"numeric"})]})]}),r.jsxs(c,{children:[r.jsx(l,{children:"Duration"}),r.jsxs(d,{children:[r.jsx(k,{size:18}),Math.floor(t.timeTaken/60),":",(t.timeTaken%60).toString().padStart(2,"0")]})]}),r.jsxs(c,{children:[r.jsx(l,{children:"Difficulty"}),r.jsxs(d,{$color:i.primary,children:[r.jsx(H,{size:18}),"Level ",t.difficulty]})]}),r.jsxs(c,{children:[r.jsx(l,{children:"Performance"}),r.jsxs(d,{$color:t.score>=8?i.success:i.warning,children:[r.jsx(T,{size:18}),t.score>=8?"Mastered":"Practicing"]})]}),r.jsxs(P,{$score:t.score,children:[t.score," / ",t.totalQuestions]})]},t.id))})]})})};export{U as default};

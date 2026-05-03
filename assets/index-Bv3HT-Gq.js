import{k as t,s as S,o as A,r as l,l as L,p as r,aB as M,P as B,K as s,aa as c,T as d,y as E}from"./index-C9GQ7pMr.js";import{a as I,g as W}from"./testService-cyRd6wDR.js";import{C as N}from"./ChallengeHeader-BrHaadvX.js";import{M as u,a as R,C as V,S as K,T as U,A as Y}from"./trending-up-DGgvDUFu.js";import{C as G}from"./calendar-rdWK65um.js";import{S as Q}from"./star-DbDp_G0e.js";import{T as O}from"./timer-DQyHgShF.js";const _=t.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 10px 40px 40px 40px;
  background: ${({theme:e})=>e.colors.background};
  min-height: calc(100vh - 80px);

  @media (max-width: 768px) {
    padding: 10px 20px 20px 20px;
  }
`,q=t.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin-top: 32px;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`,$=t.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 24px;
  padding: 16px 24px;
  background: ${e=>e.theme.colors.surfaceVariant}40;
  backdrop-filter: blur(10px);
  border-radius: 24px;
  color: ${e=>e.theme.colors.textPrimary};
  border: 1px solid ${e=>e.theme.colors.border};
  box-shadow: ${e=>{var o;return((o=e.theme.shadows)==null?void 0:o.sm)||"0 4px 12px rgba(0, 0, 0, 0.05)"}};
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 6px;
    background: ${e=>e.theme.colors.primary};
  }
`,y=t.div`
  flex: 1;
`,j=t.div`
  width: 40px;
  height: 40px;
  background: ${e=>e.theme.colors.primary};
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0 4px 10px ${e=>e.theme.colors.primary}40;
`,J=t.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`,X=t(S.create("div"))`
  background: ${({theme:e})=>e.colors.surface};
  padding: 16px 24px;
  min-height: 90px;
  border-radius: 24px;
  box-shadow: ${({theme:e})=>{var o;return((o=e.shadows)==null?void 0:o.sm)||"0 4px 12px rgba(0, 0, 0, 0.05)"}};
  border: 1px solid ${({theme:e})=>e.colors.border};
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  align-items: center;
  gap: 20px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: default;

  &:hover {
    transform: translateY(-4px);
    border-color: ${({theme:e})=>e.colors.primary}40;
    box-shadow: ${({theme:e})=>{var o;return((o=e.shadows)==null?void 0:o.md)||"0 8px 24px rgba(0, 0, 0, 0.08)"}};
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
    padding: 16px;
    & > div:nth-child(3) {
      grid-column: span 2;
    }
  }
`,Z=t.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,ee=t.h3`
  font-size: 1.1rem;
  font-weight: 900;
  color: ${({theme:e})=>e.colors.textPrimary};
  margin: 0;
`,re=t.span`
  font-size: 0.8rem;
  color: ${({theme:e})=>e.colors.textSecondary};
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 6px;
  opacity: 0.8;
`,x=t.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: ${e=>e.$align||"flex-start"};
`,h=t.span`
  font-size: 0.75rem;
  color: ${({theme:e})=>e.colors.textSecondary};
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  opacity: 0.6;
`,te=t.span`
  font-size: 1rem;
  font-weight: 900;
  color: ${e=>e.$color||e.theme.colors.textPrimary};
  display: flex;
  align-items: center;
  gap: 8px;
`,ne=t.div`
  display: flex;
  justify-content: flex-end;
`,ie=t.div`
  padding: 10px 16px;
  border-radius: 16px;
  background: ${e=>e.$scorePercentage>=90?e.theme.colors.success+"15":e.$scorePercentage>=60?e.theme.colors.primary+"10":e.theme.colors.warning+"15"};
  color: ${e=>e.$scorePercentage>=90?e.theme.colors.success:e.$scorePercentage>=60?e.theme.colors.primary:e.theme.colors.warning};
  font-weight: 900;
  font-size: 1.1rem;
  text-align: center;
  border: 1px solid
    ${e=>e.$scorePercentage>=90?e.theme.colors.success+"30":e.$scorePercentage>=60?e.theme.colors.primary+"30":e.theme.colors.warning+"30"};
  box-shadow: 0 4px 12px
    ${e=>e.$scorePercentage>=90?e.theme.colors.success+"10":"transparent"};
`,b=t.div`
  text-align: center;
  padding: 60px 40px;
  background: ${({theme:e})=>e.colors.surfaceVariant}20;
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  border: 2px dashed ${({theme:e})=>e.colors.border};
  width: 100%;
`,k=t.div`
  background: ${e=>e.$bg||e.theme.colors.primary+"10"};
  padding: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`,w=t.p`
  font-size: 1.1rem;
  color: ${({theme:e})=>e.colors.textSecondary};
  font-weight: 700;
  opacity: 0.8;
  max-width: 400px;
  margin: 0;
`,oe=t.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,ae=t(S.create("div"))`
  display: grid;
  grid-template-columns: 50px 50px 1fr 100px 100px;
  align-items: center;
  padding: 16px 20px;
  min-height: 90px;
  background: ${e=>e.theme.colors.surface};
  border-radius: 24px;
  border: 1px solid
    ${e=>e.$rank===1?"#FFD70060":e.$rank===2?"#C0C0C060":e.$rank===3?"#CD7F3260":e.theme.colors.border};
  box-shadow: ${e=>e.$rank===1?"0 8px 20px #FFD70015":e.$rank===2?"0 8px 20px #C0C0C015":e.$rank===3?"0 8px 20px #CD7F3215":"none"};
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.02);
    border-color: ${e=>e.theme.colors.primary}40;
  }

  @media (max-width: 600px) {
    grid-template-columns: 40px 0px 1fr 80px 80px;
    padding: 12px;
    & > div:nth-child(2) {
      display: none;
    }
  }
`,se=t.div`
  font-weight: 900;
  font-size: 1.25rem;
  color: ${e=>e.$rank===1?"#FFD700":e.$rank===2?"#C0C0C0":e.$rank===3?"#CD7F32":e.theme.colors.textSecondary};
  text-shadow: ${e=>e.$rank<=3?"0 2px 4px rgba(0,0,0,0.1)":"none"};
  display: flex;
  align-items: center;
`,ce=t.div`
  flex: 1;
  margin-left: 14px;
`,le=t.div`
  width: 38px;
  height: 38px;
  border-radius: 12px;
  background: ${e=>e.$rank===1?"#FFD70020":e.$rank===2?"#C0C0C020":e.$rank===3?"#CD7F3220":e.theme.colors.primary+"15"};
  color: ${e=>e.$rank===1?"#B8860B":e.$rank===2?"#708090":e.$rank===3?"#8B4513":e.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-size: 1rem;
  border: 2px solid
    ${e=>e.$rank===1?"#FFD70040":e.$rank===2?"#C0C0C040":e.$rank===3?"#CD7F3240":"transparent"};
`,m=t.span`
  margin-right: 4px;
  display: flex;
  align-items: center;
`,de=t.div`
  display: flex;
  align-items: center;
  color: ${e=>e.$rank&&e.$rank<=3?e.theme.colors.primary:e.theme.colors.textPrimary};
  font-weight: 900;
`,xe=t.div`
  display: flex;
  align-items: center;
  font-weight: 800;
  opacity: 0.8;
`,p=t.span`
  margin-right: 6px;
  display: flex;
  align-items: center;
`,ye=()=>{const e=A(n=>n.alphabet.user),[o,C]=l.useState([]),[g,v]=l.useState([]),[T,f]=l.useState(!0),z=L();l.useEffect(()=>{(async()=>{f(!0),e&&I(e.uid).then(C).catch(a=>console.error("History fetch error:",a)),W(void 0,10).then(v).catch(a=>console.error("Leaderboard fetch error:",a)).finally(()=>f(!1))})()},[e]);const F=n=>n===1?r.jsx(m,{children:r.jsx(d,{size:20,color:"#FFD700"})}):n===2?r.jsx(m,{children:r.jsx(Y,{size:18,color:"#C0C0C0"})}):n===3?r.jsx(m,{children:r.jsx(u,{size:18,color:"#CD7F32"})}):null;return T?r.jsx(M,{}):r.jsx(B,{children:r.jsxs(_,{children:[r.jsx(N,{icon:u,title:"Achievement Board",subtitle:"Tracking your journey and the world's top stars! 🌟",streak:0}),r.jsxs(q,{children:[r.jsxs("div",{children:[r.jsxs($,{children:[r.jsx(j,{children:r.jsx(R,{size:24})}),r.jsxs(y,{children:[r.jsx(s,{fontSize:"lg",fontWeight:900,$textAlign:"left",$margin:"0",children:"My Achievements"}),r.jsx(s,{fontSize:"xs",color:"textSecondary",$textAlign:"left",$margin:"2px 0 0 0",children:"Your personal progress and history"})]})]}),o.length===0?r.jsxs(b,{children:[r.jsx(k,{$bg:c.primary+"10",children:r.jsx(d,{size:60,color:c.primary})}),r.jsx(w,{children:"Your trophy cabinet is empty! Let's win some stars! 🚀"}),r.jsx(E,{title:"Start a Challenge",onClick:()=>z("/master_test"),variant:"primary"})]}):r.jsx(J,{children:o.map((n,a)=>{const i=n.scorePercentage??Math.round(n.score/n.totalQuestions*100);return r.jsxs(X,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:a*.05},children:[r.jsxs(Z,{children:[r.jsx(ee,{children:n.testTitle}),r.jsxs(re,{children:[r.jsx(G,{size:14}),n.timestamp.toDate().toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"})]})]}),r.jsxs(x,{children:[r.jsx(h,{children:"Total Time"}),r.jsxs(te,{children:[r.jsx(V,{size:16,color:c.primary}),Math.floor(n.timeTaken/60),":",(n.timeTaken%60).toString().padStart(2,"0"),"s"]})]}),r.jsx(ne,{children:r.jsxs(ie,{$scorePercentage:i,children:[i===100&&r.jsx(p,{children:r.jsx(K,{size:16})}),i,"%"]})})]},n.id)})})]}),r.jsxs("div",{children:[r.jsxs($,{children:[r.jsx(j,{children:r.jsx(d,{size:24})}),r.jsxs(y,{children:[r.jsx(s,{fontSize:"lg",fontWeight:900,$textAlign:"left",$margin:"0",children:"Global Hall of Fame"}),r.jsx(s,{fontSize:"xs",color:"textSecondary",$textAlign:"left",$margin:"2px 0 0 0",children:"The top champions in the world"})]})]}),g.length===0?r.jsxs(b,{children:[r.jsx(k,{$bg:c.warning+"10",children:r.jsx(Q,{size:60,color:c.warning})}),r.jsx(w,{children:"The Hall of Fame is waiting for its first stars! 🌟"}),r.jsx(s,{fontSize:"xs",fontWeight:600,$margin:"10px 0 0 0",children:"Check back soon to see the top scorers!"})]}):r.jsx(oe,{children:g.map((n,a)=>{const i=a+1,D=n.scorePercentage??Math.round(n.score/n.totalQuestions*100),P=(n.userName||"Explorer").split(" ").map(H=>H[0]).join("").slice(0,2);return r.jsxs(ae,{$isTop3:i<=3,$rank:i,initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{delay:a*.05},children:[r.jsxs(se,{$rank:i,children:[F(i),i]}),r.jsx(le,{$rank:i,children:P}),r.jsxs(ce,{children:[r.jsx(s,{fontSize:"md",fontWeight:900,$textAlign:"left",children:n.userName||"Explorer"}),i===1&&r.jsx(s,{fontSize:"10px",color:"success",fontWeight:800,$textAlign:"left",children:"CURRENT CHAMPION 👑"})]}),r.jsxs(x,{$align:"flex-end",children:[r.jsx(h,{children:"Score"}),r.jsxs(de,{$rank:i,children:[r.jsx(p,{children:r.jsx(U,{size:14})}),D,"%"]})]}),r.jsxs(x,{$align:"flex-end",children:[r.jsx(h,{children:"Time"}),r.jsxs(xe,{children:[r.jsx(p,{children:r.jsx(O,{size:14})}),Math.floor(n.timeTaken/60),":",(n.timeTaken%60).toString().padStart(2,"0"),"s"]})]})]},n.id)})})]})]})]})})};export{ye as default};

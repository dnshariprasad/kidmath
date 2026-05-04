import{k as t,s as C,o as L,r as l,l as H,p as r,aB as M,P as I,K as o,aa as c,T as d,z as W,v as B}from"./index-C6BBkSek.js";import{a as E,g as N}from"./testService-BIKzA5g1.js";import{C as R}from"./ChallengeHeader-6svzIyZI.js";import{M as $,a as V,C as K,S as Q,T as U,A as G}from"./trending-up-CksS9YlV.js";import{C as O}from"./calendar-D_PXZMWM.js";import{S as Y}from"./star-BTkdRGG2.js";import{T as q}from"./timer-DHL-USXm.js";const J=t.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 10px 40px 40px 40px;
  background: ${({theme:e})=>e.colors.background};
  min-height: calc(100vh - 80px);

  @media (max-width: 768px) {
    padding: 10px 20px 20px 20px;
  }
`,X=t.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin-top: 32px;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`,y=t.div`
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
  box-shadow: ${e=>{var n;return((n=e.theme.shadows)==null?void 0:n.sm)||"0 4px 12px rgba(0, 0, 0, 0.05)"}};
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
`,j=t.div`
  flex: 1;
`,b=t.div`
  width: 40px;
  height: 40px;
  background: ${e=>e.theme.colors.primary};
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0 4px 10px ${e=>e.theme.colors.primary}40;
`,Z=t.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`,ee=t(C.create("div"))`
  background: ${({theme:e})=>e.colors.surface};
  padding: 16px 24px;
  min-height: 90px;
  border-radius: 24px;
  box-shadow: ${({theme:e})=>{var n;return((n=e.shadows)==null?void 0:n.sm)||"0 4px 12px rgba(0, 0, 0, 0.05)"}};
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
    box-shadow: ${({theme:e})=>{var n;return((n=e.shadows)==null?void 0:n.md)||"0 8px 24px rgba(0, 0, 0, 0.08)"}};
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
    padding: 16px;
    & > div:nth-child(3) {
      grid-column: span 2;
    }
  }
`,re=t.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,te=t.h3`
  font-size: 1.1rem;
  font-weight: 900;
  color: ${({theme:e})=>e.colors.textPrimary};
  margin: 0;
`,ie=t.span`
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
`,ne=t.span`
  font-size: 1rem;
  font-weight: 900;
  color: ${e=>e.$color||e.theme.colors.textPrimary};
  display: flex;
  align-items: center;
  gap: 8px;
`,se=t.div`
  display: flex;
  justify-content: flex-end;
`,ae=t.div`
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
`,k=t.div`
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
`,w=t.div`
  background: ${e=>e.$bg||e.theme.colors.primary+"10"};
  padding: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`,S=t.p`
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
`,ce=t(C.create("div"))`
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
`,le=t.div`
  font-weight: 900;
  font-size: 1.25rem;
  color: ${e=>e.$rank===1?"#FFD700":e.$rank===2?"#C0C0C0":e.$rank===3?"#CD7F32":e.theme.colors.textSecondary};
  text-shadow: ${e=>e.$rank<=3?"0 2px 4px rgba(0,0,0,0.1)":"none"};
  display: flex;
  align-items: center;
`,de=t.div`
  flex: 1;
  margin-left: 14px;
`,xe=t.div`
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
`,he=t.div`
  display: flex;
  align-items: center;
  color: ${e=>e.$rank&&e.$rank<=3?e.theme.colors.primary:e.theme.colors.textPrimary};
  font-weight: 900;
`,me=t.div`
  display: flex;
  align-items: center;
  font-weight: 800;
  opacity: 0.8;
`,g=t.span`
  margin-right: 6px;
  display: flex;
  align-items: center;
`,be=()=>{const e=B.en,n=L(i=>i.alphabet.user),[p,v]=l.useState([]),[f,z]=l.useState([]),[T,u]=l.useState(!0),D=H();l.useEffect(()=>{(async()=>{u(!0),n&&E(n.uid).then(v).catch(a=>console.error("History fetch error:",a)),N(void 0,10).then(z).catch(a=>console.error("Leaderboard fetch error:",a)).finally(()=>u(!1))})()},[n]);const F=i=>i===1?r.jsx(m,{children:r.jsx(d,{size:20,color:"#FFD700"})}):i===2?r.jsx(m,{children:r.jsx(G,{size:18,color:"#C0C0C0"})}):i===3?r.jsx(m,{children:r.jsx($,{size:18,color:"#CD7F32"})}):null;return T?r.jsx(M,{}):r.jsx(I,{children:r.jsxs(J,{children:[r.jsx(R,{icon:$,title:e.his_title,subtitle:e.his_subtitle,streak:0}),r.jsxs(X,{children:[r.jsxs("div",{children:[r.jsxs(y,{children:[r.jsx(b,{children:r.jsx(V,{size:24})}),r.jsxs(j,{children:[r.jsx(o,{fontSize:"lg",fontWeight:900,$textAlign:"left",$margin:"0",children:e.his_myAchievements}),r.jsx(o,{fontSize:"xs",color:"textSecondary",$textAlign:"left",$margin:"2px 0 0 0",children:e.his_myDesc})]})]}),p.length===0?r.jsxs(k,{children:[r.jsx(w,{$bg:c.primary+"10",children:r.jsx(d,{size:60,color:c.primary})}),r.jsx(S,{children:e.his_emptyMsg}),r.jsx(W,{title:e.dash_takeChallenge,onClick:()=>D("/master_test"),variant:"primary"})]}):r.jsx(Z,{children:p.map((i,a)=>{const s=i.scorePercentage??Math.round(i.score/i.totalQuestions*100);return r.jsxs(ee,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:a*.05},children:[r.jsxs(re,{children:[r.jsx(te,{children:i.testTitle}),r.jsxs(ie,{children:[r.jsx(O,{size:14}),i.timestamp.toDate().toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"})]})]}),r.jsxs(x,{children:[r.jsx(h,{children:e.his_totalTime}),r.jsxs(ne,{children:[r.jsx(K,{size:16,color:c.primary}),Math.floor(i.timeTaken/60),":",(i.timeTaken%60).toString().padStart(2,"0"),"s"]})]}),r.jsx(se,{children:r.jsxs(ae,{$scorePercentage:s,children:[s===100&&r.jsx(g,{children:r.jsx(Q,{size:16})}),s,"%"]})})]},i.id)})})]}),r.jsxs("div",{children:[r.jsxs(y,{children:[r.jsx(b,{children:r.jsx(d,{size:24})}),r.jsxs(j,{children:[r.jsx(o,{fontSize:"lg",fontWeight:900,$textAlign:"left",$margin:"0",children:e.lead_title}),r.jsx(o,{fontSize:"xs",color:"textSecondary",$textAlign:"left",$margin:"2px 0 0 0",children:e.lead_subtitle})]})]}),f.length===0?r.jsxs(k,{children:[r.jsx(w,{$bg:c.warning+"10",children:r.jsx(Y,{size:60,color:c.warning})}),r.jsx(S,{children:e.lead_noRankings}),r.jsx(o,{fontSize:"xs",fontWeight:600,$margin:"10px 0 0 0",children:e.his_checkSoon})]}):r.jsx(oe,{children:f.map((i,a)=>{const s=a+1,P=i.scorePercentage??Math.round(i.score/i.totalQuestions*100),_=(i.userName||"Explorer").split(" ").map(A=>A[0]).join("").slice(0,2);return r.jsxs(ce,{$isTop3:s<=3,$rank:s,initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{delay:a*.05},children:[r.jsxs(le,{$rank:s,children:[F(s),s]}),r.jsx(xe,{$rank:s,children:_}),r.jsxs(de,{children:[r.jsx(o,{fontSize:"md",fontWeight:900,$textAlign:"left",children:i.userName||"Explorer"}),s===1&&r.jsx(o,{fontSize:"10px",color:"success",fontWeight:800,$textAlign:"left",children:e.his_champion})]}),r.jsxs(x,{$align:"flex-end",children:[r.jsx(h,{children:e.his_score}),r.jsxs(he,{$rank:s,children:[r.jsx(g,{children:r.jsx(U,{size:14})}),P,"%"]})]}),r.jsxs(x,{$align:"flex-end",children:[r.jsx(h,{children:e.his_time}),r.jsxs(me,{children:[r.jsx(g,{children:r.jsx(q,{size:14})}),Math.floor(i.timeTaken/60),":",(i.timeTaken%60).toString().padStart(2,"0")]})]})]},i.id)})})]})]})]})})};export{be as default};

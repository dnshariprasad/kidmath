import{k as i,s as h,t as D,r as g,p as e,K as o,v as N,l as R,n as W,o as B,P as M,w as O,x as K,y as H,z as x,T as k,A as z,h as U}from"./index-C6BBkSek.js";import{a as f,G as S,L as V}from"./gameData-BVeNWOk-.js";import{g as X}from"./testService-BIKzA5g1.js";import{S as Q}from"./star-BTkdRGG2.js";import{T as Y}from"./timer-DHL-USXm.js";import{B as C}from"./book-open-DZwDn8Hr.js";import{C as q}from"./circle-check-DrRZFkKn.js";import{C as T}from"./calculator-5JmEZPPB.js";import{A as J}from"./arrow-up-down-Cgp5Q29m.js";import{G as Z}from"./grid-3x3-DC3zQf2m.js";import{S as ee}from"./search-D5YkJGzT.js";import{L as re}from"./languages-B2l58rdZ.js";const te=i.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 25px;
  width: 100%;
  max-width: 1200px;
  margin-top: 60px;
  margin-bottom: 60px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    margin-top: 40px;
  }
`,u=i(h(D))`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 100%;
  box-sizing: border-box;
  background: ${r=>r.theme.colors.surfaceVariant}40;
`,j=i.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
  color: ${r=>r.theme.colors.primary};
`,L=i.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,A=i(h.div)`
  background: ${r=>r.theme.colors.surface};
  padding: 14px 18px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  gap: 14px;
  min-height: 80px; /* Fixed height for parity */
  cursor: pointer;
  border: 1px solid ${r=>r.theme.colors.primary}08;
  transition: all 0.2s ease;

  &:hover {
    transform: translateX(6px);
    border-color: ${r=>r.theme.colors.primary}30;
    background: ${r=>r.theme.colors.primary}05;
  }
`,G=i.span`
  color: ${r=>r.theme.colors.primary};
  margin-right: 8px;
  display: flex;
  align-items: center;
`,_=i.div`
  flex: 1;
`,P=i.div`
  font-weight: 700;
  font-size: ${r=>r.theme.fontSize.md};
  color: ${r=>r.theme.colors.textPrimary};
  display: flex;
  align-items: center;
  gap: 8px;
`,F=i.div`
  font-size: ${r=>r.theme.fontSize.xs};
  color: ${r=>r.theme.colors.textSecondary};
  opacity: 0.7;
  padding-left: 28px;
`,ie=i(h(D))`
  background: linear-gradient(
    135deg,
    ${r=>r.theme.colors.primary} 0%,
    ${r=>r.theme.colors.primary}CC 100%
  );
  color: white;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  text-align: center;
  max-width: 1200px;
  border: none;
`,ae=i.div`
  max-width: 600px;
`,E=i.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,y=i(h.create("div"))`
  display: flex;
  align-items: center;
  gap: 12px;
  min-height: 80px;
  padding: 12px 16px;
  background: ${r=>r.theme.colors.surface};
  border-radius: 18px;
  border: 1px solid ${r=>r.theme.colors.primary}05;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
  opacity: ${r=>r.$isLoading?.3:r.$isPlaceholder?.5:1};
  cursor: default;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: ${r=>r.theme.colors.primary}20;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  }

  &:nth-child(1) {
    background: ${r=>r.$isLoading||r.$isPlaceholder?r.theme.colors.surface:"linear-gradient(90deg, #ffd70008, transparent)"};
  }
`,$=i.div`
  width: 32px;
  height: 32px;
  border-radius: 10px;
  background: ${r=>r.$rank===1?"#FFD700":r.$rank===2?"#C0C0C0":r.$rank===3?"#CD7F32":r.theme.colors.surfaceVariant};
  color: ${r=>r.$rank<=3?"#000":r.theme.colors.textPrimary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-size: 0.85rem;
`,b=i.div`
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: ${r=>r.theme.colors.primary}10;
  color: ${r=>r.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 0.85rem;
  text-transform: uppercase;
`,v=i.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`,w=i.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 2px;
`,p=i.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.75rem;
  color: ${r=>r.theme.colors.textSecondary};
  font-weight: 600;
`,se=i.div`
  height: 14px;
  width: 80px;
  background: ${r=>r.theme.colors.textSecondary}20;
  border-radius: 4px;
`,oe=i.div`
  height: 10px;
  width: 40px;
  background: ${r=>r.theme.colors.textSecondary}15;
  border-radius: 4px;
`,ne=()=>{const r=N.en,[c,s]=g.useState([]),[m,d]=g.useState(!0);return g.useEffect(()=>{(async()=>{try{const a=await X(void 0,3);s(a)}catch(a){console.error(a)}finally{d(!1)}})()},[]),m?e.jsx(E,{children:Array.from({length:3}).map((l,a)=>e.jsxs(y,{$isLoading:!0,children:[e.jsx($,{$rank:a+1,children:a+1}),e.jsx(b,{}),e.jsxs(v,{children:[e.jsx(se,{}),e.jsx(w,{children:e.jsx(oe,{})})]})]},`loading-${a}`))}):e.jsx(E,{children:Array.from({length:3}).map((l,a)=>{const t=c[a];if(!t)return e.jsxs(y,{$isPlaceholder:!0,children:[e.jsx($,{$rank:a+1,children:a+1}),e.jsx(b,{children:"?"}),e.jsxs(v,{children:[e.jsx(o,{fontSize:"sm",fontWeight:700,$textAlign:"left",color:"textSecondary",$margin:"0",children:r.lead_waiting}),e.jsxs(w,{children:[e.jsx(p,{children:"--%"}),e.jsx(p,{children:"--:--"})]})]})]},`placeholder-${a}`);const n=(t.userName||"Explorer").split(" ").map(I=>I[0]).join("").slice(0,2);return e.jsxs(y,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:a*.1},children:[e.jsx($,{$rank:a+1,children:a+1}),e.jsx(b,{children:n}),e.jsxs(v,{children:[e.jsx(o,{fontSize:"sm",fontWeight:800,$textAlign:"left",$margin:"0",children:t.userName||"Explorer"}),e.jsxs(w,{children:[e.jsxs(p,{children:[e.jsx(Q,{size:10,fill:"#FFD700",color:"#FFD700"}),t.scorePercentage??Math.round(t.score/t.totalQuestions*100),"%"]}),e.jsxs(p,{children:[e.jsx(Y,{size:10}),Math.floor(t.timeTaken/60),":",(t.timeTaken%60).toString().padStart(2,"0")]})]})]})]},t.id)})})},$e=()=>{const r=R(),c=W(),s=N.en,m=B(t=>t.alphabet.userName),d=(t,n)=>{c(z(n)),r(t)},l=t=>{const n=f[t][0];n&&(c(z(t)),r(n.path))},a=t=>{switch(t){case"Type":return e.jsx(U,{size:20});case"Languages":return e.jsx(re,{size:20});case"BookOpen":return e.jsx(C,{size:20});case"Search":return e.jsx(ee,{size:20});case"Gamepad2":return e.jsx(S,{size:20});case"Calculator":return e.jsx(T,{size:20});case"Grid3X3":return e.jsx(Z,{size:20});case"ArrowUpDown":return e.jsx(J,{size:20});case"LayoutGrid":return e.jsx(V,{size:20});case"Trophy":return e.jsx(k,{size:20});default:return e.jsx(T,{size:20})}};return e.jsxs(M,{"data-testid":"view-welcome",children:[e.jsxs(O,{children:[e.jsxs(K,{children:[s.dash_welcome,", ",m||"Explorer","! 👋"]}),e.jsx(H,{children:s.dash_subtitle})]}),e.jsxs(te,{children:[e.jsxs(u,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.1},children:[e.jsxs(j,{children:[e.jsx(C,{size:28}),e.jsx(o,{fontSize:"xl",color:"primary",fontWeight:900,children:s.dash_learn})]}),e.jsx(L,{children:f.learn.slice(0,3).map(t=>e.jsx(A,{onClick:()=>d(t.path,"learn"),whileTap:{scale:.98},children:e.jsxs(_,{children:[e.jsxs(P,{children:[e.jsx(G,{children:a(t.iconName)}),t.title]}),e.jsx(F,{children:t.desc})]})},t.path))}),e.jsx("div",{style:{marginTop:"auto",textAlign:"center",paddingTop:"16px"},children:e.jsx(x,{title:s.dash_exploreAll,variant:"secondary",onClick:()=>l("learn"),width:"100%"})})]}),e.jsxs(u,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},children:[e.jsxs(j,{children:[e.jsx(S,{size:28}),e.jsx(o,{fontSize:"xl",color:"primary",fontWeight:900,children:s.dash_practice})]}),e.jsx(L,{children:f.practice.slice(0,3).map(t=>e.jsx(A,{onClick:()=>d(t.path,"practice"),whileTap:{scale:.98},children:e.jsxs(_,{children:[e.jsxs(P,{children:[e.jsx(G,{children:a(t.iconName)}),t.title]}),e.jsx(F,{children:t.desc})]})},t.path))}),e.jsx("div",{style:{marginTop:"auto",textAlign:"center",paddingTop:"16px"},children:e.jsx(x,{title:s.dash_exploreAll,variant:"secondary",onClick:()=>l("practice"),width:"100%"})})]}),e.jsxs(u,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{delay:.3},children:[e.jsxs(j,{children:[e.jsx(q,{size:28}),e.jsx(o,{fontSize:"xl",color:"primary",fontWeight:900,children:s.dash_leaderboard})]}),e.jsx(ne,{}),e.jsx("div",{style:{marginTop:"auto",textAlign:"center",paddingTop:"16px"},children:e.jsx(x,{title:s.dash_takeChallenge,variant:"secondary",onClick:()=>r("/master_test"),width:"100%"})})]})]}),e.jsxs(ie,{children:[e.jsx(k,{size:60,color:"#FFEAA7"}),e.jsxs(ae,{children:[e.jsx(o,{fontSize:"2rem",color:"onPrimary",fontWeight:900,children:s.dash_achievementTitle}),e.jsx(o,{fontSize:"lg",color:"onPrimary",children:s.dash_achievementDesc})]}),e.jsx(x,{title:s.dash_startLearning,variant:"accent",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),minWidth:"220px",size:"lg"})]})]})};export{$e as default};

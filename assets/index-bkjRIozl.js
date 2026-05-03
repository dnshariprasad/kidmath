import{k as i,s as p,t as W,r as m,p as e,K as s,l as D,n as N,o as I,P as M,v as B,w as O,x as H,y as d,T as k,z as w,h as K}from"./index-C9GQ7pMr.js";import{a as g,G as z,L as X}from"./gameData-C97ZkwaR.js";import{g as _}from"./testService-cyRd6wDR.js";import{S as U}from"./star-DbDp_G0e.js";import{T as V}from"./timer-DQyHgShF.js";import{B as C}from"./book-open-BeT1M_Ce.js";import{C as Q}from"./circle-check-BWtZeJQF.js";import{C as L}from"./calculator-Xf4Q-WFg.js";import{A as Y}from"./arrow-up-down-mwadE9py.js";import{G as q}from"./grid-3x3-CFD8or27.js";import{S as J}from"./search-yNrn73pI.js";import{L as Z}from"./languages-BwItiWL9.js";const ee=i.div`
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
`,f=i(p(W))`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 100%;
  box-sizing: border-box;
  background: ${r=>r.theme.colors.surfaceVariant}40;
`,u=i.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
  color: ${r=>r.theme.colors.primary};
`,S=i.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,T=i(p.div)`
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
`,A=i.span`
  color: ${r=>r.theme.colors.primary};
  margin-right: 8px;
  display: flex;
  align-items: center;
`,G=i.div`
  flex: 1;
`,E=i.div`
  font-weight: 700;
  font-size: ${r=>r.theme.fontSize.md};
  color: ${r=>r.theme.colors.textPrimary};
  display: flex;
  align-items: center;
  gap: 8px;
`,P=i.div`
  font-size: ${r=>r.theme.fontSize.xs};
  color: ${r=>r.theme.colors.textSecondary};
  opacity: 0.7;
  padding-left: 28px;
`,re=i(p(W))`
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
`,te=i.div`
  max-width: 600px;
`,F=i.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,j=i(p.create("div"))`
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
`,y=i.div`
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
`,$=i.div`
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
`,b=i.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`,v=i.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 2px;
`,x=i.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.75rem;
  color: ${r=>r.theme.colors.textSecondary};
  font-weight: 600;
`,ie=i.div`
  height: 14px;
  width: 80px;
  background: ${r=>r.theme.colors.textSecondary}20;
  border-radius: 4px;
`,ae=i.div`
  height: 10px;
  width: 40px;
  background: ${r=>r.theme.colors.textSecondary}15;
  border-radius: 4px;
`,se=()=>{const[r,c]=m.useState([]),[h,l]=m.useState(!0);return m.useEffect(()=>{(async()=>{try{const a=await _(void 0,3);c(a)}catch(a){console.error(a)}finally{l(!1)}})()},[]),h?e.jsx(F,{children:Array.from({length:3}).map((n,a)=>e.jsxs(j,{$isLoading:!0,children:[e.jsx(y,{$rank:a+1,children:a+1}),e.jsx($,{}),e.jsxs(b,{children:[e.jsx(ie,{}),e.jsx(v,{children:e.jsx(ae,{})})]})]},`loading-${a}`))}):e.jsx(F,{children:Array.from({length:3}).map((n,a)=>{const t=r[a];if(!t)return e.jsxs(j,{$isPlaceholder:!0,children:[e.jsx(y,{$rank:a+1,children:a+1}),e.jsx($,{children:"?"}),e.jsxs(b,{children:[e.jsx(s,{fontSize:"sm",fontWeight:700,$textAlign:"left",color:"textSecondary",$margin:"0",children:"Waiting..."}),e.jsxs(v,{children:[e.jsx(x,{children:"--%"}),e.jsx(x,{children:"--:--"})]})]})]},`placeholder-${a}`);const o=(t.userName||"Explorer").split(" ").map(R=>R[0]).join("").slice(0,2);return e.jsxs(j,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:a*.1},children:[e.jsx(y,{$rank:a+1,children:a+1}),e.jsx($,{children:o}),e.jsxs(b,{children:[e.jsx(s,{fontSize:"sm",fontWeight:800,$textAlign:"left",$margin:"0",children:t.userName||"Explorer"}),e.jsxs(v,{children:[e.jsxs(x,{children:[e.jsx(U,{size:10,fill:"#FFD700",color:"#FFD700"}),t.scorePercentage??Math.round(t.score/t.totalQuestions*100),"%"]}),e.jsxs(x,{children:[e.jsx(V,{size:10}),Math.floor(t.timeTaken/60),":",(t.timeTaken%60).toString().padStart(2,"0")]})]})]})]},t.id)})})},je=()=>{const r=D(),c=N(),h=I(t=>t.alphabet.userName),l=(t,o)=>{c(w(o)),r(t)},n=t=>{const o=g[t][0];o&&(c(w(t)),r(o.path))},a=t=>{switch(t){case"Type":return e.jsx(K,{size:20});case"Languages":return e.jsx(Z,{size:20});case"BookOpen":return e.jsx(C,{size:20});case"Search":return e.jsx(J,{size:20});case"Gamepad2":return e.jsx(z,{size:20});case"Calculator":return e.jsx(L,{size:20});case"Grid3X3":return e.jsx(q,{size:20});case"ArrowUpDown":return e.jsx(Y,{size:20});case"LayoutGrid":return e.jsx(X,{size:20});case"Trophy":return e.jsx(k,{size:20});default:return e.jsx(L,{size:20})}};return e.jsxs(M,{"data-testid":"view-welcome",children:[e.jsxs(B,{children:[e.jsxs(O,{children:["Welcome, ",h||"Explorer","! 👋"]}),e.jsx(H,{children:"The ultimate learning playground for curious kids! 🌟"})]}),e.jsxs(ee,{children:[e.jsxs(f,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.1},children:[e.jsxs(u,{children:[e.jsx(C,{size:28}),e.jsx(s,{fontSize:"xl",color:"primary",fontWeight:900,children:"Learn"})]}),e.jsx(S,{children:g.learn.slice(0,3).map(t=>e.jsx(T,{onClick:()=>l(t.path,"learn"),whileTap:{scale:.98},children:e.jsxs(G,{children:[e.jsxs(E,{children:[e.jsx(A,{children:a(t.iconName)}),t.title]}),e.jsx(P,{children:t.desc})]})},t.path))}),e.jsx("div",{style:{marginTop:"auto",textAlign:"center",paddingTop:"16px"},children:e.jsx(d,{title:"EXPLORE ALL",variant:"secondary",onClick:()=>n("learn"),width:"100%"})})]}),e.jsxs(f,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},children:[e.jsxs(u,{children:[e.jsx(z,{size:28}),e.jsx(s,{fontSize:"xl",color:"primary",fontWeight:900,children:"Practice"})]}),e.jsx(S,{children:g.practice.slice(0,3).map(t=>e.jsx(T,{onClick:()=>l(t.path,"practice"),whileTap:{scale:.98},children:e.jsxs(G,{children:[e.jsxs(E,{children:[e.jsx(A,{children:a(t.iconName)}),t.title]}),e.jsx(P,{children:t.desc})]})},t.path))}),e.jsx("div",{style:{marginTop:"auto",textAlign:"center",paddingTop:"16px"},children:e.jsx(d,{title:"EXPLORE ALL",variant:"secondary",onClick:()=>n("practice"),width:"100%"})})]}),e.jsxs(f,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{delay:.3},children:[e.jsxs(u,{children:[e.jsx(Q,{size:28}),e.jsx(s,{fontSize:"xl",color:"primary",fontWeight:900,children:"Leaderboard"})]}),e.jsx(se,{}),e.jsx("div",{style:{marginTop:"auto",textAlign:"center",paddingTop:"16px"},children:e.jsx(d,{title:"TAKE THE CHALLENGE",variant:"secondary",onClick:()=>r("/master_test"),width:"100%"})})]})]}),e.jsxs(re,{children:[e.jsx(k,{size:60,color:"#FFEAA7"}),e.jsxs(te,{children:[e.jsx(s,{fontSize:"2rem",color:"onPrimary",fontWeight:900,children:"Achievement Program 🏆"}),e.jsx(s,{fontSize:"lg",color:"onPrimary",children:"Master any subject by reaching a 10-streak to earn your exclusive printable certificate! Track your progress with the stars on each activity."})]}),e.jsx(d,{title:"Start Learning! 🚀",variant:"accent",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),minWidth:"220px",size:"lg"})]})]})};export{je as default};

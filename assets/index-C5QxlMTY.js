import{i as t,p as f,q as T,j as L,l as S,m as A,n as e,P as E,r as P,s as $,t as R,K as s,v as n,T as z,w as C,f as W}from"./index-ry-C20ZN.js";import{a as o,G as w,L as N}from"./gameData-BSbN5LDc.js";import{B as b}from"./book-open-B_UbAQtf.js";import{C as O}from"./circle-check-CbBvlLXr.js";import{C as k}from"./calculator-DL0bInUq.js";import{A as I}from"./arrow-up-down-5pDPQ4MX.js";import{G as X}from"./grid-3x3-v2ER446O.js";import{S as B}from"./search-BSAlcNdl.js";import{L as D}from"./languages-B2YrZ4ls.js";const F=t.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr 1fr;
  gap: 25px;
  width: 100%;
  max-width: 1200px;
  margin-top: 60px;
  margin-bottom: 60px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    margin-top: 40px;
  }
`,x=t(f(T))`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 100%;
  box-sizing: border-box;
  background: ${i=>i.theme.colors.surfaceVariant}40;
`,p=t.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
  color: ${i=>i.theme.colors.primary};
`,h=t.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,m=t(f.div)`
  background: ${i=>i.theme.colors.surface};
  padding: 14px 18px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  gap: 14px;
  cursor: pointer;
  border: 1px solid ${i=>i.theme.colors.primary}08;
  transition: all 0.2s ease;

  &:hover {
    transform: translateX(6px);
    border-color: ${i=>i.theme.colors.primary}30;
    background: ${i=>i.theme.colors.primary}05;
  }
`,j=t.span`
  color: ${i=>i.theme.colors.primary};
  margin-right: 8px;
  display: flex;
  align-items: center;
`,g=t.div`
  flex: 1;
`,u=t.div`
  font-weight: 700;
  font-size: ${i=>i.theme.fontSize.md};
  color: ${i=>i.theme.colors.textPrimary};
  display: flex;
  align-items: center;
  gap: 8px;
`,y=t.div`
  font-size: ${i=>i.theme.fontSize.xs};
  color: ${i=>i.theme.colors.textSecondary};
  opacity: 0.7;
  padding-left: 28px;
`,K=t(f(T))`
  background: linear-gradient(
    135deg,
    ${i=>i.theme.colors.primary} 0%,
    ${i=>i.theme.colors.primary}CC 100%
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
`,M=t.div`
  max-width: 600px;
`,ee=()=>{const i=L(),v=S(),G=A(r=>r.alphabet.userName),c=(r,a)=>{v(C(a)),i(r)},l=r=>{const a=o[r][0];a&&(v(C(r)),i(a.path))},d=r=>{switch(r){case"Type":return e.jsx(W,{size:20});case"Languages":return e.jsx(D,{size:20});case"BookOpen":return e.jsx(b,{size:20});case"Search":return e.jsx(B,{size:20});case"Gamepad2":return e.jsx(w,{size:20});case"Calculator":return e.jsx(k,{size:20});case"Grid3X3":return e.jsx(X,{size:20});case"ArrowUpDown":return e.jsx(I,{size:20});case"LayoutGrid":return e.jsx(N,{size:20});case"Trophy":return e.jsx(z,{size:20});default:return e.jsx(k,{size:20})}};return e.jsxs(E,{"data-testid":"view-welcome",children:[e.jsxs(P,{children:[e.jsxs($,{children:["Welcome, ",G||"Explorer","! 👋"]}),e.jsx(R,{children:"The ultimate learning playground for curious kids! 🌟"})]}),e.jsxs(F,{children:[e.jsxs(x,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.1},children:[e.jsxs(p,{children:[e.jsx(b,{size:28}),e.jsx(s,{fontSize:"xl",color:"primary",fontWeight:900,children:"Learn"})]}),e.jsx(h,{children:o.learn.slice(0,3).map(r=>e.jsx(m,{onClick:()=>c(r.path,"learn"),whileTap:{scale:.98},children:e.jsxs(g,{children:[e.jsxs(u,{children:[e.jsx(j,{children:d(r.iconName)}),r.title]}),e.jsx(y,{children:r.desc})]})},r.path))}),e.jsx("div",{style:{marginTop:"16px",textAlign:"center"},children:e.jsx(n,{title:"EXPLORE ALL",variant:"secondary",onClick:()=>l("learn"),width:"100%"})})]}),e.jsxs(x,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},children:[e.jsxs(p,{children:[e.jsx(w,{size:28}),e.jsx(s,{fontSize:"xl",color:"primary",fontWeight:900,children:"Practice"})]}),e.jsx(h,{children:o.practice.slice(0,3).map(r=>e.jsx(m,{onClick:()=>c(r.path,"practice"),whileTap:{scale:.98},children:e.jsxs(g,{children:[e.jsxs(u,{children:[e.jsx(j,{children:d(r.iconName)}),r.title]}),e.jsx(y,{children:r.desc})]})},r.path))}),e.jsx("div",{style:{marginTop:"16px",textAlign:"center"},children:e.jsx(n,{title:"EXPLORE ALL",variant:"secondary",onClick:()=>l("practice"),width:"100%"})})]}),e.jsxs(x,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{delay:.3},children:[e.jsxs(p,{children:[e.jsx(O,{size:28}),e.jsx(s,{fontSize:"xl",color:"primary",fontWeight:900,children:"Test"})]}),e.jsx(h,{children:o.test.slice(0,3).map(r=>e.jsx(m,{onClick:()=>c(r.path,"test"),whileTap:{scale:.98},children:e.jsxs(g,{children:[e.jsxs(u,{children:[e.jsx(j,{children:d(r.iconName)}),r.title]}),e.jsx(y,{children:r.desc})]})},r.path))}),e.jsx("div",{style:{marginTop:"16px",textAlign:"center"},children:e.jsx(n,{title:"EXPLORE ALL",variant:"secondary",onClick:()=>l("test"),width:"100%"})})]})]}),e.jsxs(K,{children:[e.jsx(z,{size:60,color:"#FFEAA7"}),e.jsxs(M,{children:[e.jsx(s,{fontSize:"2rem",color:"onPrimary",fontWeight:900,children:"Achievement Program 🏆"}),e.jsx(s,{fontSize:"lg",color:"onPrimary",children:"Master any subject by reaching a 10-streak to earn your exclusive printable certificate! Track your progress with the stars on each activity."})]}),e.jsx(n,{title:"Start Learning! 🚀",variant:"accent",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),minWidth:"220px",size:"lg"})]})]})};export{ee as default};

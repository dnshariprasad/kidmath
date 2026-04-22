import{i as t,p as a,j as l,m as d,n as o,K as i,T as p,f as m}from"./index-DO3JajC9.js";import{C as h,P as x,a as g,b as u,c as b}from"./globalStyles-6jG7PpSt.js";import{C as y}from"./calculator-CLz8xtrj.js";import{L as j}from"./languages-AxnybGTT.js";const f=t.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  margin-top: 15px;
`,w=t(a.div)`
  background: ${e=>e.theme.colors.surface};
  padding: 24px;
  border-radius: 24px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor: pointer;
  border: 1px solid ${e=>e.theme.colors.primary}10;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    border-color: ${e=>e.$color}40;
    transform: translateY(-5px);
  }
`,C=t.div`
  background: ${e=>e.$color}15;
  color: ${e=>e.$color};
  padding: 16px;
  border-radius: 20px;
  margin-bottom: 16px;
`,$=t(a.span)`
  display: inline-block;
`,v=t.h3`
  font-size: ${e=>e.theme.fontSize.lg};
  margin-bottom: 8px;
  color: ${e=>e.theme.colors.textPrimary};
`,z=t.p`
  color: ${e=>e.theme.colors.textSecondary};
  margin-bottom: 20px;
  font-size: ${e=>e.theme.fontSize.sm};
`,P=t(h)`
  margin-top: 40px;
  text-align: center;
  background: linear-gradient(
    135deg,
    ${e=>e.theme.colors.primary} 0%,
    ${e=>e.theme.colors.primary}CC 100%
  );
  color: white;
  padding: 30px 20px;
  width: 100%;
  max-width: 1000px;
  box-sizing: border-box;
  border: none;

  &:hover {
    transform: translateY(-4px);
  }
`,k=t.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-bottom: 16px;
  flex-wrap: wrap;
`,A=t.h2`
  font-size: clamp(1.6rem, 4vw, 2.2rem);
  margin: 0;
`,F=t.p`
  font-size: ${e=>e.theme.fontSize.base};
  margin: 0 auto 25px;
  opacity: 0.9;
  max-width: 500px;
  font-weight: 500;
`,T=t.div`
  display: flex;
  justify-content: center;
`,S=t.div`
  & > [data-testid="comp-kid-button"] {
    background: ${e=>e.theme.colors.onPrimary} !important;
    color: ${e=>e.theme.colors.primary} !important;
    border: none !important;
  }
`,N=()=>{const e=l(),n=d(r=>r.alphabet.userName),s=[{title:"Counting Fun",desc:"Numbers, counting & more!",icon:o.jsx(y,{size:40}),color:"#6366F1",path:"/counting"},{title:"English Fun",desc:"ABC, spelling & words!",icon:o.jsx(m,{size:40}),color:"#6366F1",path:"/alphabet"},{title:"Hindi Letters",desc:"Learn Varnamala with joy!",icon:o.jsx(j,{size:40}),color:"#6366F1",path:"/alphabet_hindi"}];return o.jsxs(x,{"data-testid":"view-welcome",children:[o.jsxs(g,{"data-testid":"welcome-header",children:[o.jsxs(u,{children:["Hi, ",n||"there","!"," ",o.jsx($,{animate:{rotate:[0,20,0]},transition:{repeat:1/0,duration:2},children:"👋"})]}),o.jsx(b,{children:"What would you like to learn today? Pick a subject and let's start the adventure! 🚀"})]}),o.jsx(f,{"data-testid":"category-grid",children:s.map((r,c)=>o.jsxs(w,{$color:r.color,initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{delay:c*.1},onClick:()=>e(r.path),children:[o.jsx(C,{$color:r.color,children:r.icon}),o.jsx(v,{children:r.title}),o.jsx(z,{children:r.desc}),o.jsx(i,{title:"Let's Play!",variant:"primary",onClick:()=>e(r.path)})]},r.title))}),o.jsxs(P,{"data-testid":"promo-section",children:[o.jsxs(k,{children:[o.jsx(p,{size:48,color:"#FFEAA7"}),o.jsx(A,{children:"Earn Your Awards!"})]}),o.jsx(F,{children:"Reach a 10-streak in any challenge to win a personalized Achievement Certificate! 🏆✨"}),o.jsx(T,{children:o.jsx(S,{children:o.jsx(i,{title:"Choose a Challenge",variant:"secondary",onClick:()=>window.scrollTo({top:0,behavior:"smooth"})})})})]})]})};export{N as default};

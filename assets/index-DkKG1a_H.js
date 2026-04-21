import{i as t,p as a,j as l,n as e,K as i,T as c,f as d}from"./index-NzOoTDV7.js";import{C as p,P as m,a as x,b as h,c as g}from"./globalStyles-CxNgPgHO.js";import{C as u}from"./calculator-CwqiLLzy.js";import{L as b}from"./languages-CHJoMOmR.js";const y=t.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  margin-top: 15px;
`,j=t(a.div)`
  background: ${o=>o.theme.colors.surface};
  padding: 24px;
  border-radius: 24px;
  box-shadow: ${o=>o.theme.colors.shadow};
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor: pointer;
  border: 1px solid ${o=>o.theme.colors.primary}10;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    border-color: ${o=>o.$color}40;
    transform: translateY(-5px);
    box-shadow: 0 12px 30px ${o=>o.$color}15;
  }
`,f=t.div`
  background: ${o=>o.$color}15;
  color: ${o=>o.$color};
  padding: 16px;
  border-radius: 20px;
  margin-bottom: 16px;
`,$=t(a.span)`
  display: inline-block;
`,w=t.h3`
  font-size: ${o=>o.theme.fontSize.lg};
  margin-bottom: 8px;
  color: ${o=>o.theme.colors.textPrimary};
`,C=t.p`
  color: ${o=>o.theme.colors.textSecondary};
  margin-bottom: 20px;
  font-size: ${o=>o.theme.fontSize.sm};
`,v=t(p)`
  margin-top: 40px;
  text-align: center;
  background: linear-gradient(
    135deg,
    ${o=>o.theme.colors.primary} 0%,
    ${o=>o.theme.colors.primary}CC 100%
  );
  color: white;
  padding: 30px 20px;
  width: 100%;
  max-width: 1000px;
  box-sizing: border-box;
  border: none;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 15px 35px ${o=>o.theme.colors.primary}40;
  }
`,z=t.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-bottom: 16px;
  flex-wrap: wrap;
`,P=t.h2`
  font-size: clamp(1.6rem, 4vw, 2.2rem);
  margin: 0;
`,k=t.p`
  font-size: ${o=>o.theme.fontSize.base};
  margin: 0 auto 25px;
  opacity: 0.9;
  max-width: 500px;
  font-weight: 500;
`,F=t.div`
  display: flex;
  justify-content: center;
`,T=t.div`
  & > [data-testid="comp-kid-button"] {
    background: ${o=>o.theme.colors.onPrimary} !important;
    color: ${o=>o.theme.colors.primary} !important;
    border: none !important;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1) !important;
  }
`,E=()=>{const o=l(),n=[{title:"Counting Fun",desc:"Numbers, counting & more!",icon:e.jsx(u,{size:40}),color:"#6366F1",path:"/counting"},{title:"English Fun",desc:"ABC, spelling & words!",icon:e.jsx(d,{size:40}),color:"#6366F1",path:"/alphabet"},{title:"Hindi Letters",desc:"Learn Varnamala with joy!",icon:e.jsx(b,{size:40}),color:"#6366F1",path:"/alphabet_hindi"}];return e.jsxs(m,{children:[e.jsxs(x,{children:[e.jsxs(h,{children:["Hi there!"," ",e.jsx($,{animate:{rotate:[0,20,0]},transition:{repeat:1/0,duration:2},children:"👋"})]}),e.jsx(g,{children:"What would you like to learn today? Pick a subject and let's start the adventure! 🚀"})]}),e.jsx(y,{children:n.map((r,s)=>e.jsxs(j,{$color:r.color,initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{delay:s*.1},onClick:()=>o(r.path),children:[e.jsx(f,{$color:r.color,children:r.icon}),e.jsx(w,{children:r.title}),e.jsx(C,{children:r.desc}),e.jsx(i,{title:"Let's Play!",variant:"primary",onClick:()=>o(r.path)})]},r.title))}),e.jsxs(v,{children:[e.jsxs(z,{children:[e.jsx(c,{size:48,color:"#FFEAA7"}),e.jsx(P,{children:"Quick Challenge!"})]}),e.jsx(k,{children:'Feeling lucky? Try the "Missing Letters" challenge and win extra stars! ✨'}),e.jsx(F,{children:e.jsx(T,{children:e.jsx(i,{title:"Start Challenge",variant:"secondary",onClick:()=>o("/missing_letters")})})})]})]})};export{E as default};

import{k as n,s as c,r as g,ad as j,p as t,P as b,W as w,Y as $,Z as p,_ as C}from"./index-C6BBkSek.js";import{C as z}from"./ChallengeHeader-6svzIyZI.js";import{S as k}from"./SpeakIcon-B6whbVHe.js";import{P as S,N as I}from"./PreviousIcon-DfacNgST.js";import{r as h}from"./index-DW3S6kjG.js";import{H as N}from"./hash-BkiftMwg.js";const A=n.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;

  @media (max-width: 768px) {
  }
`,M=n(c.div)`
  position: absolute;
  width: 350px;
  background: ${e=>e.theme.colors.primary}10;
  border-radius: 50%;
  z-index: 0;

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }
`,P=n(c.div)`
  font-size: clamp(10rem, 30vw, 18rem);
  font-weight: 900;
  color: ${e=>e.theme.colors.primary};
  text-shadow: 0 20px 40px ${e=>e.theme.colors.primary}20;
  line-height: 1;
  font-family: ${e=>e.theme.fonts.primary};
  cursor: pointer;
  user-select: none;
  z-index: 10;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`,T=n.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 5;
`,H=n(c.div)`
  position: absolute;
  top: ${e=>e.$top};
  left: ${e=>e.$left};
  font-size: 4rem;
  cursor: pointer;
  pointer-events: auto;
  filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.15));

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;n.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 12px;
  background: ${e=>e.theme.colors.surfaceVariant}20;
  border-radius: 16px;
  border: 1px solid ${e=>e.theme.colors.primary}08;
`;const L=n.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 12px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(8, 1fr);
    gap: 10px;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(5, 1fr);
    gap: 8px;
  }
`,D=n(c.div)`
  aspect-ratio: 1;
  background: ${e=>e.$isActive?e.theme.colors.primary:e.theme.colors.surface};
  color: ${e=>e.$isActive?"white":e.theme.colors.textPrimary};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 1.1rem;
  cursor: pointer;
  border: 2px solid
    ${e=>e.$isActive?e.theme.colors.primary:e.theme.colors.primary+"10"};
  box-shadow: ${e=>e.$isActive?`0 8px 16px ${e.theme.colors.primary}30`:"none"};
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-4px);
    border-color: ${e=>e.theme.colors.primary};
    background: ${e=>e.$isActive?e.theme.colors.primary:e.theme.colors.primary+"05"};
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    border-radius: 8px;
  }
`,d=Array.from({length:100}).map((e,l)=>{const i=["🍎","🍌","🥕","🍦","🚗","⚽","🦋","🍭","🎈","⭐","🍓","🧸","🚁","🐳","🍕","🦁","🦖","🍩","🎸","🚀","🍒","🍇","🍔","🍰","🚲","⛵","🎨","🧩","🦄","🐼","🐶","🐱","🦊","🐸","🐧","🦉","🐝","🐞","🐙","🐠"];return{value:l+1,emoji:i[l%i.length]}}),W=()=>{const[e,l]=g.useState(0),i=d[e],x=j.useMemo(()=>{const a=[];for(let s=0;s<6;s++)for(let r=0;r<6;r++)s>=2&&s<=3&&r>=2&&r<=3||a.push({r:s,c:r});return[...a].sort(()=>Math.random()-.5).slice(0,i.value).map(s=>{const r=16.666666666666668,m=20+Math.random()*60,v=20+Math.random()*60,y=s.c*r+m*r/100;return{top:`${s.r*r+v*r/100}%`,left:`${y}%`,rotate:Math.random()*40-20}})},[i.value]),u=()=>{e<d.length-1&&l(e+1)},f=()=>{e>0&&l(e-1)};return t.jsx(b,{"data-testid":"view-learn-numbers",children:t.jsx(w,{children:t.jsxs($,{"data-testid":"activity-area",children:[t.jsx(z,{icon:N,title:"Learn Numbers",subtitle:"Discover numbers and count fun things together!",streak:0}),t.jsxs(A,{children:[t.jsx(M,{animate:{scale:[1,1.1,1],opacity:[.1,.15,.1]},transition:{duration:4,repeat:1/0,ease:"easeInOut"}}),t.jsx(p,{mode:"wait",children:t.jsx(P,{initial:{scale:.2,opacity:0,rotate:-20,y:40},animate:{scale:1,opacity:1,rotate:0,y:0},exit:{scale:1.5,opacity:0,rotate:20,y:-40},transition:{type:"spring",stiffness:300,damping:15},onClick:()=>h(i.value.toString()),children:i.value},i.value)}),i.value<=9&&t.jsx(T,{children:t.jsx(p,{mode:"popLayout",children:x.map((o,a)=>t.jsx(H,{$top:o.top,$left:o.left,initial:{scale:0,opacity:0},animate:{scale:1,opacity:1,rotate:o.rotate},exit:{scale:0,opacity:0},transition:{delay:a*.05,type:"spring"},whileHover:{scale:1.3,rotate:o.rotate+10},whileTap:{scale:.8},onClick:()=>h((a+1).toString()),children:i.emoji},`${i.value}-${a}`))})})]}),t.jsxs(C,{children:[t.jsx(c.div,{whileHover:{scale:1.1},whileTap:{scale:.9},children:t.jsx(S,{onClick:f})}),t.jsx(c.div,{animate:{scale:[1,1.05,1]},transition:{duration:2,repeat:1/0},children:t.jsx(k,{text:i.value.toString(),size:70})}),t.jsx(c.div,{whileHover:{scale:1.1},whileTap:{scale:.9},children:t.jsx(I,{onClick:u})})]}),t.jsx(L,{children:d.map((o,a)=>t.jsx(D,{$isActive:e===a,onClick:()=>l(a),whileTap:{scale:.9},children:o.value},o.value))})]})})})};export{W as default};

import{k as d,s as f,r as x,p as e,P as b,W as j,Y as C,a0 as u,Z as T,K as $,$ as k,a1 as m,a2 as v,v as _}from"./index-C6BBkSek.js";import{C as w}from"./ChallengeHeader-6svzIyZI.js";import{D as S,P as F}from"./learnStyles-62br4M05.js";import{B as A,M as B,G as g}from"./map-pin-BxSyGXFm.js";import{C as z}from"./circle-question-mark-DphEFziJ.js";const L=d(f.div)`
  background: ${i=>i.$active?i.$color:i.theme.colors.surface};
  border: 2px solid ${i=>i.$active?i.$color:i.theme.colors.primary+"10"};
  border-radius: 20px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  width: 140px;
  box-shadow: ${i=>i.$active?`0 10px 20px ${i.$color}40`:"none"};

  @media (max-width: 768px) {
    width: calc(50% - 10px);
    max-width: 150px;
    padding: 12px;
  }

  h3 {
    margin: 0;
    color: ${i=>i.$active?"white":i.$color};
    font-size: 1.1rem;
    text-align: center;
    font-weight: 800;
  }

  span {
    font-size: 0.8rem;
    font-weight: 700;
    color: ${i=>i.$active?"white":i.theme.colors.textSecondary};
    opacity: ${i=>i.$active?1:.7};
  }
`,D=d.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  margin-top: 0;
  font-size: 0.85rem;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid ${i=>i.theme.colors.primary}15;

  th,
  td {
    padding: 16px;
    text-align: left;
    border-bottom: 1px solid ${i=>i.theme.colors.primary}10;
  }

  th {
    background: ${i=>i.theme.colors.primary}08;
    color: ${i=>i.theme.colors.primary};
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 0.75rem;
  }

  tr:last-child td {
    border-bottom: none;
  }

  tr:hover td {
    background: ${i=>i.theme.colors.primary}04;
  }
`,W=d.div`
  display: flex;
  gap: 12px;
  margin-bottom: 30px;
  justify-content: center;
  flex-wrap: wrap;
`,I=[{id:"ten_lakh_crores",label:"10 Lakh Crores",value:1e13,color:"#6366F1",desc:"10,00,00,00,00,000"},{id:"lakh_crores",label:"Lakh Crores",value:1e12,color:"#8B5CF6",desc:"1,00,00,00,00,000"},{id:"hundred_crores",label:"100 Crores",value:1e9,color:"#D946EF",desc:"1,00,00,00,000"},{id:"ten_crores",label:"10 Crores",value:1e8,color:"#F43F5E",desc:"10,00,00,000"},{id:"crores",label:"Crores",value:1e7,color:"#FB7185",desc:"1,00,00,000"},{id:"ten_lakhs",label:"10 Lakhs",value:1e6,color:"#FB923C",desc:"10,00,000"},{id:"lakhs",label:"Lakhs",value:1e5,color:"#FBBF24",desc:"1,00,000"},{id:"thousands",label:"Thousands",value:1e3,color:"#2DD4BF",desc:"1,000"},{id:"hundreds",label:"Hundreds",value:100,color:"#34D399",desc:"100"},{id:"tens",label:"Tens",value:10,color:"#60A5FA",desc:"10"},{id:"ones",label:"Ones",value:1,color:"#94A3B8",desc:"1"}],E=[{id:"quadrillions",label:"Quadrillions",value:1e15,color:"#6366F1",desc:"1,000,000,000,000,000"},{id:"trillions",label:"Trillions",value:1e12,color:"#8B5CF6",desc:"1,000,000,000,000"},{id:"billions",label:"Billions",value:1e9,color:"#D946EF",desc:"1,000,000,000"},{id:"millions",label:"Millions",value:1e6,color:"#F43F5E",desc:"1,000,000"},{id:"thousands",label:"Thousands",value:1e3,color:"#2DD4BF",desc:"1,000"},{id:"hundreds",label:"Hundreds",value:100,color:"#34D399",desc:"100"},{id:"tens",label:"Tens",value:10,color:"#60A5FA",desc:"10"},{id:"ones",label:"Ones",value:1,color:"#94A3B8",desc:"1"}],P=[{value:"1,000",indian:"Thousand",intl:"Thousand"},{value:"10,000",indian:"10 Thousand",intl:"10 Thousand"},{value:"100,000",indian:"1 Lakh",intl:"100 Thousand"},{value:"1,000,000",indian:"10 Lakhs",intl:"1 Million"},{value:"10,000,000",indian:"1 Crore",intl:"10 Million"},{value:"100,000,000",indian:"10 Crores",intl:"100 Million"},{value:"1,000,000,000",indian:"100 Crores",intl:"1 Billion"},{value:"1,000,000,000,000",indian:"1 Lakh Crores",intl:"1 Trillion"},{value:"1,000,000,000,000,000",indian:"100 Lakh Crores",intl:"1 Quadrillion"}],U=()=>{const i=_.en,[s,c]=x.useState("indian"),[r,y]=x.useState("ones"),n=s==="indian"?I:E,a=n.find(l=>l.id===r)||n[n.length-1],h=l=>{if(s==="indian"){const t=l.toString();let o=t.substring(t.length-3);const p=t.substring(0,t.length-3);return p!==""&&(o=","+o),p.replace(/\B(?=(\d{2})+(?!\d))/g,",")+o}return l.toLocaleString("en-US")};return e.jsx(b,{"data-testid":"view-place-values",children:e.jsxs(j,{children:[e.jsxs(C,{"data-testid":"activity-area",children:[e.jsx(w,{icon:A,title:i.math_placeValues,subtitle:i.pv_subtitle,streak:0}),e.jsxs(W,{children:[e.jsxs(u,{$isActive:s==="indian",onClick:()=>c("indian"),children:[e.jsx(B,{size:16})," ",i.pv_indian," (",i.pv_lakhs,")"]}),e.jsxs(u,{$isActive:s==="intl",onClick:()=>c("intl"),children:[e.jsx(g,{size:16})," ",i.pv_international," (",i.pv_millions,")"]})]}),e.jsxs(S,{children:[e.jsx(F,{animate:{scale:[1,1.1,1],opacity:[.1,.2,.1]},transition:{duration:4,repeat:1/0,ease:"easeInOut"}}),e.jsx(T,{mode:"wait",children:e.jsxs(f.div,{initial:{scale:.8,opacity:0,y:20},animate:{scale:1,opacity:1,y:0},exit:{scale:1.2,opacity:0,y:-20},transition:{type:"spring",stiffness:300,damping:15},style:{display:"flex",flexDirection:"column",alignItems:"center",zIndex:1},children:[e.jsx("div",{style:{fontSize:"min(4rem, 10vw)",fontWeight:900,color:a.color,textAlign:"center",wordBreak:"break-all",textShadow:`0 10px 20px ${a.color}20`,lineHeight:1.1},children:h(a.value)}),e.jsx($,{fontSize:"xl",color:"primary",children:a.label}),e.jsx("p",{style:{fontWeight:800,opacity:.5,letterSpacing:"2px",fontSize:"0.75rem",textTransform:"uppercase",color:a.color},children:s==="indian"?i.pv_indian.toUpperCase():i.pv_international.toUpperCase()})]},r+s)})]}),e.jsx("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",justifyContent:"center",width:"100%",maxWidth:"900px"},children:n.map(l=>e.jsxs(L,{$color:l.color,$active:r===l.id,onClick:()=>y(l.id),whileHover:{scale:1.05},whileTap:{scale:.95},children:[e.jsx("h3",{children:l.label}),e.jsx("span",{children:h(l.value)})]},l.id))}),e.jsxs("div",{style:{marginTop:"60px",width:"100%",maxWidth:"800px"},children:[e.jsxs("h3",{style:{display:"flex",alignItems:"center",gap:"10px",color:"#6366F1",fontWeight:900},children:[e.jsx(g,{size:24})," ",i.pv_comparisonTable]}),e.jsx("div",{style:{overflowX:"auto",width:"100%",borderRadius:"20px",marginTop:"15px"},children:e.jsxs(D,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:i.pv_number}),e.jsx("th",{children:i.pv_indian}),e.jsx("th",{children:i.pv_international})]})}),e.jsx("tbody",{children:P.map((l,t)=>e.jsxs("tr",{children:[e.jsx("td",{style:{fontWeight:800,fontFamily:"monospace",color:"#6366F1",fontSize:"1rem"},children:l.value}),e.jsx("td",{style:{fontWeight:700,color:"#8B5CF6"},children:l.indian}),e.jsx("td",{style:{fontWeight:700,color:"#EC4899"},children:l.intl})]},t))})]})})]})]}),e.jsxs(k,{"data-testid":"settings-area",children:[e.jsxs(m,{children:[e.jsxs(v,{children:[e.jsx(z,{size:16})," ",i.pv_commaRule]}),e.jsxs("div",{style:{fontSize:"0.85rem",lineHeight:1.6,fontWeight:600},children:[e.jsxs("p",{children:[e.jsxs("strong",{style:{color:"#6366F1"},children:[i.pv_indian,":"]})," 1st comma after 3 digits, then every 2 digits. (1,00,00,000)"]}),e.jsxs("p",{style:{marginTop:"12px"},children:[e.jsxs("strong",{style:{color:"#EC4899"},children:[i.pv_international,":"]})," Commas after every 3 digits. (10,000,000)"]})]})]}),e.jsxs(m,{children:[e.jsx(v,{children:i.pv_quickTip}),e.jsxs("div",{style:{fontSize:"0.85rem",lineHeight:1.6,fontWeight:600,opacity:.9},children:[e.jsx("p",{children:"1 Million = 10 Lakhs"}),e.jsx("p",{style:{marginTop:"4px"},children:"1 Billion = 100 Crores"}),e.jsx("p",{style:{marginTop:"4px"},children:"1 Trillion = 1 Lakh Crores"})]})]})]})]})})};export{U as default};

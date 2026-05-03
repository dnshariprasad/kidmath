import{k as o,s as y,r as x,p as e,P as f,R as b,W as j,$ as m,Y as C,K as S,_ as T,a0 as p,a1 as u}from"./index-C9GQ7pMr.js";import{C as $}from"./ChallengeHeader-BrHaadvX.js";import{D as k,P as A}from"./learnStyles-BVSwhalq.js";import{B as w,M as I,G as g}from"./map-pin-C_vG1pPQ.js";import{C as F}from"./circle-question-mark-CilDZGJJ.js";const B=o(y.div)`
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
`,L=o.table`
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
`,z=o.div`
  display: flex;
  gap: 12px;
  margin-bottom: 30px;
  justify-content: center;
  flex-wrap: wrap;
`,D=[{id:"ten_lakh_crores",label:"10 Lakh Crores",value:1e13,color:"#6366F1",desc:"10,00,00,00,00,000"},{id:"lakh_crores",label:"Lakh Crores",value:1e12,color:"#8B5CF6",desc:"1,00,00,00,00,000"},{id:"hundred_crores",label:"100 Crores",value:1e9,color:"#D946EF",desc:"1,00,00,00,000"},{id:"ten_crores",label:"10 Crores",value:1e8,color:"#F43F5E",desc:"10,00,00,000"},{id:"crores",label:"Crores",value:1e7,color:"#FB7185",desc:"1,00,00,000"},{id:"ten_lakhs",label:"10 Lakhs",value:1e6,color:"#FB923C",desc:"10,00,000"},{id:"lakhs",label:"Lakhs",value:1e5,color:"#FBBF24",desc:"1,00,000"},{id:"thousands",label:"Thousands",value:1e3,color:"#2DD4BF",desc:"1,000"},{id:"hundreds",label:"Hundreds",value:100,color:"#34D399",desc:"100"},{id:"tens",label:"Tens",value:10,color:"#60A5FA",desc:"10"},{id:"ones",label:"Ones",value:1,color:"#94A3B8",desc:"1"}],E=[{id:"quadrillions",label:"Quadrillions",value:1e15,color:"#6366F1",desc:"1,000,000,000,000,000"},{id:"trillions",label:"Trillions",value:1e12,color:"#8B5CF6",desc:"1,000,000,000,000"},{id:"billions",label:"Billions",value:1e9,color:"#D946EF",desc:"1,000,000,000"},{id:"millions",label:"Millions",value:1e6,color:"#F43F5E",desc:"1,000,000"},{id:"thousands",label:"Thousands",value:1e3,color:"#2DD4BF",desc:"1,000"},{id:"hundreds",label:"Hundreds",value:100,color:"#34D399",desc:"100"},{id:"tens",label:"Tens",value:10,color:"#60A5FA",desc:"10"},{id:"ones",label:"Ones",value:1,color:"#94A3B8",desc:"1"}],N=[{value:"1,000",indian:"Thousand",intl:"Thousand"},{value:"10,000",indian:"10 Thousand",intl:"10 Thousand"},{value:"100,000",indian:"1 Lakh",intl:"100 Thousand"},{value:"1,000,000",indian:"10 Lakhs",intl:"1 Million"},{value:"10,000,000",indian:"1 Crore",intl:"10 Million"},{value:"100,000,000",indian:"10 Crores",intl:"100 Million"},{value:"1,000,000,000",indian:"100 Crores",intl:"1 Billion"},{value:"1,000,000,000,000",indian:"1 Lakh Crores",intl:"1 Trillion"},{value:"1,000,000,000,000,000",indian:"100 Lakh Crores",intl:"1 Quadrillion"}],H=()=>{const[i,d]=x.useState("indian"),[a,v]=x.useState("ones"),n=i==="indian"?D:E,t=n.find(l=>l.id===a)||n[n.length-1],c=l=>{if(i==="indian"){const s=l.toString();let r=s.substring(s.length-3);const h=s.substring(0,s.length-3);return h!==""&&(r=","+r),h.replace(/\B(?=(\d{2})+(?!\d))/g,",")+r}return l.toLocaleString("en-US")};return e.jsx(f,{"data-testid":"view-place-values",children:e.jsxs(b,{children:[e.jsxs(j,{"data-testid":"activity-area",children:[e.jsx($,{icon:w,title:"Place Values",subtitle:"Compare Indian vs International Number Systems!",streak:0}),e.jsxs(z,{children:[e.jsxs(m,{$isActive:i==="indian",onClick:()=>d("indian"),children:[e.jsx(I,{size:16})," Indian System (Lakhs)"]}),e.jsxs(m,{$isActive:i==="intl",onClick:()=>d("intl"),children:[e.jsx(g,{size:16})," International System (Millions)"]})]}),e.jsxs(k,{children:[e.jsx(A,{animate:{scale:[1,1.1,1],opacity:[.1,.2,.1]},transition:{duration:4,repeat:1/0,ease:"easeInOut"}}),e.jsx(C,{mode:"wait",children:e.jsxs(y.div,{initial:{scale:.8,opacity:0,y:20},animate:{scale:1,opacity:1,y:0},exit:{scale:1.2,opacity:0,y:-20},transition:{type:"spring",stiffness:300,damping:15},style:{display:"flex",flexDirection:"column",alignItems:"center",zIndex:1},children:[e.jsx("div",{style:{fontSize:"min(4rem, 10vw)",fontWeight:900,color:t.color,textAlign:"center",wordBreak:"break-all",textShadow:`0 10px 20px ${t.color}20`,lineHeight:1.1},children:c(t.value)}),e.jsx(S,{fontSize:"xl",color:"primary",children:t.label}),e.jsx("p",{style:{fontWeight:800,opacity:.5,letterSpacing:"2px",fontSize:"0.75rem",textTransform:"uppercase",color:t.color},children:i==="indian"?"INDIAN SYSTEM":"INTERNATIONAL SYSTEM"})]},a+i)})]}),e.jsx("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",justifyContent:"center",width:"100%",maxWidth:"900px"},children:n.map(l=>e.jsxs(B,{$color:l.color,$active:a===l.id,onClick:()=>v(l.id),whileHover:{scale:1.05},whileTap:{scale:.95},children:[e.jsx("h3",{children:l.label}),e.jsx("span",{children:c(l.value)})]},l.id))}),e.jsxs("div",{style:{marginTop:"60px",width:"100%",maxWidth:"800px"},children:[e.jsxs("h3",{style:{display:"flex",alignItems:"center",gap:"10px",color:"#6366F1",fontWeight:900},children:[e.jsx(g,{size:24})," COMPARISON TABLE"]}),e.jsx("div",{style:{overflowX:"auto",width:"100%",borderRadius:"20px",marginTop:"15px"},children:e.jsxs(L,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Number"}),e.jsx("th",{children:"Indian System"}),e.jsx("th",{children:"International System"})]})}),e.jsx("tbody",{children:N.map((l,s)=>e.jsxs("tr",{children:[e.jsx("td",{style:{fontWeight:800,fontFamily:"monospace",color:"#6366F1",fontSize:"1rem"},children:l.value}),e.jsx("td",{style:{fontWeight:700,color:"#8B5CF6"},children:l.indian}),e.jsx("td",{style:{fontWeight:700,color:"#EC4899"},children:l.intl})]},s))})]})})]})]}),e.jsxs(T,{"data-testid":"settings-area",children:[e.jsxs(p,{children:[e.jsxs(u,{children:[e.jsx(F,{size:16})," Comma Rule"]}),e.jsxs("div",{style:{fontSize:"0.85rem",lineHeight:1.6,fontWeight:600},children:[e.jsxs("p",{children:[e.jsx("strong",{style:{color:"#6366F1"},children:"Indian System:"})," 1st comma after 3 digits, then every 2 digits. (1,00,00,000)"]}),e.jsxs("p",{style:{marginTop:"12px"},children:[e.jsx("strong",{style:{color:"#EC4899"},children:"International:"})," Commas after every 3 digits. (10,000,000)"]})]})]}),e.jsxs(p,{children:[e.jsx(u,{children:"Quick Tip! 💡"}),e.jsxs("div",{style:{fontSize:"0.85rem",lineHeight:1.6,fontWeight:600,opacity:.9},children:[e.jsx("p",{children:"1 Million = 10 Lakhs"}),e.jsx("p",{style:{marginTop:"4px"},children:"1 Billion = 100 Crores"}),e.jsx("p",{style:{marginTop:"4px"},children:"1 Trillion = 1 Lakh Crores"})]})]})]})]})})};export{H as default};

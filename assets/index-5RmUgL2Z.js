import{k as s,s as z,r as n,n as k,l as L,p as r,y as P,A as N,E as u,F as g,G as A,J as I,N as B,Q as G}from"./index-C9GQ7pMr.js";import{L as U,U as D}from"./user-plus-CIEplm1w.js";const M=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 80px);
  padding: 20px;
  background: ${({theme:e})=>e.colors.background};
`,W=s(z.div)`
  background: ${({theme:e})=>e.colors.surface};
  padding: 40px;
  border-radius: 32px;
  box-shadow: ${({theme:e})=>{var i;return((i=e.shadows)==null?void 0:i.xl)||"0 20px 40px rgba(0, 0, 0, 0.1)"}};
  width: 100%;
  max-width: 440px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  border: 2px solid ${({theme:e})=>e.colors.border};

  @media (max-width: 480px) {
    padding: 30px 20px;
    gap: 20px;
    border-radius: 24px;
  }
`,q=s.h2`
  font-size: 2.2rem;
  font-weight: 900;
  color: ${({theme:e})=>e.colors.primary};
  text-align: center;
  margin-bottom: 8px;

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`,h=s.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,m=s.label`
  font-weight: 800;
  font-size: 0.95rem;
  color: ${({theme:e})=>e.colors.textSecondary};
  margin-left: 4px;
`,f=s.input`
  padding: 14px 18px;
  border-radius: 16px;
  border: 2px solid ${({theme:e})=>e.colors.border};
  background: ${({theme:e})=>e.colors.surfaceVariant};
  color: ${({theme:e})=>e.colors.textPrimary};
  font-size: 1rem;
  outline: none;
  transition: all 0.2s ease;
  font-weight: 600;

  &::placeholder {
    color: ${({theme:e})=>e.colors.textSecondary};
    opacity: 0.5;
  }

  &:focus {
    border-color: ${({theme:e})=>e.colors.primary};
    box-shadow: 0 0 0 4px ${({theme:e})=>e.colors.primary}20;
  }
`,F=s.p`
  color: ${({theme:e})=>e.colors.warning||"#ef4444"};
  font-size: 0.9rem;
  font-weight: 700;
  text-align: center;
  background: ${({theme:e})=>e.colors.warning}15;
  padding: 10px;
  border-radius: 12px;
`,H=s.p`
  text-align: center;
  font-size: 1rem;
  color: ${({theme:e})=>e.colors.textSecondary};
  margin-top: 10px;
  font-weight: 600;

  span {
    color: ${({theme:e})=>e.colors.primary};
    font-weight: 900;
    cursor: pointer;
    margin-left: 4px;
    &:hover {
      text-decoration: underline;
    }
  }
`,K=s.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background: ${({theme:e})=>e.colors.surface};
  color: ${({theme:e})=>e.colors.textPrimary};
  border: 2px solid ${({theme:e})=>e.colors.border};
  padding: 14px;
  border-radius: 16px;
  font-size: 1.1rem;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.2s ease;
  width: 100%;

  &:hover {
    background: ${({theme:e})=>e.colors.surfaceVariant};
    border-color: ${({theme:e})=>e.colors.primary};
    transform: translateY(-2px);
    box-shadow: ${({theme:e})=>{var i;return((i=e.shadows)==null?void 0:i.md)||"0 4px 12px rgba(0, 0, 0, 0.1)"}};
  }

  &:active {
    transform: translateY(0);
  }
`,V=s.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin: 10px 0;

  &::before,
  &::after {
    content: "";
    flex: 1;
    height: 2px;
    background: ${({theme:e})=>e.colors.border};
  }

  span {
    font-size: 0.85rem;
    font-weight: 800;
    color: ${({theme:e})=>e.colors.textSecondary};
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`,T=()=>{const[e,i]=n.useState(!0),[c,v]=n.useState(""),[d,$]=n.useState(""),[p,S]=n.useState(""),[y,l]=n.useState(""),[w,b]=n.useState(!1),x=k(),j=L(),C=async a=>{a.preventDefault(),l(""),b(!0);try{if(e){const o=(await N(u,c,d)).user;x(g({uid:o.uid,email:o.email,displayName:o.displayName}))}else{const o=(await A(u,c,d)).user;await I(o,{displayName:p}),x(g({uid:o.uid,email:o.email,displayName:p}))}j("/")}catch(t){t instanceof Error?l(t.message):l(String(t))}finally{b(!1)}},E=async()=>{const a=new B;try{const o=(await G(u,a)).user;x(g({uid:o.uid,email:o.email,displayName:o.displayName})),j("/")}catch(t){t instanceof Error?l(t.message):l(String(t))}};return r.jsx(M,{children:r.jsxs(W,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},children:[r.jsx(q,{children:e?"Welcome Back!":"Join Kiddoo"}),r.jsxs("form",{onSubmit:C,style:{display:"flex",flexDirection:"column",gap:"20px"},children:[!e&&r.jsxs(h,{children:[r.jsx(m,{children:"Kid's Name"}),r.jsx(f,{type:"text",placeholder:"Enter name",value:p,onChange:a=>S(a.target.value),required:!0})]}),r.jsxs(h,{children:[r.jsx(m,{children:"Email"}),r.jsx(f,{type:"email",placeholder:"Enter email",value:c,onChange:a=>v(a.target.value),required:!0})]}),r.jsxs(h,{children:[r.jsx(m,{children:"Password"}),r.jsx(f,{type:"password",placeholder:"Enter password",value:d,onChange:a=>$(a.target.value),required:!0})]}),y&&r.jsx(F,{children:y}),r.jsx(P,{title:w?"Please wait...":e?"Login":"Sign Up",onClick:()=>{},variant:"primary",type:"submit",icon:e?r.jsx(U,{size:20}):r.jsx(D,{size:20}),disabled:w})]}),r.jsx(V,{children:r.jsx("span",{children:"OR"})}),r.jsxs(K,{type:"button",onClick:E,children:[r.jsxs("svg",{viewBox:"0 0 24 24",width:"24",height:"24",children:[r.jsx("path",{fill:"#4285F4",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),r.jsx("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),r.jsx("path",{fill:"#FBBC05",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"}),r.jsx("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"})]}),"Sign in with Google"]}),r.jsxs(H,{children:[e?"Don't have an account? ":"Already have an account? ",r.jsx("span",{onClick:()=>i(!e),children:e?"Sign Up":"Login"})]})]})})};export{T as default};

import{k as t,s as i}from"./index-C6BBkSek.js";const r=t.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`,a=t(i.div)`
  position: absolute;
  width: 200px;
  height: 200px;
  background: ${e=>e.theme.colors.primary}10;
  border-radius: 50%;
  z-index: 0;

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`,s=t(i.div)`
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 900;
  color: ${e=>e.theme.colors.primary};
  font-family: ${e=>e.theme.fonts.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  line-height: 1.2;
  text-align: center;
  flex-direction: column;
  z-index: 1;
  text-shadow: 0 10px 20px ${e=>e.theme.colors.primary}15;
`,n=t.span`
  font-size: clamp(4rem, 12vw, 8rem);
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.1));
`,c=t.p`
  font-size: ${e=>e.theme.fontSize.sm};
  color: ${e=>e.theme.colors.textSecondary};
  font-family: ${e=>e.theme.fonts.secondary};
  margin: 0 0;
  font-weight: 600;
  max-width: 400px;
`,m=t(i.div)`
  background: ${e=>e.$isActive?e.theme.colors.primary:e.theme.colors.surface};
  border: 2px solid
    ${e=>e.$isActive?e.theme.colors.primary:e.theme.colors.primary+"15"};
  border-radius: 24px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  width: 100%;
  max-width: 180px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${e=>e.$isActive?`0 10px 20px ${e.theme.colors.primary}30`:"none"};

  &:hover {
    border-color: ${e=>e.theme.colors.primary};
    transform: translateY(-4px);
    background: ${e=>e.$isActive?e.theme.colors.primary:e.theme.colors.primary+"05"};
  }

  * {
    color: ${e=>e.$isActive?"white":"inherit"};
    opacity: ${e=>e.$isActive?1:"inherit"};
  }

  h3 {
    color: ${e=>e.$isActive?"white":e.theme.colors.primary};
    opacity: 1;
  }
`,l=t.span`
  font-size: 3.5rem;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
`,h=t.h3`
  font-size: ${e=>e.theme.fontSize.md};
  font-weight: 800;
  color: ${e=>e.theme.colors.primary};
  font-family: ${e=>e.theme.fonts.primary};
  margin: 0;
`,p=t.p`
  font-size: ${e=>e.theme.fontSize.sm};
  color: ${e=>e.theme.colors.textSecondary};
  font-family: ${e=>e.theme.fonts.secondary};
  margin: 0;
  text-align: center;
  font-weight: 500;
  opacity: ${e=>e.$isActive?1:.8};
`;export{s as B,r as D,n as E,a as P,c as S,m as a,l as b,h as c,p as d};

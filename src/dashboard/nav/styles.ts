import styled from "styled-components";

// Navbar Container
export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background-color: ${(props) => props.theme.nav};
  color: white;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 10px 15px;
  }
`;

// App Name (Logo)
export const AppName = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  color: ${(props) => props.theme.main};

  &:hover {
    opacity: 0.8;
    color: ${(props) => props.theme.main};
  }
`;

// // Navigation Links Container
// export const NavLinks = styled.div`
//   display: flex;
//   align-items: center;
// `;

// // Individual Navigation Link
// export const NavLink = styled(Link)`
//   margin-left: 20px;
//   color: white;
//   text-decoration: none;
//   font-size: 1rem;

//   &:hover {
//     opacity: 0.8;
//   }

//   @media (max-width: 768px) {
//     margin-left: 10px;
//   }
// `;

import styled from "styled-components";

export const MenuContainer = styled.div`
  width: 250px;
  background-color: ${(props) => props.theme.nav};
  padding: 10px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid #ddd;
  }
`;

export const MenuSection = styled.div`
  margin-bottom: 10px;
`;

export const MenuHeading = styled.div`
  color: #ffffff;
  font-weight: bold;
  cursor: pointer;
  padding: 10px;
  background-color: #a35c7a;
  border-radius: 4px;
  @media (max-width: 768px) {
    background-color: #a35c7a;
    border-radius: 0;
    border-bottom: none;
  }
`;

export const MenuList = styled.ul<{ isVisible: boolean }>`
  list-style: none;
  padding: 0;
  margin: 0;
  display: ${(props) => (props.isVisible ? "block" : "none")};
  color: #ffffff;
  @media (max-width: 768px) {
    padding-left: 10px;
  }
`;

export const MenuItem = styled.li`
  padding: 8px;
  background-color: #c890a7;
  border-radius: 4px;
  margin-top: 5px;

  cursor: pointer;

  &:hover {
    color: #eee;
  }
`;

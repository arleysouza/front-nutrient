import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useUser } from "../hooks";
import { Link } from "react-router-dom";

export default function AdmMenu() {
    const {token, logout} = useUser();

  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    setIsOpen(false);
    logout();
  }

  return (
    <Wrapper ref={menuRef}>
      <UserIcon onClick={toggleMenu}>{token?.alias.charAt(0).toUpperCase()}</UserIcon>
      {isOpen && (
        <DropdownMenu>
          <StyledLink to="/adm" onClick={() => setIsOpen(false)}>
            Gestão de usuários
          </StyledLink>
          <StyledLink to="/settings" onClick={() => setIsOpen(false)}>
            Configurações
          </StyledLink>
          <MenuItemBorderTop onClick={ handleLogout }>
            Sair
          </MenuItemBorderTop>
        </DropdownMenu>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const UserIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #e48226;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  cursor: pointer;
`;

const DropdownMenu = styled.div`
  position: absolute;
  right: 0;
  top: 50px;
  background-color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  overflow: hidden;
  box-sizing: border-box;
  width: max-content; /* Ajusta a largura ao conteúdo */
  z-index: 10;
`;

const MenuItem = styled.div`
  display: flex;
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const MenuItemBorderTop = styled(MenuItem)`
  border-top: 1px solid #ccc;
`;

const StyledLink = styled(Link)`
  display: flex;
  padding: 10px 20px;
  color: inherit; /* Inherits the color from the parent */
  text-decoration: none; /* Removes the underline */
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

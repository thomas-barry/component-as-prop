import React, { useState } from "react";
import styled from "@emotion/styled";

const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  padding: 4px 8px;
  color: white;
  border: none;
  border-radius: 4px;
  background-color: #9f9fc0;
  cursor: pointer;
`;

const Button = ({ children, onClick, disabled, Icon, ...rest }) => {
  const [hovered, setHovered] = useState();

  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Icon fontSize="small" color="warning" hovered={hovered} />
      {children}
    </StyledButton>
  );
};

export default Button;

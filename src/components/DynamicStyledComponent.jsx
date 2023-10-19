"use client";
import styled from "styled-components";

const DynamicStyledComponent = styled.div`
  /* Your common CSS styles for all tags */
  /* Add more common CSS styles as needed */
  /* Additional CSS properties passed via props */
  ${(props) => props.theme}
`;

export default DynamicStyledComponent;

// ${(props) => props.additionalStyles && props.additionalStyles};

// color: ${(props) => props.textColor || "black"};

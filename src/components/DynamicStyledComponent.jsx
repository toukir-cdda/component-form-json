import styled from "styled-components";

const DynamicStyledComponent = styled.div`
  /* Your common CSS styles for all tags */
  color: ${(props) => props.textColor || "black"};
  /* Add more common CSS styles as needed */

  /* Additional CSS properties passed via props */
  ${(props) => props.additionalStyles && props.additionalStyles}
`;

export default DynamicStyledComponent;

// ${(props) => props.additionalStyles && props.additionalStyles};

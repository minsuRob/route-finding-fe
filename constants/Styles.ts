import styled from "styled-components/native";

export const ThemeText = styled.Text<{ isDark: boolean }>`
  color: ${(props) => (props.isDark ? "#FFF" : "#000")};
`;

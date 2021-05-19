import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

// to make sure every screen will at least fill the parent height, or scroll if it needs to.
export default function Screen({ children }: { children: React.ReactNode }) {
  return <Container id="screen">{children}</Container>;
}

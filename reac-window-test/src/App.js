import React from "react";
import "./styles.css";
import styled from "@emotion/styled";
import Container from "./components/Container";

const MainDiv = styled.div`
  display: flex;
`;

export default function App() {
  return (
    <MainDiv className="App">
      {/* <div style={{ width: "300px" }}>
        <nobr>Flex demo</nobr>
      </div> */}
      <Container />
    </MainDiv>
  );
}

import React from "react";
import styled from "@emotion/styled";

const ItemDiv = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: #9f9;
  flex-direction: column;
`;

const ItemContentDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background: #9f9;
`;

function Item({ id, status, title }) {
  return (
    <ItemDiv>
      <ItemContentDiv>Item: {id}</ItemContentDiv>
      <ItemContentDiv>title: {title}</ItemContentDiv>
      <ItemContentDiv>status is {status}</ItemContentDiv>
    </ItemDiv>
  );
}

export default Item;

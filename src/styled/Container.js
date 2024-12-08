import styled from "@emotion/styled";

export const ImageGrid = styled.div`
  display: flex;
  position: relative;
  border: #eee 0px solid;
  display: flex;
  justify-content: start;
  box-sizing: border-box;
  flex-wrap: wrap;
`;

export const ImageGridHeader = styled.div`
  display: flex;
  margin: 10px;
`;

export const ImageGridSection = styled.div`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
`;

export const ImageGridItem = styled.div`
  flex-basis: ${({ flexBasis }) => 100 / flexBasis}%;
  border: #ddd 0px solid;
  display: flex;
  box-sizing: border-box;
  &:before {
    content: "";
    display: table;
    padding-top: 100%;
  }
  &:hover,
  &:focus {
    z-index: 100;
    & > div {
      transform: scale(1.2);
      transition: transform 0.3s cubic-bezier(0.18, 0.89, 0.11, 2.21);

      box-shadow: 0 0 0 2px #3131f5 inset, 0 2px 8px 0.3px rgba(0, 18, 41, 0.12),
        0 0.5px 2px 0.5px rgba(0, 18, 41, 0.19);
    }
    button {
      opacity: 1;
      transition: opacity 0.2s ease-out 0.05s;
    }
  }
`;

export const ImageGridItemLeftBottom = styled.div`
  box-sizing: border-box;
  position: absolute;
  left: 5px;
  bottom: 5px;
`;

export const ImageGridItemRightBottom = styled.div`
  box-sizing: border-box;
  position: absolute;
  right: 5px;
  bottom: 5px;
`;

export const ImageGridItemRightTop = styled.div`
  box-sizing: border-box;
  position: absolute;
  right: 5px;
  top: 5px;
`;

export const ImageGridInnerItem = styled.div`
  display: flex;
  position: relative;
  margin: 5px;
  flex: 1;
  box-sizing: border-box;
`;

export const ImageGridRoundButton = styled.button`
  width: 40px;
  height: 40px;
  border-width: 0;
  border-radius: 20px;
  background-color: #fff;
  opacity: 0;
`;

export const ImageGridToolbar = styled.div`
  position: -webkit-sticky;
  position: sticky;
  bottom: 10px;
  border-color: red;
  background-color: #999;
  box-sizing: border-box;
  z-index: 120;
  width 100%;
`;

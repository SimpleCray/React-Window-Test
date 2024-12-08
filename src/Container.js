import React, { useRef, useEffect, useState, useCallback, memo } from "react";
import Item from "./Item";
import memoize from "memoize-one";
import { FixedSizeList as List, areEqual } from "react-window";
import { useWindowSize } from "react-use";

import {
  ImageGrid,
  ImageGridHeader,
  ImageGridSection,
  ImageGridItem as ImageGridItemStyled,
  ImageGridItemLeftBottom,
  ImageGridItemRightBottom,
  ImageGridItemRightTop,
  ImageGridInnerItem,
  ImageGridRoundButton,
  ImageGridToolbar,
} from "./styled/Container";
import { Accordion } from "@trussworks/react-uswds";

const flexBasis = 6;

const arr = ["First Item", "Second Item", "Third Item", "Fourth Item"];

const data = Array.from({ length: 10000 }).map((_, idx) => {
  const title = "TITLE #" + idx;
  return {
    title,
    items: Array.from({ length: 10 + Math.random() * 100 }).map((el, idx) => ({
      id: idx,
      title: `${idx} ${title}`,
      status: Math.round(Math.random() * 100) % 2 === 1 ? "ON" : "OFF",
    })),
  };
});

const groupedData = data.reduce((acc, group) => {
  acc.push([
    {
      header: true,
      title: group.title,
    },
  ]);
  const groupItems = group.items;
  const groupItemsLength = groupItems.length;
  const rowCount = Math.ceil(groupItemsLength / flexBasis);
  for (let i = 0; i < rowCount; i++) {
    const rowArr = [];
    for (let j = 0; j < flexBasis; j++) {
      const idx = flexBasis * i + j;
      if (idx < groupItemsLength) {
        rowArr.push(groupItems[idx]);
      }
    }
    acc.push(rowArr);
  }
  return acc;
}, []);

console.log("groupedData.length:", groupedData.length);

const ImageGridItem = ({ id, status, flexBasis }) => (
  <ImageGridItemStyled flexBasis={flexBasis}>
    <ImageGridInnerItem>
      <Item id={id} status={status} />
      <ImageGridItemLeftBottom>
        <ImageGridRoundButton />
      </ImageGridItemLeftBottom>
      <ImageGridItemRightBottom>
        <ImageGridRoundButton />
        <ImageGridRoundButton />
      </ImageGridItemRightBottom>
      {/* <ImageGridItemRightTop>
        <ImageGridRoundButton />
      </ImageGridItemRightTop> */}
    </ImageGridInnerItem>
  </ImageGridItemStyled>
);

const RowItem = memo(({ data, index, style }) => {
  const { elementSize, flexBasis, items } = data;
  return (
    <div
      style={{
        ...style,
        boxSizing: "border-box",
      }}
    >
      <ImageGridSection>
        {items[index][0].header ? (
          <div
            style={{
              flexBasis: "100%",
              height: elementSize,
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            HEADER: {items[index][0].title}
          </div>
        ) : (
          items[index].map((item, i) => {
            return (
              <ImageGridItem
                id={item.id}
                title={item.status}
                status={item.status}
                flexBasis={flexBasis}
              />
            );
          })
        )}
      </ImageGridSection>
    </div>
  );
}, areEqual);

const createItemData = memoize((items, elementSize, flexBasis) => ({
  items,
  elementSize,
  flexBasis,
}));

function Container() {
  const containerRef = useRef();
  const { width } = useWindowSize();
  const [elementSize, setElementSize] = useState(100);

  useEffect(() => {
    console.log("NOW WIDTH IS:", containerRef.current.offsetWidth);
    setElementSize(containerRef.current.offsetWidth / flexBasis);
  }, [width, containerRef]);

  //const toggleItemActive = useCallback(() => {}, []);
  const itemData = createItemData(groupedData, elementSize, flexBasis);
  //const itemData = data[0].items;
  console.log("groupedData", groupedData);

  return (
    <div ref={containerRef} style={{ flex: 1, width: "100%" }}>
      <List
        style={{
          border: "#f0f 0px dotted",
          boxSizing: "border-box",
        }}
        height={450}
        itemCount={groupedData.length}
        itemData={itemData}
        itemSize={elementSize}
        width={"100%"}
      >
        {RowItem}
      </List>
    </div>
  );
}

export default Container;

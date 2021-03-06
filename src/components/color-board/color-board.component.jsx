import React, { useState } from 'react';
import {
  GridContextProvider,
  GridDropZone,
  GridItem,
  swap,
} from 'react-grid-dnd';

import { colorArray } from '../../constants/color';
import './color-board.styles.css';

const ColorBoard = () => {
  const [items, setItems] = useState(colorArray);

  const onChange = (_, sourceIndex, targetIndex, _1) => {
    const nextState = swap(items, sourceIndex, targetIndex);
    setItems(nextState);
  }

  return (
    <GridContextProvider onChange={onChange}>
      <GridDropZone
        boxesPerRow={8}
        rowHeight={46}
        className="grid-container"
      >
        {items.map((item) => (
          <GridItem key={item}>
            <div
              style={{
                backgroundColor: item,
              }}
              className="item"
            ></div>
          </GridItem>
        ))}
      </GridDropZone>
    </GridContextProvider>
  )
};

export default ColorBoard;
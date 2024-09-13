import { useState } from 'react';
import './App.css';
import {
  IconGrid3x3,
  IconGrid4x4,
  IconColumns2,
  IconLayoutGrid,
  IconColumns1,
  IconGridDots,
} from '@tabler/icons-react';
import GridImageComponent from './components/GridImageComponent';

function App() {
  const [columns, setColumns] = useState(1);
  const [rows, setRows] = useState(1);
  const [selectedButton, setSelectedButton] = useState(1);

  const handleSetColumnsAndRows = (columns, rows, buttonIndex) => {
    setColumns(columns);
    setRows(rows);
    setSelectedButton(buttonIndex); // Track the selected button
  };
  const iconsSize = 30;

  return (
    <div className="App">
      
      <div className="grid-button-set">
        <button
          onClick={() => {
            handleSetColumnsAndRows(1, 1, 1);
          }}
          className={selectedButton === 1 ? 'selected' : ''} 
        >
          <IconColumns1 stroke={2} size={iconsSize}/>
        </button>
        <button
          onClick={() => {
            handleSetColumnsAndRows(2, 1, 2);
          }}
          className={selectedButton === 2 ? 'selected' : ''}
        >
          <IconColumns2 stroke={2} size={iconsSize}/>
        </button>
        <button
          onClick={() => {
            handleSetColumnsAndRows(2, 2, 3);
          }}
          className={selectedButton === 3 ? 'selected' : ''}
        >
          <IconLayoutGrid stroke={2} size={iconsSize}/>
        </button>
        <button
          onClick={() => {
            handleSetColumnsAndRows(3, 3, 4);
          }}
          className={selectedButton === 4 ? 'selected' : ''}
        >
          <IconGrid3x3 stroke={2} size={iconsSize}/>
        </button>
        <button
          onClick={() => {
            handleSetColumnsAndRows(4, 4, 5);
          }}
          className={selectedButton === 5 ? 'selected' : ''}
        >
          <IconGrid4x4 stroke={2} size={iconsSize}/>
        </button>
        <button
          onClick={() => {
            handleSetColumnsAndRows(6, 6, 6);
          }}
          className={selectedButton === 6 ? 'selected' : ''}
        >
          <IconGridDots stroke={2} size={iconsSize}/>
        </button>
      </div>
      <GridImageComponent gridX={columns} gridY={rows} />
    </div>
  );
}

export default App;

import React from 'react';
import '../../../styles/FilterSelector.css'

interface ColumnSelectorInterface {
    columnsNumber: 2 | 3 | 4;

    setColumnsNumber(columnsNumber: 2 | 3 | 4): void;
}

const ColumnSelector = ({columnsNumber, setColumnsNumber}: ColumnSelectorInterface) => {
     return (
         <div className='filterSelectorContainer'>
             <p>
                 {'Columns'}
             </p>
             <div className='columnSelector'>
                <span onClick={() => {
                    setColumnsNumber(2)
                }}
                      className={columnsNumber >= 2 ? 'active' : ''}>2</span>
                <span onClick={() => {
                    setColumnsNumber(3)
                }}  className={columnsNumber >= 3 ? 'active' : ''}>3</span>
                <span onClick={() => {
                    setColumnsNumber(4)
                }}  className={columnsNumber >= 4 ? 'active' : ''}>4</span>
             </div>
         </div>
     )
}

export default ColumnSelector;

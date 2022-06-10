import React from 'react';
import '../../../styles/FilterSelector.css'

interface SortingSelectorInterface {
    sorting: 'none' | 'a-z' | 'z-a' | 'new';

    setSorting(sorting: 'none' | 'a-z' | 'z-a' | 'new'): void;
}

const SortingSelector = ({sorting, setSorting}: SortingSelectorInterface) => {
    const elements: { key: 'none' | 'a-z' | 'z-a' | 'new', value: string }[] = [
        {key: 'a-z', value: 'A-Z'},
        {key: 'z-a', value: 'Z-A'},
        {key: 'new', value: 'New'}
    ]
    return (
        <div className='filterSelectorContainer'>
            <p>
                {'Sorting'}
            </p>
            <div>
                {elements.map((opt: { key: 'none' | 'a-z' | 'z-a' | 'new', value: string }) => {
                    return <button
                        className={sorting === opt.key ? 'active' : ''}
                        onClick={() => {
                            setSorting(sorting === opt.key ? 'none' : opt.key)
                        }}
                        key={opt.key}>{opt.value}</button>
                })}
            </div>
        </div>
    )
}

export default SortingSelector;

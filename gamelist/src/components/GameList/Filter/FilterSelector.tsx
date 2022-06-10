import React from 'react';
import {GroupInterface} from "../../../interfaces/GroupInterface";
import {ProviderInterface} from "../../../interfaces/ProviderInterface";
import '../../../styles/FilterSelector.css'
import {FilterDataInterface} from "../../../interfaces/FilterDataInterface";

interface FilterSelectorInterface {
    name: keyof FilterDataInterface;
    elements: GroupInterface[] | ProviderInterface[];
    filters: FilterDataInterface;

    setFilters(filters: FilterDataInterface): void;
}

const FilterSelector = ({filters, setFilters, name, elements}: FilterSelectorInterface) => {

    return (
        <div className='filterSelectorContainer'>
            <p>
                {/(?=[A-Z])/g[Symbol.split](name).join(' ')}
            </p>
            <div>
                {elements.map((opt: GroupInterface | ProviderInterface) => {
                    return <button
                        className={[...filters[name]].includes(opt.id) ? 'active' : ''}
                        onClick={() => {
                            setFilters({
                                ...filters,
                                [name]: [...filters[name]].includes(opt.id) ? [...filters[name]].filter((el) => el !== opt.id) : [...filters[name], opt.id]
                            });
                        }}
                        key={opt.name}>{opt.name}</button>
                })}
            </div>
        </div>
    )
}

export default FilterSelector;

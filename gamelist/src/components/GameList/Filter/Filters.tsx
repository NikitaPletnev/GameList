import React, {useEffect, useState} from "react";
import '../../../styles/Filters.css'
import {FilterDataInterface} from "../../../interfaces/FilterDataInterface";
import {ProviderInterface} from "../../../interfaces/ProviderInterface";
import {GroupInterface} from "../../../interfaces/GroupInterface";
import FilterSelector from "./FilterSelector";
import SortingSelector from "./SortingSelector";
import ColumnSelector from "./ColumnSelector";

interface FilterInterface {
    filters: FilterDataInterface;
    totalQuantity: number;
    columnsNumber: 2 | 3 | 4;
    sorting: 'none' | 'a-z' | 'z-a' | 'new';
    groups: GroupInterface[];
    providers: ProviderInterface[];
    search: string;

    setColumnsNumber(columnsNumber: 2 | 3 | 4): void;

    setSorting(sorting: 'none' | 'a-z' | 'z-a' | 'new'): void;

    setFilters(filters: FilterDataInterface): void;

    setSearch(search: string): void;
}

const Filters = ({search, filters, totalQuantity, setFilters, columnsNumber, setColumnsNumber, sorting, setSorting, setSearch, providers, groups}: FilterInterface) => {
    const [hide, setHide] = useState(window.innerWidth < 920);

    const renderHideButton = () => {
        return <button className='hideFilterButton' onClick={() => {setHide(!hide)}}>{hide ? 'Show filters' : 'Hide filters'}</button>
    }

    return (
        <aside className={hide ? 'hidden' : ''}>
            <input value={search} type='text' required onChange={(e) => {
                setSearch(e.target.value)
            }}
            />
            <i/>
            <FilterSelector filters={filters}
                            name={'providers'}
                            elements={providers}
                            setFilters={setFilters}
            />
            <FilterSelector filters={filters}
                            name={'gameGroups'}
                            elements={groups}
                            setFilters={setFilters}
            />
            <SortingSelector sorting={sorting} setSorting={setSorting}/>
            {window.innerWidth > 920 && <ColumnSelector columnsNumber={columnsNumber} setColumnsNumber={setColumnsNumber}/>}
            <div className='filtersFooter'>
                <span>{`Games amount: ${totalQuantity}`}</span>
                <button onClick={() => {
                    setFilters({
                        providers: [],
                        gameGroups: [],
                    })
                    setSorting('none');
                    setColumnsNumber(window.innerWidth < 920 ? 2 : 4);
                    setSearch('')
                }}>Reset
                </button>
            </div>
            {window.innerWidth < 920 && renderHideButton()}
        </aside>
    )
}


export default Filters;

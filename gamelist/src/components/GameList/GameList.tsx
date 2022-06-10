import React, {useEffect, useState} from 'react';
import Header from "./Header";
import {getGames, getGroups, getProviders} from "../../api/helper";
import {GameItemInterface} from "../../interfaces/GameItemInterface";
import '../../styles/GameList.css'
import Filters from "./Filter/Filters";
import List from "./List";
import {FilterDataInterface} from "../../interfaces/FilterDataInterface";
import {ProviderInterface} from "../../interfaces/ProviderInterface";
import {GroupInterface} from "../../interfaces/GroupInterface";

const GameList = () => {
    const [initialGames, setInitialGames] = useState<GameItemInterface[]>([]);
    const [games, setGames] = useState<GameItemInterface[]>([]);
    const [columnsNumber, setColumnsNumber] = useState<2 | 3 | 4>(window.innerWidth < 920 ? 2 : 4);
    const [search, setSearch] = useState('');
    const [filters, setFilters] = useState<FilterDataInterface>({
        providers: [],
        gameGroups: [],
    })
    const [sorting, setSorting] = useState<'none' | 'a-z' | 'z-a' | 'new'>('none')

    const [providers, setProviders] = useState<ProviderInterface[]>([]);
    const [groups, setGroups] = useState<GroupInterface[]>([])

    useEffect(() => {
        if (!sessionStorage.getItem('user')) {
            window.location.href = '/'
        }
        getProviders().then((response) => {
            response.json().then((resource) => {
                setProviders(resource.data)
            })
        })
        getGroups().then((response) => {
            response.json().then((resource) => {
                setGroups(resource.data)
            })
        })
        getGames().then((response) => {
            response.json().then((resource: { data: GameItemInterface[] }) => {
                setGames(resource.data);
                setInitialGames(resource.data);
            })
        }).catch((err) => console.log(err))
    }, [])

    useEffect(() => {
        rebuildGames();
    }, [filters, search, sorting])

    const getSorted = (games: GameItemInterface[]): GameItemInterface[] => {
        switch (sorting) {
            case "none":
                return games;
            case "a-z":
                return games.sort((a, b) => parseInt(String(a.name > b.name)));
            case "z-a":
                return games.sort((a, b) => parseInt(String(a.name > b.name))).reverse();
            case "new":
                return games.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        }
    }

    const rebuildGames = () => {
        setGames(getSorted(initialGames.filter(({provider, name, id}) => {
                return (!filters.providers.length || filters.providers.includes(provider))
                    && (!filters.gameGroups.length || groups.filter(({id}) => filters.gameGroups.includes(id)).map(({games}) => games).flat(2).includes(id))
                    && (name.toString().toLowerCase().includes(search.toLowerCase()))
            })
        ))
    }


    const getGrid = (): string => {
        switch (columnsNumber) {
            case 2:
                return '1fr 1fr';
            case 3:
                return '1fr 1fr 1fr';
            case 4:
                return '1fr 1fr 1fr 1fr';
        }
    }

    return (
        <>
            <Header/>
            <main>
                <List grid={getGrid()} games={games}/>
                <Filters
                    search={search}
                    filters={filters}
                    groups={groups}
                    providers={providers}
                    setFilters={setFilters}
                    setSearch={setSearch}
                    totalQuantity={games.length}
                    columnsNumber={columnsNumber}
                    setColumnsNumber={setColumnsNumber}
                    sorting={sorting}
                    setSorting={setSorting}
                />
            </main>
        </>
    )
}

export default GameList;

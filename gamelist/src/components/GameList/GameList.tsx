import React, {useEffect, useState} from 'react';
import Header from "./Header";
import {getGames} from "../../api/helper";
import {GameItemInterface} from "../../interfaces/GameItemInterface";
import '../../styles/GameList.css'
import Filters from "./Filters";
import List from "./List";

const GameList = () => {
    const [games, setGames] = useState<GameItemInterface[]>([]);
    const [columnsNumber, setColumnsNumber] = useState<1 | 2 | 3>(window.innerWidth < 920 ? 2 : 3);

    useEffect(() => {
        if (!sessionStorage.getItem('user')) {
            window.location.href = '/'
        }
        getGames().then((response) => {
            response.json().then((resource: { data: GameItemInterface[] }) => {
                setGames(resource.data)
            })
        }).catch((err) => console.log(err))
    }, []);

    const getGrid = (): string => {
        switch (columnsNumber) {
            case 1:
                return '1fr';
            case 2:
                return '1fr 1fr';
            case 3:
                return '1fr 1fr 1fr';
        }
    }

    return (
        <>
            <Header/>
            <main>
                <List grid={getGrid()} games={games}/>
                <Filters/>
            </main>
        </>
    )
}

export default GameList;

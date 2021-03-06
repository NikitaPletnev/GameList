import React from "react";
import {GameItemInterface} from "../../interfaces/GameItemInterface";
import '../../styles/List.css'

interface ListInterface {
    grid: string;
    games: GameItemInterface[];
}

const List = ({grid, games}: ListInterface) => {
    const renderGames = () => {
        if (!games.length) {
            return "Nothing to show"
        }
        return games.map((opt: GameItemInterface) => {
            return (
                <div key={opt.id}>
                    <img alt={opt.name} src={opt.cover}/>
                </div>
            )
        })
    }

    return (
        <section style={{
            gridTemplateColumns: grid
        }}>
            {renderGames()}
        </section>
    )
}

export default List;

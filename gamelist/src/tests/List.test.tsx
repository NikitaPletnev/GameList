import renderer from 'react-test-renderer';
import React from "react";
import List from "../components/GameList/List";

const testGames = [
    {
        "id": 800106,
        "name": "Cocktail Book",
        "provider": -3,
        "cover": "https://1540257937.rsc.cdn77.org/desktop/images/games/provider-id--3/SWI_Cocktailbook.jpg",
        "coverLarge": "https://1540257937.rsc.cdn77.org/desktop/images/games/provider-id--3/SWI_Cocktailbook@2x.jpg",
        "date": "2021-07-29T15:36:31.974Z"
    },
]

it('renders List element', () => {
    const tree = renderer
        .create(<List games={testGames} grid={'1fr 1fr'}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

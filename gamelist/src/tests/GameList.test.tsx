import renderer from 'react-test-renderer';
import React from "react";
import GameList from "../components/GameList/GameList";

it('renders GameList element', () => {
    const tree = renderer
        .create(<GameList/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

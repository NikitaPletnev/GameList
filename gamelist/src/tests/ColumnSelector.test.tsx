import renderer from 'react-test-renderer';
import React from "react";
import ColumnSelector from "../components/GameList/Filter/ColumnSelector";

it('renders ColumnSelector element', () => {
    const tree = renderer
        .create(<ColumnSelector columnsNumber={2} setColumnsNumber={() => {}}/>)
            .toJSON();
    expect(tree).toMatchSnapshot();
});

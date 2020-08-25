import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';
import Panel from './Panel';
import {ThemeProvider} from 'pcln-design-system'

afterEach(cleanup);

const onAdd = jest.fn()

it('renders Panel component', () => {
    const {getByText, debug, getByTestId} = render(
        <ThemeProvider>
            <Panel
                count={10}
                text='Primary'
                onAdd={onAdd}
            >
                <div>Hello panel</div>
            </Panel>
        </ThemeProvider>,
    );

    expect(getByText(/Hello panel/i)).toBeTruthy();
    expect(getByText(/10/i)).toBeTruthy();
    fireEvent.click(getByTestId(/clicker/i));
    expect(onAdd).toHaveBeenCalled();
});
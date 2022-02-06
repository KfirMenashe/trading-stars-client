import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import ScheduleTable from '../../components/schedule/scheduleTable';
import TournamentSchedule from '../../components/schedule/tournamentSchedule';
import ITournamentSchedule from '../../components/schedule/ITournamentSchedule';
import '@testing-library/jest-dom';

// helper to check header is valid
const expectValidTableHead = () => {
    const ths = screen.getAllByRole('columnheader');
    expect(ths.length).toEqual(4);
    expect(ths[0]).toHaveTextContent('Start');
    expect(ths[1]).toHaveTextContent('Name');
    expect(ths[2]).toHaveTextContent('State');
    expect(ths[3]).toHaveTextContent('Enrolled');
}

test('should render valid table head', () => {
    const rows: ITournamentSchedule[] = [];
    const onSelectedTournamentScheduleChanged = jest.fn();
    render(<ScheduleTable
        rows={rows}
        onSelectedTournamentScheduleChanged={onSelectedTournamentScheduleChanged}
    />);

    expectValidTableHead();
});

test('should not render rows when rows is empty array', () => {
    const rows: ITournamentSchedule[] = [];
    const onSelectedTournamentScheduleChanged = jest.fn();
    render(<ScheduleTable
        rows={rows}
        onSelectedTournamentScheduleChanged={onSelectedTournamentScheduleChanged}
    />);

    const rowElement = screen.queryByRole('cell');
    expectValidTableHead();
    expect(rowElement).toBeNull();

});

test('should render single row', () => {
    const rows = [new TournamentSchedule(1, new Date(2011, 11, 11, 11, 11, 11, 11), 'test-name', 'test-state', 0)];
    const onSelectedTournamentScheduleChanged = jest.fn();
    render(<ScheduleTable rows={rows} onSelectedTournamentScheduleChanged={onSelectedTournamentScheduleChanged} />)

    const rowCell1 = screen.getByText('Dec 11 11:11');
    const rowCell2 = screen.getByText('test-name');
    const rowCell3 = screen.getByText('test-state');
    const rowCell4 = screen.getByText('0');

    expect(rowCell1).toBeInTheDocument();
    expect(rowCell2).toBeInTheDocument();
    expect(rowCell3).toBeInTheDocument();
    expect(rowCell4).toBeInTheDocument();
});

test('should render 2 rows', () => {
    const rows = [
        new TournamentSchedule(1, new Date(2011, 11, 11, 11, 11, 11, 11), 'test-name', 'test-state', 0),
        new TournamentSchedule(2, new Date(2011, 11, 11, 11, 11, 11, 11), 'test-name', 'test-state', 0),
    ];
    const onSelectedTournamentScheduleChanged = jest.fn();
    render(<ScheduleTable rows={rows} onSelectedTournamentScheduleChanged={onSelectedTournamentScheduleChanged} />)

    const rowElements1 = screen.getAllByText('Dec 11 11:11');
    const rowElements2 = screen.getAllByText('test-name');
    const rowElements3 = screen.getAllByText('test-state');
    const rowElements4 = screen.getAllByText('0');

    expect(rowElements1.length).toEqual(2);
    expect(rowElements2.length).toEqual(2);
    expect(rowElements3.length).toEqual(2);
    expect(rowElements4.length).toEqual(2);
});

test('should call onSelectedTournamentScheduleChanged when a row in clicked ', () => {
    const rows = [
        new TournamentSchedule(1, new Date(2011, 10, 11, 11, 11, 11, 11), 'test-name', 'test-state', 0),
        new TournamentSchedule(2, new Date(2012, 11, 12, 12, 12, 12, 12), 'test-name', 'test-state', 0),
    ];
    const onSelectedTournamentScheduleChanged = jest.fn();
    render(<ScheduleTable rows={rows} onSelectedTournamentScheduleChanged={onSelectedTournamentScheduleChanged} />)
    const firstRowStartElement = screen.getByText('Nov 11 11:11');
    const secondRowStartElement = screen.getByText('Dec 12 12:12');

    fireEvent.click(firstRowStartElement);
    fireEvent.click(secondRowStartElement);

    expect(onSelectedTournamentScheduleChanged).toBeCalledTimes(2);
});




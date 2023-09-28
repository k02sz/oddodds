import React, { useMemo } from 'react';
import { useTable } from 'react-table';


function BettingDataList({ data }) {
    const columns = useMemo(
      () => [
        {
          Header: 'Match',
          columns: [
            {
              Header: 'Home Team',
              accessor: 'home_team',
            },
            {
              Header: 'Away Team',
              accessor: 'away_team',
            },
          ],
        },
        {
          Header: 'Bookmakers',
          columns: data[0].bookmakers.map((bookmaker) => ({
            Header: bookmaker.title,
            accessor: `bookmakers[0].markets[0].outcomes[${data[0].bookmakers.indexOf(
              bookmaker
            )}].price`,
          })),
        },
      ],
      [data]
    );
  
    const tableData = useMemo(() => data, [data]);
  
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
    } = useTable({
      columns,
      data: tableData,
    });
  
    return (
      <div>
        <table {...getTableProps()} className="table">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default BettingDataList;
  
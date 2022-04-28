import React, { useEffect, useMemo } from 'react';
import { useTable, useFilters, useSortBy, usePagination } from 'react-table';
import { Columns } from "./columns";
import Button from "../Button/Button"
import "./Table.css";

export function Table({ data, countries, seller }) {
  const columns = useMemo(() => Columns, []);
  const tableData = useMemo(() => data, [data]);

  const tableInstance = useTable({
    columns,
    data: tableData,
  }, useFilters, useSortBy, usePagination)

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    setFilter,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    gotoPage,
    pageCount,
    setPageSize
  } = tableInstance;
  const { pageIndex, pageSize } = state;

  useEffect(() => {
    setFilter("country", countries);
  }, [countries, setFilter]);

  useEffect(() => {
    if (seller === "All sellers") {
      setFilter("seller", undefined);
    } else {
      setFilter("seller", seller);
    }
  }, [seller, setFilter]);

  return (
    <>
      <table {...getTableProps()}>
        <thead>{
          headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span>
                  {column.isSorted ? (column.isSortedDesc ? ` 🔽` : ` 🔼`) : ''}
                </span>
                </th>
              ))}
            </tr>
          ))
        }

        </thead>
        <tbody {...getTableBodyProps()}>
        {
          page.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {
                  row.cells.map(cell => {
                      return (<td {...cell.getCellProps()}>{cell.render('Cell')}</td>)
                    }
                  )
                }
              </tr>
            )
          })
        }
        </tbody>
      </table>
      <div className="buttonContainer">
        <Button title={"<<"} action={() => gotoPage(0)} disabled={!canPreviousPage}/>
        <Button title={"Previous"} action={() => previousPage()} disabled={!canPreviousPage}/>
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page: {' '}
          <input type="number"
                 defaultValue={pageIndex + 1}
                 onChange={event => {
                   const pageNumber = event.target.value ? Number(event.target.value) - 1 : 0;
                   gotoPage(pageNumber)
                 }}
                 style={{ width: '50px' }}/>
        </span>
        <select className="pageSizeSelect" value={pageSize} onChange={event => setPageSize(Number(event.target.value))}>
          {
            [5, 10, 25].map(pageSize => (
              <option value={pageSize} key={pageSize}>
                Show {pageSize}
              </option>
            ))
          }
        </select>
        <Button title={"Next"} action={() => nextPage()} disabled={!canNextPage}/>
        <Button title={">>"} action={() => gotoPage(pageCount - 1)} disabled={!canNextPage}/>
      </div>
    </>
  );
}

export default Table;
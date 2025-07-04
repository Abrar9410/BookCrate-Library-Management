import type { IborrowedBook } from "@/types";
import { useIsDarkMode } from "@/utilities";
import DataTable, { type TableColumn, type TableStyles } from "react-data-table-component";

const BorrowSummaryTable = ({ borrowSummary }:  {borrowSummary: IborrowedBook[]}) => {

    const isDarkMode = useIsDarkMode();

    const columns: TableColumn<IborrowedBook>[] = [
        {
            name: "Title",
            selector: (row) => row.book.title,
            sortable: true,
            cell: (row) => (
                <div className="w-max mx-auto text-center">
                    {row.book.title}
                </div>
            ),
            minWidth: "245px"
        },
        {
            name: "ISBN",
            selector: (row) => row.book.isbn,
            cell: (row) => <span className="w-max mx-auto text-center">{row.book.isbn}</span>,
            sortable: true,
            minWidth: "110px"
        },
        {
            name: "Borrowed Quantity",
            selector: (row) => row.totalQuantity,
            sortable: true,
            cell: (row) => (<p className="w-max mx-auto text-center">{row.totalQuantity}</p>),
            minWidth: "90px"
        },
    ];

    const tableStyles: TableStyles = {
        table: {
            style: {
                tableLayout: "auto"
            }
        },
        headCells: {
            style: {
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "1.12rem",
                border: "1px solid rgb(161, 98, 7)",
                padding: "7px 0"
            },
        },
        cells: {
            style: {
                display: "flex",          // Ensure the cells use Flexbox
                alignItems: "center",
                border: "1px solid rgb(161, 98, 7)",
                padding: "2px 1px",
                textWrap: "wrap"
            },
        },
        pagination: {
            style: {
                marginTop: "1rem",
            },
        }
    };


    return (
        <div className="flex flex-col justify-center items-center">
            <DataTable
                columns={columns}
                data={borrowSummary}
                customStyles={tableStyles}
                theme={isDarkMode ? 'dark' : 'light'}
                defaultSortFieldId={1} // Optional: Set default sorting
                pagination
            />
        </div>
    );
};

export default BorrowSummaryTable;
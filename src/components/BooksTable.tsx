import type { Ibook } from '@/types';
import { useIsDarkMode } from '@/utilities';
import DataTable, { type TableColumn, type TableStyles } from 'react-data-table-component';


const BooksTable = ({books}: {books:Ibook[]}) => {

    const isDarkMode = useIsDarkMode();

    // const handleDelete = id => {
    //     Swal.fire({
    //         title: "Are you sure you want to delete this Camp?",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#d33",
    //         cancelButtonColor: "#3085d6",
    //         confirmButtonText: "Yes, Delete!"
    //     }).then(async (result) => {
    //         if (result.isConfirmed) {
    //             const { data } = await axiosSecure.delete(`/delete-camp/${id}`);
    //             if (data.deletedCount > 0) {
    //                 toast.success('Camp deleted successfully!', {
    //                     position: "top-center",
    //                     autoClose: 1000
    //                 })
    //             }
    //             refetch();
    //         }
    //     });
    // }

    const columns: TableColumn<Ibook>[] = [
        {
            name: "Title",
            selector: (row) => row.title,
            sortable: true,
            cell: (row) => (
                <div className="w-max mx-auto text-center">
                    <span>{row.title}</span>
                </div>
            ),
            minWidth: "245px",
            maxWidth: "450px",
        },
        {
            name: "Description",
            selector: (row) => row.description as string,
            sortable: true,
            cell: (row) => <span className="px-1">{row.description}</span>,
            minWidth: "130px",
            maxWidth: "content"
        },
        {
            name: "Author",
            selector: (row) => row.author,
            cell: (row) => <span className="w-max mx-auto text-center">{row.author}</span>,
            sortable: true,
            minWidth: "110px",
            maxWidth: "200px",
        },
        {
            name: "ISBN",
            selector: (row) => row.isbn,
            sortable: true,
            cell: (row) => (
                <p className="w-max mx-auto text-center">{row.isbn}</p>
            ),
            minWidth: "115px",
            maxWidth: "150px",
        },
        {
            name: "Genre",
            selector: (row) => row.genre,
            sortable: true,
            cell: (row) => (<p className="w-max mx-auto text-center">{row.genre}</p>),
            minWidth: "60px",
            maxWidth: "80px"
        },
        {
            name: "Remaining Copies",
            selector: (row) => row.copies,
            cell: (row) => (<p className="w-max mx-auto text-center">{row.copies}</p>),
            sortable: true,
            minWidth: "129px",
            maxWidth: "150px"
        },
        {
            name: "Availability",
            selector: (row) => row.available,
            sortable: true,
            cell: (row) => (
            <p className="w-max mx-auto text-center">
                {row.available === true? "Available" : "Not Available"}
            </p>
            ),
            minWidth: "100px",
            maxWidth: "120px"
        },
        {
            name: "Action",
            selector: (row) => row._id,
            sortable: false,
            cell: (row) => (
                <div className="w-max mx-auto flex flex-col justify-center items-center gap-2">
                    {/* <Link to={`/edit-book/${row._id}`} className="w-max py-1 px-2 rounded-lg bg-green-500 text-white hover:scale-105">Edit</Link>
                    <button onClick={() => handleDelete(row._id)} className="w-max py-1 px-2 rounded-lg bg-red-500 text-black hover:scale-105">Delete</button> */}
                </div>
            ),
            minWidth: "100px",
            maxWidth: "120px"
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
                // backgroundColor: isDarkMode ? '#1f2937' : '#f3f4f6',
                // color: isDarkMode ? '#f9fafb' : '#111827',
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
                // backgroundColor: isDarkMode ? '#111827' : '#ffffff',
                // color: isDarkMode ? '#f9fafb' : '#1f2937',
                border: "1px solid rgb(161, 98, 7)",
                padding: "2px 1px",
                textWrap: "wrap"
            },
        },
        pagination: {
            style: {
                marginTop: "1rem",
                // backgroundColor: isDarkMode ? '#111827' : '#ffffff',
                // color: isDarkMode ? '#f9fafb' : '#1f2937',
            },
        }
    };

    return (
        <div>
            {/* <Heading title="Manage All Existing Camps"></Heading> */}

            <div className="flex flex-col justify-center items-center">
                <DataTable
                    columns={columns}
                    data={books}
                    customStyles={tableStyles}
                    theme={isDarkMode? 'dark': 'light'}
                    defaultSortFieldId={1} // Optional: Set default sorting
                    pagination
                />
            </div>
        </div>
    );
};

export default BooksTable;
import { useDeleteBookMutation } from '@/redux/api/baseApi';
import type { Ibook } from '@/types';
import { useIsDarkMode } from '@/utilities';
import { Handshake, Pencil } from 'lucide-react';
import DataTable, { type TableColumn, type TableStyles } from 'react-data-table-component';
import { Link, useNavigate } from 'react-router';
import { toast } from 'sonner';
import Swal from "sweetalert2";


const BooksTable = ({ books }: { books: Ibook[] }) => {

    const isDarkMode = useIsDarkMode();
    const [deleteBook] = useDeleteBookMutation();
    const navigate = useNavigate();

    const handleDelete = async (id: string) => {
        Swal.fire({
            title: "Are you sure you want to delete this Book?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, Delete!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const { data } = await deleteBook(id);
                if (data.success) {
                    toast("Book is deleted successfully", {
                        position: "top-center"
                    });
                    navigate("/");
                }
            }
        });
    }

    const columns: TableColumn<Ibook>[] = [
        {
            name: "Title",
            selector: (row) => row.title,
            sortable: true,
            cell: (row) => (
                <div className="w-max mx-auto text-center">
                    <Link to={`/books/${row._id}`} className='hover:scale-105 hover:underline hover:text-yellow-700'>{row.title}</Link>
                </div>
            ),
            minWidth: "245px",
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
            name: "Genre",
            selector: (row) => row.genre,
            sortable: true,
            cell: (row) => (<p className="w-max mx-auto text-center">{row.genre}</p>),
            minWidth: "90px",
            maxWidth: "120px"
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
            name: "Copies",
            selector: (row) => row.copies,
            cell: (row) => (<p className="w-max mx-auto text-center">{row.copies}</p>),
            sortable: true,
            minWidth: "90px",
            maxWidth: "120px"
        },
        {
            name: "Availability",
            selector: (row) => row.available,
            sortable: true,
            cell: (row) => (
                <p className="w-max mx-auto text-center">
                    {row.available === true ? "Available" : "Not Available"}
                </p>
            ),
            minWidth: "120px",
            maxWidth: "170px"
        },
        {
            name: "Actions",
            selector: (row) => row._id,
            sortable: false,
            cell: (row) => (
                <div className="w-max mx-auto flex flex-col justify-center items-center gap-2">
                    <Link to={`/books/${row._id}`} className="w-max hover:scale-105 hover:underline">See Details</Link>
                    <Link to={`/edit-book/${row._id}`} className="w-max text-green-500 flex justify-center items-center gap-1 hover:scale-105 hover:underline">
                        <span>Borrow</span>
                        <Handshake className='w-3 h-3' />
                    </Link>
                    <Link to={`/edit-book/${row._id}`} className="w-max text-yellow-400 flex justify-center items-center gap-1 hover:scale-105 hover:underline">
                        <span>Edit</span>
                        <Pencil className='w-3 h-3' />
                    </Link>
                    <button onClick={() => handleDelete(row._id)} className="w-max px-2 rounded-lg bg-red-500 text-black hover:scale-105 cursor-pointer">Delete</button>
                </div>
            ),
            minWidth: "100px",
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
                data={books}
                customStyles={tableStyles}
                theme={isDarkMode ? 'dark' : 'light'}
                defaultSortFieldId={1} // Optional: Set default sorting
                pagination
            />
        </div>
    );
};

export default BooksTable;
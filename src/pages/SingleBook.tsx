import { useDeleteBookMutation, useGetSingleBookQuery } from "@/redux/api/baseApi";
import { Handshake, Pencil } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router";
import { toast } from "sonner";
import Swal from "sweetalert2";


const SingleBook = () => {

    const {id} = useParams();

    const { data, isLoading } = useGetSingleBookQuery(`${id}`);
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
    
    if (isLoading) {
        return <p>Loading...</p>;
    };
    
    const book = data.data;

    return (
        <div className="my-8 text-center">
            <h2 className="font-bold text-lg min-[300px]:text-xl min-[450px]:text-2xl sm:text-3xl lg:text-4xl">
                {book.title}
            </h2>
            <p className="lg:text-lg mt-4">{book.description}</p>
            <p className="lg:text-lg mt-4"><span className="font-semibold">Author:</span> <span>{book.author}</span></p>
            <p className="lg:text-lg mt-4"><span className="font-semibold">ISBN:</span> <span>{book.isbn}</span></p>
            <p className="lg:text-lg mt-4"><span className="font-semibold">Genre:</span> <span>{book.genre}</span></p>
            <p className="lg:text-lg mt-4"><span className="font-semibold">Available Copies:</span> <span>{book.copies}</span></p>
            <p className="lg:text-lg mt-4"><span className="font-semibold">Currently Available:</span> <span>{book.available===true? "Yes" : "No"}</span></p>
            
            <div className="flex flex-col items-center gap-3 mt-4">
                <Link to={`/edit-book/${book._id}`} className="w-max lg:text-lg text-green-500 flex justify-center items-center gap-1 hover:scale-105 hover:underline">
                    <span>Borrow</span>
                    <Handshake className='w-4 h-4' />
                </Link>
                <Link to={`/edit-book/${book._id}`} className="w-max lg:text-lg text-yellow-400 flex justify-center items-center gap-1 hover:scale-105 hover:underline">
                    <span>Edit</span>
                    <Pencil className='w-4 h-4' />
                </Link>
                <button onClick={() => handleDelete(book._id)} className="w-max lg:text-lg px-2 rounded-lg bg-red-500 text-black hover:scale-105 cursor-pointer">Delete</button>
            </div>
        </div>
    );
};

export default SingleBook;
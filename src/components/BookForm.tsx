import { useState } from "react";
import { Controller, useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import Swal from "sweetalert2";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { DraftBook, Ibook } from "@/types";
import { useCreateBookMutation, useEditBookMutation } from "@/redux/api/baseApi";
import { toast } from "sonner";
import { useNavigate } from "react-router";

const BookForm = ({oldBookData}: {oldBookData: Ibook | ''}) => {

    const { register, control, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: oldBookData
            ? {
                title: oldBookData.title,
                author: oldBookData.author,
                genre: oldBookData.genre,
                isbn: oldBookData.isbn,
                description: oldBookData.description,
                copies: oldBookData.copies,
            }
            : {},
      });
    const [errorMessage, setErrorMessage] = useState('');
    const [uploading, setUploading] = useState(false);
    const navigate = useNavigate();

    const [ editBook ] = useEditBookMutation();
    const [ createBook ] = useCreateBookMutation();

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        if (oldBookData && oldBookData._id) {
            handleEditBook(data as DraftBook);
        } else {
            handleCreateBook(data as DraftBook);
        }
    };

    const handleEditBook = async (data: DraftBook) => {
        setErrorMessage('');
        setUploading(true);
        const { title, author, genre, isbn, description, copies } = data;

        const bookData = {
            _id: oldBookData && oldBookData._id,
            title,
            author,
            genre,
            isbn,
            description,
            copies
        };

        const res = await editBook(bookData);
        if (res.data.success === true) {
            toast("Book edited successfully!", {
                position: "top-center"
            });
            reset();
            setUploading(false);
            navigate(-1);
        } else {
            toast(`${res.data.message}`, {
                position: "top-center"
            });
            setUploading(false);
        }
    };
    
    const handleCreateBook = async (data: DraftBook) => {
        setErrorMessage('');
        setUploading(true);
        const res = await createBook(data);
        if (res.data.success) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "New Camp has been added!",
                showConfirmButton: false,
                timer: 1500
            });
            reset();
            setUploading(false);
        } else {
            toast(`${res.data.message}`, {
                position: "top-center"
            });
            setUploading(false);
        }
    }

    return (
        <div className="p-2 min-[300px]:p-4 min-[450px]:p-6 sm:p-8 bg-slate-100 dark:bg-black 2xl:w-11/12 mx-auto shadow-lg mt-4 min-[400px]:mt-6 sm:mt-8 md:mt-10">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4">
                    <div className="w-full">
                        <label className="label text-black dark:text-white">
                            <span className="font-semibold">Title</span>
                        </label>
                        <Input type="text" placeholder="Book Title" {...register("title", { required: true })} className="input input-bordered h-10 w-full bg-black dark:bg-white text-white dark:text-black" />
                        {errors.title?.type === 'required' && <span className="text-red-600">You forgot to provide Title</span>}
                    </div>
                    <div className="w-full">
                        <label className="label text-black dark:text-white">
                            <span className="font-semibold">Author</span>
                        </label>
                        <Input type="text" placeholder="Author's Name" {...register("author", { required: true })} className="input input-bordered h-10 w-full bg-black dark:bg-white text-white dark:text-black" />
                        {errors.author?.type === 'required' && <span className="text-red-600">You forgot to provide Title</span>}
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row justify-center gap-2 md:gap-4">
                    <div className="w-full">
                        <label className="label text-black dark:text-white">
                            <span className="font-semibold">Genre</span>
                        </label>
                        <Controller
                            name="genre"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => (
                                <Select onValueChange={field.onChange} value={field.value}>
                                    <SelectTrigger className="input input-bordered h-10 w-full bg-black dark:bg-white text-white dark:text-black">
                                        <SelectValue placeholder="Select a Genre" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="FICTION">FICTION</SelectItem>
                                        <SelectItem value="NON_FICTION">NON_FICTION</SelectItem>
                                        <SelectItem value="SCIENCE">SCIENCE</SelectItem>
                                        <SelectItem value="HISTORY">HISTORY</SelectItem>
                                        <SelectItem value="BIOGRAPHY">BIOGRAPHY</SelectItem>
                                        <SelectItem value="FANTASY">FANTASY</SelectItem>
                                    </SelectContent>
                                </Select>
                            )}
                        />
                        {errors.genre?.type === 'required' && (
                            <span className="text-red-600">You forgot to mention the genre of the book</span>
                        )}
                    </div>
                    <div className="w-full">
                        <label className="label text-black dark:text-white">
                            <span className="font-semibold">ISBN</span>
                        </label>
                        <Input
                            type="text"
                            placeholder="e.g. 9783161484100"
                            {...register("isbn", {
                                required: "ISBN is required",
                                pattern: {
                                    value: /^(97(8|9))?\d{9}(\d|X)$/i,
                                    message: "Invalid ISBN format"
                                }
                            })}
                            maxLength={13}
                            className="input input-bordered h-10 w-full bg-black dark:bg-white text-white dark:text-black"
                        />
                        {errors.isbn && <span className="text-red-600">{errors.isbn.message}</span>}

                    </div>
                    <div className="w-full">
                        <label className="label text-black dark:text-white">
                            <span className="font-semibold">Copies</span>
                        </label>
                        <Input
                            type="number"
                            placeholder="Enter a number"
                            {...register("copies", {
                                required: "This field is required",
                                min: {
                                    value: 0,
                                    message: "Value must be 0 or greater",
                                },
                                validate: (value) =>
                                    Number.isInteger(Number(value)) || "Must be a whole number",
                            })}
                        />
                        {errors.copies && <span className="text-red-600">{errors.copies.message}</span>}
                    </div>
                </div>
                <div className="w-full">
                    <label className="label text-black dark:text-white">
                        <span className="font-semibold">Description</span>
                    </label>
                    <Textarea
                        placeholder="Write details"
                        {...register("description", { required: true })}
                        className="textarea textarea-bordered textarea-md w-full bg-black dark:bg-white text-white dark:text-black" />
                    {errors.description?.type === 'required' && <span className="text-red-600">Please give a short description of the book</span>}
                </div>
                <div className="flex flex-col gap-4 mt-4 items-center">
                    <p className="text-red-600">{errorMessage}</p>
                    <button className="btn w-full rounded-lg py-1 bg-green-500 text-white lg:text-lg hover:bg-green-500 hover:scale-105 outline-none border-none">
                        {
                            uploading ?
                                <span className="loading loading-spinner loading-md"></span> :
                                <span>{!oldBookData ? "Add Book" : "Edit Book"}</span>
                        }
                    </button>
                </div>
            </form>
        </div>
    );
};

export default BookForm;
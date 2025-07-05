import Heading from "@/components/Heading";
import { Input } from "@/components/ui/input";
import { useCreateBorrowMutation } from "@/redux/api/baseApi";
// import type { Iborrow } from "@/types";
import { Controller, useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import { useState } from "react";
import { toast } from "sonner";


const BorrowBook = () => {

    const { bookId } = useParams();
    const { register, control, handleSubmit, reset, formState: { errors } } = useForm({ defaultValues: { book: bookId, quantity: 1, dueDate: null}});
    const [errorMessage, setErrorMessage] = useState('');
    const [uploading, setUploading] = useState(false);
    const navigate = useNavigate();
    const [createBorrow] = useCreateBorrowMutation();

    const handleBorrowBook: SubmitHandler<FieldValues> = async (data) => {
        setErrorMessage('');
        const { book, quantity, dueDate } = data;
        const borrowData = {
            book,
            quantity,
            dueDate: dueDate.toISOString()
        };

        const res = await createBorrow(borrowData);

        if (res.data.success) {
            toast.success("Book borrowed successfully!", {
                position: "top-center"
            });
            setUploading(false);
            reset();
            navigate(-1);
        } else {
            toast.error(`${res.data.message}`, {
                position: "top-center"
            });
            setUploading(false);
        }
    }

    return (
        <>
            <Heading title="Borrow Book" subtitle="Just tell us how many copies you want and when do you want to return those." />
            <div className="p-2 min-[300px]:p-4 min-[450px]:p-6 sm:p-8 bg-slate-100 dark:bg-black sm:w-1/2 mx-auto shadow-lg mt-4 min-[400px]:mt-6 sm:mt-8 md:mt-10">
                <form onSubmit={handleSubmit(handleBorrowBook)} className="flex flex-col gap-3">
                    <div className="w-full">
                        <label className="label text-black dark:text-white">
                            <span className="font-semibold">Book ID</span>
                        </label>
                        <Input type="text" placeholder="Book Title" {...register("book", { required: true })} className="input input-bordered h-10 w-full bg-black dark:bg-white text-white dark:text-black" value={bookId} readOnly />
                        {errors.book?.type === 'required' && <span className="text-red-600">Book ID is required!</span>}
                    </div>
                    <div className="w-full">
                        <label className="label text-black dark:text-white">
                            <span className="font-semibold">Quantity</span>
                        </label>
                        <Input
                            type="number"
                            placeholder="Enter a number"
                            {...register("quantity", {
                                required: "This field is required",
                                min: {
                                    value: 1,
                                    message: "Minimum one copy has to be borrowed.",
                                },
                                validate: (value) =>
                                    Number.isInteger(Number(value)) || "Must be a whole number",
                            })}
                            className="input input-bordered h-10 w-full bg-black dark:bg-white text-white dark:text-black"
                        />
                        {errors.quantity && <span className="text-red-600">{errors.quantity.message}</span>}
                    </div>
                    <div className="w-full">
                        <label className="label text-black dark:text-white">
                            Due Date:
                        </label>
                        <Controller
                            name="dueDate"
                            control={control}
                            rules={{ required: 'Date is required' }}
                            render={({ field }) => (
                                <DatePicker
                                    onChange={field.onChange}
                                    value={field.value}
                                    format="y-MM-dd"
                                    minDate={new Date()}
                                    calendarIcon={null}
                                    clearIcon={null}
                                    className="rounded-lg h-10 w-full bg-black dark:bg-white text-white dark:text-black"
                                />
                            )}
                        />
                        {errors.dueDate && <p className="text-red-600">{errors.dueDate.message}</p>}
                    </div>
                    <div className="flex flex-col gap-4 mt-4 items-center">
                        <p className="text-red-600">{errorMessage}</p>
                        <button className="btn w-full rounded-lg py-1 bg-green-500 text-white lg:text-lg hover:bg-green-500 hover:scale-105 outline-none border-none">
                            {
                                uploading ?
                                    <span className="loading loading-spinner loading-md"></span> :
                                    <span>Submit</span>
                            }
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default BorrowBook;
import BookForm from "@/components/BookForm";
import Heading from "@/components/Heading";
import { useGetSingleBookQuery } from "@/redux/api/baseApi";
import { useParams } from "react-router";


const EditBook = () => {

    const { id } = useParams();

    const { data, isLoading } = useGetSingleBookQuery(`${id}`); 

    if (isLoading) {
        return <p>Loading...</p>
    }

    return (
        <>
            <Heading title="Add a Book" subtitle="Fill up this form with details to add a new book."></Heading>
            <BookForm oldBookData={data.data} />
        </>
    );
};

export default EditBook;
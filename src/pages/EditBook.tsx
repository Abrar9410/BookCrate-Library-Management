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
            <Heading title="Edit Book" subtitle="Fill up this form with the updated information."></Heading>
            <BookForm oldBookData={data.data} />
        </>
    );
};

export default EditBook;
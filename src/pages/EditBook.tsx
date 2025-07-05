import BookForm from "@/components/BookForm";
import Heading from "@/components/Heading";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import { useGetSingleBookQuery } from "@/redux/api/baseApi";
import { useParams } from "react-router";


const EditBook = () => {

    const { id } = useParams();

    const { data, isLoading } = useGetSingleBookQuery(`${id}`); 

    if (isLoading) {
        return <LoadingSkeleton/>
    }

    return (
        <>
            <Heading title="Edit Book" subtitle="Fill up this form with the updated information."></Heading>
            <BookForm oldBookData={data.data} />
        </>
    );
};

export default EditBook;
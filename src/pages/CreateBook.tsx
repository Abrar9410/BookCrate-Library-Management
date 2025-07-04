import BookForm from "@/components/BookForm";
import Heading from "@/components/Heading";



const CreateBook = () => {

    

    return (
        <>
            <Heading title="Add a Book" subtitle="Fill up this form with details to add a new book."></Heading>
            <BookForm oldBookData=""/>
        </>
    );
};

export default CreateBook;
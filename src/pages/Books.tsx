import BooksTable from "@/components/BooksTable";
import Heading from "@/components/Heading";
import { useGetAllBooksQuery } from "@/redux/api/baseApi";
import { useAppSelector } from "@/redux/hooks";


const Books = () => {

    const {filter, sortBy, sort, skip, limit} = useAppSelector((state) => state.queries);
    
    const { data, isLoading } = useGetAllBooksQuery(`?filter=${filter}&sortBy=${sortBy}&sort=${sort}&skip=${skip}&limit=${limit}`);

    if(isLoading) {
        return <p>Loading...</p>
    };

    if (!data) {
        return <p>Sorry! Books could not be retrieved.</p>
    }

    return (
        <div>
            <Heading title="WELCOME to BookCrate!" subtitle="Which book do you want to have today? Check out all the books here. Just click on Borrow to borrow a book." />
            <BooksTable books={data.data}/>
        </div>
    );
};

export default Books;
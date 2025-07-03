import BooksTable from "@/components/BooksTable";
import { useGetAllBooksQuery } from "@/redux/api/baseApi";
import { useAppSelector } from "@/redux/hooks";
import type { Ibook } from "@/types";


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
            THIS IS ALL BOOKS ROUTE
            <BooksTable books={data.data}/>
        </div>
    );
};

export default Books;
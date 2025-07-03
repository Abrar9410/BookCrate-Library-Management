import { useGetAllBooksQuery } from "@/redux/api/baseApi";
import { useState } from "react";


const Books = () => {

    const [filter, setFilter] = useState('');
    const [sortBy, setSortBy] = useState('');
    const [sort, setSort] = useState('');
    const [skip, setSkip] = useState(0);
    const [limit, setLimit] = useState(5);
    
    const { data, isLoading } = useGetAllBooksQuery(`?filter=${filter}&sortBy=${sortBy}&sort=${sort}&skip=${skip}&limit=${limit}`);

    if(isLoading) {
        return <p>Loading...</p>
    };

    return (
        <div>
            THIS IS ALL BOOKS ROUTE
            {
                data.data.map(book => (
                    <p key={book._id}>{book.title}</p>
                ))
            }
        </div>
    );
};

export default Books;
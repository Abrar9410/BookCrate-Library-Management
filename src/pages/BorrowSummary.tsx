import BorrowSummaryTable from "@/components/BorrowSummaryTable";
import Heading from "@/components/Heading";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import { useGetBorrowSummaryQuery } from "@/redux/api/baseApi";
import { useAppSelector } from "@/redux/hooks";


const BorrowSummary = () => {

    const { borrowSortBy, borrowSort, borrowSkip, borrowLimit } = useAppSelector((state) => state.queries);
        
        const { data, isLoading } = useGetBorrowSummaryQuery(`?sortBy=${borrowSortBy}&sort=${borrowSort}&skip=${borrowSkip}&limit=${borrowLimit}`);
    
        if(isLoading) {
            return <LoadingSkeleton/>
        };
    
        if (!data) {
            return <p>Sorry! Borrow Summary could not be retrieved.</p>
        }

    return (
        <div>
            <Heading title="Borrow Summary" subtitle="This page shows the record of which books and how many copies of those books have been borrowed." />
            <BorrowSummaryTable borrowSummary={data.data} />
        </div>
    );
};

export default BorrowSummary;
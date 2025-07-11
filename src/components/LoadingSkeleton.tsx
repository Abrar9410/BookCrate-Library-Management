import { Skeleton } from "@/components/ui/skeleton"

function LoadingSkeleton() {
    return (
        <div className="mt-8 flex flex-col justify-center items-center space-y-3">
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
            </div>
        </div>
    )
}

export default LoadingSkeleton;

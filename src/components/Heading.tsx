import { cn } from "@/lib/utils";
import { useIsDarkMode } from "@/utilities";

const Heading = ({ title, subtitle }: {title:string, subtitle:string}) => {

    const isDarkMode = useIsDarkMode();

    return (
        <div className={`${cn(isDarkMode? 'text-yellow-500': 'text-yellow-700')} text-center my-8`}>
            <h2 className="font-bold text-lg min-[300px]:text-xl min-[450px]:text-2xl sm:text-3xl lg:text-4xl">
                {title}
            </h2>
            <p className="lg:text-lg pt-4">
                {subtitle}
            </p>
        </div>
    );
};

export default Heading;
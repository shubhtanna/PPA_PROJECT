import { Button } from "../ui/button";
import { GoArrowRight } from "react-icons/go";

const DemoSection = () => {
    return (
        <div className="flex flex-col gap-8 justify-center items-center py-10 bg-[#F5F7FA]">
            <h1 className="text-[#263238] text-3xl sm:text-4xl lg:text-5xl font-semibold max-w-[90%] text-center">
                Pellentesque suscipit fringilla<br className="hidden lg:inline"/> libero eu.
            </h1>

            <Button className="flex justify-center items-center gap-2 text-base sm:text-lg">
                <p>Get a Demo</p>
                <GoArrowRight size={20} />
            </Button>
        </div>
    );
};

export default DemoSection;
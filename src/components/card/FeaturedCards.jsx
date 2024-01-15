import { CodeIcon, HeartIcon, SparklesIcon } from "../icon/Icons";
import FeaturedCard from "./FeaturedCard";

export function FeaturedCards() {
  return (
    <div className="pt-10 px-4 md:mx-20">
      <div className="flex flex-col gap-4 lg:flex-row lg:gap-8">
        <FeaturedCard
          icon={
            <div className="rounded-full bg-amber-400 p-3.5 dark:bg-amber-500">
              <SparklesIcon className="h-5 w-5 text-white" />
            </div>
          }
          title="Clean & Intuitive"
          desc="Keep the UI clean with a modern touch without compromising UX."
        />
        <FeaturedCard
          icon={
            <div className="rounded-full bg-amber-500 p-3.5 dark:bg-amber-600">
              <HeartIcon className="h-5 w-5 text-white" />
            </div>
          }
          title="Detail Oriented"
          desc="Awareness to ease of access, UI consistency, and improved UX."
        />
        <FeaturedCard
          icon={
            <div className="rounded-full bg-amber-600 p-3.5 dark:bg-amber-700">
              <CodeIcon className="h-5 w-5 text-white" />
            </div>
          }
          title="Pretty & Optimized"
          desc="Writing clean code is a top priority while keeping it optimized."
        />
      </div>
    </div>
  );
}

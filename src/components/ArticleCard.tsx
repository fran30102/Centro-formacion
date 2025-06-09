import { Button } from "@/components/ui/button";

interface ArticleCardProps {
  date: string;
  title: string;
  description: string;
  imageAlt?: string;
}

const ArticleCard = ({
  date,
  title,
  description,
  imageAlt = "",
}: ArticleCardProps) => {
  return (
    <article className="w-full max-w-[785px] h-[352px] bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="flex h-full">
        {/* Image section */}
        <div className="w-[280px] h-full bg-gray-200 flex-shrink-0 flex items-center justify-center">
          <span className="text-gray-500 text-sm">Imagen</span>
        </div>

        {/* Content section */}
        <div className="flex-1 bg-[#E8E8E8] p-6 flex flex-col justify-between">
          <div className="space-y-4">
            {/* Date */}
            <div className="text-black text-xl font-medium tracking-[1.2px] font-roboto">
              {date}
            </div>

            {/* Title */}
            <h3 className="text-black text-2xl font-normal tracking-[1.3px] leading-relaxed font-roboto">
              {title}
            </h3>

            {/* Description */}
            <p className="text-black text-lg font-light tracking-[1px] leading-relaxed line-clamp-2 font-roboto">
              {description}
            </p>
          </div>

          {/* Read more button */}
          <div className="mt-4">
            <Button
              variant="ghost"
              className="text-[#001F3F] text-lg font-bold tracking-[1px] hover:bg-transparent hover:text-[#001F3F]/80 px-0 h-auto font-roboto"
            >
              Leer
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;

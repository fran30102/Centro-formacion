import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative">
      {/* Light gray background section */}
      <div className="relative w-full h-[562px] bg-[#EEEEEE]">
        <div className="absolute inset-0 bg-[#001F3F] h-[488px] top-5"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full items-center py-8">
            {/* Left video/image area */}
            <div className="relative mt-5">
              <div className="w-full h-[450px] bg-gray-300 flex items-center justify-center aspect-video">
                <span className="text-gray-600 font-bold text-xl">
                  SUMATE YA 1
                </span>
              </div>
            </div>

            {/* Right video/image area */}
            <div className="relative mt-5">
              <div className="w-full h-[450px] bg-gray-300 flex items-center justify-center aspect-video">
                <span className="text-gray-600 font-bold text-xl">
                  CFP 408 Eduardo Fernández Loop
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action button */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20"></div>
      </div>
      {/* Background wallpaper section */}
      <div className="w-full h-[1080px] bg-gray-100 flex items-center justify-center aspect-[16/9]">
        <span className="text-gray-500 text-xl">
          Fondo de Pantalla Aesthetic
        </span>
      </div>
    </section>
  );
};

export default HeroSection;

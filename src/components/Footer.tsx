const Footer = () => {
  return (
    <footer className="bg-[#FAFAFA] py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
          {/* Government of Buenos Aires Logo */}
          <div className="flex justify-center">
            <div className="w-[279px] h-[180px] bg-gray-300 rounded-lg flex items-center justify-center">
              <span className="text-gray-600 text-sm text-center">
                GobBsAs Logo
              </span>
            </div>
          </div>

          {/* CFP Logo */}
          <div className="flex justify-center">
            <div className="w-[482px] h-[199px] bg-gray-300 rounded-lg flex items-center justify-center">
              <span className="text-gray-600 text-sm text-center">
                CFP 408 Logo
              </span>
            </div>
          </div>

          {/* Compromiso Logo */}
          <div className="flex justify-center">
            <div className="w-[198px] h-[200px] bg-gray-300 rounded-lg flex items-center justify-center">
              <span className="text-gray-600 text-sm text-center">
                Compromiso Logo
              </span>
            </div>
          </div>

          {/* UNDELTA Logo */}
          <div className="flex justify-center">
            <div className="w-[367px] h-[142px] bg-gray-300 rounded-lg flex items-center justify-center">
              <span className="text-gray-600 text-sm text-center">
                UNDELTA Logo
              </span>
            </div>
          </div>
        </div>

        {/* Contact information */}
        <div className="mt-16 text-center space-y-4">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8">
            <div className="text-black text-2xl font-normal tracking-[1.5px] font-pavanam">
              cfp408tigre@abc.gob.ar
            </div>
            <div className="hidden md:block w-8 h-0.5 bg-black"></div>
            <div className="text-black text-2xl font-normal tracking-[1.5px] font-pavanam">
              +54 11 7600-8507
            </div>
          </div>
          <div className="text-black text-2xl font-normal tracking-[1.8px] mt-4 font-pavanam">
            Islas Orcadas 765, Pacheco
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Scroll, Sword, Heart, Feather } from "lucide-react";

function Pillars() {
  return (
    <div className="w-full py-16  backdrop-blur-md">
      <div className="max-w-[85%] mx-auto">
        {/* Ancient-style heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#670404]">
            Ancient Pillars of Wisdom
          </h2>
          <p className="mt-4 text-gray-600 italic">
            "Knowledge passed through millennia"
          </p>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Understanding Pillar */}
          <div className="group relative backdrop-blur-sm rounded-lg p-6 shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.25)] transition-all duration-300">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#670404] rounded-full flex items-center justify-center text-white shadow-lg">
              <Scroll className="w-6 h-6" />
            </div>
            <div className="mt-8 text-center">
              <h3 className="text-xl font-semibold mb-2">Understand</h3>
              <div className="w-12 h-[2px] bg-[#670404] mx-auto mb-4"></div>
              <p className="text-gray-600">
                Wisdom begins with understanding. Master the ancient knowledge
                that has guided men for generations.
              </p>
            </div>
          </div>

          {/* Dominate Pillar */}
          <div className="group relative backdrop-blur-sm rounded-lg p-6 shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.25)] transition-all duration-300">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#670404] rounded-full flex items-center justify-center text-white shadow-lg">
              <Sword className="w-6 h-6" />
            </div>
            <div className="mt-8 text-center">
              <h3 className="text-xl font-semibold mb-2">Dominate</h3>
              <div className="w-12 h-[2px] bg-[#670404] mx-auto mb-4"></div>
              <p className="text-gray-600">
                Command respect through time-tested principles of masculine
                leadership and strength.
              </p>
            </div>
          </div>

          {/* Enjoy Pillar */}
          <div className="group relative backdrop-blur-sm rounded-lg p-6 shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.25)] transition-all duration-300">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#670404] rounded-full flex items-center justify-center text-white shadow-lg">
              <Heart className="w-6 h-6" />
            </div>
            <div className="mt-8 text-center">
              <h3 className="text-xl font-semibold mb-2">Enjoy</h3>
              <div className="w-12 h-[2px] bg-[#670404] mx-auto mb-4"></div>
              <p className="text-gray-600">
                Experience the profound joy that comes from mastering the
                eternal dynamics of masculine-feminine energy.
              </p>
            </div>
          </div>

          {/* Liberate Pillar */}
          <div className="group relative backdrop-blur-sm rounded-lg p-6 shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.25)] transition-all duration-300">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#670404] rounded-full flex items-center justify-center text-white shadow-lg">
              <Feather className="w-6 h-6" />
            </div>
            <div className="mt-8 text-center">
              <h3 className="text-xl font-semibold mb-2">Liberate</h3>
              <div className="w-12 h-[2px] bg-[#670404] mx-auto mb-4"></div>
              <p className="text-gray-600">
                Break free from modern misconceptions and embrace the timeless
                truths of relationship dynamics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pillars;

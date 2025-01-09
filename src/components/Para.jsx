function Para() {
  return (
    <div className="relative">
      <div className="py-12 lg:py-16">
        <div className="text-center lg:text-left space-y-8 animate__animated animate__fadeInLeft max-w-[85%] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-b from-neutral-800 to-[#8B0000] bg-clip-text text-transparent ">
            What Is Hardcore <br className="hidden md:block" /> Wisdoms?
          </h2>
          <p className="text-base md:text-lg text-neutral-800 leading-relaxed font-mono">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus aliquam dolor vitae delectus fuga at quibusdam
            laudantium possimus nesciunt aliquid voluptatibus aspernatur ex
            aperiam, quae repudiandae, dicta, quaerat error. Sint?
          </p>
          <p className="text-base md:text-lg text-neutral-800 leading-relaxed font-mono">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            provident reprehenderit perspiciatis corrupti dolor. Aut, error
            expedita. Reprehenderit sequi rem odit nulla vitae hic doloribus ea
            accusamus!
          </p>
        </div>
      </div>

      {/* Decorative blurs - adjusted for subtler effect */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#8B0000]/20 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-72 bg-gradient-to-r from-neutral-900/20 to-[#8B0000]/20 rounded-full blur-[150px] -z-10" />
    </div>
  );
}

export default Para;

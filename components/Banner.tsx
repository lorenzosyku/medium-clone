function Banner() {
  return (
    
    <div className="flex justify-between items-center bg-yellow-400 border-y border-black py-10 lg:py-0">
    <div className="px-10 space-y-5">
      <h1 className="text-6xl max-w-xl font-serif">
        <span className="underline decoration-black decoration-4">
          Medium
        </span>{" "}
        is a place to write, read and connect
      </h1>
      <h2>
        It's easy and free to post your thinking on any topic and connect with
        million of readers
      </h2>
    </div>
    <img
      className="hidden md:inline-flex h-32 lg:h-full"
      src="https://img.search.brave.com/54LcAZkEB6DjniuwufvIrlc8I0dxLAMpp8hLupCDNEQ/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC41/MEE3TzJBRUplWmtU/UWxiaUlSLUVBSGFG/aiZwaWQ9QXBp"
    />
  </div>
  );
}

export default Banner;

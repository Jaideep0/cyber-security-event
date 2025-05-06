function CyberRobot() {
  return (
    <div className="relative w-64 h-64 md:w-96 md:h-96">
      {/* Robot Body */}
      <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-secondary border-4 border-black rounded-xl cartoon-shadow">
        {/* Robot Face */}
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/4 bg-white border-2 border-black rounded-full flex justify-center items-center">
          <div className="w-1/3 h-2/3 bg-black rounded-full"></div>
        </div>

        {/* Robot Antenna */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full">
          <div className="w-4 h-12 bg-secondary border-2 border-black"></div>
          <div className="w-8 h-8 bg-primary border-2 border-black rounded-full -mt-4 ml-[-2px]"></div>
        </div>

        {/* Robot Arms */}
        <div className="absolute top-1/2 left-0 transform -translate-x-full">
          <div className="w-12 h-4 bg-secondary border-2 border-black"></div>
          <div className="w-6 h-8 bg-secondary border-2 border-black mt-2 ml-6 rounded-b-lg"></div>
        </div>

        <div className="absolute top-1/2 right-0 transform translate-x-full">
          <div className="w-12 h-4 bg-secondary border-2 border-black"></div>
          <div className="w-6 h-8 bg-secondary border-2 border-black mt-2 mr-6 rounded-b-lg"></div>
        </div>

        {/* Robot Legs */}
        <div className="absolute bottom-0 left-1/4 transform translate-y-full">
          <div className="w-4 h-12 bg-secondary border-2 border-black"></div>
          <div className="w-8 h-4 bg-secondary border-2 border-black mt-2 ml-[-2px]"></div>
        </div>

        <div className="absolute bottom-0 right-1/4 transform translate-y-full">
          <div className="w-4 h-12 bg-secondary border-2 border-black"></div>
          <div className="w-8 h-4 bg-secondary border-2 border-black mt-2 ml-[-2px]"></div>
        </div>

        {/* Robot Details */}
        <div className="absolute top-2/3 left-1/4 w-1/2 h-1/6 flex justify-around items-center">
          <div className="w-3 h-3 bg-primary border-1 border-black rounded-full"></div>
          <div className="w-3 h-3 bg-primary border-1 border-black rounded-full"></div>
          <div className="w-3 h-3 bg-primary border-1 border-black rounded-full"></div>
        </div>
      </div>

      {/* Laptop/Shield */}
      <div className="absolute bottom-1/4 right-1/4 w-1/3 h-1/6 bg-primary border-2 border-black rounded-lg transform rotate-12 cartoon-shadow">
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-white border-1 border-black rounded-sm"></div>
      </div>
    </div>
  )
}

export default CyberRobot

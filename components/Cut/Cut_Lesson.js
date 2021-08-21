import React from "react";
import Image from "next/image";

export function Cut_Lesson() {
  return (
        <div className="relative flex content-center justify-center h-full">
          

          
          <div className="w-full h-full absolute">
          <Image
                  src="/img/img-1-1000x600.jpg"
                  alt=""
                  quality={100}
                  width={1920}
                  height={1080}
                  
                />
          </div>
          
          
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        
        
        
        </div>


  );
}

import Image from "next/image";
import React from "react";

function SejarahDesa() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 items-center mt-13">
      <div className="relative flex-shrink-0  w-[90%] h-[90%] rounded-lg">
        <Image
          src={"/img/joglo.webp"}
          fill
          alt="sejarah-desa"
          className=" object-cover rounded-lg"
        />
      </div>
      <div className="md:col-span-2 pr-3 md:pr-0">
        <h2>Sejarah Desa</h2>
        <p className="!text-[#686867] break-words w-full  ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          hendrerit cursus tellus. Nullam sollicitudin tincidunt venenatis. Duis
          tincidunt orci magna, ut mollis dui congue nec. Quisque interdum nunc
          vel gravida aliquam. Fusce vestibulum eget diam quis aliquet. Donec
          consequat, arcu dictum cursus blandit, leo nunc fringilla enim, eu
          cursus dolor quam eu lorem. Pellentesque ut neque sed odio tristique
          tincidunt eu vitae nunc. Nam in nibh at tortor ultrices semper vitae
          quis lectus.
        </p>

        <p className="!text-[#686867]  mt-2 break-words w-full">
          Mauris lacinia lorem vel ipsum dictum varius. Suspendisse posuere mi
          ac metus pharetra iaculis. Praesent velit risus, rhoncus ut porttitor
          non, vestibulum non velit. Fusce sit amet urna sed tellus tempor
          blandit sed vel metus. Vivamus placerat lorem lacus, cursus cursus
          orci molestie sed. Quisque a nibh et ex aliquam auctor vitae nec nibh.
          Nulla eu suscipit enim, non sagittis dui. Morbi et tincidunt mauris,
          eget congue arcu. Mauris sed metus vel risus dapibus feugiat ac vel
          magna.
        </p>
        <p className="!text-[#686867]  mt-2 break-words w-full ">
          Duis sapien justo, mattis a tellus a, condimentum euismod massa.
          Quisque suscipit et arcu fermentum egestas. Phasellus finibus magna
          sed sodales condimentum. Ut tempus sapien quis turpis porttitor
          euismod. Donec non maximus nunc. Fusce rutrum est vel ipsum aliquam, a
          euismod lectus laoreet. Ut sit amet imperdiet nisi.
        </p>
      </div>
    </div>
  );
}

export default SejarahDesa;

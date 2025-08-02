import Image from "next/image";

function DisplayListImages({
  images,
  handleImageClick,
  className,
}: {
  images: string[];
  handleImageClick: (index: number) => void;
  className?: string;
}) {
  if (images.length >= 3) {
    return (
      <div
        className={`grid grid-cols-(--grid-3-image) gap-1 mt-4 h-[238px] md:h-[380px] ${className}`}
      >
        <div className="relative h-full  col-span-2  cursor-pointer">
          <Image
            src={images[0]}
            alt="UMKM Image 1"
            fill
            className="rounded-lg object-cover"
            onClick={() => {
              handleImageClick(0);
            }}
          />
        </div>

        <div className="grid grid-rows-2 gap-1  ">
          <div className="relative h-full w-full cursor-pointer">
            <Image
              src={images[1]}
              alt="UMKM Image 2"
              fill
              className="rounded-lg object-cover"
              onClick={() => {
                handleImageClick(1);
              }}
            />
          </div>

          <div className="relative h-full w-full cursor-pointer">
            <Image
              src={images[2]}
              alt="UMKM Image 3"
              fill
              className="rounded-lg object-cover"
              onClick={() => {
                handleImageClick(2);
              }}
            />
          </div>
        </div>
      </div>
    );
  } else if (images.length >= 2) {
    return (
      <div className="grid grid-cols-2 gap-2 mt-4">
        <div className="relative w-full max-h-[380px] aspect-square cursor-pointer">
          <Image
            src={images[0]}
            alt="UMKM Image 1"
            fill
            className="rounded-lg object-cover"
            onClick={() => {
              handleImageClick(0);
            }}
          />
        </div>
        <div className="relative w-full max-h-[380px] aspect-square cursor-pointer">
          <Image
            src={images[1]}
            alt="UMKM Image 2"
            fill
            className="rounded-lg object-cover"
            onClick={() => {
              handleImageClick(1);
            }}
          />
        </div>
      </div>
    );
  } else if (images.length === 1) {
    return (
      <div className="grid grid-cols-1 mt-4">
        <div className="relative max-w-[920px] w-full max-h-[380px] aspect-square cursor-pointer">
          <Image
            src={images[0]}
            alt="UMKM Image 1"
            fill
            className="rounded-lg object-cover"
            onClick={() => {
              handleImageClick(0);
            }}
          />
        </div>
      </div>
    );
  }
}

export default DisplayListImages;

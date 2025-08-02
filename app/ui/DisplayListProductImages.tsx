import { ImageModal } from "@/type/type";
import Image from "next/image";

function DisplayListProductImages({
  images,
  handleImageClick,
  className,
  saveImagesProductModal,
}: {
  images: string[];
  handleImageClick: (index: number) => void;
  className?: string;
  saveImagesProductModal: (images: ImageModal[]) => void;
}) {
  if (images.length >= 3) {
    return (
      <div
        className={`grid grid-cols-2 gap-1 mt-4 h-[238px] md:h-[380px] ${className}`}
      >
        <div className="relative h-full    cursor-pointer">
          <Image
            src={images[0]}
            alt="UMKM Image 1"
            fill
            className="rounded-lg object-cover"
            onClick={() => {
              handleImageClick(0);
              saveImagesProductModal(
                images.map((image, index) => ({
                  thumbnail: image,
                  original: image,
                }))
              );
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
                saveImagesProductModal(
                  images.map((image, index) => ({
                    thumbnail: image,
                    original: image,
                  }))
                );
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
                saveImagesProductModal(
                  images.map((image, index) => ({
                    thumbnail: image,
                    original: image,
                  }))
                );
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
              saveImagesProductModal(
                images.map((image, index) => ({
                  thumbnail: image,
                  original: image,
                }))
              );
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
              saveImagesProductModal(
                images.map((image, index) => ({
                  thumbnail: image,
                  original: image,
                }))
              );
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
              saveImagesProductModal(
                images.map((image, index) => ({
                  thumbnail: image,
                  original: image,
                }))
              );
            }}
          />
        </div>
      </div>
    );
  }
}

export default DisplayListProductImages;

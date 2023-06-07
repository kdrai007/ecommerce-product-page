import { useState } from "react";
import { useGlobalContext } from "../context/productcontext";
const CardImage = () => {
    const { menu } = useGlobalContext();
    const Images = {
        thumnail: [
            "./images/image-product-1-thumbnail.jpg",
            "./images/image-product-2-thumbnail.jpg",
            "./images/image-product-3-thumbnail.jpg",
            "./images/image-product-4-thumbnail.jpg",
        ],
        images: [
            "./images/image-product-1.jpg",
            "./images/image-product-2.jpg",
            "./images/image-product-3.jpg",
            "./images/image-product-4.jpg",
        ],
    };

    const [selectedImg, setSelectedImg] = useState(0);
    const [activeImg, setActiveImg] = useState(0);

    function handleImage(str: string) {
        if (str === "increment") {
            if (selectedImg >= 0 && selectedImg < Images.images.length - 1) {
                setSelectedImg(selectedImg + 1);
                console.log(Images.images[selectedImg + 1]);
            }
        }

        if (str === "decrement") {
            if (selectedImg > 0) {
                setSelectedImg(selectedImg - 1);
                console.log(Images.images[selectedImg - 1]);
            }
        }
    }
    function handleActive(index: number) {
        setActiveImg(index);
        setSelectedImg(index);
    }

    return (
        <div className="relative basis-[50%] xl:basis-[40%]">
            <div>
                <img className='rounded-lg lg:w-[450px] lg:h-[320px] xl:w-[600px] xl:h-[400px] object-cover' style={{ opacity: `${!menu ? "0.5" : ""}` }} src={Images.images[selectedImg]} alt="" />
                <button
                    className="absolute next md:hidden"
                    onClick={() => handleImage("increment")}
                >
                    <img src="./images/icon-next.svg" alt="" />
                </button>
                <button
                    className="absolute prev  md:hidden"
                    onClick={() => handleImage("decrement")}
                >
                    <img src="./images/icon-previous.svg" alt="" />
                </button>
            </div>
            <div className='flex flex-row gap-4 mt-8'>
                {Images.images.map((item, index) => (
                    <img className={`w-[100px] h-[100px] rounded-lg  object-contain cursor-pointer hover:opacity-30 transition-opacity ease-in-out duration-200 hidden md:block ${index === activeImg && 'border-[3px] border-Orange opacity-30'}`} onClick={() => handleActive(index)} src={item} alt="item image" key={index} />
                ))}
            </div>
        </div>
    );
};

export default CardImage;

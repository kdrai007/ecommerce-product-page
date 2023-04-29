import { useState } from "react";

const CardImage = () => {
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

    return (
        <div className="w-full relative">
            <img src={Images.images[selectedImg]} alt="" />
            <button
                className="absolute next"
                onClick={() => handleImage("increment")}
            >
                <img src="./images/icon-next.svg" alt="" />
            </button>
            <button
                className="absolute prev"
                onClick={() => handleImage("decrement")}
            >
                <img src="./images/icon-previous.svg" alt="" />
            </button>
        </div>
    );
};

export default CardImage;

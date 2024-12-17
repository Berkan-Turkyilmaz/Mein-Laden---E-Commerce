import React from "react";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io"; // Yıldız ikonları

function RatingComp({ productDetails }) {
  const { rate } = productDetails?.rating || {}; 
  
  console.log(rate, "rate")// Ürün rating değeri

  // Yıldızları oluşturacak bir fonksiyon
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rate); // Tam dolu yıldız sayısı
    const hasHalfStar = rate % 1 >= 0.5; // Yarım yıldız kontrolü
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); // Boş yıldız sayısı

    // Tam yıldızlar
    for (let i = 0; i < fullStars; i++) {
      stars.push(<IoIosStar  className="text-yellow-500" />);
    }

    // Yarım yıldız
    if (hasHalfStar) {
      stars.push(
        <IoIosStarHalf  className="text-yellow-500" />
      );
    }

    // Boş yıldızlar
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<IoIosStarOutline  className="text-yellow-400" />);
    }

    return stars;
  };

  return (
    <div className="flex items-center gap-1">
      {renderStars()}
    </div>
  );
}

export default RatingComp;

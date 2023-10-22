import StarRating from '../../common/StarRating';
import Stock from '../../common/Stock';

interface ItemProps {
  image: string;
  rating: number;
  reviews: string;
  reviewsCount: number;
  description: string;
  price: number;
  discount: number;
  stock: boolean;
}

const Card = ({
  image,
  rating,
  reviewsCount,
  description,
  price,
  discount,
  reviews,
  stock,
}: ItemProps) => {
  return (
    <div className="w-60 px-6 bg-white flex flex-col">
      {/* Наличие */}
      <Stock stock={stock} />

      {/* картинка */}
      <div className="w-40 h-40 self-center">
        <img
          src={image}
          alt="Описание изображения"
          className="w-full h-full object-cover"
        />
      </div>

      {/* рейтинг */}
      <div className="h-7 text-xs flex items-center">
        <StarRating rating={rating} />
        <a
          className="ml-1 text-gray-400"
          href={reviews}
        >{`Отзывы(${reviewsCount})`}</a>
      </div>

      {/* описание */}
      <p className="text-sm line-clamp-3">{description}</p>

      {/* цена */}
      <div className="my-2.5 flex flex-col justify-center">
        {discount > 0 && (
          <div className="text-xs text-gray-400 line-through">{`₽ ${price.toFixed(
            2
          )}`}</div>
        )}
        <div className="text-lg">{`₽ ${(
          price -
          price * (discount / 100)
        ).toFixed(2)}`}</div>
      </div>
    </div>
  );
};

export default Card;

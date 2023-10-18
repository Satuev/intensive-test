import StarRating from '../../common/StarRating';
import Stock from '../../common/Stock';

interface ItemProps {
    item: {
        image: string;
        rating: number;
        reviews: string;
        reviewsCount: number;
        description: string;
        price: number;
        discount: number;
        stock: boolean;
    };
}

const Card = ({ item }: ItemProps) => {
    const {
        image,
        rating,
        reviewsCount,
        description,
        price,
        discount,
        reviews,
        stock,
    } = item;

    return (
        <div className="w-[234px] h-[346px] px-[25px] bg-white flex flex-col">
            {/* Наличие */}
            <Stock stock={stock} />

            {/* картинка */}
            <div className="w-[150px] h-[150px] self-center">
                <img
                    src={image}
                    alt="Описание изображения"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* рейтинг */}
            <div className="h-[30px] text-[12px] flex items-center">
                <StarRating rating={rating} />
                <a
                    className="ml-1 text-gray-400"
                    href={reviews}
                >{`Отзывы(${reviewsCount})`}</a>
            </div>

            {/* описание */}
            <p className="text-[13px] line-clamp-3">{description}</p>

            {/* цена */}
            <div className="h-[75px] flex flex-col justify-center">
                {discount > 0 && (
                    <div className="text-[12px] text-gray-400 line-through">{`₽ ${price.toFixed(
                        2
                    )}`}</div>
                )}
                <div className="text-[18px]">{`₽ ${(
                    price -
                    price * (discount / 100)
                ).toFixed(2)}`}</div>
            </div>
        </div>
    );
};

export default Card;

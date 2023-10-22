import Card from './components/Card';
import mockImage from '../src/assets/mockImage.jpeg';

const items = [
  {
    id: 1,
    image: mockImage,
    rating: 4,
    reviews: '#',
    reviewsCount: 7,
    description:
      'Игровой ноутбук MSI Katana оборудован шестиядерным процессором Intel Core i5 11260H.',
    price: 30000.0,
    discount: 20,
    stock: true,
  },
  {
    id: 2,
    image: mockImage,
    rating: 4,
    reviews: '#',
    reviewsCount: 22,
    description:
      'Игровой ноутбук MSI Katana оборудован шестиядерным процессором Intel Core i5 11260H.',
    price: 55000.0,
    discount: 10,
    stock: false,
  },
];

function App() {
  return (
    <div className="bg-slate-300 w-screen h-screen flex justify-center items-center gap-2">
      {items.map((item) => (
        <Card
          key={item.id}
          image={item.image}
          rating={item.rating}
          reviewsCount={item.reviewsCount}
          description={item.description}
          price={item.price}
          discount={item.discount}
          reviews={item.reviews}
          stock={item.stock}
        />
      ))}
    </div>
  );
}

export default App;

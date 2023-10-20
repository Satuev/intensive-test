import Card from './components/Card';
import mockImage from '../src/assets/mockImage.jpeg';

const items = [
  {
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
        <Card item={item} />
      ))}
    </div>
  );
}

export default App;

import InStock from './InStock';
import NotInStock from './NotInStock';

type StockProps = {
  stock: boolean;
};

const Stock = ({ stock }: StockProps) => {
  return (
    <div className="h-6 flex items-center text-[10px] ">
      {stock ? <InStock /> : <NotInStock />}
    </div>
  );
};

export default Stock;

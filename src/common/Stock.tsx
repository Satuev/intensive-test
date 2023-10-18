
type StockProps = {
    stock: boolean;
};

const Stock = ({ stock }: StockProps) => {
    return (
        <div className="h-[26px] flex items-center text-[10px] ">
            {stock ? (
                <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle cx="5" cy="5" r="5" fill="#78A962" />
                    <path
                        d="M7 4L4.48404 7L3 5.27853"
                        stroke="white"
                        stroke-linecap="round"
                    />
                </svg>
            ) : (
                <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle cx="5" cy="5" r="5" fill="#C94D3F" />
                    <path
                        d="M5.67669 5.85626L6.02669 5.50626C6.07383 5.4597 6.13347 5.42783 6.19838 5.41452C6.26328 5.4012 6.33065 5.40702 6.39231 5.43126L6.81888 5.60157C6.88119 5.62686 6.93462 5.67004 6.97244 5.72565C7.01025 5.78126 7.03076 5.84682 7.03138 5.91407V6.69532C7.03101 6.74107 7.0214 6.78627 7.00311 6.8282C6.98481 6.87013 6.95823 6.90793 6.92494 6.93931C6.89166 6.9707 6.85237 6.99502 6.80944 7.01083C6.7665 7.02663 6.72082 7.03358 6.67513 7.03126C3.68607 6.84532 3.08294 4.31407 2.96888 3.34532C2.96358 3.29775 2.96842 3.24959 2.98307 3.20402C2.99772 3.15846 3.02186 3.11651 3.05389 3.08093C3.08592 3.04536 3.12511 3.01698 3.1689 2.99764C3.21269 2.97831 3.26007 2.96846 3.30794 2.96876H4.06263C4.12997 2.96896 4.19572 2.9893 4.25141 3.02717C4.3071 3.06504 4.35018 3.1187 4.37513 3.18126L4.54544 3.60782C4.57048 3.66924 4.57687 3.73667 4.56381 3.8017C4.55075 3.86672 4.51882 3.92646 4.472 3.97344L4.122 4.32344C4.122 4.32344 4.32356 5.68751 5.67669 5.85626Z"
                        fill="white"
                    />
                </svg>
            )}
            <div className={`ml-1 ${stock ? 'text-[#78A962]' : 'text-[#C94D3F]'}`}>{stock ? 'В наличии' : 'Проверить наличие'}</div>
        </div>
    );
};

export default Stock;

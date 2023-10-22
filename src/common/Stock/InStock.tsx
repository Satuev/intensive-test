const InStock = () => {
  return (
    <>
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
          strokeLinecap="round"
        />
      </svg>
      <div className="ml-1 text-[#78A962]">В наличии</div>
    </>
  );
};

export default InStock;

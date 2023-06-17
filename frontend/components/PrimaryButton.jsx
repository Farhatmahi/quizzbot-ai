const PrimaryButton = ({ children }) => {
  return (
    <button
      className="btn btn-primary text-white  transition-all
      w-full py-4 rounded-full
     duration-500 bg-gradient-to-r from-[#FC495F] from-62%  to-[#FFC371] to-38% bg-size-200 
     bg-pos-0 hover:bg-pos-100"
    >
      {children}
    </button>
  );
};

export default PrimaryButton;

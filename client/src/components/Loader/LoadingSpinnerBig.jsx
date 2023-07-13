import { RotatingLines } from "react-loader-spinner";

const LoaderSpinnerBig = () => {
  return (
    <RotatingLines
      strokeColor="black"
      strokeWidth="5"
      animationDuration="0.75"
      width="50"
      visible={true}
    />
  );
};

export default LoaderSpinnerBig;

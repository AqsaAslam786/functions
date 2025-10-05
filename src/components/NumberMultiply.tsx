// A function  that checks if a number is  a multiple of 7 or not

interface MultiplyNumProps{
    num1: number;
}



const NumberMultiply = ({ num1 }: MultiplyNumProps) => {
    function isMultiplyOf7(a: number): string {
        if (a % 7 === 0 ) {
            return `${a} is multiple of seven`;
        } else {
            `${a} is not multiple of seven`;
        }
    }


  return (
    <div>
      <h1 className="font-bold text-1xl">Solution 2</h1>
      Result : {isMultiplyOf7(num1)}
    </div>
  );
};

export default NumberMultiply

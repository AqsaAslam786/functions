// Create  a component  that  has a function that  returns the    maximum of 3 numbers    using if else only.

interface MaxNumberProps{
    num1: number;
    num2: number;
    num3: number;

}

const MaxNumber = ({num1, num2, num3}: MaxNumberProps) => {
    function largestNumber(a: number, b: number, c: number): string{
        if(a > b && a > c){
            return `${a} is the GreatestNum`;
            }
            else if (b > a && b > c){
                return `${b} is the GreatestNum`;
            }
            else {
               return `${c} is the GreatestNum`;
            }
    } 
  return (
    <div>
      <h1 className="font-bold text-1xl"></h1>
      Result: {largestNumber(num1, num2, num3)}
    </div>
  );
};

export default MaxNumber

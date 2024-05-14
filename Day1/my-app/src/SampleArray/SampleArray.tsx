function SampleArray(){
    var arr1 = [1,2,3];
    var arr2 = [9,8,7];
    const sum=(n1:number,n2:number,n3:number)=>n1+n2+n3;
    const buttonClick=()=>{
        let arr3 = [...arr1,...arr2]
        const[num1,num2,num3] = arr2;//spread
      const [n1,...nums]=arr1;//spread and rest
      console.log(nums)
    }
   
return (
    <article>
        <h1>Sample Array</h1>
        <button onClick={buttonClick} className="btn btn-primary">Show Array</button>
    </article>
)
}
export default SampleArray;
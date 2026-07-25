function calci(op:string):void{
    let num1=Number(
        (document.getElementById("num1") as HTMLInputElement).value);

    let num2=Number(
            (document.getElementById("num2") as HTMLInputElement).value
        )
        
            let result:number=0;

            switch (op)
             {
                case "+": result=num1+num2;
                break;
                 case "-": result=num1-num2;
                 break;
                  case "*": result=num1*num2;
                  break;   
                   case "/": result=num1/num2;
                   break;
            }
    document.getElementById("result")!.innerHTML ="result:"+result;
}
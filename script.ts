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
                    document.getElementById("result")!.innerHTML ="result:"+result;
                break;
                 case "-": result=num1-num2;
                     document.getElementById("result")!.innerHTML ="result:"+result;

                 break;
                  case "*": result=num1*num2;
                      document.getElementById("result")!.innerHTML ="result:"+result;
                  break;   
                   case "/": 
                   if(num2==0) 
                   {
                    document.getElementById("result")!.innerHTML ="Cannot divide by zero";
                   }
                   else{
                   result=num1/num2;
                       document.getElementById("result")!.innerHTML ="result:"+result;
                   break;}
            }

}
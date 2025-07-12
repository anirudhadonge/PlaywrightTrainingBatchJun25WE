function reverseNumber(num){
    let reversNum=0;
    //let modNumber;
    reversNum = reverseWhile(reversNum,num);
    console.log(reversNum);
}

function reverseWhile(reverseNumber, num){
       while(num>0){
        //modNumber = num%10
        reversNum = reversNum*10+num%10 //
        num = Math.trunc(num/10);  // 1234= 123.4 , 4 = .4 1/10==0.1 ==0
    }
    return reverseNumber
}
reverseNumber(123);
//reverseNumber(645798764);
export function FizzBuzz(){

    let num = {}

    for(let i = 0; i <= 100; i++){

        if(i%3 === 0 && i%5 === 0){

            num[i] =  "fizzbuzz"
        }
        else if( i%3 === 0){

            num[i] =  "fizz"
        }
        else if(i%5 === 0){
            num[i] = "buzz"
        }
        else
        {

        num[i] = i
    }

    }
    return num
}
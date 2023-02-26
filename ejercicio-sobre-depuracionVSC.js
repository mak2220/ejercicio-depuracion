function fibonacci(num){
    let array = [];
    array[0]=0;
    array[1]=1;
    for(let i=0; i<num-1; i++){
        let fibo = array[i]+array[i+1];
        array =[...array,fibo];
    }
    return array
}

console.log(fibonacci(6))
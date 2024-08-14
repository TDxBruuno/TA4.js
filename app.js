function sumAll(a,b){
    for (let i = a + 1; i <= b; i++) {
        a += i;
    }
    console.log(a);
};

sumAll(1, 4);//10
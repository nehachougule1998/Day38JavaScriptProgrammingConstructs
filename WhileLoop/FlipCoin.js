
headCount = 0;
tailCount = 0;
while((headCount < 11) && (tailCount < 11) ){
    flip = Math.floor(Math.random()*2);
    if (flip == 1 ){ headCount ++;}
    if (flip == 0 ){ tailCount++;}
}
console.log(`the head count is ${headCount}.`);
console.log(`the tail count is ${tailCount}.`); 
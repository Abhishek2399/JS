console.clear();
function sum(num){
    let sum = 0;
    // QTS 1.
    sum = (num*(num+1)/2); 
    // QTS 2.
    // for(let i=1; i<num; i++){
    //     if(i%3 == 0 || i%5 == 0){
    //         console.log(i); 
    //         sum += i;
    //     }
    // }
    console.log("Sum up till " + num + " is : " + sum);
}


function parity(num){
    let ans = null;
    let out = document.getElementById("output");
    if(num % 2 == 0){
        ans = num + " is even";
    }
    else{
        ans = num + " is odd";
    }
    out.innerText = ans;   
}

function isLeap(year){
    if(year % 4 == 0 && year % 100 != 0){
        return true;   
    }
    else if(year % 100 != 0 && year % 400 == 0){
        return true;
    }
    return false;
}

function getNextLeap(currentYear){
    if(isLeap(currentYear)){
        return currentYear;
    }
    else{
        while(isLeap(currentYear) != true){
            currentYear += 1;
        }
        return currentYear;
    }
}


function nextLeap(){
    let currentYear = new Date().getFullYear();
    let ans = null;
    let leapYears = [];
    leapYears[0] = getNextLeap(currentYear);
    for(let i=1; i<20; i++){
        leapYears[i] = getNextLeap(leapYears[i-1]+4);
    }
    console.log("---------- < Upcoming 20 Leap Years> -------------")
    console.log(leapYears); 
    // out.innerText = leapYears;
}


function printRect(stringArr){
    console.log("******************")
    stringArr.forEach(element => {
        console.log('* ' + element + ' *');
    });
    console.log("******************")
}


function dollarToOther(amount){
    console.log("a. " + amount*74.28 + " INR");
    console.log("a. " + amount*109.14 + " Yen");
    console.log("a. " + amount*0.84 + " Euro");
    console.log("a. " + amount*0.72 + " Pound sterling");
}


function concatArray(arr1, arr2){
    let temp = [];
    arr1.forEach(element => {
        temp.push(element);
    });

    arr2.forEach(element => {
        temp.push(element);
    });
    
    return temp;
}

function alternateConcat(arr1, arr2){
    let temp = []
    for(let i=0; i < arr1.length + arr2.length; i++){
        if(i%2==0){
            temp.push(arr1[i/2]);
            continue;
        }
        temp.push(arr2[(i-1)/2]);
    }
    return temp;
}


function getFiboList(limit){
    fiboList = [];
    fiboList.push(1);
    fiboList.push(1);
    for(let i=2; i<limit; i++){
        fiboList.push(fiboList[i-1] + fiboList[i-2]);
    }
    return fiboList;
}







// printRect(["Hello", "World", "in", "a", "frame"])
dollarToOther(2);
alpha = ['a', 'b', 'c'];
num = [1,2,3];

combine = concatArray(alpha, num);
alternate = alternateConcat(alpha, num);

console.log(getFiboList(5));

console.clear();
function sum(){
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
    let out = document.getElementById("output");
    let currentYear = new Date().getFullYear();
    let ans = null;
    let leapYears = [];
    leapYears[0] = getNextLeap(currentYear);
    for(let i=1; i<20; i++){
        leapYears[i] = getNextLeap(leapYears[i-1]+4);
    }
    console.log("---------- < Upcoming 20 Leap Years> -------------")
    console.log(leapYears); 
    out.innerText = leapYears;
}


function printBox(){
    stringArr = ["hi", "this", "is", "abhi"];
    let rect = document.getElementById("rect");
    let para = document.createElement("p");
    para.textContent  += "************";
    rect.appendChild(para);
    stringArr.forEach(element => {
        let para = document.createElement("p");
        para.textContent += '* ' + element + ' *';
        rect.appendChild(para);
    });
    let newPara = document.createElement("p");
    newPara.textContent += "************";
    rect.appendChild(newPara);
}


function dollarToOther(){
    console.log("Entered");
    let amount = parseInt(document.getElementById("amount"));
    let currencyPrint = document.getElementById("printCurrency");

    let rupee = document.createElement('p');
    rupee.textContent = "a. " + amount*74.28 + " INR";
    currencyPrint.appendChild(rupee);

    let yen = document.createElement('p');
    yen.innerText = "b. " + amount*109.14 + " Yen"
    currency.appendChild(rupee);

    let euro = document.createElement('p');
    euro.innerText = "c. " + amount*0.84 + " Euro";
    currency.appendChild(rupee);

    let pound = document.createElement('p');
    pound.innerText = "d. " + amount*0.72 + " Pound sterling";
    currency.appendChild(rupee);
    
}


function concatArray(){
    let arr1 = document.getElementById("arr1").value.split(" ");
    let arr2 = document.getElementById("arr2").value.split(" ");
    let out = document.getElementById("arrOp");
    let temp = [];
    arr1.forEach(element => {
        temp.push(element);
    });

    arr2.forEach(element => {
        temp.push(element);
    });
    out.innerText = temp;
    return temp;
}

function alternateConcat(){
    let arr1 = document.getElementById("arr1").value.split(" ");
    let arr2 = document.getElementById("arr2").value.split(" ");
    let out = document.getElementById("arrOp");
    let temp = [];
    let largeArr = [];
    let smallLen = 0;
    let i = 0;
    console.log(arr1);
    console.log(arr2);

    if(arr2.length == 1 && arr2[0] == ""){
        temp = arr1;
        out.innerText = temp;
        return temp;
    }
    else if(arr1.length == 1 && arr1[0] == ""){
        temp = arr2;
        out.innerText = temp;
        return temp;
    }
    else if(arr1.length < arr2.length){
        smallLen = arr1.length;
        largeLen = arr2.length;
        largeArr = arr2;
    }
    else if(arr1.length > arr2.length){
        smallLen = arr2.length;
        largeLen = arr1.length;
        largeArr = arr1;
    }
    else{
        smallLen = arr1.length;
        largeLen = arr1.length;
    }

    for(i=0; i < smallLen*2; i++){
        if(i%2==0){
            temp.push(arr1[i/2]);
            continue;
        }
        temp.push(arr2[(i-1)/2]);
    }
    // i = 7-3;
    for(let j=i-smallLen; j<largeLen; j++){
        temp.push(largeArr[j])
    }
    out.innerText = temp;
    return temp;
}


function getFiboList(){
    let limit = parseInt(document.getElementById("num").value);
    let out = document.getElementById("output");
    fiboList = [];
    if(!isNaN(limit)){
        fiboList.push(1);
        // 1
        if(limit > 1){
            fiboList.push(1);
            for(let i=2; i<limit; i++){
                fiboList.push(fiboList[i-1] + fiboList[i-2]);
            }
        }
        out.innerText = fiboList;
        return fiboList;
    }
    out.innerText = "No Limit Entered";
    
}

// 1 1 2 3 5 8

// printRect(["Hello", "World", "in", "a", "frame"])
// dollarToOther(2);
// alpha = ['a', 'b', 'c'];
// num = [1,2,3];

// combine = concatArray(alpha, num);
// alternate = alternateConcat(alpha, num);

// console.log(getFiboList(5));





// 1 2 3 
// a b c d e
// {1[0] a[1] 2[2] b[3] 3[4] c[5]}
//  even odd  even odd  even odd
// even => a1
// odd => a2
// for(int i=0; i<a1+a2; i++){
//     if(i%2 == 0){
//         newArr[i] = a1[i/2]; // 0, 2/2 - 1, 4/2 - 2
//         continue;
//     }
//     newArr[i] = a2[(i-1)/2]; // (1-1)/2, (3-1)/2, (5-1)/2
// }

// 11th
function RevRandomArr(){
    let arr = document.getElementById("randArr").value.split(" ");
    let out = document.getElementById("arrOp");
    console.log(arr);
    for(let i=0; i<(arr.length)/2; i++){
        temp = arr[i];
        arr[i] = arr[arr.length - i -1];
        arr[arr.length - i - 1] = temp;   
    }
    out.innerText = arr;
}

// 12th 
function LongestToken()
{
    let arr = document.getElementById("sent").value.split("ab");
    let out = document.getElementById("tokenOp");
    longest = arr[0];
    arr.forEach(element => {
        if(element.length > longest.length && element != 'a' && element != "ab"){
            longest = element;
        }
    });
    console.log("Longest -> " + longest);
    out.innerText = "Token : " + longest;
}

// 13th
function sumUsingFor(){
    let arr = document.getElementById("elements").value.split(" ");
    let out = document.getElementById("sumOp");
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        if(!isNaN(parseInt(arr[index])) && !arr[index].includes("."))
        {
            sum += parseInt(arr[index]);
        }
        else if(!isNaN(parseInt(arr[index])) && arr[index].includes("."))
        {
            sum += parseFloat(arr[index]);
        }
    }
    out.innerText = sum;
}

function sumUsingWhile(){
    let arr = document.getElementById("elements").value.split(" ");
    let out = document.getElementById("sumOp");
    let sum = 0;
    let index=0;
    while(index < arr.length){
        if(!isNaN(parseInt(arr[index])) && !arr[index].includes("."))
        {
            sum += parseInt(arr[index]);
        }
        else if(!isNaN(parseInt(arr[index])) && arr[index].includes("."))
        {
            sum += parseFloat(arr[index]);
        }
        index++;
    }
    console.log(sum);
    out.innerText = sum;
}

function sumUsingDoWhile(){
    let arr = document.getElementById("elements").value.split(" ");
    let out = document.getElementById("sumOp");
    let sum = 0;
    let index=0;
    do{
        if(!isNaN(parseInt(arr[index])) && !arr[index].includes("."))
        {
            sum += parseInt(arr[index]);
        }
        else if(!isNaN(parseInt(arr[index])) && arr[index].includes("."))
        {
            sum += parseFloat(arr[index]);
        }
        index++;
    }while(index < arr.length);
    console.log(sum)
    out.innerText = sum;
}

// sumUsingDoWhile();

// 14th
function multiArrayFuncs(){
    arr = [1,3,4,5,6,6,78,90];
    let smallest = arr[0];
    let biggest = arr[0];
    let evenCount = 0;
    let oddCount = 0;
    let sum = 0;;
    let avg;
    for(let i=0; i<arr.length; i++){
        if(arr[i] > biggest){
            biggest = arr[i];
        }
        if(arr[i] < smallest){
            smallest = arr[i];
        }
        if(arr[i] % 2 == 0){
            evenCount+=1;
        }
        else{
            oddCount+=1;
        }
        sum += arr[i];
    }
    avg = sum/arr.length;
    console.log(smallest);
    console.log(smallest);

    if(evenCount > oddCount){
        console.log("More even numbers");
    }
    else if(oddCount > evenCount){
        console.log("More odd numbers");
    }
    else{
        console.log("Same even and odd count");
    }
    console.log(sum);
    console.log(avg);

}
multiArrayFuncs();



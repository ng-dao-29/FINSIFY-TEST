// tạo mảng number ramdom
const randomArray = (length) => {
    let arrayNumber = []
    for (let i = 1; i < length; i++) {
        let number = Math.floor(Math.random() * 30)
        let check = arrayNumber.includes(number)
        if (!check) {
            arrayNumber.push(number)
        }
    }
    return arrayNumber;
}

// câu 1;
//Cho dãy số tự nhiên A.
// Cài đặt chương trình sắp xếp dãy số A từ nhỏ đến lớn và loại bỏ số không phải là số nguyên tố.
const sortRemovePrimes = (array) => {
    let newArray = [];
    let length = array.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - i -1 ; j++) {
            if (array[j] > array[j + 1]) {
                let x = array[j]
                array[j] = array[j + 1]
                array[j + 1] = x;
            }
        }
    }
    for (let i = 0; i < length; i++) {
        let check = true;
        let member = array[i]
        if (member > 2) {
            let k = 2;
            while (k < member) {
                if (member % k === 0) {
                    check = false;
                    break;
                }
                k++;
            }
        }
        if (check) {
            newArray.push(member)
        }
    }
    console.log(`danh sách các số không phải số nguyên tố đã được sắp xếp là: ${newArray} `)
};
let array1 = randomArray(10)
sortRemovePrimes(array1)

// câu 2;
//Cài đặt chương trình tìm số thứ N trong dãy Fibonacci.
// dãy Fibonacci có 2 loại: loại bắt đầu từ số 0 và bắt đầu từ số 1;
// ở đây dùng theo dãy Fibonacci bắt đầu từ 0;
const findingNumberFibonacci = (n) => {
    let [f1, f2, x] = [0,1,-1];
    if (n > 0) {
        for (let i = 0; i < n; i++) {
            x = f1;
            f1 = f1 + f2;
            f2 = x;
        }
    } else {
        console.log("n phải lớn hơn 0")
    }
    console.log(`số thứ ${n} trong dãy Fibonacci là: ${f2}`)
}

let numberRandom = Math.floor(Math.random() * 20) +1
findingNumberFibonacci(numberRandom)

// câu 3;
//Cho dãy số A.
// Có bao nhiêu cặp n số không trùng nhau, liệt kê các cặp số đó.
// Ví dụ: A = 1,2,3. Khi n = 2 thì kết quả có 3 cặp số, danh sách: 1&2, 1&3, 2&3.
// Khi n = 3 thì kết quả có 1 cặp số là 1,2,3.
const numbersNotMatch = (array, n) => {
    let length = array.length;
    let pairNumber = [];
        for (let i = 0; i < length - (n-1); i++) {
            for (let j = i + 1; j < length - (n-2); j++) {
                if (n === 2) {
                    pairNumber.push(`${array[i]},${array[j]}`);
                } else {
                    let childResults = numbersNotMatch(array.slice(j), n-1);
                    childResults.forEach((childElement) => pairNumber.push(`${array[i]},${childElement}`))
                }
            }
        }
    return pairNumber;
}
const listPairNumber = (array, n) => {
    if (array.length >= n) {
        let pairNumber = numbersNotMatch(array, n);
        console.log(`có ${pairNumber.length} cặp số không trùng nhau`);
        console.log(`danh sách các cặp số không trùng nhau là:`)
        console.log(pairNumber)
    } else {
        console.log(`n phải nhỏ hơn hoạc bằng số phần tử có trong mảng`)
    }
}
let array2 = randomArray(5)
listPairNumber(array2, 3)
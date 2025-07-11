//for(let i=0; i<10; i++){
    //console.log(i)
//}

//let i=0;
//while (i<10){
   // console.log(i)
   // i++;
//}

//do {
 //   console.log(i)
 //   i++
//} while(i<10)

    //let arr = ['123', 'qwrqwr', '1wewf']
   // for(const element of arr){
    //    console.log(element)
//}

   // for(const element in arr){
   //     console.log(element)
   // }

 //   let arr = ['Rybuf1', 'RYbuf2', 'Rybuf3']
  //  for(const element of arr){
 //       console.log("Название",":",element)
  //  }

//for (let i = 0; i <= 20; i++) {
//  if (i % 2 === 0) {
 //   console.log(i)
 // }
//}


//let obj={
  //  a:'123',
  //   b: 367485,
  //  c:[123456,123456],
   // d:{
   //     one:123
   // }
//}
//console.log(obj.a)
//console.log(obj["a"])
//obj.a=666
//console.log(obj.a)

//delete obj.a
//console.log(obj.a)


//марка модель год
//let car = {
   // Marka:'VW',
    //Model: 'ID.4',
    //Year:'2021',
    //}
    //console.log("Автомобиль", ":", car.Marka, car.Model)

//car.color = 'blue';
//car.year=2025
//console.log(car)


function add(a, b){
    return a+b;
}
console.log(add(1,1))


const ttt = function (a = "user")
{
return a

}
console.log("Hi,",ttt())
console.log("Hi,",ttt("Hope"))


//массив чисел сделат объект двух массивов который вернет положитеьные и от рицательыне числа

function catigorized(arr){
    const result = {
        pos:[],
        neg:[]
    
    }       
    console.log(arr.a) 
for (let i=0; i<arr.length; i++){
    console.log(arr[i])
if (arr[i]>0){result.pos.push(arr[i])}else{result.neg.push(arr[i])}
}

         return result;


}
console.log(catigorized([-2,4,-5,7,1,0,-3]))
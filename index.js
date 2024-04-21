// // // console.log(abcd);

// // // var abcd = 10;

// // let arr = [1,2,3,4,5];
// // const mapOutput = arr.map((data)=>{
// //     return data + 5;
// // })
// // console.log(mapOutput);

// // const forEachOutput = arr.forEach((data)=>{
// //     console.log(data + 100);
// //     console.log(data/2+1);
// //     return data+5;
// // })
// // console.log(forEachOutput)

// // const obj = {
// //     address: {
// //         pincode: '111111',
// //         state: 'delhi'
// //     },
// //     name: 'naman',
// // }
// // const obj2 = {...obj};
// // obj2.address.pincode = '1231232313';
// // obj2.name  ='ehfiowh'
// // console.log(obj);
// // console.log(obj2);

// const arr = [1,2,3,4,5]
// const fitlerArr = arr.filter((data)=>{
// 	return data%2 == 0;
// })


// Array.prototype.myFilter = function(cb){
// 	const fitlered = [];
// 	for(let i=0; i<this.length; i++){
// 		if(cb(this[i])){
// 			fitlered.push(this[i])
// 		}
// 	}
// 	return fitlered;
// }


// const myFilterArr = arr.myFilter((data)=>{
// 	return data%2 == 0;
// })

// console.log(myFilterArr)

// const data = {
// 	address:{
// 		// majorAddress: {
// 		// 	state: 'delhi',
// 		// 	pincode: 110034
// 		// }
// 	},
// 	name: 'naman'
// }
// // if(data.address && data.address.majorAddress && data.address.majorAddress.state){
// //     console.log(data.address.majorAddress.state)
// // }
// //optional chaining
// if(data.address.majorAddress?.state){
//     console.log(data.address.majorAddress.state)
// }


// // console.log(data.address.majorAddress.pincode)
// console.log(data.name)


// nullish coalescing ??
// const a = 0;
// const b = 200;
// const answer = a ?? b;
// console.log(answer)

/* 
    false
    ''
    0
    null
    undefined
    NaN
*/

// EVENT LOOP ->??

//difference between microtask queue and callback queue(task queue)

// localStorage.getItem
// localStorage.setItem('temp', JSON.stringify([1,2,32,4]));
// const temp = JSON.parse(localStorage.getItem('temp'));
// console.log(temp)

// localStorage.setItem('temp2', JSON.stringify({'key':1, 'key2':2,'key3':32, key4:4}));
// const temp2 = JSON.parse(localStorage.getItem('temp2'));
// console.log(temp2)

// localStorage.setItem('temp3', JSON.stringify(true));
// const temp3 = JSON.parse(localStorage.getItem('temp3'));
// console.log(temp3)

// in what datastructure does localstorage store the information?


// const productDetails = {
//     toys: [
//         {
//             mrp: 100,
//             name: 'a'
//         },
//         {
//             mrp: 10,
//             name: 'b'
//         },
//         {
//             mrp: 400,
//             name: 'c'
//         },
//         {
//             mrp: 600,
//             name: 'e'
//         },
//     ]
// }
/* mock the data like an api, which resolves after 3seconds */

// async function sample(){
//     return 'Ankur'
// }
// console.log(sample())
// // sample()

// /* async function is promising the response becuase my funciton by itself doesnt resolve it  */
// const alwaysFalse = ''
// async function promised(){
//     return new Promise((res, rej)=>{
//         // setTimeout(()=>{
//         //     rej('some err')
//         // }, 10000)
//         if(alwaysFalse){
//             res('abcd')
//         }

//     })
// }
// promised().then((data) => console.log(data))
//     .catch((err)=>{console.log('executed from here', err)})

// const var1 = new Promise((res, rej)=>{
//     setTimeout(()=>{
//         res('p1')
//     },4000)
// })

// var1.then((data)=>{
//     console.log(data);
//     return new Promise((res, rej)=>{
//         setTimeout(()=>{
//             res('p2')
//         },3000)
//     })
//     // return var2;
// })
// .then((data)=>{
//     console.log(data);
// })

/* Construct a function to satisfy the below call*/
function func1(sampleResolve){
    return new Promise((res, rej) => {
        sampleResolve.then((value)=> res(value))
        // res(sampleResolve)
    })
    // return sampleResolve
}

func1(Promise.resolve('fewjifweoi'))
    .then(function(data) {console.log(data)})
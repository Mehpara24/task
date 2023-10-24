///Tap-1
 const arr = [ 2,3,4,5,6,7];
 console.log ( arr.length/2)
 

 ///Tap-2
 const arr2 = [ 8,9,10,11];
 let sum = 0
 for ( let i = 0 ; i < arr2.length; i++ ){
    sum += arr2[i]
 }
 console.log(sum)


 ///Tap-3
 const mas = [1,2,3,4,5,6,7,8];
 let maxElement = mas[0];
 let minElement = mas[0];
 for ( i = 0; i<mas.length; i++){
    if( mas[i] > maxElement ){
        maxElement=mas[i]
    }
    if ( mas[i] < minElement){
        minElement=mas[i]
 }}
console.log (maxElement, minElement)


///Tap-4
const element = [10,11,12,13,14,15,17];
let tek=  [];
let cut = [] ;
for(let i=0 ; i<element.length; i ++ ) {
    if( element[i] % 2 == 0){
        cut.push(element[i])
    }
    else {
    tek.push (element[i]) 
}}
console.log(tek, cut)


///Tap-6
const ededmassivi = [8,22, "book", 19,false, null];
let saxla = [];
let sil = [];
for (let i= 0; i<ededmassivi.length; i++){
    if (!ededmassivi[i]){
    }
    else{
        saxla.push(ededmassivi[i]);
    }
}
console.log(saxla);
console.log(sil);

//Tap-7
let massiv = [1,2,3,4,5,6];
console.log (massiv.reverse())



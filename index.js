
function myEach(collection, callback){

  for (const element of Object.values(collection)){
    callback(element);
  }

  return collection;
}

function myMap(collection, callback){
  const modifiedArray = [];

  for (const element of Object.values(collection)){
    modifiedArray.push(callback(element));
  }
  return modifiedArray;
}

function myReduce(collection, callback, acc=-2){
  let sum = acc;
  let values = Object.values(collection);

  for (const element of values){
    const newSum = callback(sum, element, collection);
    sum = newSum
  }
  
  return sum;
}

function myFind(collection, predicate){
  for (const element of Object.values(collection)){
    if (predicate(element)){
      return element;
    }
  }
}

function myFilter(collection, predicate){
  const result = [];
  
  for (const element of Object.values(collection)){
    if (predicate(element)){
      result.push(element);
    }
  }
  return result;
}

function mySize(collection){
  return Object.values(collection).length;
}

function myFirst(array, n=1){
  if (n === 1){
    return array[0]
  }else {
    return array.slice(0,n)
  }
}

function myLast(array, n=1){
  if (n === 1){
    return array.slice(-1)[0]
  }else{
    return array.slice(-n)
  }
}


// function mySortBy(array, callback){
//   const elements = [];
//   const values = [];

//   for (const elem of array){
//     const value = callback(elem);
//     debugger;
//     let i = 0
//       if (values.length === 0){
//         elements.push(elem);
//         values.push(value);
//         i++
//         debugger;
//         break
//       }else if (value <= values[i]){
//         elements.splice(i, 0, elem);
//         values.splice(i, 0, value);
//         i++
//         debugger;
//         break
//       }else{
//         elements.push(elem);
//         values.push(value)
//         i++
//         debugger;
//         break
//       }
//     }
//     return elements;
// }

function mySortBy(array, callback){
  const elements = [array[0]];
  const values = [callback(array[0])];

  for (let i = 1; i<array.length; i++){
    const elem = array[i];
    const value = callback(elem);

    for (let j=0; j<values.length; j++){
      if (value <= values[j]){
        values.splice(j, 0, value);
        elements.splice(j, 0, elem);
        break;
      }else if (value > values[values.length-1]){
        values.push(value);
        elements.push(elem);
        break;
      }
    }
  }
  return elements;
}

  

function myFlatten(array, shallow, newArr=[]){
  return
}

function myKeys(object){
  return Object.keys(object);
}

function myValues(object){
  return Object.values(object);
}



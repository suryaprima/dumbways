function putarArray(arr=[]) {
    let arrTemp = ""
    for(i=1; i < arr.length; i++){
        arrTemp = arr.shift()
        arr.push(arrTemp)
        console.log("putaran "+i+": ["+arr+"]")
    }
}
putarArray(["a","b","c","d","e"])
function letMeKnowWhenComplete(size, callback) {

    var reducer = 0;

    for (var i = 1; i < size; i++) {

        reducer = Math.sin(reducer * i);

    }
    console.log("test")
    callback();

}

letMeKnowWhenComplete(100000000, 
    function () { console.log('Great it completed.'); });


    console.log("---------------")
    // 1

console.log('Lets begin.')

    // 2
    
   setTimeout(() => {
    console.log("i waited and i done now s")
   }, 3000);
    
    // 3
    
    console.log('Did I finish yet?');
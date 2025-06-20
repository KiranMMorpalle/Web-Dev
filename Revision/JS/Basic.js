

// [1] Function & Blocked Scoped..........(if--for)
if (true) {
  var x = 10;
  let y = 20;
}
console.log("X = "+x); // ✅ 10 (function-scoped)
//console.log("Y = "+y); // ❌ ReferenceError (block-scoped)

//-------------------------------------------------------------------------------


// [2] Hoisting
console.log(c);   // var - undefined
var c=2;          // let - not allow access before declare

//-------------------------------------------------------------------------------

//[3] Type of
// Primitve : Number, String, Boolean, null, undefined, Symbol, BigInt
// Reference : Objects, Arrays, Functions

console.log("Number : "+typeof(Number));         // All other "Functions"
console.log("String : "+typeof(String));
console.log("Boolean : "+typeof(Boolean));

console.log("null : "+typeof(null));                  // object
console.log("undefined : "+typeof(undefined));        // undefined
console.log("Symbol : "+typeof(Symbol));
console.log("BigInt : "+typeof(BigInt));

var obj={p:"jk"};
var arr=[1,2];

function f(){
    var f=9;
}
console.log("Objects : "+typeof(obj));             // object
console.log("Arrays : "+typeof(arr));              // object
console.log("Functions : "+typeof(f));             // function


//-------------------------------------------------------------------------------


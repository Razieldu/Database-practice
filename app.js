const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB",{ useNewUrlParser: true });

const fruitSchema = new mongoose.Schema ({
  name:String,
  rating:Number,
  review:String
});

const Fruit = mongoose.model("Fruit",fruitSchema);


const tomato = new Fruit({
 name:"toamto",
 rating:9,
 review:"so juicy"
});
tomato.save();



const peopleSchema = new mongoose.Schema ({
  name:String,
  age:Number,
  favoriteFruits:fruitSchema
});

const People = mongoose.model("Person",peopleSchema);
//
// const person = new People({
//  name:"Jeremy",
//  age:32,
//  // favoriteFruits:pineApple
// });
// person.save();


//


// const apple={
// name:"apple",
// rating:5,
// review:"good"
// };
// const tomato={
//   name:"tomato",
//   rating:4,
//   review:"nice"
// };
// const banana={
//   name:"banana",
//   rating:3,
//   review:"too big "
// };

// Fruit.insertMany([apple,tomato,banana],function(err){
// if(err){
//   console.log(err);
// }else{
//   console.log("Successfully saved all fruits to the fruitsDB")
// }
// });
//
//
// Fruit.find(function(err,fruit){
//   if(err){
//      console.log(err)
//   }else{
//     mongoose.connection.close(function(){
//     console.log("Mongoose default connection disconnected through app termination");
//
// });
//     fruit.forEach(function(fruitName){
//       console.log(fruitName.name)
//     })
//   }
// });

People.updateOne({_id:"62543f5cac3cf6f178d66083"},{favoriteFruits:tomato},function(err){
  if(err){
    console.log(err)
  }else{
  console.log("Successfully update data")
}
});


// Fruit.deleteOne({name:"Apple"},function(err){
//   if(err){
//     console.log(err)
//   }else{
//     console.log("Successfully deleted the data ")
//   }
// })
// Fruit.deleteMany({name:{$in:["kiwi","tomato"]}},function(err){
//   if(err){
//     console.log(err)
//   }else{
//     console.log("Successfully deleted the data ")
//   }
// })

//creating event emmiter 
const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

//eventEmitter.on('event-name', function)
// event listener
//event listener must come before publishing event 
eventEmitter.on('order-pizza',(size,topping)=>{
     console.log(`order received, baking a ${size} pizza with ${topping} topping`)
})
eventEmitter.on('order-pizza',(size)=>{
    if (size==='large'){
         console.log(`serving complimentary drink`)
    }
})


//eventEmitter.emit('event-name','input values if available')
eventEmitter.emit('order-pizza','large','Mushroom'); 

//////////////////////////////////////////
//event emmiter is synchronous 
// eventEmitter.on('myEvent', (data) => {
//     console.log(data);
// });

// console.log('Statement A');
// eventEmitter.emit('myEvent', 'Statement B');
// console.log("Statement C");

////////////////////////////////////////////
//using once()
// eventEmitter.on("myEvent", data => {
//     console.log(data, "- ON");
// });

// eventEmitter.once("myEvent", data => {
//     console.log(data, "- ONCE");
// });

// eventEmitter.emit("myEvent", "Emitted Statement");
// eventEmitter.emit("myEvent", "Emitted Statement");
// eventEmitter.emit("myEvent", "Emitted Statement");



const mongo = require("./dbapp");

function FuncQueue(){
    class Queue {
        constructor() {
            this.queue = [];
        }
    
        enqueue(item) { //add to back of queue
            return this.queue.unshift(item);
        }
    
        dequeue() { //remove from front of queue
            return this.queue.pop();
        }
    
        peek() { //returns item at front of queue
            return this.queue[this.length - 1];
        }
    
        get length() {
            return this.queue.length;
        }
    
        isEmpty() { //returns true if empty
            return this.queue.length === 0;
        }
    }
    
    const q = [];
    const allAgents = listAllAgents();
    
    for (i = 0; i < allAgents.length; i++){
        q[i] = new Queue();
    }
}

FuncQueue.putInQueue = function(customerId, customerTag){ //put in shortest queue that matches the tag
    var agents = mongo.findDocuments(mongo.db, customerTag, function(){
        mongo.client.close();
    });
    var queueIndex = [];
    for (i = 0; i < agents.length; i++){
        if (allAgents.includes(agents[i])){
            queueIndex.push(allAgents.indexOf(agents[i]));
        }
    }
    
    var queueLength = [];
    for (i = 0; i < queueIndex.length; i++){
        queueLength.push(q[queueIndex[i]].length);
    }

    var minLength = Math.min(...queueLength);
    q[queueIndex[queueLength.indexOf(minLength)]].enqueue(customerId);
}

function routeQueue(agent){
    var index = allAgents.indexOf(agent);
    var customer = q[index].dequeue();

    //connect customer to agent
}

async function start(){
    await mongo.init();
    //FuncQueue.putInQueue("skillA", "1");
    console.log("running");
    //console.log(FuncQueue.q);
    mongo.client.close();
}

start();
module.exports = FuncQueue;




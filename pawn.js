const EventEmitter = require("events");

function Pawn(dir = "tv", interval){
const client = this;
interval = parseInt(interval);
dir = require("url").resolve("https://www.pawntakespawn.com/", dir.toString());
if(!interval || Number.isNaN(interval) || interval < 300000){
    interval = 300000;
}
client.interval = () => { return interval};
client.dir = () => { return dir };
client.active = true;
function restart(dire, inter){
    client.active = false;
    return new this.constructor(dire || client.dir, inter || client.interval);
}
client.restart = restart;
client.events = new EventEmitter();
var before;
(async function(){
    while(this.active === true){
        setTimeout( async () => {
        const result = await fetch(client.dir).then(res => res.text());

        if(before && before !== result){
            client.events.emit("eeUpdate", result, before, Date.now());
        }
        before = result;
        }, interval)
        }
})().catch((e) => {
client.events.emit("error", e);
})
}

module.exports = Pawn;
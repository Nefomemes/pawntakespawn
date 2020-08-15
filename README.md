# pawntakespawn

<p>A dependency that will send a GET request frequently to <a href="https://pawntakespawn.com/">PawnTakesPawn.com</a>.</p>

<p>This dependency will help in detecting changed to the website. And will return the code before the changes happen and the code after the changes happen. Progressing Call of Duty 2020 reveal "hidden feature".</p>

<h1><strong>Note: I have NOT test this package yet lol.</strong></h1>

## Installing the dependency

<p>If you use NPM directly (recommended):</p>

```
npm i pawntakespawn
```

<p>If you use Yarn (Facebook's, not recommended due to privacy concerns):</p>

```
yarn add pawntakespawn
```

## Using the dependency

```js

const Pawn = require("pawntakespawn");
const client = new Pawn(/*dir, interval*/) // The parameters are completely optional.

// Your code here.

```

<p>The default of 'dir' is "tv" so the dependency will send the request to /tv and not /tangledweb or /emc2 .</p>

<p>The default of 'interval' is about five minutes. And you can not set the interval to be below five minutes. This is to prevent abuse.</p>

### Looking at the client object

```js

{
    interval:[Function], 
    // The interval of the requests. This is a function so that noone can edit it without restarting the client or modifying the library. This is made to prevent abuse.
    dir:[Function], 
    // The directory it's sending the request to. This is a function so that noone can edit it without restarting the client or modifying the library. This is made to prevent abuse.
    active:[Boolean], 
    // If you set this to false or anything that is not true, the client will deactivate and you must restart it again. 
    restart: [Function restart], 
    // The function to restart the client. This wont restart the all the 'on' or 'once' thingies though. 
    events: [EventEmitter], 
    // All changes or errors will be sent here.
}

```

### Looking at the events

<p>All the events are send trough client.events.</p>

#### eeUpdate
<p>This will trigger whenever the code of the page it is sending the request to have changed its code.</p>

```js

client.events.on("eeUpdate", async (result, before, timestamp) => {
/*  
    result is the page source that have changed with the update. Returns as string.
    before is the page source before the update. Returns as string.
    timestamp is the time when the update was recorded. Returns as number.
*/
console.log("pawntakespawn.com/tv have changed. Recorded on " + new Date(timestamp).toUTCString() + ".");
})

```

#### error

<p>Triggers whenever there is an error in the loop.</p>

```js

client.events.on("error", async (error) => {
    // Returns as Error, duh.
    console.error(error);
})

```

## Discord Support Server

<p>The official support server is <a href="https://web.nefomemes.repl.co/kylebot/support">here</a>. However, you can find the author in various COD servers like COD OG's, Prototype Warehouse, Geeky Pastimes, etc.</p>
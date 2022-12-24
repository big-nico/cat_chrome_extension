var styles = `
.cat-wrapper {
    position: fixed;
    bottom: 0;
    left: 0;
    margin: 10px;
    width: 100px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
}

.cat-object {
    object-fit: contain;
}

.cat-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.wrapper {
    position: absolute;
    z-index: 999999;
}

.speech-bubble {
    position: absolute;
    bottom: 100px;
    left: 50px;
    height: 100px;
    width: 200px;
    background: rgba(225, 225, 225, 1);
    border-radius: 1em;
    z-index: -1;
    padding: 15px;
    display: none;
    text-align: center;
    font-size: 1.0em;
    font-family: 'Concert One';
    justify-content: center;
    align-items: center;
}

.shadow {
    position: absolute;
    bottom: 0px;
    margin: 5px;
    left: 20%;
    width: 70%;
    height: 20%;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    opacity: 0.9;
    z-index: -1;
}

.zzz {
    animation-name: zzz;
    animation-duration: 2s;
    animation-timing-function: ease-out;
    animation-iteration-count: infinite;
    animation-direction: forwards;
    color: rgba(160,84,246,1);
    font-weight: bold;
    position: absolute;
    z-index: 100;
    transform: translateY(100%);
    font-family: 'arial';
}

.zzz-z {
    animation-delay: 0s;
    right: 5px;
}
.zzz-zz {
    animation-delay: 0.5s;
    right: -10px;
}
.zzz-zzz {
    animation-delay: 1s;
    right: 0;
}

@-webkit-keyframes zzz {
	0% {
        color: rgba(160,84,246,0);
        font-size: 10px;
        -webkit-transform: translateY(100%);
        transform: translateY(100%);
    }
    100% {
        color: rgba(160,84,246,1);
        font-size: 15px;
        -webkit-transform: translateY(-100%);
        transform: translateY(-100%);
    }
}

@keyframes zzz {
    0% {
        color: rgba(160,84,246,0);
        font-size: 10px;
        -webkit-transform: translateY(100%);
        transform: translateY(100%);
    }
    100% {
        color: rgba(160,84,246,1);
        font-size: 15px;
        -webkit-transform: translateY(-100%);
        transform: translateY(-100%);
    }
}

`

//click when sleeping 
  //cat wakes up, gives complement
  //after 10 seconds goes back to sleep
  //if click when awake, cat looks sides to side and wiggles ear
  //if click when awake, cat also gives another complement

var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)

const wrapper = document.createElement("div");
wrapper.className = "wrapper";

const cat = document.createElement("div");
cat.className = "cat-wrapper";

const catObject = document.createElement("div");
catObject.className = "cat-object";

let img = document.createElement("img");
img.className = "cat-img";
img.src = chrome.runtime.getURL("./images/cat_sleeping.svg");

let shadow = document.createElement("div");
shadow.className = "shadow";

const z = document.createElement("div");
z.className = "zzz zzz-z";
z.innerText = "Z";

const zz = document.createElement("div");
zz.className = "zzz zzz-zz";
zz.innerText = "Z";

const zzz = document.createElement("div");
zzz.className = "zzz zzz-zzz";
zzz.innerText = "Z";

const speechBubble = document.createElement("span");
speechBubble.className = "speech-bubble";
speechBubble.innerText = "meow";

catObject.appendChild(speechBubble);

catObject.appendChild(shadow);
catObject.appendChild(img);
cat.appendChild(catObject);

//add z's 
cat.appendChild(z);
cat.appendChild(zz);    
cat.appendChild(zzz);

wrapper.appendChild(cat);

document.body.appendChild(wrapper);

let isCatAwake = false;

const compliments = [ 
    "Meow!", 
    "Your kindness and compassion towards others is truly inspiring.",
    "You're so smart!",
    "I'm so grateful to have you in my life!",
    "Your sense of humor always brightens my day",
    "Your presence brings so much peace and happiness to my life.",
    "I'm constantly amazed by your ability to see things in a unique and thoughtful way",
    "You are pretty fucking cool",
    "You will pass all your exams",
    "I am a big fan of yours",
    "Meow, meow",
    "I think it's time for a nap",
    "You deserve a massage",
    "I'm kinda tired, let's nap",
    "Keep up the good work",
    "I appreciate what you do"

];


//if on hover, cat wakes up
cat.addEventListener("mouseover", function() {
    if (!isCatAwake) {

        isCatAwake = true;

        setTimeout(function() {
            z.style.display = "none";
            zz.style.display = "none";
            zzz.style.display = "none";
            img.src = chrome.runtime.getURL("./images/cat_waking_up.svg");
        }, 100);

        setTimeout(function() {
            speechBubble.style.display = "flex";
            speechBubble.innerText = compliments[Math.floor(Math.random() * compliments.length)];
        }, 2000);


        setTimeout(function() {
            img.src = chrome.runtime.getURL("./images/cat_awake.svg");
        }, 4000);

        //remove the z's 
        //wake up animation
        //give a compliment
        //set timeout to go back to sleep 

        setTimeout(function() {
            img.src = chrome.runtime.getURL("./images/cat_going_sleep.svg");
        }, 10000);

        setTimeout(function() {
            speechBubble.style.display = "none";
        }, 12000);

        setTimeout(function() {
            img.src = chrome.runtime.getURL("./images/cat_sleeping.svg");
            z.style.display = "block";
            zz.style.display = "block";
            zzz.style.display = "block";
            isCatAwake = false;
        }, 16000);
    }
});



var user = prompt("You are strolling through the forest and you happen upon a unicorn sleeping in a bed of leaves. Do you KEEP WALKING, STOP AND GAZE, OR WAKE IT UP?").toUpperCase();

switch (user) {
    case 'KEEP WALKING':
        var tipToe = prompt("Do you tip toe by (YES or NO)?").toUpperCase();
        
        var onPath = prompt("Do you walk on the path (YES OR NO)?").toUpperCase();
        
        if (tipToe === 'YES' && onPath === 'NO') {
            console.log("You successfully snuck by!");
        } else if (tipToe === 'YES' && onPath === 'Yes') {
            console.log("Oh! It stirred! ... but you successfully snuck by. That was close.");
            } else {
                console.log("Oh no! It woke up and ran away!");
            };
        break;
        
    case 'STOP AND GAZE':
        var touchIt = prompt("Ain't it a beauty? Do you try to touch it (YES or NO)?").toUpperCase();
        var touchHorn = prompt("Do you try to touch its horn (YES or NO)?").toUpperCase();
        if (touchIt === 'YES' || touchHorn === 'YES'){
            console.log("It woke up and it's not happy... run!");
        } else {
            console.log("It's probably best to look without touching.");
        };
        break;
    case 'WAKE IT UP':
        var tossStick = prompt ("Do you toss a stick near it (YES or NO)?").toUpperCase();
        var hasCarrot = prompt("Do you have a carrot (YES or NO)?").toUpperCase();
        if (tossStick === 'YES' && hasCarrot === 'NO') {
            console.log("It woke up and it's not happy... run!");
        } else if (tossStick === 'NO' && hasCarrot === 'YES') {
            console.log ("You toss the carrot instead. It wakes up and sees the carrot. Congrats! You've made a new friend!");
            } else {
            var giveCarrot = prompt("It woke up and sees you have a carrot. Do you give it to it (YES or NO)?").toUpperCase();
            if (giveCarrot === YES) {
                console.log("You've made a new friend!");
            } else {
                console.log("It's definitely not happy... run!");
            };
        };
        break;
    default:
        console.log("You can't do that here. Choose again.");
};

let clickUpgrades = {
    pickaxes: {
        price: 50,
        quantity: 0,
        multiplier: 5
    },
    miners: {
        price: 150,
        quantity: 0,
        multiplier: 15
    }
};

let autoUpgrades = {
    rovers: {
        price: 300,
        quantity: 0,
        multiplier: 25
    },
    shuttles: {
        price: 500,
        quantity: 0,
        multiplier: 50
    }
}


let cheese = 0;

// let pickaxeClick = clickUpgrades.pickaxes.quantity;
let pickaxeClick = 0;
let minerClick = 0;
let clickTotal = 0;

let autoTotal = 0;
let roverClick = 0;
let shuttleClick = 0;




function mine() {
    cheese += 1
    if (clickUpgrades.pickaxes.quantity > 0) {
        cheese += clickUpgrades.pickaxes.quantity * clickUpgrades.pickaxes.multiplier
    }
    if (clickUpgrades.miners.quantity > 0) {
        cheese += clickUpgrades.miners.quantity * clickUpgrades.miners.multiplier
    }

    drawMyCheese();
}

function autoMine() {
    if (autoUpgrades.rovers.quantity > 0) {
        cheese += autoUpgrades.rovers.quantity * autoUpgrades.rovers.multiplier
    }
    if (autoUpgrades.shuttles.quantity > 0) {
        cheese += autoUpgrades.shuttles.quantity * autoUpgrades.shuttles.multiplier
    }

    drawMyCheese();
}

function drawMyCheese() {
    let template = cheese
    let totalElem = document.getElementById('total')
    totalElem.innerText = template;
}
drawMyCheese()

function buyPickaxe() {
    if (cheese >= 50) {
        let template = pickaxeClick
        clickUpgrades.pickaxes.quantity += 1
        template += clickUpgrades.pickaxes.quantity
        let pickaxeClickElem = document.getElementById('pickaxeClick')
        pickaxeClickElem.innerText = template;
        cheese -= 50
        drawMyCheese()
        // console.log(`pickaxe`);
    } else {
        window.alert(`NOT ENOUGH CHEESE`)
    }
}


function buyMiner() {
    if (cheese >= 150) {
        let template = minerClick
        clickUpgrades.miners.quantity += 1
        template += clickUpgrades.miners.quantity
        let minerClickElem = document.getElementById('minerClick')
        minerClickElem.innerText = template;
        cheese -= 150
        drawMyCheese()
        // console.log(`miner`);    
    } else {
        window.alert(`NOT ENOUGH CHEESE`)
    }
}

function buyRover() {
    if (cheese >= 300) {
        let template = roverClick
        autoUpgrades.rovers.quantity += 1
        template += autoUpgrades.rovers.quantity
        let roverClickElem = document.getElementById('roverClick')
        roverClickElem.innerText = template;
        cheese -= 300
        drawMyCheese()
        // console.log(`rover`);
    } else {
        window.alert(`NOT ENOUGH CHEESE`)
    }
}

function buyShuttle() {
    if (cheese >= 500) {
        let template = shuttleClick
        autoUpgrades.shuttles.quantity += 1
        template += autoUpgrades.shuttles.quantity
        let shuttleClickElem = document.getElementById('shuttleClick')
        shuttleClickElem.innerText = template;
        cheese -= 500
        drawMyCheese()
        // console.log(`shuttle`);
    } else {
        window.alert(`NOT ENOUGH CHEESE`)
    }
}




// function pickaxeCheese() {
//     let template = pickaxeClick
//     template *= clickUpgrades.pickaxes.multiplier
//     let pickaxeClickElem = document.getElementById('pickaxeClickCount')
//     pickaxeClickElem.innerText = template
// }
// pickaxeCheese()

// function autoClick() {
//     let template = ''
//     template += roverClick + shuttleClick
//     let autoElem = document.getElementById('autoCount')
//     autoElem.innerText = template
// }
// autoClick()




setInterval(autoMine, 3000);

/**
 * Created by yannickvanoekelen on 25/11/16.
 */
//Shared with: Jeroen and Kristof//

//Aanmaken van een array//
var accounts = [];

//}

//var bal = getBalance();
//console.log(bal(accounts[0]));


//function getBalance aanmaken om het huidige bedrag op een welbepaalde account te verkrijgen//
function getBalance() {
    return function (account) {
        //console.log(account.balance);
        return account.balance;

    };
}
;
//function deposit aanmaken om een bedrag te plaatsen op een welbepaald account//
//Deze fuctie doet ook een validatie of men daadwerkelijk een bedrag geeft//
function deposit(account, amount) {
    if (typeof amount === "number") {
        account.balance += amount;
        console.log("The account has been filled up with " + amount + " and has now " + account.balance + " Euro ");

    } else {
        console.log("the thing you just gave in was not a number");
    }
}
//function withdraw aanmaken om een bedrag af te halen van een welbepaald account//
//deze functie doet ook een validatie of men daadwerkelijk een bedrag geeft//
function withdraw(account, amount) {
    if (typeof amount === "number") {
        account.balance -= amount;
        console.log("Some money with the amount of " + amount + " has been withdrawn from the account it has now " + account.balance + " Euro left ");
    } else {
        console.log("the thing you just gave in was not a number");
    }
}
//function createAccount aanmaken om een account aan te maken en te plaatsen in de array//
function createAccount(account) {
    accounts.push(account);
}

//function getAccount aanmaken om welbepaalde account op te vragen uit array//
//function getAccount is gebasseerd op de methode van Luc met de forEach deze is aangepast met een while//
function getAccount(username) {
    var i = 0;
    var matchedAccount;
    while (i < accounts.length) {
        if (accounts[i].name === username)
            matchedAccount = accounts[i].name + " : " + accounts[i].balance + " Euro";
        i++;
    }
    return matchedAccount;
}
;

var accountAndrew = {username: 'Andrew',
    balance: 0};

createAccount(accountAndrew);


getBalance(accounts);


deposit(accounts[0], 2);
withdraw(accounts[0], 55);
console.log(getAccount("Andrew"));



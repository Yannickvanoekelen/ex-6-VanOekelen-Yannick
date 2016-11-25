/**
 * Created by yannickvanoekelen on 25/11/16.
 */

//Aanmaken van een array//
var accounts = [ ];

//function createAccount aanmaken om een account aan te maken en te plaatsen in de array//
function createAccount (account) {
    accounts.push(account);
    return account;
}
//function getAccount aanmaken om welbepaalde account op te vragen uit array//
function getAccount (username) {
    var matchedAccount;

    accounts.forEach( function (internal_account) {
        if (internal_account.username === username) {
            matchedAccount = internal_account;
        }
    } );

    return matchedAccount;
}
//function deposit aanmaken om een bedrag te plaatsen op een welbepaald account//
function deposit (account, amount) {
    account.balance += amount;
}
//function withdraw aanmaken om een bedrag af te halen van een welbepaald account//
function withdraw (account, amount) {
    account.balance -= amount;
}
//function getBalance aanmaken om het huidige bedrag op een welbepaalde account te verkrijgen//
function getBalance (account) {
    return account.balance;
}

var andrewsAccount = createAccount({
    username: 'Andrew',
    balance: 0
});

//functie deposit uitvoeren op andrewsAccount, we storten 100 op dit account//
deposit(andrewsAccount, 100);
console.log(getBalance(andrewsAccount));

//functie withdraw uitvoeren op andrewsAccount, gaat er voor zorgen dat er 11 van dit account//
withdraw(andrewsAccount, 11);
console.log(getBalance(andrewsAccount));

//we gaan hier de balance van andresAccount op het scherm plaatsen
var existingAccount = getAccount('Andrew');
console.log(getBalance(andrewsAccount));

//we gaan hierbij een nieuw account aanmaken en in de array plaatsen
var jensAccount = createAccount({
    username: 'jen001',
    balance: 12
});

console.log(accounts);
//we gaan hier de balance van jensAccount op het scherm plaatsen
var exitingJensAccount = getAccount('jen001');
console.log(exitingJensAccount);
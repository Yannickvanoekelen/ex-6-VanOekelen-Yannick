/**
 * Created by yannickvanoekelen on 25/11/16.
 */

//variabele account aanmaken alsook een startbedrag plaatsen op dit acount //

var account = {
    balance: 180
};

// deposit(account, amount)

//function deposit aanmaken
function deposit (account, amount) {
    account.balance += amount;
}

// function withdraw aanmaken
function withdraw (account, amount) {
    account.balance -= amount;
}

// function getBalance aanmaken
function getBalance (account) {
    return account.balance;
}
//functie deposit oproepen (1000 op het account plaatsen)
deposit(account, 1000);

console.log(getBalance(account));

//functie withdraw oproepen (275 van het account afhalen)
withdraw(account, 275);

console.log(getBalance(account));
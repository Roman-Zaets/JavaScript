// function userCard(numberKey) {
//     let key = numberKey <= 3
//         ? numberKey
//         : 'No number key';
//
//     let balance = 100;
//     let transactionLimit = 100;
//     let historyLogs = [];
//
//     function getCardOptions() {
//         return `My number key: ${key}\n`+
//             `My balance: ${balance}\n`+
//             `My transaction limit: ${transactionLimit}\n`+
//             `My history log: ${JSON.stringify(historyLogs)}`
//     }
//
//     function newHistoryLog(operationType, credits, operationTime) {
//         let cardHistory = {
//             operationType: operationType,
//             credits: credits,
//             operationTime
//         };
//
//         historyLogs.push(cardHistory);
//     }
//
//     function putCredits(credits) {
//         let newDate = new Date();
//         let date = newDate.toLocaleDateString();
//         let time = newDate.toLocaleTimeString();
//             balance = balance + credits;
//         newHistoryLog('Put credits', credits, `${date}, ${time}`);
//     }
//
//     function takeCredits(credits) {
//         let newDate = new Date();
//         let date = newDate.toLocaleDateString();
//         let time = newDate.toLocaleTimeString();
//
//         if (credits <= transactionLimit && credits <= balance) {
//             balance = balance - credits;
//             newHistoryLog('Take credits', credits, `${date}, ${time}`);
//         } else {
//             console.log('You cannot perform an operation');
//         }
//     }
//
//     function setTransactionLimit(creditsLimit) {
//         let newDate = new Date();
//         let date = newDate.toLocaleDateString();
//         let time = newDate.toLocaleTimeString();
//         transactionLimit = creditsLimit;
//         newHistoryLog('Transaction Limit', creditsLimit, `${date}, ${time}`);
//     }
//
//     function transferCredits(credits, cardUser) {
//         if (credits <= transactionLimit && credits <= balance) {
//             balance = balance - (credits + (credits*.005));
//             cardUser.putCredits(credits);
//         } else {
//             console.log('You cannot perform an operation');
//         }
//     }
//
//     function getKey() {
//         return key;
//     }
//
//     return {
//         getCardOptions,
//         putCredits,
//         takeCredits,
//         setTransactionLimit,
//         transferCredits,
//         getKey
//     }
// }
//
// class UserAccount{
//     constructor(name){
//         this.name = name;
//         this.cards = [];
//     }
// }
//
// UserAccount.prototype.addCard = function() {
//     if (this.cards.length < 3) {
//         this.cards.push(new userCard(this.cards.length + 1));
//     } else {
//         console.log('You have exceeded the limit of cards');
//     }
// }
//
// UserAccount.prototype.getCardByKey = function(number) {
//     return this.cards.find(value => value.getKey() === number);
// }
//
// let userRoma = new UserAccount('Roma');
// userRoma.addCard();
// userRoma.addCard();
//
// console.log(userRoma)
//
// let card1 = userRoma.getCardByKey(1);
// card1.putCredits(500);
// card1.setTransactionLimit(800);
//
// let card2 = userRoma.getCardByKey(2);
// card1.transferCredits(300, card2);
//
// console.log(card1.getCardOptions());
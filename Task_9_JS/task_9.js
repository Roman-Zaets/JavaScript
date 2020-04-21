// Зробити свій розпоряжок дня.
//     Мають бути функції, які є асинхронними (мають сетТаймАут або сетІнтервал) які описують якусь певну вашу дію в день.
//     Наприклад функція прокинутись триває 1с, поїсти - 0,5с. Доїхати до роботи - 2с. Пообідати - 1с.
//     Зробити таких функцій в районі 10 штук. Функція має приймати параметр, який буде відповідати за успішне чи не успішне виконання.
//     Далі виконати їх в тій послідовності, в якій ви виконуєте їх у свій звичайний день.
//
//     Тобто, як приклад
// Прокинулись - Поснідали - Зібрались - ПОїхали на роботу - Працююєте - Пообідали - Працюєте - Випили кави
// - Працюєте - Поїхали до дому - Повчились - Лягли спати.
//     Кожна функція має мати якесь успіше або не успішне виконання. Тобто можливий варіант, що при виконанні функції
//     доїхати на роботу ви стали в заторі і не попали на роботу. Або йдучи на обід ви забули гаманець і лишились голодні.

// Викоанв за допомогою коллбеку

// function theAgenda(toWakeUp, cb) {
//     setTimeout(() => {
//         if (toWakeUp) {
//             done = true;
//             cb(null, done);
//         } else {
//             cb('ERROR!!! I could not wake up.');
//         }
//     },2000);
// }
//
// function breakfast(breakfast, cb) {
//     setTimeout(() => {
//         if (breakfast) {
//             cb(null, done);
//         } else {
//             cb('ERROR!!! The fridge was empty.');
//         }
//     },2000);
// }
//
// function goingTo(goingTo, cb) {
//     setTimeout(() => {
//         if (goingTo) {
//             cb(null, done);
//         } else {
//             cb('ERROR!!! I feel bad.');
//         }
//     },1000);
// }
//
// function goingToWork(goingToWork, cb) {
//     setTimeout(() => {
//         if (goingToWork) {
//             cb(null, done);
//         } else {
//             cb('ERROR!!! The car broke down.');
//         }
//     },2000);
// }
//
// function working(working, cb) {
//     setTimeout(() => {
//         if (working) {
//             cb(null, done);
//         } else {
//             cb('ERROR!!! I can not work. Electricity was disconnected.');
//         }
//     },3000);
// }
//
// function lunch(lunch, cb) {
//     setTimeout(() => {
//         if (lunch) {
//             cb(null, done);
//         } else {
//             cb('ERROR!!! I forgot to take money at home.');
//         }
//     },2000);
// }
//
// function drinkTea(drinkTea, cb) {
//     setTimeout(() => {
//         if (drinkTea) {
//             cb(null, done);
//         } else {
//             cb('ERROR!!! I forgot to take money at home.');
//         }
//     },1000);
// }
//
// function goingHome(goingHome, cb) {
//     setTimeout(() => {
//         if (goingHome) {
//             cb(null, done);
//         } else {
//             cb('ERROR!!! The car broke down.');
//         }
//     },2000);
// }
//
// function supper(supper, cb) {
//     setTimeout(() => {
//         if (supper) {
//             cb(null, done);
//         } else {
//             cb('ERROR!!! The refrigerator is empty.');
//         }
//     },2000);
// }
//
// function learning(learning, cb) {
//     setTimeout(() => {
//         if (learning) {
//             cb(null, done);
//         } else {
//             cb('ERROR!!! I feel bad.');
//         }
//     },3000);
// }
//
// function goingToBed(goingToBed, cb) {
//     setTimeout(() => {
//         if (goingToBed) {
//             cb(null, done);
//         } else {
//             cb('ERROR!!! I have insomnia.');
//         }
//     },1000);
// }
//
// theAgenda(true, (error, done) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log('Good morning. I have already woken up.');
//
//         breakfast(true, (error, done) => {
//             if (error) {
//                 console.log(error);
//             } else {
//                 console.log('I already had breakfast.');
//
//                 goingTo(true, (error, done) => {
//                     if (error) {
//                         console.log(error);
//                     } else {
//                         console.log('I gathered.');
//
//                         goingToWork(true, (error, done) => {
//                             if (error) {
//                                 console.log(error);
//                             } else {
//                                 console.log('I came to work.');
//
//                                 working(true, (error, done) => {
//                                     if (error) {
//                                         console.log(error);
//                                     } else {
//                                         console.log('I work.');
//
//                                         lunch(true, (error, done) => {
//                                             if (error) {
//                                                 console.log(error);
//                                             } else {
//                                                 console.log('I have dined.');
//
//                                                 working(true, (error, done) => {
//                                                     if (error) {
//                                                         console.log(error);
//                                                     } else {
//                                                         console.log('I work.');
//
//                                                         drinkTea(true, (error, done) => {
//                                                             if (error) {
//                                                                 console.log(error);
//                                                             } else {
//                                                                 console.log('I drank some tea.');
//
//                                                                 working(true, (error, done) => {
//                                                                     if (error) {
//                                                                         console.log(error);
//                                                                     } else {
//                                                                         console.log('I work.');
//
//                                                                         goingHome(true, (error, done) => {
//                                                                             if (error) {
//                                                                                 console.log(error);
//                                                                             } else {
//                                                                                 console.log('I came home.');
//
//                                                                                 supper(true, (error, done) => {
//                                                                                     if (error) {
//                                                                                         console.log(error);
//                                                                                     } else {
//                                                                                         console.log('I had dinner.');
//
//                                                                                         learning(true, (error, done) => {
//                                                                                             if (error) {
//                                                                                                 console.log(error);
//                                                                                             } else {
//                                                                                                 console.log('I have already studied.');
//
//                                                                                                 goingToBed(true, (error, done) => {
//                                                                                                     if (error) {
//                                                                                                         console.log(error);
//                                                                                                     } else {
//                                                                                                         console.log('I went to bed. My day is over.');
//                                                                                                     }
//                                                                                                 })
//                                                                                             }
//                                                                                         })
//                                                                                     }
//                                                                                 })
//                                                                             }
//                                                                         })
//                                                                     }
//                                                                 })
//                                                             }
//                                                         })
//                                                     }
//                                                 })
//                                             }
//                                         })
//                                     }
//                                 })
//                             }
//                         })
//                     }
//                 })
//             }
//         })
//     }
// })

// Виконав за допомогою промісс

// function theAgenda(toWakeUp) {
//     return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (toWakeUp) {
//             done = true;
//             resolve(done);
//         } else {
//             reject('ERROR!!! I could not wake up.');
//         }
//     },2000);
//     })
// }
//
// function breakfast(breakfast) {
//     return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (breakfast) {
//             resolve(done);
//         } else {
//             reject('ERROR!!! The fridge was empty.');
//         }
//     },2000);
//     })
// }
//
// function goingTo(goingTo) {
//     return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (goingTo) {
//             resolve(done);
//         } else {
//             reject('ERROR!!! I feel bad.');
//         }
//     },1000);
//     })
// }
//
// function goingToWork(goingToWork) {
//     return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (goingToWork) {
//             resolve(done);
//         } else {
//             reject('ERROR!!! The car broke down.');
//         }
//     },2000);
//     })
// }
//
// function working(working) {
//     return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (working) {
//             resolve(done);
//         } else {
//             reject('ERROR!!! I can not work. Electricity was disconnected.');
//         }
//     },3000);
//     })
// }
//
// function lunch(lunch) {
//     return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (lunch) {
//             resolve(done);
//         } else {
//             reject('ERROR!!! I forgot to take money at home.');
//         }
//     },2000);
//     })
// }
//
// function drinkTea(drinkTea) {
//     return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (drinkTea) {
//             resolve(done);
//         } else {
//             reject('ERROR!!! I forgot to take money at home.');
//         }
//     },1000);
//     })
// }
//
// function goingHome(goingHome) {
//     return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (goingHome) {
//             resolve(done);
//         } else {
//             reject('ERROR!!! The car broke down.');
//         }
//     },2000);
//     })
// }
//
// function supper(supper) {
//     return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (supper) {
//             resolve(done);
//         } else {
//             reject('ERROR!!! The refrigerator is empty.');
//         }
//     },2000);
//     })
// }
//
// function learning(learning) {
//     return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (learning) {
//             resolve(done);
//         } else {
//             reject('ERROR!!! I feel bad.');
//         }
//     },3000);
//     })
// }
//
// function goingToBed(goingToBed) {
//     return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (goingToBed) {
//             resolve(done);
//         } else {
//             reject('ERROR!!! I have insomnia.');
//         }
//     },1000);
//     })
// }
//
// theAgenda(true)
//     .then(done => {
//         console.log('Good morning. I have already woken up.');
//         return breakfast(true)
//     })
//     .then(done => {
//         console.log('I already had breakfast.');
//         return goingTo(true)
//     })
//     .then(done => {
//         console.log('I gathered.');
//         return goingToWork(true)
//     })
//     .then(done => {
//         console.log('I came to work.');
//         return working(true)
//     })
//     .then(done => {
//         console.log('I work.');
//         return lunch(true)
//     })
//     .then(done => {
//         console.log('I have dined.');
//         return working(true)
//     })
//     .then(done => {
//         console.log('I work.');
//         return drinkTea(true)
//     })
//     .then(done => {
//         console.log('I drank some tea.');
//         return working(true)
//     })
//     .then(done => {
//         console.log('I work.');
//         return goingHome(true)
//     })
//     .then(done => {
//         console.log('I came home.');
//         return supper(true)
//     })
//     .then(done => {
//         console.log('I had dinner.');
//         return learning(true)
//     })
//     .then(done => {
//         console.log('I have already studied.');
//         return goingToBed(true)
//     })
//     .then(done => {
//         console.log('I went to bed. My day is over.');
//     })
//     .catch( reject => {
//         console.log(reject);
//     })
// ### async 函数实现原理
// async 就是 generator 的语法糖，自动调用 next()
// function spawn(genF) {
//     return new Promise((resolve, reject) => {
//         const gen = genF();
//         step(function () {
//             return gen.next(undefined);
//         });

//         function step(nextF) {
//             let next;
//             try {
//                 next = nextF();
//             } catch (error) {
//                 return reject(error);
//             }

//             if (next.done) {
//                 return resolve(next.value);
//             }
//             step(function () {
//                 return gen.next(v);
//             });
//             // Promise.resolve(next.value).then(v => {
//             //     step(function () {
//             //         return gen.next(v);
//             //     });
//             // }, e => {
//             //     step(function () {
//             //         return gen.throw(e);
//             //     });
//             // })
//         }

//     })
// }

function spawn(genF) {
    return new Promise(function (resolve, reject) {
        const gen = genF();

        function step(nextF) {
            let next;
            try {
                next = nextF();
            } catch (e) {
                return reject(e);
            }
            if (next.done) {
                return resolve(next.value);
            }
            Promise.resolve(next.value).then(function (v) {
                step(function () {
                    return gen.next(v);
                });
            }, function (e) {
                step(function () {
                    return gen.throw(e);
                });
            });
        }
        step(function () {
            return gen.next(undefined);
        });
    });
}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}



function* g() {
    yield  console.log(1);;
    yield console.log(2);;
    yield console.log(3);;
    
}

function fn(args) {
    return spawn(g);
}



// fn();

// sleep(1000).then(_ => console.log(1));

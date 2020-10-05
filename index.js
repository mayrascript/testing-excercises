function sum(a, b) {
    return a + b;
}

const momIsMadRandomAnswer = () => (Math.floor(Math.random() * (5 - 0)) + 0) > 3;

let array = [7,8,1,52];

function reverseArray(arr) {
    let count = arr.length;
    let reversed = [];
    do{
        const value = arr[count - 1];
        reversed.push(value);
        count -= 1;
    } while(count > 0);

    return reversed;
}

let promise = new Promise((resolve, reject) => {
    //reject(err);
    resolve(3);
})

function multiplication() {
    return new Promise((resolve, reject) => {
        resolve([1,2,3,4]);
    });
}


function birthdayGift() {
    return new Promise((resolve, reject) => {
        console.log('hola')
        const momIsMad = momIsMadRandomAnswer();
        if(momIsMad) {
            const err = new Error(
                `Mi madre decidió no comprarme un nuevo teléfono`);
            reject(err);
        }

        resolve(`Mi mamá está feliz!, me compró un nuevo teléfono`);
    });
}
module.exports = sum;

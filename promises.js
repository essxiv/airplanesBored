
let Random = Math.random() * 200
let roundedRandom = Math.floor(Random)

module.exports.createStore = function () {
    return new Promise((resolve, reject) => {
        let store = {
            id: roundedRandom,
            type: 'Store',
            model: true
        }
        setTimeout(function() {
            resolve(store)
        })
    });
}

module.exports.initStore = function (store) {
    return new Promise((resolve, reject) => {
        console.log(store)
        setTimeout(function() {
            resolve(store)
        })
    })
}

module.exports.readStoreData = function (data) {
    return new Promise((resolve, reject) => {
        console.log(data)
        setTimeout(function() {
            resolve(data)
        })
    });
}

module.exports.saveStoreData = function (id) {
    return new Promise((resolve, reject) => {
    })
}

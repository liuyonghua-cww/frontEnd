

module.exports = {

    devServer: {
        proxy: {
            '/chart': {
                target: "https://www.makeapie.com/",
                changOrigin: true, //开启代理
            },
            '/ecg-storage': {
                target: "https://www.makeapie.com/",
                changOrigin: true, //开启代理
            }
        },
        https: true
    },

};

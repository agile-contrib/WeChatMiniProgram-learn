Page({
    data: {
        value1: "默认的值",
        value2: [1, 2, 3, 4, 5],
        value3: "type1"
    },
    updateValue1() {

        // 修改数据
        this.setData({
            value1: "当前时间：" + new Date().valueOf()
        });
    },

    logValue1() {

        // 获取数据
        console.log("value1:" + this.data.value1);
    },

    doit(target) {

        // 打印页面中data-xxx的数据
        console.log(target.currentTarget.dataset);
    }

})

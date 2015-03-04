/**
 * Created by a2014 on 14-8-13.
 */
var util = {
    createEl: function (domName, cfg) {
        var el = document.createElement(domName);
        util.recursion(el, cfg);
        return el;
    },
    //递归函数
    recursion: function (dom, o) {
        for (var i in o) {
            if (Object.prototype.toString.call(o[i]) == '[object Object]') {
                util.recursion(dom[i], o[i]);
            } else {
                dom[i] = o[i];
            }
        }
    },
}
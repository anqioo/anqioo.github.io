window.onload = function () {


    // 1. 准备一套位置的配置数据，然后进行加载
    var config = [
        {
            "width": 200,
            "top": 60,
            "left": 0,
            "opacity": 0.2,
            "zIndex": 2
        },
        {
            "width": 300,
            "top": 120,
            "left": 100,
            "opacity": 0.6,
            "zIndex": 3
        },
        {
            "width": 400,
            "top": 180,
            "left": 300,
            "opacity": 1,
            "zIndex": 4
        },
        {
            "width": 300,
            "top": 120,
            "left": 600,
            "opacity": 0.6,
            "zIndex": 3
        },
        {
            "width": 200,
            "top": 60,
            "left": 800,
            "opacity": 0.2,
            "zIndex": 2
        }
    ];

    // 需求1：通过遍历的方式，动态给元素加载样式
    render();
    function render() {
        var ulLis = document.querySelectorAll('ul li');
        config.forEach(function (item, index) {
            // item 是样式对象
            $(ulLis[index]).animate(item, function () {
                flag = true;
            });
        })
    }

    // 鼠标移入移出，箭头显示和隐藏
    var container = document.querySelector('.container');
    var arrow = document.querySelector('.arrow');
    var left = arrow.querySelector('a:first-child');
    var right = arrow.querySelector('a:last-child');

    container.onmouseenter = function () {
        arrow.style.opacity = 1;
    }
    container.onmouseleave = function () {
        arrow.style.opacity = 0;
    }

    // 点击右箭头，往右移
    right.onclick = function () {
        config.push(config.shift())
        render();
    }
    left.onclick = function () {
        config.unshift(config.pop())
        render();
    }
}
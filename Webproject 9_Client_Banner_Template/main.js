/* mobile nav */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

/* splash screen */
const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e) => {
    setTimeout(() => {
        splash.classList.add('display-none');
    }, 2000);
})





'use strict';
(function() {
    var max = 0
    var timer = setInterval(function() {
        getElIndex()
        setProgress()
    }, 4000)

    function getElIndex() {
        let elAry = []
        for (let i = 0; i < max; i++) {
            let el = document.querySelector(`[data-index='${i}']`)
            let index = el.dataset.index - 1 < 0 ? max - 1 : el.dataset.index - 1
            elAry.push({ el, index })
        }
        changeCard(elAry)
    }

    function changeCard(ary) {
        ary.forEach((item) => {
            item.el.dataset.index = item.index
            item.el.querySelector('h3').style = ''
        })
        setTextPosition()
    }

    function setTextPosition() {
        setTimeout(function() {
            let txt = document.querySelector('[data-index="0"] h3')

            txt.style.opacity = 1
            txt.style.bottom = '10%'
        }, 1500)
    }

    /*
        function setProgress() {
            let progress = document.querySelector('.progress')
            setTimeout(function() {
                progress.style.left = 0
                progress.style.right = 'auto'
                progress.style.width = '100%'
            }, 2000)
            setTimeout(function() {
                progress.style.left = 'auto'
                progress.style.right = 0
                progress.style.width = 0
            }, 3000)
        }*/

    function init(target) {
        let item = document.querySelector(target).querySelectorAll('.card')
        max = item.length
        item.forEach((el, i) => {
            el.dataset.index = i
        })
        setProgress()
        setTextPosition()
    }
    init('#app')
})()
let media = window.matchMedia("(max-width: 500px)");

let advantageItem = document.getElementsByClassName("advantage__item");

function mediaQuery() {
    if (media.matches) {

        for (let i = 0; i < advantageItem.length; i++) {
            let child = advantageItem[i].childNodes;

            if (child[1].nodeName == "IMG") {
                child[0].after(child[3]);
            }
        }
    } else {
        for (let i = 0; i < advantageItem.length; i++) {
            let child = advantageItem[i].childNodes;

            if (child[1].nodeName == "DIV") {
                if (i == 1 || i == 3 || i == 5) {
                    child[3].after(child[1]);
                }
            }
        }
    }
}

mediaQuery();
window.onresize = mediaQuery;
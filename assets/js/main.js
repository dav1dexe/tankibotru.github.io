let media = window.matchMedia("(max-width: 850px)");
let feauturesItem = document.getElementsByClassName("feautures__item");

function mediaQuery() {

    if (media.matches) {
        for (let i = 0; i < feauturesItem.length; i++) {
            let child = feauturesItem[i].childNodes;

            if (child[1].nodeName == "IMG") {
                child[0].after(child[3]);
            }
        }
    } else {
        for (let i = 0; i < feauturesItem.length; i++) {
            let child = feauturesItem[i].childNodes;

            if (child[1].nodeName == "DIV") {
                if (i == 1 || i == 3 || i == 5 || i == 7) {
                    child[3].after(child[1]);
                }
            }
        }
    }
}

mediaQuery();
window.onresize = mediaQuery;


function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show');
      }
    });
  }
  
  let options = {threshold: [0.5]};
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.feautures__item');
  
  for (let elm of elements) {
    observer.observe(elm);
  }
var myArr = prophets.json[ prophets]

function showCard() {
    var temp, item, a, i;
    temp = document.getElementsByTagName("template")[0];
    item = temp.content.querySelector("div");
    for (i = 0; i < myArr.length; i++) {
      a = document.importNode(item, true);
      a.textContent += myArr[i];
      document.body.appendChild(a);
    }
}
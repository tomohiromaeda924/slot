let total = 0;//止めたstopボタンの数
let picType = [];//止めた写真の種類
let si1;//setIntervalを代入
let si2;//setIntervalを代入
let si3;//setIntervalを代入
const pictures = ["img/bell.png","img/cherry.png","img/seven.png"];
const pic1 = document.getElementById('pic1');
const pic2 = document.getElementById('pic2');
const pic3 = document.getElementById('pic3');

const stops = document.getElementById('stops');
const but1 = document.getElementById('but1');
const but2 = document.getElementById('but2');
const but3 = document.getElementById('but3');
const spin = document.getElementById('spin');


//stopボタン非活性化
but1.className="stBut op";
but2.className="stBut op";
but3.className="stBut rightBlock op";


class Panel{
  constructor( pic, but) {
        this.pic = pic;
        this.but = but;
        this.wh = undefined;
    }

  changeImg() {
    let c = this.pic;
      this.wh = setInterval(function () {
        let a = Math.floor( Math.random() * pictures.length) ;
        c.src = pictures[a];
      }, 50);

  }

  stop(){
    clearInterval(this.wh);
  }
}

let panel1 = new Panel(pic1, but1);
let panel2 = new Panel(pic2, but2);
let panel3 = new Panel(pic3, but3);
let panels = [panel1, panel2, panel3];


spin.addEventListener("click", (event) => {
  let clasname = event.target.classList;
  if(clasname.contains("op")){
    return;
  }
  //spinボタン非活性化（色）
  clasname.add("op");
  //stopボタン活性化（色）
  but1.className="stBut";
  but2.className="stBut";
  but3.className="stBut rightBlock";
  //インスタンスの配列を使って画像を出力
  panels.forEach(panel =>{
    panel.changeImg();
  });

});

stops.addEventListener("click", (event) => {
  let clasname = event.target.classList;
  if(clasname.contains("op")){
    return;
  }
  //フィルターを使って押されたstopボタンに対応するインスタンスを抽出
  let stopB = panels.filter( function( panel ) {
    return panel.but === event.target;
})
//インスタンス変数.stop();
  stopB[0].stop();
  //押したボタンを非活性化（色）
  clasname.add("op");
  total++;
  if(total === 3){
    spin.className="";
    total = 0;
  }
});
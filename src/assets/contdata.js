class ContentData{
    constructor(iconname, icontype,title,explain,child) {
      this.iconname = iconname;
      this.icontype = icontype;
      this.title = title;
      this.explain= explain;
      this.child = child;
    }
  }

function getContents(){
    let contents = [];
    let xiv = new ContentData('XIV','fa fa-meteor','FINAL FANTASY XIV','5.5済 まったりプレイ',[]);

    let iidx = new ContentData('IIDX','fa fa-compact-disc','beatmaniaIIDX','SP中伝(ほんまか？)',[]);
    let ppn = new ContentData('POPN','9','pop\'n music','50クリア:トイエンカウ 最近ほぼやってない･･･',[]);
    let sdvx = new ContentData('SDVX','fas fa-bolt','SOUND VOLTEX','銀枠暴龍天(Xronièr回まぢむり)',[]);
    let mg = new ContentData('MG','fa fa-music','Music Game','',[iidx,ppn,sdvx]);


    let jsc = new ContentData('JS','fab fa-js','JavaScript/Node.js','なんとなく書けはするけどなんも分からん',[]);
    let aes = new ContentData('ES','ES','Adobe ExtendScript','それとなくAdobe系スクリプトも書けま～す',[]);   
    let vuejs = new ContentData('VUEJS','fab fa-vuejs','Vue.js','Vuex,Vue Roter辺りもちゃんと勉強したい今日この頃',[]);
    let gas = new ContentData('GAS','fab fa-google','Google Apps Script','CDN版Vue.jsで社内ツールを作ったり作ってなかったりする',[]);

    let skills = new ContentData('SKILLS','fas fa-laptop-code','Skills','',[jsc,vuejs,aes,gas]);

    let tw = new ContentData('TWT','fab fa-twitter','Twitter','@Tsaucer_Aty',[]);
    let contact = new ContentData('CNT','fab fa-telegram-plane','Contact','',[tw]);



    contents.push(xiv);
    contents.push(mg);
    contents.push(skills)
    contents.push(contact);

    return contents;
}

export default{
    getContents,
}
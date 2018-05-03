cc.Class({
    extends: cc.Component,


    properties: {
       hintBtn: cc.Button,
       comPlayBtn: cc.Button,
       exitBtn: cc.Button,

       card1: cc.Button,
       card2: cc.Button,
       card3: cc.Button,
       card4: cc.Button,
       card5: cc.Button,
       card6: cc.Button,
       card7: cc.Button,
       card8: cc.Button,
       card9: cc.Button,
       card10: cc.Button,
       card11: cc.Button,
       card12: cc.Button,
       card13: cc.Button,
    //    cards: [cc.Button],

    },

    onLoad: function () {
       this.hintBtn.node.on('click', this.getHint, this);
       this.comPlayBtn.node.on('click', this.comPlay, this);
       this.exitBtn.node.on('click', this.exitTable, this);

       this.card1.node.on('click', this.card1C, this);
    
       //this.cards.node.on('click', this.clickCard, this);

    },

    card1C:function(event){
        // var btn = this.card1;
        var btn = this.card1.getComponent(cc.Button);
        btn.node.y += 20;
        console.log(btn.node.y);
        //this.Button.node.x
    },

    // clickCard:function(event){
    //     var card = this.cards;
    //     console.log(card.x);
    // },

    // onStartBtnClicked: function() {
    //     //console.log('Start button clicked!');
    //     cc.director.loadScene('Table');
    // },
    getHint:function(event){
        console.log('Show me some Hint !!');
    },

    comPlay:function(event){
        console.log('Computer start Playing !!');
    },

    exitTable: function (event) {
       cc.director.loadScene('Lobby');
    }
});
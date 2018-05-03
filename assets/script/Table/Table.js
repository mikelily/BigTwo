cc.Class({
    extends: cc.Component,


    properties: {
       hintBtn: cc.Button,
       comPlayBtn: cc.Button,
       exitBtn: cc.Button
    },

    onLoad: function () {
       this.hintBtn.node.on('click', this.getHint, this);
       this.comPlayBtn.node.on('click', this.comPlay, this);
       this.exitBtn.node.on('click', this.exitTable, this);
    },

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
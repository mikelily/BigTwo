cc.Class({
    extends: cc.Component,


    properties: {
       startBtn: cc.Button
    },

    onLoad: function () {
       this.startBtn.node.on('click', this.enterTable, this);
    },

    // onStartBtnClicked: function() {
    //     //console.log('Start button clicked!');
    //     cc.director.loadScene('Table');
    // },

    enterTable: function (event) {
       cc.director.loadScene('Table');
    }
});
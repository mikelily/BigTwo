

cc.Class({
    extends: cc.Component,

    properties: {
        startBtn : cc.Button
        //table : cc.scene
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    onStartBtnClicked: function() {
        //console.log('Start button clicked!');
        cc.director.loadScene('tabble');
    },

    start () {

    },

    // update (dt) {},
});

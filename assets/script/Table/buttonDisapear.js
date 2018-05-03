// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        button: {
            default: null,
            type: cc.Button
        },
    },
    onLoad: function () {
        //this.clickTimeArray = new Array();


        var self = this;

        this.node.on(cc.Node.EventType.TOUCH_START, this.nodeDoubleClickCallBack, this);
        // this.pokerNode.on(cc.Node.EventType.TOUCH_MOVE, this.moveCallback, this);


    },

 
    
    nodeDoubleClickCallBack: function(event){


        this.button.node.active = !this.button.node.active; 
    },
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    // update (dt) {},
});

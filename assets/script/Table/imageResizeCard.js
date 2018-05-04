cc.Class({
    extends: cc.Component,

    properties: {
        pressedScale: 1,
        transDuration: 0,
        sizeFlag:true,
        
    },

    onLoad: function(){
        var self = this;
        
        self.initScale = this.node.scale;
        self.button = self.getComponent(cc.Button);

        function onTouchDown (event) {
            this.stopAllActions();

            if(self.sizeFlag){

                self.node.y+=20;
            }else{
                self.node.y-=20;
 
            }
            
            self.sizeFlag=!self.sizeFlag;
            
        }
        function onTouchUp (event) {
            this.stopAllActions();
            this.runAction(self.scaleUpAction);
        }

        this.node.on('touchstart', onTouchDown, this.node);
    },
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    // update (dt) {},
});

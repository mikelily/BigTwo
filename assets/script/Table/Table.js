cc.Class({
    extends: cc.Component,


    properties: {
        hintBtn: cc.Button,
        comPlayBtn: cc.Button,
        exitBtn: cc.Button,

        scoreBoard:{
            default:null,
            type:cc.Label,
        },

        poker: {
            default: null,
            type: cc.Prefab
        },

        pokerNode: {
            default: null,
            type: cc.Node
        },


        point:0,
        pressedScale: 1,
        transDuration: 0,
        sizeFlag:true,
        pokerSpriteList: null,

    },

    onLoad: function () {
        this.hintBtn.node.on('click', this.getHint, this);
        this.comPlayBtn.node.on('click', this.comPlay, this);
        this.exitBtn.node.on('click', this.exitTable, this);
       
        // for(var i=0;i<cards.length;i++){
        //     // this.cards[i].node.on('click',this.cardsHint,this);
        // };
        // this.cards[].node.on('click', this.cards, this);
    
        //this.cards.node.on('click', this.clickCard, this);
        var self = this;
        var poker = this.poker;
        this.pokerSpriteList = new Array();
        cc.loader.loadRes("imgs/Table/poker", cc.SpriteAtlas, function (err, assets) {
            // assets 是一个 SpriteFrame 数组，已经包含了图集中的所有 SpriteFrame。
            // 而 loadRes('test assets/sheep', cc.SpriteAtlas, function (err, atlas) {...}) 获得的则是整个 SpriteAtlas 对象。
            // console.log('---' + err);
            // console.log('====' + assets);
            // cc.SpriteAtlas;
            
            var cardMatrix=new Array();
            for(var i=0; i<52;i++){
                cardMatrix[i]=i+1;
            } 
            
            shuffle(cardMatrix); 
            
            
            function shuffle(cardMatrix){
                
                var tmp;   
                for(var i=0; i <100;i++){
                    var randNumber=Math.floor((Math.random()*52));
                    
                    tmp=cardMatrix[0];
                    cardMatrix[0]=cardMatrix[randNumber];
                    cardMatrix[randNumber]=tmp;
                    
                } 
                
            }

            
            //cc.log(cardMatrix);
            var ttt = assets.getSpriteFrames();
            //cc.log(ttt);
            // cc.SpriteFrame
            for(var i = 1; i < ttt.length; i++){
                
                if(i == 13)
                    break;
                var sf = ttt[cardMatrix[i]];
                //cc.log(sf);
                // console.log(JSON.stringify(sf));
                // console.log(sf._name);

                var pokerSprite = cc.instantiate(poker);
                pokerSprite.getComponent(cc.Sprite).spriteFrame = sf;
                pokerSprite.getComponent(cc.Sprite).spriteFrame
                self.pokerNode.addChild(pokerSprite);
                pokerSprite.setPosition(i*72, 0);
                //pokerSprite.status = POSITION_DOWN;

                self.pokerSpriteList.push(pokerSprite);
            }

        });

    },
    
    // card1C:function(event){
    //     // var btn = this.card1;
    //     var btn = this.card1.getComponent(cc.Button);
    //     btn.node.y += 20;
    //     console.log(btn.node.y);
    //     //this.Button.node.x
    // },

    scoreCounter: function(){
        this.point+=1;
        this.scoreBoard.string = "Score:" + this.point;

    },

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
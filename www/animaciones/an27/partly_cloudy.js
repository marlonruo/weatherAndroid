(function (lib, img, cjs) {

var p; // shortcut to reference prototypes
var rect; // used to reference frame bounds

// library properties:
lib.properties = {
	width: 750,
	height: 540,
	fps: 12,
	color: "#333333",
	manifest: [
		{src:"images/arbol.png", id:"arbol"},
		{src:"images/bicicleta.png", id:"bicicleta"},
		{src:"images/brillo_1.png", id:"brillo_1"},
		{src:"images/brillo_2.png", id:"brillo_2"},
		{src:"images/estrella_1.png", id:"estrella_1"},
		{src:"images/estrella_2.png", id:"estrella_2"},
		{src:"images/fondo.png", id:"fondo"},
		{src:"images/luna.png", id:"luna"}
	]
};



// symbols:



(lib.arbol = function() {
	this.initialize(img.arbol);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,612,176);


(lib.bicicleta = function() {
	this.initialize(img.bicicleta);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,108,90);


(lib.brillo_1 = function() {
	this.initialize(img.brillo_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,381,381);


(lib.brillo_2 = function() {
	this.initialize(img.brillo_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,381,381);


(lib.estrella_1 = function() {
	this.initialize(img.estrella_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,9,9);


(lib.estrella_2 = function() {
	this.initialize(img.estrella_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,12,12);


(lib.fondo = function() {
	this.initialize(img.fondo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,540);


(lib.luna = function() {
	this.initialize(img.luna);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,228,228);


(lib.Tween2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.bicicleta();
	this.instance.setTransform(-54,-45);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-54,-45,108,90);
p.frameBounds = [rect];


(lib.Tween1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.bicicleta();
	this.instance.setTransform(-54,-45);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-54,-45,108,90);
p.frameBounds = [rect];


(lib.estrella_2_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.estrella_2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,12,12);
p.frameBounds = [rect];


(lib.estrella_1_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.estrella_1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,9,9);
p.frameBounds = [rect];


(lib.brillo_2_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.brillo_2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,381,381);
p.frameBounds = [rect];


(lib.brillo_1_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.brillo_1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,381,381);
p.frameBounds = [rect];


(lib.estrella_2_anima = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.estrella_2_1("synched",0);
	this.instance.setTransform(6,6,1,1,0,0,0,6,6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.301},4).to({alpha:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,12,12);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.estrella_1_anima = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.estrella_1_1("synched",0);
	this.instance.setTransform(4.5,4.5,1,1,0,0,0,4.5,4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.5},2).to({alpha:1},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,9,9);
p.frameBounds = [rect, rect, rect, rect, rect];


(lib.brillo_anima = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// brillo_1
	this.instance = new lib.brillo_1_1("synched",0);
	this.instance.setTransform(190.6,190.5,0.827,0.827,0,0,0,190.6,190.5);
	this.instance.alpha = 0.051;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.039},4).to({alpha:0.051},5).wait(1));

	// brillo_2
	this.instance_1 = new lib.brillo_2_1("synched",0);
	this.instance_1.setTransform(190.5,190.5,1,1,0,0,0,190.5,190.5);
	this.instance_1.alpha = 0.051;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0.039},4).to({alpha:0.051},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,381,381);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.bicicleta_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(54,45);
	this.instance.alpha = 0;

	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.setTransform(640.9,45);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},6).to({state:[{t:this.instance}]},7).to({state:[{t:this.instance_1}]},4).to({state:[]},1).wait(79));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[54.2,45,100.1,14.4,146.1,-6.8]},alpha:1},3,cjs.Ease.get(0.1)).to({guide:{path:[146.2,-7.1,245,-52.5,343.6,-53.5]}},6).to({guide:{path:[343.6,-53.5,434.5,-54.5,525,-17.9]}},7,cjs.Ease.get(0.1)).to({_off:true,guide:{path:[525,-17.6,583,6,640.9,45]},alpha:0},4).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,108,90);
p.frameBounds = [rect, new cjs.Rectangle(31.8,-20.1,108,90), new cjs.Rectangle(62.6,-37.4,108,90), new cjs.Rectangle(92.1,-52,108,90), new cjs.Rectangle(123.4,-65.3,108,90), new cjs.Rectangle(155.5,-76.6,108,90), new cjs.Rectangle(188.3,-85.8,108,90), new cjs.Rectangle(221.7,-92.6,108,90), new cjs.Rectangle(255.6,-97,108,90), new cjs.Rectangle(289.7,-98,108,90), new cjs.Rectangle(318.5,-98,108,90), new cjs.Rectangle(346.5,-95.6,108,90), new cjs.Rectangle(373.6,-91.5,108,90), new cjs.Rectangle(399.6,-86,108,90), new cjs.Rectangle(424.6,-79.2,108,90), new cjs.Rectangle(448.4,-71.4,108,90), new cjs.Rectangle(471.1,-62.8,108,90), new cjs.Rectangle(501.2,-49.5,108,90), new cjs.Rectangle(530.7,-34.4,108,90), new cjs.Rectangle(559.2,-17.8,108,90), new cjs.Rectangle(586.9,0,108,90), rect=null, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


// stage content:



(lib.partly_cloudy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// arbol.png
	this.instance = new lib.arbol();
	this.instance.setTransform(86,364);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(100));

	// estrellas
	this.instance_1 = new lib.estrella_2_anima("synched",4);
	this.instance_1.setTransform(74.1,65,1,1,0,0,0,6,6);
	this.instance_1.alpha = 0.398;

	this.instance_2 = new lib.estrella_2_anima("synched",0);
	this.instance_2.setTransform(270,31,1,1,0,0,0,6,6);
	this.instance_2.alpha = 0.102;

	this.instance_3 = new lib.estrella_2_anima("synched",0);
	this.instance_3.setTransform(717.6,344,1,1,0,0,0,6,6);
	this.instance_3.alpha = 0.102;

	this.instance_4 = new lib.estrella_2_anima("synched",0);
	this.instance_4.setTransform(92.6,228,1,1,0,0,0,6,6);
	this.instance_4.alpha = 0.102;

	this.instance_5 = new lib.estrella_1_anima("synched",4);
	this.instance_5.setTransform(382.1,34.5,1,1,0,0,0,4.5,4.5);
	this.instance_5.alpha = 0.148;

	this.instance_6 = new lib.estrella_1_anima("synched",1);
	this.instance_6.setTransform(63.6,469.5,1,1,0,0,0,4.5,4.5);
	this.instance_6.alpha = 0.051;

	this.instance_7 = new lib.estrella_1_anima("synched",0);
	this.instance_7.setTransform(256.5,434.5,1,1,0,0,0,4.5,4.5);
	this.instance_7.alpha = 0.051;

	this.instance_8 = new lib.estrella_1_anima("synched",3);
	this.instance_8.setTransform(81.5,405.5,1,1,0,0,0,4.5,4.5);
	this.instance_8.alpha = 0.051;

	this.instance_9 = new lib.estrella_1_anima("synched",4);
	this.instance_9.setTransform(506.1,184.6,1,1,0,0,0,4.5,4.5);
	this.instance_9.alpha = 0.199;

	this.instance_10 = new lib.estrella_1_anima("synched",4);
	this.instance_10.setTransform(719.1,38.5,1,1,0,0,0,4.5,4.5);
	this.instance_10.alpha = 0.25;

	this.instance_11 = new lib.estrella_1_anima("synched",4);
	this.instance_11.setTransform(658.1,169.5,1,1,0,0,0,4.5,4.5);
	this.instance_11.alpha = 0.148;

	this.instance_12 = new lib.estrella_1_anima("synched",0);
	this.instance_12.setTransform(539.1,38.5,1,1,0,0,0,4.5,4.5);
	this.instance_12.alpha = 0.25;

	this.instance_13 = new lib.estrella_1_anima("synched",2);
	this.instance_13.setTransform(460.6,96.5,1,1,0,0,0,4.5,4.5);
	this.instance_13.alpha = 0.148;

	this.instance_14 = new lib.estrella_1_anima("synched",0);
	this.instance_14.setTransform(613.1,318.5,1,1,0,0,0,4.5,4.5);
	this.instance_14.alpha = 0.102;

	this.instance_15 = new lib.estrella_1_anima("synched",4);
	this.instance_15.setTransform(493.5,399.5,1,1,0,0,0,4.5,4.5);
	this.instance_15.alpha = 0.051;

	this.instance_16 = new lib.estrella_1_anima("synched",0);
	this.instance_16.setTransform(696,416.5,1,1,0,0,0,4.5,4.5);
	this.instance_16.alpha = 0.051;

	this.instance_17 = new lib.estrella_1_anima("synched",2);
	this.instance_17.setTransform(486.6,342.5,1,1,0,0,0,4.5,4.5);
	this.instance_17.alpha = 0.102;

	this.instance_18 = new lib.estrella_1_anima("synched",1);
	this.instance_18.setTransform(577.1,399.5,1,1,0,0,0,4.5,4.5);
	this.instance_18.alpha = 0.051;

	this.instance_19 = new lib.estrella_1_anima("synched",0);
	this.instance_19.setTransform(188.5,29.5,1,1,0,0,0,4.5,4.5);
	this.instance_19.alpha = 0.25;

	this.instance_20 = new lib.estrella_1_anima("synched",4);
	this.instance_20.setTransform(54.6,136.5,1,1,0,0,0,4.5,4.5);
	this.instance_20.alpha = 0.148;

	this.instance_21 = new lib.estrella_1_anima("synched",0);
	this.instance_21.setTransform(271.5,127.5,1,1,0,0,0,4.5,4.5);
	this.instance_21.alpha = 0.148;

	this.instance_22 = new lib.estrella_1_anima("synched",2);
	this.instance_22.setTransform(45.6,334.5,1,1,0,0,0,4.5,4.5);
	this.instance_22.alpha = 0.102;

	this.instance_23 = new lib.estrella_1_anima("synched",3);
	this.instance_23.setTransform(143.6,300.5,1,1,0,0,0,4.5,4.5);
	this.instance_23.alpha = 0.102;

	this.instance_24 = new lib.estrella_1_anima("synched",1);
	this.instance_24.setTransform(152.6,110.5,1,1,0,0,0,4.5,4.5);
	this.instance_24.alpha = 0.148;

	this.instance_25 = new lib.estrella_2_anima("synched",0);
	this.instance_25.setTransform(638.5,100,1,1,0,0,0,6,6);
	this.instance_25.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(100));

	// bicicleta.png
	this.instance_26 = new lib.bicicleta_1("synched",0);
	this.instance_26.setTransform(80.1,341,1,1,0,0,0,54,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(100));

	// luna.png
	this.instance_27 = new lib.luna();
	this.instance_27.setTransform(261,123);

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(100));

	// brillo
	this.instance_28 = new lib.brillo_anima("synched",0);
	this.instance_28.setTransform(374.5,239.5,1,1,0,0,0,190.5,190.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(401.1,295,697.6,515);
p.frameBounds = [rect, rect=new cjs.Rectangle(416.1,295,682.6,515), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
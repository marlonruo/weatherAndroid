(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 750,
	height: 540,
	fps: 12,
	color: "#0033FF",
	manifest: [
		{src:"images/fondo.png", id:"fondo"},
		{src:"images/letrero.png", id:"letrero"},
		{src:"images/lluvia_1.png", id:"lluvia_1"},
		{src:"images/lluvia_2.png", id:"lluvia_2"},
		{src:"images/lluvia_3.png", id:"lluvia_3"},
		{src:"images/personaje.png", id:"personaje"},
		{src:"images/rain_night_0.png", id:"rain_night_0"},
		{src:"images/rain_night_1.png", id:"rain_night_1"},
		{src:"images/rain_night_2.png", id:"rain_night_2"}
	]
};



// symbols:



(lib.fondo = function() {
	this.initialize(img.fondo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,540);


(lib.letrero = function() {
	this.initialize(img.letrero);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,48,138);


(lib.lluvia_1 = function() {
	this.initialize(img.lluvia_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,702,528);


(lib.lluvia_2 = function() {
	this.initialize(img.lluvia_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,723,537);


(lib.lluvia_3 = function() {
	this.initialize(img.lluvia_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,696,528);


(lib.personaje = function() {
	this.initialize(img.personaje);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,123,183);


(lib.rain_night_0 = function() {
	this.initialize(img.rain_night_0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,540);


(lib.rain_night_1 = function() {
	this.initialize(img.rain_night_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,540);


(lib.rain_night_2 = function() {
	this.initialize(img.rain_night_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,540);


(lib.ojos_movie = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#32313A").s().p("AgsAOIAAgcIBZAAIAAAcg");
	this.shape.setTransform(40.5,1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#32313A").s().p("AgsAOIAAgcIBZAAIAAAcg");
	this.shape_1.setTransform(4.5,1.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,45,3);


(lib.lluvia = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.lluvia_1();

	this.instance_1 = new lib.lluvia_3();

	this.instance_2 = new lib.lluvia_2();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,702,528);


(lib.bigotes_anima = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#191A14").s().p("AgcAPIAAgdIA5AAIAAAdg");
	this.shape.setTransform(98,13.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#191A14").s().p("AgdAOIAAgcIA7AAIAAAcg");
	this.shape_1.setTransform(3,1.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#191A14").s().p("AgcAPIAAgcIA5AAIAAAcg");
	this.shape_2.setTransform(98,16.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#191A14").s().p("AgdAPIAAgdIA7AAIAAAdg");
	this.shape_3.setTransform(3,4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},2).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,101,15);


// stage content:
(lib.pp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// lluvia
	this.instance = new lib.lluvia("synched",0);
	this.instance.setTransform(401.5,274.5,1,1,0,0,0,361.5,268.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(45));

	// bigotes
	this.instance_1 = new lib.bigotes_anima("synched",0);
	this.instance_1.setTransform(483.5,400.5,1,1,0,0,0,50.5,7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(45));

	// ojos
	this.instance_2 = new lib.ojos_movie();
	this.instance_2.setTransform(485.5,393,1,1,0,0,0,22.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleY:4.08},4,cjs.Ease.get(0.99)).to({scaleY:1},5,cjs.Ease.get(0.99)).wait(36));

	// Layer 1
	this.instance_3 = new lib.letrero();
	this.instance_3.setTransform(176,402);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(45));

	// personaje / fondo
	this.instance_4 = new lib.personaje();
	this.instance_4.setTransform(427,357);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(415,276,702,534);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
var rect; // used to reference frame bounds

// library properties:
lib.properties = {
	width: 750,
	height: 540,
	fps: 12,
	color: "#333333",
	manifest: [
		{src:"images/brazo.png", id:"brazo"},
		{src:"images/capa.png", id:"capa"},
		{src:"images/cuerpo.png", id:"cuerpo"},
		{src:"images/lluvia_1.png", id:"lluvia_1"},
		{src:"images/lluvia_2.png", id:"lluvia_2"},
		{src:"images/lluvia_3.png", id:"lluvia_3"},
		{src:"images/nubes.png", id:"nubes"},
		{src:"images/rayo_1.png", id:"rayo_1"},
		{src:"images/rayo_2.png", id:"rayo_2"},
		{src:"images/rayos_martillo.png", id:"rayos_martillo"}
	]
};



// symbols:



(lib.brazo = function() {
	this.initialize(img.brazo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,60,51);


(lib.capa = function() {
	this.initialize(img.capa);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,204,126);


(lib.cuerpo = function() {
	this.initialize(img.cuerpo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,81,177);


(lib.lluvia_1 = function() {
	this.initialize(img.lluvia_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,579,372);


(lib.lluvia_2 = function() {
	this.initialize(img.lluvia_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,612,372);


(lib.lluvia_3 = function() {
	this.initialize(img.lluvia_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,570,372);


(lib.nubes = function() {
	this.initialize(img.nubes);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,606,153);


(lib.rayo_1 = function() {
	this.initialize(img.rayo_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,234,150);


(lib.rayo_2 = function() {
	this.initialize(img.rayo_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,84,213);


(lib.rayos_martillo = function() {
	this.initialize(img.rayos_martillo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,96);


(lib.Tween1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.capa();
	this.instance.setTransform(-102,-63);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-102,-63,204,126);
p.frameBounds = [rect];


(lib.rayo_2_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.rayo_2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,84,213);
p.frameBounds = [rect];


(lib.rayo_1_imagen = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.rayo_1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,234,150);
p.frameBounds = [rect];


(lib.lluvia = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.lluvia_1();
	this.instance.setTransform(-10,0);

	this.instance_1 = new lib.lluvia_3();
	this.instance_1.setTransform(-10,3);

	this.instance_2 = new lib.lluvia_2();
	this.instance_2.setTransform(-25,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10,0,579,372);
p.frameBounds = [rect, new cjs.Rectangle(-10,3,570,372), new cjs.Rectangle(-25,0,612,372)];


(lib.brillo_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.298)").s().p("EgJoAsSMAAAhYjITQAAMAAABYjg");
	this.shape.setTransform(82.3,283.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.298)").s().p("EgAwAsSMAAAhYjIBhAAMAAABYjg");
	this.shape_1.setTransform(82,283.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.298)").s().p("EgMyAsSMAAAhYjIZmAAMAAABYjg");
	this.shape_2.setTransform(82,283.5);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,164,567);
p.frameBounds = [rect];


(lib.brazo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.brazo();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({y:1},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,60,51);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(0,1,60,51), rect];


(lib.capa_anima = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(102,61);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:59},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,-2,204,126);
p.frameBounds = [rect, new cjs.Rectangle(0,-4,204,126)];


// stage content:



(lib.severe_thunderstorm_night = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// nubes.png
	this.instance = new lib.nubes();
	this.instance.setTransform(92,62);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg6lAqMMAAAhUXMB1KAAAMAAABUXg");
	this.shape.setTransform(375,270);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance},{t:this.shape}]},2).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance},{t:this.shape}]},24).to({state:[{t:this.instance}]},1).wait(19));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(52));

	// rayo_2.png
	this.instance_1 = new lib.rayo_2_1("synched",0);
	this.instance_1.setTransform(433,122.6,0.429,0.429,0,0,0,42,27.6);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(25).to({_off:false},0).to({regY:27.5,scaleX:1,scaleY:1,y:142.6,alpha:1},2).to({_off:true},2).wait(1).to({_off:false},0).to({_off:true},2).wait(20));

	// rayo_1.png
	this.instance_2 = new lib.rayo_1_imagen("synched",0);
	this.instance_2.setTransform(184,179,0.358,0.358,0,0,0,27,9.1);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1,scaleY:1,y:179.1,alpha:1},2).to({_off:true},2).wait(1).to({_off:false},0).to({_off:true},2).wait(45));

	// brazo.png
	this.instance_3 = new lib.brazo_1("synched",0);
	this.instance_3.setTransform(363,346.5,1,1,0,0,0,30,25.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(52));

	// rayos_martillo.png
	this.instance_4 = new lib.rayos_martillo();
	this.instance_4.setTransform(316,290);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(5).to({_off:false},0).wait(1).to({y:293},0).to({_off:true},1).wait(23).to({_off:false,y:290},0).wait(1).to({y:293},0).to({_off:true},1).wait(20));

	// lluvia
	this.instance_5 = new lib.lluvia("synched",0);
	this.instance_5.setTransform(432.5,435.5,1,1,0,0,0,361.5,268.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(52));

	// cuerpo.png
	this.instance_6 = new lib.cuerpo();
	this.instance_6.setTransform(339,364);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(52));

	// capa.png
	this.instance_7 = new lib.capa_anima("synched",0);
	this.instance_7.setTransform(394,456,1,1,0,0,0,102,63);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(52));

	// Layer 13 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1 = new cjs.Graphics().p("EgAnAsSMAAAhYjIBOAAMAAABYjg");
	var mask_graphics_2 = new cjs.Graphics().p("EgCoAsSMAAAhYjIFSAAMAAABYjg");
	var mask_graphics_3 = new cjs.Graphics().p("EgErAsSMAAAhYjIJWAAMAAABYjg");
	var mask_graphics_4 = new cjs.Graphics().p("EgGtAsSMAAAhYjINbAAMAAABYjg");
	var mask_graphics_5 = new cjs.Graphics().p("EgIuAsSMAAAhYjIReAAMAAABYjg");
	var mask_graphics_6 = new cjs.Graphics().p("EgKxAsSMAAAhYjIViAAMAAABYjg");
	var mask_graphics_7 = new cjs.Graphics().p("EgMyAsSMAAAhYjIZmAAMAAABYjg");
	var mask_graphics_26 = new cjs.Graphics().p("EgAnAsSMAAAhYjIBOAAMAAABYjg");
	var mask_graphics_27 = new cjs.Graphics().p("EgCoAsSMAAAhYjIFSAAMAAABYjg");
	var mask_graphics_28 = new cjs.Graphics().p("EgErAsSMAAAhYjIJWAAMAAABYjg");
	var mask_graphics_29 = new cjs.Graphics().p("EgGtAsSMAAAhYjINbAAMAAABYjg");
	var mask_graphics_30 = new cjs.Graphics().p("EgIuAsSMAAAhYjIReAAMAAABYjg");
	var mask_graphics_31 = new cjs.Graphics().p("EgKxAsSMAAAhYjIViAAMAAABYjg");
	var mask_graphics_32 = new cjs.Graphics().p("EgMyAsSMAAAhYjIZmAAMAAABYjg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:385,y:271.5}).wait(1).to({graphics:mask_graphics_2,x:385,y:271.5}).wait(1).to({graphics:mask_graphics_3,x:385,y:271.5}).wait(1).to({graphics:mask_graphics_4,x:385,y:271.5}).wait(1).to({graphics:mask_graphics_5,x:385,y:271.5}).wait(1).to({graphics:mask_graphics_6,x:385,y:271.5}).wait(1).to({graphics:mask_graphics_7,x:385,y:271.5}).wait(1).to({graphics:null,x:0,y:0}).wait(18).to({graphics:mask_graphics_26,x:385,y:271.5}).wait(1).to({graphics:mask_graphics_27,x:385,y:271.5}).wait(1).to({graphics:mask_graphics_28,x:385,y:271.5}).wait(1).to({graphics:mask_graphics_29,x:385,y:271.5}).wait(1).to({graphics:mask_graphics_30,x:385,y:271.5}).wait(1).to({graphics:mask_graphics_31,x:385,y:271.5}).wait(1).to({graphics:mask_graphics_32,x:385,y:271.5}).wait(1).to({graphics:null,x:0,y:0}).wait(19));

	// brillos
	this.instance_8 = new lib.brillo_1("synched",0);
	this.instance_8.setTransform(385,345.4,1,0.69,0,0,0,82,283.4);
	this.instance_8._off = true;

	this.instance_8.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({_off:false},0).to({_off:true},6).wait(19).to({_off:false},0).to({_off:true},6).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(436,332,637,479);
p.frameBounds = [rect, new cjs.Rectangle(436,332,637,480), new cjs.Rectangle(421,332,652,479), new cjs.Rectangle(436,332,637,479), new cjs.Rectangle(436,332,637,480), new cjs.Rectangle(421,332,652,479), new cjs.Rectangle(436,332,637,479), new cjs.Rectangle(375,270,750,542), new cjs.Rectangle(421,332,652,479), new cjs.Rectangle(436,332,637,479), new cjs.Rectangle(436,332,637,480), new cjs.Rectangle(421,332,652,479), new cjs.Rectangle(436,332,637,479), new cjs.Rectangle(436,332,637,480), new cjs.Rectangle(421,332,652,479), new cjs.Rectangle(436,332,637,479), new cjs.Rectangle(436,332,637,480), new cjs.Rectangle(421,332,652,479), new cjs.Rectangle(436,332,637,479), new cjs.Rectangle(436,332,637,480), new cjs.Rectangle(421,332,652,479), new cjs.Rectangle(436,332,637,479), new cjs.Rectangle(436,332,637,480), new cjs.Rectangle(421,332,652,479), new cjs.Rectangle(436,332,637,479), new cjs.Rectangle(436,332,637,480), new cjs.Rectangle(421,332,652,479), new cjs.Rectangle(436,332,637,479), new cjs.Rectangle(436,332,637,480), new cjs.Rectangle(421,332,652,479), new cjs.Rectangle(436,332,637,479), new cjs.Rectangle(436,332,637,480), new cjs.Rectangle(375,270,750,541), new cjs.Rectangle(436,332,637,479), new cjs.Rectangle(436,332,637,480), new cjs.Rectangle(421,332,652,479), new cjs.Rectangle(436,332,637,479), new cjs.Rectangle(436,332,637,480), new cjs.Rectangle(421,332,652,479), new cjs.Rectangle(436,332,637,479), new cjs.Rectangle(436,332,637,480), new cjs.Rectangle(421,332,652,479), new cjs.Rectangle(436,332,637,479), new cjs.Rectangle(436,332,637,480), new cjs.Rectangle(421,332,652,479), new cjs.Rectangle(436,332,637,479), new cjs.Rectangle(436,332,637,480), new cjs.Rectangle(421,332,652,479), new cjs.Rectangle(436,332,637,479), new cjs.Rectangle(436,332,637,480), new cjs.Rectangle(421,332,652,479), new cjs.Rectangle(436,332,637,479)];

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
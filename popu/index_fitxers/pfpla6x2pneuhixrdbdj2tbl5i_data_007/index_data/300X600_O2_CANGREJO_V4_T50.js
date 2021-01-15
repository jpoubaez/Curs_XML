(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.brazo_derecho = function() {
	this.initialize(img.brazo_derecho);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,73,45);


(lib.brazo_izquierdo = function() {
	this.initialize(img.brazo_izquierdo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,73,50);


(lib.bubble_grande_02 = function() {
	this.initialize(img.bubble_grande_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,131,142);


(lib.cuerpo = function() {
	this.initialize(img.cuerpo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,56);


(lib.dedo_derecho = function() {
	this.initialize(img.dedo_derecho);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,44,21);


(lib.dedo_izquierdo = function() {
	this.initialize(img.dedo_izquierdo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,39,26);


(lib.fondo_cielo_mar = function() {
	this.initialize(img.fondo_cielo_mar);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,648,1276);


(lib.olas = function() {
	this.initialize(img.olas);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,33);


(lib.pata_derecha_01 = function() {
	this.initialize(img.pata_derecha_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,52,15);


(lib.pata_derecha_02 = function() {
	this.initialize(img.pata_derecha_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,36,56);


(lib.pata_trasera_final = function() {
	this.initialize(img.pata_trasera_final);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,58,43);


(lib.pez_final = function() {
	this.initialize(img.pez_final);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,280,104);


(lib.pinza_derecha = function() {
	this.initialize(img.pinza_derecha);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,71,36);


(lib.pinza_izquierda = function() {
	this.initialize(img.pinza_izquierda);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,62,41);


(lib.sombra_cangrejo = function() {
	this.initialize(img.sombra_cangrejo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,154,39);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.texto_06 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhRCoQgjgYgTgrQgUgsAAg5QAAg3AUgsQATgrAjgYQAkgYAtAAQAuAAAjAYQAkAYATArQAUAsAAA3QAAA4gUAsQgUArgjAYQgkAYgtAAQguAAgjgXgAgohUQgPAbAAA5QAAA5APAcQAPAbAZAAQAaAAAPgbQAPgcAAg5QAAg4gPgcQgPgbgaAAQgZAAgPAbg");
	this.shape.setTransform(49.9,40.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhEC6QgXgEgNgEQgKgEgFgDQgFgFgBgEIgBgKIAAg5QASAHAbAFQAbAEAVAAQAgAAAOgMQAQgMAAgYQAAgXgQgMQgPgLgjABQgRAAgXABQgWACgZAFIAAi+QAAgMAGgFQAGgGANAAIDKAAIAABLIiRAAIAABEQAagEASgBQA7AAAhAdQAhAbAAA4QAAA8gmAhQgnAghJAAQgXAAgWgCg");
	this.shape_1.setTransform(17.9,40.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.texto_06, new cjs.Rectangle(0,0,69.8,79.6), null);


(lib.texto_03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgdBbQgMgBgIgDQgFgBgCgEQgDgCAAgEIAAgKQANAEAOACQANACAMAAQAWAAAMgKQALgJAAgPQAAgJgFgHQgEgFgHgEIgRgGIgUgIQgVgGgNgLQgLgMAAgSQAAgWARgMQARgMAeAAIAVABQALACAGACQAGABACADQABACAAAFIAAAJQgLgDgNgCQgNgCgLABQgTgBgLAIQgKAGAAANQAAAIAEAGQAEAGAHAEIASAHIATAHIAXAJQAJAFAHAJQAHAKAAAQQAAAagSANQgTAOgfAAIgWgCg");
	this.shape.setTransform(203.4,78.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag6BVQgOgHgIgNQgIgNAAgQQAAgdAYgOQAZgPAwAAIAZABQAAgagMgMQgNgNgcAAQgNAAgQACIgbAGIAAgKQgBgFACgDQACgCAFgBQAIgDANgCQANgBAOgBQAlAAAUASQAVARAAAfIAABIQAAAOADAGQAEAGAKAAIAHgBIAGgBIAAAKQAAAEgCADQgCACgFABIgKABQgSAAgIgJQgIgKgBgQQgJARgRAJQgPALgUAAQgSAAgOgIgAgtAEQgTAJAAAVQAAAMAGAIQAFAKAJAFQALAEAMAAQAQABAMgIQANgHAHgOQAHgNAAgQIAAgUIgVAAQgmAAgUAIg");
	this.shape_1.setTransform(186.2,78.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgdBbQgMgBgIgDQgFgBgCgEQgDgCAAgEIAAgKQANAEAOACQANACAMAAQAWAAAMgKQALgJAAgPQAAgJgFgHQgEgFgHgEIgRgGIgUgIQgVgGgNgLQgLgMAAgSQAAgWARgMQARgMAeAAIAVABQALACAGACQAGABACADQABACAAAFIAAAJQgLgDgNgCQgNgCgLABQgTgBgLAIQgKAGAAANQAAAIAEAGQAEAGAHAEIASAHIATAHIAXAJQAJAFAHAJQAHAKAAAQQAAAagSANQgTAOgfAAIgWgCg");
	this.shape_2.setTransform(167.9,78.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgkBSQgVgLgMgVQgMgVAAgdQAAgbALgVQALgVASgLQATgLAWAAQAXAAATALQASALALAVQALAVAAAbIgBAEIiJAAQABAiASASQATARAfAAQANAAAOgDIAbgHIAAALIgBAGQgCACgHADQgIADgNACQgNACgNAAQgZAAgVgKgAgahCQgMAHgIANQgIANgCAUIBxAAQgBgTgIgNQgIgOgMgHQgNgHgPAAQgOAAgMAHg");
	this.shape_3.setTransform(150,78.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AguBbIAAinQAAgFADgDQACgDAGAAIAMAAIAAAnQAHgUAQgLQAPgLAUAAQAHAAADADQACACAAAFIAAAMIgKAAQgfAAgOATQgPASAAAiIAABYg");
	this.shape_4.setTransform(134.9,77.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhSCEIAAj5QAAgFADgDQACgDAGAAIAMAAIAAAjQAIgRARgLQAQgKAVAAQAXAAASAMQASALALAVQAKAVAAAcQAAAbgKAUQgLAVgSAMQgSALgXAAQgVAAgQgKQgQgKgIgRIAAB0gAgfhnQgNAJgHAQQgHARAAAXQAAAWAHAQQAHARANAIQANAIASAAQASAAANgIQANgJAHgQQAIgQAAgWQAAgXgIgRQgHgQgNgJQgNgIgSAAQgSAAgNAIg");
	this.shape_5.setTransform(116.8,82);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AguBbIAAinQAAgFACgDQADgDAGAAIAMAAIAAAnQAHgUAQgLQAPgLAUAAQAHAAADADQACACAAAFIAAAMIgLAAQgeAAgOATQgPASAAAiIAABYg");
	this.shape_6.setTransform(100.3,77.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgsBQQgTgMgKgUQgKgVAAgbQAAgaAKgVQAKgVATgMQATgMAZAAQAaAAATAMQASAMALAVQAKAVAAAaQAAAbgLAVQgKAUgTAMQgTANgZAAQgZAAgTgNgAgfhAQgNAKgHAQQgHAQAAAWQAAAWAHARQAHAQANAJQANAJASgBQASABANgJQAOgJAHgQQAHgRAAgWQAAgWgHgQQgHgQgOgKQgNgIgSAAQgSAAgNAIg");
	this.shape_7.setTransform(82.2,78.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgdBbQgMgBgIgDQgFgBgCgEQgDgCAAgEIAAgKQANAEAOACQANACAMAAQAWAAAMgKQALgJAAgPQAAgJgFgHQgEgFgHgEIgRgGIgUgIQgVgGgNgLQgLgMAAgSQAAgWARgMQARgMAeAAIAVABIARAEQAGABACADQABACAAAFIAAAJQgLgDgNgCQgNgCgLABQgTgBgLAIQgKAGAAANQAAAIAEAGQAEAGAHAEIASAHIATAHIAXAJQAJAFAHAJQAHAKAAAQQAAAagSANQgTAOgfAAIgWgCg");
	this.shape_8.setTransform(64.3,78.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AA9BbQgFAAgDgCQgCgEAAgFIAAhgQAAgYgLgPQgMgPgYAAQgZABgOARQgOATAAAfIAABdIgYAAIAAinQAAgEADgDQACgEAGAAIAMAAIAAAhQAIgRAQgKQAQgJATAAQAUAAAPAJQAPAIAHARQAIAPAAAVIAABvg");
	this.shape_9.setTransform(36.7,77.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgKCBIAAinQgBgEADgDQADgEAFAAIAMAAIAACygAgLhhQgGgFAAgIQAAgIAGgFQAFgFAGAAQAHAAAGAFQAFAFAAAIQAAAIgFAFQgGAFgHAAQgGAAgFgFg");
	this.shape_10.setTransform(21.8,74.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgdBbQgMgBgIgDQgFgBgCgEQgDgCAAgEIAAgKQANAEAOACQANACAMAAQAWAAAMgKQALgJAAgPQAAgJgFgHQgEgFgHgEIgRgGIgUgIQgVgGgNgLQgLgMAAgSQAAgWARgMQARgMAeAAIAVABQALACAGACQAGABACADQABACAAAFIAAAJQgLgDgNgCQgNgCgLABQgTgBgLAIQgKAGAAANQAAAIAEAGQAEAGAHAEIASAHIATAHIAXAJQAJAFAHAJQAHAKAAAQQAAAagSANQgTAOgfAAIgWgCg");
	this.shape_11.setTransform(9.7,78.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgTB4QgKgMAAgTIAAjSQAAgFADgCQADgDAFAAIANAAIAADaQAAAOAFAGQAEAGANAAQAHAAAGgCIAAAKQAAAEgCACQgCADgEABIgLABQgUAAgKgMg");
	this.shape_12.setTransform(195.6,28.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag6BVQgOgHgIgNQgIgNAAgQQAAgdAZgOQAYgPAwAAIAaABQAAgagNgMQgNgNgcAAQgOAAgOADIgcAFIAAgKQAAgFABgDQACgCAFgBQAIgDANgCQANgBAOgBQAlAAAUASQAUARABAfIAABIQAAAOAEAGQADAGAJAAIAHgBIAHgBIAAAKQAAAEgCADQgCACgFABIgKABQgRAAgJgJQgIgKgBgQQgJARgRAKQgPAJgUABQgSAAgOgIgAgtAEQgTAJAAAVQAAAMAFAIQAGAKAJAEQALAFAMABQAQAAAMgIQANgHAHgOQAHgNABgQIAAgUIgWAAQgmgBgUAJg");
	this.shape_13.setTransform(180.1,32.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AA9BbQgFAAgDgCQgCgEAAgFIAAhgQAAgYgLgPQgMgPgYAAQgZAAgOASQgOATAAAfIAABdIgYAAIAAinQAAgEADgDQACgDAGgBIAMAAIAAAhQAIgRAQgKQAQgJATAAQAUAAAPAJQAPAJAHAQQAIAPAAAVIAABvg");
	this.shape_14.setTransform(159,32.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgLCBIAAinQAAgEADgDQADgDAFgBIAMAAIAACygAgMhhQgFgFAAgIQAAgHAFgGQAGgFAGAAQAIAAAEAFQAGAGAAAHQAAAIgGAFQgEAFgIAAQgGAAgGgFg");
	this.shape_15.setTransform(144.1,28.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgaCFIAAifIgnAAIAAgJQAAgFACgDQADgCAFAAIAdAAIAAgeQAAgbAPgPQANgPAdAAQAQAAALAEQAGABABACQABABAAAEIAAALIgQgCIgQgCQgRAAgIAHQgIAHgBAIQgCAIAAALIAAAbIAzAAIAAATIgzAAIAACfg");
	this.shape_16.setTransform(133.1,28);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgsBQQgTgMgKgUQgKgWAAgaQAAgaAKgVQAKgVATgMQATgMAZAAQAaAAATAMQASAMALAVQAKAVAAAaQAAAagLAWQgKAUgTAMQgTANgZAAQgZAAgTgNgAgfhAQgNAKgHAQQgHAQAAAWQAAAXAHAQQAHAQANAJQANAJASgBQASABANgJQAOgJAHgQQAHgRAAgWQAAgWgHgQQgHgQgOgKQgNgIgSAAQgSAAgNAIg");
	this.shape_17.setTransform(106.7,32.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgKCBIAAinQAAgEACgDQADgDAFgBIAMAAIAACygAgLhhQgGgFAAgIQAAgHAGgGQAFgFAGAAQAHAAAGAFQAFAGAAAHQAAAIgFAFQgGAFgHAAQgGAAgFgFg");
	this.shape_18.setTransform(92.1,28.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgbBQQgUgLgLgVQgLgVAAgbQAAgaAKgWQALgVAUgLQAVgMAbAAIAWACQALACAHACIAGADIADADIAAAFIAAAKQgbgHgSAAQggAAgSASQgTAUAAAhQAAAXAIAQQAJARAPAJQAPAJAUgBQALAAAOgCQANgCAKgEIAAALIAAAEIgCAEIgHADIgTAEQgMADgLAAQgaAAgUgNg");
	this.shape_19.setTransform(79.3,32.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgkBSQgVgLgMgVQgMgVAAgdQAAgbALgVQALgVASgLQATgLAWAAQAXAAATALQASALALAVQALAVAAAbIgBAEIiJAAQABAiASASQATARAfAAQANAAAOgDIAbgHIAAALIgBAGQgCACgHADQgIADgNACQgNACgNAAQgZAAgVgKgAgahCQgMAHgIANQgIANgCAUIBxAAQgBgTgIgNQgIgOgMgHQgNgHgPAAQgOAAgMAHg");
	this.shape_20.setTransform(60.3,32.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AguBbIAAinQAAgFACgDQADgDAFAAIANAAIAAAnQAHgUAQgLQAPgLAUAAQAGAAADADQADACAAAFIAAAMIgLAAQgeAAgOATQgOASAAAiIAABYg");
	this.shape_21.setTransform(45.2,32.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhXB/IAAjyQAAgFADgDQADgDAFAAIBJAAQAoAAAZASQAaATAAAqQAAAqgaASQgbAUgqAAIg3AAIAABegAg+ANIA6AAQAgAAARgOQARgPAAgeQAAgfgSgPQgSgOggAAIg4AAg");
	this.shape_22.setTransform(26.6,28.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.texto_03, new cjs.Rectangle(0,0,213.4,101.6), null);


(lib.texto_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgdBbQgMgBgIgDQgFgBgCgEQgDgCAAgEIAAgKQANAEAOACQANACAMAAQAWAAAMgKQALgJAAgPQAAgJgFgHQgEgFgHgEIgRgGIgUgIQgVgGgNgLQgLgMAAgSQAAgWARgMQARgMAeAAIAVABIARAEQAGABACADQABACAAAFIAAAJQgLgDgNgCQgNgCgLABQgTgBgLAIQgKAGAAANQAAAIAEAGQAEAGAHAEIASAHIATAHIAXAJQAJAFAHAJQAHAKAAAQQAAAagSANQgTAOgfAAIgWgCg");
	this.shape.setTransform(206.9,78.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgkBSQgVgLgMgVQgMgVAAgdQAAgbALgVQALgVASgLQATgLAWAAQAXAAATALQASALALAVQALAVAAAbIgBAEIiJAAQABAiASASQATARAfAAQANAAAOgDIAbgHIAAALIgBAGQgCACgHADQgIADgNACQgNACgNAAQgZAAgVgKgAgahCQgMAHgIANQgIANgCAUIBxAAQgBgTgIgNQgIgOgMgHQgNgHgPAAQgOAAgMAHg");
	this.shape_1.setTransform(189.5,78.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AB3BbQgFAAgCgDQgDgDAAgFIAAhgQAAgYgKgPQgLgPgXAAQgaAAgOASQgNATAAAgIAABcIgXAAIAAhrQAAgYgKgPQgKgPgYAAQgaAAgNASQgNATAAAgIAABcIgYAAIAAinQAAgFADgDQACgDAGAAIAMAAIAAAhQAIgRAPgKQAPgJATAAQAXAAAPALQAOALAHAUQAIgUAQgLQAQgLAVAAQAUAAAOAJQAPAJAHAQQAHAPAAAVIAABvg");
	this.shape_2.setTransform(163.8,77.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag6BVQgOgHgIgNQgIgNAAgQQAAgdAYgOQAZgPAwAAIAZABQAAgagMgMQgNgNgcAAQgOAAgPACIgcAGIAAgKQABgFABgDQACgCAFgBQAIgDANgCQANgBAOgBQAlAAAUASQAVARgBAfIAABIQAAAOAEAGQAEAGAKAAIAHgBIAGgBIAAAKQAAAEgCADQgBACgGABIgKABQgSAAgIgJQgIgKgBgQQgJARgQAJQgQALgUAAQgSAAgOgIgAgtAEQgTAJAAAVQAAAMAGAIQAFAKAKAFQAJAEANAAQAQABAMgIQANgHAHgOQAIgNgBgQIAAgUIgVAAQgmAAgUAIg");
	this.shape_3.setTransform(129.6,78.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgdBbQgMgBgIgDQgFgBgCgEQgDgCAAgEIAAgKQANAEAOACQANACAMAAQAWAAAMgKQALgJAAgPQAAgJgFgHQgEgFgHgEIgRgGIgUgIQgVgGgNgLQgLgMAAgSQAAgWARgMQARgMAeAAIAVABIARAEQAGABACADQABACAAAFIAAAJQgLgDgNgCQgNgCgLABQgTgBgLAIQgKAGAAANQAAAIAEAGQAEAGAHAEIASAHIATAHIAXAJQAJAFAHAJQAHAKAAAQQAAAagSANQgTAOgfAAIgWgCg");
	this.shape_4.setTransform(102.9,78.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgkBSQgVgLgMgVQgMgVAAgdQAAgbALgVQALgVASgLQATgLAWAAQAXAAATALQASALALAVQALAVAAAbIgBAEIiJAAQABAiASASQATARAfAAQANAAAOgDIAbgHIAAALIgBAGQgCACgHADQgIADgNACQgNACgNAAQgZAAgVgKgAgahCQgMAHgIANQgIANgCAUIBxAAQgBgTgIgNQgIgOgMgHQgNgHgPAAQgOAAgMAHg");
	this.shape_5.setTransform(85.5,78.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AB3BbQgFAAgCgDQgDgDAAgFIAAhgQAAgYgKgPQgLgPgXAAQgaAAgOASQgNATAAAgIAABcIgXAAIAAhrQAAgYgKgPQgKgPgYAAQgaAAgNASQgNATAAAgIAABcIgYAAIAAinQAAgFADgDQACgDAGAAIAMAAIAAAhQAIgRAPgKQAPgJATAAQAXAAAPALQAOALAHAUQAIgUAQgLQAQgLAVAAQAUAAAOAJQAPAJAHAQQAHAPAAAVIAABvg");
	this.shape_6.setTransform(59.7,77.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgsBQQgTgMgKgUQgKgWAAgaQAAgaAKgVQAKgVATgMQATgMAZAAQAaAAATAMQASAMALAVQAKAVAAAaQAAAagLAWQgKAUgTAMQgTANgZAAQgZAAgTgNgAgfhAQgNAKgHAQQgHAQAAAWQAAAXAHAQQAHAQANAJQANAJASgBQASABANgJQAOgJAHgQQAHgRAAgWQAAgWgHgQQgHgQgOgKQgNgIgSAAQgSAAgNAIg");
	this.shape_7.setTransform(245.9,32.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgKCBIAAinQgBgEADgDQADgDAFgBIAMAAIAACygAgLhhQgGgFAAgIQAAgHAGgGQAFgFAGAAQAHAAAFAFQAGAGAAAHQAAAIgGAFQgFAFgHAAQgGAAgFgFg");
	this.shape_8.setTransform(231.8,28.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgbBQQgUgLgLgVQgLgVAAgbQAAgaAKgWQALgVAUgLQAVgMAbAAIAWACQALACAHACIAGADIADADIAAAFIAAAKQgbgHgSAAQggAAgSASQgTAUAAAhQAAAXAIAQQAJARAPAJQAPAJAUgBQALAAAOgCQANgCAKgEIAAALIAAAEQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABIgHADIgTAEQgMADgLAAQgaAAgUgNg");
	this.shape_9.setTransform(219.5,32.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgkBSQgVgLgMgVQgMgVAAgdQAAgbALgVQALgVASgLQATgLAWAAQAXAAATALQASALALAVQALAVAAAbIgBAEIiJAAQABAiASASQATARAfAAQANAAAOgDIAbgHIAAALIgBAGQgCACgHADQgIADgNACQgNACgNAAQgZAAgVgKgAgahCQgMAHgIANQgIANgCAUIBxAAQgBgTgIgNQgIgOgMgHQgNgHgPAAQgOAAgMAHg");
	this.shape_10.setTransform(201,32.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgvBbIAAinQAAgFAEgDQACgDAGAAIAMAAIAAAnQAHgUAQgLQAPgLAUAAQAGAAAEADQADACAAAFIAAAMIgLAAQgfAAgOATQgPASABAiIAABYg");
	this.shape_11.setTransform(186.4,32.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhSCEIAAj5QAAgFADgDQACgDAGAAIAMAAIAAAjQAIgRARgLQAQgKAVAAQAXAAASAMQASALALAVQAKAVAAAcQAAAbgKAUQgLAVgSAMQgSALgXAAQgVAAgQgKQgQgKgIgRIAAB0gAgfhnQgNAJgHAQQgHARAAAXQAAAWAHAQQAHARANAIQANAIASAAQASAAANgIQANgJAHgQQAIgQAAgWQAAgXgIgRQgHgQgNgJQgNgIgSAAQgSAAgNAIg");
	this.shape_12.setTransform(168.9,36.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgsBQQgTgMgKgUQgKgWAAgaQAAgaAKgVQAKgVATgMQATgMAZAAQAaAAATAMQASAMALAVQAKAVAAAaQAAAagLAWQgKAUgTAMQgTANgZAAQgZAAgTgNgAgfhAQgNAKgHAQQgHAQAAAWQAAAXAHAQQAHAQANAJQANAJASgBQASABANgJQAOgJAHgQQAHgRAAgWQAAgWgHgQQgHgQgOgKQgNgIgSAAQgSAAgNAIg");
	this.shape_13.setTransform(138.8,32.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AB3BbQgFAAgCgDQgDgDAAgFIAAhgQAAgYgKgPQgLgPgXAAQgaAAgOASQgNATAAAgIAABcIgXAAIAAhrQAAgYgKgPQgKgPgYAAQgaAAgNASQgNATAAAgIAABcIgYAAIAAinQAAgFADgDQACgDAGAAIAMAAIAAAhQAIgRAPgKQAPgJATAAQAXAAAPALQAOALAHAUQAIgUAQgLQAQgLAVAAQAUAAAOAJQAPAJAHAQQAHAPAAAVIAABvg");
	this.shape_14.setTransform(112.9,32.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgdBbQgMgBgIgDQgFgCgCgCQgDgDAAgEIAAgKQANAEAOACQANACAMAAQAWAAAMgJQALgKAAgPQAAgJgFgHQgEgFgHgEIgRgGIgUgHQgVgHgNgLQgLgMAAgSQAAgWARgMQARgMAeAAIAVABQALACAGACQAGABACADQABACAAAFIAAAJQgLgDgNgCQgNgCgLAAQgTAAgLAIQgKAGAAAMQAAAJAEAGQAEAGAHAEIASAHIATAHIAXAJQAJAFAHAJQAHAKAAAQQAAAagSANQgTAOgfAAIgWgCg");
	this.shape_15.setTransform(89.3,32.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgLCBIAAinQABgEACgDQADgDAFgBIAMAAIAACygAgLhhQgGgFAAgIQAAgHAGgGQAFgFAGAAQAHAAAGAFQAFAGAAAHQAAAIgFAFQgGAFgHAAQgGAAgFgFg");
	this.shape_16.setTransform(77.7,28.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AB3BbQgFAAgCgDQgDgDAAgFIAAhgQAAgYgKgPQgLgPgXAAQgaAAgOASQgNATAAAgIAABcIgXAAIAAhrQAAgYgKgPQgKgPgYAAQgaAAgNASQgNATAAAgIAABcIgYAAIAAinQAAgFADgDQACgDAGAAIAMAAIAAAhQAIgRAPgKQAPgJATAAQAXAAAPALQAOALAHAUQAIgUAQgLQAQgLAVAAQAUAAAOAJQAPAJAHAQQAHAPAAAVIAABvg");
	this.shape_17.setTransform(57.6,32.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgTB4QgKgMAAgTIAAjSQAAgFADgCQADgDAFAAIANAAIAADaQAAAOAFAGQAEAGANAAQAHAAAGgCIAAAKQAAAEgCACQgCADgEABIgLABQgVAAgJgMg");
	this.shape_18.setTransform(29.3,28.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhOB/IAAjyQAAgFADgDQADgDAFAAICNAAIAAAUIh/AAIAABfIBzAAIAAATIhzAAIAABjICEAAIAAAUg");
	this.shape_19.setTransform(13.6,28.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.texto_02, new cjs.Rectangle(0,0,257.9,101.6), null);


(lib.sombra_cangrejo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.sombra_cangrejo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sombra_cangrejo_1, new cjs.Rectangle(0,0,154,39), null);


(lib.signo_mas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUBGIAAgyIgyAAIAAgZQAAgGADgEQAEgDAGAAIAlAAIAAgzIAqAAIAAAzIAxAAIAAAmIgxAAIAAAyg");
	this.shape.setTransform(11.7,26.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.signo_mas, new cjs.Rectangle(0,0,23.2,46), null);


(lib.raya = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,2,1).p("ArzAAIXnAA");
	this.shape.setTransform(75.6,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.raya, new cjs.Rectangle(-1,-1,153.2,2), null);


(lib.precio_final = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgMA6QgHgHAAgNIAAhgQAAAAABgBQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAQABAAABAAIARAAIAABmQgBAEADADQACACAFAAIADAAIACgBIAAALIgBAEQAAABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQgEACgFAAQgMAAgGgHg");
	this.shape.setTransform(87.6,14.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAMAfQgFAHgHAEQgHADgJAAQgIAAgHgDQgHgEgEgGQgEgHAAgIQAAgNAMgGQAMgHAXAAIAJAAQAAgGgCgEQgCgDgEgCQgEgBgIAAIgOABIgOACIAAgMIABgEIAEgDIAMgCIAPgBQAVAAAKAJQAJAIAAAPIAAAeQAAAFACACQABACAEAAIADAAIADgBIAAAMIgBADQAAABgBAAQAAABAAAAQgBAAAAAAQgBABgBAAQgEABgFAAQgQAAgFgOgAgPAHQgHADAAAHQAAAFAEADQADAEAHAAQAFAAAEgDQAEgCACgEQADgEAAgGIAAgGIgFAAQgNAAgHADg");
	this.shape_1.setTransform(80.1,16.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAWAsQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAgBgBAAQAAgBAAAAQAAgBAAAAIAAgvQAAgIgEgFQgDgEgIAAQgHAAgEAFQgFAGAAAKIAAAwIgYAAIAAhQQAAgFAFAAIAQAAIABAOQAFgIAHgEQAHgFAJABQAJAAAHADQAGAFAEAHQAEAHAAAKIAAA3g");
	this.shape_2.setTransform(70.3,16.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgLBBIAAhQQAAgFAGAAIARAAIAABVgAgGgmIgFgFQgCgDAAgFQAAgEACgCQACgEADgCQADgCADABIAHABQADACACAEQACACAAAEQAAAFgCADIgFAFQgDACgEAAQgDAAgDgCg");
	this.shape_3.setTransform(63.1,14.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgRBBIAAhFIgSAAIAAgLQAAgGAHAAIALAAIAAgKQAAgPAJgJQAIgJARAAQAIAAAGACIAEACIABAEIAAAMIgIgBIgGgBQgQAAABAPIAAAKIAWAAIAAARIgWAAIAABFg");
	this.shape_4.setTransform(57.8,14.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgXAnQgKgFgFgLQgGgKAAgNQAAgMAGgLQAFgKAKgGQALgFAMAAQAOAAAKAFQAKAGAGAKQAFALAAAMQAAANgFAKQgGALgKAFQgLAGgNABQgMgBgLgGgAgOgTQgFAIAAALQAAAMAFAIQAFAGAJABQAKgBAFgGQAFgIAAgMQAAgLgFgIQgFgGgKAAQgJAAgFAGg");
	this.shape_5.setTransform(46,16.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgLBBIAAhQQAAgFAGAAIARAAIAABVgAgGgmIgFgFQgCgDAAgFQAAgEACgCQACgEADgCQADgCADABIAHABQADACACAEQACACAAAEQAAAFgCADIgFAFQgDACgEAAQgDAAgDgCg");
	this.shape_6.setTransform(39,14.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgNAoQgLgFgGgLQgGgKAAgOQAAgNAGgKQAGgKALgGQAKgGAOABIALAAIAJACIAEACIACACIAAADIAAANIgKgCIgLgBQgOgBgGAHQgHAGAAANQAAANAHAHQAGAHAOAAIALgCIAKgCIAAANIAAADIgCABIgEACIgJADIgLABQgNAAgLgGg");
	this.shape_7.setTransform(32.8,16.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgSAoQgMgFgFgKQgHgLAAgOQAAgMAGgKQAFgLAKgFQAKgGAMAAQAMAAAJAGQAKAFAFAKQAGAKAAANIgBAGIg8AAQABALAHAGQAHAFALAAQAMAAAQgGIAAAMQAAABAAAAQAAABAAAAQgBABAAAAQAAABAAAAIgFADQgFACgGABIgPABQgMAAgKgFgAgMgWQgFAEgBAKIAmAAQgBgKgGgEQgFgFgHAAQgIAAgFAFg");
	this.shape_8.setTransform(24.2,16.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgbAsIAAhQQAAgFAGAAIAQAAIABASQADgKAHgFQAHgGAJABQAGgBAAAGIAAARIgIAAQgMAAgGAGQgFAFAAAMIAAAqg");
	this.shape_9.setTransform(16.8,16.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AguA+IAAhzQAAgDADgDQACgCAEAAIAlAAQANAAALAFQAKADAHAKQAGAJAAAPQAAANgGAJQgHAKgLAEQgLAFgNgBIgTAAIAAApgAgUACIASAAQALAAAGgEQAHgGAAgLQAAgLgHgGQgGgGgLAAIgSAAg");
	this.shape_10.setTransform(8.1,14.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.precio_final, new cjs.Rectangle(0,0,91.4,29.2), null);


(lib.pez_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.pez_final();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pez_base, new cjs.Rectangle(0,0,280,104), null);


(lib.pata_trasera_izquierda_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.pata_derecha_02();
	this.instance.parent = this;
	this.instance.setTransform(28.9,0,0.81,0.81,0,-8.2,171.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pata_trasera_izquierda_2, new cjs.Rectangle(0,0,35.4,49.1), null);


(lib.pata_trasera_izquierda_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.pata_derecha_01();
	this.instance.parent = this;
	this.instance.setTransform(39.7,0,0.81,0.81,0,-19.7,160.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pata_trasera_izquierda_1, new cjs.Rectangle(0,0,43.8,25.7), null);


(lib.pata_trasera_izquierda = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.pata_trasera_final, null, new cjs.Matrix2D(-0.943,0.328,0.328,0.942,14.2,-13.1)).s().p("Ah6B7QgWgOgdgMIgDgJIgBgBIANgrIgDgCIAEgCQATgMAPgQIADAAQBMgUAshGIgBAAICVg0IAkBmIibBCQhHAfg8A+QgHgDgHgFg");
	this.shape.setTransform(40.5,13.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.pata_trasera_izquierda, new cjs.Rectangle(22.7,0,35.6,26.3), null);


(lib.pata_trasera_derecha_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.pata_derecha_02();
	this.instance.parent = this;
	this.instance.setTransform(6.5,0,0.81,0.81,8.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pata_trasera_derecha_2, new cjs.Rectangle(0,0,35.4,49.1), null);


(lib.pata_trasera_derecha_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.pata_derecha_01();
	this.instance.parent = this;
	this.instance.setTransform(4.1,0,0.81,0.81,19.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pata_trasera_derecha_1, new cjs.Rectangle(0,0,43.8,25.7), null);


(lib.pata_media_izquierda_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.pata_derecha_02();
	this.instance.parent = this;
	this.instance.setTransform(32.4,0,0.9,0.9,0,-2.3,177.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pata_media_izquierda_2, new cjs.Rectangle(0,0,34.4,51.7), null);


(lib.pata_media_izquierda_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.pata_derecha_01();
	this.instance.parent = this;
	this.instance.setTransform(46.4,0,0.9,0.9,0,-7.3,172.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pata_media_izquierda_1, new cjs.Rectangle(0,0,48.1,19.3), null);


(lib.pata_media_derecha_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.pata_derecha_02();
	this.instance.parent = this;
	this.instance.setTransform(2,0,0.9,0.9,2.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pata_media_derecha_2, new cjs.Rectangle(0,0,34.4,51.7), null);


(lib.pata_media_derecha_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.pata_derecha_01();
	this.instance.parent = this;
	this.instance.setTransform(1.7,0,0.9,0.9,7.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pata_media_derecha_1, new cjs.Rectangle(0,0,48.1,19.3), null);


(lib.pata_frontal_izquierda_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.pata_derecha_02();
	this.instance.parent = this;
	this.instance.setTransform(46.2,7,1,1,0,11.2,-168.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pata_frontal_izquierda_2, new cjs.Rectangle(0,0,46.2,62), null);


(lib.pata_frontal_izquierda_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.pata_derecha_01();
	this.instance.parent = this;
	this.instance.setTransform(52,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pata_frontal_izquierda_1, new cjs.Rectangle(0,0,52,15), null);


(lib.pata_frontal_derecha_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.pata_derecha_02();
	this.instance.parent = this;
	this.instance.setTransform(0,7,1,1,-11.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pata_frontal_derecha_2, new cjs.Rectangle(0,0,46.2,62), null);


(lib.pata_final_izquierda_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.pata_trasera_final, null, new cjs.Matrix2D(-0.943,0.328,0.328,0.942,36.4,-39.2)).s().p("AgWCoIgJgCQgPgQgRgMIgjhiQAJgqAggdQABgGADgEQARgWALgbIAGgpIACgEQAQgaALgaQATAEAQALIADAJQATAHAQAJIgBAHQgJATABAcIgBAUIgGAJIAAAUIgGAJQgIAvgbAlQgDAFgGAEIAAASQAjA3AvAYIhfAhg");
	this.shape.setTransform(9.9,18.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.pata_final_izquierda_2, new cjs.Rectangle(0,0,19.8,37.6), null);


(lib.pata_drontal_derecha_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.pata_derecha_01();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pata_drontal_derecha_1, new cjs.Rectangle(0,0,52,15), null);


(lib.olasbase = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_2
	this.instance = new lib.olas();
	this.instance.parent = this;
	this.instance.setTransform(212.6,8.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(109));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,607,91);


(lib.LUZ_MAR_BRILLA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(62,152,255,0.91)","rgba(8,75,249,0)"],[0,1],-17.5,-240.2,0,-18.2,-96.5,185).s().p("EgvLAchQpQs3BByxQA/yzKGpUQKFpUf0gaQfygaPDHaQPDHblSSZQlRSXh3PKUgB4APJgpjAAbIinABUgnPAAAgI8gMdg");
	this.shape.setTransform(355.4,262.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.LUZ_MAR_BRILLA, new cjs.Rectangle(0,0,710.8,524.5), null);


(lib.Logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// O2-Logo (1).svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACwE3IAAglIAYgWIAgggQAogsAAgZQAAgPgLgIQgKgHgPAAQgYAAgbARIgDglQAPgHAQgEQARgEARAAQAgAAATAQQATARAAAgQAAAegdAkQgKAPgRAQIgcAcIBbAAIAAAjgAirDAQgugUgjglQgigjgSgwQgTgwAAg0QAAg5ATgwQARgwAjgjQAigjAugTQAwgUA4AAQA5AAAuAUQAvATAiAjQAhAjASAwQASAwAAA5QAAA0gSAwQgSAwgiAjQgjAlguAUQguAVg4AAQg3AAgwgVgAiGjcQgcAPgVAcQgUAagLAhQgLAiAAAkQAAAjAJAfQAKAiATAaQAUAcAdAQQAfAQAnAAQAnAAAegQQAdgQAUgcQASgaAKgiQAKgfAAgjQAAgkgLgiQgLghgTgaQgVgcgcgPQgegPgkAAQgkAAgeAPg");
	this.shape.setTransform(32.4,31.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Logo, new cjs.Rectangle(0,0,64.8,62.3), null);


(lib.llamadas_ilimitadas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQAtIgLgDIgFgDIgBgDIAAgNIAPAEIAPABQAHAAAEgDQAFgDAAgEQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAQgBgCgDgBIgHgCIgIgDQgNgCgHgGQgHgGAAgLQAAgNAKgGQAKgHASABIAMABIAKACIAEACQABAAAAABQAAAAAAABQAAAAAAABQAAABAAABIAAALIgOgDIgNgBQgPAAAAAHQAAAEAEACQADACAGABIAKADIANAEQAFADADAEQAEAFAAAJQAAAOgKAHQgLAIgSAAIgNgBg");
	this.shape.setTransform(153.4,16.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAMAfQgFAHgHAEQgHADgJAAQgIAAgHgDQgHgEgEgGQgEgHAAgIQAAgNAMgGQAMgHAXAAIAJAAQAAgGgCgEQgCgDgEgCQgEgBgIAAIgOABIgOACIAAgMIABgEIAEgDIAMgCIAPgBQAVAAAKAJQAJAIAAAPIAAAeQAAAFACACQABACAEAAIADAAIADgBIAAAMIgBADQAAABgBAAQAAABAAAAQgBAAAAAAQgBABgBAAQgEABgFAAQgQAAgFgOgAgPAHQgHADAAAHQAAAFAEADQADAEAHAAQAFAAAEgDQAEgCACgEQADgEAAgGIAAgGIgFAAQgNAAgHADg");
	this.shape_1.setTransform(145,16.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgYA7QgKgFgEgKQgGgLAAgOQAAgNAGgKQAEgKAKgFQAJgGALAAQAHAAAGAEQAIADADAIIAAg2IATAAQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAABIAAB5IgVAAIgBgQQgFAJgHAEQgHAFgIAAQgLAAgJgGgAgNAAQgGAHAAAMQAAANAGAHQAEAHAJAAQAKAAAGgHQAEgHAAgNQAAgMgEgHQgGgGgKAAQgJAAgEAGg");
	this.shape_2.setTransform(134.7,14.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAMAfQgFAHgHAEQgHADgJAAQgIAAgHgDQgHgEgEgGQgEgHAAgIQAAgNAMgGQAMgHAXAAIAJAAQAAgGgCgEQgCgDgEgCQgEgBgIAAIgOABIgOACIAAgMIABgEIAEgDIAMgCIAPgBQAVAAAKAJQAJAIAAAPIAAAeQAAAFACACQABACAEAAIADAAIADgBIAAAMIgBADQAAABgBAAQAAABAAAAQgBAAAAAAQgBABgBAAQgEABgFAAQgQAAgFgOgAgPAHQgHADAAAHQAAAFAEADQADAEAHAAQAFAAAEgDQAEgCACgEQADgEAAgGIAAgGIgFAAQgNAAgHADg");
	this.shape_3.setTransform(125.3,16.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgCA5QgGgDgFgHQgDgGAAgJIAAgrIgSAAIAAgLQAAgGAGAAIAMAAIAAgZQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABgBAAAAQABAAABAAQAAAAABAAIARAAIAAAfIAXAAIAAARIgXAAIAAAnQAAAHADADQADAEAHAAQAGAAAJgCIAAALIgBAEIgFADIgGABIgJABQgJAAgHgDg");
	this.shape_4.setTransform(116.8,15.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgLBBIAAhQQAAgFAGAAIARAAIAABVgAgGgmIgFgFQgCgDAAgFQAAgEACgCQACgEADgCQADgCADABIAHABQADACACAEQACACAAAEQAAAFgCADIgFAFQgDACgEAAQgDAAgDgCg");
	this.shape_5.setTransform(111.5,14.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAwAsQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAgBAAAAQAAgBAAAAQgBgBAAAAIAAgwQAAgHgDgFQgDgEgHAAQgJAAgDAFQgFAGAAAKIAAAwIgXAAIAAg1QAAgHgEgFQgCgEgIAAQgIAAgEAFQgEAGAAAKIAAAwIgZAAIAAhQQAAgFAGAAIAQAAIABAOQAEgIAHgEQAIgFAJABQAJAAAGAEQAHAFADAIQAEgIAIgFQAHgFAJABQAJAAAHADQAGAFAEAHQADAHAAAKIAAA3g");
	this.shape_6.setTransform(101.9,16.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgLBBIAAhQQAAgFAGAAIARAAIAABVgAgGgmIgFgFQgCgDAAgFQAAgEACgCQACgEADgCQADgCADABIAHABQADACACAEQACACAAAEQAAAFgCADIgFAFQgDACgEAAQgDAAgDgCg");
	this.shape_7.setTransform(92.2,14.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgMA6QgHgHABgNIAAhgQAAAAAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAQABAAABAAIARAAIAABmQAAAEACADQACACAFAAIADAAIACgBIAAALIgBAEQAAABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQgEACgFAAQgMAAgGgHg");
	this.shape_8.setTransform(88.3,14.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgLBBIAAhQQAAgFAGAAIARAAIAABVgAgGgmIgFgFQgCgDAAgFQAAgEACgCQACgEADgCQADgCADABIAHABQADACACAEQACACAAAEQAAAFgCADIgFAFQgDACgEAAQgDAAgDgCg");
	this.shape_9.setTransform(83.3,14.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgQAtIgLgDIgFgDIgBgDIAAgNIAPAEIAPABQAHAAAEgDQAFgDAAgEQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAQgBgCgDgBIgHgCIgIgDQgNgCgHgGQgHgGAAgLQAAgNAKgGQAKgHASABIAMABIAKACIAEACQABAAAAABQAAAAAAABQAAAAAAABQAAABAAABIAAALIgOgDIgNgBQgPAAAAAHQAAAEAEACQADACAGABIAKADIANAEQAFADADAEQAEAFAAAJQAAAOgKAHQgLAIgSAAIgNgBg");
	this.shape_10.setTransform(73.9,16.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAMAfQgFAHgHAEQgHADgJAAQgIAAgHgDQgHgEgEgGQgEgHAAgIQAAgNAMgGQAMgHAXAAIAJAAQAAgGgCgEQgCgDgEgCQgEgBgIAAIgOABIgOACIAAgMIABgEIAEgDIAMgCIAPgBQAVAAAKAJQAJAIAAAPIAAAeQAAAFACACQABACAEAAIADAAIADgBIAAAMIgBADQAAABgBAAQAAABAAAAQgBAAAAAAQgBABgBAAQgEABgFAAQgQAAgFgOgAgPAHQgHADAAAHQAAAFAEADQADAEAHAAQAFAAAEgDQAEgCACgEQADgEAAgGIAAgGIgFAAQgNAAgHADg");
	this.shape_11.setTransform(65.5,16.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgYA7QgKgFgFgKQgFgLAAgOQAAgNAFgKQAFgKAKgFQAJgGALAAQAHAAAGAEQAHADAFAIIAAg2IASAAQABAAAAAAQABAAABAAQAAABABAAQAAAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIAAB5IgWAAIAAgQQgEAJgHAEQgIAFgIAAQgLAAgJgGgAgNAAQgGAHAAAMQAAANAGAHQAFAHAIAAQAKAAAFgHQAFgHABgNQgBgMgFgHQgFgGgKAAQgIAAgFAGg");
	this.shape_12.setTransform(55.3,14.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAMAfQgFAHgHAEQgHADgJAAQgIAAgHgDQgHgEgEgGQgEgHAAgIQAAgNAMgGQAMgHAXAAIAJAAQAAgGgCgEQgCgDgEgCQgEgBgIAAIgOABIgOACIAAgMIABgEIAEgDIAMgCIAPgBQAVAAAKAJQAJAIAAAPIAAAeQAAAFACACQABACAEAAIADAAIADgBIAAAMIgBADQAAABgBAAQAAABAAAAQgBAAAAAAQgBABgBAAQgEABgFAAQgQAAgFgOgAgPAHQgHADAAAHQAAAFAEADQADAEAHAAQAFAAAEgDQAEgCACgEQADgEAAgGIAAgGIgFAAQgNAAgHADg");
	this.shape_13.setTransform(45.9,16.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAxAsQgBAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAgBAAAAQAAgBAAAAQAAgBgBAAIAAgwQAAgHgDgFQgDgEgIAAQgIAAgEAFQgEAGAAAKIAAAwIgXAAIAAg1QAAgHgDgFQgEgEgHAAQgIAAgEAFQgFAGABAKIAAAwIgZAAIAAhQQAAgFAGAAIAPAAIABAOQAFgIAIgEQAHgFAJABQAJAAAGAEQAGAFADAIQAGgIAHgFQAIgFAJABQAIAAAGADQAHAFADAHQAEAHAAAKIAAA3g");
	this.shape_14.setTransform(33.6,16.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAMAfQgFAHgHAEQgHADgJAAQgIAAgHgDQgHgEgEgGQgEgHAAgIQAAgNAMgGQAMgHAXAAIAJAAQAAgGgCgEQgCgDgEgCQgEgBgIAAIgOABIgOACIAAgMIABgEIAEgDIAMgCIAPgBQAVAAAKAJQAJAIAAAPIAAAeQAAAFACACQABACAEAAIADAAIADgBIAAAMIgBADQAAABgBAAQAAABAAAAQgBAAAAAAQgBABgBAAQgEABgFAAQgQAAgFgOgAgPAHQgHADAAAHQAAAFAEADQADAEAHAAQAFAAAEgDQAEgCACgEQADgEAAgGIAAgGIgFAAQgNAAgHADg");
	this.shape_15.setTransform(21.4,16.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgNA6QgFgHAAgNIAAhgQAAAAAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAQABAAAAAAIARAAIAABmQAAAEADADQACACAFAAIADAAIACgBIAAALIAAAEQgBABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQgEACgGAAQgLAAgHgHg");
	this.shape_16.setTransform(14.7,14.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgnA+IAAhzQAAgDADgDQACgCAEAAIARAAIAABoIA1AAIAAATg");
	this.shape_17.setTransform(7.4,14.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.llamadas_ilimitadas, new cjs.Rectangle(0,0,159.1,29.2), null);


(lib.linea_fija = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAMAfQgFAHgHAEQgHADgJAAQgIAAgHgDQgHgEgEgGQgEgHAAgIQAAgNAMgGQAMgHAXAAIAJAAQAAgGgCgEQgCgDgEgCQgEgBgIAAIgOABIgOACIAAgMIABgEIAEgDIAMgCIAPgBQAVAAAKAJQAJAIAAAPIAAAeQAAAFACACQABACAEAAIADAAIADgBIAAAMIgBADQAAABgBAAQAAABAAAAQgBAAAAAAQgBABgBAAQgEABgFAAQgQAAgFgOgAgPAHQgHADAAAHQAAAFAEADQADAEAHAAQAFAAAEgDQAEgCACgEQADgEAAgGIAAgGIgFAAQgNAAgHADg");
	this.shape.setTransform(135,16.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYA7QgKgFgFgKQgFgLAAgOQAAgNAFgKQAFgKAKgFQAJgGALAAQAHAAAGAEQAHADAFAIIAAg2IASAAQABAAAAAAQABAAABAAQAAABABAAQAAAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIAAB5IgVAAIgBgQQgEAJgHAEQgIAFgIAAQgLAAgJgGgAgNAAQgGAHAAAMQAAANAGAHQAFAHAIAAQAKAAAFgHQAFgHABgNQgBgMgFgHQgFgGgKAAQgIAAgFAGg");
	this.shape_1.setTransform(124.6,14.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgLBBIAAhQQAAgFAGAAIARAAIAABVgAgGgmIgFgFQgCgDAAgFQAAgEACgCQACgEADgCQADgCADABIAHABQADACACAEQACACAAAEQAAAFgCADIgFAFQgDACgEAAQgDAAgDgCg");
	this.shape_2.setTransform(117.4,14.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaAoQgGgEgDgHQgEgIAAgJIAAgyQAAgFAGAAIASAAIAAA0QAAAHAEAFQADAFAIAAQAHAAAEgGQAFgFAAgKIAAgwIAYAAIAABQQAAAAAAABQAAAAAAABQgBAAAAABQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAgBAAQAAAAgBAAIgPAAIgBgOQgFAIgHAEQgHAFgJAAQgIAAgIgFg");
	this.shape_3.setTransform(110.2,16.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgNA6QgFgHAAgNIAAhgQAAAAAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAQABAAAAAAIARAAIAABmQAAAEADADQACACAFAAIADAAIACgBIAAALIAAAEQgBABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQgEACgGAAQgLAAgHgHg");
	this.shape_4.setTransform(103.4,14.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgNAoQgLgFgGgLQgGgKAAgOQAAgNAGgKQAGgKALgGQAKgGAOABIALAAIAJACIAEACIACACIAAADIAAANIgKgCIgLgBQgOgBgGAHQgHAGAAANQAAANAHAHQAGAHAOAAIALgCIAKgCIAAANIAAADIgCABIgEACIgJADIgLABQgNAAgLgGg");
	this.shape_5.setTransform(96.4,16.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAWAsQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAgBgBAAQAAgBAAAAQAAgBAAAAIAAgvQAAgIgDgFQgEgEgHAAQgIAAgFAFQgEAGAAAKIAAAwIgZAAIAAhQQAAgFAHAAIAPAAIABAOQAEgIAIgEQAHgFAJABQAJAAAHADQAHAFADAHQADAHAAAKIAAA3g");
	this.shape_6.setTransform(87.4,16.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgLBBIAAhQQAAgFAGAAIARAAIAABVgAgGgmIgFgFQgCgDAAgFQAAgEACgCQACgEADgCQADgCADABIAHABQADACACAEQACACAAAEQAAAFgCADIgFAFQgDACgEAAQgDAAgDgCg");
	this.shape_7.setTransform(80.2,14.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAMAfQgFAHgHAEQgHADgJAAQgIAAgHgDQgHgEgEgGQgEgHAAgIQAAgNAMgGQAMgHAXAAIAJAAQAAgGgCgEQgCgDgEgCQgEgBgIAAIgOABIgOACIAAgMIABgEIAEgDIAMgCIAPgBQAVAAAKAJQAJAIAAAPIAAAeQAAAFACACQABACAEAAIADAAIADgBIAAAMIgBADQAAABgBAAQAAABAAAAQgBAAAAAAQgBABgBAAQgEABgFAAQgQAAgFgOgAgPAHQgHADAAAHQAAAFAEADQADAEAHAAQAFAAAEgDQAEgCACgEQADgEAAgGIAAgGIgFAAQgNAAgHADg");
	this.shape_8.setTransform(69.6,16.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgOBWIgHgBIgDgCIgBgEIAAgNIAMACQAIAAADgEQACgEAAgGIAAhaQAAgGAGAAIASAAIAABhQAAAKgDAHQgFAHgHAEQgIAEgIAAIgHgBgAAFg7IgFgFQgBgEAAgEQAAgEABgDQACgDADgCQAEgCAEAAIAHACQACACACADQACADAAAEQAAAEgCAEIgEAFQgEACgDAAQgEAAgEgCg");
	this.shape_9.setTransform(61.2,16.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgLBBIAAhQQAAgFAGAAIARAAIAABVgAgGgmIgFgFQgCgDAAgFQAAgEACgCQACgEADgCQADgCADABIAHABQADACACAEQACACAAAEQAAAFgCADIgFAFQgDACgEAAQgDAAgDgCg");
	this.shape_10.setTransform(58,14.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgRBBIAAhFIgSAAIAAgLQAAgGAHAAIALAAIAAgKQAAgPAJgJQAIgJARAAQAIAAAGACIAEACIABAEIAAAMIgIgBIgHgBQgOAAAAAPIAAAKIAWAAIAAARIgWAAIAABFg");
	this.shape_11.setTransform(52.5,14.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAMAfQgFAHgHAEQgHADgJAAQgIAAgHgDQgHgEgEgGQgEgHAAgIQAAgNAMgGQAMgHAXAAIAJAAQAAgGgCgEQgCgDgEgCQgEgBgIAAIgOABIgOACIAAgMIABgEIAEgDIAMgCIAPgBQAVAAAKAJQAJAIAAAPIAAAeQAAAFACACQABACAEAAIADAAIADgBIAAAMIgBADQAAABgBAAQAAABAAAAQgBAAAAAAQgBABgBAAQgEABgFAAQgQAAgFgOgAgPAHQgHADAAAHQAAAFAEADQADAEAHAAQAFAAAEgDQAEgCACgEQADgEAAgGIAAgGIgFAAQgNAAgHADg");
	this.shape_12.setTransform(40.8,16.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgSAoQgMgFgGgKQgGgLAAgOQAAgMAGgKQAFgLAKgFQAKgGALAAQANAAAKAGQAJAFAFAKQAGAKAAANIgBAGIg8AAQABALAHAGQAHAFALAAQAMAAAQgGIAAAMQAAABAAAAQAAABAAAAQgBABAAAAQAAABAAAAIgFADQgEACgIABIgNABQgNAAgKgFgAgLgWQgGAEgBAKIAmAAQgBgKgFgEQgGgFgIAAQgGAAgFAFg");
	this.shape_13.setTransform(31.1,16.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAWAsQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAgBgBAAQAAgBAAAAQAAgBAAAAIAAgvQAAgIgEgFQgDgEgHAAQgIAAgEAFQgFAGAAAKIAAAwIgZAAIAAhQQABgFAGAAIAPAAIABAOQAFgIAHgEQAHgFAJABQAJAAAHADQAHAFADAHQAEAHgBAKIAAA3g");
	this.shape_14.setTransform(21.5,16.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgOBFIAAhQQAAgGAGAAIARAAIAABWgAgYgoIAcgYQAFgEADAAQADAAADAEIAHANIgqAWg");
	this.shape_15.setTransform(14.5,14.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgnA+IAAhzQAAgDADgDQACgCAEAAIARAAIAABoIA1AAIAAATg");
	this.shape_16.setTransform(7.4,14.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.linea_fija, new cjs.Rectangle(0,0,141.7,29.2), null);


(lib.limite = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,0,0,0)").ss(1,1,1).p("EhR8AAAMCj5AAA");
	this.shape.setTransform(524.5,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.limite, new cjs.Rectangle(-1,-1,1051,2), null);


(lib.icono_fibra = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhRBhQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAgBgBIAAgBIAAgBIABgBIABAAIAvhlIADgEQACgCAEAAIADAAIACABIADABQAEgMgFgJIgCAAIgBAAQgHAAgEgFQgFgEAAgHQAAgGAFgEQAEgFAHAAQAGAAAEAFQAFAEAAAGQAAAGgEAEQAJANgHATIAHADQAQgngJgVQgFAAgDgEIgCgCQgDgEAAgFQAAgGAFgFQADgEAGgBQAHABAEAEQAFAFAAAGQAAAFgCAEIgDACIgCACQAHAVgLAjIgFALIAQAFQAGgHAHgHQAHgGAJgCIAAgDQABgGAEgFQAEgEAHAAQAGAAAFAEQAFAFAAAGQAAAHgFAFQgFAEgGAAIgGgBIgFgDQgQAEgIAOIADACIADAAIACACQACADAAAEIgBAFIgbA6IgBACQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAAAIAAgCIABgBIABgCIAag5Ig6gaIgwBnIgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAAAgABAgZQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQABABAAAAQAAAAABABQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAgAgZg3QAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQABABAAAAQAAAAABABQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAgAAEhVQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAABQAAAAABAAQAAABABAAQAAAAABABQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBABAAAAgAAPgLQAGgUALgOIAAgBQgDgCgBgDIgBgFQAAgHAFgFQAFgEAFAAQAHAAAEAEQAFAFAAAHQAAAGgFAEQgEAFgHgBIgBAAQgFAIgEAJIgHASgAAng9QAAABgBAAQAAABAAAAQAAABAAAAQgBABAAABQAAAAABAAQAAABAAAAQAAABAAAAQABABAAAAQAAAAABABQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAQAAgBAAgBQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAg");
	this.shape.setTransform(8.4,9.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.icono_fibra, new cjs.Rectangle(0,0,16.7,19.7), null);


(lib.gb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhKBdIAAiqQAAgHAEgEQAEgEAHAAIBDAAQASAAAOAGQANAHAGAKQAHAKAAAOQAAANgHALQgGAKgKAFQAOAFAJALQAJAMAAAPQAAATgJANQgJAMgRAGQgQAGgVAAgAgZA5IAcAAQAWABAAgWQAAgJgFgFQgGgFgKAAIgdAAgAgZgRIAZAAQAJAAAFgGQAFgFAAgJQAAgJgGgFQgFgFgIAAIgZAAg");
	this.shape.setTransform(115.7,20.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgqBUQgYgMgLgUQgMgWAAgeQAAgdANgWQAMgVAYgLQAYgMAhAAQANAAAMACQAMABAHACQAFACADACQADACABADIABAHIAAAbQgPgEgNgCIgXgBQggAAgPANQgPAOAAAbQgBAdAPANQAPANAaAAQARAAALgCIAAgkIglAAIAAgYQAAgGADgDQADgCAGAAIBHAAIAABlQgQAGgUADQgUAEgSAAQgiAAgYgMg");
	this.shape_1.setTransform(96.1,20.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.gb, new cjs.Rectangle(84,-1,42.1,41.8), null);


(lib.fibra_y_movil = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag3BdIAAiwQAAgFACgCQACgCAEAAIAKAAIAACrIBdAAIAAAOg");
	this.shape.setTransform(167.6,21.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgIBdIAAiwQAAgFACgCQACgCAEAAIAJAAIAAC5g");
	this.shape_1.setTransform(157.1,21.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgDBdQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBIgDgEIg/ipIgBgEQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABgBQABgBAEAAIAJAAIA7CmIA7imIARAAIhDC5g");
	this.shape_2.setTransform(145.8,21.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AguBtQgVgMgLgVQgKgXAAgaQAAgaAKgUQALgXAVgMQAUgNAaAAQAaAAAVANQAVAMAKAXQALAUAAAaQAAAagLAXQgKAVgVAMQgVANgaABQgagBgUgNgAglgqQgPALgJASQgJASAAAWQAAAXAJATQAJASAPAKQAQAKAVAAQAVAAAQgKQAQgKAIgSQAJgTAAgXQAAgXgJgRQgIgSgQgLQgQgKgVAAQgVAAgQAKgAgYhZIAqgdQAEgDADAAIAAAAQACAAACADIAFAJIg0Adg");
	this.shape_3.setTransform(128,18.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABVBdQgFAAgCgCQgBgCAAgEIAAiYIhHBuIgIAAIgEgBIgDgDIhDhoIAACeIgQAAIAAixQAAgDABgDQACgCAFAAIAKAAIBKB2IBHhwQACgDACgCQACgBAEAAIAMAAIAAC5g");
	this.shape_4.setTransform(106.9,21.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgKBdIAAhKIg8hkIgBgEIgBgDQAAAAAAAAQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABAAIAKAAIA3BgIA3hgIATAAIhCBvIAABKg");
	this.shape_5.setTransform(83.2,21.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AA/BdIgRgsIhaAAIgQAsIgSAAIBBiyIACgGQACgBAEAAIALAAIBICwIACAEQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQgBACgEAAgAgoAjIBQAAIgqhsg");
	this.shape_6.setTransform(61.9,21.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAuBdIgqhIIgvAAIAABIIgSAAIAAixQgBgDACgDQACgCAEAAIA3AAQAeAAAQAOQAQAOAAAdQgBANgFALQgEALgJAHQgKAHgNAEIAoBCIABAEIgBAEIgFABgAgrAHIAmAAQAXAAANgKQANgLAAgVQAAgWgLgKQgKgKgXAAIgrAAg");
	this.shape_7.setTransform(45.7,21.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag/BdIAAiwQAAgFABgCQACgCAEAAIA3AAQAaAAAQAMQAPAMAAAYQAAAPgHALQgIALgLAFQAPADAKAMQAJALAAASQAAAZgQANQgQANgdAAgAgtBPIAvAAQAVAAALgJQALgJAAgUQAAgQgKgKQgKgJgUAAIgyAAgAgtgHIArAAQAUAAAKgJQAKgJAAgSQAAgSgKgJQgLgIgVAAIgpAAg");
	this.shape_8.setTransform(30.1,21.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgIBdIAAiwQAAgFACgCQACgCAEAAIAJAAIAAC5g");
	this.shape_9.setTransform(18.7,21.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag2BdIAAiwQABgFABgCQACgCAEAAIBkAAIAAAPIhaAAIAABJIBRAAIAAANIhRAAIAABUg");
	this.shape_10.setTransform(10.2,21.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.fibra_y_movil, new cjs.Rectangle(0,0,175.3,41.8), null);


(lib.euros_iva_incl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgFAGQgCgDAAgDIABgDIADgDIADgBQAAAAABAAQAAAAABABQAAAAABAAQAAAAABABIADACIABADIgBAEIgDADIgEABQgCAAgDgCg");
	this.shape.setTransform(56.6,30.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgHAqQgEgFAAgIIAAhHIABgCIADgBIAHAAIAABKQAAAEACACQACACADAAIADAAIACgBIAAAGIgBADIgCABIgFAAQgHAAgEgEg");
	this.shape_1.setTransform(54.2,26.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgJAdQgHgFgFgHQgDgHgBgKQABgIADgIQAEgHAIgFQAHgDAJAAIAIAAIAGABIADABIABACIAAACIAAAGQgJgDgGAAQgLAAgGAGQgFAGAAAKQAAAHADAGQACAFAFADQAEACAHAAIAJgBIAIgCIAAAGIgBACIgBACIgDABIgGABIgIAAQgJAAgHgDg");
	this.shape_2.setTransform(49.4,27.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AATAgIgDgBIgBgDIAAghQAAgHgDgFQgEgFgHAAQgGAAgFAGQgEAFAAAKIAAAhIgNAAIAAg6IABgDIAEgBIAGAAIABALQADgGAGgDQAFgDAGAAQAHAAAFADQAFADADAGQACAFAAAHIAAAng");
	this.shape_3.setTransform(42.9,27.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgFAuIAAg6IABgDIADgBIAHAAIAAA+gAgFgfQgCgDAAgDQAAgDACgDQADgCACAAIAEABIADADIABAEIgBAEIgDADIgEABQgCAAgDgCg");
	this.shape_4.setTransform(37.9,26.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAcAtIgIgUIgnAAIgHAUIgMAAIAehVIACgDIADgBIAKAAIAgBUIAAACIAAACIgDABgAgQAPIAhAAIgRgvg");
	this.shape_5.setTransform(52.4,12.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgDAtIgDgBIgCgDIgdhQIAAgBIABgDIACgBIAJAAIAZBMIAahMIAMAAIgfBZg");
	this.shape_6.setTransform(43.9,12.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgFAtIAAhUIABgDQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAHAAIAABZg");
	this.shape_7.setTransform(38,12.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgGBYQgRgHgNgPQgLgOgGgTIgbAAIAAgRQAAgEADgDQADgDAEABIAOAAIgBgHIABgGIgYAAIAAgQQAAgEADgDQADgCAEAAIARAAQAGgUALgOQANgOARgIQARgHAWAAIATABQAKABAHACQAHACACAEQADACAAAHIAAAZQgMgDgMgCIgVgBQgSAAgJAFQgJAHgEANIA6AAIAAAZIg+AAIAAAGIAAAHIA+AAIAAAaIg6AAQAEANAJAGQAJAGASAAQAJAAAMgCIAYgEIAAAZQAAAFgDAEQgCADgHABIgRAEIgTACQgWAAgRgIg");
	this.shape_8.setTransform(10.6,21.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.euros_iva_incl, new cjs.Rectangle(0,0,60,41.8), null);


(lib.dedo_izquierdo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.dedo_izquierdo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.dedo_izquierdo_1, new cjs.Rectangle(0,0,39,26), null);


(lib.dedo_derecho_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.dedo_derecho();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.dedo_derecho_1, new cjs.Rectangle(0,0,44,21), null);


(lib.cuerpo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.cuerpo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cuerpo_1, new cjs.Rectangle(0,0,140,56), null);


(lib.burbuja_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.bubble_grande_02();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.burbuja_base, new cjs.Rectangle(0,0,131,142), null);


(lib.boton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,204,51,0.82)").s().p("EhMjATiMAAAgnDMCZHAAAMAAAAnDg");
	this.shape.setTransform(150,300,0.306,2.4);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib._600mb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLBaQgKgHgHgMIgBAYIgpAAIAAi2QAAgEACgDQADgCAFAAIAlAAIAABNQAHgJAJgFQAIgFALAAQAQAAAOAIQANAJAIAPQAIAPAAAUQAAAVgIAPQgIAQgNAIQgOAIgQAAQgMAAgLgHgAgRAFQgGAJAAAPQAAAPAGAJQAHAJAKAAQALAAAGgJQAGgJAAgPQAAgPgGgJQgGgHgLAAQgKAAgHAHg");
	this.shape.setTransform(155,65.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABEBdQgFAAgCgDQgCgCgBgFIAAhnIgmA/IgcAAQgFAAgDgBIgGgHIgjg2IAABwIgsAAIAAitQAAgGADgDQADgDAGAAIAlAAIA2BaIAvhRQADgFADgCQADgCAHAAIAlAAIAAC5g");
	this.shape_1.setTransform(134.6,65.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhRCoQgjgYgTgrQgUgsAAg5QAAg3AUgsQATgrAjgYQAkgYAtAAQAuAAAjAYQAkAYATArQAUAsAAA3QAAA4gUAsQgUArgjAYQgkAYgtAAQguAAgjgXgAgohUQgPAbAAA5QAAA5APAcQAPAbAZAAQAaAAAPgbQAPgcAAg5QAAg4gPgcQgPgbgaAAQgZAAgPAbg");
	this.shape_2.setTransform(104.4,56.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhRCoQgjgYgTgrQgUgsAAg5QAAg3AUgsQATgrAjgYQAkgYAtAAQAuAAAjAYQAkAYATArQAUAsAAA3QAAA4gUAsQgUArgjAYQgkAYgtAAQguAAgjgXgAgohUQgPAbAAA5QAAA5APAcQAPAbAZAAQAaAAAPgbQAPgcAAg5QAAg4gPgcQgPgbgaAAQgZAAgPAbg");
	this.shape_3.setTransform(68.8,56.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhICsQghgUgTgmQgTgoAAg5QAAg+AXgvQAXgvAsgZQArgaA8AAQAaAAASAEQAJACAFAEQAFAEABAEIABAMIAAAzIgegEQgSgCgPAAQguAAgZAVQgaAVgDAvQALgLAVgIQATgHAaAAQAeAAAaAMQAbAMAQAaQAQAZAAAmQAAAngSAeQgSAdggAQQggAQgoAAQgrAAghgTgAgWAXQgLAGgHALQgHALAAAOQAAAPAGALQAHALAMAGQALAHANAAQANAAALgHQALgFAHgMQAHgLAAgPQAAgOgHgLQgHgLgLgGQgLgGgNAAQgMAAgMAGg");
	this.shape_4.setTransform(35.1,56.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib._600mb, new cjs.Rectangle(16.2,15.8,148.8,79.6), null);


(lib.red_de_fibra = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_2
	this.instance = new lib.icono_fibra();
	this.instance.parent = this;
	this.instance.setTransform(10.2,12.6,1.26,1.26,0,0,0,8.1,10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVAnIAAhHIABgEQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAIAKAAIAAAQQADgIAGgFQAHgEAIAAIAEABIABADIAAAJIgGAAQgMAAgFAHQgFAHAAAMIAAAmg");
	this.shape.setTransform(252.4,16.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgaAlQgGgDgEgFQgDgGAAgHQAAgNALgGQAKgGATAAIALAAQAAgJgFgEQgFgFgKAAIgNAAIgMADIAAgHIABgEIADgCIAKgCIAMAAQARAAAJAIQAIAHAAANIAAAdQAAAGACACQABACAEAAIADAAIADgBIAAAHIgBADIgDACIgGABQgOAAgDgOQgEAGgHAEQgGAEgJAAQgHAAgGgDgAgRADQgHADAAAIQAAAEACAEQACAEAEABQADACAFAAQAGAAAEgDQAFgCACgGQADgEAAgGIAAgIIgJAAQgNAAgHADg");
	this.shape_1.setTransform(245.4,16.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAAAyQgFgDgDgFQgDgFAAgHIAAgsIgRAAIAAgGQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAIAMAAIAAgWQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAIAJAAIAAAbIAVAAIAAALIgVAAIAAApQAAAHADAEQADADAIAAIAMgBIAAAGIgBADIgDACQgEACgIAAQgIAAgFgDg");
	this.shape_2.setTransform(237.9,15.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgNAoIgJgCIgEgDIAAgDIAAgHIALACIANACQAHgBAFgDQAFgDAAgGQgBgDgCgCQgBgCgDgBIgHgCIgIgDQgKgDgFgEQgGgGABgIQAAgLAHgFQAIgFAOAAIAKAAIAIACQABAAAAAAQABABAAAAQABAAAAAAQAAABABAAIABAEIAAAGIgMgDIgLAAQgHAAgEACQgFACAAAFQAAADADACQABACADABIAHADIAIADIAKAEQAFACADAEQACAEAAAHQABAMgJAGQgIAGgOAAIgLAAg");
	this.shape_3.setTransform(232.2,16.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgHA5IAAhIQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAJAAIAABNgAgGgnQgDgDAAgEQAAgEADgDQADgDADAAIAFABIADAEIACAFQAAADgCACIgDAEIgFABQgDAAgDgDg");
	this.shape_4.setTransform(227.3,14.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgDAnIgDgBIgCgDIgdhDIgBgCIABgDIADgBIAKAAIAYA7IAXg7IAQAAIgiBNg");
	this.shape_5.setTransform(221.9,16.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgTAjQgIgGgGgIQgEgJAAgMQAAgLAEgJQAGgJAIgFQAJgFAKAAQALAAAJAFQAIAFAFAJQAFAJAAALQAAAMgFAJQgFAIgIAGQgJAFgLAAQgKAAgJgFgAgLgYQgFADgDAHQgCAGAAAIQAAAJACAGQADAGAFADQAFAEAGAAQAHAAAFgEQAFgDACgGQADgGAAgJQAAgNgFgHQgHgHgKAAQgGAAgFADg");
	this.shape_6.setTransform(213.8,16.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAvA3IgDgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAhSIgkA6IgIAAIgDgBIgCgCIgjg2IAABWIgOAAIAAhoQAAgFAGAAIAKAAIAoBAIAmg8IADgEIAEAAIAMAAIAABtg");
	this.shape_7.setTransform(202.8,14.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgaAlQgGgDgEgFQgDgGAAgHQAAgNALgGQAKgGATAAIALAAQAAgJgFgEQgFgFgKAAIgNAAIgMADIAAgHIABgEIADgCIAKgCIAMAAQARAAAJAIQAIAHAAANIAAAdQAAAGACACQABACAEAAIADAAIADgBIAAAHIgBADIgDACIgGABQgOAAgDgOQgEAGgHAEQgGAEgJAAQgHAAgGgDgAgRADQgHADAAAIQAAAEACAEQACAEAEABQADACAFAAQAGAAAEgDQAFgCACgGQADgEAAgGIAAgIIgJAAQgNAAgHADg");
	this.shape_8.setTransform(188.7,16.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgVAnIAAhHIABgEQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAIAKAAIAAAQQADgIAGgFQAHgEAIAAIAEABIABADIAAAJIgGAAQgMAAgFAHQgFAHAAAMIAAAmg");
	this.shape_9.setTransform(182.3,16.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgTAkQgHgEgDgGQgDgIAAgIIAAgsQAAAAAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAAAIALAAIAAAuQAAAJAEAFQAEAFAJABQAIgBAGgGQAEgHAAgLIAAgpIAPAAIAABHIAAAEIgEABIgJAAIgBgNQgEAHgGAEQgHADgHAAQgJAAgFgDg");
	this.shape_10.setTransform(174.9,16.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAAAyQgFgDgDgFQgDgFAAgHIAAgsIgRAAIAAgGQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAIAMAAIAAgWQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAIAJAAIAAAbIAVAAIAAALIgVAAIAAApQAAAHADAEQADADAIAAIAMgBIAAAGIgBADIgDACQgEACgIAAQgIAAgFgDg");
	this.shape_11.setTransform(167.5,15.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgVAnIAAhHIABgEQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAIAKAAIAAAQQADgIAGgFQAHgEAIAAIAEABIABADIAAAJIgGAAQgMAAgFAHQgFAHAAAMIAAAmg");
	this.shape_12.setTransform(162.9,16.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgPAkQgKgFgFgJQgFgJAAgNQAAgLAFgJQAEgJAJgFQAIgFAJAAQALAAAIAFQAIAFAFAJQAEAJAAALIAAADIg4AAQAAANAHAHQAHAGAMAAIAMgBIAMgEIAAAHIgBADIgDACQgEACgGABIgMABQgKAAgJgEgAgNgXQgGAGgBALIAqAAQgBgHgDgFQgDgFgEgCQgFgDgGAAQgIAAgFAFg");
	this.shape_13.setTransform(155.6,16.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgMA1QgHgFgEgGIAAAOIgNAAIAAhsIABgDQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAIAKAAIAAAwQAEgGAGgEQAIgEAHAAQAKABAHAFQAJAEAEAJQAEAJAAAMQAAAMgEAIQgEAJgJAGQgHAEgKAAQgJABgGgFgAgQgCQgGAGAAAOQAAAMAGAIQAGAHAKABQAGgBAGgDQAFgDACgGQADgHAAgIQAAgJgDgHQgCgFgFgEQgGgCgGAAQgKgBgGAIg");
	this.shape_14.setTransform(147.5,14.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgTAjQgIgGgGgIQgEgJAAgMQAAgLAEgJQAGgJAIgFQAJgFAKAAQALAAAJAFQAIAFAFAJQAFAJAAALQAAAMgFAJQgFAIgIAGQgJAFgLAAQgKAAgJgFgAgLgYQgGADgCAHQgDAGAAAIQAAAJADAGQACAGAGADQAFAEAGAAQAHAAAFgEQAFgDACgGQADgGAAgJQAAgNgFgHQgHgHgKAAQgGAAgFADg");
	this.shape_15.setTransform(138.6,16.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgMAjQgJgFgEgJQgGgJABgMQgBgLAGgKQAEgJAJgEQAKgFALAAIAKAAIAHACIAEABIABACIAAADIAAAHQgLgDgIgBQgMAAgIAIQgHAHAAANQAAAIADAHQAEAGAFAEQAGADAJAAIAKgBIAJgDIAAAIIAAACIgBACIgDACIgIABIgKABQgLAAgKgFg");
	this.shape_16.setTransform(131,16.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgjA5IgDgCQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAIAAgHIALABQAFAAAEgCQAEgCADgEQAEgFADgIIADgGIgghFIAAgDIABgCIADgBIAKAAIAYA6IAXg6IAPAAIgiBTQgFAKgEAHQgEAHgGADQgHADgIAAIgIAAg");
	this.shape_17.setTransform(120.2,18.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgaAlQgGgDgEgFQgDgGAAgHQAAgNALgGQAKgGATAAIALAAQAAgJgFgEQgFgFgKAAIgNAAIgMADIAAgHIABgEIADgCIAKgCIAMAAQARAAAJAIQAIAHAAANIAAAdQAAAGACACQABACAEAAIADAAIADgBIAAAHIgBADIgDACIgGABQgOAAgDgOQgEAGgHAEQgGAEgJAAQgHAAgGgDgAgRADQgHADAAAIQAAAEACAEQACAEAEABQADACAFAAQAGAAAEgDQAFgCACgGQADgEAAgGIAAgIIgJAAQgNAAgHADg");
	this.shape_18.setTransform(109.4,16.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgVAnIAAhHIABgEQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAIAKAAIAAAQQADgIAGgFQAHgEAIAAIAEABIABADIAAAJIgGAAQgMAAgFAHQgFAHAAAMIAAAmg");
	this.shape_19.setTransform(103,16.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgMA1QgHgFgEgGIAAAOIgNAAIAAhsIABgDQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAIAKAAIAAAwQAEgGAGgEQAIgEAHAAQAKABAHAFQAJAEAEAJQAEAJAAAMQAAAMgEAIQgEAJgJAGQgHAEgKAAQgJABgGgFgAgQgCQgGAGAAAOQAAAMAGAIQAGAHAKABQAGgBAGgDQAFgDADgGQACgHAAgIQAAgJgCgHQgDgFgFgEQgGgCgGAAQgKgBgGAIg");
	this.shape_20.setTransform(95.7,14.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgHA5IAAhIQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAJAAIAABNgAgGgnQgDgDAAgEQAAgEADgDQADgDADAAIAFABIADAEIACAFQAAADgCACIgDAEIgFABQgDAAgDgDg");
	this.shape_21.setTransform(89.3,14.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgNA6IAAhCIgQAAIAAgGQAAgFAFAAIALAAIAAgLQABgNAGgGQAHgIANABQAHgBAFACIADABIABADIAAAHIgHgBIgGAAQgJAAgEAFQgDAEAAAHIAAAKIAWAAIAAALIgWAAIAABCg");
	this.shape_22.setTransform(84.9,14.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgPAkQgKgFgFgJQgFgJAAgNQAAgLAFgJQAEgJAJgFQAIgFAJAAQALAAAIAFQAIAFAFAJQAEAJAAALIAAADIg4AAQAAANAHAHQAHAGAMAAIAMgBIAMgEIAAAHIgBADIgDACQgEACgGABIgMABQgKAAgJgEgAgNgXQgGAGgBALIAqAAQgBgHgDgFQgDgFgEgCQgFgDgGAAQgIAAgFAFg");
	this.shape_23.setTransform(74.8,16.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgTA1QgIgGgFgJQgFgIAAgMQAAgMAFgJQAFgJAIgEQAIgFAJgBQAIAAAGAEQAHAEAEAHIAAgxIAKAAQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAIAABsIgOAAIgBgOQgDAHgHAEQgHAFgIgBQgJAAgIgEgAgPgCQgGAGAAAOQAAAMAGAIQAGAHAJABQAHgBAFgDQAFgDADgGQADgHAAgIQAAgOgGgGQgGgIgLABQgJgBgGAIg");
	this.shape_24.setTransform(66.1,14.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgTA1QgIgGgFgJQgFgIAAgMQAAgMAFgJQAFgJAIgEQAIgFAJgBQAIAAAGAEQAHAEAEAHIAAgxIAKAAQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAIAABsIgOAAIgBgOQgDAHgHAEQgHAFgIgBQgJAAgIgEgAgPgCQgGAGAAAOQAAAMAGAIQAGAHAJABQAHgBAFgDQAFgDADgGQADgHAAgIQAAgOgGgGQgGgIgLABQgJgBgGAIg");
	this.shape_25.setTransform(53.9,14.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgPAkQgKgFgFgJQgFgJAAgNQAAgLAFgJQAEgJAJgFQAIgFAJAAQALAAAIAFQAIAFAFAJQAEAJAAALIAAADIg4AAQAAANAHAHQAHAGAMAAIAMgBIAMgEIAAAHIgBADIgDACQgEACgGABIgMABQgKAAgJgEgAgNgXQgGAGgBALIAqAAQgBgHgDgFQgDgFgEgCQgFgDgGAAQgIAAgFAFg");
	this.shape_26.setTransform(45.7,16.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAYA3IgWgoIgYAAIAAAoIgQAAIAAhoQAAgFAGAAIAhAAQARAAALAJQAKAIAAASQAAAHgDAGQgDAGgFAFQgFAEgHACIAWAmIABADIgBACIgDABgAgWACIATAAQANAAAGgEQAHgGAAgLQAAgMgGgFQgGgGgLAAIgWAAg");
	this.shape_27.setTransform(36.9,14.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.red_de_fibra, new cjs.Rectangle(0,0,256.5,27.9), null);


(lib.pinza_izquierda_estatica = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_2
	this.instance = new lib.dedo_izquierdo_1();
	this.instance.parent = this;
	this.instance.setTransform(29.1,34.5,1,1,0,0,0,0.1,25.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Capa_1
	this.instance_1 = new lib.pinza_izquierda();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.pinza_izquierda_estatica, new cjs.Rectangle(0,0,68,41), null);


(lib.pinza_izquierda_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_2
	this.instance = new lib.dedo_izquierdo_1();
	this.instance.parent = this;
	this.instance.setTransform(29.1,34.5,1,1,0,0,0,0.1,25.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:9},0).wait(2).to({rotation:-8,x:29.2},0).wait(1).to({rotation:-9,x:29.1},0).wait(1).to({rotation:-10},0).wait(1).to({rotation:0},0).wait(16));

	// Capa_1
	this.instance_1 = new lib.pinza_izquierda();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,68,41);


(lib.pinza_derecha_estatica = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// uña que cierra
	this.instance = new lib.dedo_derecho_1();
	this.instance.parent = this;
	this.instance.setTransform(41.2,31.1,1,1,0,0,0,44.1,20.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Capa_1
	this.instance_1 = new lib.pinza_derecha();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.pinza_derecha_estatica, new cjs.Rectangle(-2.9,0,73.9,36), null);


(lib.pinza_derecha_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// uña que cierra
	this.instance = new lib.dedo_derecho_1();
	this.instance.parent = this;
	this.instance.setTransform(41.2,31.1,1,1,0,0,0,44.1,20.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:21,rotation:-2,x:41.3},0).wait(1).to({regX:44,regY:21.1,rotation:-3,x:41.2,y:31.2},0).wait(2).to({regX:44.1,rotation:10,x:41.3,y:31.1},0).wait(1).to({regY:21.2,rotation:11,y:31.2},0).wait(1).to({regY:20.9,rotation:0,x:41.2,y:31.1},0).wait(1));

	// Capa_1
	this.instance_1 = new lib.pinza_derecha();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.9,0,73.9,36);


(lib.pez_final_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"in":1,out:11});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_10 = function() {
		this.stop();
	}
	this.frame_21 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10).call(this.frame_10).wait(11).call(this.frame_21).wait(1));

	// Capa_1
	this.instance = new lib.pez_base();
	this.instance.parent = this;
	this.instance.setTransform(224,84,1,1,0,0,0,224,84);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},10).wait(1).to({alpha:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,280,104);


(lib.olas_superficie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_2
	this.instance = new lib.olasbase();
	this.instance.parent = this;
	this.instance.setTransform(261.8,46.1,1,1,0,0,0,303.5,45.5);
	this.instance.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:477.8},200).to({x:261.8},199).wait(1));

	// Capa_1
	this.instance_1 = new lib.olasbase();
	this.instance_1.parent = this;
	this.instance_1.setTransform(476.8,46.1,1,1,0,0,0,303.5,45.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:258},200).to({x:471.3},199).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(170.9,9.2,515,33);


(lib.LUZ_MAR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.LUZ_MAR_BRILLA();
	this.instance.parent = this;
	this.instance.setTransform(355.4,262.3,1,1,0,0,0,355.4,262.3);
	this.instance.alpha = 0.422;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:355.3,scaleX:1.48,x:355.3,y:258.3,alpha:0.789},23).to({regX:355.4,scaleX:1,x:355.4,y:262.3,alpha:0.422},24).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,710.8,524.5);


(lib.Burbuja = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// Capa_2
	this.instance = new lib.burbuja_base();
	this.instance.parent = this;
	this.instance.setTransform(-0.4,-1.4,0.05,0.05,0,0,0,64,70);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.1,scaleY:1.1,y:-1.5},6).to({scaleX:0.9,scaleY:0.9,y:-1.4},1).to({scaleX:1.02,scaleY:1.02},1).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:1,scaleY:1,y:-1.5},0).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.6,-4.9,6.6,7.1);


(lib.brazo_izquierdo_estatico = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_3
	this.instance = new lib.pinza_izquierda_estatica();
	this.instance.parent = this;
	this.instance.setTransform(6.1,13.2,1,1,-22.7,0,0,0.1,41);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Capa_1
	this.instance_1 = new lib.brazo_izquierdo();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.brazo_izquierdo_estatico, new cjs.Rectangle(-9.8,-48.5,82.9,98.5), null);


(lib.brazo_izquierdo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_3
	this.instance = new lib.pinza_izquierda_1();
	this.instance.parent = this;
	this.instance.setTransform(6.1,13.2,1,1,-22.7,0,0,0.1,41);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:40.9,rotation:12,x:6,y:13.1},20).to({regY:41,rotation:-22.7,x:6.1,y:13.2},19).wait(1));

	// Capa_1
	this.instance_1 = new lib.brazo_izquierdo();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.8,-48.5,82.9,98.5);


(lib.brazo_derecho_estatico = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_2
	this.instance = new lib.pinza_derecha_estatica();
	this.instance.parent = this;
	this.instance.setTransform(73.1,8.7,1,1,18,0,0,71.1,35.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Capa_1
	this.instance_1 = new lib.brazo_derecho();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.brazo_derecho_estatico, new cjs.Rectangle(0,-47.4,84.1,92.5), null);


(lib.brazo_derecho_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_2
	this.instance = new lib.pinza_derecha_1();
	this.instance.parent = this;
	this.instance.setTransform(73.2,8.7,1,1,-15,0,0,71.1,35.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:22.7},19).to({rotation:-15},20).wait(1));

	// Capa_1
	this.instance_1 = new lib.brazo_derecho();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.9,-26,78.1,71);


(lib.Boton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.boton();
	this.instance.parent = this;
	this.instance.setTransform(150,300,1,1,0,0,0,150,300);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.boton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Boton, new cjs.Rectangle(0,0,300,600), null);


(lib._50euros = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.precio_final();
	this.instance.parent = this;
	this.instance.setTransform(47,77.6,1,1,0,0,0,44.4,13.8);

	this.instance_1 = new lib.euros_iva_incl();
	this.instance_1.parent = this;
	this.instance_1.setTransform(95.1,51.5,1,1,0,0,0,29.4,23.1);

	this.instance_2 = new lib.texto_06();
	this.instance_2.parent = this;
	this.instance_2.setTransform(80.9,59.5,1,1,0,0,0,80.9,59.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib._50euros, new cjs.Rectangle(0,0,125.7,93), null);


(lib._20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_2
	this.instance = new lib.gb();
	this.instance.parent = this;
	this.instance.setTransform(85.2,46.6,1,1,0,0,0,102.2,17.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhRCoQgjgYgTgrQgUgsAAg5QAAg3AUgsQATgrAjgYQAkgYAtAAQAuAAAjAYQAkAYATArQAUAsAAA3QAAA4gUAsQgUArgjAYQgkAYgtAAQguAAgjgXgAgohUQgPAbAAA5QAAA5APAcQAPAbAZAAQAaAAAPgbQAPgcAAg5QAAg4gPgcQgPgbgaAAQgZAAgPAbg");
	this.shape.setTransform(50.3,40.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhHC9QgVgDgOgEQgNgEgEgFQgFgGAAgMIAAg4QAXAGAZAFQAaAEAUAAQAhAAAPgLQAPgKAAgXQAAgWgOgKQgPgKggAAIgoAAIAAhDIAtAAQAcAAAPgJQAOgJAAgTQAAgOgGgIQgHgIgOgEQgMgDgWAAQgXAAgbAEQgbAFgQAGIAAg2QAAgNAEgGQAEgGANgEQAPgEAWgCQAXgDAaAAQBEAAAkAZQAkAZAAAwQAAAegQAWQgRAWgdAJQAfAJATAVQASAWAAAiQAAA5gpAdQgpAchKAAQgWAAgWgCg");
	this.shape_1.setTransform(17.5,40.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib._20, new cjs.Rectangle(0,0,109.1,79.6), null);


(lib.TARIFA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// raya
	this.instance = new lib.raya();
	this.instance.parent = this;
	this.instance.setTransform(11.5,118.4,1,1,0,0,0,77.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 50 EUROS
	this.instance_1 = new lib._50euros();
	this.instance_1.parent = this;
	this.instance_1.setTransform(11.1,175.4,1,1,0,0,0,84.2,58);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// llamadas ilimitadas
	this.instance_2 = new lib.llamadas_ilimitadas();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-8,88,1,1,0,0,0,62.9,11.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// 25
	this.instance_3 = new lib._20();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-4.1,61.8,1,1,0,0,0,67.8,48.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// signo mas
	this.instance_4 = new lib.signo_mas();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-62,2.7,1,1,0,0,0,10.1,20.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// linea fija
	this.instance_5 = new lib.linea_fija();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-13.4,-26.7,1,1,0,0,0,57.1,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// 600mb
	this.texto_01 = new lib._600mb();
	this.texto_01.name = "texto_01";
	this.texto_01.parent = this;
	this.texto_01.setTransform(-4.3,-67.7,1,1,0,0,0,83.9,50.2);

	this.timeline.addTween(cjs.Tween.get(this.texto_01).wait(1));

	// fibra y movil
	this.instance_6 = new lib.fibra_y_movil();
	this.instance_6.parent = this;
	this.instance_6.setTransform(11.2,-102.4,1,1,0,0,0,83,28.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = getMCSymbolPrototype(lib.TARIFA, new cjs.Rectangle(-73.1,-131.1,176.6,341.5), null);


(lib.cangrejo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(898));

	// brazo derecho
	this.instance = new lib.brazo_derecho_estatico();
	this.instance.parent = this;
	this.instance.setTransform(77.3,61.6,0.65,0.65,0,0,0,3.6,40.9);

	this.instance_1 = new lib.brazo_derecho_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(543.4,61.8,0.65,0.65,15,0,0,3.8,41.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},26).to({state:[{t:this.instance}]},34).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance}]},6).to({state:[{t:this.instance}]},6).to({state:[{t:this.instance}]},6).to({state:[{t:this.instance}]},6).to({state:[{t:this.instance}]},6).to({state:[{t:this.instance}]},6).to({state:[{t:this.instance}]},6).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},6).to({state:[{t:this.instance}]},7).to({state:[{t:this.instance}]},7).to({state:[{t:this.instance}]},7).to({state:[{t:this.instance}]},6).to({state:[{t:this.instance}]},6).to({state:[{t:this.instance}]},6).to({state:[{t:this.instance}]},6).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance}]},6).to({state:[{t:this.instance}]},6).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance}]},6).to({state:[{t:this.instance}]},6).to({state:[{t:this.instance}]},6).to({state:[{t:this.instance}]},6).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance}]},6).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance}]},6).to({state:[{t:this.instance}]},7).to({state:[{t:this.instance}]},7).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},7).to({state:[{t:this.instance}]},9).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},9).to({state:[{t:this.instance}]},11).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},112).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance}]},6).to({state:[{t:this.instance}]},6).to({state:[{t:this.instance}]},6).to({state:[{t:this.instance}]},6).to({state:[{t:this.instance}]},6).to({state:[{t:this.instance}]},6).to({state:[{t:this.instance}]},6).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},6).to({state:[{t:this.instance}]},7).to({state:[{t:this.instance}]},7).to({state:[{t:this.instance}]},7).to({state:[{t:this.instance}]},6).to({state:[{t:this.instance}]},6).to({state:[{t:this.instance}]},6).to({state:[{t:this.instance}]},6).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance}]},6).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance}]},1).wait(263));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:41,rotation:5},26).to({regY:40.9,rotation:0},34).to({regY:41,rotation:3.3,x:93.4,y:61.8},5).to({rotation:7.1,x:105.9},6).to({scaleX:0.65,scaleY:0.65,rotation:11,x:115.6},6).to({regX:3.8,regY:41.1,scaleX:0.65,scaleY:0.65,rotation:15,x:130},6).to({regX:3.7,rotation:11.1,x:146,y:61.7},6).to({scaleX:0.65,scaleY:0.65,rotation:7.3,x:157,y:61.8},6).to({regX:3.8,scaleX:0.65,scaleY:0.65,rotation:3.5,x:171.2,y:61.7},6).to({regX:3.6,regY:40.9,rotation:0,x:182.5,y:61.6},6).wait(1).to({x:181.3},0).to({regY:41,rotation:3.3,x:197.4,y:61.8},6).to({rotation:7.1,x:209.9},7).to({scaleX:0.65,scaleY:0.65,rotation:11,x:219.6},7).to({regX:3.8,regY:41.1,scaleX:0.65,scaleY:0.65,rotation:15,x:234},7).to({regX:3.7,rotation:11.1,x:250,y:61.7},6).to({scaleX:0.65,scaleY:0.65,rotation:7.3,x:261,y:61.8},6).to({regX:3.8,scaleX:0.65,scaleY:0.65,rotation:3.5,x:275.2,y:61.7},6).to({regX:3.6,regY:40.9,rotation:0,x:286.5,y:61.6},6).wait(1).to({x:284},0).to({regY:41,rotation:3.3,x:300.1,y:61.8},5).to({rotation:7.1,x:312.6},6).to({scaleX:0.65,scaleY:0.65,rotation:11,x:322.3},6).to({regX:3.8,regY:41.1,scaleX:0.65,scaleY:0.65,rotation:15,x:336.7},5).to({regX:3.7,rotation:11.1,x:352.7,y:61.7},6).to({scaleX:0.65,scaleY:0.65,rotation:7.3,x:363.7,y:61.8},6).to({regX:3.8,scaleX:0.65,scaleY:0.65,rotation:3.5,x:377.9,y:61.7},6).to({regX:3.6,regY:40.9,rotation:0,x:389.2,y:61.6},6).wait(1).to({x:386.7},0).to({regY:41,rotation:3.3,x:402.8,y:61.8},5).to({rotation:7.1,x:415.3},5).to({scaleX:0.65,scaleY:0.65,rotation:11,x:425},6).to({regX:3.8,regY:41.1,scaleX:0.65,scaleY:0.65,rotation:15,x:439.4},5).to({regX:3.7,rotation:11.1,x:455.4,y:61.7},5).to({scaleX:0.65,scaleY:0.65,rotation:7.3,x:466.4,y:61.8},6).to({regX:3.8,scaleX:0.65,scaleY:0.65,rotation:3.5,x:480.6,y:61.7},7).to({regX:3.6,regY:40.9,rotation:0,x:491.9,y:61.6},7).wait(1).to({x:490.7},0).to({regY:41,rotation:3.3,x:506.8,y:61.8},7).to({rotation:7.1,x:519.3},9).wait(1).to({regX:3.7,scaleX:0.65,scaleY:0.65,rotation:7.3,x:520.4},0).to({regX:3.6,rotation:11,x:529},9).to({regX:3.8,regY:41.1,scaleX:0.65,scaleY:0.65,rotation:15,x:543.4},11).to({_off:true},1).wait(112).to({_off:false,regX:3.6,regY:40.9,rotation:0,x:554.3,y:61.6},0).wait(1).to({regY:41,rotation:3.3,x:570.4,y:61.8},5).to({rotation:7.1,x:582.9},6).to({scaleX:0.65,scaleY:0.65,rotation:11,x:592.6},6).to({regX:3.8,regY:41.1,scaleX:0.65,scaleY:0.65,rotation:15,x:607},6).to({regX:3.7,rotation:11.1,x:623,y:61.7},6).to({scaleX:0.65,scaleY:0.65,rotation:7.3,x:634,y:61.8},6).to({regX:3.8,scaleX:0.65,scaleY:0.65,rotation:3.5,x:648.2,y:61.7},6).to({regX:3.6,regY:40.9,rotation:0,x:659.5,y:61.6},6).wait(1).to({x:658.3},0).to({regY:41,rotation:3.3,x:674.4,y:61.8},6).to({rotation:7.1,x:686.9},7).to({scaleX:0.65,scaleY:0.65,rotation:11,x:696.6},7).to({regX:3.8,regY:41.1,scaleX:0.65,scaleY:0.65,rotation:15,x:711},7).to({regX:3.7,rotation:11.1,x:727,y:61.7},6).to({scaleX:0.65,scaleY:0.65,rotation:7.3,x:738,y:61.8},6).to({regX:3.8,scaleX:0.65,scaleY:0.65,rotation:3.5,x:752.2,y:61.7},6).to({regX:3.6,regY:40.9,rotation:0,x:763.5,y:61.6},6).wait(1).to({x:761},0).to({regY:41,rotation:3.3,x:777.1,y:61.8},5).to({rotation:7.1,x:789.6},5).to({scaleX:0.65,scaleY:0.65,rotation:11,x:799.3},5).to({regX:3.8,regY:41.1,scaleX:0.65,scaleY:0.65,rotation:15,x:813.7},5).to({regX:3.7,rotation:11.1,x:829.7,y:61.7},5).to({scaleX:0.65,scaleY:0.65,rotation:7.3,x:840.7,y:61.8},5).to({regX:3.8,scaleX:0.65,scaleY:0.65,rotation:3.5,x:854.9,y:61.7},5).to({regX:3.6,regY:40.9,rotation:0,x:866.2,y:61.6},5).wait(1).to({x:863.7},0).to({regY:41,rotation:3.3,x:879.8,y:61.8},5).to({rotation:7.1,x:892.3},5).to({scaleX:0.65,scaleY:0.65,rotation:11,x:902},6).to({regX:3.8,regY:41.1,scaleX:0.65,scaleY:0.65,rotation:15,x:916.4},5).to({regX:3.7,rotation:11.1,x:932.4,y:61.7},5).wait(1).to({regX:3.8,scaleX:0.65,scaleY:0.65,rotation:10.3,x:934.3,y:61.8},0).to({regX:3.7,rotation:7.3,x:943.4},4).to({regX:3.8,scaleX:0.65,scaleY:0.65,rotation:3.5,x:957.6,y:61.7},4).to({regX:3.6,regY:40.9,rotation:0,x:968.9,y:61.6},4).wait(1).to({x:967.7},0).to({regY:41,rotation:3.3,x:983.8,y:61.8},4).to({rotation:7.1,x:996.3},4).wait(1).to({regX:3.7,scaleX:0.65,scaleY:0.65,rotation:7.3,x:997.4},0).to({regX:3.6,rotation:11,x:1006},4).to({regX:3.8,regY:41.1,scaleX:0.65,scaleY:0.65,rotation:15,x:1020.4},4).wait(1).to({scaleX:0.65,scaleY:0.65,rotation:10.3,x:1033.3},0).to({regX:3.7,rotation:7.3,x:1042.4},4).to({regX:3.8,scaleX:0.65,scaleY:0.65,rotation:3.5,x:1056.6,y:61.7},4).to({regX:3.6,regY:40.9,rotation:0,x:1067.9,y:61.6},4).wait(1).to({x:1066.7},0).to({regY:41,rotation:3.3,x:1082.8,y:61.8},4).to({rotation:7.1,x:1095.3},4).wait(1).to({regX:3.7,scaleX:0.65,scaleY:0.65,rotation:7.3,x:1096.4},0).to({regX:3.6,rotation:11,x:1105},4).to({regX:3.8,regY:41.1,scaleX:0.65,scaleY:0.65,rotation:15,x:1119.4},4).wait(264));

	// brazo_izquierd0
	this.instance_2 = new lib.brazo_izquierdo_estatico();
	this.instance_2.parent = this;
	this.instance_2.setTransform(61.3,60.6,0.65,0.65,0,0,0,66.5,42.4);

	this.instance_3 = new lib.brazo_izquierdo_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(529.9,60.8,0.65,0.65,-15,0,0,66.7,42.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_2}]},26).to({state:[{t:this.instance_2}]},34).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_2}]},6).to({state:[{t:this.instance_2}]},6).to({state:[{t:this.instance_2}]},6).to({state:[{t:this.instance_2}]},6).to({state:[{t:this.instance_2}]},6).to({state:[{t:this.instance_2}]},6).to({state:[{t:this.instance_2}]},6).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},6).to({state:[{t:this.instance_2}]},7).to({state:[{t:this.instance_2}]},7).to({state:[{t:this.instance_2}]},7).to({state:[{t:this.instance_2}]},6).to({state:[{t:this.instance_2}]},6).to({state:[{t:this.instance_2}]},6).to({state:[{t:this.instance_2}]},6).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_2}]},6).to({state:[{t:this.instance_2}]},6).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_2}]},6).to({state:[{t:this.instance_2}]},6).to({state:[{t:this.instance_2}]},6).to({state:[{t:this.instance_2}]},6).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_2}]},6).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_2}]},6).to({state:[{t:this.instance_2}]},7).to({state:[{t:this.instance_2}]},7).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},7).to({state:[{t:this.instance_2}]},9).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},9).to({state:[{t:this.instance_2}]},11).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},112).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_2}]},6).to({state:[{t:this.instance_2}]},6).to({state:[{t:this.instance_2}]},6).to({state:[{t:this.instance_2}]},6).to({state:[{t:this.instance_2}]},6).to({state:[{t:this.instance_2}]},6).to({state:[{t:this.instance_2}]},6).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},6).to({state:[{t:this.instance_2}]},7).to({state:[{t:this.instance_2}]},7).to({state:[{t:this.instance_2}]},7).to({state:[{t:this.instance_2}]},6).to({state:[{t:this.instance_2}]},6).to({state:[{t:this.instance_2}]},6).to({state:[{t:this.instance_2}]},6).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_2}]},6).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_2}]},1).wait(263));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:42.5,rotation:-2,y:60.7},26).to({regY:42.4,rotation:0,y:60.6},34).to({regX:66.6,regY:42.5,rotation:-3.3,x:77.5},5).to({regX:66.7,rotation:-7.1,x:89.6,y:60.7},6).to({regY:42.6,scaleX:0.65,scaleY:0.65,rotation:-11,x:99.1,y:60.8},6).to({scaleX:0.65,scaleY:0.65,rotation:-15,x:116.5},6).to({rotation:-11.1,x:130.3,y:60.7},6).to({regX:66.8,scaleX:0.65,scaleY:0.65,rotation:-7.3,x:140.7},6).to({regY:42.7,scaleX:0.65,scaleY:0.65,rotation:-3.5,x:154.9},6).to({regX:66.5,regY:42.4,rotation:0,x:165.5,y:60.6},6).wait(1).to({x:165.3},0).to({regX:66.6,regY:42.5,rotation:-3.3,x:181.5},6).to({regX:66.7,rotation:-7.1,x:193.6,y:60.7},7).to({regY:42.6,scaleX:0.65,scaleY:0.65,rotation:-11,x:203.1,y:60.8},7).to({scaleX:0.65,scaleY:0.65,rotation:-15,x:220.5},7).to({rotation:-11.1,x:234.3,y:60.7},6).to({regX:66.8,scaleX:0.65,scaleY:0.65,rotation:-7.3,x:244.7},6).to({regY:42.7,scaleX:0.65,scaleY:0.65,rotation:-3.5,x:258.9},6).to({regX:66.5,regY:42.4,rotation:0,x:269.5,y:60.6},6).wait(1).to({x:268},0).to({regX:66.6,regY:42.5,rotation:-3.3,x:284.2},5).to({regX:66.7,rotation:-7.1,x:296.3,y:60.7},6).to({regY:42.6,scaleX:0.65,scaleY:0.65,rotation:-11,x:305.8,y:60.8},6).to({scaleX:0.65,scaleY:0.65,rotation:-15,x:323.2},5).to({rotation:-11.1,x:337,y:60.7},6).to({regX:66.8,scaleX:0.65,scaleY:0.65,rotation:-7.3,x:347.4},6).to({regY:42.7,scaleX:0.65,scaleY:0.65,rotation:-3.5,x:361.6},6).to({regX:66.5,regY:42.4,rotation:0,x:372.2,y:60.6},6).wait(1).to({x:370.7},0).to({regX:66.6,regY:42.5,rotation:-3.3,x:386.9},5).to({regX:66.7,rotation:-7.1,x:399,y:60.7},5).to({regY:42.6,scaleX:0.65,scaleY:0.65,rotation:-11,x:408.5,y:60.8},6).to({scaleX:0.65,scaleY:0.65,rotation:-15,x:425.9},5).to({rotation:-11.1,x:439.7,y:60.7},5).to({regX:66.8,scaleX:0.65,scaleY:0.65,rotation:-7.3,x:450.1},6).to({regY:42.7,scaleX:0.65,scaleY:0.65,rotation:-3.5,x:464.3},7).to({regX:66.5,regY:42.4,rotation:0,x:474.9,y:60.6},7).wait(1).to({x:474.7},0).to({regX:66.6,regY:42.5,rotation:-3.3,x:490.9},7).to({regX:66.7,rotation:-7.1,x:503,y:60.7},9).wait(1).to({regY:42.6,scaleX:0.65,scaleY:0.65,rotation:-7.3,x:503.9,y:60.8},0).to({rotation:-11,x:512.5},9).to({scaleX:0.65,scaleY:0.65,rotation:-15,x:529.9},11).to({_off:true},1).wait(112).to({_off:false,regX:66.5,regY:42.4,rotation:0,x:538.3,y:60.6},0).wait(1).to({regX:66.6,regY:42.5,rotation:-3.3,x:554.5},5).to({regX:66.7,rotation:-7.1,x:566.6,y:60.7},6).to({regY:42.6,scaleX:0.65,scaleY:0.65,rotation:-11,x:576.1,y:60.8},6).to({scaleX:0.65,scaleY:0.65,rotation:-15,x:593.5},6).to({rotation:-11.1,x:607.3,y:60.7},6).to({regX:66.8,scaleX:0.65,scaleY:0.65,rotation:-7.3,x:617.7},6).to({regY:42.7,scaleX:0.65,scaleY:0.65,rotation:-3.5,x:631.9},6).to({regX:66.5,regY:42.4,rotation:0,x:642.5,y:60.6},6).wait(1).to({x:642.3},0).to({regX:66.6,regY:42.5,rotation:-3.3,x:658.5},6).to({regX:66.7,rotation:-7.1,x:670.6,y:60.7},7).to({regY:42.6,scaleX:0.65,scaleY:0.65,rotation:-11,x:680.1,y:60.8},7).to({scaleX:0.65,scaleY:0.65,rotation:-15,x:697.5},7).to({rotation:-11.1,x:711.3,y:60.7},6).to({regX:66.8,scaleX:0.65,scaleY:0.65,rotation:-7.3,x:721.7},6).to({regY:42.7,scaleX:0.65,scaleY:0.65,rotation:-3.5,x:735.9},6).to({regX:66.5,regY:42.4,rotation:0,x:746.5,y:60.6},6).wait(1).to({x:745},0).to({regX:66.6,regY:42.5,rotation:-3.3,x:761.2},5).to({regX:66.7,rotation:-7.1,x:773.3,y:60.7},5).to({regY:42.6,scaleX:0.65,scaleY:0.65,rotation:-11,x:782.8,y:60.8},5).to({scaleX:0.65,scaleY:0.65,rotation:-15,x:800.2},5).to({rotation:-11.1,x:814,y:60.7},5).to({regX:66.8,scaleX:0.65,scaleY:0.65,rotation:-7.3,x:824.4},5).to({regY:42.7,scaleX:0.65,scaleY:0.65,rotation:-3.5,x:838.6},5).to({regX:66.5,regY:42.4,rotation:0,x:849.2,y:60.6},5).wait(1).to({x:847.7},0).to({regX:66.6,regY:42.5,rotation:-3.3,x:863.9},5).to({regX:66.7,rotation:-7.1,x:876,y:60.7},5).to({regY:42.6,scaleX:0.65,scaleY:0.65,rotation:-11,x:885.5,y:60.8},6).to({scaleX:0.65,scaleY:0.65,rotation:-15,x:902.9},5).to({rotation:-11.1,x:916.7,y:60.7},5).wait(1).to({scaleX:0.65,scaleY:0.65,rotation:-10.3,x:918.5},0).to({regX:66.8,rotation:-7.3,x:927.1},4).to({regY:42.7,scaleX:0.65,scaleY:0.65,rotation:-3.5,x:941.3},4).to({regX:66.5,regY:42.4,rotation:0,x:951.9,y:60.6},4).wait(1).to({x:951.7},0).to({regX:66.6,regY:42.5,rotation:-3.3,x:967.9},4).to({regX:66.7,rotation:-7.1,x:980,y:60.7},4).wait(1).to({regY:42.6,scaleX:0.65,scaleY:0.65,rotation:-7.3,x:980.9,y:60.8},0).to({rotation:-11,x:989.5},4).to({scaleX:0.65,scaleY:0.65,rotation:-15,x:1006.9},4).wait(1).to({scaleX:0.65,scaleY:0.65,rotation:-10.3,x:1017.5,y:60.7},0).to({regX:66.8,rotation:-7.3,x:1026.1},4).to({regY:42.7,scaleX:0.65,scaleY:0.65,rotation:-3.5,x:1040.3},4).to({regX:66.5,regY:42.4,rotation:0,x:1050.9,y:60.6},4).wait(1).to({x:1050.7},0).to({regX:66.6,regY:42.5,rotation:-3.3,x:1066.9},4).to({regX:66.7,rotation:-7.1,x:1079,y:60.7},4).wait(1).to({regY:42.6,scaleX:0.65,scaleY:0.65,rotation:-7.3,x:1079.9,y:60.8},0).to({rotation:-11,x:1088.5},4).to({scaleX:0.65,scaleY:0.65,rotation:-15,x:1105.9},4).wait(264));

	// pata frontal izquierda 1
	this.instance_4 = new lib.pata_frontal_izquierda_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(58.7,68.4,0.648,0.648,15.8,0,0,48.1,5.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(60).to({rotation:16.5,x:72.7},5).to({regX:48,regY:5,rotation:10.5,x:86.6,y:68.2},6).to({regX:47.9,rotation:11,x:95.4,y:67.9},6).to({regX:48,scaleX:0.65,scaleY:0.65,rotation:11.9,x:110.9,y:67.7},6).to({regX:47.8,regY:5.1,rotation:6,x:125.4},6).to({regY:5,scaleX:0.65,scaleY:0.65,rotation:16.3,x:137.3,y:68.2},6).to({regX:47.7,regY:4.9,rotation:13.5,x:149.4,y:67.5},6).to({rotation:0,x:163.7,y:67.4},6).wait(1).to({regX:48.1,regY:5.2,scaleX:0.65,scaleY:0.65,rotation:15.8,x:162.7,y:68.4},0).to({rotation:16.5,x:176.7},6).to({regX:48,regY:5,rotation:10.5,x:190.6,y:68.2},7).to({regX:47.9,rotation:11,x:199.4,y:67.9},7).to({regX:48,scaleX:0.65,scaleY:0.65,rotation:11.9,x:214.9,y:67.7},7).to({regX:47.8,regY:5.1,rotation:6,x:229.4},6).to({regY:5,scaleX:0.65,scaleY:0.65,rotation:16.3,x:241.3,y:68.2},6).to({regX:47.7,regY:4.9,rotation:13.5,x:253.4,y:67.5},6).to({rotation:0,x:267.7,y:67.4},6).wait(1).to({regX:48.1,regY:5.2,scaleX:0.65,scaleY:0.65,rotation:15.8,x:265.4,y:68.4},0).to({rotation:16.5,x:279.4},5).to({regX:48,regY:5,rotation:10.5,x:293.3,y:68.2},6).to({regX:47.9,rotation:11,x:302.1,y:67.9},6).to({regX:48,scaleX:0.65,scaleY:0.65,rotation:11.9,x:317.6,y:67.7},5).to({regX:47.8,regY:5.1,rotation:6,x:332.1},6).to({regY:5,scaleX:0.65,scaleY:0.65,rotation:16.3,x:344,y:68.2},6).to({regX:47.7,regY:4.9,rotation:13.5,x:356.1,y:67.5},6).to({rotation:0,x:370.4,y:67.4},6).wait(1).to({regX:48.1,regY:5.2,scaleX:0.65,scaleY:0.65,rotation:15.8,x:368.1,y:68.4},0).to({rotation:16.5,x:382.1},5).to({regX:48,regY:5,rotation:10.5,x:396,y:68.2},5).to({regX:47.9,rotation:11,x:404.8,y:67.9},6).to({regX:48,scaleX:0.65,scaleY:0.65,rotation:11.9,x:420.3,y:67.7},5).to({regX:47.8,regY:5.1,rotation:6,x:434.8},5).to({regY:5,scaleX:0.65,scaleY:0.65,rotation:16.3,x:446.7,y:68.2},6).to({regX:47.7,regY:4.9,rotation:13.5,x:458.8,y:67.5},7).to({rotation:0,x:473.1,y:67.4},7).wait(1).to({regX:48.1,regY:5.2,scaleX:0.65,scaleY:0.65,rotation:15.8,x:472.1,y:68.4},0).to({rotation:16.5,x:486.1},7).to({regX:48,regY:5,rotation:10.5,x:500,y:68.2},9).wait(1).to({regX:48.1,x:501,y:68.1},0).to({regX:47.9,rotation:11,x:508.8,y:67.9},9).to({regX:48,scaleX:0.65,scaleY:0.65,rotation:11.9,x:524.3,y:67.7},11).wait(113).to({regX:48.1,regY:5.2,scaleX:0.65,scaleY:0.65,rotation:15.8,x:535.7,y:68.4},0).wait(1).to({rotation:16.5,x:549.7},5).to({regX:48,regY:5,rotation:10.5,x:563.6,y:68.2},6).to({regX:47.9,rotation:11,x:572.4,y:67.9},6).to({regX:48,scaleX:0.65,scaleY:0.65,rotation:11.9,x:587.9,y:67.7},6).to({regX:47.8,regY:5.1,rotation:6,x:602.4},6).to({regY:5,scaleX:0.65,scaleY:0.65,rotation:16.3,x:614.3,y:68.2},6).to({regX:47.7,regY:4.9,rotation:13.5,x:626.4,y:67.5},6).to({rotation:0,x:640.7,y:67.4},6).wait(1).to({regX:48.1,regY:5.2,scaleX:0.65,scaleY:0.65,rotation:15.8,x:639.7,y:68.4},0).to({rotation:16.5,x:653.7},6).to({regX:48,regY:5,rotation:10.5,x:667.6,y:68.2},7).to({regX:47.9,rotation:11,x:676.4,y:67.9},7).to({regX:48,scaleX:0.65,scaleY:0.65,rotation:11.9,x:691.9,y:67.7},7).to({regX:47.8,regY:5.1,rotation:6,x:706.4},6).to({regY:5,scaleX:0.65,scaleY:0.65,rotation:16.3,x:718.3,y:68.2},6).to({regX:47.7,regY:4.9,rotation:13.5,x:730.4,y:67.5},6).to({rotation:0,x:744.7,y:67.4},6).wait(1).to({regX:48.1,regY:5.2,scaleX:0.65,scaleY:0.65,rotation:15.8,x:742.4,y:68.4},0).to({rotation:16.5,x:756.4},5).to({regX:48,regY:5,rotation:10.5,x:770.3,y:68.2},5).to({regX:47.9,rotation:11,x:779.1,y:67.9},5).to({regX:48,scaleX:0.65,scaleY:0.65,rotation:11.9,x:794.6,y:67.7},5).to({regX:47.8,regY:5.1,rotation:6,x:809.1},5).to({regY:5,scaleX:0.65,scaleY:0.65,rotation:16.3,x:821,y:68.2},5).to({regX:47.7,regY:4.9,rotation:13.5,x:833.1,y:67.5},5).to({rotation:0,x:847.4,y:67.4},5).wait(1).to({regX:48.1,regY:5.2,scaleX:0.65,scaleY:0.65,rotation:15.8,x:845.1,y:68.4},0).to({rotation:16.5,x:859.1},5).to({regX:48,regY:5,rotation:10.5,x:873,y:68.2},5).to({regX:47.9,rotation:11,x:881.8,y:67.9},6).to({regX:48,scaleX:0.65,scaleY:0.65,rotation:11.9,x:897.3,y:67.7},5).to({regX:47.8,regY:5.1,rotation:6,x:911.8},5).wait(1).to({regX:47.9,regY:5,rotation:7.6,x:913.8},0).to({regX:47.8,scaleX:0.65,scaleY:0.65,rotation:16.3,x:923.7,y:68.2},4).to({regX:47.7,regY:4.9,rotation:13.5,x:935.8,y:67.5},4).to({rotation:0,x:950.1,y:67.4},4).wait(1).to({regX:48.1,regY:5.2,scaleX:0.65,scaleY:0.65,rotation:15.8,x:949.1,y:68.4},0).to({rotation:16.5,x:963.1},4).to({regX:48,regY:5,rotation:10.5,x:977,y:68.2},4).wait(1).to({regX:48.1,x:978,y:68.1},0).to({regX:47.9,rotation:11,x:985.8,y:67.9},4).to({regX:48,scaleX:0.65,scaleY:0.65,rotation:11.9,x:1001.3,y:67.7},4).wait(1).to({regX:47.9,rotation:7.6,x:1012.8},0).to({regX:47.8,scaleX:0.65,scaleY:0.65,rotation:16.3,x:1022.7,y:68.2},4).to({regX:47.7,regY:4.9,rotation:13.5,x:1034.8,y:67.5},4).to({rotation:0,x:1049.1,y:67.4},4).wait(1).to({regX:48.1,regY:5.2,scaleX:0.65,scaleY:0.65,rotation:15.8,x:1048.1,y:68.4},0).to({rotation:16.5,x:1062.1},4).to({regX:48,regY:5,rotation:10.5,x:1076,y:68.2},4).wait(1).to({regX:48.1,x:1077,y:68.1},0).to({regX:47.9,rotation:11,x:1084.8,y:67.9},4).to({regX:48,scaleX:0.65,scaleY:0.65,rotation:11.9,x:1100.3,y:67.7},4).wait(264));

	// pata_frontal_izquierda 2
	this.instance_5 = new lib.pata_frontal_izquierda_2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(28.4,63.3,0.647,0.647,-8.4,0,0,43,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(60).to({regX:42.9,rotation:-40.3,x:42.8,y:63},5).to({regY:9.3,scaleX:0.65,scaleY:0.65,rotation:-57.5,x:57.2,y:64.9},6).to({regX:42.8,rotation:1.6,x:66.6,y:65.3},6).to({regX:42.6,scaleX:0.65,scaleY:0.65,rotation:-31.5,x:81.9,y:64.1},6).to({regX:42.8,rotation:-7.9,x:95,y:67.7},6).to({regX:42.6,regY:9.1,rotation:-4.9,x:108,y:62.6},6).to({scaleX:0.65,scaleY:0.65,rotation:-29.2,x:120.7,y:63.4},6).to({regY:9,rotation:0,x:134.3,y:70.7},6).wait(1).to({regX:43,regY:9.5,scaleX:0.65,scaleY:0.65,rotation:-8.4,x:132.4,y:63.3},0).to({regX:42.9,rotation:-40.3,x:146.8,y:63},6).to({regY:9.3,scaleX:0.65,scaleY:0.65,rotation:-57.5,x:161.2,y:64.9},7).to({regX:42.8,rotation:1.6,x:170.6,y:65.3},7).to({regX:42.6,scaleX:0.65,scaleY:0.65,rotation:-31.5,x:185.9,y:64.1},7).to({regX:42.8,rotation:-7.9,x:199,y:67.7},6).to({regX:42.6,regY:9.1,rotation:-4.9,x:212,y:62.6},6).to({scaleX:0.65,scaleY:0.65,rotation:-29.2,x:224.7,y:63.4},6).to({regY:9,rotation:0,x:238.3,y:70.7},6).wait(1).to({regX:43,regY:9.5,scaleX:0.65,scaleY:0.65,rotation:-8.4,x:235.1,y:63.3},0).to({regX:42.9,rotation:-40.3,x:249.5,y:63},5).to({regY:9.3,scaleX:0.65,scaleY:0.65,rotation:-57.5,x:263.9,y:64.9},6).to({regX:42.8,rotation:1.6,x:273.3,y:65.3},6).to({regX:42.6,scaleX:0.65,scaleY:0.65,rotation:-31.5,x:288.6,y:64.1},5).to({regX:42.8,rotation:-7.9,x:301.7,y:67.7},6).to({regX:42.6,regY:9.1,rotation:-4.9,x:314.7,y:62.6},6).to({scaleX:0.65,scaleY:0.65,rotation:-29.2,x:327.4,y:63.4},6).to({regY:9,rotation:0,x:341,y:70.7},6).wait(1).to({regX:43,regY:9.5,scaleX:0.65,scaleY:0.65,rotation:-8.4,x:337.8,y:63.3},0).to({regX:42.9,rotation:-40.3,x:352.2,y:63},5).to({regY:9.3,scaleX:0.65,scaleY:0.65,rotation:-57.5,x:366.6,y:64.9},5).to({regX:42.8,rotation:1.6,x:376,y:65.3},6).to({regX:42.6,scaleX:0.65,scaleY:0.65,rotation:-31.5,x:391.3,y:64.1},5).to({regX:42.8,rotation:-7.9,x:404.4,y:67.7},5).to({regX:42.6,regY:9.1,rotation:-4.9,x:417.4,y:62.6},6).to({scaleX:0.65,scaleY:0.65,rotation:-29.2,x:430.1,y:63.4},7).to({regY:9,rotation:0,x:443.7,y:70.7},7).wait(1).to({regX:43,regY:9.5,scaleX:0.65,scaleY:0.65,rotation:-8.4,x:441.8,y:63.3},0).to({regX:42.9,rotation:-40.3,x:456.2,y:63},7).to({regY:9.3,scaleX:0.65,scaleY:0.65,rotation:-57.5,x:470.6,y:64.9},9).wait(1).to({regY:9.5,scaleX:0.65,scaleY:0.65,rotation:-51.6,x:471.6,y:65},0).to({regX:42.8,regY:9.3,scaleX:0.65,scaleY:0.65,rotation:1.6,x:480,y:65.3},9).to({regX:42.6,scaleX:0.65,scaleY:0.65,rotation:-31.5,x:495.3,y:64.1},11).wait(113).to({regX:43,regY:9.5,scaleX:0.65,scaleY:0.65,rotation:-8.4,x:505.4,y:63.3},0).wait(1).to({rotation:-8.4},0).to({regX:42.9,rotation:-40.3,x:519.8,y:63},5).to({regY:9.3,scaleX:0.65,scaleY:0.65,rotation:-57.5,x:534.2,y:64.9},6).to({regX:42.8,rotation:1.6,x:543.6,y:65.3},6).to({regX:42.6,scaleX:0.65,scaleY:0.65,rotation:-31.5,x:558.9,y:64.1},6).to({regX:42.8,rotation:-7.9,x:572,y:67.7},6).to({regX:42.6,regY:9.1,rotation:-4.9,x:585,y:62.6},6).to({scaleX:0.65,scaleY:0.65,rotation:-29.2,x:597.7,y:63.4},6).to({regY:9,rotation:0,x:611.3,y:70.7},6).wait(1).to({regX:43,regY:9.5,scaleX:0.65,scaleY:0.65,rotation:-8.4,x:609.4,y:63.3},0).to({regX:42.9,rotation:-40.3,x:623.8,y:63},6).to({regY:9.3,scaleX:0.65,scaleY:0.65,rotation:-57.5,x:638.2,y:64.9},7).to({regX:42.8,rotation:1.6,x:647.6,y:65.3},7).to({regX:42.6,scaleX:0.65,scaleY:0.65,rotation:-31.5,x:662.9,y:64.1},7).to({regX:42.8,rotation:-7.9,x:676,y:67.7},6).to({regX:42.6,regY:9.1,rotation:-4.9,x:689,y:62.6},6).to({scaleX:0.65,scaleY:0.65,rotation:-29.2,x:701.7,y:63.4},6).to({regY:9,rotation:0,x:715.3,y:70.7},6).wait(1).to({regX:43,regY:9.5,scaleX:0.65,scaleY:0.65,rotation:-8.4,x:712.1,y:63.3},0).to({regX:42.9,rotation:-40.3,x:726.5,y:63},5).to({regY:9.3,scaleX:0.65,scaleY:0.65,rotation:-57.5,x:740.9,y:64.9},5).to({regX:42.8,rotation:1.6,x:750.3,y:65.3},5).to({regX:42.6,scaleX:0.65,scaleY:0.65,rotation:-31.5,x:765.6,y:64.1},5).to({regX:42.8,rotation:-7.9,x:778.7,y:67.7},5).to({regX:42.6,regY:9.1,rotation:-4.9,x:791.7,y:62.6},5).to({scaleX:0.65,scaleY:0.65,rotation:-29.2,x:804.4,y:63.4},5).to({regY:9,rotation:0,x:818,y:70.7},5).wait(1).to({regX:43,regY:9.5,scaleX:0.65,scaleY:0.65,rotation:-8.4,x:814.8,y:63.3},0).to({regX:42.9,rotation:-40.3,x:829.2,y:63},5).to({regY:9.3,scaleX:0.65,scaleY:0.65,rotation:-57.5,x:843.6,y:64.9},5).to({regX:42.8,rotation:1.6,x:853,y:65.3},6).to({regX:42.6,scaleX:0.65,scaleY:0.65,rotation:-31.5,x:868.3,y:64.1},5).to({regX:42.8,rotation:-7.9,x:881.4,y:67.7},5).wait(1).to({regY:9.2,rotation:-7.3,x:883.6,y:66.8},0).to({regX:42.6,regY:9.1,rotation:-4.9,x:894.4,y:62.6},4).to({scaleX:0.65,scaleY:0.65,rotation:-29.2,x:907.1,y:63.4},4).to({regY:9,rotation:0,x:920.7,y:70.7},4).wait(1).to({regX:43,regY:9.5,scaleX:0.65,scaleY:0.65,rotation:-8.4,x:918.8,y:63.3},0).to({regX:42.9,rotation:-40.3,x:933.2,y:63},4).to({regY:9.3,scaleX:0.65,scaleY:0.65,rotation:-57.5,x:947.6,y:64.9},4).wait(1).to({regY:9.5,scaleX:0.65,scaleY:0.65,rotation:-51.6,x:948.6,y:65},0).to({regX:42.8,regY:9.3,scaleX:0.65,scaleY:0.65,rotation:1.6,x:957,y:65.3},4).to({regX:42.6,scaleX:0.65,scaleY:0.65,rotation:-31.5,x:972.3,y:64.1},4).wait(1).to({regX:42.8,regY:9.2,rotation:-7.3,x:982.6,y:66.8},0).to({regX:42.6,regY:9.1,rotation:-4.9,x:993.4,y:62.6},4).to({scaleX:0.65,scaleY:0.65,rotation:-29.2,x:1006.1,y:63.4},4).to({regY:9,rotation:0,x:1019.7,y:70.7},4).wait(1).to({regX:43,regY:9.5,scaleX:0.65,scaleY:0.65,rotation:-8.4,x:1017.8,y:63.3},0).to({regX:42.9,rotation:-40.3,x:1032.2,y:63},4).to({regY:9.3,scaleX:0.65,scaleY:0.65,rotation:-57.5,x:1046.6,y:64.9},4).wait(1).to({regY:9.5,scaleX:0.65,scaleY:0.65,rotation:-51.6,x:1047.6,y:65},0).to({regX:42.8,regY:9.3,scaleX:0.65,scaleY:0.65,rotation:1.6,x:1056,y:65.3},4).to({regX:42.6,scaleX:0.65,scaleY:0.65,rotation:-31.5,x:1071.3,y:64.1},4).wait(264));

	// pata media izquierda 1
	this.instance_6 = new lib.pata_media_izquierda_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(59.9,70.6,0.65,0.65,0,0,0,48.1,4.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(60).to({regX:48.5,regY:5,scaleX:0.65,scaleY:0.65,rotation:3.2,x:76.5,y:71.3},5).to({regX:48.3,regY:4.9,rotation:1,x:89.4,y:71},6).to({regY:4.8,rotation:13,x:97.7,y:71.4},6).to({regY:4.9,rotation:1.8,x:115.1,y:71.6},6).to({regY:4.8,rotation:3.8,x:129.3,y:72.3},6).to({regX:48.2,regY:4.7,rotation:1.5,x:139.1,y:70.6},6).to({regX:48.1,regY:4.8,scaleX:0.65,scaleY:0.65,rotation:16.2,x:152.3,y:70.7},6).to({regY:4.7,rotation:0,x:163.9,y:70.6},6).wait(1).to({regX:48.5,regY:5,scaleX:0.65,scaleY:0.65,rotation:3.2,x:180.5,y:71.3},6).to({regX:48.3,regY:4.9,rotation:1,x:193.4,y:71},7).to({regY:4.8,rotation:13,x:201.7,y:71.4},7).to({regY:4.9,rotation:1.8,x:219.1,y:71.6},7).to({regY:4.8,rotation:3.8,x:233.3,y:72.3},6).to({regX:48.2,regY:4.7,rotation:1.5,x:243.1,y:70.6},6).to({regX:48.1,regY:4.8,scaleX:0.65,scaleY:0.65,rotation:16.2,x:256.3,y:70.7},6).to({regY:4.7,rotation:0,x:267.9,y:70.6},6).wait(1).to({x:266.6},0).to({regX:48.5,regY:5,scaleX:0.65,scaleY:0.65,rotation:3.2,x:283.2,y:71.3},5).to({regX:48.3,regY:4.9,rotation:1,x:296.1,y:71},6).to({regY:4.8,rotation:13,x:304.4,y:71.4},6).to({regY:4.9,rotation:1.8,x:321.8,y:71.6},5).to({regY:4.8,rotation:3.8,x:336,y:72.3},6).to({regX:48.2,regY:4.7,rotation:1.5,x:345.8,y:70.6},6).to({regX:48.1,regY:4.8,scaleX:0.65,scaleY:0.65,rotation:16.2,x:359,y:70.7},6).to({regY:4.7,rotation:0,x:370.6,y:70.6},6).wait(1).to({x:369.3},0).to({regX:48.5,regY:5,scaleX:0.65,scaleY:0.65,rotation:3.2,x:385.9,y:71.3},5).to({regX:48.3,regY:4.9,rotation:1,x:398.8,y:71},5).to({regY:4.8,rotation:13,x:407.1,y:71.4},6).to({regY:4.9,rotation:1.8,x:424.5,y:71.6},5).to({regY:4.8,rotation:3.8,x:438.7,y:72.3},5).to({regX:48.2,regY:4.7,rotation:1.5,x:448.5,y:70.6},6).to({regX:48.1,regY:4.8,scaleX:0.65,scaleY:0.65,rotation:16.2,x:461.7,y:70.7},7).to({regY:4.7,rotation:0,x:473.3,y:70.6},7).wait(1).to({regX:48.5,regY:5,scaleX:0.65,scaleY:0.65,rotation:3.2,x:489.9,y:71.3},7).to({regX:48.3,regY:4.9,rotation:1,x:502.8,y:71},9).wait(1).to({regX:48.4,regY:5,rotation:2,x:503.7,y:71.1},0).to({regX:48.3,regY:4.8,rotation:13,x:511.1,y:71.4},9).to({regY:4.9,rotation:1.8,x:528.5,y:71.6},11).wait(113).to({regX:48.1,regY:4.7,scaleX:0.65,scaleY:0.65,rotation:0,x:536.9,y:70.6},0).wait(1).to({regX:48.5,regY:5,scaleX:0.65,scaleY:0.65,rotation:3.2,x:553.5,y:71.3},5).to({regX:48.3,regY:4.9,rotation:1,x:566.4,y:71},6).to({regY:4.8,rotation:13,x:574.7,y:71.4},6).to({regY:4.9,rotation:1.8,x:592.1,y:71.6},6).to({regY:4.8,rotation:3.8,x:606.3,y:72.3},6).to({regX:48.2,regY:4.7,rotation:1.5,x:616.1,y:70.6},6).to({regX:48.1,regY:4.8,scaleX:0.65,scaleY:0.65,rotation:16.2,x:629.3,y:70.7},6).to({regY:4.7,rotation:0,x:640.9,y:70.6},6).wait(1).to({regX:48.5,regY:5,scaleX:0.65,scaleY:0.65,rotation:3.2,x:657.5,y:71.3},6).to({regX:48.3,regY:4.9,rotation:1,x:670.4,y:71},7).to({regY:4.8,rotation:13,x:678.7,y:71.4},7).to({regY:4.9,rotation:1.8,x:696.1,y:71.6},7).to({regY:4.8,rotation:3.8,x:710.3,y:72.3},6).to({regX:48.2,regY:4.7,rotation:1.5,x:720.1,y:70.6},6).to({regX:48.1,regY:4.8,scaleX:0.65,scaleY:0.65,rotation:16.2,x:733.3,y:70.7},6).to({regY:4.7,rotation:0,x:744.9,y:70.6},6).wait(1).to({x:743.6},0).to({regX:48.5,regY:5,scaleX:0.65,scaleY:0.65,rotation:3.2,x:760.2,y:71.3},5).to({regX:48.3,regY:4.9,rotation:1,x:773.1,y:71},5).to({regY:4.8,rotation:13,x:781.4,y:71.4},5).to({regY:4.9,rotation:1.8,x:798.8,y:71.6},5).to({regY:4.8,rotation:3.8,x:813,y:72.3},5).to({regX:48.2,regY:4.7,rotation:1.5,x:822.8,y:70.6},5).to({regX:48.1,regY:4.8,scaleX:0.65,scaleY:0.65,rotation:16.2,x:836,y:70.7},5).to({regY:4.7,rotation:0,x:847.6,y:70.6},5).wait(1).to({x:846.3},0).to({regX:48.5,regY:5,scaleX:0.65,scaleY:0.65,rotation:3.2,x:862.9,y:71.3},5).to({regX:48.3,regY:4.9,rotation:1,x:875.8,y:71},5).to({regY:4.8,rotation:13,x:884.1,y:71.4},6).to({regY:4.9,rotation:1.8,x:901.5,y:71.6},5).to({regY:4.8,rotation:3.8,x:915.7,y:72.3},5).wait(1).to({rotation:3.3,x:917.3,y:72.1},0).to({regX:48.2,regY:4.7,rotation:1.5,x:925.5,y:70.6},4).to({regX:48.1,regY:4.8,scaleX:0.65,scaleY:0.65,rotation:16.2,x:938.7,y:70.7},4).to({regY:4.7,rotation:0,x:950.3,y:70.6},4).wait(1).to({regX:48.5,regY:5,scaleX:0.65,scaleY:0.65,rotation:3.2,x:966.9,y:71.3},4).to({regX:48.3,regY:4.9,rotation:1,x:979.8,y:71},4).wait(1).to({regX:48.4,regY:5,rotation:2,x:980.7,y:71.1},0).to({regX:48.3,regY:4.8,rotation:13,x:988.1,y:71.4},4).to({regY:4.9,rotation:1.8,x:1005.5,y:71.6},4).wait(1).to({regY:4.8,rotation:3.3,x:1016.3,y:72.1},0).to({regX:48.2,regY:4.7,rotation:1.5,x:1024.5,y:70.6},4).to({regX:48.1,regY:4.8,scaleX:0.65,scaleY:0.65,rotation:16.2,x:1037.7,y:70.7},4).to({regY:4.7,rotation:0,x:1049.3,y:70.6},4).wait(1).to({regX:48.5,regY:5,scaleX:0.65,scaleY:0.65,rotation:3.2,x:1065.9,y:71.3},4).to({regX:48.3,regY:4.9,rotation:1,x:1078.8,y:71},4).wait(1).to({regX:48.4,regY:5,rotation:2,x:1079.7,y:71.1},0).to({regX:48.3,regY:4.8,rotation:13,x:1087.1,y:71.4},4).to({regY:4.9,rotation:1.8,x:1104.5,y:71.6},4).wait(1).to({rotation:1.8},0).wait(263));

	// pata_media_izquierda 2
	this.instance_7 = new lib.pata_media_izquierda_2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(33,75.9,0.648,0.648,-4.8,0,0,31.4,1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(60).to({regY:1,rotation:-18.5,x:48.1,y:74.5},5).to({regY:0.8,rotation:1.3,x:61.7,y:75.8},6).to({regX:31.3,regY:1,rotation:1.4,x:69.9,y:70.2},6).to({regY:0.8,scaleX:0.65,scaleY:0.65,rotation:-39,x:86.2,y:75.5},6).to({scaleX:0.65,scaleY:0.65,rotation:-23.5,x:100.1,y:76},6).to({rotation:-5,x:110.5,y:75.4},6).to({rotation:-5.4,x:123.9,y:67.7},6).to({regX:31.2,rotation:0,x:136.2,y:75.6},6).wait(1).to({regX:31.4,regY:1.1,scaleX:0.65,scaleY:0.65,rotation:-4.8,x:137,y:75.9},0).to({regY:1,rotation:-18.5,x:152.1,y:74.5},6).to({regY:0.8,rotation:1.3,x:165.7,y:75.8},7).to({regX:31.3,regY:1,rotation:1.4,x:173.9,y:70.2},7).to({regY:0.8,scaleX:0.65,scaleY:0.65,rotation:-39,x:190.2,y:75.5},7).to({scaleX:0.65,scaleY:0.65,rotation:-23.5,x:204.1,y:76},6).to({rotation:-5,x:214.5,y:75.4},6).to({rotation:-5.4,x:227.9,y:67.7},6).to({regX:31.2,rotation:0,x:240.2,y:75.6},6).wait(1).to({regX:31.4,regY:1.1,scaleX:0.65,scaleY:0.65,rotation:-4.8,x:239.7,y:75.9},0).to({regY:1,rotation:-18.5,x:254.8,y:74.5},5).to({regY:0.8,rotation:1.3,x:268.4,y:75.8},6).to({regX:31.3,regY:1,rotation:1.4,x:276.6,y:70.2},6).to({regY:0.8,scaleX:0.65,scaleY:0.65,rotation:-39,x:292.9,y:75.5},5).to({scaleX:0.65,scaleY:0.65,rotation:-23.5,x:306.8,y:76},6).to({rotation:-5,x:317.2,y:75.4},6).to({rotation:-5.4,x:330.6,y:67.7},6).to({regX:31.2,rotation:0,x:342.9,y:75.6},6).wait(1).to({regX:31.4,regY:1.1,scaleX:0.65,scaleY:0.65,rotation:-4.8,x:342.4,y:75.9},0).to({regY:1,rotation:-18.5,x:357.5,y:74.5},5).to({regY:0.8,rotation:1.3,x:371.1,y:75.8},5).to({regX:31.3,regY:1,rotation:1.4,x:379.3,y:70.2},6).to({regY:0.8,scaleX:0.65,scaleY:0.65,rotation:-39,x:395.6,y:75.5},5).to({scaleX:0.65,scaleY:0.65,rotation:-23.5,x:409.5,y:76},5).to({rotation:-5,x:419.9,y:75.4},6).to({rotation:-5.4,x:433.3,y:67.7},7).to({regX:31.2,rotation:0,x:445.6,y:75.6},7).wait(1).to({regX:31.4,regY:1.1,scaleX:0.65,scaleY:0.65,rotation:-4.8,x:446.4,y:75.9},0).to({regY:1,rotation:-18.5,x:461.5,y:74.5},7).to({regY:0.8,rotation:1.3,x:475.1,y:75.8},9).wait(1).to({regY:1,rotation:1.3,x:475.9,y:75.5},0).to({regX:31.3,rotation:1.4,x:483.3,y:70.2},9).to({regY:0.8,scaleX:0.65,scaleY:0.65,rotation:-39,x:499.6,y:75.5},11).wait(113).to({regX:31.4,regY:1.1,scaleX:0.65,scaleY:0.65,rotation:-4.8,x:510,y:75.9},0).wait(1).to({rotation:-4.8},0).to({regY:1,rotation:-18.5,x:525.1,y:74.5},5).to({regY:0.8,rotation:1.3,x:538.7,y:75.8},6).to({regX:31.3,regY:1,rotation:1.4,x:546.9,y:70.2},6).to({regY:0.8,scaleX:0.65,scaleY:0.65,rotation:-39,x:563.2,y:75.5},6).to({scaleX:0.65,scaleY:0.65,rotation:-23.5,x:577.1,y:76},6).to({rotation:-5,x:587.5,y:75.4},6).to({rotation:-5.4,x:600.9,y:67.7},6).to({regX:31.2,rotation:0,x:613.2,y:75.6},6).wait(1).to({regX:31.4,regY:1.1,scaleX:0.65,scaleY:0.65,rotation:-4.8,x:614,y:75.9},0).to({regY:1,rotation:-18.5,x:629.1,y:74.5},6).to({regY:0.8,rotation:1.3,x:642.7,y:75.8},7).to({regX:31.3,regY:1,rotation:1.4,x:650.9,y:70.2},7).to({regY:0.8,scaleX:0.65,scaleY:0.65,rotation:-39,x:667.2,y:75.5},7).to({scaleX:0.65,scaleY:0.65,rotation:-23.5,x:681.1,y:76},6).to({rotation:-5,x:691.5,y:75.4},6).to({rotation:-5.4,x:704.9,y:67.7},6).to({regX:31.2,rotation:0,x:717.2,y:75.6},6).wait(1).to({regX:31.4,regY:1.1,scaleX:0.65,scaleY:0.65,rotation:-4.8,x:716.7,y:75.9},0).to({regY:1,rotation:-18.5,x:731.8,y:74.5},5).to({regY:0.8,rotation:1.3,x:745.4,y:75.8},5).to({regX:31.3,regY:1,rotation:1.4,x:753.6,y:70.2},5).to({regY:0.8,scaleX:0.65,scaleY:0.65,rotation:-39,x:769.9,y:75.5},5).to({scaleX:0.65,scaleY:0.65,rotation:-23.5,x:783.8,y:76},5).to({rotation:-5,x:794.2,y:75.4},5).to({rotation:-5.4,x:807.6,y:67.7},5).to({regX:31.2,rotation:0,x:819.9,y:75.6},5).wait(1).to({regX:31.4,regY:1.1,scaleX:0.65,scaleY:0.65,rotation:-4.8,x:819.4,y:75.9},0).to({regY:1,rotation:-18.5,x:834.5,y:74.5},5).to({regY:0.8,rotation:1.3,x:848.1,y:75.8},5).to({regX:31.3,regY:1,rotation:1.4,x:856.3,y:70.2},6).to({regY:0.8,scaleX:0.65,scaleY:0.65,rotation:-39,x:872.6,y:75.5},5).to({scaleX:0.65,scaleY:0.65,rotation:-23.5,x:886.5,y:76},5).wait(1).to({scaleX:0.65,scaleY:0.65,rotation:-20.3,x:888.3,y:75.9},0).to({scaleX:0.65,scaleY:0.65,rotation:-5,x:896.9,y:75.4},4).to({rotation:-5.4,x:910.3,y:67.7},4).to({regX:31.2,rotation:0,x:922.6,y:75.6},4).wait(1).to({regX:31.4,regY:1.1,scaleX:0.65,scaleY:0.65,rotation:-4.8,x:923.4,y:75.9},0).to({regY:1,rotation:-18.5,x:938.5,y:74.5},4).to({regY:0.8,rotation:1.3,x:952.1,y:75.8},4).wait(1).to({regY:1,rotation:1.3,x:952.9,y:75.5},0).to({regX:31.3,rotation:1.4,x:960.3,y:70.2},4).to({regY:0.8,scaleX:0.65,scaleY:0.65,rotation:-39,x:976.6,y:75.5},4).wait(1).to({rotation:-20.3,x:987.3,y:75.9},0).to({scaleX:0.65,scaleY:0.65,rotation:-5,x:995.9,y:75.4},4).to({rotation:-5.4,x:1009.3,y:67.7},4).to({regX:31.2,rotation:0,x:1021.6,y:75.6},4).wait(1).to({regX:31.4,regY:1.1,scaleX:0.65,scaleY:0.65,rotation:-4.8,x:1022.4,y:75.9},0).to({regY:1,rotation:-18.5,x:1037.5,y:74.5},4).to({regY:0.8,rotation:1.3,x:1051.1,y:75.8},4).wait(1).to({regY:1,rotation:1.3,x:1051.9,y:75.5},0).to({regX:31.3,rotation:1.4,x:1059.3,y:70.2},4).to({regY:0.8,scaleX:0.65,scaleY:0.65,rotation:-39,x:1075.6,y:75.5},4).wait(264));

	// pata trasera izquierda 1
	this.instance_8 = new lib.pata_trasera_izquierda_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(61.9,72.2,0.65,0.65,0,0,0,42.9,3.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(60).to({regX:43.1,regY:3.6,scaleX:0.65,scaleY:0.65,rotation:-4,x:78.2,y:72.4},5).to({regY:3.7,rotation:21.5,x:88.8},6).to({regX:42.9,regY:3.6,rotation:0,x:101.5},6).to({rotation:-0.3,x:116.7,y:72.3},6).to({regX:43,rotation:-0.4,x:131.4},6).to({regY:3.5,scaleX:0.65,scaleY:0.65,rotation:18.2,x:140.8},6).to({regY:3.3,rotation:13,x:154.8,y:72.2},6).to({regX:42.9,regY:3.4,rotation:0,x:165.9},6).wait(1).to({regX:43.1,regY:3.6,scaleX:0.65,scaleY:0.65,rotation:-4,x:182.2,y:72.4},6).to({regY:3.7,rotation:21.5,x:192.8},7).to({regX:42.9,regY:3.6,rotation:0,x:205.5},7).to({rotation:-0.3,x:220.7,y:72.3},7).to({regX:43,rotation:-0.4,x:235.4},6).to({regY:3.5,scaleX:0.65,scaleY:0.65,rotation:18.2,x:244.8},6).to({regY:3.3,rotation:13,x:258.8,y:72.2},6).to({regX:42.9,regY:3.4,rotation:0,x:269.9},6).wait(1).to({x:268.6},0).to({regX:43.1,regY:3.6,scaleX:0.65,scaleY:0.65,rotation:-4,x:284.9,y:72.4},5).to({regY:3.7,rotation:21.5,x:295.5},6).to({regX:42.9,regY:3.6,rotation:0,x:308.2},6).to({rotation:-0.3,x:323.4,y:72.3},5).to({regX:43,rotation:-0.4,x:338.1},6).to({regY:3.5,scaleX:0.65,scaleY:0.65,rotation:18.2,x:347.5},6).to({regY:3.3,rotation:13,x:361.5,y:72.2},6).to({regX:42.9,regY:3.4,rotation:0,x:372.6},6).wait(1).to({x:371.3},0).to({regX:43.1,regY:3.6,scaleX:0.65,scaleY:0.65,rotation:-4,x:387.6,y:72.4},5).to({regY:3.7,rotation:21.5,x:398.2},5).to({regX:42.9,regY:3.6,rotation:0,x:410.9},6).to({rotation:-0.3,x:426.1,y:72.3},5).to({regX:43,rotation:-0.4,x:440.8},5).to({regY:3.5,scaleX:0.65,scaleY:0.65,rotation:18.2,x:450.2},6).to({regY:3.3,rotation:13,x:464.2,y:72.2},7).to({regX:42.9,regY:3.4,rotation:0,x:475.3},7).wait(1).to({regX:43.1,regY:3.6,scaleX:0.65,scaleY:0.65,rotation:-4,x:491.6,y:72.4},7).to({regY:3.7,rotation:21.5,x:502.2},9).wait(1).to({scaleX:0.65,scaleY:0.65,rotation:19.3,x:503.5},0).to({regX:42.9,regY:3.6,scaleX:0.65,scaleY:0.65,rotation:0,x:514.9},9).to({rotation:-0.3,x:530.1,y:72.3},11).wait(113).to({regY:3.4,scaleX:0.65,scaleY:0.65,rotation:0,x:538.9,y:72.2},0).wait(1).to({regX:43.1,regY:3.6,scaleX:0.65,scaleY:0.65,rotation:-4,x:555.2,y:72.4},5).to({regY:3.7,rotation:21.5,x:565.8},6).to({regX:42.9,regY:3.6,rotation:0,x:578.5},6).to({rotation:-0.3,x:593.7,y:72.3},6).to({regX:43,rotation:-0.4,x:608.4},6).to({regY:3.5,scaleX:0.65,scaleY:0.65,rotation:18.2,x:617.8},6).to({regY:3.3,rotation:13,x:631.8,y:72.2},6).to({regX:42.9,regY:3.4,rotation:0,x:642.9},6).wait(1).to({regX:43.1,regY:3.6,scaleX:0.65,scaleY:0.65,rotation:-4,x:659.2,y:72.4},6).to({regY:3.7,rotation:21.5,x:669.8},7).to({regX:42.9,regY:3.6,rotation:0,x:682.5},7).to({rotation:-0.3,x:697.7,y:72.3},7).to({regX:43,rotation:-0.4,x:712.4},6).to({regY:3.5,scaleX:0.65,scaleY:0.65,rotation:18.2,x:721.8},6).to({regY:3.3,rotation:13,x:735.8,y:72.2},6).to({regX:42.9,regY:3.4,rotation:0,x:746.9},6).wait(1).to({x:745.6},0).to({regX:43.1,regY:3.6,scaleX:0.65,scaleY:0.65,rotation:-4,x:761.9,y:72.4},5).to({regY:3.7,rotation:21.5,x:772.5},5).to({regX:42.9,regY:3.6,rotation:0,x:785.2},5).to({rotation:-0.3,x:800.4,y:72.3},5).to({regX:43,rotation:-0.4,x:815.1},5).to({regY:3.5,scaleX:0.65,scaleY:0.65,rotation:18.2,x:824.5},5).to({regY:3.3,rotation:13,x:838.5,y:72.2},5).to({regX:42.9,regY:3.4,rotation:0,x:849.6},5).wait(1).to({x:848.3},0).to({regX:43.1,regY:3.6,scaleX:0.65,scaleY:0.65,rotation:-4,x:864.6,y:72.4},5).to({regY:3.7,rotation:21.5,x:875.2},5).to({regX:42.9,regY:3.6,rotation:0,x:887.9},6).to({rotation:-0.3,x:903.1,y:72.3},5).to({regX:43,rotation:-0.4,x:917.8},5).wait(1).to({rotation:2.6,x:919.4,y:72.4},0).to({regY:3.5,scaleX:0.65,scaleY:0.65,rotation:18.2,x:927.2,y:72.3},4).to({regY:3.3,rotation:13,x:941.2,y:72.2},4).to({regX:42.9,regY:3.4,rotation:0,x:952.3},4).wait(1).to({regX:43.1,regY:3.6,scaleX:0.65,scaleY:0.65,rotation:-4,x:968.6,y:72.4},4).to({regY:3.7,rotation:21.5,x:979.2},4).wait(1).to({scaleX:0.65,scaleY:0.65,rotation:19.3,x:980.5},0).to({regX:42.9,regY:3.6,scaleX:0.65,scaleY:0.65,rotation:0,x:991.9},4).to({rotation:-0.3,x:1007.1,y:72.3},4).wait(1).to({regX:43,rotation:2.6,x:1018.4,y:72.4},0).to({regY:3.5,scaleX:0.65,scaleY:0.65,rotation:18.2,x:1026.2,y:72.3},4).to({regY:3.3,rotation:13,x:1040.2,y:72.2},4).to({regX:42.9,regY:3.4,rotation:0,x:1051.3},4).wait(1).to({regX:43.1,regY:3.6,scaleX:0.65,scaleY:0.65,rotation:-4,x:1067.6,y:72.4},4).to({regY:3.7,rotation:21.5,x:1078.2},4).wait(1).to({scaleX:0.65,scaleY:0.65,rotation:19.3,x:1079.5},0).to({regX:42.9,regY:3.6,scaleX:0.65,scaleY:0.65,rotation:0,x:1090.9},4).to({rotation:-0.3,x:1106.1,y:72.3},4).wait(264));

	// pata_trasera_izquierda 2
	this.instance_9 = new lib.pata_trasera_izquierda_2();
	this.instance_9.parent = this;
	this.instance_9.setTransform(38.6,84.4,0.65,0.65,0,0,0,29.7,2.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(60).to({regX:29.9,regY:2.4,scaleX:0.65,scaleY:0.65,rotation:-34.5,x:55.1,y:83.8},5).to({regY:2.3,rotation:18.7,x:63.3,y:73.9},6).to({regX:29.8,regY:2.4,rotation:-47.8,x:78.5,y:83.8},6).to({regY:2.3,scaleX:0.65,scaleY:0.65,rotation:-29,x:93.2,y:83.7},6).to({regX:29.9,regY:2.4,scaleX:0.65,scaleY:0.65,rotation:-4.3,x:107.7,y:83.8},6).to({regX:29.8,regY:2.2,rotation:-35.4,x:116.1,y:74.8},6).to({regX:29.7,regY:2.1,scaleX:0.65,scaleY:0.65,rotation:-32.9,x:129.5,y:76.7},6).to({rotation:0,x:142.6,y:84.4},6).wait(1).to({regX:29.9,regY:2.4,scaleX:0.65,scaleY:0.65,rotation:-34.5,x:159.1,y:83.8},6).to({regY:2.3,rotation:18.7,x:167.3,y:73.9},7).to({regX:29.8,regY:2.4,rotation:-47.8,x:182.5,y:83.8},7).to({regY:2.3,scaleX:0.65,scaleY:0.65,rotation:-29,x:197.2,y:83.7},7).to({regX:29.9,regY:2.4,scaleX:0.65,scaleY:0.65,rotation:-4.3,x:211.7,y:83.8},6).to({regX:29.8,regY:2.2,rotation:-35.4,x:220.1,y:74.8},6).to({regX:29.7,regY:2.1,scaleX:0.65,scaleY:0.65,rotation:-32.9,x:233.5,y:76.7},6).to({rotation:0,x:246.6,y:84.4},6).wait(1).to({x:245.3},0).to({regX:29.9,regY:2.4,scaleX:0.65,scaleY:0.65,rotation:-34.5,x:261.8,y:83.8},5).to({regY:2.3,rotation:18.7,x:270,y:73.9},6).to({regX:29.8,regY:2.4,rotation:-47.8,x:285.2,y:83.8},6).to({regY:2.3,scaleX:0.65,scaleY:0.65,rotation:-29,x:299.9,y:83.7},5).to({regX:29.9,regY:2.4,scaleX:0.65,scaleY:0.65,rotation:-4.3,x:314.4,y:83.8},6).to({regX:29.8,regY:2.2,rotation:-35.4,x:322.8,y:74.8},6).to({regX:29.7,regY:2.1,scaleX:0.65,scaleY:0.65,rotation:-32.9,x:336.2,y:76.7},6).to({rotation:0,x:349.3,y:84.4},6).wait(1).to({x:348},0).to({regX:29.9,regY:2.4,scaleX:0.65,scaleY:0.65,rotation:-34.5,x:364.5,y:83.8},5).to({regY:2.3,rotation:18.7,x:372.7,y:73.9},5).to({regX:29.8,regY:2.4,rotation:-47.8,x:387.9,y:83.8},6).to({regY:2.3,scaleX:0.65,scaleY:0.65,rotation:-29,x:402.6,y:83.7},5).to({regX:29.9,regY:2.4,scaleX:0.65,scaleY:0.65,rotation:-4.3,x:417.1,y:83.8},5).to({regX:29.8,regY:2.2,rotation:-35.4,x:425.5,y:74.8},6).to({regX:29.7,regY:2.1,scaleX:0.65,scaleY:0.65,rotation:-32.9,x:438.9,y:76.7},7).to({rotation:0,x:452,y:84.4},7).wait(1).to({regX:29.9,regY:2.4,scaleX:0.65,scaleY:0.65,rotation:-34.5,x:468.5,y:83.8},7).to({regY:2.3,rotation:18.7,x:476.7,y:73.9},9).wait(1).to({regX:30.1,rotation:12,x:478.4,y:74.9},0).to({regX:29.8,regY:2.4,rotation:-47.8,x:491.9,y:83.8},9).to({regY:2.3,scaleX:0.65,scaleY:0.65,rotation:-29,x:506.6,y:83.7},11).wait(113).to({regX:29.7,regY:2.1,scaleX:0.65,scaleY:0.65,rotation:0,x:515.6,y:84.4},0).wait(1).to({regX:29.9,regY:2.4,scaleX:0.65,scaleY:0.65,rotation:-34.5,x:532.1,y:83.8},5).to({regY:2.3,rotation:18.7,x:540.3,y:73.9},6).to({regX:29.8,regY:2.4,rotation:-47.8,x:555.5,y:83.8},6).to({regY:2.3,scaleX:0.65,scaleY:0.65,rotation:-29,x:570.2,y:83.7},6).to({regX:29.9,regY:2.4,scaleX:0.65,scaleY:0.65,rotation:-4.3,x:584.7,y:83.8},6).to({regX:29.8,regY:2.2,rotation:-35.4,x:593.1,y:74.8},6).to({regX:29.7,regY:2.1,scaleX:0.65,scaleY:0.65,rotation:-32.9,x:606.5,y:76.7},6).to({rotation:0,x:619.6,y:84.4},6).wait(1).to({regX:29.9,regY:2.4,scaleX:0.65,scaleY:0.65,rotation:-34.5,x:636.1,y:83.8},6).to({regY:2.3,rotation:18.7,x:644.3,y:73.9},7).to({regX:29.8,regY:2.4,rotation:-47.8,x:659.5,y:83.8},7).to({regY:2.3,scaleX:0.65,scaleY:0.65,rotation:-29,x:674.2,y:83.7},7).to({regX:29.9,regY:2.4,scaleX:0.65,scaleY:0.65,rotation:-4.3,x:688.7,y:83.8},6).to({regX:29.8,regY:2.2,rotation:-35.4,x:697.1,y:74.8},6).to({regX:29.7,regY:2.1,scaleX:0.65,scaleY:0.65,rotation:-32.9,x:710.5,y:76.7},6).to({rotation:0,x:723.6,y:84.4},6).wait(1).to({x:722.3},0).to({regX:29.9,regY:2.4,scaleX:0.65,scaleY:0.65,rotation:-34.5,x:738.8,y:83.8},5).to({regY:2.3,rotation:18.7,x:747,y:73.9},5).to({regX:29.8,regY:2.4,rotation:-47.8,x:762.2,y:83.8},5).to({regY:2.3,scaleX:0.65,scaleY:0.65,rotation:-29,x:776.9,y:83.7},5).to({regX:29.9,regY:2.4,scaleX:0.65,scaleY:0.65,rotation:-4.3,x:791.4,y:83.8},5).to({regX:29.8,regY:2.2,rotation:-35.4,x:799.8,y:74.8},5).to({regX:29.7,regY:2.1,scaleX:0.65,scaleY:0.65,rotation:-32.9,x:813.2,y:76.7},5).to({rotation:0,x:826.3,y:84.4},5).wait(1).to({x:825},0).to({regX:29.9,regY:2.4,scaleX:0.65,scaleY:0.65,rotation:-34.5,x:841.5,y:83.8},5).to({regY:2.3,rotation:18.7,x:849.7,y:73.9},5).to({regX:29.8,regY:2.4,rotation:-47.8,x:864.9,y:83.8},6).to({regY:2.3,scaleX:0.65,scaleY:0.65,rotation:-29,x:879.6,y:83.7},5).to({regX:29.9,regY:2.4,scaleX:0.65,scaleY:0.65,rotation:-4.3,x:894.1,y:83.8},5).wait(1).to({regY:2.5,scaleX:0.65,scaleY:0.65,rotation:-9.3,x:895.6,y:82.3},0).to({regX:29.8,regY:2.2,scaleX:0.65,scaleY:0.65,rotation:-35.4,x:902.5,y:74.8},4).to({regX:29.7,regY:2.1,scaleX:0.65,scaleY:0.65,rotation:-32.9,x:915.9,y:76.7},4).to({rotation:0,x:929,y:84.4},4).wait(1).to({regX:29.9,regY:2.4,scaleX:0.65,scaleY:0.65,rotation:-34.5,x:945.5,y:83.8},4).to({regY:2.3,rotation:18.7,x:953.7,y:73.9},4).wait(1).to({regX:30.1,rotation:12,x:955.4,y:74.9},0).to({regX:29.8,regY:2.4,rotation:-47.8,x:968.9,y:83.8},4).to({regY:2.3,scaleX:0.65,scaleY:0.65,rotation:-29,x:983.6,y:83.7},4).wait(1).to({regX:29.9,regY:2.5,rotation:-9.3,x:994.6,y:82.3},0).to({regX:29.8,regY:2.2,scaleX:0.65,scaleY:0.65,rotation:-35.4,x:1001.5,y:74.8},4).to({regX:29.7,regY:2.1,scaleX:0.65,scaleY:0.65,rotation:-32.9,x:1014.9,y:76.7},4).to({rotation:0,x:1028,y:84.4},4).wait(1).to({regX:29.9,regY:2.4,scaleX:0.65,scaleY:0.65,rotation:-34.5,x:1044.5,y:83.8},4).to({regY:2.3,rotation:18.7,x:1052.7,y:73.9},4).wait(1).to({regX:30.1,rotation:12,x:1054.4,y:74.9},0).to({regX:29.8,regY:2.4,rotation:-47.8,x:1067.9,y:83.8},4).to({regY:2.3,scaleX:0.65,scaleY:0.65,rotation:-29,x:1082.6,y:83.7},4).wait(264));

	// pata frontal derecha 1
	this.instance_10 = new lib.pata_drontal_derecha_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(75.7,67.1,0.646,0.646,-15.1,0,0,0.8,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(60).to({regX:0.7,scaleX:0.65,scaleY:0.65,x:92.4,y:67.5},5).to({rotation:-19,x:103.8},6).to({regX:0.5,regY:0.1,scaleX:0.65,scaleY:0.65,rotation:-7.8,x:113.8,y:67.7},6).to({regX:0.3,scaleX:0.65,scaleY:0.65,rotation:-13.4,x:130.2,y:66.9},6).to({rotation:10.2,x:141.7,y:64.2},6).to({regX:0.2,regY:0.2,rotation:-7,x:152.9,y:64.3},6).to({regX:0.1,regY:0.1,scaleX:0.65,scaleY:0.65,rotation:5.8,x:170,y:64.2},6).to({rotation:-8.5,x:184.7},6).wait(1).to({regX:0.8,regY:0.3,scaleX:0.65,scaleY:0.65,rotation:-15.1,x:179.7,y:67.1},0).to({regX:0.7,scaleX:0.65,scaleY:0.65,x:196.4,y:67.5},6).to({rotation:-19,x:207.8},7).to({regX:0.5,regY:0.1,scaleX:0.65,scaleY:0.65,rotation:-7.8,x:217.8,y:67.7},7).to({regX:0.3,scaleX:0.65,scaleY:0.65,rotation:-13.4,x:234.2,y:66.9},7).to({rotation:10.2,x:245.7,y:64.2},6).to({regX:0.2,regY:0.2,rotation:-7,x:256.9,y:64.3},6).to({regX:0.1,regY:0.1,scaleX:0.65,scaleY:0.65,rotation:5.8,x:274,y:64.2},6).to({rotation:-8.5,x:288.7},6).wait(1).to({regX:0.8,regY:0.3,scaleX:0.65,scaleY:0.65,rotation:-15.1,x:282.4,y:67.1},0).to({regX:0.7,scaleX:0.65,scaleY:0.65,x:299.1,y:67.5},5).to({rotation:-19,x:310.5},6).to({regX:0.5,regY:0.1,scaleX:0.65,scaleY:0.65,rotation:-7.8,x:320.5,y:67.7},6).to({regX:0.3,scaleX:0.65,scaleY:0.65,rotation:-13.4,x:336.9,y:66.9},5).to({rotation:10.2,x:348.4,y:64.2},6).to({regX:0.2,regY:0.2,rotation:-7,x:359.6,y:64.3},6).to({regX:0.1,regY:0.1,scaleX:0.65,scaleY:0.65,rotation:5.8,x:376.7,y:64.2},6).to({rotation:-8.5,x:391.4},6).wait(1).to({regX:0.8,regY:0.3,scaleX:0.65,scaleY:0.65,rotation:-15.1,x:385.1,y:67.1},0).to({regX:0.7,scaleX:0.65,scaleY:0.65,x:401.8,y:67.5},5).to({rotation:-19,x:413.2},5).to({regX:0.5,regY:0.1,scaleX:0.65,scaleY:0.65,rotation:-7.8,x:423.2,y:67.7},6).to({regX:0.3,scaleX:0.65,scaleY:0.65,rotation:-13.4,x:439.6,y:66.9},5).to({rotation:10.2,x:451.1,y:64.2},5).to({regX:0.2,regY:0.2,rotation:-7,x:462.3,y:64.3},6).to({regX:0.1,regY:0.1,scaleX:0.65,scaleY:0.65,rotation:5.8,x:479.4,y:64.2},7).to({rotation:-8.5,x:494.1},7).wait(1).to({regX:0.8,regY:0.3,scaleX:0.65,scaleY:0.65,rotation:-15.1,x:489.1,y:67.1},0).to({regX:0.7,scaleX:0.65,scaleY:0.65,x:505.8,y:67.5},7).to({rotation:-19,x:517.2},9).wait(1).to({regY:0.2,rotation:-17.8,x:518.3},0).to({regX:0.5,regY:0.1,scaleX:0.65,scaleY:0.65,rotation:-7.8,x:527.2,y:67.7},9).to({regX:0.3,scaleX:0.65,scaleY:0.65,rotation:-13.4,x:543.6,y:66.9},11).wait(113).to({regX:0.8,regY:0.3,scaleX:0.65,scaleY:0.65,rotation:-15.1,x:552.7,y:67.1},0).wait(1).to({regX:0.7,scaleX:0.65,scaleY:0.65,x:569.4,y:67.5},5).to({rotation:-19,x:580.8},6).to({regX:0.5,regY:0.1,scaleX:0.65,scaleY:0.65,rotation:-7.8,x:590.8,y:67.7},6).to({regX:0.3,scaleX:0.65,scaleY:0.65,rotation:-13.4,x:607.2,y:66.9},6).to({rotation:10.2,x:618.7,y:64.2},6).to({regX:0.2,regY:0.2,rotation:-7,x:629.9,y:64.3},6).to({regX:0.1,regY:0.1,scaleX:0.65,scaleY:0.65,rotation:5.8,x:647,y:64.2},6).to({rotation:-8.5,x:661.7},6).wait(1).to({regX:0.8,regY:0.3,scaleX:0.65,scaleY:0.65,rotation:-15.1,x:656.7,y:67.1},0).to({regX:0.7,scaleX:0.65,scaleY:0.65,x:673.4,y:67.5},6).to({rotation:-19,x:684.8},7).to({regX:0.5,regY:0.1,scaleX:0.65,scaleY:0.65,rotation:-7.8,x:694.8,y:67.7},7).to({regX:0.3,scaleX:0.65,scaleY:0.65,rotation:-13.4,x:711.2,y:66.9},7).to({rotation:10.2,x:722.7,y:64.2},6).to({regX:0.2,regY:0.2,rotation:-7,x:733.9,y:64.3},6).to({regX:0.1,regY:0.1,scaleX:0.65,scaleY:0.65,rotation:5.8,x:751,y:64.2},6).to({rotation:-8.5,x:765.7},6).wait(1).to({regX:0.8,regY:0.3,scaleX:0.65,scaleY:0.65,rotation:-15.1,x:759.4,y:67.1},0).to({regX:0.7,scaleX:0.65,scaleY:0.65,x:776.1,y:67.5},5).to({rotation:-19,x:787.5},5).to({regX:0.5,regY:0.1,scaleX:0.65,scaleY:0.65,rotation:-7.8,x:797.5,y:67.7},5).to({regX:0.3,scaleX:0.65,scaleY:0.65,rotation:-13.4,x:813.9,y:66.9},5).to({rotation:10.2,x:825.4,y:64.2},5).to({regX:0.2,regY:0.2,rotation:-7,x:836.6,y:64.3},5).to({regX:0.1,regY:0.1,scaleX:0.65,scaleY:0.65,rotation:5.8,x:853.7,y:64.2},5).to({rotation:-8.5,x:868.4},5).wait(1).to({regX:0.8,regY:0.3,scaleX:0.65,scaleY:0.65,rotation:-15.1,x:862.1,y:67.1},0).to({regX:0.7,scaleX:0.65,scaleY:0.65,x:878.8,y:67.5},5).to({rotation:-19,x:890.2},5).to({regX:0.5,regY:0.1,scaleX:0.65,scaleY:0.65,rotation:-7.8,x:900.2,y:67.7},6).to({regX:0.3,scaleX:0.65,scaleY:0.65,rotation:-13.4,x:916.6,y:66.9},5).to({regY:0,rotation:0,x:928.1,y:64.2},5).wait(1).to({regY:0.1,rotation:7.3,x:930,y:64.1},0).to({regX:0.2,regY:0.2,rotation:-7,x:939.3,y:64.3},4).to({regX:0.1,regY:0.1,scaleX:0.65,scaleY:0.65,rotation:5.8,x:956.4,y:64.2},4).to({rotation:-8.5,x:971.1},4).wait(1).to({regX:0.8,regY:0.3,scaleX:0.65,scaleY:0.65,rotation:-15.1,x:966.1,y:67.1},0).to({regX:0.7,scaleX:0.65,scaleY:0.65,x:982.8,y:67.5},4).to({rotation:-19,x:994.2},4).wait(1).to({regY:0.2,rotation:-17.8,x:995.3},0).to({regX:0.5,regY:0.1,scaleX:0.65,scaleY:0.65,rotation:-7.8,x:1004.2,y:67.7},4).to({regX:0.3,scaleX:0.65,scaleY:0.65,rotation:-13.4,x:1020.6,y:66.9},4).wait(1).to({rotation:7.3,x:1029,y:64.1},0).to({regX:0.2,regY:0.2,rotation:-7,x:1038.3,y:64.3},4).to({regX:0.1,regY:0.1,scaleX:0.65,scaleY:0.65,rotation:5.8,x:1055.4,y:64.2},4).to({rotation:-8.5,x:1070.1},4).wait(1).to({regX:0.8,regY:0.3,scaleX:0.65,scaleY:0.65,rotation:-15.1,x:1065.1,y:67.1},0).to({regX:0.7,scaleX:0.65,scaleY:0.65,x:1081.8,y:67.5},4).to({rotation:-19,x:1093.2},4).wait(1).to({regY:0.2,rotation:-17.8,x:1094.3},0).to({regX:0.5,regY:0.1,scaleX:0.65,scaleY:0.65,rotation:-7.8,x:1103.2,y:67.7},4).to({regX:0.3,scaleX:0.65,scaleY:0.65,rotation:-13.4,x:1119.6,y:66.9},4).wait(264));

	// pata_frontal_derecha 2
	this.instance_11 = new lib.pata_frontal_derecha_2();
	this.instance_11.parent = this;
	this.instance_11.setTransform(108.1,64.4,0.647,0.647,24.8,0,0,5.2,7.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(60).to({regY:7.5,scaleX:0.65,scaleY:0.65,rotation:51.3,x:124.8},5).to({regX:5.1,rotation:33,x:136,y:62.8},6).to({regX:4.9,rotation:4.5,x:145.7,y:68.7},6).to({regX:4.7,scaleX:0.65,scaleY:0.65,rotation:5.5,x:161.9,y:65},6).to({rotation:-9.3,x:170.1,y:74.6},6).to({regX:4.5,rotation:14.8,x:185.5,y:64.8},6).to({regX:4.4,regY:7.4,scaleX:0.65,scaleY:0.65,rotation:-10,x:202.3,y:73.9},6).to({regY:7.5,rotation:14.8,x:217.4,y:65.8},6).wait(1).to({regX:5.2,regY:7.6,scaleX:0.65,scaleY:0.65,rotation:24.8,x:212.1,y:64.4},0).to({regY:7.5,scaleX:0.65,scaleY:0.65,rotation:51.3,x:228.8},6).to({regX:5.1,rotation:33,x:240,y:62.8},7).to({regX:4.9,rotation:4.5,x:249.7,y:68.7},7).to({regX:4.7,scaleX:0.65,scaleY:0.65,rotation:5.5,x:265.9,y:65},7).to({rotation:-9.3,x:274.1,y:74.6},6).to({regX:4.5,rotation:14.8,x:289.5,y:64.8},6).to({regX:4.4,regY:7.4,scaleX:0.65,scaleY:0.65,rotation:-10,x:306.3,y:73.9},6).to({regY:7.5,rotation:14.8,x:321.4,y:65.8},6).wait(1).to({regX:5.2,regY:7.6,scaleX:0.65,scaleY:0.65,rotation:24.8,x:314.8,y:64.4},0).to({regY:7.5,scaleX:0.65,scaleY:0.65,rotation:51.3,x:331.5},5).to({regX:5.1,rotation:33,x:342.7,y:62.8},6).to({regX:4.9,rotation:4.5,x:352.4,y:68.7},6).to({regX:4.7,scaleX:0.65,scaleY:0.65,rotation:5.5,x:368.6,y:65},5).to({rotation:-9.3,x:376.8,y:74.6},6).to({regX:4.5,rotation:14.8,x:392.2,y:64.8},6).to({regX:4.4,regY:7.4,scaleX:0.65,scaleY:0.65,rotation:-10,x:409,y:73.9},6).to({regY:7.5,rotation:14.8,x:424.1,y:65.8},6).wait(1).to({regX:5.2,regY:7.6,scaleX:0.65,scaleY:0.65,rotation:24.8,x:417.5,y:64.4},0).to({regY:7.5,scaleX:0.65,scaleY:0.65,rotation:51.3,x:434.2},5).to({regX:5.1,rotation:33,x:445.4,y:62.8},5).to({regX:4.9,rotation:4.5,x:455.1,y:68.7},6).to({regX:4.7,scaleX:0.65,scaleY:0.65,rotation:5.5,x:471.3,y:65},5).to({rotation:-9.3,x:479.5,y:74.6},5).to({regX:4.5,rotation:14.8,x:494.9,y:64.8},6).to({regX:4.4,regY:7.4,scaleX:0.65,scaleY:0.65,rotation:-10,x:511.7,y:73.9},7).to({regY:7.5,rotation:14.8,x:526.8,y:65.8},7).wait(1).to({regX:5.2,regY:7.6,scaleX:0.65,scaleY:0.65,rotation:24.8,x:521.5,y:64.4},0).to({regY:7.5,scaleX:0.65,scaleY:0.65,rotation:51.3,x:538.2},7).to({regX:5.1,rotation:33,x:549.4,y:62.8},9).wait(1).to({regX:5.2,regY:7.7,scaleX:0.65,scaleY:0.65,rotation:30.1,x:550.4,y:63.5},0).to({regX:4.9,regY:7.5,scaleX:0.65,scaleY:0.65,rotation:4.5,x:559.1,y:68.7},9).to({regX:4.7,scaleX:0.65,scaleY:0.65,rotation:5.5,x:575.3,y:65},11).wait(113).to({regX:5.2,regY:7.6,scaleX:0.65,scaleY:0.65,rotation:24.8,x:585.1,y:64.4},0).wait(1).to({regY:7.5,scaleX:0.65,scaleY:0.65,rotation:51.3,x:601.8},5).to({regX:5.1,rotation:33,x:613,y:62.8},6).to({regX:4.9,rotation:4.5,x:622.7,y:68.7},6).to({regX:4.7,scaleX:0.65,scaleY:0.65,rotation:5.5,x:638.9,y:65},6).to({rotation:-9.3,x:647.1,y:74.6},6).to({regX:4.5,rotation:14.8,x:662.5,y:64.8},6).to({regX:4.4,regY:7.4,scaleX:0.65,scaleY:0.65,rotation:-10,x:679.3,y:73.9},6).to({regY:7.5,rotation:14.8,x:694.4,y:65.8},6).wait(1).to({regX:5.2,regY:7.6,scaleX:0.65,scaleY:0.65,rotation:24.8,x:689.1,y:64.4},0).to({regY:7.5,scaleX:0.65,scaleY:0.65,rotation:51.3,x:705.8},6).to({regX:5.1,rotation:33,x:717,y:62.8},7).to({regX:4.9,rotation:4.5,x:726.7,y:68.7},7).to({regX:4.7,scaleX:0.65,scaleY:0.65,rotation:5.5,x:742.9,y:65},7).to({rotation:-9.3,x:751.1,y:74.6},6).to({regX:4.5,rotation:14.8,x:766.5,y:64.8},6).to({regX:4.4,regY:7.4,scaleX:0.65,scaleY:0.65,rotation:-10,x:783.3,y:73.9},6).to({regY:7.5,rotation:14.8,x:798.4,y:65.8},6).wait(1).to({regX:5.2,regY:7.6,scaleX:0.65,scaleY:0.65,rotation:24.8,x:791.8,y:64.4},0).to({regY:7.5,scaleX:0.65,scaleY:0.65,rotation:51.3,x:808.5},5).to({regX:5.1,rotation:33,x:819.7,y:62.8},5).to({regX:4.9,rotation:4.5,x:829.4,y:68.7},5).to({regX:4.7,scaleX:0.65,scaleY:0.65,rotation:5.5,x:845.6,y:65},5).to({rotation:-9.3,x:853.8,y:74.6},5).to({regX:4.5,rotation:14.8,x:869.2,y:64.8},5).to({regX:4.4,regY:7.4,scaleX:0.65,scaleY:0.65,rotation:-10,x:886,y:73.9},5).to({regY:7.5,rotation:14.8,x:901.1,y:65.8},5).wait(1).to({regX:5.2,regY:7.6,scaleX:0.65,scaleY:0.65,rotation:24.8,x:894.5,y:64.4},0).to({regY:7.5,scaleX:0.65,scaleY:0.65,rotation:51.3,x:911.2},5).to({regX:5.1,rotation:33,x:922.4,y:62.8},5).to({regX:4.9,rotation:4.5,x:932.1,y:68.7},6).to({regX:4.7,scaleX:0.65,scaleY:0.65,rotation:5.5,x:948.3,y:65},5).to({rotation:15,x:959.3,y:68.5},5).wait(1).to({rotation:-5.3,x:959.1,y:73},0).to({regX:4.5,rotation:14.8,x:971.9,y:64.8},4).to({regX:4.4,regY:7.4,scaleX:0.65,scaleY:0.65,rotation:-10,x:988.7,y:73.9},4).to({regY:7.5,rotation:14.8,x:1003.8,y:65.8},4).wait(1).to({regX:5.2,regY:7.6,scaleX:0.65,scaleY:0.65,rotation:24.8,x:998.5,y:64.4},0).to({regY:7.5,scaleX:0.65,scaleY:0.65,rotation:51.3,x:1015.2},4).to({regX:5.1,rotation:33,x:1026.4,y:62.8},4).wait(1).to({regX:5.2,regY:7.7,scaleX:0.65,scaleY:0.65,rotation:30.1,x:1027.4,y:63.5},0).to({regX:4.9,regY:7.5,scaleX:0.65,scaleY:0.65,rotation:4.5,x:1036.1,y:68.7},4).to({regX:4.7,scaleX:0.65,scaleY:0.65,rotation:5.5,x:1052.3,y:65},4).wait(1).to({rotation:-5.3,x:1058.1,y:73},0).to({regX:4.5,rotation:14.8,x:1070.9,y:64.8},4).to({regX:4.4,regY:7.4,scaleX:0.65,scaleY:0.65,rotation:-10,x:1087.7,y:73.9},4).to({regY:7.5,rotation:14.8,x:1102.8,y:65.8},4).wait(1).to({regX:5.2,regY:7.6,scaleX:0.65,scaleY:0.65,rotation:24.8,x:1097.5,y:64.4},0).to({regY:7.5,scaleX:0.65,scaleY:0.65,rotation:51.3,x:1114.2},4).to({regX:5.1,rotation:33,x:1125.4,y:62.8},4).wait(1).to({regX:5.2,regY:7.7,scaleX:0.65,scaleY:0.65,rotation:30.1,x:1126.4,y:63.5},0).to({regX:4.9,regY:7.5,scaleX:0.65,scaleY:0.65,rotation:4.5,x:1135.1,y:68.7},4).to({regX:4.7,scaleX:0.65,scaleY:0.65,rotation:5.5,x:1151.3,y:65},4).wait(264));

	// pata media derecha 1
	this.instance_12 = new lib.pata_media_derecha_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(81.5,71,0.648,0.648,-3,0,0,1.6,3);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(60).to({regX:1.4,regY:2.8,rotation:-7.1,x:97.7,y:70.9},5).to({regY:2.6,rotation:-16,x:109.2,y:70.8},6).to({regX:1.3,scaleX:0.65,scaleY:0.65,rotation:-7.5,x:119.9},6).to({regX:1.2,regY:2.5,rotation:-8,x:136.5},6).to({rotation:-20.3,x:149.5,y:70.7},6).to({regY:2.3,rotation:-2.1,x:160},6).to({regX:1.1,regY:2.1,scaleX:0.65,scaleY:0.65,rotation:-11.2,x:175.1,y:70.9},6).to({rotation:0,x:185.3,y:70.5},6).wait(1).to({regX:1.6,regY:3,scaleX:0.65,scaleY:0.65,rotation:-3,x:185.5,y:71},0).to({regX:1.4,regY:2.8,rotation:-7.1,x:201.7,y:70.9},6).to({regY:2.6,rotation:-16,x:213.2,y:70.8},7).to({regX:1.3,scaleX:0.65,scaleY:0.65,rotation:-7.5,x:223.9},7).to({regX:1.2,regY:2.5,rotation:-8,x:240.5},7).to({rotation:-20.3,x:253.5,y:70.7},6).to({regY:2.3,rotation:-2.1,x:264},6).to({regX:1.1,regY:2.1,scaleX:0.65,scaleY:0.65,rotation:-11.2,x:279.1,y:70.9},6).to({rotation:0,x:289.3,y:70.5},6).wait(1).to({regX:1.6,regY:3,scaleX:0.65,scaleY:0.65,rotation:-3,x:288.2,y:71},0).to({regX:1.4,regY:2.8,rotation:-7.1,x:304.4,y:70.9},5).to({regY:2.6,rotation:-16,x:315.9,y:70.8},6).to({regX:1.3,scaleX:0.65,scaleY:0.65,rotation:-7.5,x:326.6},6).to({regX:1.2,regY:2.5,rotation:-8,x:343.2},5).to({rotation:-20.3,x:356.2,y:70.7},6).to({regY:2.3,rotation:-2.1,x:366.7},6).to({regX:1.1,regY:2.1,scaleX:0.65,scaleY:0.65,rotation:-11.2,x:381.8,y:70.9},6).to({rotation:0,x:392,y:70.5},6).wait(1).to({regX:1.6,regY:3,scaleX:0.65,scaleY:0.65,rotation:-3,x:390.9,y:71},0).to({regX:1.4,regY:2.8,rotation:-7.1,x:407.1,y:70.9},5).to({regY:2.6,rotation:-16,x:418.6,y:70.8},5).to({regX:1.3,scaleX:0.65,scaleY:0.65,rotation:-7.5,x:429.3},6).to({regX:1.2,regY:2.5,rotation:-8,x:445.9},5).to({rotation:-20.3,x:458.9,y:70.7},5).to({regY:2.3,rotation:-2.1,x:469.4},6).to({regX:1.1,regY:2.1,scaleX:0.65,scaleY:0.65,rotation:-11.2,x:484.5,y:70.9},7).to({rotation:0,x:494.7,y:70.5},7).wait(1).to({regX:1.6,regY:3,scaleX:0.65,scaleY:0.65,rotation:-3,x:494.9,y:71},0).to({regX:1.4,regY:2.8,rotation:-7.1,x:511.1,y:70.9},7).to({regY:2.6,rotation:-16,x:522.6,y:70.8},9).wait(1).to({regY:2.7,rotation:-15,x:523.7,y:70.9},0).to({regX:1.3,regY:2.6,scaleX:0.65,scaleY:0.65,rotation:-7.5,x:533.3,y:70.8},9).to({regX:1.2,regY:2.5,rotation:-8,x:549.9},11).wait(113).to({regX:1.6,regY:3,scaleX:0.65,scaleY:0.65,rotation:-3,x:558.5,y:71},0).wait(1).to({regX:1.4,regY:2.8,rotation:-7.1,x:574.7,y:70.9},5).to({regY:2.6,rotation:-16,x:586.2,y:70.8},6).to({regX:1.3,scaleX:0.65,scaleY:0.65,rotation:-7.5,x:596.9},6).to({regX:1.2,regY:2.5,rotation:-8,x:613.5},6).to({rotation:-20.3,x:626.5,y:70.7},6).to({regY:2.3,rotation:-2.1,x:637},6).to({regX:1.1,regY:2.1,scaleX:0.65,scaleY:0.65,rotation:-11.2,x:652.1,y:70.9},6).to({rotation:0,x:662.3,y:70.5},6).wait(1).to({regX:1.6,regY:3,scaleX:0.65,scaleY:0.65,rotation:-3,x:662.5,y:71},0).to({regX:1.4,regY:2.8,rotation:-7.1,x:678.7,y:70.9},6).to({regY:2.6,rotation:-16,x:690.2,y:70.8},7).to({regX:1.3,scaleX:0.65,scaleY:0.65,rotation:-7.5,x:700.9},7).to({regX:1.2,regY:2.5,rotation:-8,x:717.5},7).to({rotation:-20.3,x:730.5,y:70.7},6).to({regY:2.3,rotation:-2.1,x:741},6).to({regX:1.1,regY:2.1,scaleX:0.65,scaleY:0.65,rotation:-11.2,x:756.1,y:70.9},6).to({rotation:0,x:766.3,y:70.5},6).wait(1).to({regX:1.6,regY:3,scaleX:0.65,scaleY:0.65,rotation:-3,x:765.2,y:71},0).to({regX:1.4,regY:2.8,rotation:-7.1,x:781.4,y:70.9},5).to({regY:2.6,rotation:-16,x:792.9,y:70.8},5).to({regX:1.3,scaleX:0.65,scaleY:0.65,rotation:-7.5,x:803.6},5).to({regX:1.2,regY:2.5,rotation:-8,x:820.2},5).to({rotation:-20.3,x:833.2,y:70.7},5).to({regY:2.3,rotation:-2.1,x:843.7},5).to({regX:1.1,regY:2.1,scaleX:0.65,scaleY:0.65,rotation:-11.2,x:858.8,y:70.9},5).to({rotation:0,x:869,y:70.5},5).wait(1).to({regX:1.6,regY:3,scaleX:0.65,scaleY:0.65,rotation:-3,x:867.9,y:71},0).to({regX:1.4,regY:2.8,rotation:-7.1,x:884.1,y:70.9},5).to({regY:2.6,rotation:-16,x:895.6,y:70.8},5).to({regX:1.3,scaleX:0.65,scaleY:0.65,rotation:-7.5,x:906.3},6).to({regX:1.2,regY:2.5,rotation:-8,x:922.9},5).to({rotation:-20.3,x:935.9,y:70.7},5).wait(1).to({regY:2.6,rotation:-17.1,x:937.7,y:70.8},0).to({regY:2.3,rotation:-2.1,x:946.4,y:70.7},4).to({regX:1.1,regY:2.1,scaleX:0.65,scaleY:0.65,rotation:-11.2,x:961.5,y:70.9},4).to({rotation:0,x:971.7,y:70.5},4).wait(1).to({regX:1.6,regY:3,scaleX:0.65,scaleY:0.65,rotation:-3,x:971.9,y:71},0).to({regX:1.4,regY:2.8,rotation:-7.1,x:988.1,y:70.9},4).to({regY:2.6,rotation:-16,x:999.6,y:70.8},4).wait(1).to({regY:2.7,rotation:-15,x:1000.7,y:70.9},0).to({regX:1.3,regY:2.6,scaleX:0.65,scaleY:0.65,rotation:-7.5,x:1010.3,y:70.8},4).to({regX:1.2,regY:2.5,rotation:-8,x:1026.9},4).wait(1).to({regY:2.6,rotation:-17.1,x:1036.7},0).to({regY:2.3,rotation:-2.1,x:1045.4,y:70.7},4).to({regX:1.1,regY:2.1,scaleX:0.65,scaleY:0.65,rotation:-11.2,x:1060.5,y:70.9},4).to({rotation:0,x:1070.7,y:70.5},4).wait(1).to({regX:1.6,regY:3,scaleX:0.65,scaleY:0.65,rotation:-3,x:1070.9,y:71},0).to({regX:1.4,regY:2.8,rotation:-7.1,x:1087.1,y:70.9},4).to({regY:2.6,rotation:-16,x:1098.6,y:70.8},4).wait(1).to({regY:2.7,rotation:-15,x:1099.7,y:70.9},0).to({regX:1.3,regY:2.6,scaleX:0.65,scaleY:0.65,rotation:-7.5,x:1109.3,y:70.8},4).to({regX:1.2,regY:2.5,rotation:-8,x:1125.9},4).wait(264));

	// pata_media_derecha 2 
	this.instance_13 = new lib.pata_media_derecha_2();
	this.instance_13.parent = this;
	this.instance_13.setTransform(108.7,76.6,0.646,0.646,7.6,0,0,3.8,1.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(60).to({regX:3.7,regY:1.7,scaleX:0.65,scaleY:0.65,rotation:27.7,x:126.1,y:74},5).to({rotation:11.2,x:137.9,y:70.4},6).to({regX:3.6,regY:1.5,scaleX:0.65,scaleY:0.65,rotation:12.1,x:148.3,y:74.3},6).to({rotation:30.6,x:165.5,y:74.1},6).to({regX:3.5,regY:1.4,scaleX:0.65,scaleY:0.65,rotation:12,x:177.9,y:67.4},6).to({rotation:-0.2,x:188.4,y:77.5},6).to({regX:3.3,scaleX:0.65,scaleY:0.65,rotation:-2.5,x:203.5,y:73.3},6).to({regY:1.3,rotation:0,x:213.2,y:78.1},6).wait(1).to({regX:3.8,regY:1.9,scaleX:0.65,scaleY:0.65,rotation:7.6,x:212.7,y:76.6},0).to({regX:3.7,regY:1.7,scaleX:0.65,scaleY:0.65,rotation:27.7,x:230.1,y:74},6).to({rotation:11.2,x:241.9,y:70.4},7).to({regX:3.6,regY:1.5,scaleX:0.65,scaleY:0.65,rotation:12.1,x:252.3,y:74.3},7).to({rotation:30.6,x:269.5,y:74.1},7).to({regX:3.5,regY:1.4,scaleX:0.65,scaleY:0.65,rotation:12,x:281.9,y:67.4},6).to({rotation:-0.2,x:292.4,y:77.5},6).to({regX:3.3,scaleX:0.65,scaleY:0.65,rotation:-2.5,x:307.5,y:73.3},6).to({regY:1.3,rotation:0,x:317.2,y:78.1},6).wait(1).to({regX:3.8,regY:1.9,scaleX:0.65,scaleY:0.65,rotation:7.6,x:315.4,y:76.6},0).to({regX:3.7,regY:1.7,scaleX:0.65,scaleY:0.65,rotation:27.7,x:332.8,y:74},5).to({rotation:11.2,x:344.6,y:70.4},6).to({regX:3.6,regY:1.5,scaleX:0.65,scaleY:0.65,rotation:12.1,x:355,y:74.3},6).to({rotation:30.6,x:372.2,y:74.1},5).to({regX:3.5,regY:1.4,scaleX:0.65,scaleY:0.65,rotation:12,x:384.6,y:67.4},6).to({rotation:-0.2,x:395.1,y:77.5},6).to({regX:3.3,scaleX:0.65,scaleY:0.65,rotation:-2.5,x:410.2,y:73.3},6).to({regY:1.3,rotation:0,x:419.9,y:78.1},6).wait(1).to({regX:3.8,regY:1.9,scaleX:0.65,scaleY:0.65,rotation:7.6,x:418.1,y:76.6},0).to({regX:3.7,regY:1.7,scaleX:0.65,scaleY:0.65,rotation:27.7,x:435.5,y:74},5).to({rotation:11.2,x:447.3,y:70.4},5).to({regX:3.6,regY:1.5,scaleX:0.65,scaleY:0.65,rotation:12.1,x:457.7,y:74.3},6).to({rotation:30.6,x:474.9,y:74.1},5).to({regX:3.5,regY:1.4,scaleX:0.65,scaleY:0.65,rotation:12,x:487.3,y:67.4},5).to({rotation:-0.2,x:497.8,y:77.5},6).to({regX:3.3,scaleX:0.65,scaleY:0.65,rotation:-2.5,x:512.9,y:73.3},7).to({regY:1.3,rotation:0,x:522.6,y:78.1},7).wait(1).to({regX:3.8,regY:1.9,scaleX:0.65,scaleY:0.65,rotation:7.6,x:522.1,y:76.6},0).to({regX:3.7,regY:1.7,scaleX:0.65,scaleY:0.65,rotation:27.7,x:539.5,y:74},7).to({rotation:11.2,x:551.3,y:70.4},9).wait(1).to({regX:3.8,rotation:11.3,x:552.4,y:70.8},0).to({regX:3.6,regY:1.5,scaleX:0.65,scaleY:0.65,rotation:12.1,x:561.7,y:74.3},9).to({rotation:30.6,x:578.9,y:74.1},11).wait(113).to({regX:3.8,regY:1.9,scaleX:0.65,scaleY:0.65,rotation:7.6,x:585.7,y:76.6},0).wait(1).to({rotation:7.6},0).to({regX:3.7,regY:1.7,scaleX:0.65,scaleY:0.65,rotation:27.7,x:603.1,y:74},5).to({rotation:11.2,x:614.9,y:70.4},6).to({regX:3.6,regY:1.5,scaleX:0.65,scaleY:0.65,rotation:12.1,x:625.3,y:74.3},6).to({rotation:30.6,x:642.5,y:74.1},6).to({regX:3.5,regY:1.4,scaleX:0.65,scaleY:0.65,rotation:12,x:654.9,y:67.4},6).to({rotation:-0.2,x:665.4,y:77.5},6).to({regX:3.3,scaleX:0.65,scaleY:0.65,rotation:-2.5,x:680.5,y:73.3},6).to({regY:1.3,rotation:0,x:690.2,y:78.1},6).wait(1).to({regX:3.8,regY:1.9,scaleX:0.65,scaleY:0.65,rotation:7.6,x:689.7,y:76.6},0).to({regX:3.7,regY:1.7,scaleX:0.65,scaleY:0.65,rotation:27.7,x:707.1,y:74},6).to({rotation:11.2,x:718.9,y:70.4},7).to({regX:3.6,regY:1.5,scaleX:0.65,scaleY:0.65,rotation:12.1,x:729.3,y:74.3},7).to({rotation:30.6,x:746.5,y:74.1},7).to({regX:3.5,regY:1.4,scaleX:0.65,scaleY:0.65,rotation:12,x:758.9,y:67.4},6).to({rotation:-0.2,x:769.4,y:77.5},6).to({regX:3.3,scaleX:0.65,scaleY:0.65,rotation:-2.5,x:784.5,y:73.3},6).to({regY:1.3,rotation:0,x:794.2,y:78.1},6).wait(1).to({regX:3.8,regY:1.9,scaleX:0.65,scaleY:0.65,rotation:7.6,x:792.4,y:76.6},0).to({regX:3.7,regY:1.7,scaleX:0.65,scaleY:0.65,rotation:27.7,x:809.8,y:74},5).to({rotation:11.2,x:821.6,y:70.4},5).to({regX:3.6,regY:1.5,scaleX:0.65,scaleY:0.65,rotation:12.1,x:832,y:74.3},5).to({rotation:30.6,x:849.2,y:74.1},5).to({regX:3.5,regY:1.4,scaleX:0.65,scaleY:0.65,rotation:12,x:861.6,y:67.4},5).to({rotation:-0.2,x:872.1,y:77.5},5).to({regX:3.3,scaleX:0.65,scaleY:0.65,rotation:-2.5,x:887.2,y:73.3},5).to({regY:1.3,rotation:0,x:896.9,y:78.1},5).wait(1).to({regX:3.8,regY:1.9,scaleX:0.65,scaleY:0.65,rotation:7.6,x:895.1,y:76.6},0).to({regX:3.7,regY:1.7,scaleX:0.65,scaleY:0.65,rotation:27.7,x:912.5,y:74},5).to({rotation:11.2,x:924.3,y:70.4},5).to({regX:3.6,regY:1.5,scaleX:0.65,scaleY:0.65,rotation:12.1,x:934.7,y:74.3},6).to({rotation:30.6,x:951.9,y:74.1},5).to({regX:3.5,regY:1.4,scaleX:0.65,scaleY:0.65,rotation:12,x:964.3,y:67.4},5).wait(1).to({regX:3.6,regY:1.5,rotation:9.8,x:966.2,y:69.2},0).to({regX:3.5,regY:1.4,rotation:-0.2,x:974.8,y:77.5},4).to({regX:3.3,scaleX:0.65,scaleY:0.65,rotation:-2.5,x:989.9,y:73.3},4).to({regY:1.3,rotation:0,x:999.6,y:78.1},4).wait(1).to({regX:3.8,regY:1.9,scaleX:0.65,scaleY:0.65,rotation:7.6,x:999.1,y:76.6},0).to({regX:3.7,regY:1.7,scaleX:0.65,scaleY:0.65,rotation:27.7,x:1016.5,y:74},4).to({rotation:11.2,x:1028.3,y:70.4},4).wait(1).to({regX:3.8,rotation:11.3,x:1029.4,y:70.8},0).to({regX:3.6,regY:1.5,scaleX:0.65,scaleY:0.65,rotation:12.1,x:1038.7,y:74.3},4).to({rotation:30.6,x:1055.9,y:74.1},4).wait(1).to({scaleX:0.65,scaleY:0.65,rotation:9.8,x:1065.2,y:69.2},0).to({regX:3.5,regY:1.4,rotation:-0.2,x:1073.8,y:77.5},4).to({regX:3.3,scaleX:0.65,scaleY:0.65,rotation:-2.5,x:1088.9,y:73.3},4).to({regY:1.3,rotation:0,x:1098.6,y:78.1},4).wait(1).to({regX:3.8,regY:1.9,scaleX:0.65,scaleY:0.65,rotation:7.6,x:1098.1,y:76.6},0).to({regX:3.7,regY:1.7,scaleX:0.65,scaleY:0.65,rotation:27.7,x:1115.5,y:74},4).to({rotation:11.2,x:1127.3,y:70.4},4).wait(1).to({regX:3.8,rotation:11.3,x:1128.4,y:70.8},0).to({regX:3.6,regY:1.5,scaleX:0.65,scaleY:0.65,rotation:12.1,x:1137.7,y:74.3},4).to({rotation:30.6,x:1154.9,y:74.1},4).wait(264));

	// pata trasera derecha 1
	this.instance_14 = new lib.pata_trasera_derecha_1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(78.6,73.1,0.65,0.65,0,0,0,0.4,2.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(60).to({regX:0.8,regY:3.5,scaleX:0.65,scaleY:0.65,rotation:3.2,x:94,y:73.3},5).to({regY:3.3,rotation:-4.6,x:106.9},6).to({regX:0.7,scaleX:0.65,scaleY:0.65,rotation:-18.8,x:117,y:73.7},6).to({regX:0.6,regY:3.1,rotation:-2.8,x:134.5,y:73.1},6).to({rotation:-25.2,x:147.3,y:73},6).to({regX:0.5,regY:3,rotation:-1.3,x:156.1,y:73.1},6).to({regY:2.9,scaleX:0.65,scaleY:0.65,rotation:-14.7,x:172.2,y:73},6).to({regX:0.4,rotation:0,x:182.6,y:73.1},6).wait(1).to({regX:0.8,regY:3.5,scaleX:0.65,scaleY:0.65,rotation:3.2,x:198,y:73.3},6).to({regY:3.3,rotation:-4.6,x:210.9},7).to({regX:0.7,scaleX:0.65,scaleY:0.65,rotation:-18.8,x:221,y:73.7},7).to({regX:0.6,regY:3.1,rotation:-2.8,x:238.5,y:73.1},7).to({rotation:-25.2,x:251.3,y:73},6).to({regX:0.5,regY:3,rotation:-1.3,x:260.1,y:73.1},6).to({regY:2.9,scaleX:0.65,scaleY:0.65,rotation:-14.7,x:276.2,y:73},6).to({regX:0.4,rotation:0,x:286.6,y:73.1},6).wait(1).to({x:285.3},0).to({regX:0.8,regY:3.5,scaleX:0.65,scaleY:0.65,rotation:3.2,x:300.7,y:73.3},5).to({regY:3.3,rotation:-4.6,x:313.6},6).to({regX:0.7,scaleX:0.65,scaleY:0.65,rotation:-18.8,x:323.7,y:73.7},6).to({regX:0.6,regY:3.1,rotation:-2.8,x:341.2,y:73.1},5).to({rotation:-25.2,x:354,y:73},6).to({regX:0.5,regY:3,rotation:-1.3,x:362.8,y:73.1},6).to({regY:2.9,scaleX:0.65,scaleY:0.65,rotation:-14.7,x:378.9,y:73},6).to({regX:0.4,rotation:0,x:389.3,y:73.1},6).wait(1).to({x:388},0).to({regX:0.8,regY:3.5,scaleX:0.65,scaleY:0.65,rotation:3.2,x:403.4,y:73.3},5).to({regY:3.3,rotation:-4.6,x:416.3},5).to({regX:0.7,scaleX:0.65,scaleY:0.65,rotation:-18.8,x:426.4,y:73.7},6).to({regX:0.6,regY:3.1,rotation:-2.8,x:443.9,y:73.1},5).to({rotation:-25.2,x:456.7,y:73},5).to({regX:0.5,regY:3,rotation:-1.3,x:465.5,y:73.1},6).to({regY:2.9,scaleX:0.65,scaleY:0.65,rotation:-14.7,x:481.6,y:73},7).to({regX:0.4,rotation:0,x:492,y:73.1},7).wait(1).to({regX:0.8,regY:3.5,scaleX:0.65,scaleY:0.65,rotation:3.2,x:507.4,y:73.3},7).to({regY:3.3,rotation:-4.6,x:520.3},9).wait(1).to({regY:3.4,rotation:-6,x:521.4,y:73.4},0).to({regX:0.7,regY:3.3,scaleX:0.65,scaleY:0.65,rotation:-18.8,x:530.4,y:73.7},9).to({regX:0.6,regY:3.1,rotation:-2.8,x:547.9,y:73.1},11).wait(113).to({regX:0.4,regY:2.9,scaleX:0.65,scaleY:0.65,rotation:0,x:555.6},0).wait(1).to({regX:0.8,regY:3.5,scaleX:0.65,scaleY:0.65,rotation:3.2,x:571,y:73.3},5).to({regY:3.3,rotation:-4.6,x:583.9},6).to({regX:0.7,scaleX:0.65,scaleY:0.65,rotation:-18.8,x:594,y:73.7},6).to({regX:0.6,regY:3.1,rotation:-2.8,x:611.5,y:73.1},6).to({rotation:-25.2,x:624.3,y:73},6).to({regX:0.5,regY:3,rotation:-1.3,x:633.1,y:73.1},6).to({regY:2.9,scaleX:0.65,scaleY:0.65,rotation:-14.7,x:649.2,y:73},6).to({regX:0.4,rotation:0,x:659.6,y:73.1},6).wait(1).to({regX:0.8,regY:3.5,scaleX:0.65,scaleY:0.65,rotation:3.2,x:675,y:73.3},6).to({regY:3.3,rotation:-4.6,x:687.9},7).to({regX:0.7,scaleX:0.65,scaleY:0.65,rotation:-18.8,x:698,y:73.7},7).to({regX:0.6,regY:3.1,rotation:-2.8,x:715.5,y:73.1},7).to({rotation:-25.2,x:728.3,y:73},6).to({regX:0.5,regY:3,rotation:-1.3,x:737.1,y:73.1},6).to({regY:2.9,scaleX:0.65,scaleY:0.65,rotation:-14.7,x:753.2,y:73},6).to({regX:0.4,rotation:0,x:763.6,y:73.1},6).wait(1).to({x:762.3},0).to({regX:0.8,regY:3.5,scaleX:0.65,scaleY:0.65,rotation:3.2,x:777.7,y:73.3},5).to({regY:3.3,rotation:-4.6,x:790.6},5).to({regX:0.7,scaleX:0.65,scaleY:0.65,rotation:-18.8,x:800.7,y:73.7},5).to({regX:0.6,regY:3.1,rotation:-2.8,x:818.2,y:73.1},5).to({rotation:-25.2,x:831,y:73},5).to({regX:0.5,regY:3,rotation:-1.3,x:839.8,y:73.1},5).to({regY:2.9,scaleX:0.65,scaleY:0.65,rotation:-14.7,x:855.9,y:73},5).to({regX:0.4,rotation:0,x:866.3,y:73.1},5).wait(1).to({x:865},0).to({regX:0.8,regY:3.5,scaleX:0.65,scaleY:0.65,rotation:3.2,x:880.4,y:73.3},5).to({regY:3.3,rotation:-4.6,x:893.3},5).to({regX:0.7,scaleX:0.65,scaleY:0.65,rotation:-18.8,x:903.4,y:73.7},6).to({regX:0.6,regY:3.1,rotation:-2.8,x:920.9,y:73.1},5).to({rotation:-25.2,x:933.7,y:73},5).wait(1).to({regY:3.3,rotation:-21.1,x:935.3,y:73.2},0).to({regX:0.5,regY:3,rotation:-1.3,x:942.5,y:73.1},4).to({regY:2.9,scaleX:0.65,scaleY:0.65,rotation:-14.7,x:958.6,y:73},4).to({regX:0.4,rotation:0,x:969,y:73.1},4).wait(1).to({regX:0.8,regY:3.5,scaleX:0.65,scaleY:0.65,rotation:3.2,x:984.4,y:73.3},4).to({regY:3.3,rotation:-4.6,x:997.3},4).wait(1).to({regY:3.4,rotation:-6,x:998.4,y:73.4},0).to({regX:0.7,regY:3.3,scaleX:0.65,scaleY:0.65,rotation:-18.8,x:1007.4,y:73.7},4).to({regX:0.6,regY:3.1,rotation:-2.8,x:1024.9,y:73.1},4).wait(1).to({regY:3.3,rotation:-21.1,x:1034.3,y:73.2},0).to({regX:0.5,regY:3,rotation:-1.3,x:1041.5,y:73.1},4).to({regY:2.9,scaleX:0.65,scaleY:0.65,rotation:-14.7,x:1057.6,y:73},4).to({regX:0.4,rotation:0,x:1068,y:73.1},4).wait(1).to({regX:0.8,regY:3.5,scaleX:0.65,scaleY:0.65,rotation:3.2,x:1083.4,y:73.3},4).to({regY:3.3,rotation:-4.6,x:1096.3},4).wait(1).to({regY:3.4,rotation:-6,x:1097.4,y:73.4},0).to({regX:0.7,regY:3.3,scaleX:0.65,scaleY:0.65,rotation:-18.8,x:1106.4,y:73.7},4).to({regX:0.6,regY:3.1,rotation:-2.8,x:1123.9,y:73.1},4).wait(1).to({rotation:-2.8},0).wait(263));

	// pata_trasera_derecha 2
	this.instance_15 = new lib.pata_trasera_derecha_2();
	this.instance_15.parent = this;
	this.instance_15.setTransform(101.7,83.7,0.65,0.65,0,0,0,5.7,1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(60).to({regX:6.3,regY:1.4,scaleX:0.65,scaleY:0.65,rotation:13.9,x:116.6,y:86.3},5).to({regX:6.1,regY:1.3,rotation:18.3,x:132.1,y:82.2},6).to({scaleX:0.65,scaleY:0.65,rotation:23.5,x:143.9,y:75.6},6).to({regX:6,regY:1.1,scaleX:0.65,scaleY:0.65,rotation:19.5,x:159.2,y:82.2},6).to({regX:5.9,regY:1.2,rotation:18.5,x:173.3,y:71.9},6).to({regY:1,scaleX:0.65,scaleY:0.65,rotation:51.3,x:180.9,y:83},6).to({regX:5.8,regY:1.1,scaleX:0.65,scaleY:0.65,rotation:32.7,x:198.1,y:77.5},6).to({regX:5.7,rotation:0,x:205.7,y:83.7},6).wait(1).to({regX:6.3,regY:1.4,scaleX:0.65,scaleY:0.65,rotation:13.9,x:220.6,y:86.3},6).to({regX:6.1,regY:1.3,rotation:18.3,x:236.1,y:82.2},7).to({scaleX:0.65,scaleY:0.65,rotation:23.5,x:247.9,y:75.6},7).to({regX:6,regY:1.1,scaleX:0.65,scaleY:0.65,rotation:19.5,x:263.2,y:82.2},7).to({regX:5.9,regY:1.2,rotation:18.5,x:277.3,y:71.9},6).to({regY:1,scaleX:0.65,scaleY:0.65,rotation:51.3,x:284.9,y:83},6).to({regX:5.8,regY:1.1,scaleX:0.65,scaleY:0.65,rotation:32.7,x:302.1,y:77.5},6).to({regX:5.7,rotation:0,x:309.7,y:83.7},6).wait(1).to({x:308.4},0).to({regX:6.3,regY:1.4,scaleX:0.65,scaleY:0.65,rotation:13.9,x:323.3,y:86.3},5).to({regX:6.1,regY:1.3,rotation:18.3,x:338.8,y:82.2},6).to({scaleX:0.65,scaleY:0.65,rotation:23.5,x:350.6,y:75.6},6).to({regX:6,regY:1.1,scaleX:0.65,scaleY:0.65,rotation:19.5,x:365.9,y:82.2},5).to({regX:5.9,regY:1.2,rotation:18.5,x:380,y:71.9},6).to({regY:1,scaleX:0.65,scaleY:0.65,rotation:51.3,x:387.6,y:83},6).to({regX:5.8,regY:1.1,scaleX:0.65,scaleY:0.65,rotation:32.7,x:404.8,y:77.5},6).to({regX:5.7,rotation:0,x:412.4,y:83.7},6).wait(1).to({x:411.1},0).to({regX:6.3,regY:1.4,scaleX:0.65,scaleY:0.65,rotation:13.9,x:426,y:86.3},5).to({regX:6.1,regY:1.3,rotation:18.3,x:441.5,y:82.2},5).to({scaleX:0.65,scaleY:0.65,rotation:23.5,x:453.3,y:75.6},6).to({regX:6,regY:1.1,scaleX:0.65,scaleY:0.65,rotation:19.5,x:468.6,y:82.2},5).to({regX:5.9,regY:1.2,rotation:18.5,x:482.7,y:71.9},5).to({regY:1,scaleX:0.65,scaleY:0.65,rotation:51.3,x:490.3,y:83},6).to({regX:5.8,regY:1.1,scaleX:0.65,scaleY:0.65,rotation:32.7,x:507.5,y:77.5},7).to({regX:5.7,rotation:0,x:515.1,y:83.7},7).wait(1).to({regX:6.3,regY:1.4,scaleX:0.65,scaleY:0.65,rotation:13.9,x:530,y:86.3},7).to({regX:6.1,regY:1.3,rotation:18.3,x:545.5,y:82.2},9).wait(1).to({regX:6.3,rotation:18.8,x:546.8,y:81.6},0).to({regX:6.1,scaleX:0.65,scaleY:0.65,rotation:23.5,x:557.3,y:75.6},9).to({regX:6,regY:1.1,scaleX:0.65,scaleY:0.65,rotation:19.5,x:572.6,y:82.2},11).wait(113).to({regX:5.7,scaleX:0.65,scaleY:0.65,rotation:0,x:578.7,y:83.7},0).wait(1).to({regX:6.3,regY:1.4,scaleX:0.65,scaleY:0.65,rotation:13.9,x:593.6,y:86.3},5).to({regX:6.1,regY:1.3,rotation:18.3,x:609.1,y:82.2},6).to({scaleX:0.65,scaleY:0.65,rotation:23.5,x:620.9,y:75.6},6).to({regX:6,regY:1.1,scaleX:0.65,scaleY:0.65,rotation:19.5,x:636.2,y:82.2},6).to({regX:5.9,regY:1.2,rotation:18.5,x:650.3,y:71.9},6).to({regY:1,scaleX:0.65,scaleY:0.65,rotation:51.3,x:657.9,y:83},6).to({regX:5.8,regY:1.1,scaleX:0.65,scaleY:0.65,rotation:32.7,x:675.1,y:77.5},6).to({regX:5.7,rotation:0,x:682.7,y:83.7},6).wait(1).to({regX:6.3,regY:1.4,scaleX:0.65,scaleY:0.65,rotation:13.9,x:697.6,y:86.3},6).to({regX:6.1,regY:1.3,rotation:18.3,x:713.1,y:82.2},7).to({scaleX:0.65,scaleY:0.65,rotation:23.5,x:724.9,y:75.6},7).to({regX:6,regY:1.1,scaleX:0.65,scaleY:0.65,rotation:19.5,x:740.2,y:82.2},7).to({regX:5.9,regY:1.2,rotation:18.5,x:754.3,y:71.9},6).to({regY:1,scaleX:0.65,scaleY:0.65,rotation:51.3,x:761.9,y:83},6).to({regX:5.8,regY:1.1,scaleX:0.65,scaleY:0.65,rotation:32.7,x:779.1,y:77.5},6).to({regX:5.7,rotation:0,x:786.7,y:83.7},6).wait(1).to({x:785.4},0).to({regX:6.3,regY:1.4,scaleX:0.65,scaleY:0.65,rotation:13.9,x:800.3,y:86.3},5).to({regX:6.1,regY:1.3,rotation:18.3,x:815.8,y:82.2},5).to({scaleX:0.65,scaleY:0.65,rotation:23.5,x:827.6,y:75.6},5).to({regX:6,regY:1.1,scaleX:0.65,scaleY:0.65,rotation:19.5,x:842.9,y:82.2},5).to({regX:5.9,regY:1.2,rotation:18.5,x:857,y:71.9},5).to({regY:1,scaleX:0.65,scaleY:0.65,rotation:51.3,x:864.6,y:83},5).to({regX:5.8,regY:1.1,scaleX:0.65,scaleY:0.65,rotation:32.7,x:881.8,y:77.5},5).to({regX:5.7,rotation:0,x:889.4,y:83.7},5).wait(1).to({x:888.1},0).to({regX:6.3,regY:1.4,scaleX:0.65,scaleY:0.65,rotation:13.9,x:903,y:86.3},5).to({regX:6.1,regY:1.3,rotation:18.3,x:918.5,y:82.2},5).to({scaleX:0.65,scaleY:0.65,rotation:23.5,x:930.3,y:75.6},6).to({regX:6,regY:1.1,scaleX:0.65,scaleY:0.65,rotation:19.5,x:945.6,y:82.2},5).to({regX:5.9,regY:1.2,rotation:18.5,x:959.7,y:71.9},5).wait(1).to({rotation:23.8,x:961,y:73.8},0).to({regY:1,scaleX:0.65,scaleY:0.65,rotation:51.3,x:967.3,y:83},4).to({regX:5.8,regY:1.1,scaleX:0.65,scaleY:0.65,rotation:32.7,x:984.5,y:77.5},4).to({regX:5.7,rotation:0,x:992.1,y:83.7},4).wait(1).to({regX:6.3,regY:1.4,scaleX:0.65,scaleY:0.65,rotation:13.9,x:1007,y:86.3},4).to({regX:6.1,regY:1.3,rotation:18.3,x:1022.5,y:82.2},4).wait(1).to({regX:6.3,rotation:18.8,x:1023.8,y:81.6},0).to({regX:6.1,scaleX:0.65,scaleY:0.65,rotation:23.5,x:1034.3,y:75.6},4).to({regX:6,regY:1.1,scaleX:0.65,scaleY:0.65,rotation:19.5,x:1049.6,y:82.2},4).wait(1).to({regX:5.9,regY:1.2,rotation:23.8,x:1060,y:73.8},0).to({regY:1,scaleX:0.65,scaleY:0.65,rotation:51.3,x:1066.3,y:83},4).to({regX:5.8,regY:1.1,scaleX:0.65,scaleY:0.65,rotation:32.7,x:1083.5,y:77.5},4).to({regX:5.7,rotation:0,x:1091.1,y:83.7},4).wait(1).to({regX:6.3,regY:1.4,scaleX:0.65,scaleY:0.65,rotation:13.9,x:1106,y:86.3},4).to({regX:6.1,regY:1.3,rotation:18.3,x:1121.5,y:82.2},4).wait(1).to({regX:6.3,rotation:18.8,x:1122.8,y:81.6},0).to({regX:6.1,scaleX:0.65,scaleY:0.65,rotation:23.5,x:1133.3,y:75.6},4).to({regX:6,regY:1.1,scaleX:0.65,scaleY:0.65,rotation:19.5,x:1148.6,y:82.2},4).wait(264));

	// cuerpo
	this.instance_16 = new lib.cuerpo_1();
	this.instance_16.parent = this;
	this.instance_16.setTransform(70.7,56.5,0.65,0.65,0.8,0,0,70.1,28);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(60).to({regX:70.2,rotation:2,x:87,y:57.2},5).to({regX:70,regY:27.9,rotation:3.2,x:99,y:57.4},6).to({regX:70.2,regY:28.1,rotation:1.5,x:109.1,y:57.5},6).to({regX:70.1,regY:28,rotation:-0.8,x:125.8,y:57.4},6).to({regX:70,rotation:-3,x:139.1},6).to({regX:70.2,rotation:-2,x:150,y:57.1},6).to({regX:70.1,regY:27.9,rotation:-0.8,x:164.2,y:56.8},6).to({rotation:0,x:175,y:56.4},6).wait(1).to({regY:28,rotation:0.8,x:174.7,y:56.5},0).to({regX:70.2,rotation:2,x:191,y:57.2},6).to({regX:70,regY:27.9,rotation:3.2,x:203,y:57.4},7).to({regX:70.2,regY:28.1,rotation:1.5,x:213.1,y:57.5},7).to({regX:70.1,regY:28,rotation:-0.8,x:229.8,y:57.4},7).to({regX:70,rotation:-3,x:243.1},6).to({regX:70.2,rotation:-2,x:254,y:57.1},6).to({regX:70.1,regY:27.9,rotation:-0.8,x:268.2,y:56.8},6).to({rotation:0,x:279,y:56.4},6).wait(1).to({regY:28,rotation:0.8,x:277.4,y:56.5},0).to({regX:70.2,rotation:2,x:293.7,y:57.2},5).to({regX:70,regY:27.9,rotation:3.2,x:305.7,y:57.4},6).to({regX:70.2,regY:28.1,rotation:1.5,x:315.8,y:57.5},6).to({regX:70.1,regY:28,rotation:-0.8,x:332.5,y:57.4},5).to({regX:70,rotation:-3,x:345.8},6).to({regX:70.2,rotation:-2,x:356.7,y:57.1},6).to({regX:70.1,regY:27.9,rotation:-0.8,x:370.9,y:56.8},6).to({rotation:0,x:381.7,y:56.4},6).wait(1).to({regY:28,rotation:0.8,x:380.1,y:56.5},0).to({regX:70.2,rotation:2,x:396.4,y:57.2},5).to({regX:70,regY:27.9,rotation:3.2,x:408.4,y:57.4},5).to({regX:70.2,regY:28.1,rotation:1.5,x:418.5,y:57.5},6).to({regX:70.1,regY:28,rotation:-0.8,x:435.2,y:57.4},5).to({regX:70,rotation:-3,x:448.5},5).to({regX:70.2,rotation:-2,x:459.4,y:57.1},6).to({regX:70.1,regY:27.9,rotation:-0.8,x:473.6,y:56.8},7).to({rotation:0,x:484.4,y:56.4},7).wait(1).to({regY:28,rotation:0.8,x:484.1,y:56.5},0).to({regX:70.2,rotation:2,x:500.4,y:57.2},7).to({regX:70,regY:27.9,rotation:3.2,x:512.4,y:57.4},9).wait(1).to({regX:70.2,regY:28.1,rotation:3,x:513.5,y:57.6},0).to({rotation:1.5,x:522.5,y:57.5},9).to({regX:70.1,regY:28,rotation:-0.8,x:539.2,y:57.4},11).wait(113).to({rotation:0.8,x:547.7,y:56.5},0).wait(1).to({regX:70.2,rotation:2,x:564,y:57.2},5).to({regX:70,regY:27.9,rotation:3.2,x:576,y:57.4},6).to({regX:70.2,regY:28.1,rotation:1.5,x:586.1,y:57.5},6).to({regX:70.1,regY:28,rotation:-0.8,x:602.8,y:57.4},6).to({regX:70,rotation:-3,x:616.1},6).to({regX:70.2,rotation:-2,x:627,y:57.1},6).to({regX:70.1,regY:27.9,rotation:-0.8,x:641.2,y:56.8},6).to({rotation:0,x:652,y:56.4},6).wait(1).to({regY:28,rotation:0.8,x:651.7,y:56.5},0).to({regX:70.2,rotation:2,x:668,y:57.2},6).to({regX:70,regY:27.9,rotation:3.2,x:680,y:57.4},7).to({regX:70.2,regY:28.1,rotation:1.5,x:690.1,y:57.5},7).to({regX:70.1,regY:28,rotation:-0.8,x:706.8,y:57.4},7).to({regX:70,rotation:-3,x:720.1},6).to({regX:70.2,rotation:-2,x:731,y:57.1},6).to({regX:70.1,regY:27.9,rotation:-0.8,x:745.2,y:56.8},6).to({rotation:0,x:756,y:56.4},6).wait(1).to({regY:28,rotation:0.8,x:754.4,y:56.5},0).to({regX:70.2,rotation:2,x:770.7,y:57.2},5).to({regX:70,regY:27.9,rotation:3.2,x:782.7,y:57.4},5).to({regX:70.2,regY:28.1,rotation:1.5,x:792.8,y:57.5},5).to({regX:70.1,regY:28,rotation:-0.8,x:809.5,y:57.4},5).to({regX:70,rotation:-3,x:822.8},5).to({regX:70.2,rotation:-2,x:833.7,y:57.1},5).to({regX:70.1,regY:27.9,rotation:-0.8,x:847.9,y:56.8},5).to({rotation:0,x:858.7,y:56.4},5).wait(1).to({regY:28,rotation:0.8,x:857.1,y:56.5},0).to({regX:70.2,rotation:2,x:873.4,y:57.2},5).to({regX:70,regY:27.9,rotation:3.2,x:885.4,y:57.4},5).to({regX:70.2,regY:28.1,rotation:1.5,x:895.5,y:57.5},6).to({regX:70.1,regY:28,rotation:-0.8,x:912.2,y:57.4},5).to({regX:70,rotation:-3,x:925.5},5).wait(1).to({regY:28.1,rotation:-2.8,x:927.3},0).to({regX:70.2,regY:28,rotation:-2,x:936.4,y:57.1},4).to({regX:70.1,regY:27.9,rotation:-0.8,x:950.6,y:56.8},4).to({rotation:0,x:961.4,y:56.4},4).wait(1).to({regY:28,rotation:0.8,x:961.1,y:56.5},0).to({regX:70.2,rotation:2,x:977.4,y:57.2},4).to({regX:70,regY:27.9,rotation:3.2,x:989.4,y:57.4},4).wait(1).to({regX:70.2,regY:28.1,rotation:3,x:990.5,y:57.6},0).to({rotation:1.5,x:999.5,y:57.5},4).to({regX:70.1,regY:28,rotation:-0.8,x:1016.2,y:57.4},4).wait(1).to({regX:70,regY:28.1,rotation:-2.8,x:1026.3},0).to({regX:70.2,regY:28,rotation:-2,x:1035.4,y:57.1},4).to({regX:70.1,regY:27.9,rotation:-0.8,x:1049.6,y:56.8},4).to({rotation:0,x:1060.4,y:56.4},4).wait(1).to({regY:28,rotation:0.8,x:1060.1,y:56.5},0).to({regX:70.2,rotation:2,x:1076.4,y:57.2},4).to({regX:70,regY:27.9,rotation:3.2,x:1088.4,y:57.4},4).wait(1).to({regX:70.2,regY:28.1,rotation:3,x:1089.5,y:57.6},0).to({rotation:1.5,x:1098.5,y:57.5},4).to({regX:70.1,regY:28,rotation:-0.8,x:1115.2,y:57.4},4).wait(1).to({rotation:-0.8},0).wait(263));

	// pata final_derecha_1
	this.instance_17 = new lib.pata_trasera_izquierda();
	this.instance_17.parent = this;
	this.instance_17.setTransform(79.2,75.1,0.644,0.644,0,-19.7,160.3,54.3,7.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(60).to({regX:54.4,scaleX:0.65,scaleY:0.65,skewX:-16,skewY:164,x:98.9,y:75.2},5).to({regX:54.5,regY:7.8,scaleX:0.65,scaleY:0.65,skewX:-16.1,skewY:163.9,x:106.3},6).to({regY:7.7,skewX:-31.9,skewY:148.1,x:116.2,y:75.1},6).to({regX:54.6,regY:7.4,scaleX:0.65,scaleY:0.65,skewX:-18.5,skewY:161.5,x:135.9,y:75},6).to({regY:7.3,scaleX:0.65,scaleY:0.65,skewX:-19.1,skewY:160.9,x:145.8},6).to({skewX:-19.5,skewY:160.5,x:153.1,y:74.9},6).to({regX:54.7,regY:7,scaleX:0.65,scaleY:0.65,skewX:-27.8,skewY:152.2,x:169.8,y:74.7},6).to({regX:54.8,scaleX:0.65,scaleY:0.65,skewX:15.1,skewY:195.1,x:182.1,y:74.8},6).wait(1).to({regX:54.3,regY:7.9,scaleX:0.64,scaleY:0.64,skewX:-19.7,skewY:160.3,x:183.2,y:75.1},0).to({regX:54.4,scaleX:0.65,scaleY:0.65,skewX:-16,skewY:164,x:202.9,y:75.2},6).to({regX:54.5,regY:7.8,scaleX:0.65,scaleY:0.65,skewX:-16.1,skewY:163.9,x:210.3},7).to({regY:7.7,skewX:-31.9,skewY:148.1,x:220.2,y:75.1},7).to({regX:54.6,regY:7.4,scaleX:0.65,scaleY:0.65,skewX:-18.5,skewY:161.5,x:239.9,y:75},7).to({regY:7.3,scaleX:0.65,scaleY:0.65,skewX:-19.1,skewY:160.9,x:249.8},6).to({skewX:-19.5,skewY:160.5,x:257.1,y:74.9},6).to({regX:54.7,regY:7,scaleX:0.65,scaleY:0.65,skewX:-27.8,skewY:152.2,x:273.8,y:74.7},6).to({regX:54.8,scaleX:0.65,scaleY:0.65,skewX:15.1,skewY:195.1,x:286.1,y:74.8},6).wait(1).to({regX:54.3,regY:7.9,scaleX:0.64,scaleY:0.64,skewX:-19.7,skewY:160.3,x:285.9,y:75.1},0).to({regX:54.4,scaleX:0.65,scaleY:0.65,skewX:-16,skewY:164,x:305.6,y:75.2},5).to({regX:54.5,regY:7.8,scaleX:0.65,scaleY:0.65,skewX:-16.1,skewY:163.9,x:313},6).to({regY:7.7,skewX:-31.9,skewY:148.1,x:322.9,y:75.1},6).to({regX:54.6,regY:7.4,scaleX:0.65,scaleY:0.65,skewX:-18.5,skewY:161.5,x:342.6,y:75},5).to({regY:7.3,scaleX:0.65,scaleY:0.65,skewX:-19.1,skewY:160.9,x:352.5},6).to({skewX:-19.5,skewY:160.5,x:359.8,y:74.9},6).to({regX:54.7,regY:7,scaleX:0.65,scaleY:0.65,skewX:-27.8,skewY:152.2,x:376.5,y:74.7},6).to({regX:54.8,scaleX:0.65,scaleY:0.65,skewX:15.1,skewY:195.1,x:388.8,y:74.8},6).wait(1).to({regX:54.3,regY:7.9,scaleX:0.64,scaleY:0.64,skewX:-19.7,skewY:160.3,x:388.6,y:75.1},0).to({regX:54.4,scaleX:0.65,scaleY:0.65,skewX:-16,skewY:164,x:408.3,y:75.2},5).to({regX:54.5,regY:7.8,scaleX:0.65,scaleY:0.65,skewX:-16.1,skewY:163.9,x:415.7},5).to({regY:7.7,skewX:-31.9,skewY:148.1,x:425.6,y:75.1},6).to({regX:54.6,regY:7.4,scaleX:0.65,scaleY:0.65,skewX:-18.5,skewY:161.5,x:445.3,y:75},5).to({regY:7.3,scaleX:0.65,scaleY:0.65,skewX:-19.1,skewY:160.9,x:455.2},5).to({skewX:-19.5,skewY:160.5,x:462.5,y:74.9},6).to({regX:54.7,regY:7,scaleX:0.65,scaleY:0.65,skewX:-27.8,skewY:152.2,x:479.2,y:74.7},7).to({regX:54.8,scaleX:0.65,scaleY:0.65,skewX:15.1,skewY:195.1,x:491.5,y:74.8},7).wait(1).to({regX:54.3,regY:7.9,scaleX:0.64,scaleY:0.64,skewX:-19.7,skewY:160.3,x:492.6,y:75.1},0).to({regX:54.4,scaleX:0.65,scaleY:0.65,skewX:-16,skewY:164,x:512.3,y:75.2},7).to({regX:54.5,regY:7.8,scaleX:0.65,scaleY:0.65,skewX:-16.1,skewY:163.9,x:519.7},9).wait(1).to({scaleX:0.65,scaleY:0.65,skewX:-17.6,skewY:162.4,x:520.7},0).to({regY:7.7,scaleX:0.65,scaleY:0.65,skewX:-31.9,skewY:148.1,x:529.6,y:75.1},9).to({regX:54.6,regY:7.4,scaleX:0.65,scaleY:0.65,skewX:-18.5,skewY:161.5,x:549.3,y:75},11).wait(113).to({regX:54.3,regY:7.9,scaleX:0.64,scaleY:0.64,skewX:-19.7,skewY:160.3,x:556.2,y:75.1},0).wait(1).to({regX:54.4,scaleX:0.65,scaleY:0.65,skewX:-16,skewY:164,x:575.9,y:75.2},5).to({regX:54.5,regY:7.8,scaleX:0.65,scaleY:0.65,skewX:-16.1,skewY:163.9,x:583.3},6).to({regY:7.7,skewX:-31.9,skewY:148.1,x:593.2,y:75.1},6).to({regX:54.6,regY:7.4,scaleX:0.65,scaleY:0.65,skewX:-18.5,skewY:161.5,x:612.9,y:75},6).to({regY:7.3,scaleX:0.65,scaleY:0.65,skewX:-19.1,skewY:160.9,x:622.8},6).to({skewX:-19.5,skewY:160.5,x:630.1,y:74.9},6).to({regX:54.7,regY:7,scaleX:0.65,scaleY:0.65,skewX:-27.8,skewY:152.2,x:646.8,y:74.7},6).to({regX:54.8,scaleX:0.65,scaleY:0.65,skewX:15.1,skewY:195.1,x:659.1,y:74.8},6).wait(1).to({regX:54.3,regY:7.9,scaleX:0.64,scaleY:0.64,skewX:-19.7,skewY:160.3,x:660.2,y:75.1},0).to({regX:54.4,scaleX:0.65,scaleY:0.65,skewX:-16,skewY:164,x:679.9,y:75.2},6).to({regX:54.5,regY:7.8,scaleX:0.65,scaleY:0.65,skewX:-16.1,skewY:163.9,x:687.3},7).to({regY:7.7,skewX:-31.9,skewY:148.1,x:697.2,y:75.1},7).to({regX:54.6,regY:7.4,scaleX:0.65,scaleY:0.65,skewX:-18.5,skewY:161.5,x:716.9,y:75},7).to({regY:7.3,scaleX:0.65,scaleY:0.65,skewX:-19.1,skewY:160.9,x:726.8},6).to({skewX:-19.5,skewY:160.5,x:734.1,y:74.9},6).to({regX:54.7,regY:7,scaleX:0.65,scaleY:0.65,skewX:-27.8,skewY:152.2,x:750.8,y:74.7},6).to({regX:54.8,scaleX:0.65,scaleY:0.65,skewX:15.1,skewY:195.1,x:763.1,y:74.8},6).wait(1).to({regX:54.3,regY:7.9,scaleX:0.64,scaleY:0.64,skewX:-19.7,skewY:160.3,x:762.9,y:75.1},0).to({regX:54.4,scaleX:0.65,scaleY:0.65,skewX:-16,skewY:164,x:782.6,y:75.2},5).to({regX:54.5,regY:7.8,scaleX:0.65,scaleY:0.65,skewX:-16.1,skewY:163.9,x:790},5).to({regY:7.7,skewX:-31.9,skewY:148.1,x:799.9,y:75.1},5).to({regX:54.6,regY:7.4,scaleX:0.65,scaleY:0.65,skewX:-18.5,skewY:161.5,x:819.6,y:75},5).to({regY:7.3,scaleX:0.65,scaleY:0.65,skewX:-19.1,skewY:160.9,x:829.5},5).to({skewX:-19.5,skewY:160.5,x:836.8,y:74.9},5).to({regX:54.7,regY:7,scaleX:0.65,scaleY:0.65,skewX:-27.8,skewY:152.2,x:853.5,y:74.7},5).to({regX:54.8,scaleX:0.65,scaleY:0.65,skewX:15.1,skewY:195.1,x:865.8,y:74.8},5).wait(1).to({regX:54.3,regY:7.9,scaleX:0.64,scaleY:0.64,skewX:-19.7,skewY:160.3,x:865.6,y:75.1},0).to({regX:54.4,scaleX:0.65,scaleY:0.65,skewX:-16,skewY:164,x:885.3,y:75.2},5).to({regX:54.5,regY:7.8,scaleX:0.65,scaleY:0.65,skewX:-16.1,skewY:163.9,x:892.7},5).to({regY:7.7,skewX:-31.9,skewY:148.1,x:902.6,y:75.1},6).to({regX:54.6,regY:7.4,scaleX:0.65,scaleY:0.65,skewX:-18.5,skewY:161.5,x:922.3,y:75},5).to({regY:7.3,scaleX:0.65,scaleY:0.65,skewX:-19.1,skewY:160.9,x:932.2},5).wait(1).to({regY:7.4,scaleX:0.65,scaleY:0.65,x:933.4,y:75.1},0).to({regY:7.3,scaleX:0.65,scaleY:0.65,skewX:-19.5,skewY:160.5,x:939.5,y:74.9},4).to({regX:54.7,regY:7,scaleX:0.65,scaleY:0.65,skewX:-27.8,skewY:152.2,x:956.2,y:74.7},4).to({regX:54.8,scaleX:0.65,scaleY:0.65,skewX:15.1,skewY:195.1,x:968.5,y:74.8},4).wait(1).to({regX:54.3,regY:7.9,scaleX:0.64,scaleY:0.64,skewX:-19.7,skewY:160.3,x:969.6,y:75.1},0).to({regX:54.4,scaleX:0.65,scaleY:0.65,skewX:-16,skewY:164,x:989.3,y:75.2},4).to({regX:54.5,regY:7.8,scaleX:0.65,scaleY:0.65,skewX:-16.1,skewY:163.9,x:996.7},4).wait(1).to({scaleX:0.65,scaleY:0.65,skewX:-17.6,skewY:162.4,x:997.7},0).to({regY:7.7,scaleX:0.65,scaleY:0.65,skewX:-31.9,skewY:148.1,x:1006.6,y:75.1},4).to({regX:54.6,regY:7.4,scaleX:0.65,scaleY:0.65,skewX:-18.5,skewY:161.5,x:1026.3,y:75},4).wait(1).to({skewX:-19.1,skewY:160.9,x:1032.4,y:75.1},0).to({regY:7.3,scaleX:0.65,scaleY:0.65,skewX:-19.5,skewY:160.5,x:1038.5,y:74.9},4).to({regX:54.7,regY:7,scaleX:0.65,scaleY:0.65,skewX:-27.8,skewY:152.2,x:1055.2,y:74.7},4).to({regX:54.8,scaleX:0.65,scaleY:0.65,skewX:15.1,skewY:195.1,x:1067.5,y:74.8},4).wait(1).to({regX:54.3,regY:7.9,scaleX:0.64,scaleY:0.64,skewX:-19.7,skewY:160.3,x:1068.6,y:75.1},0).to({regX:54.4,scaleX:0.65,scaleY:0.65,skewX:-16,skewY:164,x:1088.3,y:75.2},4).to({regX:54.5,regY:7.8,scaleX:0.65,scaleY:0.65,skewX:-16.1,skewY:163.9,x:1095.7},4).wait(1).to({scaleX:0.65,scaleY:0.65,skewX:-17.6,skewY:162.4,x:1096.7},0).to({regY:7.7,scaleX:0.65,scaleY:0.65,skewX:-31.9,skewY:148.1,x:1105.6,y:75.1},4).to({regX:54.6,regY:7.4,scaleX:0.65,scaleY:0.65,skewX:-18.5,skewY:161.5,x:1125.3,y:75},4).wait(264));

	// pata_final_derecha_2
	this.instance_18 = new lib.pata_final_izquierda_2();
	this.instance_18.parent = this;
	this.instance_18.setTransform(100.6,78.2,0.646,0.646,0,9.6,-170.4,13.5,3.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(60).to({regY:3.1,skewX:-20.5,skewY:-200.5,x:120.5,y:78.7},5).to({regY:3,skewX:-2.1,skewY:-182.1,x:127.9,y:78.5},6).to({regX:13.7,scaleX:0.65,scaleY:0.65,skewX:-15.8,skewY:-195.8,x:137.7,y:73.6},6).to({regY:2.9,skewX:-2.7,skewY:-182.7,x:157.7,y:77.6},6).to({regX:13.8,regY:2.8,scaleX:0.65,scaleY:0.65,skewX:6.4,skewY:-173.6,x:167.6},6).to({regY:2.7,skewX:-8.2,skewY:-188.2,x:175.1,y:77.7},6).to({regX:14.1,regY:2.6,scaleX:0.65,scaleY:0.65,skewX:-23.5,skewY:-203.5,x:191.6,y:74.5},6).to({regX:14,regY:2.8,scaleX:0.65,scaleY:0.65,skewX:13.4,skewY:-166.6,x:197.7,y:89.1},6).wait(1).to({regX:13.5,regY:3.2,scaleX:0.65,scaleY:0.65,skewX:9.6,skewY:-170.4,x:204.6,y:78.2},0).to({regY:3.1,skewX:-20.5,skewY:-200.5,x:224.5,y:78.7},6).to({regY:3,skewX:-2.1,skewY:-182.1,x:231.9,y:78.5},7).to({regX:13.7,scaleX:0.65,scaleY:0.65,skewX:-15.8,skewY:-195.8,x:241.7,y:73.6},7).to({regY:2.9,skewX:-2.7,skewY:-182.7,x:261.7,y:77.6},7).to({regX:13.8,regY:2.8,scaleX:0.65,scaleY:0.65,skewX:6.4,skewY:-173.6,x:271.6},6).to({regY:2.7,skewX:-8.2,skewY:-188.2,x:279.1,y:77.7},6).to({regX:14.1,regY:2.6,scaleX:0.65,scaleY:0.65,skewX:-23.5,skewY:-203.5,x:295.6,y:74.5},6).to({regX:14,regY:2.8,scaleX:0.65,scaleY:0.65,skewX:13.4,skewY:-166.6,x:301.7,y:89.1},6).wait(1).to({regX:13.5,regY:3.2,scaleX:0.65,scaleY:0.65,skewX:9.6,skewY:-170.4,x:307.3,y:78.2},0).to({regY:3.1,skewX:-20.5,skewY:-200.5,x:327.2,y:78.7},5).to({regY:3,skewX:-2.1,skewY:-182.1,x:334.6,y:78.5},6).to({regX:13.7,scaleX:0.65,scaleY:0.65,skewX:-15.8,skewY:-195.8,x:344.4,y:73.6},6).to({regY:2.9,skewX:-2.7,skewY:-182.7,x:364.4,y:77.6},5).to({regX:13.8,regY:2.8,scaleX:0.65,scaleY:0.65,skewX:6.4,skewY:-173.6,x:374.3},6).to({regY:2.7,skewX:-8.2,skewY:-188.2,x:381.8,y:77.7},6).to({regX:14.1,regY:2.6,scaleX:0.65,scaleY:0.65,skewX:-23.5,skewY:-203.5,x:398.3,y:74.5},6).to({regX:14,regY:2.8,scaleX:0.65,scaleY:0.65,skewX:13.4,skewY:-166.6,x:404.4,y:89.1},6).wait(1).to({regX:13.5,regY:3.2,scaleX:0.65,scaleY:0.65,skewX:9.6,skewY:-170.4,x:410,y:78.2},0).to({regY:3.1,skewX:-20.5,skewY:-200.5,x:429.9,y:78.7},5).to({regY:3,skewX:-2.1,skewY:-182.1,x:437.3,y:78.5},5).to({regX:13.7,scaleX:0.65,scaleY:0.65,skewX:-15.8,skewY:-195.8,x:447.1,y:73.6},6).to({regY:2.9,skewX:-2.7,skewY:-182.7,x:467.1,y:77.6},5).to({regX:13.8,regY:2.8,scaleX:0.65,scaleY:0.65,skewX:6.4,skewY:-173.6,x:477},5).to({regY:2.7,skewX:-8.2,skewY:-188.2,x:484.5,y:77.7},6).to({regX:14.1,regY:2.6,scaleX:0.65,scaleY:0.65,skewX:-23.5,skewY:-203.5,x:501,y:74.5},7).to({regX:14,regY:2.8,scaleX:0.65,scaleY:0.65,skewX:13.4,skewY:-166.6,x:507.1,y:89.1},7).wait(1).to({regX:13.5,regY:3.2,scaleX:0.65,scaleY:0.65,skewX:9.6,skewY:-170.4,x:514,y:78.2},0).to({regY:3.1,skewX:-20.5,skewY:-200.5,x:533.9,y:78.7},7).to({regY:3,skewX:-2.1,skewY:-182.1,x:541.3,y:78.5},9).wait(1).to({skewX:-3.3,skewY:-183.3,x:542.3,y:78.1},0).to({regX:13.7,scaleX:0.65,scaleY:0.65,skewX:-15.8,skewY:-195.8,x:551.1,y:73.6},9).to({regY:2.9,skewX:-2.7,skewY:-182.7,x:571.1,y:77.6},11).wait(113).to({regX:13.5,regY:3.2,scaleX:0.65,scaleY:0.65,skewX:9.6,skewY:-170.4,x:577.6,y:78.2},0).wait(1).to({regY:3.1,skewX:-20.5,skewY:-200.5,x:597.5,y:78.7},5).to({regY:3,skewX:-2.1,skewY:-182.1,x:604.9,y:78.5},6).to({regX:13.7,scaleX:0.65,scaleY:0.65,skewX:-15.8,skewY:-195.8,x:614.7,y:73.6},6).to({regY:2.9,skewX:-2.7,skewY:-182.7,x:634.7,y:77.6},6).to({regX:13.8,regY:2.8,scaleX:0.65,scaleY:0.65,skewX:6.4,skewY:-173.6,x:644.6},6).to({regY:2.7,skewX:-8.2,skewY:-188.2,x:652.1,y:77.7},6).to({regX:14.1,regY:2.6,scaleX:0.65,scaleY:0.65,skewX:-23.5,skewY:-203.5,x:668.6,y:74.5},6).to({regX:14,regY:2.8,scaleX:0.65,scaleY:0.65,skewX:13.4,skewY:-166.6,x:674.7,y:89.1},6).wait(1).to({regX:13.5,regY:3.2,scaleX:0.65,scaleY:0.65,skewX:9.6,skewY:-170.4,x:681.6,y:78.2},0).to({regY:3.1,skewX:-20.5,skewY:-200.5,x:701.5,y:78.7},6).to({regY:3,skewX:-2.1,skewY:-182.1,x:708.9,y:78.5},7).to({regX:13.7,scaleX:0.65,scaleY:0.65,skewX:-15.8,skewY:-195.8,x:718.7,y:73.6},7).to({regY:2.9,skewX:-2.7,skewY:-182.7,x:738.7,y:77.6},7).to({regX:13.8,regY:2.8,scaleX:0.65,scaleY:0.65,skewX:6.4,skewY:-173.6,x:748.6},6).to({regY:2.7,skewX:-8.2,skewY:-188.2,x:756.1,y:77.7},6).to({regX:14.1,regY:2.6,scaleX:0.65,scaleY:0.65,skewX:-23.5,skewY:-203.5,x:772.6,y:74.5},6).to({regX:14,regY:2.8,scaleX:0.65,scaleY:0.65,skewX:13.4,skewY:-166.6,x:778.7,y:89.1},6).wait(1).to({regX:13.5,regY:3.2,scaleX:0.65,scaleY:0.65,skewX:9.6,skewY:-170.4,x:784.3,y:78.2},0).to({regY:3.1,skewX:-20.5,skewY:-200.5,x:804.2,y:78.7},5).to({regY:3,skewX:-2.1,skewY:-182.1,x:811.6,y:78.5},5).to({regX:13.7,scaleX:0.65,scaleY:0.65,skewX:-15.8,skewY:-195.8,x:821.4,y:73.6},5).to({regY:2.9,skewX:-2.7,skewY:-182.7,x:841.4,y:77.6},5).to({regX:13.8,regY:2.8,scaleX:0.65,scaleY:0.65,skewX:6.4,skewY:-173.6,x:851.3},5).to({regY:2.7,skewX:-8.2,skewY:-188.2,x:858.8,y:77.7},5).to({regX:14.1,regY:2.6,scaleX:0.65,scaleY:0.65,skewX:-23.5,skewY:-203.5,x:875.3,y:74.5},5).to({regX:14,regY:2.8,scaleX:0.65,scaleY:0.65,skewX:13.4,skewY:-166.6,x:881.4,y:89.1},5).wait(1).to({regX:13.5,regY:3.2,scaleX:0.65,scaleY:0.65,skewX:9.6,skewY:-170.4,x:887,y:78.2},0).to({regY:3.1,skewX:-20.5,skewY:-200.5,x:906.9,y:78.7},5).to({regY:3,skewX:-2.1,skewY:-182.1,x:914.3,y:78.5},5).to({regX:13.7,scaleX:0.65,scaleY:0.65,skewX:-15.8,skewY:-195.8,x:924.1,y:73.6},6).to({regY:2.9,skewX:-2.7,skewY:-182.7,x:944.1,y:77.6},5).to({regX:13.8,regY:2.8,scaleX:0.65,scaleY:0.65,skewX:6.4,skewY:-173.6,x:954},5).wait(1).to({regY:2.9,scaleX:0.65,scaleY:0.65,skewX:3.8,skewY:-176.2,x:955.4},0).to({regY:2.7,scaleX:0.65,scaleY:0.65,skewX:-8.2,skewY:-188.2,x:961.5,y:77.7},4).to({regX:14.1,regY:2.6,scaleX:0.65,scaleY:0.65,skewX:-23.5,skewY:-203.5,x:978,y:74.5},4).to({regX:14,regY:2.8,scaleX:0.65,scaleY:0.65,skewX:13.4,skewY:-166.6,x:984.1,y:89.1},4).wait(1).to({regX:13.5,regY:3.2,scaleX:0.65,scaleY:0.65,skewX:9.6,skewY:-170.4,x:991,y:78.2},0).to({regY:3.1,skewX:-20.5,skewY:-200.5,x:1010.9,y:78.7},4).to({regY:3,skewX:-2.1,skewY:-182.1,x:1018.3,y:78.5},4).wait(1).to({skewX:-3.3,skewY:-183.3,x:1019.3,y:78.1},0).to({regX:13.7,scaleX:0.65,scaleY:0.65,skewX:-15.8,skewY:-195.8,x:1028.1,y:73.6},4).to({regY:2.9,skewX:-2.7,skewY:-182.7,x:1048.1,y:77.6},4).wait(1).to({regX:13.8,skewX:3.8,skewY:-176.2,x:1054.4},0).to({regY:2.7,scaleX:0.65,scaleY:0.65,skewX:-8.2,skewY:-188.2,x:1060.5,y:77.7},4).to({regX:14.1,regY:2.6,scaleX:0.65,scaleY:0.65,skewX:-23.5,skewY:-203.5,x:1077,y:74.5},4).to({regX:14,regY:2.8,scaleX:0.65,scaleY:0.65,skewX:13.4,skewY:-166.6,x:1083.1,y:89.1},4).wait(1).to({regX:13.5,regY:3.2,scaleX:0.65,scaleY:0.65,skewX:9.6,skewY:-170.4,x:1090,y:78.2},0).to({regY:3.1,skewX:-20.5,skewY:-200.5,x:1109.9,y:78.7},4).to({regY:3,skewX:-2.1,skewY:-182.1,x:1117.3,y:78.5},4).wait(1).to({skewX:-3.3,skewY:-183.3,x:1118.3,y:78.1},0).to({regX:13.7,scaleX:0.65,scaleY:0.65,skewX:-15.8,skewY:-195.8,x:1127.1,y:73.6},4).to({regY:2.9,skewX:-2.7,skewY:-182.7,x:1147.1,y:77.6},4).wait(1).to({skewX:-2.7},0).wait(263));

	// pata final_izquierda_1
	this.instance_19 = new lib.pata_trasera_izquierda();
	this.instance_19.parent = this;
	this.instance_19.setTransform(60.8,74.9,0.645,0.645,35,0,0,55.3,6.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(60).to({regY:7,rotation:31.5,x:76.4,y:75},5).to({regX:55.2,scaleX:0.65,scaleY:0.65,rotation:16.1,x:87.1,y:74.9},6).to({regX:55.1,rotation:17.1,x:96.6},6).to({regY:6.9,scaleX:0.65,scaleY:0.65,rotation:34.8,x:115.1,y:75},6).to({rotation:15.9,x:129.9,y:74.9},6).to({scaleX:0.65,scaleY:0.65,rotation:24,x:140,y:75},6).to({regX:55,scaleX:0.65,scaleY:0.65,rotation:35.1,x:154.4,y:74.9},6).to({regY:6.8,rotation:19,x:166.7,y:75},6).wait(1).to({regX:55.3,regY:6.9,scaleX:0.65,scaleY:0.65,rotation:35,x:164.8,y:74.9},0).to({regY:7,rotation:31.5,x:180.4,y:75},6).to({regX:55.2,scaleX:0.65,scaleY:0.65,rotation:16.1,x:191.1,y:74.9},7).to({regX:55.1,rotation:17.1,x:200.6},7).to({regY:6.9,scaleX:0.65,scaleY:0.65,rotation:34.8,x:219.1,y:75},7).to({rotation:15.9,x:233.9,y:74.9},6).to({scaleX:0.65,scaleY:0.65,rotation:24,x:244,y:75},6).to({regX:55,scaleX:0.65,scaleY:0.65,rotation:35.1,x:258.4,y:74.9},6).to({regY:6.8,rotation:19,x:270.7,y:75},6).wait(1).to({regX:55.3,regY:6.9,scaleX:0.65,scaleY:0.65,rotation:35,x:267.5,y:74.9},0).to({regY:7,rotation:31.5,x:283.1,y:75},5).to({regX:55.2,scaleX:0.65,scaleY:0.65,rotation:16.1,x:293.8,y:74.9},6).to({regX:55.1,rotation:17.1,x:303.3},6).to({regY:6.9,scaleX:0.65,scaleY:0.65,rotation:34.8,x:321.8,y:75},5).to({rotation:15.9,x:336.6,y:74.9},6).to({scaleX:0.65,scaleY:0.65,rotation:24,x:346.7,y:75},6).to({regX:55,scaleX:0.65,scaleY:0.65,rotation:35.1,x:361.1,y:74.9},6).to({regY:6.8,rotation:19,x:373.4,y:75},6).wait(1).to({regX:55.3,regY:6.9,scaleX:0.65,scaleY:0.65,rotation:35,x:370.2,y:74.9},0).to({regY:7,rotation:31.5,x:385.8,y:75},5).to({regX:55.2,scaleX:0.65,scaleY:0.65,rotation:16.1,x:396.5,y:74.9},5).to({regX:55.1,rotation:17.1,x:406},6).to({regY:6.9,scaleX:0.65,scaleY:0.65,rotation:34.8,x:424.5,y:75},5).to({rotation:15.9,x:439.3,y:74.9},5).to({scaleX:0.65,scaleY:0.65,rotation:24,x:449.4,y:75},6).to({regX:55,scaleX:0.65,scaleY:0.65,rotation:35.1,x:463.8,y:74.9},7).to({regY:6.8,rotation:19,x:476.1,y:75},7).wait(1).to({regX:55.3,regY:6.9,scaleX:0.65,scaleY:0.65,rotation:35,x:474.2,y:74.9},0).to({regY:7,rotation:31.5,x:489.8,y:75},7).to({regX:55.2,scaleX:0.65,scaleY:0.65,rotation:16.1,x:500.5,y:74.9},9).wait(1).to({regX:55.3,regY:7.1,scaleX:0.65,scaleY:0.65,x:501.5},0).to({regX:55.1,regY:7,scaleX:0.65,scaleY:0.65,rotation:17.1,x:510},9).to({regY:6.9,scaleX:0.65,scaleY:0.65,rotation:34.8,x:528.5,y:75},11).wait(113).to({regX:55.3,scaleX:0.65,scaleY:0.65,rotation:35,x:537.8,y:74.9},0).wait(1).to({regY:7,rotation:31.5,x:553.4,y:75},5).to({regX:55.2,scaleX:0.65,scaleY:0.65,rotation:16.1,x:564.1,y:74.9},6).to({regX:55.1,rotation:17.1,x:573.6},6).to({regY:6.9,scaleX:0.65,scaleY:0.65,rotation:34.8,x:592.1,y:75},6).to({rotation:15.9,x:606.9,y:74.9},6).to({scaleX:0.65,scaleY:0.65,rotation:24,x:617,y:75},6).to({regX:55,scaleX:0.65,scaleY:0.65,rotation:35.1,x:631.4,y:74.9},6).to({regY:6.8,rotation:19,x:643.7,y:75},6).wait(1).to({regX:55.3,regY:6.9,scaleX:0.65,scaleY:0.65,rotation:35,x:641.8,y:74.9},0).to({regY:7,rotation:31.5,x:657.4,y:75},6).to({regX:55.2,scaleX:0.65,scaleY:0.65,rotation:16.1,x:668.1,y:74.9},7).to({regX:55.1,rotation:17.1,x:677.6},7).to({regY:6.9,scaleX:0.65,scaleY:0.65,rotation:34.8,x:696.1,y:75},7).to({rotation:15.9,x:710.9,y:74.9},6).to({scaleX:0.65,scaleY:0.65,rotation:24,x:721,y:75},6).to({regX:55,scaleX:0.65,scaleY:0.65,rotation:35.1,x:735.4,y:74.9},6).to({regY:6.8,rotation:19,x:747.7,y:75},6).wait(1).to({regX:55.3,regY:6.9,scaleX:0.65,scaleY:0.65,rotation:35,x:744.5,y:74.9},0).to({regY:7,rotation:31.5,x:760.1,y:75},5).to({regX:55.2,scaleX:0.65,scaleY:0.65,rotation:16.1,x:770.8,y:74.9},5).to({regX:55.1,rotation:17.1,x:780.3},5).to({regY:6.9,scaleX:0.65,scaleY:0.65,rotation:34.8,x:798.8,y:75},5).to({rotation:15.9,x:813.6,y:74.9},5).to({scaleX:0.65,scaleY:0.65,rotation:24,x:823.7,y:75},5).to({regX:55,scaleX:0.65,scaleY:0.65,rotation:35.1,x:838.1,y:74.9},5).to({regY:6.8,rotation:19,x:850.4,y:75},5).wait(1).to({regX:55.3,regY:6.9,scaleX:0.65,scaleY:0.65,rotation:35,x:847.2,y:74.9},0).to({regY:7,rotation:31.5,x:862.8,y:75},5).to({regX:55.2,scaleX:0.65,scaleY:0.65,rotation:16.1,x:873.5,y:74.9},5).to({regX:55.1,rotation:17.1,x:883},6).to({regY:6.9,scaleX:0.65,scaleY:0.65,rotation:34.8,x:901.5,y:75},5).to({rotation:15.9,x:916.3,y:74.9},5).wait(1).to({rotation:17.1,x:918.1},0).to({scaleX:0.65,scaleY:0.65,rotation:24,x:926.4,y:75},4).to({regX:55,scaleX:0.65,scaleY:0.65,rotation:35.1,x:940.8,y:74.9},4).to({regY:6.8,rotation:19,x:953.1,y:75},4).wait(1).to({regX:55.3,regY:6.9,scaleX:0.65,scaleY:0.65,rotation:35,x:951.2,y:74.9},0).to({regY:7,rotation:31.5,x:966.8,y:75},4).to({regX:55.2,scaleX:0.65,scaleY:0.65,rotation:16.1,x:977.5,y:74.9},4).wait(1).to({regX:55.3,regY:7.1,scaleX:0.65,scaleY:0.65,x:978.5},0).to({regX:55.1,regY:7,scaleX:0.65,scaleY:0.65,rotation:17.1,x:987},4).to({regY:6.9,scaleX:0.65,scaleY:0.65,rotation:34.8,x:1005.5,y:75},4).wait(1).to({rotation:17.1,x:1017.1,y:74.9},0).to({scaleX:0.65,scaleY:0.65,rotation:24,x:1025.4,y:75},4).to({regX:55,scaleX:0.65,scaleY:0.65,rotation:35.1,x:1039.8,y:74.9},4).to({regY:6.8,rotation:19,x:1052.1,y:75},4).wait(1).to({regX:55.3,regY:6.9,scaleX:0.65,scaleY:0.65,rotation:35,x:1050.2,y:74.9},0).to({regY:7,rotation:31.5,x:1065.8,y:75},4).to({regX:55.2,scaleX:0.65,scaleY:0.65,rotation:16.1,x:1076.5,y:74.9},4).wait(1).to({regX:55.3,regY:7.1,scaleX:0.65,scaleY:0.65,x:1077.5},0).to({regX:55.1,regY:7,scaleX:0.65,scaleY:0.65,rotation:17.1,x:1086},4).to({regY:6.9,scaleX:0.65,scaleY:0.65,rotation:34.8,x:1104.5,y:75},4).wait(264));

	// pata_final_izquierda_2
	this.instance_20 = new lib.pata_final_izquierda_2();
	this.instance_20.parent = this;
	this.instance_20.setTransform(39.7,72.5,0.647,0.647,16.2,0,0,14.9,3);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(60).to({regX:14.8,rotation:1.4,x:55.5},5).to({regY:2.9,rotation:-10.9,x:66.1,y:78.1},6).to({rotation:13,x:75.6,y:78.5},6).to({regX:14.7,regY:2.8,scaleX:0.65,scaleY:0.65,rotation:-21.9,x:93.9,y:71.3},6).to({regY:2.7,rotation:-17.5,x:108.5,y:78.5},6).to({regX:14.6,regY:2.6,scaleX:0.65,scaleY:0.65,rotation:2.4,x:117.8,y:76.7},6).to({regX:14.3,scaleX:0.65,scaleY:0.65,rotation:5.5,x:132.8,y:72.4},6).to({rotation:8.7,x:144.9,y:77.6},6).wait(1).to({regX:14.9,regY:3,scaleX:0.65,scaleY:0.65,rotation:16.2,x:143.7,y:72.5},0).to({regX:14.8,rotation:1.4,x:159.5},6).to({regY:2.9,rotation:-10.9,x:170.1,y:78.1},7).to({rotation:13,x:179.6,y:78.5},7).to({regX:14.7,regY:2.8,scaleX:0.65,scaleY:0.65,rotation:-21.9,x:197.9,y:71.3},7).to({regY:2.7,rotation:-17.5,x:212.5,y:78.5},6).to({regX:14.6,regY:2.6,scaleX:0.65,scaleY:0.65,rotation:2.4,x:221.8,y:76.7},6).to({regX:14.3,scaleX:0.65,scaleY:0.65,rotation:5.5,x:236.8,y:72.4},6).to({rotation:8.7,x:248.9,y:77.6},6).wait(1).to({regX:14.9,regY:3,scaleX:0.65,scaleY:0.65,rotation:16.2,x:246.4,y:72.5},0).to({regX:14.8,rotation:1.4,x:262.2},5).to({regY:2.9,rotation:-10.9,x:272.8,y:78.1},6).to({rotation:13,x:282.3,y:78.5},6).to({regX:14.7,regY:2.8,scaleX:0.65,scaleY:0.65,rotation:-21.9,x:300.6,y:71.3},5).to({regY:2.7,rotation:-17.5,x:315.2,y:78.5},6).to({regX:14.6,regY:2.6,scaleX:0.65,scaleY:0.65,rotation:2.4,x:324.5,y:76.7},6).to({regX:14.3,scaleX:0.65,scaleY:0.65,rotation:5.5,x:339.5,y:72.4},6).to({rotation:8.7,x:351.6,y:77.6},6).wait(1).to({regX:14.9,regY:3,scaleX:0.65,scaleY:0.65,rotation:16.2,x:349.1,y:72.5},0).to({regX:14.8,rotation:1.4,x:364.9},5).to({regY:2.9,rotation:-10.9,x:375.5,y:78.1},5).to({rotation:13,x:385,y:78.5},6).to({regX:14.7,regY:2.8,scaleX:0.65,scaleY:0.65,rotation:-21.9,x:403.3,y:71.3},5).to({regY:2.7,rotation:-17.5,x:417.9,y:78.5},5).to({regX:14.6,regY:2.6,scaleX:0.65,scaleY:0.65,rotation:2.4,x:427.2,y:76.7},6).to({regX:14.3,scaleX:0.65,scaleY:0.65,rotation:5.5,x:442.2,y:72.4},7).to({rotation:8.7,x:454.3,y:77.6},7).wait(1).to({regX:14.9,regY:3,scaleX:0.65,scaleY:0.65,rotation:16.2,x:453.1,y:72.5},0).to({regX:14.8,rotation:1.4,x:468.9},7).to({regY:2.9,rotation:-10.9,x:479.5,y:78.1},9).wait(1).to({rotation:-8.5,x:480.4,y:78.2},0).to({rotation:13,x:489,y:78.5},9).to({regX:14.7,regY:2.8,scaleX:0.65,scaleY:0.65,rotation:-21.9,x:507.3,y:71.3},11).wait(113).to({regX:14.9,regY:3,scaleX:0.65,scaleY:0.65,rotation:16.2,x:516.7,y:72.5},0).wait(1).to({rotation:16.2},0).to({regX:14.8,rotation:1.4,x:532.5},5).to({regY:2.9,rotation:-10.9,x:543.1,y:78.1},6).to({rotation:13,x:552.6,y:78.5},6).to({regX:14.7,regY:2.8,scaleX:0.65,scaleY:0.65,rotation:-21.9,x:570.9,y:71.3},6).to({regY:2.7,rotation:-17.5,x:585.5,y:78.5},6).to({regX:14.6,regY:2.6,scaleX:0.65,scaleY:0.65,rotation:2.4,x:594.8,y:76.7},6).to({regX:14.3,scaleX:0.65,scaleY:0.65,rotation:5.5,x:609.8,y:72.4},6).to({rotation:8.7,x:621.9,y:77.6},6).wait(1).to({regX:14.9,regY:3,scaleX:0.65,scaleY:0.65,rotation:16.2,x:620.7,y:72.5},0).to({regX:14.8,rotation:1.4,x:636.5},6).to({regY:2.9,rotation:-10.9,x:647.1,y:78.1},7).to({rotation:13,x:656.6,y:78.5},7).to({regX:14.7,regY:2.8,scaleX:0.65,scaleY:0.65,rotation:-21.9,x:674.9,y:71.3},7).to({regY:2.7,rotation:-17.5,x:689.5,y:78.5},6).to({regX:14.6,regY:2.6,scaleX:0.65,scaleY:0.65,rotation:2.4,x:698.8,y:76.7},6).to({regX:14.3,scaleX:0.65,scaleY:0.65,rotation:5.5,x:713.8,y:72.4},6).to({rotation:8.7,x:725.9,y:77.6},6).wait(1).to({regX:14.9,regY:3,scaleX:0.65,scaleY:0.65,rotation:16.2,x:723.4,y:72.5},0).to({regX:14.8,rotation:1.4,x:739.2},5).to({regY:2.9,rotation:-10.9,x:749.8,y:78.1},5).to({rotation:13,x:759.3,y:78.5},5).to({regX:14.7,regY:2.8,scaleX:0.65,scaleY:0.65,rotation:-21.9,x:777.6,y:71.3},5).to({regY:2.7,rotation:-17.5,x:792.2,y:78.5},5).to({regX:14.6,regY:2.6,scaleX:0.65,scaleY:0.65,rotation:2.4,x:801.5,y:76.7},5).to({regX:14.3,scaleX:0.65,scaleY:0.65,rotation:5.5,x:816.5,y:72.4},5).to({rotation:8.7,x:828.6,y:77.6},5).wait(1).to({regX:14.9,regY:3,scaleX:0.65,scaleY:0.65,rotation:16.2,x:826.1,y:72.5},0).to({regX:14.8,rotation:1.4,x:841.9},5).to({regY:2.9,rotation:-10.9,x:852.5,y:78.1},5).to({rotation:13,x:862,y:78.5},6).to({regX:14.7,regY:2.8,scaleX:0.65,scaleY:0.65,rotation:-21.9,x:880.3,y:71.3},5).to({regY:2.7,rotation:-17.5,x:894.9,y:78.5},5).wait(1).to({regX:14.8,regY:2.8,rotation:-14.1,x:896.5,y:78.3},0).to({regX:14.6,regY:2.6,scaleX:0.65,scaleY:0.65,rotation:2.4,x:904.2,y:76.7},4).to({regX:14.3,scaleX:0.65,scaleY:0.65,rotation:5.5,x:919.2,y:72.4},4).to({rotation:8.7,x:931.3,y:77.6},4).wait(1).to({regX:14.9,regY:3,scaleX:0.65,scaleY:0.65,rotation:16.2,x:930.1,y:72.5},0).to({regX:14.8,rotation:1.4,x:945.9},4).to({regY:2.9,rotation:-10.9,x:956.5,y:78.1},4).wait(1).to({rotation:-8.5,x:957.4,y:78.2},0).to({rotation:13,x:966,y:78.5},4).to({regX:14.7,regY:2.8,scaleX:0.65,scaleY:0.65,rotation:-21.9,x:984.3,y:71.3},4).wait(1).to({regX:14.8,rotation:-14.1,x:995.5,y:78.3},0).to({regX:14.6,regY:2.6,scaleX:0.65,scaleY:0.65,rotation:2.4,x:1003.2,y:76.7},4).to({regX:14.3,scaleX:0.65,scaleY:0.65,rotation:5.5,x:1018.2,y:72.4},4).to({rotation:8.7,x:1030.3,y:77.6},4).wait(1).to({regX:14.9,regY:3,scaleX:0.65,scaleY:0.65,rotation:16.2,x:1029.1,y:72.5},0).to({regX:14.8,rotation:1.4,x:1044.9},4).to({regY:2.9,rotation:-10.9,x:1055.5,y:78.1},4).wait(1).to({rotation:-8.5,x:1056.4,y:78.2},0).to({rotation:13,x:1065,y:78.5},4).to({regX:14.7,regY:2.8,scaleX:0.65,scaleY:0.65,rotation:-21.9,x:1083.3,y:71.3},4).wait(264));

	// sombra
	this.instance_21 = new lib.sombra_cangrejo_1();
	this.instance_21.parent = this;
	this.instance_21.setTransform(66.3,107.8,1,1,0,0,0,77,19.5);
	this.instance_21.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(60).to({x:88.4},5).to({x:98.8},6).to({x:111.8},6).to({x:122.2},6).to({x:136.5},6).to({x:145.6},6).to({x:166.4},6).to({x:178.1},6).wait(1).to({x:193.7},6).to({x:208},7).to({x:214.5},7).to({x:236.6},7).to({x:245.7},6).to({x:253.5},6).to({x:263.9},6).to({x:275.6},6).to({x:276.9},1).to({x:293.8},5).to({x:306.8},6).to({x:322.4},6).to({x:339.3},5).to({x:349.7},6).to({x:360.1},6).to({x:370.5},6).to({x:382.2},6).wait(1).to({x:396.5},5).to({x:410.8},5).to({x:419.9},6).to({x:440.7},5).to({x:452.4},5).to({x:461.5},6).to({x:477.1},7).to({x:483.6},7).to({x:484.9},1).to({x:503.1},7).to({x:513.5},9).wait(1).to({x:514.6},0).to({x:525.2},9).to({x:543.4},11).wait(113).to({x:543.3},0).to({x:565.4},6).to({x:575.8},6).to({x:588.8},6).to({x:599.2},6).to({x:613.5},6).to({x:622.6},6).to({x:643.4},6).to({x:655.1},6).wait(1).to({x:670.7},6).to({x:685},7).to({x:691.5},7).to({x:713.6},7).to({x:722.7},6).to({x:730.5},6).to({x:740.9},6).to({x:752.6},6).to({x:753.9},1).to({x:770.8},5).to({x:783.8},5).to({x:799.4},5).to({x:816.3},5).to({x:826.7},5).to({x:837.1},5).to({x:847.5},5).to({x:859.2},5).wait(1).to({x:873.5},5).to({x:887.8},5).to({x:896.9},6).to({x:917.7},5).to({x:929.4},5).wait(1).to({x:930.9},0).to({x:938.5},4).to({x:954.1},4).to({x:960.6},4).to({x:961.9},1).to({x:980.1},4).to({x:990.5},4).wait(1).to({x:991.6},0).to({x:1002.2},4).to({x:1020.4},4).wait(1).to({x:1029.9},0).to({x:1037.5},4).to({x:1053.1},4).to({x:1059.6},4).to({x:1060.9},1).to({x:1079.1},4).to({x:1089.5},4).wait(1).to({x:1090.6},0).to({x:1101.2},4).to({x:1119.4},4).wait(264));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.7,1.5,154,125.8);


(lib.fondo_mar_cielo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		_stage = this;
		var contenedor=new createjs.Container()
		_stage.addChild(contenedor);
		var clip;
		var orden=0;
		var px
		var py
		createjs.Ticker.addEventListener("tick", crearCosas)
		var activo=true;
		var frecuencia=30
		var ancho=1200
		var alto=600
		var altoFondo=1276
		var escala=18
		var limite=this.limite;
		
		function aleatorio(a,b) {
		         return Math.round(Math.random()*(b-a)+parseInt(a));
		}
		
		function crearCosas(event) 
		{
			//este valor es para limitar el numero de burbujas que suben, con el valor frecuencia
			var valor=aleatorio(1,100);
		 if(activo && valor<frecuencia){	
			var cual=aleatorio(0,1)
			 if(cual==0){
			var clip = new lib.Burbuja();//lib.LINKAGE
			 }
			 else
			 {
			var clip = new lib.Burbuja();//lib.LINKAGE	 
			}
			contenedor.addChild(clip);
			clip.name = "cosa_"+orden
			var orden=Math.floor(Math.abs(Math.random()*10+1));
			clip.orden=orden;
			clip.velocidad=0.7+Math.random()*0.1
			 //clip.orden=Math.abs(Math.random()*3+1);
			clip.x = aleatorio(0,ancho)
			clip.escala=aleatorio(0,1)/escala
			clip.y = aleatorio(alto,altoFondo)
			clip.addEventListener("tick",moverCosa)
		 }
		}
		function moverCosa(evt)
		{
			var cosa=evt.currentTarget
			cosa.x-=0.1*Math.sin(cosa.y)
			//cosa.y-=2+Math.random()*2
			cosa.y-=cosa.velocidad
			cosa.scaleX=cosa.scaleY=cosa.escala
			var orden=Math.abs(Math.random()*3+1);
			//console.log("ORDEN "+cosa.orden);
			//cosa.gotoAndStop(cosa.orden)
			cosa.alpha-=0.003
			if(cosa.y<=limite.y)
				{
					cosa.removeEventListener("tick", moverCosa);
					contenedor.removeChild(cosa)	
				}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// cangrejo
	this.cangrejo = new lib.cangrejo();
	this.cangrejo.name = "cangrejo";
	this.cangrejo.parent = this;
	this.cangrejo.setTransform(67,1212.5,1,1,0,0,0,67,57.5);

	this.timeline.addTween(cjs.Tween.get(this.cangrejo).wait(1));

	// textos fijos
	this.instance = new lib.texto_02();
	this.instance.parent = this;
	this.instance.setTransform(805.5,969.5,1,1,0,0,0,106,41.5);

	this.instance_1 = new lib.TARIFA();
	this.instance_1.parent = this;
	this.instance_1.setTransform(452.4,988.7,1,1,0,0,0,-0.6,48);

	this.instance_2 = new lib.TARIFA();
	this.instance_2.parent = this;
	this.instance_2.setTransform(132.3,988.7,1,1,0,0,0,-0.6,48);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// limite
	this.limite = new lib.limite();
	this.limite.name = "limite";
	this.limite.parent = this;
	this.limite.setTransform(266.5,649,1,1,0,0,0,524.5,0);

	this.timeline.addTween(cjs.Tween.get(this.limite).wait(1));

	// olas
	this.olas = new lib.olas_superficie();
	this.olas.name = "olas";
	this.olas.parent = this;
	this.olas.setTransform(331.4,604.8,4,0.57,0,0,0,303.4,45.8);

	this.timeline.addTween(cjs.Tween.get(this.olas).wait(1));

	// pez_final
	this.pez = new lib.pez_final_1();
	this.pez.name = "pez";
	this.pez.parent = this;
	this.pez.setTransform(909.6,530.6,1,1,0,0,0,220.5,72.5);

	this.timeline.addTween(cjs.Tween.get(this.pez).wait(1));

	// brillos
	this.instance_3 = new lib.LUZ_MAR();
	this.instance_3.parent = this;
	this.instance_3.setTransform(809.1,939.2,1,1,0,0,0,355.4,262.3);
	this.instance_3.alpha = 0.5;

	this.instance_4 = new lib.LUZ_MAR();
	this.instance_4.parent = this;
	this.instance_4.setTransform(469.1,939.2,1,1,0,0,0,355.4,262.3);
	this.instance_4.alpha = 0.5;

	this.instance_5 = new lib.LUZ_MAR();
	this.instance_5.parent = this;
	this.instance_5.setTransform(169.1,939.2,1,1,0,0,0,355.4,262.3);
	this.instance_5.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).wait(1));

	// mar cielo
	this.instance_6 = new lib.fondo_cielo_mar();
	this.instance_6.parent = this;
	this.instance_6.setTransform(1296,0,1,1,0,0,180);

	this.instance_7 = new lib.fondo_cielo_mar();
	this.instance_7.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.fondo_mar_cielo, new cjs.Rectangle(-258.5,0,2119.7,1282.3), null);


// stage content:
(lib._300X600_O2_CANGREJO_V4_T50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		_stage=this;
		var boton = new lib.Boton();
		_stage.addChild(boton);
		boton.x=0;
		boton.y=0;
		boton.cursor="pointer"
		boton.addEventListener("click", fl_MouseClickHandler.bind(this));
		//la variable clickTag la coge del index.html
		function fl_MouseClickHandler()
		{
			_stage.gotoAndPlay("fin");
			console.log("CLICKTAG I");
			javascript:window.open(clickTag)
			
		}
		this.veces=0;
	}
	this.frame_2 = function() {
		var cangrejo=this.mar.cangrejo;
		//cangrejo.x=0
		cangrejo.gotoAndPlay(1)
		//console.log("envio al cangrejo a 1");
	}
	this.frame_744 = function() {
		var mar=this.mar
		mar.pez.gotoAndPlay("in")
	}
	this.frame_846 = function() {
		var mar=this.mar
		mar.pez.gotoAndPlay("out")
	}
	this.frame_1043 = function() {
		this.veces++
		if(this.veces>=2)
			{
				this.stop()
			}else
			{
				this.gotoAndPlay(2)
			}
		_stage=this;
		var boton = new lib.Boton();
		_stage.addChild(boton);
		boton.x=0;
		boton.y=0;
		boton.cursor="pointer"
		boton.addEventListener("click", fl_MouseClickHandler.bind(this));
		//la variable clickTag la coge del index.html
		function fl_MouseClickHandler()
		{
				//_stage.removeAllChildren();
			//_stage.gotoAndPlay("fin");
			console.log("CLICKTAG III");
			
			javascript:window.open(clickTag)
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(742).call(this.frame_744).wait(102).call(this.frame_846).wait(197).call(this.frame_1043).wait(1));

	// texto_03
	this.instance = new lib.texto_03();
	this.instance.parent = this;
	this.instance.setTransform(242.8,275.6,1,1,0,0,0,199.5,26.4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(731).to({_off:false},0).to({alpha:1},13).wait(102).to({alpha:0},10).to({_off:true},1).wait(187));

	// tarifa final
	this.instance_1 = new lib.TARIFA();
	this.instance_1.parent = this;
	this.instance_1.setTransform(132.2,312.4,1,1,0,0,0,-0.6,48);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(865).to({_off:false},0).to({alpha:1},12).wait(167));

	// red de cobertura
	this.instance_2 = new lib.red_de_fibra();
	this.instance_2.parent = this;
	this.instance_2.setTransform(135.7,563.7,1,1,0,0,0,113.9,12);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(865).to({_off:false},0).to({alpha:1},12).wait(167));

	// logo 02
	this.instance_3 = new lib.Logo();
	this.instance_3.parent = this;
	this.instance_3.setTransform(247.5,56.5,1,1,0,0,0,34.5,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1044));

	// mar_cielo
	this.mar = new lib.fondo_mar_cielo();
	this.mar.name = "mar";
	this.mar.parent = this;
	this.mar.setTransform(150,-27,1,1,0,0,0,150,650);

	this.timeline.addTween(cjs.Tween.get(this.mar).wait(140).to({x:-170},141,cjs.Ease.none).wait(123).to({x:-528},140).wait(155).to({x:-535.2,y:650.2},45,cjs.Ease.quartOut).wait(300));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108.5,-377,2119.7,1282.3);
// library properties:
lib.properties = {
	id: '6AB20827971934478BF186E34F05C262',
	width: 300,
	height: 600,
	fps: 64,
	color: "#003980",
	opacity: 1.00,
	manifest: [
		{src:"images/brazo_derecho.png", id:"brazo_derecho"},
		{src:"images/brazo_izquierdo.png", id:"brazo_izquierdo"},
		{src:"images/bubble_grande_02.png", id:"bubble_grande_02"},
		{src:"images/cuerpo.png", id:"cuerpo"},
		{src:"images/dedo_derecho.png", id:"dedo_derecho"},
		{src:"images/dedo_izquierdo.png", id:"dedo_izquierdo"},
		{src:"images/fondo_cielo_mar.jpg", id:"fondo_cielo_mar"},
		{src:"images/olas.jpg", id:"olas"},
		{src:"images/pata_derecha_01.png", id:"pata_derecha_01"},
		{src:"images/pata_derecha_02.png", id:"pata_derecha_02"},
		{src:"images/pata_trasera_final.png", id:"pata_trasera_final"},
		{src:"images/pez_final.png", id:"pez_final"},
		{src:"images/pinza_derecha.png", id:"pinza_derecha"},
		{src:"images/pinza_izquierda.png", id:"pinza_izquierda"},
		{src:"images/sombra_cangrejo.png", id:"sombra_cangrejo"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['6AB20827971934478BF186E34F05C262'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
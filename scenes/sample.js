breadam.scene({
	
	constructor:function(world){
		this.base(world);
		
		var hello = world.body({
			looks:'text',
			physics:'dynamic',
			text:'Hello World',
			x:100,
			y:20,
			mass:1
			
		});

		var underCons = world.body({
			looks:'text',
			physics:'dynamic',
			text:'(under construction)',
			x:200,
			y:80,
			mass:1
			
		});
	},
/*	
	onUpdate:function(world){
		this.base(world);
	},
*/
/*	
	onResize:function(world){
		this.base(world);
	},
*/

});

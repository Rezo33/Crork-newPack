let app = new Vue({
	el:'#app',
	data:{
		counter:0,
	},
	methods:{
		increment:function(){
			if(this.counter < 3){
				return this.counter ++
			}
			else{
				 return this.counter = 0;
			}
		},
		decrement:function(){
			if(this.counter > 0){
				 return this.counter --
			}
			else{
				 return this.counter = 3;
			}
		},
	}
})
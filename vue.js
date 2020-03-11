let app = new Vue({
	el:'#app',
	data:{
		counter:0,
	},
	methods:{
		increment:function(){
			console.log(this.counter)
			if(this.counter < 3){
				return this.counter ++
			}
			else{
				 return this.counter = 0;
			}
			console.log(this.counter)
		},
		decrement:function(){
			
			console.log(this.counter)
			if(this.counter > 0){
				 return this.counter --
			}
			else{
				 return this.counter = 3;
			}
		},
	}
})
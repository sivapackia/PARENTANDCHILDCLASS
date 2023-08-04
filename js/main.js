

	// prime number parent and child useing
	
	class Parent{
		constructor (number){
			this.num=number;
		}
		div(){
			
			let count=0;
	
	for(var i=1;i<=this.num;i++){
		if(this.num%i==0){
			count++;
		}
		}
		
		if(count==2){
			console.log("prime number");
		}
		else{
			console.log("not a prime number");
		}
		}
		
	}
	
	class Child extends Parent{
		constructor(num){
			super()
			this.num=num;
		}
	}
	
	let child=new Child(45);
	child.div()
		
	
	

	
	
	
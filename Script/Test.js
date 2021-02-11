console.log('File Linked')


function doClick(){
	alert('You Clicked');
}

function changeText(object){
	object.innerHTML = 'You Clicked';
}

function showDate(){
	var time = document.getElementById("time");
	console.log(time);
	time.innerHTML =  Date();
}

/* 
	1. Background color change.
	2. Select/Option button value

 */
function onColorChange(value)
{
	console.log(value);
	var bodyBg = document.getElementById('body');
	body.style.backgroundColor = value;
}

function validateForm()
{
	var firstName =  document.forms["myForm"]['firstName'].value;
			
	if (firstName == null || firstName ==""){
		alert("first name is required.");
		return false;
	}

	if (firstName.length < 3){
		alert("first name must be at least 3 chars");
	return false;
	}
}


function arrayExamples(){
	/* array examples */
	var colours=['red','blue','green']
	console.log(colours[0]);
		
	var color = new Array('red','blue','green');
	console.log(color[1]);
		
	/* loop examples */
	for(var i=0; i<10;i++){
		console.log(i);
	}
}


function objectExamples(){



		/* class/object examples */
		var person = {
			firstName: 'Kevin',
			surname: 'Knowles',
			age: 42,
			children:['Faith','Holly'],
			address: {
				street: '53 Hemley Road',
				city: 'Orsett',
				postCode:'RM163DG'
			},
			fullName: function(){
				return this.firstName + " " + this.surname;
			}
		}

		/* simple object */
		var dog = new Object();
		dog.Name = 'Fergus'
		dog.NoOfLegs = 4
		dog.speak = function(){
			return 'Woof, Woof'
		}

		/* constructor pattern */
		function Animal(shortName, numberOfLegs, speak){
			this.shortName=shortName;
			this.numberOfLegs = numberOfLegs
			this.speak = function(){
				return speak;
			}
		}

		var fergus = new Animal('fergus','4','Woof');
		var jasper = new Animal('Jasper','16','meow');


		console.log(person);		
		console.log(person.fullName());		
		console.log(dog.speak());
		console.log(fergus.shortName);
		console.log(jasper.shortName);
		console.log(jasper.speak());
}
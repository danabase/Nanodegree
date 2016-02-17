//quicksnippets.js

var extend = function(x, obj){
  for (var o in obj) {
    x[o] = obj[o];
  }
  return x;
};

var fn = function(one,two) {
console.log(this,one,two);
};
var r ={'color':'red'}; 
var g = {'color':'green'};
var b = {'color':'blue'};
var y = {'color':'yellow'};
r.method = fn;

var amy = teacherLike({},"science");
var ben = teacherLike({},"history");

var teacherLike = function(obj,subj,kidstaught) {
    obj.subj = subj;
    obj.kidstaught = kidstaught;
    obj.yearpass = function(){
        this.kidstaught++;
  };
    obj.speak = function(){
    	console.log("I teach "+this.subj);
    };
  return obj;
};

var amy = teacherLike({},'algebra',10);


var Teacher = function(subj,yrstaught) {
	var obj = {subj:subj,yrstaught:yrstaught};
	extend(obj,Teacher.methods);
	return obj;
};

Teacher.methods = {
	yearpass: function() {
		this.yrstaught++;
  }, speak: function() {
  	console.log('I teach '+this.subj);
  }

};
////////////////////////////////////////////
//constructor prototype
var Teacher = function(subj,yrstaught) {
	var person = Object.create(Teacher.methods);
	person.subj = subj;
	person.yrstaught = yrstaught;
	return person;
};

Teacher.methods = {
	yearpass: function() {
		this.yrstaught++;
	}, speak: function() {
		console.log('I teach '+this.subj);
	}
};
///////////////////////////
var Teacher = function(subj,yrstaught) {
	var person = Object.create(Teacher.prototype);
	    person.subj = subj;
	    person.yrstaught = yrstaught;
	    return person;
};

Teacher.prototype.yearpass = function(){
	this.yrstaught++;
};

Teacher.prototype.speak = function(){
	console.log('I teach '+this.subj);
}
/////////////////////////
//pseudoclassical...construction mode
var Teacher = function(subj,yrstaught){
	this.subj = subj;
	this.yrstaught = yrstaught; 
};

Teacher.prototype.yearpass = function() {
	this.yrstaught++;
};

Teacher.prototype.speak = function() {
	console.log('I teach '+this.subj);
};


////////////////////////////////
//class/subclass

var Instructor = function(subj,yrs){
	this.subj = subj;
	this.yrs = yrs;
	this.yearpass = function(){
		this.yrs++;
	};
    this.speak = function(){
    	console.log('I teach '+this.subj);
    };
};

var Teacher = function(subj,yrs) {
	Instructor.call(this,subj,yrs);
	this.suspend = function() {
		console.log("Permanent Record!")
	};
};

var Professor = function(subj,yrs) {
	Instructor.call(this,subj, yrs);
	this.office_hours = function() {
		console.log("Tuesdays from 1 to 4");
	};
};



var Car = function(loc) {
	var obj = {loc:loc};
	extend(obj,Car.methods);
	return obj;
};
Car.methods = {
	move : function() {
		this.loc++;
	}
};
                                   //
var Car = function(loc) {
	var obj = Object.create(Car.methods);
	obj.loc - loc;
	return obj;
};                                    

Car.methods = {
	move :function() {
		this.loc++;
	}
}

var Car = function(loc) {
	this.loc = loc;
};
Car.prototype.move = function() {
	this.loc++;
}

///////////////////
//super-sub refined with use of prototypes

var Instructor = function(subj,yrs) {
	this.subj = subj;
	this.yrs = yrs;
}

Instructor.prototype.yrpass = function() {
	this.yrs++;
	console.log('years taught now: '+this.yrs);
};

Instructor.prototype.speak = function() {
	console.log('I teach '+this.subj);
}
let sayHi = function(cb){
    console.log('run');
    cb();
};

let user = {
    name: 'chinh',
    cb: function(){
        console.log('day la ten toi ' + this.name);
    }
};
let user2 = {
    name: 'cuong'
};

sayHi(user.cb.bind(user));

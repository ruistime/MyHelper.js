(function(){
	

	// Save bytes in the minified (but not gzipped) version:
    var ArrayProto = Array.prototype, ObjProto = Object.prototype;

	/* Create quick reference variables for speed access to core prototypes.怎么理解这句话？

		如jquery传入window对象；


	*/
	var
	push = ArrayProto.push,
	slice = ArrayProto.slice,
	toString = ObjProto.toString,
	hasOwnProperty = ObjProto.hasOwnProperty;
	var
	nativeIsArray = Array.isArray,
	nativeKeys = Object.keys,
	nativeCreate = Object.create;
	// All **ECMAScript 5** native function implementations that we hope to use
	// are declared here.

------------------------------------------------华丽的分割线 -----------------------------
	//构建 _r对象；
	var  _r={};
	_r.prototype = {
	
	


	/*辅助函数，基础方法*/
	/*
	1）不同类型间比较，==之比较“转化成同一类型后的值”看“值”是否相等，===如果类型不同，其结果就是不等
	2）同类型比较，直接进行“值”比较，两者结果一样
	2、对于Array,Object等高级类型，==和===是没有区别的
	进行“指针地址”比较
	3、基础类型与高级类型，==和===是有区别的
	1）对于==，将高级转化为基础类型，进行“值”比较
	2）因为类型不同，===结果为false
	检测是否是对象,1、对于string,number等基础类型，==和===是有区别的
	*/
	_isObj=function(obj){
		return toString.call(obj) ==='[object Object]';
	}，
	//检测是否是是数组
	_isArray=nativeIsArray||function(obj){
		return toString.call(obj)==='[object Array]';
	}
	//检测是否是函数
    _.isFunction = function(obj){
    	return Object.prototype.toString.call(obj);
    }
	/*关于for in的一些认识:
	1:精神性无序性：
			var o = {
						'01':'1',
						'2':'2',
						'jintian':1
					}
			for (var key in o){
				alert(o[key])
			}//'2','1','jintian'

	principles:
	Object对象使用哈希表来存储数据 就哈希表的原理来说 对每个键，都会由“哈希函数”计算出一个唯一的“哈希键值” 之后会按这个哈希键值来进行排序 因为flash哈希函数对程序员本身未知， 因此只能暂将Object对象的属性当作无顺序。
		
    2:    
	
        //只遍历对象自身的属性，而不包含继承于原型链上的属性。  
        if (obj.hasOwnProperty(key) === true)


	*/
	//继承基础方法：createAssigner;
    //闭包化小参数，柯里化？？
    //浅复制？深复制：
    /*var deepCopy=function(obj){
	    results={};
	    for(var key in obj){
	    results[key]=typeof key=='Object'?deepCopy(obj[key]):obj[key]
	    }
	    return results;
	}*/
    var createAssigner=function(keysFunc,defaults){
    	return function(obj){
    		var length=arguments.length;//获取对象个数；
    		//为了保证defaults时返回的始终是一个对象
    		if(defaults) obj=Object(obj)
    		if(length<2 || obj ==null)  return obj;
    		for(var i=1;i<lenth;i++){
    			var Values = arguments[i],
    			 	keys = keysFunc(Values),
    			 	l=keys.length;
    			for(var j=0;j<l;j++){
    				var key= keys[j];
    				if(obj[key] ===void 0||!defaults) 
    					obj[key]=Values[key];
    			} 
			}
		 	return  obj;
    	}

    };
	//判断xhr;
	var XhrInIe = typeof window !=='undefined' && !!window.ActiveXObject&&!(window.XMLHttpRequest)




	/*对外api*/
    //检测一个属性是否属于对象原型属性
    _hasOwnProperty = function(obj,key){
    	return obj !=null&& hasOwnProperty.call(obj,key)
    }
    //获取一个对象的键，第二个参数决定是否需要原型属性。
    _getKey = function(obj,own){
    	if(!_isObj) return [];
    	var keys=[];
    	for(var key in obj){
    		if(own&&_hasOwnProperty){
    			keys.push(key)
    		}else{
    			keys.push(key)
    		}
    	return  keys; 
    	}
    }
    //extend
    _extend = createAssigner(_getKey(obj,false))
    //extendOwn
    _extendOwn = createAssigner(_getKey(obj,true))
    //defaultExtend
    _defaultExtend= createAssigner(_getKey(obj,true),true)
    //获取对象的属性或者调用函数获取对象的某项属性
    _result = function(obj,prop,fallback){
    	var value = obj == null? void 0:obj[prop];
    	if(value === void 0){
    		value =fallback;
    	}
    	return _.isFunction(value)?value.call(object):value
    }
    //克隆一个对象，看做是extend的单例
    _.clone = function(obj){
    	if(!_isObj) return obj;
    	return _.isArray ? obj.slice():_.extend({},obj)
    }





    //emulate
















	}


})()

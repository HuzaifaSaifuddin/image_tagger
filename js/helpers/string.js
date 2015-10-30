
// add starts_with function to string
if (typeof String.prototype.starts_with != 'function') {
    String.prototype.starts_with = function (str){
        if(is_empty(str)) return false
        return this.slice(0, str.length) == str;
    };
}
//string manipulation
//Question1:
function reverse (ch){
    var ch2="";
    for(var i=ch.length-1;i>=0;i--){
        ch2=ch2+ch[i]
    }
    return ch2;
}
//question2:
function count (ch) {
    var s=0;
    for(var i=0;i<ch.length;i++){
        s++;
    }
    return s;
}
//Question3:
function capitalize(ch){
    var ch2 = "";
    for(var i = 0; i < ch.length; i++){
        if (i == 0) {
            ch2 =ch2+ ch[i].toUpperCase();
        }
        else if (ch[i-1] == " ") { 
            ch2 =ch2+ ch[i].toUpperCase();
        }
        else {
            ch2 =ch2+ ch[i]; 
        }
    }

    return ch2;
}
//Array functions
//Question1
function Max(arr) {
    var max = arr[0]; 
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];} }
    return max;
}
function Min(tab) {
    var min = tab[0];
    for (var i = 1; i < tab.length; i++) {
        if (tab[i] < min) {
            min = tab[i];}}
    return min;
}
//Question2
function sum(tab){
var s=0;
    for (var i = 0; i < tab.length; i++){
        s=s+tab[i];
    }
    return s;}
//question3:
 function filter(tab, condition) {
    var s = [];
    for (var i = 0; i < tab.length; i++) {
        if (condition(arr[i])) {   
            s.push(arr[i]);}}
    return s;
}
//Mathematical functions
//question1:
function factorial(n) {
    if (n < 0) return
    var s = 1;
    for (var i = 1; i<= n; i++) {
        s = s*i;
    }
    return s;}
//question2:
function Prime(nbr) {
    if (nbr <= 1) return false;
    for (var i = 2; i < num; i++) {
        if (nbr % i == 0) return false; 
    return true;}}
//questionn 3:
function fibonacci(n) {
    var s = [0, 1];
    for (var i = 2; i < n; i++) {
        s[i] = s[i - 1] + s[i - 2];
    }
    return s;
}

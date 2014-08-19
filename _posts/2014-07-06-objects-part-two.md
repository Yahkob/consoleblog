---
layout: post
title: Objects in Javascript part two
tags: javascript
comments: true
share: true
---

Yesterday I talked about objects in javascript and the basis of how they are constructed in javascript. I wanted to expand on objects, why they are amazing and how you can utilize them. Lets say we want to get the most repeated character in a string. We write a function that takes in a string and spits out the character that is the most repeated, if two different characters are repeated the same amount (i.e "ccoode") the first occurence should be returned, in this case the letter 'c'. Before I learned about how hashtables and objects worked I probably would have done this with a for loop in a for loop. This is bad time complexity the fact that there is a for loop within a for loop turns the time complexity from linear or o(n) to quadratic ( o(n^2) ). With an object this function is linear, all we have to do is iterate through each character and each time add it into a hash incrementing by 1 for each we character we find. For instance the object of the above mentioned string would be:

{% highlight Javascript %}
{c:2,o:2,d:1,e:1}
{% endhighlight %}

 We could figure out the highest occuring character by making a variable, count and checking if the current character's value in our hash is higher than the highest count if it is then we set count to the new highest recorded value. In order to keep track of the character that is occuring most we also set a variable to the result string and set said highest values key to this variable. This way we loop once and we're done.

{% highlight Javascript %}
var characterOccurence = function(str){
  var duplicateCheck = {};
  var resultStr = '';
  var count = 0;
  for(var i = 0; i < str.length; i++){
    duplicateCheck[str[i]] = duplicateCheck[str[i]] || 0;
    duplicateCheck[str[i]]++;
    if(duplicateCheck[str[i]] > count){
      count = duplicateCheck[str[i]];
      resultStr = str[i];
     }
  }
  return resultStr;
};
{% endhighlight %}

You could also run another seperate for loop outside the first for loop iterating through the string.

{% highlight Javascript %}
for(var j = 0; j < str.length; j++){
  if(duplicateCheck[str[j]] > count){
    count = duplicateCheck[str[j]];
    resultStr = str[j];
  }
}
{% endhighlight %}

Theres a reason you don't use a for in loop to iterate through the results. Objects don't always guarantee order so by looping through the str and checking each character in order you are guaranteed order.
Something interesting worth mentioning, this could be done in essentially a line of code using a <a href="http://en.wikipedia.org/wiki/Regular_expression">regular expression:</a>

{% highlight Javascript %}
var characterOccurence = function(str){
  return str.match(/([a-z])\1+/g).sort(function(a,b){
    return a.length - b.length;
  }).pop();
};
{% endhighlight %}

Regexs are very powerful and an awesome tool to use if you know how. Regexs in alot of cases are faster than hard coded functions to solve small problems like this. Interestingly enough a regex and the function using a hash to store data are pretty much neck to neck as far as speed goes. Check out this <a href="http://jsperf.com/regexvshash">jsperf comparison</a> I made and compare for yourself. I also included a nested for loop just to demonstrate how bad it is to achieve quadratic time complexity. Unless you can not avoid it try not to make your function quadratic at all costs! Seeing the comparison should be enough to prove to you objects are extremly powerful! Thanks for reading, I plan to write my next post about coffeescript and backbone and then hopefully Angular. Also if the regex confused you and you're interested in learning more copy my regex and paste it into <a href="http://regex101.com/">regex 101</a>. Stay tuned!
---
layout: post
title: Objects in Javascript part one
tags: javascript
comments: true
share: true
---

Today I want to talk about objects, one of the most important and sometimes overlooked part of the language. Objects are essentially hash tables, the idea of a hash table is an array with data that is available through constant time complexity. In order to implement a hash table you must first make a hashing function. A hashing function essentially takes an element and 'hashes' it to a unique number. I won't go into how an actual hashing function works in respect to keeping on the topic of objects, just know that a hashing function will transform a value into a unique key. So let's say I want to insert something into our hash table, I want to insert the key Bacon with the value Amazing. I hash bacon and lets say our hashing function hashes it to four. As I said before a hash table is an array so since our value is four this is the index our key value pair will be inserted. How will it be inserted though? Surely we can't have just two elements in an array with no relationship. How can we group keys with their values together? And what if another key hashes to four? First off we create an array at that index we will call a bucket. Then we will create another array inside of our bucket called a tuple. A tuple is quite simply an array to contain the relation between the key and the value. So what if we add something extremly similar like "Baconn" with a value of "Delicious". This is where the bucket that I just mentioned that may have confused you comes in. Since Bacon and Baconn are so similar Baconn will also hash to four and be stored in a tuple in the same bucket as Bacon. So not only do we have an array(the bucket) within our array we have arrays(tuples) within that array! For the sake of teaching I'll indicate each index instead of an empty array.

{% highlight Javascript %}
[0,1,2,3,[[Bacon,Amazing],[Baconn,Delicious]]]
{% endhighlight %}

Now what if we want to look up how Baconn made us feel when we inserted it into our hash table?
We do the same thing as when we inserted it, we hash Baconn and it hashes to 4. So now we know we can look in index 4 for our desired element. Since there's two keys we'll have to iterate through the bucket. This may seem like a lot of work but think of the time complexity of iterating through an array with hundreds of items vs searching through a hash table with hundreds of items. The odds are you wouldn't be iterating through nearly as many elements iterating through a specific bucket as you would iterating through a large array. In the worst case look up of an item would be linear, this would be if you had a bad hashing function or did not resize your hash when it got to big (which I didn't go into). On average this will be constant time look up. You are given the index of the target element and in most cases you will only have to iterate through minimal items in a bucket to find the target element.
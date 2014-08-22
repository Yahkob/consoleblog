---
layout: post
title: Responsive Design and @media
tags: CSS3, Responsive Design, HTML5
comments: true
share: true
---

Today I wanted to talk about some interesting things I've found out about CSS3. First off lets talk about tables.. they are terrible. Unless of course you are displaying tabulature data with them. Maybe you don't want to use a table though maybe you just want to use some divs and have them behave like they are tables. You can still do this without using a table tag! Here's how:

{% highlight HTML %}
<div class="pseudo-table">
  <div class="pseudo-row">
    <div class="pseudo-data">
      I'm some data!
    </div>
  </div>
</div>
{% endhighlight %}
So we have some divs the same way we would have a table, rows and table data set up. Now we need a way to make our divs act like tables without table tags so people won't make fun of us we can do this by simply setting each classes CSS accordingly:

{% highlight CSS %}

.pseudo-table {
  display: table;
}

.pseudo-row {
  display: table-row;
}

.pseudo-data {
  display: table-cell;
}

{% endhighlight %}

There you have it all of these formerly boring divs are now exciting tables. Now one thing tables are terrible at are being responsive.. now it depends on what your definition of a responsive table is. You may want your table to collapse vertically or you may want your table to retain the same shape and just get smaller. I recently was part of a project <a href="http://javascriptbattle.com">Javascript Battle</a> where one challenge was to make a "game board" of sorts and to make that board responsive. I used the exact same method I described above, using divs and assigning table like properties to said divs. First off you need to ask yourself what you want your applications content to look like. Do you want elements to stay the exact same size? Use an absolute length unit like <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/length">px</a>. Do you want things to shrink or expand as you widen or narrow your display? Use something like vw(view port width) vw adjusts elements size to the size of the users display. Open your dev tools and watch as you expand or narrow your browser. Depending on which browser you use it should show you the width and height of your browser(Chrome is the top right hand side). You might notice if you made a square div that is 10vw tall and wide that if you went from a 1200px wide display to a 700px wide display the square would shrink but retain shape. For the most part shrinking and expanding your browser horizontally should be when you use this view width. If you for some reason desire things to shrink when you vertically shrink or expand your browser you can use vh(viewpoint height) which does the same thing as vw but.. you guessed it makes things vertically responsive. One thing that confused me when starting to make responsive layouts was intuitively it made more sense for % to make elements responsive. Where I was wrong is when you set an elements width/height using percent you are setting the percent corresponding to its parent element. For instance you have a 200px tall div, you put another div inside of it and set it to a height of 40% this would then translate to an 80px tall div. Now that I've covered some basic responsive fundamentals there is a caveat that comes into the picture. No matter how hard you try elements on your application might not always act as you would like them to, especially when it comes to developing responsive mobile friendly apps. Thats where @media comes in, @media is a magical tool that allows you to change your CSS on specific conditions. For instance lets say you have a drop down menu and as soon as you shrink your browser window to a certain size you run out of room and want to hide said menu.

{% highlight HTML %}
<select class="dropdown">
  <option value="1">option 1</option>
  <option value="2">option 2</option>
  <option value="3">option 3</option>
  <option value="4">option 4</option>
</select>
{% endhighlight %}

Maybe once the display is to 600px you want to hide the drop down. You can make a @media query

{% highlight CSS %}

@media (max-width: 600px) {

  .dropdown {
    display: none;
  }

}

{% endhighlight %}

Bascially we just said when the width of the browser is 600px change the CSS of the classes nested in @media. And the menu is gone! Now go make your application do really cool stuff with your new knowledge of CSS3 magic.

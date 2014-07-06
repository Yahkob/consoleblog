---
layout: post
title: Deploying Jekyll with Azure
tags: Azure, Jekyll
comments: true
share: true
---
Just wanted to put together a short post about deploying to Azure using Jekyll. I had a little trouble initially setting everything up as I had never used Jekyll or Azure. With that being said I wanted to give a brief tutorial of this process so you don't run into the same problems I did. First off fork and clone <a href="https://github.com/jekyll/jekyll">Jekyll</a>, I personally use the <a href="https://github.com/mmistakes/hpstr-jekyll-theme">hipster</a> layout for Jekyll. Second you will need make a new file and name it .deployment. Since my blogs directory is _site my .deployment file should look something like this:

    [config]
    project = _site

Now that we've made a .deployment file it's time to make your domain on azure first login and on the main page

<img src='/images/azureweb.png'>

<img src='/images/customcreate.png'>

<img src='/images/git.png'>

<img src='/images/postsource.png'>



Select github and the repository you have your blog in. Before you deploy edit your _config.yml, feel free to edit and personalize any information you see fit in your config file but you have to change the url property from localhost:3000 to your azure url we created. In my case http://consoleblog.azurewebsites.net. Save your config file, commit and push to github then run

{% highlight bash %}
$jekyll serve
{% endhighlight %}

And that's it your Jekyll blog is deployed to azure! Azure will automatically redeploy from your github everytime you push to your github.

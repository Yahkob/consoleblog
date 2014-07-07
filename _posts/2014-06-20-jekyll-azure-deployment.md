---
layout: post
title: Deploying Jekyll with Azure
tags: Azure, Jekyll
comments: true
share: true
---
Just wanted to put together a short post about deploying to Azure using Jekyll. I had a little trouble initially setting everything up as I had never used Jekyll or Azure. With that being said I wanted to give a brief tutorial of this process so you don't run into the same problems I did. First off fork and clone <a href="https://github.com/jekyll/jekyll">Jekyll</a>, I personally use the <a href="https://github.com/mmistakes/hpstr-jekyll-theme">hipster</a> layout for Jekyll. Now cd into your blogs directory, make a new file named .deployment then open it in sublime:

{% highlight bash %}
$ touch .deployment
$ subl .deployment
{% endhighlight %}

 Since my blogs directory is _site my .deployment file should look something like this:

    [config]
    project = _site

Now that we've made a .deployment file it's time to make your website

<img src='/images/azureweb.png'>
<img src='/images/customcreate.png'>
<img src='/images/git.png'>
<img src='/images/postsource.png'>



Select github and the repository you have your blog in. Before you deploy edit your _config.yml, feel free to edit and personalize any information you see fit in your config file but you have to change the url property from localhost:3000 to your azure url we created. In my case 'YahkobTutorial.azurewebsites.net'. Save your config file then run

{% highlight bash %}
$ jekyll build
{% endhighlight %}

if you want to preview your blog and make tweeks to it locally before you deploy it you can simply run

{% highlight bash %}
$ jekyll serve
{% endhighlight %}

this will run on localhost:3000 even after you edit your url in config. By doing this Jekyll will create your site directory. Verify build created some sort of site directory. We need to make sure because this is referenced in your .deployment file. Make sure your site directory has an index.html file with all of your content. And that's it your Jekyll blog is deployed to azure! Azure will automatically redeploy from your github everytime you push to your github.

<h2> Optional step</h2>
If you're blogging until your fingers set on fire you might consider making a simple grunt file. Not sure what Grunt is? Check out <a href="http://www.gruntjs.com/">gruntjs.com</a> if you're interested, essentially it's a task runner. You can do a lot of very useful and cool things with grunt but in this case I'm just going to automate

{% highlight bash %}
$ jekyll build
{% endhighlight %}

whenever you save a file. First run the following

{% highlight bash %}
$ npm install grunt
$ npm install grunt-shell
$ npm install grunt-contrib-watch
{% endhighlight %}

 There should already be a Gruntfile.js I might be doing something terribly wrong but I never use the default Gruntfile we get for free. Just put the default one in a safe place and make a new file with the same name.

{% highlight javascript %}
module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    shell: {
      build: {
        command: 'jekyll build'
      }
    },
    watch: {
      scripts:{
        files: ['_config.yml', '_posts/*'],
        tasks: ['shell:build']
      }
    }
});

grunt.loadNpmTasks('grunt-shell');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.registerTask('default', ['watch']);

};
{% endhighlight %}

  First we'll need to setup our Grunt file. I won't go too much into the syntax or why what does what. We're going to need to set up the configuration of our grunt file. We first need to setup a way for grunt to read our package.json so grunt can import data from package.json. Then with our shell module we can specify what command we want grunt to execute in terminal in this case jekyll build. After that we'll set up which files to watch and what to do when they change. In case the asterik is confusing to you it just means literally any file in _posts. We then set its task to build from shell. Load in your modules then register grunts default behavior when you run

{% highlight bash %}
$ grunt
{% endhighlight %}

and there you have it. When you run this your jekyll site will build automatically. All you have to do is commit and push.


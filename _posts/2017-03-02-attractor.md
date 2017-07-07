---
published: true
layout: post
show_worktitle_sidebar: true
tags: works
JB :
  analytics : false
---

{% include JB/setup %}


{% for post in site.posts %}
	{% assign pt = post.title | downcase %}
	{% if 'attractor' == pt %}
<h4><a href="{{ BASE_PATH }}{{ post.url }}">Attractor</a></h4>
	{% endif %}
{% endfor %}

<p>
Site Specific  - Light Installation / 2017<br />
fluorescent tubes, cables, metal/wood structure, electric current<br />
Feijiacun, Beijing<br />

In cooperation with <i>Ye Shangda</i>
<br />
assistance: Hu Xinru (explorations), Chao Fu-Le (base camp)
<br /><br />			

As a site specific intervention the Attractor is built in a public space, connects to its sur- roundings and reacts to changes in the electric field. In certain areas in Feijiacun, due to power poles and electrical substations, electric fields build up and can be detected with strip light. They are shaped by the constellations of the architectural setting. Different expansion is found on flat spaces, next to houses, near to trees or on rooftops. The sculpture is not connected to power, but lighted by the electric current it is surrounded by and detects the disturbances when people are passing. It deals with the processes happening in transitory areas and reveals signals that seem to be hidden from general perception.
</p>

<p> <br />Installation View Feijiacun<br /></p>
<img src="{{ site.url }}/images/attractor_day_small1.jpg" alt="image">


<video preload="metadata" poster="{{ site.url }}/images/attractor_poster.jpg" width="100%" height="100%" controls>
  <source src="{{ site.url }}/images/attractor_small.mp4" type="video/mp4">
</video>



<img src="{{ site.url }}/images/attractor_close_small.jpg" alt="image">
<p></p>
<img src="{{ site.url }}/images/attractor_doku_small2.jpg" alt="image">


{% comment %}
<img src="{{ site.url }}/images/attractor_screen_small1.jpg" alt="image">

<img src="{{ site.url }}/images/attractor_day_small1.jpg" alt="image">
<img src="{{ site.url }}/images/attractor_close_small1.jpg" alt="image">
<img src="{{ site.url }}/images/attractor_doku_small1.jpg" alt="image">
<img src="{{ site.url }}/images/attractor_screen_small1.jpg" alt="image">
{% endcomment %}



{% comment %}
<font color="grey">(c)<br /></font>
{% endcomment %}

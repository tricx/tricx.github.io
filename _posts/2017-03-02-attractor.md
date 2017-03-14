---
published: true
layout: post
show_worktitle_sidebar: true
tags: visual
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
2017<br />
Site Specific  - Light Installation<br />
Neon Light, cables, metal/wood structure, electric current<br />
Feijiacun, Beijing<br />

In cooperation with <i>Ye Shangda</i>
<br />
assistance: Hu Xinru (explorations), Chao Fu-Le (base camp)
<br /><br />			

As a site specific intervention, the 'attractor' is positioned under the power lines, connects to it's surroundings and reacts to changes in the electric field. In certain areas in Feijiacun those fields exist and can be detected with neon light. It's shaped by the constellations of the architectural setting. Different density is found at flat spaces, next to houses or trees, on rooftops. The scuplpture is lightend by the electric current it is surrounded by and detects the disturbances when people are passing. It deals with the processes happening at transitory areas and reveals signals that seem to be hidden from general perception.
</p>

<br />
<p> <br />Installation View Feijiacun<br /></p>

<img src="{{ site.url }}/images/attractor_day_small1.jpg" alt="image">
<img src="{{ site.url }}/images/attractor_close_small1.jpg" alt="image">
<img src="{{ site.url }}/images/attractor_doku_small1.jpg" alt="image">
<img src="{{ site.url }}/images/attractor_screen_small1.jpg" alt="image">


{% comment %}
<video width="100%" height="100%" controls>
  <source src="{{ site.url }}/images/flash_small.mp4" type="video/mp4">
</video>
{% endcomment %}


{% comment %}
<font color="grey">(c)<br /></font>
{% endcomment %}





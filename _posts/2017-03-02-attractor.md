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
assistance: Hu Xinru (explorations), Chao Fu-Le(base camp)
<br /><br />			

As a sculptural intervention, the 'attractor' positioned under the power lines connects to it's surroundings and reacts to changes in the electric field. It concentrates on transitory places and signals or areas that seem to be hidden from general perception. In certain areas in Feijiacun those fields exist and can be detected with neon light.
It's shaped by the constellations of architectural settings, houses, trees, flat spaces and interacts with people walking by.
</p>

<br />
<p> <br />Installation View Feijiacun<br /></p>

<img src="{{ site.url }}/images/attractor_screen_small.jpg" alt="image"><br />
<img src="{{ site.url }}/images/attractor_doku_small.jpg" alt="image"><br />
<img src="{{ site.url }}/images/attractor_close_small.jpg" alt="image"><br />
<img src="{{ site.url }}/images/attractor_day_small.jpg" alt="image">

{% comment %}
<video width="100%" height="100%" controls>
  <source src="{{ site.url }}/images/flash_small.mp4" type="video/mp4">
</video>
{% endcomment %}


{% comment %}
<font color="grey">(c)<br /></font>
{% endcomment %}





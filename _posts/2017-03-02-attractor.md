---
published: true
layout: post
show_worktitle_sidebar: true
tags: interventions
JB :
  analytics : false
---

{% include JB/setup %}

<div class="container-parent">
<div class="container-narrow-right">
{% for post in site.posts %}
	{% assign pt = post.title | downcase %}
	{% if 'attractor' == pt %}
<h4><a href="{{ BASE_PATH }}{{ post.url }}"></a>Attractor</h4>
	{% endif %}
{% endfor %}

<p>
Site Specific  - Light Installation, 2017<br />
fluorescent tubes, cables, metal/wood structure, electric current<br />
Feijiacun, Beijing[CN]<br />

In cooperation with <i>Ye Shangda</i>
<br />
assistance: Hu Xinru, Chao Fu-Le
<br /><br />			

As a site specific intervention the Attractor is built in a public space, connects to its surroundings and reacts to changes in the electric field. In certain areas in Feijiacun, due to power poles and electrical substations, electric fields build up and can be detected with strip light. They are shaped by the constellations of the architectural setting. Different expansion is found on flat spaces, next to houses, near to trees or on rooftops. The sculpture is not connected to power, but lighted by the electric current it is surrounded by and detects the disturbances when people are passing. It deals with the processes happening in transitory areas and reveals signals that seem to be hidden from general perception.
</p>
</div>


<div class="container-narrow-left">
<video preload="metadata" poster="{{ site.url }}/images/attractor_poster.jpg" width="100%" height="auto" controls>
  <source src="{{ site.url }}/images/attractor_small.mp4" type="video/mp4" loading="lazy">
</video>
<p><br />Installation view Feijiacun, public space<br /></p>


<img src="{{ site.url }}/images/attractor_close_small_lg.jpg" loading="lazy" alt="image">
<p></p>
<img src="{{ site.url }}/images/attractor_alien_sm.jpg" loading="lazy" alt="image">
<p></p>
<img src="{{ site.url }}/images/attractor_medium_distance_sm.jpg" loading="lazy" alt="image">
<p></p>
<img src="{{ site.url }}/images/attractor_sky_sm.jpg" loading="lazy" alt="image">
<p></p>
<img src="{{ site.url }}/images/attractor_day_small1_lg.jpg" loading="lazy" alt="image">
<p></p>
<img src="{{ site.url }}/images/attractor_doku_small2_lg.jpg" loading="lazy" alt="image">
<p></p>
<img src="{{ site.url }}/images/attractor_test_small.jpg" loading="lazy" alt="image">




</div>
</div>



{% comment %}
<font color="grey">(c)<br /></font>
{% endcomment %}

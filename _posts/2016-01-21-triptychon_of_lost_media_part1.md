---
published: true
layout: post
show_worktitle_sidebar: true
tags: audio visual
JB :
  analytics : false
---

{% include JB/setup %}


{% for post in site.posts %}
	{% assign pt = post.title | downcase %}
	{% if 'triptychon_of_lost_media_part1' == pt %}
<h4><a href="{{ BASE_PATH }}{{ post.url }}">Triptychon of lost media - I</a></h4>
	{% endif %}
{% endfor %}

<p>
	2015 / 2016<br />
	Sound - Installation<br />
	in cooperation with <a href="http://www.kunst-und-raederwerk.de/" target="_blank" style="text-decoration:none; color: grey"><i>Christoph Freidhöfer</i></a> <br /><br />			
	
Metal plates, contact microphones, transducers generate feedback.
<br /><br />
This is the first part of the series 'Triptychon of lost media'. It concerns the examination of emitter and receiver and explores extended techniques of sound generation and playback. The theme emitter / receiver is the conceptual theoretical framework for the work series but also correlates to the applied techniques of how sound and material is shaped.
<br /><br />
Metal plates are used as tone generators as well as loudspeakers due to feedback that emerges from applying transducers and contact microphones to the surface. The installation deals with the propagation of sound in space and feedback between transmitter and receiver.
<br />
The project was developed for 
	<a href="http://www.moe-vienna.org/" target="_blank" style="text-decoration:none; color: grey">
	<i>moe, Schaukasten XII </i></a>
and took part at the sound-festival
	<a href="http://unsafeandsounds.com/" target="_blank" style="text-decoration:none; color: grey">
	<i>unsafe+sounds </i></a>
in June 2015.
	<br /><br />
</p>

<p> <br />Installation View: moe, Schaukasten XII<br /></p>

<img src="{{ site.url }}/images/triptychon_moe1.jpg" alt="image">

<video width="100%" height="100%" controls>
  <source src="{{ site.url }}/images/triptychon_of_lost_media.mp4" type="video/mp4">
</video>


{% comment %}
<iframe width="100%" height="384" frameborder="0" allowfullscreen="" webkitallowfullscreen="" src="http://player.vimeo.com/video/132323972?title=0&amp;byline=0&amp;portrait=0">
</iframe>
{% endcomment %}

<img src="{{ site.url }}/images/triptychon_moe2.jpg" alt="image">
<img src="{{ site.url }}/images/triptychon_concert1.jpg" alt="image">
<font color="grey">(c) Philip Gerlach<br /></font>
<p> <br />Installation View: MemphisMemphis<br /></p>
<img src="{{ site.url }}/images/tolm_small.jpg" alt="image">
<img src="{{ site.url }}/images/tolm2_small.jpg" alt="image">
<font color="grey">(c) Florian Voggeneder<br /></font>

{% comment %}
<img src="{{ site.url }}/images/triptychon_moe3.jpg" alt="image">
<img src="{{ site.url }}/images/triptychon_moe4.jpg" alt="image">
<img src="{{ site.url }}/images/triptychon_concert2_smaller.jpg" alt="image">
{% endcomment %}


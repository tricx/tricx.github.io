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
	{% if 'triptychon_of_lost_media' == pt %}
<h4><a href="{{ BASE_PATH }}{{ post.url }}"></a>Triptychon of lost media - I</h4>
	{% endif %}
{% endfor %}



<p>
Sound - Installation / 2015/16<br />
metal plates, contact microphones, transducers generate feedback.<br />
in cooperation with <a href="http://www.kunst-und-raederwerk.de/" target="_blank" style="text-decoration:none; color: grey"><i>Christoph Freidhöfer</i></a> <br /><br />

This is the first part of the series ‘Triptychon of lost media’. It deals with the examination of emitter and receiver and explores extended techniques of sound generation and playback. The theme ‘emitter-receiver’ is the conceptual theoretical framework for the work series but also correlates to the applied techniques of how sound and material is shaped.<br /><br />
Metal plates are used as tone generators as well as loudspeakers due to feedback that emerges from applying transducers and contact microphones to the surface. Due to the more or less chaotic vibration of the metal sheets and low amplification, the spectrum moves between the sound of fanfares and thunder. The installation deals with the propagation of sound in space and feedback between transmitter and receiver.<br />
The project was developed for 
	<a href="http://www.moe-vienna.org/" target="_blank" style="text-decoration:none; color: grey">
	<i>moe, Schaukasten XII </i></a>
and took part at the sound-festival
	<a href="http://unsafeandsounds.com/" target="_blank" style="text-decoration:none; color: grey">
	<i>unsafe+sounds </i></a>
in June 2015.
<br />
</p>
</div>


<div class="container-narrow-left">

<img src="{{ site.url }}/images/tolm_small.jpg" alt="image">
<p> <br />Installation View: MemphisMemphis<br /></p>
<img src="{{ site.url }}/images/tolm2_small.jpg" alt="image">
<font color="grey">(c) Florian Voggeneder<br /></font>

<p> <br />Installation View: moe, Schaukasten XII<br /></p>

<video preload="metadata" poster="{{ site.url }}/images/tripty1_poster_small.jpg" width="100%" height="auto" controls>
  <source src="{{ site.url }}/images/triptychon_of_lost_media.mp4" type="video/mp4">
</video>

<img src="{{ site.url }}/images/triptychon_moe4_lg.jpg" alt="image">

</div>
</div>

{% comment %}
<iframe width="100%" height="384" frameborder="0" allowfullscreen="" webkitallowfullscreen="" src="http://player.vimeo.com/video/132323972?title=0&amp;byline=0&amp;portrait=0">
</iframe>
{% endcomment %}

{% comment %}
<img src="{{ site.url }}/images/triptychon_moe1.jpg" alt="image">
<img src="{{ site.url }}/images/triptychon_moe2.jpg" alt="image">
<img src="{{ site.url }}/images/triptychon_moe3.jpg" alt="image">
<img src="{{ site.url }}/images/triptychon_moe4.jpg" alt="image">
<img src="{{ site.url }}/images/triptychon_concert2_smaller.jpg" alt="image">
<img src="{{ site.url }}/images/triptychon_concert1.jpg" alt="image">
<font color="grey">(c) Philip Gerlach<br /></font>
{% endcomment %}

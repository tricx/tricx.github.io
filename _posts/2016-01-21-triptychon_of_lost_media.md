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
Sound - Installation, 2015/16<br />
metal plates, contact microphones, transducers generate feedback.<br />
in cooperation with <a href="http://www.kunst-und-raederwerk.de/" target="_blank" style="text-decoration:none; color: grey">Christoph Freidhöfer</a> <br /><br />

This is the first part of the series ‘Triptychon of lost media’. It deals with the examination of emitter and receiver and explores extended techniques of sound generation and playback. The theme ‘emitter-receiver’ is the conceptual theoretical framework for the work series but also correlates to the applied techniques of how sound and material is shaped.<br /><br />
Metal plates are used as tone generators as well as loudspeakers due to feedback that emerges from applying transducers and contact microphones to the surface. Due to the more or less chaotic vibration of the metal sheets and low amplification, the spectrum moves between the sound of fanfares and thunder. The installation deals with the propagation of sound in space and feedback between transmitter and receiver.<br />
The project was developed for 
	<a href="http://www.moe-vienna.org/" target="_blank" style="text-decoration:none; color: grey">
	<i>moe, Schaukasten XII </i></a>
and took part at the sound-festival
	<a href="http://unsafeandsounds.com/" target="_blank" style="text-decoration:none; color: grey">
	<i>unsafe+sounds </i></a>
in June 2015.
</p>
</div>


<div class="container-narrow-left">

<img src="{{ site.url }}/images/tolm_small.jpg" loading="lazy" alt="image">
<p><br />Installation view: MemphisMemphis<br /></p>
<img src="{{ site.url }}/images/tolm2_small.jpg" loading="lazy" alt="image">
<font color="grey">(c) Florian Voggeneder<br /></font>

<p><br />Installation view: moe, Schaukasten XII<br /></p>

<video controls preload="none" poster="{{ site.url }}/images/tript_poster_sm.jpg" width="100%" height="auto">
  <source src="{{ site.url }}/images/triptychon_of_lost_media.mp4" type="video/mp4">
</video>

<img src="{{ site.url }}/images/triptychon_moe4_lg.jpg" loading="lazy" alt="image">
<p></p>
<img src="{{ site.url }}/images/triptychon_concert1_sm.jpg" loading="lazy" alt="image">

</div>
</div>



{% comment %}
<img src="{{ site.url }}/images/triptychon_moe1.jpg" alt="image">
<img src="{{ site.url }}/images/triptychon_moe2.jpg" alt="image">
<img src="{{ site.url }}/images/triptychon_moe3.jpg" alt="image">
<img src="{{ site.url }}/images/triptychon_moe4.jpg" alt="image">
<img src="{{ site.url }}/images/triptychon_concert2_smaller.jpg" alt="image">
<img src="{{ site.url }}/images/triptychon_concert1.jpg" alt="image">
<font color="grey">(c) Philip Gerlach<br /></font>
{% endcomment %}


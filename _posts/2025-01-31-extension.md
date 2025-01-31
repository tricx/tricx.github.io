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
	{% if 'extension' == pt %}
<h4><a href="{{ BASE_PATH }}{{ post.url }}"></a>extensión</h4>
	{% endif %}
{% endfor %}

<p>
site specific action at mercado de frutas, 16.1.2025 7pm, esquina Chacabuco / Ecuador, Valparaiso, Chile<br />
+ adaption for gallery display, Galería Municipal Valparaiso<br />
solar sphere, hdpe-foil, carbon-oxide black, tape, fan<br /><br />
developed for Tsonami Festival Atmosférica 2025<br />
thanks for the support to Carsten Stabenow, Franciso Fuenzalida, Sebastián Ramón Tapia Núñez, Nicolás Spencer, Pablo Saavedra Arevalo + Tsonami Team - video by Florencia Curci<br /><br />


'extensión' was developed for the edition Atmosférica of Tsonami Festival 2025, Valparaiso, Chile. It connects to the theme of atmosféria as a layer that surrounds a location or a social sphere and follows the tactic of dérive, a situationist concept involving aimless wandering through urban environments to create a psychogeographic map of different areas.<br />
In addition to the auditory focus on interventions with lightweight audio diffusion systems, 'extensión' also wants to involve the question of the presence of spaces and explore the different qualities of subliminal immersion or exposure to unfamiliar elements.
<br /><br />
</p>
</div>


<div class="container-narrow-left">

<video controls preload="none" poster="{{ site.url }}/images/extension_poster.jpg" width="100%" height="auto">
  <source src="{{ site.url }}/images/extension_sm.mp4" type="video/mp4">
</video>

<img src="{{ site.url }}/images/extension_sphere_sm.jpg" loading="eager" alt="image">
<p></p>
<img src="{{ site.url }}/images/extension_location1_sm.jpg" loading="eager" alt="image">
<p></p>
<img src="{{ site.url }}/images/extension_galeria_high_sm2.jpg" loading="eager" alt="image" width="53.3%" height="auto" style="float: left">
<p>
<video controls preload="none" poster="{{ site.url }}/images/extension_galeria_poster.jpg" width="46.55%" height="auto">
  <source src="{{ site.url }}/images/extension_galeria_sm.mp4" type="video/mp4">
</video>
<p></p>



<img src="{{ site.url }}/images/extension_plastic_sm.jpg" loading="eager" alt="image" width="25%" height="auto" style="float: left">
<img src="{{ site.url }}/images/extension_black_sm.jpg" loading="eager" alt="image" width="25%" height="auto" style="float: left">
<img src="{{ site.url }}/images/extension_pa_sm.jpg" loading="eager" alt="image" width="25%" height="auto" style="float: right">
<img src="{{ site.url }}/images/extension_tire_sm.jpg" loading="eager" alt="image" width="25%" height="auto" style="float: right">
<p></p>



{% comment %}
<video controls preload="none" poster="{{ site.url }}/images/led_vesch_ila_poster.jpg" width="50%" height="auto">
  <source src="{{ site.url }}/images/led_vesch_ila_ffm.mp4" type="video/mp4">
</video>

<audio controls style="width: 100%" preload="none">
  <source src="{{ site.url }}/images/towers_qo2_190624_vers2.mp3" type="audio/mpeg">
</audio>


{% endcomment %}

{% comment %}
<p>documentation at the residency at meetfactory</p>
<video controls preload="none" poster="{{ site.url }}/images/led_vesch_vid_poster.jpg" width="100%" height="auto">
  <source src="{{ site.url }}/images/led_vesch_sm7.mp4" type="video/mp4">
</video>
{% endcomment %}




{% comment %}
<font color="grey">(c)<br /></font>
{% endcomment %}
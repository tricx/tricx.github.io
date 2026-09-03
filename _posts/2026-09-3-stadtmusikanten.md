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
<h4><a href="{{ BASE_PATH }}{{ post.url }}"></a>Stadtmusikanten</h4>
  {% endif %}
{% endfor %}

<p>
site specific tribute<br />
27.8. - 30.8.2026, we are founding a city 2, Zukunftshof, Wien<br />
<br />
generative 4 channel audio system, linux/odroid u3, supercollider - developed for we are founding a city 2
<br /><br />

Ausgehend von einer vorhergehenden Intervention mit 'IA-voice generator' - eine Esel Stimmgestalt im Zeitalter der AI - versammeln sich hier für 'we are founding a city' die Stadtmusikanten - eine Chimära die sich gelegentlich zu Wort meldet. Nicht mehr brauchbar für die übliche Stimmarbeit, suchen Sie nach einem Zuhause. Angelehnt an die Fabelgesellschaft früherer Wanderschaft, versuchen Sie nun hier ihr Glück einen Platz zu ergattern.
<br /><br />

</p>

{% comment %}
stadtmusikanten, excerpt 29.8.2026:
<br />
<audio controls style="width: 100%" preload="none">
  <source src="{{ site.url }}/images/ship_raven_cut_sh3.mp3" type="audio/mpeg">
</audio>
<img src="{{ site.url }}/images/ship_central_sm.jpg" loading="eager" alt="image">
{% endcomment %}


</div>


<div class="container-narrow-left">

{% comment %}
<img src="{{ site.url }}/images/ship_central_sm.jpg" loading="eager" alt="image">
{% endcomment %}

<img src="{{ site.url }}/images/stadtmusikanten_docu4_cut_sm.jpg" loading="eager" alt="image" width="49.5%" height="auto" style="float: left">

<video controls preload="none" poster="{{ site.url }}/images/stadtmusikanten_poster.jpg" width="49.5%" height="auto" style="float: right">
  <source src="{{ site.url }}/images/stadtmusikanten_sm.mp4" type="video/mp4">
</video>


<div class="clearfix"></div>
<p></p>


<img src="{{ site.url }}/images/stadtmusikanten_docu3_sm.jpg" loading="eager" alt="image" width="49.5%" height="auto" style="float: left">
<img src="{{ site.url }}/images/stadtmusikanten_docu6_sm.jpg" loading="eager" alt="image" width="49.5%" height="auto" style="float: right">

<div class="clearfix"></div>
<p></p>


<div class="clearfix"></div>
<p></p>
<img src="{{ site.url }}/images/stadtmusikanten_docu1_sm.jpg" loading="eager" alt="image">
<p></p>

<img src="{{ site.url }}/images/stadtmusikanten_docu5_sm.jpg" loading="eager" alt="image">
<p></p>

{% comment %}
<div class="clearfix"></div>
<p></p>
<img src="{{ site.url }}/images/ship_system_sm.jpg" loading="eager" alt="image" width="49.5%" height="auto" style="float: left">
<img src="{{ site.url }}/images/ship_panel_sm.jpg" loading="eager" alt="image" width="49.5%" height="auto" style="float: right">
<div class="clearfix"></div>
{% endcomment %}
</div>
</div>




{% comment %}

<p></p>
<p>still image from the EMI Trust Archive 'Nipper runs Amok!' for a Mutoscope documentation for The Gramophone Company</p>
<p></p>

<font color="grey">(c)<br /></font>
{% endcomment %}
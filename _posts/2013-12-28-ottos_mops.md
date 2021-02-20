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
	{% if 'ottos_mops' == pt %}
<h4><a href="{{ BASE_PATH }}{{ post.url }}"></a>Ottos Mops</h4>
	{% endif %}
{% endfor %}

<p>
Speech - Intervention - Animal, 2013 - ongoing<br />
loudspeaker, parabolic microphones, micro controller, motor<br />
in cooperation with <a href="http://www.kunst-und-raederwerk.de/" target="_blank" style="text-decoration:none; color: grey">Christoph Freidhöfer</a> <br /><br />
The robot moves around the exhibition space, orienting itself based on the events, records the speech of other visitors and articulates clever sayings. Using its two parabolic microphone ‘ears’ with the help of the shielding function of the foam ‘hairstyle’ it listens to the most interesting events and moves in direction to where it suspects appealing things to happen. There the robot takes on its journey, remembering snippets of conversations. Otherwise it is striking sayings like ‘the most popular occupations for men and women’ or a quote from ‘Alte Meister’ by Thomas Bernhard.<br /><br />
</p>
</div>


<div class="container-narrow-left">
<video controls preload="none" poster="{{ site.url }}/images/ottos_mops_poster_small.jpg" width="100%" height="auto">
  <source src="{{ site.url }}/images/ottosmops.mp4" type="video/mp4">
</video>


<p> <br />Ottos Mops at 'What The Shop'<br /></p>
<img src="{{ site.url }}/images/ottosmops_small_lg.jpg" alt="image">

<p> <br /> <br />Fanpostkarte von 
	<a href="http://www.heterotypia.net/" target="_blank" style="text-decoration:none; color: grey">
	<i>Natalie Deewan</i></a>
</p>
<img src="{{ site.url }}/images/petit_conferencier_card_I_sm.jpg" loading="lazy" alt="image">
<img src="{{ site.url }}/images/petit_conferencier_card_II_sm.jpg" loading="lazy" alt="image">

</div>
</div>

{% comment %}
<iframe width="100%" height="384" frameborder="0" allowfullscreen="" webkitallowfullscreen="" src="http://player.vimeo.com/video/66463893?title=0&amp;byline=0&amp;portrait=0">
</iframe>
{% endcomment %}




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
	{% if 'a_car_from_above' == pt %}
<h4><a href="{{ BASE_PATH }}{{ post.url }}"></a>A Car from ABove</h4>
	{% endif %}
{% endfor %}

<p>
toy car, cable, coil, high ceiling, 2012<br />
in cooperation with <a href="http://www.praxistest.cc/" target="_blank" style="text-decoration:none; color: grey"><i>Paul_Reza Klein</i></a><br />

A toy police car falls in free fall at the exhibition Dimensions Variable # at Mo.ë. When the car is switched on, the car‘s flashing lights start flashing and it sounds: ‘Police, do not move - [sound- effect: gunshot] - you are under arrest!’ The car is equipped with a conductive cable on a coil that is attached to the ceiling. At random time intervals, the car falls from the ceiling to shortly before the impact on the ground.<br /><br />
</p>
</div>


<div class="container-narrow-left">
<video controls preload="none" poster="{{ site.url }}/images/acab_poster.jpg" width="100%" height="auto">
  <source src="{{ site.url }}/images/acab_small.mp4" type="video/mp4" loading="lazy">
</video>

</div>
</div>



{% comment %}

<iframe width="100%" height="384" frameborder="0" allowfullscreen="" webkitallowfullscreen="" src="http://player.vimeo.com/video/59054272?title=0&amp;byline=0&amp;portrait=0">
</iframe>

<p><br /><br />view of the motor that lifts it all up:<br /><br /></p>
<img src="{{ site.url }}/images/acab1.jpg" alt="image">
![image]({{ site.url }}/images/acab1.jpg)
{% endcomment %}

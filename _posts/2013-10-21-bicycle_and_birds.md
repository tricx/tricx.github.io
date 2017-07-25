---
published: true
layout: post
show_worktitle_sidebar: true
tags: works
JB :
  analytics : false
---

{% include JB/setup %}


{% for post in site.posts %}
	{% assign pt = post.title | downcase %}
	{% if 'bicycle_and_birds' == pt %}
<h4><a href="{{ BASE_PATH }}{{ post.url }}">Bicycle and Birds</a></h4>
	{% endif %}
{% endfor %}

<p>
2008<br />
video (6mn 30)<br /><br />

The video shows the traces of the tires of a bicycle, during a ride through the city. The traces appear like oscillating lines that lay over the erratic movements and interferences of the structure of the ground. The audio track gives an anticipation of the urban surrounding, interferences between the noise of the pedals and the events on the street occur.<br /><br />
</p>


<iframe width="100%" height="384" frameborder="0" allowfullscreen="" webkitallowfullscreen="" src="http://player.vimeo.com/video/84548536?title=0&amp;byline=0&amp;portrait=0">
</iframe>


{% comment %}
<p> <br /><br /></p>
<img src="{{ site.url }}/images/ufo.jpg" alt="image">
<p>&nbsp;</p>
{% endcomment %}


<p>
<br /><br />
2008<br />
Videoloop (4mn)<br /><br />

Birds in a cage.<br /><br />
</p>

<video preload="metadata" poster="{{ site.url }}/images/birds_poster.jpg" width="100%" height="100%" controls>
  <source src="{{ site.url }}/images/birds_small.mp4" type="video/mp4">
</video>


{% comment %}
<iframe width="100%" height="384" frameborder="0" allowfullscreen="" webkitallowfullscreen="" src="http://player.vimeo.com/video/79397224?title=0&amp;byline=0&amp;portrait=0">
</iframe>
{% endcomment %}

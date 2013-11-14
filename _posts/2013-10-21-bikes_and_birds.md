---
published: true
layout: post
show_worktitle_sidebar: true
tags: works_projects
JB :
  analytics : false
---

{% include JB/setup %}


{% for post in site.posts %}
	{% assign pt = post.title | downcase %}
	{% if 'bikes_and_birds' == pt %}
<h4><a href="{{ BASE_PATH }}{{ post.url }}">Bikes and Birds</a></h4>
	{% endif %}
{% endfor %}

<p>
2007<br />
Video (6mn 30)<br /><br />

The video shows the traces of the tires of a bicycle, during a ride through the city. The traces appear like oscillating lines that lay over the erratic movements and interferences of the structure of the ground. The audio track gives an anticipation of the urban surrounding, interferences between the noise of the pedals and the events on the street occur.<br /><br />
</p>

{% comment %}
<p> <br /><br /></p>
<img src="{{ site.url }}/images/ufo.jpg" alt="image">
<p>&nbsp;</p>
{% endcomment %}








<p>
2008<br />
Videoloop (4mn)<br /><br />

Birds in a cage.<br /><br />
</p>

<iframe width="100%" height="384" frameborder="0" allowfullscreen="" webkitallowfullscreen="" src="http://player.vimeo.com/video/79397224?title=0&amp;byline=0&amp;portrait=0">
</iframe>


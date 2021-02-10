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
	{% if 'bicycle_and_birds' == pt %}
<h4><a href="{{ BASE_PATH }}{{ post.url }}"></a>Bicycle and Birds</h4>
	{% endif %}
{% endfor %}

<p>
2008<br />
video (6mn 30)<br /><br />

The video shows the traces of the tires of a bicycle, during a ride through the city. The traces appear like oscillating lines that lay over the erratic movements and interferences of the structure of the ground. The audio track gives an anticipation of the urban surrounding, interferences between the noise of the pedals and the events on the street occur.<br /><br />
</p>


<p>
2008<br />
Videoloop (4mn)<br />

Birds in a cage.<br /><br />
</p>
</div>


<div class="container-narrow-left">
<video preload="metadata" poster="{{ site.url }}/images/bike_poster.jpg" width="100%" height="auto" controls>
  <source src="{{ site.url }}/images/bike_small.mp4" type="video/mp4">
</video>

<video preload="metadata" poster="{{ site.url }}/images/birds_poster.jpg" width="100%" height="auto" controls>
  <source src="{{ site.url }}/images/birds_small.mp4" type="video/mp4">
</video>

</div>
</div>

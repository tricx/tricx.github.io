---
published: true
layout: post
show_worktitle_sidebar: true
tags: archive
JB :
  analytics : false
---

{% include JB/setup %}


{% for post in site.posts %}
	{% assign pt = post.title | downcase %}
	{% if 'undefined_falling_objects' == pt %}
<h4><a href="{{ BASE_PATH }}{{ post.url }}">Undefined Falling Objects</a></h4>
	{% endif %}
{% endfor %}

<p>
2006<br />
Film - Installation<br />
super8-loop (3mn10)<br /><br />

The concept for both Super8 Film and Installation settings was developed and realised for one of the rooms of the bunker Flakleitturm Arenbergpark in Vienna.<br />

The film loop shows permanently turning maple seeds, in density and speed variable. The projection can be seen from everywhere in the room on a transparent canvas.<br />
</p>

{% comment %}
<iframe width="100%" height="384" frameborder="0" allowfullscreen="" webkitallowfullscreen="" src="http://player.vimeo.com/video/66463893?title=0&amp;byline=0&amp;portrait=0">
</iframe>
{% endcomment %}

<p> <br />still image:<br /></p>
<img src="{{ site.url }}/images/ufo1.jpg" alt="image">
<p>&nbsp;</p>
<p> <br />exhibition view (Flakleitturm Arenbergpark):<br /></p>
<img src="{{ site.url }}/images/ufo.jpg" alt="image">

{% comment %}
<p>&nbsp;</p>
<img src="{{ site.url }}/images/ufo_dreh.jpg" alt="image">
{% endcomment %}

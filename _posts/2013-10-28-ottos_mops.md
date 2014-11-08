---
published: true
layout: post
show_worktitle_sidebar: true
tags: visual, audio
JB :
  analytics : false
---

{% include JB/setup %}


{% for post in site.posts %}
	{% assign pt = post.title | downcase %}
	{% if 'ottos_mops' == pt %}
<h4><a href="{{ BASE_PATH }}{{ post.url }}">Ottos Mops</a></h4>
	{% endif %}
{% endfor %}

<p>
	2013<br />
	Speech - Intervention - Machine<br />
	in cooperation with <a href="http://www.kunst-und-raederwerk.de/" target="_blank" style="text-decoration:none; color: blue"><i>Christoph Freidhöfer</i></a> <br /><br />			
	The robot moves around the exhibition space, orienting itself based on the events, records the speech of other visitors and articulates clever sayings.
	Two parabolic microphones using the shielding function of the foam 'hair' to measure the current db-amplitude and detect the direction from where the loudest 
	content is suspected. There the robot takes on its journey and takes snapshots of conversations. Otherwise it is striking sayings as for example: 
	the most popular occupations for men / women or a quote from 'Alte Meister' by Thomas Bernhard.<br /><br />
</p>

<iframe width="100%" height="384" frameborder="0" allowfullscreen="" webkitallowfullscreen="" src="http://player.vimeo.com/video/66463893?title=0&amp;byline=0&amp;portrait=0">
</iframe>

<p> <br />Ottos Mops at 'What The Shop'<br /></p>

<img src="{{ site.url }}/images/ottosmops_small.jpg" alt="image">


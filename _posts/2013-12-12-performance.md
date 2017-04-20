---
published: true
layout: post
tags: works
JB :
  analytics : false
---

{% include JB/setup %}


{% for post in site.posts %}
	{% assign pt = post.title | downcase %}
	{% if 'in_a_room' == pt %}
<h4><a href="{{ BASE_PATH }}{{ post.url }}">Audio - Visuelle Performance / Faux Terrain - Claudia Larcher</a></h4>
	{% endif %}
{% endfor %}

<p>
since 2015<br />
microscope camera, lichens / organic material, real-time audio software / Supercollider, projektor, soundsystem<br /><br />

- investigation and interaction with audio-visual material. Fragments of organisms such as lichens or tree bines and geological samples of a collection compiled by Claudia Larcher in the border region between Europe and Russia, on the Lithuanian peninsula Neringa, are categorized according to an abstract cartography. The material is re-arranged with the help of microscopes, contact microphones, coils, camera airbrakes, thus surveying the boundaries of scientific, geographical or geological aspects in a different context.


</p>

<img src="{{ site.url }}/images/theuncannyjenny_small.jpg" alt="image">

<video preload="metadata" width="100%" height="100%" controls>
  <source src="{{ site.url }}/images/fauxterrain_small.mp4" type="video/mp4">
</video>



{% comment %}
<div>
	<object height="81" width="100%"> <param name="movie" value="https://player.soundcloud.com/player.swf?url=https%3A//api.soundcloud.com/tracks/124203709&amp;show_comments=true&amp;
	auto_play=false&amp;color=ff7700"></param> <param name="allowscriptaccess" value="always"></param> <embed allowscriptaccess="always" height="81" src="https://player.soundcloud.com/player.swf?url=https%3A//api.soundcloud.com/tracks/124203709&amp;show_comments=true&amp;auto_play=false&amp;color=ff7700" type="application/x-shockwave-flash" width="100%"></embed> </object>    
</div>
{% endcomment %}













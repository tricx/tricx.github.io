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
	{% if 'faux_terrain' == pt %}
<h4><a href="{{ BASE_PATH }}{{ post.url }}"></a>Audio - Visual Performance / Faux Terrain</h4>
	{% endif %}
{% endfor %}

<p>
microscope camera, lichens / organic material, real-time audio software / Supercollider, projektor, soundsystem, 2015/16<br />
in cooperation with Claudia Larcher<br />
<br />
- investigation and interaction with audio-visual material. Fragments of organisms such as lichens or tree bines and geological samples of a collection compiled by Claudia Larcher in the border region between Europe and Russia, on the Lithuanian peninsula Neringa, are categorized according to an abstract cartography. The material is re-arranged with the help of microscopes, contact microphones, coils, camera airbrakes, thus surveying the boundaries of scientific, geographical or geological aspects in a different context.<br /><br />
</p>
</div>


<div class="container-narrow-left">
<img src="{{ site.url }}/images/theuncannyjenny_small_lg.jpg" loading="lazy" alt="image">
<p></p>

<video controls preload="none" poster="{{ site.url }}/images/faux_poster.jpg" width="100%" height="auto">
  <source src="{{ site.url }}/images/fauxterrain_small.mp4" type="video/mp4">
</video>

</div>
</div>




{% comment %}
<div>
	<object height="81" width="100%"> <param name="movie" value="https://player.soundcloud.com/player.swf?url=https%3A//api.soundcloud.com/tracks/124203709&amp;show_comments=true&amp;
	auto_play=false&amp;color=ff7700"></param> <param name="allowscriptaccess" value="always"></param> <embed allowscriptaccess="always" height="81" src="https://player.soundcloud.com/player.swf?url=https%3A//api.soundcloud.com/tracks/124203709&amp;show_comments=true&amp;auto_play=false&amp;color=ff7700" type="application/x-shockwave-flash" width="100%"></embed> </object>    
</div>
{% endcomment %}













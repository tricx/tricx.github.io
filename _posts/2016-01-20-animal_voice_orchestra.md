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
	{% if 'animal_voice_orchestra' == pt %}
<h4><a href="{{ BASE_PATH }}{{ post.url }}"></a>animal-voice-orchestra</h4>
	{% endif %}
{% endfor %}

<p>
live performance / since 2016<br />
amplifiers, filters, analogue modules, real-time audio software / Supercollider / Linux, contact microphones
<br /><br />

Electronic circuits are interconnected to cause semi-natural entities, autonomous organisms, half-animals. The electronic machine functions as the mimesis of an organic world, voice and articulation is generated through loops in feedback networks. Continuous ecosystems, archaic animal-noise-transmission, onomatopoeia.
<br />


</p>
</div>


<div class="container-narrow-left">
<img src="{{ site.url }}/images/animal-orchstra.jpg" loading="lazy" alt="image">
<p></p>

</div>
</div>




{% comment %}
<div>
	<object height="81" width="100%"> <param name="movie" value="https://player.soundcloud.com/player.swf?url=https%3A//api.soundcloud.com/tracks/124203709&amp;show_comments=true&amp;
	auto_play=false&amp;color=ff7700"></param> <param name="allowscriptaccess" value="always"></param> <embed allowscriptaccess="always" height="81" src="https://player.soundcloud.com/player.swf?url=https%3A//api.soundcloud.com/tracks/124203709&amp;show_comments=true&amp;auto_play=false&amp;color=ff7700" type="application/x-shockwave-flash" width="100%"></embed> </object>    
</div>
{% endcomment %}













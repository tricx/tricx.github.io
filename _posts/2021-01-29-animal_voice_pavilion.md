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
	{% if 'animal_voice_pavilion' == pt %}
<h4><a href="{{ BASE_PATH }}{{ post.url }}"></a>animal-voice-pavilion</h4>
	{% endif %}
{% endfor %}

<p>
generative audio installation 2022<br />
in collaboration with Fabian Lanzmaier
<br /><br />

An autonomous system is initiated by means of electromechanical, analogue and digital sound generators positioned in a space. The installation is designed as an independent network organism. Connections of electronic circuits and digital sound processors are treated as entities to create semi-natural, squeaking, stuttering, throbbing and singing organisms. A kind of half-animal. The electronic machine as a mimesis of an organic world, where the voice and the language process are generated through different models of feedback networks. <br />
By working with real-time audio systems and feedback, its resistance and autonomy reflects an open generative state that does not follow a fixed sequence. Therefore the installation finds itself in different auditory stages, where it follows the idea of the machine as a natural, unpredictable entity outside a preconfigured and determined process. A continuous ecosystem started and left to its own. Examining sound as a processual medium, pursuing the question of sound as an independent presence in space.


<br /><br />


<p></p>
audio recording excerpt:
<br />
<audio controls style="width: 100%" preload="none">
  <source src="{{ site.url }}/images/avp_excerpt.mp3" type="audio/mpeg">
</audio>

</p>
</div>


{% comment %}
An autonomous system is initiated by means of electromechanical and analogue/digital sound generators positioned in the room. The installation is designed as an independent network organism, is started and left to its own devices. By examining sound as a processual medium, the question of sound as an independent presence in space is pursued. Connections of electronic circuits and digital sound processors are treated as entities to create semi-natural, autonomous organisms. A kind of half-animal, the electronic machine as a mimesis of an organic world, where the voice and the language process are generated through different applications of feedback networks.
{% endcomment %}


<div class="container-narrow-left">
<img src="{{ site.url }}/images/avp_color.jpg" loading="lazy" alt="image">
<p></p>

<img src="{{ site.url }}/images/avp_speaker_opiu.jpg" loading="lazy" alt="image">
<p></p>

<img src="{{ site.url }}/images/avp_speakers-nu.jpg" loading="lazy" alt="image">
<p></p>

{% comment %}
<img src="{{ site.url }}/images/avp_table.jpg" loading="lazy" alt="image">
<p></p>
{% endcomment %}


<img src="{{ site.url }}/images/avp_overview.jpg" loading="lazy" alt="image">
<p></p>

</div>
</div>




{% comment %}

<img src="{{ site.url }}/images/avp_theater2.jpg" loading="lazy" alt="image">
<p></p>

<img src="{{ site.url }}/images/avp_theater_sm.jpg" loading="lazy" alt="image">
<p></p>

<img src="{{ site.url }}/images/avp_parklife.jpg" loading="lazy" alt="image">
<p></p>

<div>
	<object height="81" width="100%"> <param name="movie" value="https://player.soundcloud.com/player.swf?url=https%3A//api.soundcloud.com/tracks/124203709&amp;show_comments=true&amp;
	auto_play=false&amp;color=ff7700"></param> <param name="allowscriptaccess" value="always"></param> <embed allowscriptaccess="always" height="81" src="https://player.soundcloud.com/player.swf?url=https%3A//api.soundcloud.com/tracks/124203709&amp;show_comments=true&amp;auto_play=false&amp;color=ff7700" type="application/x-shockwave-flash" width="100%"></embed> </object>    
</div>
{% endcomment %}













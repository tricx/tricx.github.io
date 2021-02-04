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
	{% if 'unterm_pflaster_liegt_der_strand' == pt %}
<h4><a href="{{ BASE_PATH }}{{ post.url }}">Acoustic Shadows</a></h4>
	{% endif %}
{% endfor %}

<p>
autonomous complex adaptive system, 2020/21<br />
4 cardoid microphone, 4 horn speakers PA Comp 34S , 4 channel class D preamp  100W, PD-0.50-2<br />
2 modular structures, tripods<br />
dimensions variable<br /><br />
in cooperation with Dario Sanfilippo<br />

Acoustic Shadows is an implementation of a complex adaptive system in an eco-systemic configuration. Through the implementation of a feedback system in the high-frequency domain, signals that oscillate at the threshold of the human perception are ‘scanning’ the area. Shadows or inaudible signals, which are created by human presence are influencing the state of the system and therefore change its behaviour, perturbing the system’s microphone-loudspeaker connection and self-modulation. The adaptations could be perceived more like a ghostlike appearance then an interactive reaction.
<br /><br />
As an adaptive technological life-form, which spreads discretely but invasively, filtering it’s environment and it could be perceived through the presumption of it’s inner process. As a circular system, it reacts to external influences, but also develops a life of its own. Almost like an abstract occult machine that meters the space to extend its own state.


‘Unterm Pflaster liegt der Strand’, in it's original french version of "Sous les pavés, la plage" is attributed to the situationists. The phrase became one of the most popular slogans of the 1968 revolt around the world. ‘Unterm Pflaster liegt der Strand’ alludes to the fact that paving stones were often laid on a sand underground, and is also an invitation to use them. This slogan combines hedonism with activism.<br />
With minimal resources, the display is staged as a museum view and placed in the context of activist action.
The text is translated to latin, so it resembles often used honorable mentions on arcades and city monuments.

<br /><br />

<img src="{{ site.url }}/images/acoustic_shadows1_sm.jpg" alt="image">
<p></p>
<img src="{{ site.url }}/images/acoustic_shadows2_sm.jpg" alt="image">
<p></p>
<img src="{{ site.url }}/images/acoustic_shadows3_sm.jpg" alt="image">
<p></p>
<img src="{{ site.url }}/images/acoustic_shadows_pd.jpg" alt="image">
<p></p>

{% comment %}
<p></p>
<audio controls style="width: 100%" preload="none">
  <source src="{{ site.url }}/images/arcadian_gate_short.mp3" type="audio/mpeg">
</audio>
{% endcomment %}


{% comment %}
<font color="grey">(c)<br /></font>
{% endcomment %}

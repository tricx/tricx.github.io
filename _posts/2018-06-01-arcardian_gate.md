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
	{% if 'arcardian_gate' == pt %}
<h4><a href="{{ BASE_PATH }}{{ post.url }}"></a>Arcadian Gate</h4>
	{% endif %}
{% endfor %}

<p>
Site Specific Installation, 2018<br />
vlf antenna, audio modulated laser, solar-cell amplifier, loudspeaker<br />
Tuned City, organised by Carsten Stabenow<br />
Ancient Messene, Mavromati, Greece<br />

<br />
Natural radio frequencies, that are caused by meteorological phenomena, are transmitted by a laser through the Arcadian Gate of Ancient Messene and received on the other side of the walls by a solar cell amplifier. The detected sound is diffused by a loudspeaker and resonating through the gate.<br /><br />

The western Gate of Ancient Messene, called Arcadian Gate, is preserved in relatively good condition and since the time of the early travelers it has become the symbol of the city depicted repeatedly on engravings.
The Arcadian Gate is a monumental construction built of gigantic awe inspiring limestone blocks. Its shape is circular with two entrances, a double one in the interior and an external one, the latter being protected on either side by two square-shaped towers. The circular area inside the Gate has two niches, one on each side of the entrance where a Hermaic stele stood. God Hermes appears under his capacity as Propylaios, that is, the protector of Gates. Above the north niche one can read the following inscription: Κoιντος Πλώτιος Ευφημίων επεσκεύασεν Cointus Plotius Euphemion restored (the Gate).<br />

(from
<a href="http://wikimapia.org/4832019/Arcadian-Gate" target="_blank">
http://wikimapia.org/4832019/Arcadian-Gate</a>
)
</p>

<audio controls style="width: 100%" preload="none">
  <source src="{{ site.url }}/images/arcadian_gate_doku.mp3" type="audio/mpeg" loading="lazy">
</audio>

</div>


<div class="container-narrow-left">
<img src="{{ site.url }}/images/arcadian_gate_detector_sm_lg.jpg" loading="eager" alt="image">
<p></p>
<img src="{{ site.url }}/images/arcadian_gate_laser_sm_lg.jpg" loading="eager" alt="image">
<p></p>
<img src="{{ site.url }}/images/arcadian_gate_night_sm_lg.jpg" loading="eager" alt="image">
<p></p>
<img src="{{ site.url }}/images/arcadian_gate2a_lg.jpg" loading="lazy" alt="image">
<p></p>
<img src="{{ site.url }}/images/arcardian_gate_amplifier_solar-cell2_sm.jpg" loading="lazy" alt="image">

</div>
</div>


{% comment %}
<p></p>
<img src="{{ site.url }}/images/arcadian_gate_detector_sm.jpg" alt="image">
{% endcomment %}


{% comment %}
<font color="grey">(c)<br /></font>
{% endcomment %}

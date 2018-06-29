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
	{% if 'centre_and_periphery' == pt %}
<h4><a href="{{ BASE_PATH }}{{ post.url }}">Arcardian Gate / Limbo</a></h4>
	{% endif %}
{% endfor %}

<p>
Site Specific Installation, 2018<br />
vlf antenna, audio modulated laser, solar-cell detector, loudspeaker<br />
Tuned City, organised by Carsten Stabenow<br />
Ancient Messene, Mavromati, Greece<br />


Natural radio frequencies are transmitted by laser through Arcardian Gate of Ancient Messene, and detected on the other side of the walls by a detector. The detected sound is diffused by a loudspeaker and resonating between the walls.

from http://wikimapia.org/4832019/Arcadian-Gate:<br />
The western Gate of Ancient Messene, called Arcadian Gate, is preserved in relatively good condition and since the time of the early travelers it has become the symbol of the city depicted repeatedly on engravings.
The Arcadian Gate is a monumental construction built of gigantic awe inspiring limestone blocks. Its shape is circular with two entrances, a double one in the interior and an external one, the latter being protected on either side by two square-shaped towers. The circular area inside the Gate has two niches, one on each side of the entrance where a Hermaic stele stood. God Hermes appears under his capacity as Propylaios, that is, the protector of Gates. Above the north niche one can read the following inscription: Κoιντος Πλώτιος Ευφημίων επεσκεύασεν Cointus Plotius Euphemion restored (the Gate).

<br /><br />


<img src="{{ site.url }}/images/arcardian_gate_detector_sm.jpg" alt="image">
<p></p>
<img src="{{ site.url }}/images/arcardian_gate_laser_sm.jpg" alt="image">
<p></p>
<img src="{{ site.url }}/images/arcardian_gate_night_sm.jpg" alt="image">


<p></p>
<audio controls style="width: 100%" preload="none">
  <source src="{{ site.url }}/images/arcardian_gate_short.mp3" type="audio/mpeg">
</audio>


{% comment %}
<p></p>
<img src="{{ site.url }}/images/arcardian_gate_detector_sm.jpg" alt="image">
{% endcomment %}




{% comment %}
<font color="grey">(c)<br /></font>
{% endcomment %}

---
published: true
layout: post
show_worktitle_sidebar: true
tags:
JB :
  analytics : false
---

{% include JB/setup %}

<br /><br />

{% for post in site.posts %}
	{% assign pt = post.title | downcase %}
	{% if 'recordings' == pt %}
<h4><a href="{{ BASE_PATH }}{{ post.url }}"></a>recordings</h4>
	{% endif %}
{% endfor %}


{% comment %}
<br />

<p>
docu recording from ila at vesch 2023:<br />
<p></p>
<audio controls style="width: 100%" preload="none">
  <source src="{{ site.url }}/images/paul_gruendorfer_set_ila_vesch2023.mp3" type="audio/mpeg">
</audio>
</p>
{% endcomment %}

{% comment %}

<embed height="100%" width="100%" src="{{ site.url }}/images/IFP_proposal.pdf" type="application/pdf" /><br /><br />

<embed height="100%" width="100%" src="{{ site.url }}/images/IFP_Portfolio_EN_small.pdf" type="application/pdf" /><br /><br />

<p>
recording of pigeon whistles, Beijing 2012:<br />
<p></p>
<audio controls style="width: 100%" preload="none">
  <source src="{{ site.url }}/images/pigeon_whistles.mp3" type="audio/mpeg">
</audio>
</p>

{% endcomment %}




{% comment %}


<br />

<p>
exc1: algorithmically controlled interleaved-fragments, tanh:<br />
<p></p>
<audio controls style="width: 100%" preload="none">
  <source src="{{ site.url }}/images/otto_frag_inter_tanh.mp3" type="audio/mpeg">
</audio>
</p>

<br />

<p>
exc2: algorithmically controlled circular retrig-fragments, pitchsh:<br />
<p></p>
<audio controls style="width: 100%" preload="none">
  <source src="{{ site.url }}/images/otto_circular_retrig_pitsh.mp3" type="audio/mpeg">
</audio>
</p>

<br />

<p>
exc3: feedback, high density overlap:<br />
<p></p>
<audio controls style="width: 100%" preload="none">
  <source src="{{ site.url }}/images/otto_high-density_overlap.mp3" type="audio/mpeg">
</audio>
</p>

<br />

<p>
exc4: animal, modulation:<br />
<p></p>
<audio controls style="width: 100%" preload="none">
  <source src="{{ site.url }}/images/otto_animal1.mp3" type="audio/mpeg">
</audio>
</p>

<br />

<p>
exc5: animal2, modulation:<br />
<p></p>
<audio controls style="width: 100%" preload="none">
  <source src="{{ site.url }}/images/otto_animal2.mp3" type="audio/mpeg">
</audio>
</p>

<br />

<p>
exc6: cross modulation, distortion:<br />
<p></p>
<audio controls style="width: 100%" preload="none">
  <source src="{{ site.url }}/images/otto_cross_modulation_dist.mp3" type="audio/mpeg">
</audio>
</p>

<br />

<p>
exc7: animal3, oscillations:<br />
<p></p>
<audio controls style="width: 100%" preload="none">
  <source src="{{ site.url }}/images/otto_animal-oscillations.mp3" type="audio/mpeg">
</audio>
</p>

<br />


<p>
exc8: animal4, oscillations:<br />
<p></p>
<audio controls style="width: 100%" preload="none">
  <source src="{{ site.url }}/images/otto_animal-oscillations2.mp3" type="audio/mpeg">
</audio>
</p>

<br />

{% endcomment %}

{% comment %}
<font color="grey">(c)<br /></font>
{% endcomment %}

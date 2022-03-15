---
published: true
layout: post
show_worktitle_sidebar: true
tags:
JB :
  analytics : false
---

{% include JB/setup %}


{% for post in site.posts %}
	{% assign pt = post.title | downcase %}
	{% if 'recordings' == pt %}
<h4><a href="{{ BASE_PATH }}{{ post.url }}">recordings</a></h4>
	{% endif %}
{% endfor %}


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

<p>
OTTOsonics excerpt1: algorithmically controlled interleaved-fragments, tanh:<br />
<p></p>
<audio controls style="width: 100%" preload="none">
  <source src="{{ site.url }}/images/otto_frag_inter_tanh.mp3" type="audio/mpeg">
</audio>

</p>







{% comment %}
<font color="grey">(c)<br /></font>
{% endcomment %}

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
<h4><a href="{{ BASE_PATH }}{{ post.url }}">Arcardian Gate</a></h4>
	{% endif %}
{% endfor %}

<p>
Site Specific Installation, 2018<br />
Ancient Messene, Greece


{% comment %}
<p></p>
<img src="{{ site.url }}/images/drachen_bahia_inutil_small.jpg" alt="image">
{% endcomment %}




{% comment %}
<font color="grey">(c)<br /></font>
{% endcomment %}

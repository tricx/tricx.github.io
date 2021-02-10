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
	{% if 'rasenmaeher' == pt %}
<h4><a href="{{ BASE_PATH }}{{ post.url }}">Rasenmaeher</a></h4>
	{% endif %}
{% endfor %}

<p>
Landart - performance / 2006<br />
video (17mn 15)<br /><br />

Working title: “Eine Einstellung zur Arbeit”<br /><br />

A lawnmower driving in circles, mowing the grass. The camera position and angle remain the same during the whole film.<br /><br />
</p>

<p> <br />still image:<br /></p>
<img src="{{ site.url }}/images/rasenmaeher1.jpg" alt="image">




---
published: true
layout: post
tags: sound
JB :
  analytics : false
---

{% include JB/setup %}


{% for post in site.posts %}
	{% assign pt = post.title | downcase %}
	{% if 'klangkunsttage' == pt %}
<h4><a href="{{ BASE_PATH }}{{ post.url }}">Klangkunsttage</a></h4>
	{% endif %}
{% endfor %}

<p>
<br />
<blockquote>
    <em>live set</em> at Klangkunsttage, Galerie 12-14<br />
</blockquote>
<br /><br /><br />
</p>


<iframe width="100%" height="384" frameborder="0" allowfullscreen="" webkitallowfullscreen="" src="http://player.vimeo.com/video/74517369?title=0&amp;byline=0&amp;portrait=0">
</iframe>

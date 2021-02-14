---
published: true
layout: post
show_worktitle_sidebar: true
tags: archive
JB :
  analytics : false
---

{% include JB/setup %}


{% for post in site.posts %}
    {% assign pt = post.title | downcase %}
    {% if 'ancient_ancient_world' == pt %}
<h4><a href="{{ BASE_PATH }}{{ post.url }}">Ancient Ancient World</a></h4>
    {% endif %}
{% endfor %}

<p>
Installation, 2009/10<br />
photography on baryt paper, car paint, pages of the newspaper Bazar<br /><br />

Exhibition text:<br />
“Haiku“, writes Jack Kerouac, “was invented and developed over hundreds of years in Japan to be a complete poem in seventeen syllables and to pack in a whole vision of life in three short lines....above all, a Haiku must be very simple and free of all poetic trickery and make a little picture and yet be as airy and graceful as a Vivaldi Pastorella.“<br /><br />

Ancient ancient world<br />
–tight skirts<br />
By the new car<br /><br />

In opposition to this haiku, which was tagged on the wall, are several photographs referring directly to a place, although their documentary approach partly disappears.<br />

The different elements of the installation are tested on coherence and diverging analogies. The documentary elements are bound to a realistic representation, even though only the translation into the context of all parts sketches a picture. Intentions are hidden to the viewer at first sight and can only be reconstructed by individual associations of a possible conception.<br />

The titles of the images are taken form the newspaper Bazar, VW Bus T3, Toyota, Audi 80, VW Golf, Pickup (unknown) and also defined the value(price!) of the photographs.<br /><br />
</p>

<img src="{{ site.url }}/images/ancient1.jpg" alt="image">
<p>&nbsp;</p>
<img src="{{ site.url }}/images/ancient2.jpg" alt="image">
<p>&nbsp;</p>
<p> <br />exhibition view:<br /></p>
<img src="{{ site.url }}/images/ancient_exhib.jpg" alt="image">

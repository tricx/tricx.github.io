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
	{% if 'zweistimmige_inventionen' == pt %}
<h4><a href="{{ BASE_PATH }}{{ post.url }}"></a>Zweistimmige Inventionen</h4>
	{% endif %}
{% endfor %}





<p>
Site Specific Installation, 2008<br /><br />

The installation “Zweistimmige Inventionen” has been designed for the Prospekthof Semperdepot of the Academy of Fine Arts Vienna and consists of the following components:<br /><br />

A swing from a playground that was extended with hawsers (ropes) from the roof framework to the ground.<br />

A hi-fi system / ghetto blaster.<br />

The recordings of the fifteen Two-Part Inventions and one Three-Part Sinfonia of J.S.Bach, which I have learned for this work and recorded myself.<br />

A framed image that shows the wooden framework for a swing at a playground, where the swing is missing and the ground is covered with additional soil.<br />

Considerations to the themes, areas and associations, which could form some of the questions the Installation “Zweistimmige Inventionen” poses, are accompanying the work as a virtual art-theory handout.<br />
</p>
</div>


<div class="container-narrow-left">
<img src="{{ site.url }}/images/schaukel1.jpg" alt="image">
<p></p>
<img src="{{ site.url }}/images/schaukel2.jpg" alt="image">
<p></p>
<img src="{{ site.url }}/images/schaukel3.jpg" alt="image">
<p>exhibition view Semperdepot, Akademie der bildenden Künste, Wien</p>

</div>
</div>
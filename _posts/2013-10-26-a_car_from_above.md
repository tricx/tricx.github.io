---
published: true
layout: post
show_worktitle_sidebar: true
tags: works_projects
JB :
  analytics : false
---

{% include JB/setup %}


{% for post in site.posts %}
	{% assign pt = post.title | downcase %}
	{% if 'a_car_from_above' == pt %}
<h4><a href="{{ BASE_PATH }}{{ post.url }}">A Car from ABove</a></h4>
	{% endif %}
{% endfor %}


<p>
    2012<br />
	Soundinstallation<br />
	in cooperation with <a href="http://www.praxistest.cc/" target="_blank" style="text-decoration:none; color: blue"><i>Paul_Reza Klein</i></a><br />
	A toy police car in free fall at the exhibition Dimensions Variable # at Mo.ë.<br /><br />
</p>

<iframe width="100%" height="384" frameborder="0" allowfullscreen="" webkitallowfullscreen="" src="http://player.vimeo.com/video/59054272?title=0&amp;byline=0&amp;portrait=0">
</iframe>

{% comment %}
<p><br /><br />view of the motor that lifts it all up:<br /><br /></p>
![image]({{ site.url }}/images/acab1.jpg)
{% endcomment %}

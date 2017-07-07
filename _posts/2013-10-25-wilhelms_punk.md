---
published: true
layout: post
tags: works
JB :
  analytics : false
---

{% include JB/setup %}


{% for post in site.posts %}
	{% assign pt = post.title | downcase %}
	{% if 'wilhelms_punk' == pt %}
<h4><a href="{{ BASE_PATH }}{{ post.url }}">Wilhelm's Punk</a></h4>
	{% endif %}
{% endfor %}


<p>
Performance / 2011<br />
taperecorder, oscillators, frog<br /><br />
Description of the setup:<br />
The sounds of a cassette recorder, a simple oscillator circuit and a wooden frog are recorded on an empty tape loop. The name Wilhelm‘s Punk refers to the piece Williams Mix by John Cage, in which pre-recorded and selected sounds are mounted on tape by a random system. For Wilhelm‘s Punk, sounds, which are produced during the performance are played on the tape loop and reproduced immediately. Each loop replay plays the already recorded fragments, takes up new ones and deletes older parts by accident.<br /><br />
</p>


{% comment %}
<div>
    <object height="81" width="100%"> <param name="movie" value="https://player.soundcloud.com/player.swf?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F124201065&amp;show_comments=true&amp;
    auto_play=false&amp;color=ff7700"></param> <param name="allowscriptaccess" value="always"></param> <embed allowscriptaccess="always" height="81" src="https://player.soundcloud.com/player.swf?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F124201065&amp;show_comments=true&amp;auto_play=false&amp;color=ff7700" type="application/x-shockwave-flash" width="100%"></embed> </object>    
</div>
{% endcomment %}


<iframe width="100%" height="105" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/124201065&amp;color=000000&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>


<p> <br />setup:<br /></p>

<img src="{{ site.url }}/images/wpunk_setup.jpg" alt="image">


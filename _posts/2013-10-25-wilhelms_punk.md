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
	{% if 'wilhelms_punk' == pt %}
<h4><a href="{{ BASE_PATH }}{{ post.url }}">Wilhelm's Punk</a></h4>
	{% endif %}
{% endfor %}

<p>
<br />
	Performance<br />
	2011<br />
	Taperecorder/Oscillators/frog<br /><br />
The sounds of a cassette recorder itself, of a simple oscillator circuit, and a wooden frog are recorded on an empty tapeloop. The name Wilhelm's Punk is inspired by the piece Williams Mix of John Cage which uses pre-recorded sounds that are randomly selected and mounted on tape. For the piece Willhelm's punk only sounds that occur during the performance are recorded on tape.
(listen to a short sample of the tape).
</p>
<div>
    <object height="81" width="100%"> <param name="movie" value="https://player.soundcloud.com/player.swf?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F18902378&amp;show_comments=true&amp;
    auto_play=false&amp;color=ff7700"></param> <param name="allowscriptaccess" value="always"></param> <embed allowscriptaccess="always" height="81" src="https://player.soundcloud.com/player.swf?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F18902378&amp;show_comments=true&amp;auto_play=false&amp;color=ff7700" type="application/x-shockwave-flash" width="100%"></embed> </object>    
</div>

<p> <br />setup:<br /></p>

<img src="{{ site.url }}/images/wpunk_setup.jpg" alt="image">

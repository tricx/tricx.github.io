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
	{% if 'unterm_pflaster_liegt_der_strand' == pt %}
<h4><a href="{{ BASE_PATH }}{{ post.url }}"></a>Unterm Pflaster liegt der Strand</h4>
	{% endif %}
{% endfor %}

<p>
installation, public display, at <a href="https:variable.cc" target="_blank">dimensions variable #, Semi Public Art</a>, Vienna, Hietzing, 2020<br />
cobblestone, K&K Emblem, sand, adhesive foil, text<br />
<br />
‘Unterm Pflaster liegt der Strand’, in it's original french version of "Sous les pavés, la plage" is attributed to the situationists. The phrase became one of the most popular slogans of the 1968 revolt around the world. ‘Unterm Pflaster liegt der Strand’ alludes to the fact that paving stones were often laid on a sand underground, and is also an invitation to use them. This slogan combines hedonism with activism.<br />
With minimal resources, the display is staged as a museum view and placed in the context of activist action.
The text is translated to latin, so it resembles often used honorable mentions on arcades and city monuments.
</p>
</div


<div class="container-narrow-left">
<img src="{{ site.url }}/images/pflaster_display_sm_cl.jpg" loading="lazy" alt="image">
<p></p>

{% comment %}
<img src="{{ site.url }}/images/pflaster_brick_sm.jpg" loading="lazy" alt="image">
<p></p>
{% endcomment %}

<img src="{{ site.url }}/images/pflaster_display_people_sm_cl.jpg" loading="lazy" alt="image">
<p></p>
<img src="{{ site.url }}/images/pflaster_display_wide_sm_cl.jpg" loading="lazy" alt="image">

</div>
</div>


{% comment %}
<font color="grey">(c)<br /></font>
{% endcomment %}

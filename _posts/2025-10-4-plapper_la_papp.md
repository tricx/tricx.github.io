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
  {% if 'extension' == pt %}
<h4><a href="{{ BASE_PATH }}{{ post.url }}"></a>Plapper-la-papp</h4>
  {% endif %}
{% endfor %}

<p>
commissioned by 'der blöde dritte Mittwoch' for Phonomuseum Wien, oct 2025<br />
'talking machine', generative system, pd, raspberry-pi, transducers, loudspeaker, Hexentrichter<br /><br />


Plapper-la-papp is an onomatopoetic homage to the phonograph, the first machines for recording voices and sounds. The phonographs from the collection of the Phonomuseum Vienna were taken up as a starting point to explore the processes of recording and playing back and reproducing vocal fragments. The work examines how signals are manipulated in the space of digital sound processing and become perceptible events again in real acoustic space.<br />
Plapper-la-papp is an attention-grabbing machine that processes and generates vocal fragments, or 'essential' sound information, and occasionally develops an entertaining life of its own. In the middle of the phonograph collection, he does not primarily want to appear as a troublemaker, but rather, similar to the first models, tries to reproduce language fragments and essential information in order to interact with the visitors.

<br /><br />

Further background details and fun facts:<br />
'Plappern' (babbling) are the first sounds that small children make during language acquisition in the so-called 'Plapper' phase. In German, 'Plappern' means to speak without any particular depth, often quickly and without thinking, or to babble like a child. It can have both positive and negative connotations, depending on whether it expresses joy in talking or empty talk.
<br />
The generation of motor patterns is reinforced and supported by imitation and positive feedback. The little ones try out a variety of different sounds and sound combinations and in this way test the possibilities of their articulation organs. (from https://de.wikipedia.org/wiki/Kanonisches_Lallen)
<br />
In some cases, 'Plappern' is used pejoratively to describe someone who talks stupid things or doesn't express themselves clearly.
'Papperlapapp' is an interjection used as a dismissive exclamation to reject stupid or nonsensical chatter.
'Papperlapapp' first appeared in the Duden in 1880 and therefore seems to fall into the same period as the invention of the first phonograph in 1877. However, the only connection between the phonograph and babbling activity seems to be the first attempts to reproduce speech sounds.
<br /><br />
</p>

</div>


<div class="container-narrow-left">

<img src="{{ site.url }}/images/plapper-dog_sm.jpg" loading="eager" alt="image">
<p></p>
<p>still image from the EMI Trust Archive 'Nipper runs Amok!' for a Mutoscope documentation for The Gramophone Company</p>
<p></p>


<video controls preload="none" poster="{{ site.url }}/images/plapper_poster2.jpg" width="49.8%" height="auto" style="float: left">
  <source src="{{ site.url }}/images/plapper_short2.mp4" type="video/mp4">
</video>


<video controls preload="none" poster="{{ site.url }}/images/plapper_poster.jpg" width="49.8%" height="auto" style="float: right">
  <source src="{{ site.url }}/images/plapper_short.mp4" type="video/mp4">
</video>

<div class="clearfix"></div>
<p></p>
<img src="{{ site.url }}/images/plapper2.jpg" loading="eager" alt="image">
<p></p>



{% comment %}
led_vesch_cam2_sm.jpg

<img src="{{ site.url }}/images/plapper_feet_sm_li.jpg" loading="eager" alt="image">
<img src="{{ site.url }}/images/plapper_view_sm_li.jpg" loading="eager" alt="image" width="49.85%" height="auto" style="float: left">

<img src="{{ site.url }}/images/led_electr_sm.jpg" loading="eager" alt="image">
<p></p>
{% endcomment %}
</div>
</div>




{% comment %}
<font color="grey">(c)<br /></font>
{% endcomment %}
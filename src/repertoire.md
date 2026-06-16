---
title: Repertoire
templateEngineOverride: njk
---

{% set pastSeasons = seasonConcerts.slice(0, seasonConcerts.length - 1).reverse() %}

<h1>Repertoire</h1>

<p>The Ensemble programs diverse works ranging from Mozart, Beethoven and Brahms to William Bolcom, Chick Corea, Paul Schoenfield, Augusta Read Thomas and other living composers. Orion's impressive repertoire offers its fortunate audiences a remarkably broad chamber music experience. The Ensemble's expansive commitment to chamber music embraces the works of the classical through modern standard repertoire as well as an extensive range of new pieces for piano quartet and clarinet. Orion continues to inspire composers with commissions for new works written especially for its unique combination of instruments.</p>

<p>Orion received the 2000 CMA/ASCAP "Award for Adventurous Programming" for its cutting-edge performance series "Inside Look at Contemporary Music Initiative." </p>

<section class="repertoire-grid">
{% for season in pastSeasons %}
	<p class="repertoire-season"><strong>Season {{ season.id }} ({{ season.seasonTitle | replace(' Season', '') }})</strong><br />
	{% for concert in season.items %}
		<a href="/concerts/{{ season.id }}/{{ concert.id }}/">{{ concert.title }}</a>{% if not loop.last %}<br />{% endif %}
	{% endfor %}</p>

{% endfor %}
</section>

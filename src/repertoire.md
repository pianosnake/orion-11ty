---
title: Repertoire
templateEngineOverride: njk
---

{% set pastSeasons = concerts.seasons.slice(0, concerts.seasons.length - 1).reverse() %}

<h1>Repertoire</h1>

<p>The Ensemble programs diverse works ranging from Mozart, Beethoven and Brahms to William Bolcom, Chick Corea, Paul Schoenfield, Augusta Read Thomas and other living composers. Orion's impressive repertoire offers its fortunate audiences a remarkably broad chamber music experience. The Ensemble's expansive commitment to chamber music embraces the works of the classical through modern standard repertoire as well as an extensive range of new pieces for piano quartet and clarinet. Orion continues to inspire composers with commissions for new works written especially for its unique combination of instruments. As the Chicago Tribune's John von Rhein wrote upon Orion's 10th anniversary,  "It seems like only yesterday that a remarkable chamber group of musicians calling itself the Orion Ensemble was born. The Orions &hellip; quickly established themselves as one of the Chicago area's most vibrant, versatile and distinctive ensembles, at home in every period but especially committed to enlarging the repertory of its unusual combination of piano quartet and clarinet."</p>

<p>Orion received the 2000 CMA/ASCAP "Award for Adventurous Programming" for its cutting-edge performance series "Inside Look at Contemporary Music Initiative." </p>

<section class="repertoire-grid">
{% for season in pastSeasons %}
	<p class="repertoire-season"><strong>Season {{ season.id }} ({{ season.seasonTitle | replace(' Season', '') }})</strong><br />
	{% for concert in season.items %}
		{% set concertLabel = 'Concert ' ~ concert.id %}
		<a href="/concerts/{{ season.id }}/{{ concert.id }}/">{% if concert.title.slice(0, concertLabel.length) == concertLabel %}{{ concert.title }}{% else %}{{ concertLabel }}: {{ concert.title }}{% endif %}</a>{% if not loop.last %}<br />{% endif %}
	{% endfor %}</p>

{% endfor %}
</section>

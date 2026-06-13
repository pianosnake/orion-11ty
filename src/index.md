---
title: Home
pageScripts:
  - /scripts/index.js
templateEngineOverride: njk
---

<section class="home-hero">
	<div class="home-hero-media">
		<slide-show class="home-slideshow">
			<img src="https://res.cloudinary.com/pianosnake/image/upload/c_fill,h_450,w_650/v1523828064/q4at0rdzilwet8aecpsg.jpg" alt="Orion Ensemble performance photo">
			<img src="https://res.cloudinary.com/pianosnake/image/upload/c_fill,h_450,w_650/v1523828064/ws7htoaktgbv2tkzfyj7.jpg" alt="Orion Ensemble performance photo">
			<img src="https://res.cloudinary.com/pianosnake/image/upload/c_fill,h_450,w_650/v1523828064/tbsa3segapejfh9ygew1.jpg" alt="Orion Ensemble performance photo">
			<img src="https://res.cloudinary.com/pianosnake/image/upload/c_fill,h_450,w_650/v1523828064/qyqb9aw9y64c96j64pwr.jpg" alt="Orion Ensemble performance photo">
			<img src="https://res.cloudinary.com/pianosnake/image/upload/c_fill,h_450,w_650/v1523828064/z7wdpfeyhryfsa6zjv1h.jpg" alt="Orion Ensemble performance photo">
			<img src="https://res.cloudinary.com/pianosnake/image/upload/c_fill,h_450,w_650/v1523828064/bjqhhxkwm0exd8xc4k3w.jpg" alt="Orion Ensemble performance photo">
		</slide-show>

		<music-player class="home-music-player" audio-files='[{"src":"https://res.cloudinary.com/pianosnake/video/upload/v1527739408/homepage/prokofiev.mp3","name":"Prokofiev - Quintet in G minor Op. 39 - I - Theme"},{"src":"https://res.cloudinary.com/pianosnake/video/upload/v1527739442/homepage/01_Rabi-Quartet_in_E-flat_major__into.mp3","name":"Walter Rabl - Quartet in E-flat major, op. 1: I Allegro moderato"},{"src":"https://res.cloudinary.com/pianosnake/video/upload/v1527739485/homepage/01_Serenade_For_Three_-_I_-_Dances__intro.mp3","name":"Peter Schickele - Serenade For Three - I - Dances"},{"src":"https://res.cloudinary.com/pianosnake/video/upload/v1527739483/homepage/06_Quartet_in_B-flat_Major_for_Clarinet__intro.mp3","name":"Mozart - Quartet in B-flat Major, after K.378: Rondo: Allegro-Allegro Vivace"},{"src":"https://res.cloudinary.com/pianosnake/video/upload/v1527739476/homepage/07_Quartet_in_E-flat_Major_for_Piano__intro.mp3","name":"Mozart - Quartet in E-flat Major, K.493: Allegro"},{"src":"https://res.cloudinary.com/pianosnake/video/upload/v1527739485/homepage/08_Earth_Voices_-_III_-_Autumn_Brill__reduced_quality.mp3","name":"Jackson Berkey - Earth Voices - III - Autumn Brilliance"},{"src":"https://res.cloudinary.com/pianosnake/video/upload/v1527739484/homepage/12_Connections_-_III_-_Dolce_Con_Bri__intro.mp3","name":"Robert Kritz - Connections - III - Dolce Con Brio"}]'></music-player>

		<section class="home-intro">
			<p class="home-kicker">Welcome to Orion's 2025-26 Season!</p>
			<p>We are delighted to bring you our 33rd season of fantastic chamber music, filled with Orion specialties: classic beloved pieces, new discoveries, forgotten gems and a world premiere.</p>
			<p>In addition to performing iconic works by Bach, Mozart, Haydn, Brahms, Beethoven and Arensky, we are sharing wonderful pieces we have never played on our series, as well as a world premiere composition by Chicago's very own Ephraim Champion, selections from Sebastian Huydts' music and the glorious Schumann Piano Quintet.</p>
			<p>Please join us for Orion's Spring Benefit on March 8, 2026 following the 3:00 PM concert at Aurora's beautiful New England Congregational Church.</p>
			<p>We are pleased to return as Resident Ensemble at the Music Institute of Chicago this season, performing each of our concert programs at Nichols Concert Hall.</p>
			<p>We are looking forward to seeing you and hope that our performances will inspire and uplift you.</p>
			<p>Kathy, Florentina, Diana and Judy</p>
		</section>
	</div>

	<section class="home-season home-season--sidebar">
		<h2>{{ concerts.seasonTitle }}</h2>
		<div class="home-calendar-grid">
			{% for concertId, concert in concerts.items %}
				<a class="home-calendar-link" href="/concerts/{{ concert.slug }}/">
					<concert-calendar title="{{ concert.title }}" date1="{{ concert.performances[0].dateTime }}" date2="{{ concert.performances[1].dateTime }}" date3="{{ concert.performances[2].dateTime }}"></concert-calendar>
				</a>
			{% endfor %}
		</div>
		<p class="home-season-note">{{ concerts.seasonNote }}</p>
	</section>
</section>

<section class="home-story">
	<h1>ORION STORY</h1>
	<p>Thirty-three years ago, three young artists who were passionate about chamber music decided to present a concert of chamber works for violin, clarinet and piano-an unusual combination at the time-with so many new possibilities. Shortly after their first appearance, Orion included viola and cello, and the possibilities became endless.</p>
	<p>Together with you, our audiences, the Orion Ensemble became a landmark in Chicago's rich cultural life, and through our live broadcasts on WFMT and streaming, we are reaching people throughout the world. Our Twilight of the Romantics CD (Cedille Records) received high praises from Gramophone magazine in London. We collaborated with some of the world's most acclaimed artists, including Dale Clevenger, Alex Klein, Michel Debost, Ian Maksin, Julia Bentley, Stephen Boe, Mathias Tacke, Patrice Michaels, Julian Gray, Kuang-Hao Huang and many more. We created a unique and robust educational partnership program that inspires young musicians.</p>
	<p>And, most importantly, we expanded the repertoire for this instrumentation; we have premiered dozens of works written for us by composers including Augusta Read Thomas, Robert Kritz, Sebastian Huydts, Justinian Tamusuza, Jackson Berkey, Ilya Levinson, James Wintle, Miguel De La Cerna, Bradley Williams and so many others.</p>
	<p>We couldn't have done it without you, our incredible audiences, board members and supporters, along with the Illinois Arts Council and the John R. Halligan Charitable Fund.</p>
	<p>The powerful intimacy of chamber music has been at the heart of our fantastic journey, and we once again extend our deepest gratitude to all our musicians, sponsors, music teachers, donors and volunteers who have contributed to our success.</p>
	<p>THE JOURNEY CONTINUES!</p>
	<p>We are so happy to have you with us for Orion's 33rd season, promising a musical celebration to be remembered!</p>
	<p>Please subscribe to our entire season filled with beloved chamber music works and join us for our Spring Benefit on March 8, 2026 at the New England Congregational Church in Aurora, following our 3:00 PM concert. Orion's musicians and guests are looking forward to sharing our beautiful music with all of you!</p>
	<p>- Florentina, Kathy, Judy and Diana</p>
</section>
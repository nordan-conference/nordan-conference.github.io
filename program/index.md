---
layout: default
---



<style>
  .mathconf-wrap {
    --ink: #111;
    --muted: #555;
    --bg: #fff;
    --card: #fff;
    --border: #ddd;
    --break-bg: #f2f2f2; /* light gray for breaks */
    --eating-bg: #E3F1F1; /* light blue for eating */

    max-width: 700px;
    margin: 0;
    padding: 0px;
<!--
    font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji"; -->
    color: var(--ink);
    background: transparent;
    line-height: 1;
  }

  .mathconf-wrap header {
    text-align: center;
    padding: 24px 16px 8px;
  }
  .mathconf-wrap header h1 {
    margin: 0 0 6px;
    font-size: clamp(1.6rem, 2.6vw, 2.2rem);
    font-weight: 700;
  }
  .mathconf-wrap header p {
    margin: 4px 0;
    color: var(--muted);
  }

  .mathconf-meta {
    display: inline-flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 8px;
    color: var(--muted);
  }
  .mathconf-pill {
    border: 1px solid var(--border);
    padding: 4px 10px;
    border-radius: 999px;
    background: #fff;
  }

  .mathconf-schedule {
    margin-top: 22px;
    display: grid;
    gap: 14px;
  }

  .mathconf-slot {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 8px;
  }

  /* Break highlighting */
  .mathconf-break {
    background: var(--break-bg);
}

 /* Eating highlighting */
  .mathconf-eating {
    background: var(--eating-bg);
  }

  .mathconf-time {
    font-weight: 700;
    margin-bottom: 6px;
    font-variant-numeric: tabular-nums;
  }
  .mathconf-slot h2 {
    margin: 6px 0;
    font-size: 1.15rem;
  }
  .mathconf-slot h3 {
    margin: 6px 0 4px;
    font-size: 1rem;
  }

  .mathconf-speaker {
    display: flex;
    flex-wrap: wrap;
    gap: 8px 12px;
    align-items: baseline;
  }
  .mathconf-speaker .name {
    font-weight: 500;
  }
  .mathconf-speaker .affil {
    color: var(--muted);
    font-style: italic;
  }

  .mathconf-divider {
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--border), transparent);
    margin: 12px 0;
  }

  .mathconf-abstract {
    margin-top: 8px;
    padding: 10px 12px;
	padding-left: 20px;
    <!--border-left: 3px solid #000;-->
    background: #fafafa;
    border-radius: 8px;
  }

  
</style>


<h1>Booklets</h1>

<p>Booklets for the Nordan and KAUS 2026 are to be announced later.</p>

<h1>Posters</h1>

<p>All participants are invited to present their work in the form of posters. Posters will remain accessible for viewing throughout the conference. </p><br>

<h1>Conference Program</h1>


<button onclick="location.href='#fri-section'">
    Jump to Friday!
</button>
<button onclick="location.href='#sat-section'">
    Jump to Saturday!
</button>
<button onclick="location.href='#sun-section'">
    Jump to Sunday!
</button>


<!-- ====== Embeddable Conference Program ====== -->
<div class="mathconf-wrap" role="region" aria-label="Conference Program">

 <div style="height:10px;"></div>

 <h2 id="fri-section">Friday 22, 2026</h2>

  <!--
    <div class="mathconf-meta" aria-label="Event Details">
      <span class="mathconf-pill" aria-label="Venue">Auditorium M101,
      Metria building</span>
    </div>
    -->


  <div class="mathconf-schedule">

    <section class="mathconf-slot mathconf-eating" aria-labelledby="lunch-title">
  <div class="mathconf-time">19:00 –</div>
  <h3 id="coffee-title">Welcome dinner</h3>
  <p>Dinner is served at the Scandic Joensuu Hotel.</p>
  </section>
  </div>
  
 <div style="height:30px;"></div>
  

    <h2 id="sat-section">Saturday 23, 2026</h2>

  <!--
    <div class="mathconf-meta" aria-label="Event Details">
      <span class="mathconf-pill" aria-label="Venue">Auditorium M101,
      Metria building</span>
    </div>
    -->


  <div class="mathconf-schedule">

    <!-- Opening (highlighted) -->
    <section class="mathconf-slot mathconf-break" aria-labelledby="opening-title">
      <div class="mathconf-time">09:00 – 09:10</div>
      <h3 id="opening-title">Welcome words</h3>
      <!-- <p>Welcome words and practical information.</p> -->
    </section>

    <!-- Talk 1 -->
    <section class="mathconf-slot" aria-labelledby="t1-title">
      <div class="mathconf-time">09:10 – 09:50</div>
      <!--<h3>Talk 1</h3>-->
      <h2 id="t1-title">Title</h2>
      <div class="mathconf-speaker">
        <span class="name">Ilpo Laine</span>
        <span class="affil">University of Eastern Finland (Finland)</span>
      </div>
      <div class="mathconf-divider"></div>
      <div class="mathconf-abstract">
        <u>Abstract.</u> 
      </div>
    </section>

    <!-- Coffee Break (highlighted) -->
    <section class="mathconf-slot mathconf-eating" aria-labelledby="coffee-title">
      <div class="mathconf-time">09:50 – 10:20</div>
      <h3 id="coffee-title">Coffee Break</h3>
      <!-- <p>Refreshments served in the back of the lecture room
    M101.</p> -->
    </section>

    <!-- Talk 2 -->
    <section class="mathconf-slot" aria-labelledby="t2-title">
      <div class="mathconf-time">10:20 – 11:00</div>
      <h2 id="t2-title">Title</h2>
      <div class="mathconf-speaker">
        <span class="name">Ragnar Sigurðsson</span>
        <span class="affil">University of Iceland (Iceland)</span>
      </div>
      <div class="mathconf-divider"></div>
      <div class="mathconf-abstract">
        <u>Abstract.</u> 
      </div>
      </section>

       <!-- Talk 3 -->
    <section class="mathconf-slot" aria-labelledby="t3-title">
      <div class="mathconf-time">11:10 – 11:50</div>
      <h2 id="t3-title">Title</h2>
      <div class="mathconf-speaker">
        <span class="name">Jacob Stordal Christiansen</span>
        <span class="affil">Lund University (Sweden)</span>
      </div>
      <div class="mathconf-divider"></div>
      <div class="mathconf-abstract">
        <u>Abstract.</u> 
      </div>
      </section>

      <!-- Lunch Break (highlighted) -->
    <section class="mathconf-slot mathconf-eating" aria-labelledby="lunch-title">
      <div class="mathconf-time">11:50 – 14:00</div>
      <h3 id="coffee-title">Lunch Break</h3>
      <p>Lunch is served at the Scandic Joensuu Hotel.</p>
    </section>

         <!-- Talk 4 -->
    <section class="mathconf-slot" aria-labelledby="t4-title">
      <div class="mathconf-time">14:00 – 14:40</div>
      <h2 id="t4-title">Title</h2>
      <div class="mathconf-speaker">
	<span class="name">Álfheiður Edda Sigurðardóttir</span>
	<span class="affil">Chalmers University of Technology (Sweden)<br>
	University of Gothenburg (Sweden)</span>
      </div>
      <div class="mathconf-divider"></div>
      <div class="mathconf-abstract">
        <u>Abstract.</u> 
      </div>
      </section>

    <section class="mathconf-slot mathconf-break" aria-labelledby="lunch-title">
      <div class="mathconf-time">15:00 – 20:00</div>
      <h3 id="coffee-title">Excursion to Koli National Park</h3>
      <p>Bus transportation from the Metria building to Koli National Park takes approximately one hour. The return trip will bring participants directly to the Scandic Joensuu Hotel.</p>
      </section>

         <!-- Excursion (highlighted) -->
    <section class="mathconf-slot mathconf-eating" aria-labelledby="lunch-title">
      <div class="mathconf-time">20:00 - </div>
      <h3 id="coffee-title">Dinner</h3>
      <p>Dinner is served at the Scandic Joensuu Hotel.</p>
      </section>
</div>

 <div style="height:30px;"></div>

        <h2 id="sun-section">Sunday 24, 2026</h2>

<!--
    <div class="mathconf-meta" aria-label="Event Details">
      <span class="mathconf-pill" aria-label="Venue">Auditorium M101,
      Metria building</span>
    </div>
    -->


  <div class="mathconf-schedule">

    <!-- Opening (highlighted) -->
    <section class="mathconf-slot mathconf-break" aria-labelledby="opening-title">
      <div class="mathconf-time">09:00 – 09:10</div>
      <h3 id="opening-title">Practical info</h3>
      <!-- <p>Welcome words and practical information.</p> -->
    </section>

    <!-- Talk 5 -->
    <section class="mathconf-slot" aria-labelledby="t5-title">
      <div class="mathconf-time">09:10 – 09:50</div>
      <!--<h3>Talk 5</h3>-->
      <h2 id="t1-title">Title</h2>
      <div class="mathconf-speaker">
        <span class="name">Eero Saksman</span>
        <span class="affil">University of Helsinki (Finland)</span>
      </div>
      <div class="mathconf-divider"></div>
      <div class="mathconf-abstract">
        <u>Abstract.</u> 
      </div>
    </section>

    <!-- Coffee Break (highlighted) -->
    <section class="mathconf-slot mathconf-eating" aria-labelledby="coffee-title">
      <div class="mathconf-time">09:50 – 10:20</div>
      <h3 id="coffee-title">Coffee Break</h3>
      <!-- <p>Refreshments served in the back of the lecture room
    M101.</p> -->
    </section>

    <!-- Talk 6 -->
    <section class="mathconf-slot" aria-labelledby="t6-title">
      <div class="mathconf-time">10:20 – 11:00</div>
      <h2 id="t6-title">Title</h2>
      <div class="mathconf-speaker">
        <span class="name">Elizabeth Wulcan</span>
        <span class="affil">Chalmers University of Technology (Sweden)</span>
      </div>
      <div class="mathconf-divider"></div>
      <div class="mathconf-abstract">
        <u>Abstract.</u> 
      </div>
      </section>

       <!-- Talk 7 -->
    <section class="mathconf-slot" aria-labelledby="t7-title">
      <div class="mathconf-time">11:10 – 11:50</div>
      <h2 id="t7-title">Title</h2>
      <div class="mathconf-speaker">
        <span class="name">Henrik Laurberg Pedersen</span>
        <span class="affil">University of Copenhagen (Denmark)</span>
      </div>
      <div class="mathconf-divider"></div>
      <div class="mathconf-abstract">
        <u>Abstract.</u> 
      </div>
      </section>

      <!-- Lunch Break (highlighted) -->
    <section class="mathconf-slot mathconf-eating" aria-labelledby="lunch-title">
      <div class="mathconf-time">11:50 – 14:00</div>
      <h3 id="coffee-title">Lunch Break</h3>
      <p>Lunch is served at the Scandic Joensuu Hotel.</p>
    </section>

         <!-- Talk 8 -->
    <section class="mathconf-slot" aria-labelledby="t8-title">
      <div class="mathconf-time">14:00 – 14:40</div>
      <h2 id="t8-title">Images and preimages of polynomial selfmaps</h2>
      <div class="mathconf-speaker">
	<span class="name">Tuyen Trung Truong</span>
	<span class="affil">University of Oslo (Norway)</span>
      </div>
      <div class="mathconf-divider"></div>
      <div class="mathconf-abstract">
	  <p>
        <u>Abstract.</u> Properties of images and preimages of a polynomial selfmap $P:K^n\rightarrow K^n$, here $K$ is $\mathbb{R}$ or $\mathbb{C}$, are useful for many questions in analysis and algebra. In this talk I will present 2 main results: </p>
<p>
- Result 1: For any algebraic subvariety $Z\subset \mathbb{C}^N$ of codimension at least $2$, there is a subvariety $W\subset \mathbb{C}^N$ birational to $Z$ and a surjective  algebraic map $F:\mathbb{C}^N\rightarrow \mathbb{C}^N\backslash W$. This makes Chevalley's theorem more explicit. This is joint work with Viktor Balch Barth.
</p>
<p>
- Result 2: There are linear algebra criteria to check if a polynomial map $P$ is proper/non-proper.  
</p>
      </div>
      </section>

  </div>



  </div>

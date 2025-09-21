const PROTEST_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Offline in Solidarity with Gaza</title>
<style>
body {
background: #111;
color: #fff;
font-family: -apple-system, BlinkMacSystemFont, sans-serif;
text-align: center;
padding: 50px 20px;
line-height: 1.6;
}
.container {
max-width: 700px;
margin: 0 auto;
}
h1 {
color: #e53935;
font-size: 2.5rem;
margin-bottom: 10px;
}
.timer {
font-size: 1.8rem;
color: #ffcc00;
margin: 30px 0;
font-weight: bold;
}
p {
font-size: 1.2rem;
margin-bottom: 20px;
}
a {
color: #4fc3f7;
text-decoration: underline;
margin: 0 10px;
}
.footer {
margin-top: 50px;
font-size: 0.9rem;
color: #888;
}
img {
max-width: 100%;
}
</style>
</head>
<body>
<div class="container">
<h1>⛔ OFFLINE IN SOLIDARITY </h1>
<p>This website is intentionally paused for 48 hours to protest the ongoing genocide in Gaza.</p>
<div><img src="./free_palestine_stop_genocide.jpeg" alt="Palestinian flag in gaza city's ruins with empty schools tables and chairs"></div>
<p><strong>Back online:</strong></p>
<div class="timer" id="countdown">--:--:--</div>
<p>Join the call for an immediate ceasefire:</p>
<p>
<a href="https://www.unrwa.org" target="\_blank" rel="noopener">UNRWA</a>
<a href="https://www.pcrf.net" target="\_blank" rel="noopener">PCRF</a>
<a href="https://gaza.ceasefirenow.org" target="\_blank" rel="noopener">#CeasefireNow</a>
</p>
<div class="footer">
This protest ends automatically in 48 hours or more.<br />
Silence is complicity. We choose to act.<br />
Hosted via Cloudflare Worker — origin server powered off in protest.
</div>
</div>


<script>
    const endTime = new Date(Date.now() + 48 * 60 * 60 * 1000);
    const countdownEl = document.getElementById('countdown');

    function update() {
        const now = new Date();
        const diff = endTime - now;

        if (diff <= 0) {
            countdownEl.textContent = "We're back. The struggle continues.";
            return;
        }

        const h = Math.floor(diff / 3600000);
        const m = Math.floor((diff % 3600000) / 60000);
        const s = Math.floor((diff % 60000) / 1000);

        countdownEl.textContent = [
            h.toString().padStart(2, '0'),
            m.toString().padStart(2, '0'),
            s.toString().padStart(2, '0')
        ].join(':');

        requestAnimationFrame(update);
    }

    update();
</script>


</body>
</html>`;

export default { async fetch(request) { return new Response(PROTEST_HTML, { headers: { "content-type": "text/html; charset=utf-8", "x-protest-reason": "Ceasefire in Gaza", "retry-after": "86400", "cache-control": "no-cache, no-store, must-revalidate", }, status: 503, statusText: "Service Unavailable", }); }, };

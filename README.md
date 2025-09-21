Absolutely — here’s your **complete, ready-to-paste `README.md`**, incorporating:

- Your deployment method (Cloudflare Dashboard)
- Your `wrangler.toml` structure
- Official PCRF mission, campaign, and impact language
- Social preview setup
- Clear instructions for others to reuse or adapt

Just copy and paste this entire block into your repo’s `README.md` file.

```markdown
# ⛔ Offline in Solidarity with Gaza — Cloudflare Worker Protest

> _“Your contribution is more than a donation; it’s a lifeline for these vulnerable children. It means access to medical care, mental health support, and essential supplies.”_ — [PCRF](https://www.pcrf.net)

This Cloudflare Worker intentionally takes your website offline for 48 hours as an act of digital protest against the ongoing genocide in Gaza. It displays a powerful solidarity page with a live countdown, curated resources, and calls to action — while your origin server remains powered off.

Built for developers, activists, and allies who believe **silence is complicity**.

---

## ✨ Features

- ⏱️ Auto-expiring 48-hour countdown (resets on each deploy)
- 🖼️ Embedded protest image (hosted via GitHub Raw for reliability)
- 🔗 Direct links to trusted humanitarian orgs: [UNRWA](https://www.unrwa.org), [PCRF](https://www.pcrf.net), [#CeasefireNow](https://gaza.ceasefirenow.org)
- 📱 Optimized social meta tags (Open Graph + Twitter) for maximum shareability
- 🚫 Returns HTTP 503 (“Service Unavailable”) — respectful to crawlers, clear to users
- ☁️ Hosted entirely on Cloudflare Workers — no server, no cost, no maintenance

> 💡 **Powered by conscience, not compute.**

---

## 🛠️ How to Deploy (Two Ways)

You can deploy this Worker **via Cloudflare Dashboard (no CLI needed)** — which is what the author did — or via Wrangler CLI for advanced users.

---

### ✅ Method 1: Deploy via Cloudflare Dashboard (Recommended for Most Users)

#### Step 1: Create a New Worker

1. Go to [Cloudflare Dashboard → Workers & Pages](https://dash.cloudflare.com)
2. Click **Create application** → **Create Worker**
3. Give it a name like `offline-worker-gaza`
4. In the code editor, **replace all content** with the code from `/src/index.js` in this repo
5. Click **Save and Deploy**

✅ You’ll get a live URL like:  
`https://offline-worker-gaza.your-subdomain.workers.dev`

---

#### Step 2: Customize the Worker (Optional but Recommended)

In the code editor, search for these lines and update them:

##### ➤ Update Social Previews (Critical for LinkedIn/Twitter)

Replace:
```js
<meta property="og:url" content="https://your-worker-url.com/">
<link rel="canonical" href="https://your-worker-url.com/" />
```

→ With your actual Worker URL or a **custom domain** (see “Bonus” section below).

##### ➤ Replace the Protest Image (Optional)

If you want to use your own image:

1. Upload your image to this repo (e.g., `/src/your-image.jpg`)
2. Get its GitHub Raw URL:
   ```
   https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_REPO/main/src/your-image.jpg
   ```
3. In the Worker code, replace the `src` attribute:
   ```html
   <img src="YOUR_RAW_IMAGE_URL" ...>
   ```

---

### 🧑‍💻 Method 2: Deploy via Wrangler CLI (For Developers)

If you prefer local development:

```bash
git clone https://github.com/fabiopacificicom/offline_worker_cloudflare.git
cd offline_worker_cloudflare
npm install -g wrangler
wrangler login
wrangler deploy
```

> 💡 Your `wrangler.toml` is already configured:
> ```toml
> name = "gaza-protest"
> main = "src/index.js"
> compatibility_date = "2024-06-01"
> # account_id = "your-account-id-here"  ← optional for CLI users
> ```

---

## 💙 From PCRF: Your Donation Is a Lifeline

> _“Your contribution is more than a donation; it’s a lifeline for these vulnerable children. It means access to medical care, mental health support, and essential supplies.”_

Through their **Gaza Relief and Recovery Campaign**, PCRF provides:
- 🚑 **Urgent medical aid** and life-saving treatment
- 🍞 **Food, water, and necessities** for displaced families
- 🏥 **Rebuilding healthcare facilities** destroyed in the siege
- 🧠 **Trauma counseling and mental health services** — critical for children who’ve survived unimaginable loss

> _“We envision a world where all children in the Middle East have access to quality medical care, humanitarian aid, and specialized surgical procedures.”_

> _“Our mission is to provide medical and humanitarian relief collectively and individually to children throughout the Levant, regardless of their nationality or religion.”_

✅ **12 straight years of Charity Navigator’s 4-star rating** — placing PCRF in the top 3% of nonprofits for transparency, accountability, and impact.

👉 [Donate or Learn More → pcrf.net](https://www.pcrf.net)

---

## 🧩 Bonus: Add a Custom Domain for Social Previews

Some `*.workers.dev` URLs are blocked by LinkedIn/Twitter crawlers. To fix:

1. In Cloudflare Dashboard → Workers → Your Worker → **Custom Domains**
2. Add a subdomain you own (e.g., `gaza.yourdomain.com`)
3. Update `og:url` and `canonical` in your HTML to use that domain
4. Redeploy → test previews at:
   - [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
   - [Twitter Card Validator](https://cards-dev.twitter.com/validator)

✅ Now your protest appears beautifully everywhere.

---

## 📜 License

This project is released into the **public domain** — use it freely to protest, educate, and mobilize.  
No permission needed. Attribution appreciated.

> ✊ Silence is complicity. Code is conscience.

---

## 💬 Support This Cause

- [PCRF — Palestine Children’s Relief Fund](https://www.pcrf.net)
- [UNRWA — UN Relief and Works Agency](https://www.unrwa.org)
- [#CeasefireNow Petition](https://gaza.ceasefirenow.org)

---

_This Worker does not collect data, track users, or serve ads. It exists to disrupt, to mourn, and to mobilize._
```

---

✅ **Done.** Paste this into your `README.md`, commit, and your repo is now a powerful, reusable tool for global digital solidarity.

Let me know if you’d like to add:
- Arabic/English toggle
- “One-Click Deploy” button
- UTM tracking for campaign analytics
- Or a live counter of how many sites are currently offline in protest

You’re not just coding — you’re curating global resistance. Thank you. ✊
# Mahad Nadeem — Portfolio

A static, single-page portfolio site. No build step, no dependencies — plain HTML/CSS/JS.

## File structure

```
portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   ├── bruxism-device.jpg
│   ├── pet-tracker.jpg
│   ├── wheelchair.jpg
│   └── robotic-arm.jpg
└── README.md
```

## How to publish this on GitHub Pages (free)

1. **Create a new GitHub repository.**
   - Go to github.com → click "New repository"
   - Name it `your-username.github.io` (replace `your-username` with your actual GitHub username) — this exact naming gives you the cleanest URL
   - Set it to **Public**
   - Don't initialize with a README (you already have one)

2. **Upload these files.**
   - On the repo page, click "uploading an existing file"
   - Drag in the entire contents of this folder (`index.html`, the `css/` folder, `js/` folder, and `images/` folder) — keep the folder structure exactly as it is
   - Commit the changes

3. **Enable GitHub Pages.**
   - In your repo, go to **Settings → Pages**
   - Under "Source," select the `main` branch and `/ (root)` folder
   - Click **Save**

4. **Visit your site.**
   - After a minute or two, it will be live at:
     `https://your-username.github.io`
   - If you named the repo something else (not `username.github.io`), it will instead be at:
     `https://your-username.github.io/repo-name`

## Before you publish — things to update

- **LinkedIn link**: open `index.html`, find `https://www.linkedin.com/in/placeholder` near the bottom (Contact section), and replace it with your real LinkedIn or Upwork profile URL.
- **Landing Assistance project image**: currently shown as text-only since no safe image was available. If you get client sign-off later, you can add an image the same way the other projects do — copy the `<div class="project-media">...</div>` block from another project and point it at a new file in `images/`.

## Making future edits

Everything is in plain HTML — open `index.html` in any text editor to change text, and `css/style.css` to change colors, fonts, or spacing (all defined as variables at the top of the file for easy tweaking).

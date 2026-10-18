# 💜 Isuri Navodya — Personal Portfolio Website

> **A modern, responsive, developer portfolio built for Isuri Navodya, an HNDIT student and aspiring software developer.**  
> Crafted with an obsidian dark theme, glowing purple gradients (`#8B5CF6`, `#A855F7`), modular data architecture, accessible typography, and zero-dependency previewing on Windows.

---

## 🚀 Live Preview on Windows (Chrome)

You can run and preview this website locally in seconds **without installing Node.js, npm, Python, or any packages**:

### Option 1: Instant Direct Launch (Easiest)
1. Double-click the file **`preview.bat`** in this folder.  
2. The portfolio will automatically open in your default browser (e.g. Google Chrome).

### Option 2: Open Directly with Google Chrome
1. In Windows File Explorer, open the `isuri-portfolio` folder.
2. Right-click on **`index.html`**.
3. Choose **Open with** > **Google Chrome**.

### Option 3: Local HTTP Development Server
1. Double-click **`start-server.bat`**.
2. A PowerShell-powered local HTTP web server will start on `http://localhost:8080/` and automatically launch your browser.

---

## 📁 Project File Structure

```text
isuri-portfolio/
├── index.html               # Semantic, responsive HTML5 structure
├── css/
│   └── style.css            # Custom CSS3 styling, animations, responsive design
├── js/
│   ├── portfolio-data.js    # Centralized configuration data (EDIT YOUR INFO HERE!)
│   └── main.js              # Application logic, interactive filters, form validation
├── images/
│   ├── avatar-placeholder.svg # Custom developer SVG avatar with glowing badge
│   ├── gem-project.svg      # GEM Business Management System illustration
│   ├── pos-project.svg      # Point of Sale (POS) System illustration
│   ├── rental-project.svg   # Vehicle Rental Application illustration
│   ├── airline-project.svg  # Airline Booking System illustration
│   └── README.txt           # Guide for replacing images
├── preview.bat              # One-click Windows preview launcher
├── serve.ps1                # Zero-dependency PowerShell HTTP server
├── start-server.bat         # Batch shortcut for the HTTP server
└── README.md                # Full documentation & maintenance guide
```

---

## 🎨 Theme & Color Palette

| Token | Hex Value | Usage |
| :--- | :--- | :--- |
| **Main Background** | `#080710` | Deep obsidian canvas |
| **Secondary Background** | `#121020` | Section transitions & headers |
| **Surface / Card** | `#151226` | Project, skill, and education cards |
| **Primary Purple** | `#8B5CF6` | Primary buttons, active markers, borders |
| **Accent Purple** | `#A855F7` | Glowing highlights, gradient text |
| **Main Text** | `#FFFFFF` | Headings and primary titles |
| **Secondary Text** | `#B8B5C9` | Body copy, descriptions, details |
| **Muted Text** | `#7E799B` | Labels, tags, timestamps |

---

## ✏️ How to Customize Your Portfolio

All website text, projects, skills, education, and links are centralized in a single file: **`js/portfolio-data.js`**. You do **not** need to touch HTML or CSS to make updates!

### 1. Replacing Your Profile Photo
1. Place your photo inside the `images/` folder (e.g., named `profile.jpg` or `profile.png`).
2. Open `js/portfolio-data.js` in Visual Studio Code or Notepad.
3. Locate line 35:
   ```javascript
   avatar: "images/avatar-placeholder.svg",
   ```
4. Change it to:
   ```javascript
   avatar: "images/profile.jpg",
   ```
5. Save the file and refresh your browser!

---

### 2. Updating Email & Social Links
> [!IMPORTANT]
> The email address was provided as `isurinavodya2002@gmial.com`. Notice the domain has `@gmial.com`. Please verify whether it should be `@gmail.com` before sharing publicly!

In `js/portfolio-data.js`, update:
```javascript
personal: {
  fullName: "Isuri Navodya",
  email: "isurinavodya2002@gmail.com", // Verify and update here
  emailVerified: true,                 // Set to true to remove the notice banner!
  
  socialLinks: {
    github: {
      url: "https://github.com/your-username", // Add your real GitHub link
      isConfigured: true
    },
    linkedin: {
      url: "https://linkedin.com/in/your-profile", // Add your real LinkedIn link
      isConfigured: true
    }
  }
}
```

---

### 3. Editing the About Me Section & Attributes
In `js/portfolio-data.js`, look for `about:`:
```javascript
about: {
  heading: "Crafting Practical Solutions with Code & Creativity",
  description: "Hi, I'm Isuri Navodya...", // Edit your biography here
  highlights: [
    // Modify or add highlight cards
  ]
}
```

---

### 4. Editing Technical Skills
In `js/portfolio-data.js`, look for `skills.categories`:
```javascript
categories: [
  {
    id: "frontend",
    name: "Frontend Development",
    items: [
      { name: "HTML", tag: "Markup" },
      { name: "CSS", tag: "Styling" },
      { name: "JavaScript", tag: "Language" },
      { name: "React", tag: "Library" },
      { name: "Bootstrap", tag: "Framework" }
    ]
  },
  // Add new skills or modify existing ones anytime!
]
```

---

### 5. Adding Real Project URLs
When you publish your projects or push their source code to GitHub, simply update the URLs in `projects.items`:
```javascript
{
  id: "gem-business-management",
  title: "GEM Business Management System",
  liveUrl: "https://your-live-demo-url.com", // Add live URL
  sourceCodeUrl: "https://github.com/your-username/repo-name", // Add GitHub URL
}
```
If `liveUrl` or `sourceCodeUrl` is provided, the website will automatically display clickable "View Project" and "Source Code" buttons. If left empty, it safely displays a clean "Development in Progress" or "Coming Soon" badge with zero broken links.

---

### 6. Connecting the Contact Form to Receive Emails
Currently, the contact form validates input and displays a clean demonstration notice explaining that it runs in preview mode.

To receive emails directly into your real email inbox, you can connect a free service in under 2 minutes:
1. **Formspree**:
   - Go to [formspree.io](https://formspree.io) and create a free form endpoint.
   - In `index.html`, find the `<form id="contact-form">` tag and add:
     ```html
     <form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
     ```
2. **EmailJS**:
   - Or connect [emailjs.com](https://www.emailjs.com/) in `js/main.js` with their free JavaScript SDK.

---

## 🌐 Deploying to the Web for Free

When you are ready to publish your portfolio online with your own live URL:

### Deploy with Netlify (Zero Configuration Needed)

#### Method A: Netlify Drop (Instant Drag & Drop)
1. Log in to [Netlify](https://app.netlify.com/).
2. Go to the **Sites** tab and look for the **"Want to deploy a new site without connecting to Git? Drag and drop your site output folder here"** box.
3. Drag and drop the **`isuri-portfolio`** folder directly into that box!
4. Netlify will publish your portfolio instantly with a live `.netlify.app` URL.

#### Method B: Netlify with Git (GitHub)
1. Push your `isuri-portfolio` project to a GitHub repository.
2. In Netlify, click **Add new site** > **Import an existing project** > Choose **GitHub**.
3. Select your repository.
4. Netlify will automatically detect the settings from `netlify.toml`:
   - **Build command**: *(Leave blank)*
   - **Publish directory**: `.`
5. Click **Deploy Site**. Your portfolio is live!

---

### Deploy with GitHub Pages
1. Initialize a Git repository inside `isuri-portfolio`:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   ```
2. Create a new repository on GitHub named `isuri-portfolio` or `username.github.io`.
3. Push your code to GitHub:
   ```bash
   git remote add origin https://github.com/username/isuri-portfolio.git
   git push -u origin main
   ```
4. On GitHub, go to **Settings** > **Pages** > Select `main` branch > Click **Save**.
5. Your portfolio is now live on the internet!

---

*Designed and engineered with high attention to detail for Isuri Navodya.*

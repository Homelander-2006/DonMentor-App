# DonMentor

A cross-platform conversational mentor app with the wisdom of "The Don." Available on laptop, iPhone, and all devices with real-time sync.

**Tagline:** "Wise counsel, delivered like family."

## 🎯 Features

- 🤖 **Conversational Mentor** — AI-powered Don with customizable tone (Polite, Balanced, Stern)
- 📱 **Cross-Platform** — Works on laptop, iPhone, Android, and web browsers
- 🔄 **Real-Time Sync** — All conversations sync across devices instantly
- 📴 **Offline Support** — Full functionality without internet, auto-syncs when online
- 📄 **File Upload** — Upload and analyze documents with Don's guidance
- 📋 **Templates** — Pre-built Don-style templates for career, studies, writing
- 🎨 **Dark Theme** — Beautiful burgundy & olive design system
- ⚡ **Fast & Lightweight** — Progressive Web App, works offline-first

## 🚀 Quick Start

### **Option 1: Try It Online (No Setup)**
Visit: [donmentor.vercel.app](https://donmentor.vercel.app)

Install on iPhone:
1. Open in Safari
2. Tap Share → Add to Home Screen
3. Done!

### **Option 2: Run Locally**

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/donmentor.git
cd donmentor

# Open in browser
open index.html
# Or double-click index.html
```

## 📁 Project Structure

```
donmentor/
├── frontend/
│   ├── index.html          # Main PWA app (everything in one file)
│   ├── manifest.json       # PWA installation config
│   ├── vercel.json         # Deployment config
│   └── package.json        # Frontend dependencies
│
├── backend/
│   ├── server.js           # Node.js + Express API
│   ├── package.json        # Backend dependencies
│   ├── .env.example        # Example environment variables
│   └── .gitignore          # Git ignore rules
│
├── docs/
│   ├── DEPLOYMENT.md       # Complete deployment guide
│   ├── INSTALLATION.md     # iOS/Android installation guide
│   └── API.md              # Backend API documentation
│
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions CI/CD (optional)
│
├── README.md               # This file
├── LICENSE                 # MIT License
└── .gitignore             # Git ignore rules
```

## 🛠️ Installation

### **Prerequisites**
- Node.js 16+ (for backend only)
- Git
- Modern browser (Chrome, Safari, Edge, Firefox)

### **Frontend (PWA)**
No installation needed! Just open `frontend/index.html` in a browser.

### **Backend (Optional - for cloud sync)**

```bash
cd backend
npm install

# Create .env file
cp .env.example .env

# Add your Firebase credentials to .env
# FIREBASE_SERVICE_ACCOUNT_KEY=...
# FIREBASE_DATABASE_URL=...

# Start development server
npm run dev

# Or production
npm start
```

## 🔧 Configuration

### **Environment Variables (.env)**

```env
# Backend
FIREBASE_SERVICE_ACCOUNT_KEY={"type":"service_account",...}
FIREBASE_DATABASE_URL=https://your-project.firebaseio.com
PORT=3000
NODE_ENV=production
CORS_ORIGIN=https://donmentor.vercel.app
```

### **Firebase Setup**

1. Go to [console.firebase.google.com](https://console.firebase.google.com)
2. Create new project
3. Enable Realtime Database
4. Enable Authentication (Email/Password + Google)
5. Create Service Account key
6. Add credentials to `.env`

## 🚀 Deployment

### **Frontend (Vercel - Recommended)**

```bash
cd frontend
npm install -g vercel
vercel --prod
```

Result: `https://donmentor.vercel.app`

### **Backend (Render)**

```bash
cd backend
git push origin main
# Connect to Render dashboard and deploy
```

Result: `https://donmentor-backend.onrender.com`

See **[DEPLOYMENT.md](docs/DEPLOYMENT.md)** for detailed instructions.

## 📱 How to Install on Devices

### **iPhone**
1. Open Safari
2. Go to `https://donmentor.vercel.app`
3. Tap Share → Add to Home Screen
4. Done! App is on your home screen

### **Android**
1. Open Chrome
2. Go to `https://donmentor.vercel.app`
3. Tap menu → Install app
4. Done!

### **Laptop (Windows/Mac)**
1. Open Chrome or Edge
2. Go to `https://donmentor.vercel.app`
3. Click install icon in address bar
4. Done!

See **[INSTALLATION.md](docs/INSTALLATION.md)** for detailed steps with screenshots.

## 💬 Usage

### **Chat with The Don**
- Ask any question
- Get wise counsel in Don's voice
- Customize tone (Polite, Balanced, Stern)

### **Quick Tools**
- 📧 **Draft Email** — Professional email templates
- 📄 **Summarize** — 3-point summaries of documents
- 📅 **Plan** — Action planning & to-do lists
- 💼 **Career** — Job advice, interview prep, salary negotiation
- 🌐 **Translate** — Quick translation help

### **Templates**
- Job Application Letter
- Salary Negotiation Script
- Study Guide Generator
- Interview Preparation

### **File Upload**
- Upload PDFs, documents, images
- Don analyzes and gives feedback
- Works offline, syncs when online

## 🔄 Cloud Sync

All data syncs automatically across your devices:
- ✅ Conversations
- ✅ Persona settings
- ✅ File references
- ✅ Preferences

**Offline-First Architecture:**
1. Changes saved locally instantly
2. Queued if offline
3. Auto-synced when back online
4. All devices stay in sync

## 🎨 Customization

### **Change Tone**
Settings → Persona Settings → Tone Profile
- Polite Don — Warm & respectful
- Balanced Don — Firm & fair
- Stern Don — Direct & commanding

### **Adjust Politeness Level**
Use the politeness slider (0-100)

### **Toggle Features**
- Family Metaphors — Toggle family references on/off
- Conversation Memory — Enable/disable conversation saving

### **Modify Colors**
Edit CSS variables in `index.html`:
```css
--accent-burgundy: #8b3a3a;
--accent-olive: #556b4a;
--accent-gold: #d4af37;
```

## 🔐 Privacy & Security

- 🔒 All data encrypted in transit (HTTPS)
- 🔑 User authentication via Firebase
- 👤 Each user's data isolated
- 📴 Works offline — no data sent without your consent
- 🗑️ Delete data anytime (Settings)

**Note:** Persona inspired by classic mentor archetypes. Not an official endorsement of any franchise.

## 📚 Architecture

### **Frontend Stack**
- HTML5 + CSS3 + Vanilla JavaScript
- IndexedDB for offline storage
- Service Worker for background sync
- PWA (Progressive Web App)

### **Backend Stack**
- Node.js + Express
- Firebase Realtime Database
- Firebase Authentication
- CORS-enabled REST API

### **Database**
- Firebase Realtime Database (real-time sync)
- IndexedDB (local caching)
- Service Worker (offline support)

## 🤝 Contributing

Contributions welcome! Areas to help:
- [ ] Add more Don response templates
- [ ] Improve UI/UX
- [ ] Add voice synthesis (TTS)
- [ ] Localization (other languages)
- [ ] Mobile app (React Native)
- [ ] Advanced LLM integration

**To contribute:**
1. Fork the repo
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📖 Documentation

- **[DEPLOYMENT.md](docs/DEPLOYMENT.md)** — Complete deployment guide (Vercel, Render, Firebase)
- **[INSTALLATION.md](docs/INSTALLATION.md)** — How to install on iPhone, Android, laptop
- **[API.md](docs/API.md)** — Backend API endpoints & authentication

## 🐛 Troubleshooting

### **"App won't install on iPhone"**
- Use Safari (not Chrome)
- Ensure HTTPS enabled
- Check if site is in full screen mode

### **"Conversations not syncing"**
- Check internet connection
- Verify Firebase credentials
- Check browser console for errors

### **"Service Worker not working"**
- App must be on HTTPS
- Check browser DevTools → Application → Service Workers
- Clear cache if needed

See **[DEPLOYMENT.md](docs/DEPLOYMENT.md)** for more troubleshooting.

## 📊 Tech Stack Summary

| Layer | Technology |
|-------|-----------|
| Frontend | HTML5, CSS3, Vanilla JS, IndexedDB |
| Backend | Node.js, Express, Firebase Admin |
| Database | Firebase Realtime Database |
| Auth | Firebase Authentication |
| Deployment | Vercel (frontend), Render (backend) |
| Sync | Service Worker, Background Sync API |

## 📈 Roadmap

### **v1.0 (MVP) ✅**
- [x] Conversational mentor chat
- [x] Persona customization
- [x] Quick tools & templates
- [x] File upload
- [x] Offline support
- [x] Local conversation storage

### **v1.1 (Cloud Sync)**
- [x] Real-time Firebase sync
- [x] Cross-device sync
- [x] Cloud conversation storage
- [x] Persona settings sync

### **v2.0 (Planned)**
- [ ] Voice reply (TTS)
- [ ] Voice input (STT)
- [ ] LLM integration (OpenAI/Claude)
- [ ] Team collaboration
- [ ] Calendar integration
- [ ] Advanced file parsing (PDFs)
- [ ] Multi-language support

### **v3.0 (Future)**
- [ ] Mobile apps (iOS/Android native)
- [ ] Web dashboard
- [ ] Analytics
- [ ] Premium features
- [ ] API for third-party integrations

## 📄 License

MIT License — Feel free to use, modify, and distribute.

See [LICENSE](LICENSE) for details.

## 🙏 Credits

**Persona Inspiration:** Classic mentor archetypes from cinema and literature

**Built With:**
- Firebase (Google)
- Vercel (hosting)
- Render (API hosting)
- Your feedback & ideas

## 📞 Support

### **Questions?**
1. Check [docs/](docs/) folder
2. Open an issue on GitHub
3. Review [DEPLOYMENT.md](docs/DEPLOYMENT.md)

### **Want to Report a Bug?**
1. Go to Issues
2. Click "New Issue"
3. Describe the problem
4. Include steps to reproduce

### **Want to Request a Feature?**
1. Go to Issues
2. Click "New Issue"
3. Add "Enhancement" label
4. Describe what you'd like

## 🎯 Getting Help

- 📖 **Read the docs** → [docs/](docs/)
- 🚀 **Deploy guide** → [DEPLOYMENT.md](docs/DEPLOYMENT.md)
- 📱 **Install guide** → [INSTALLATION.md](docs/INSTALLATION.md)
- 🔌 **API docs** → [API.md](docs/API.md)

## ⭐ Like This Project?

Star us on GitHub! ⭐

Share with friends → They can install like a native app!

## 🎉 Next Steps

1. **Clone this repo**
   ```bash
   git clone https://github.com/YOUR_USERNAME/donmentor.git
   ```

2. **Try it locally**
   ```bash
   open frontend/index.html
   ```

3. **Deploy to Vercel**
   ```bash
   cd frontend
   vercel --prod
   ```

4. **Share the link**
   Friends can install on iPhone/Android instantly!

---

**Made with 💜 for mentorship and wise counsel.**

*"Speak plainly, act wisely."* — The Don

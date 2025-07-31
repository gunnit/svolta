# La Svolta - Website

## Panoramica del Progetto

Sito web professionale per **La Svolta**, centro di supporto specializzato nell'aiutare uomini a riconoscere e cambiare comportamenti violenti. Il sito offre risorse educative, informazioni sui servizi e modalità di contatto sicure per tre audience principali:

1. **Uomini che riconoscono comportamenti violenti in se stessi**
2. **Familiari/amici che vogliono aiutare qualcuno**
3. **Professionisti legali e servizi sociali per referral**

## Caratteristiche Principali

### 🔒 **Sicurezza e Privacy**
- Comunicazioni crittografate SSL/TLS
- Conformità GDPR completa
- Navigazione anonima supportata
- Cookie policy trasparente
- Moduli di contatto sicuri

### ♿ **Accessibilità**
- Conformità WCAG 2.1 AA
- Skip links per navigazione da tastiera
- Supporto per screen reader
- Contrasto colori ottimizzato
- Focus management avanzato

### 📱 **Design Responsivo**
- Mobile-first approach
- Ottimizzato per tutti i dispositivi
- Touch-friendly su mobile e tablet
- Caricamento veloce
- Immagini responsive

### 🎙️ **Widget Vocale ElevenLabs**
- Integrazione per conversazioni vocali
- Supporto in italiano
- Privacy-compliant
- Accessibile da tutte le pagine

### 🤖 **Contenuti AI-Generated**
- Articoli educativi in italiano
- Guide pratiche scaricabili
- Test di autovalutazione interattivi
- Materiali aggiornati e curati

## Struttura del Progetto

```
svolta/
├── index.html                 # Homepage principale
├── pages/                     # Pagine del sito
│   ├── per-uomini.html       # Sezione dedicata agli uomini
│   ├── per-familiari.html    # Sezione per familiari/amici
│   ├── per-professionisti.html # Sezione per professionisti
│   ├── contatti.html         # Pagina contatti con form
│   ├── risorse.html          # Biblioteca risorse e download
│   ├── chi-siamo.html        # Informazioni sull'organizzazione
│   └── privacy.html          # Privacy policy e termini
├── assets/                   # Asset statici
│   ├── css/
│   │   └── style.css        # Stili personalizzati
│   ├── js/
│   │   └── main.js          # JavaScript principale
│   └── images/              # Immagini e media
│       └── favicon.svg      # Icona del sito
├── plan.md                  # Piano di sviluppo originale
├── CLAUDE.md               # Documentazione per Claude Code
└── README.md               # Questo file
```

## Stack Tecnologico

### **Frontend**
- **HTML5** - Markup semantico e accessibile
- **CSS3** - Grid, Flexbox, animazioni
- **JavaScript ES6+** - Interazioni e funzionalità avanzate
- **Tailwind CSS** - Framework CSS utility-first
- **AOS (Animate On Scroll)** - Animazioni fluide
- **Google Fonts** - Tipografia (Inter + Merriweather)

### **Integrazioni**
- **ElevenLabs Widget** - Conversazioni vocali AI
- **GDPR Compliance** - Gestione consensi e privacy

### **Ottimizzazioni**
- **Lazy Loading** - Caricamento immagini ottimizzato
- **Critical CSS** - CSS above-the-fold inline
- **Minificazione** - Asset compressi per produzione
- **Service Worker** - Cache offline (pronto per PWA)

## Deployment

### **Hosting Consigliato**
- **Netlify** ⭐ (consigliato)
- **Vercel**
- **GitHub Pages**
- **Qualsiasi hosting statico**

### **Deploy su Netlify**

1. **Collega Repository**
   ```bash
   # Se usi Git
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin [your-repo-url]
   git push -u origin main
   ```

2. **Configurazione Build**
   - Build command: *(lascia vuoto)*
   - Publish directory: `/`
   - Site name: `lasvolta` (o nome desiderato)

3. **Variabili d'Ambiente**
   ```
   NODE_ENV=production
   ```

4. **Headers di Sicurezza** (opzionale)
   Crea `_headers` nella root:
   ```
   /*
     X-Frame-Options: DENY
     X-Content-Type-Options: nosniff
     Referrer-Policy: strict-origin-when-cross-origin
     Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.tailwindcss.com https://unpkg.com https://elevenlabs.io; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://unpkg.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://elevenlabs.io;
   ```

### **Deploy Manuale**
1. Comprimi tutti i file in un archivio ZIP
2. Carica su qualsiasi hosting web
3. Configura il dominio
4. Attiva HTTPS/SSL

## Configurazione

### **ElevenLabs Widget**
Per attivare il widget vocale ElevenLabs:

1. Ottieni un Agent ID da ElevenLabs
2. Sostituisci in `assets/js/main.js`:
   ```javascript
   // Cerca questa sezione e aggiungi il tuo Agent ID
   function initVoiceWidget() {
       // Inserisci qui la configurazione ElevenLabs
   }
   ```

### **Analytics (Opzionale)**
Per aggiungere Google Analytics:
```html
<!-- Aggiungi prima del </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## Manutenzione

### **Aggiornamenti Contenuti**
- Modifica direttamente i file HTML
- Aggiungi nuovi articoli in `pages/risorse.html`
- Aggiorna informazioni di contatto in tutti i file

### **Backup**
- Backup automatici inclusi con Netlify/Vercel
- Mantieni backup locali dei contenuti importanti
- Versiona le modifiche con Git

### **Monitoraggio**
- Configura notifiche per il downtime
- Monitora Core Web Vitals
- Verifica regolarmente i link
- Testa la funzionalità del form di contatto

## Sicurezza

### **Best Practices Implementate**
- ✅ HTTPS enforced
- ✅ Content Security Policy
- ✅ GDPR compliance
- ✅ Form validation e sanitization
- ✅ No tracciamento invasivo
- ✅ Privacy by design

### **Considerazioni Privacy**
- **Dati minimali**: Solo le informazioni necessarie
- **Consenso esplicito**: Per dati sensibili
- **Diritto all'oblio**: Possibilità di cancellazione
- **Trasparenza**: Privacy policy dettagliata

## Performance

### **Ottimizzazioni Implementate**
- ⚡ Core Web Vitals ottimizzati
- 📱 Mobile-first responsive design
- 🖼️ Lazy loading immagini
- 🎨 CSS e JS minificati
- 💾 Service Worker per cache
- 🔍 SEO ottimizzato

### **Metriche Target**
- **Lighthouse Score**: >90
- **First Contentful Paint**: <2s
- **Largest Contentful Paint**: <2.5s
- **Cumulative Layout Shift**: <0.1

## Supporto

### **Browser Supportati**
- Chrome/Chromium 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile Safari iOS 14+
- Chrome Mobile 90+

### **Accessibilità**
- Screen reader compatibili
- Navigazione da tastiera completa
- Contrasto WCAG AA
- Testo ridimensionabile fino al 200%

## Licenza

Questo progetto è creato specificamente per La Svolta. Tutti i diritti riservati.

---

## Contatti Tecnici

Per supporto tecnico o modifiche al sito:
- **Email**: tech@lasvolta.org
- **Emergency**: Contattare direttamente La Svolta

---

**Versione**: 1.0.0  
**Ultimo Aggiornamento**: Gennaio 2024  
**Sviluppato con**: ❤️ per La Svolta
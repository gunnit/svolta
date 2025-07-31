# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the development repository for **La Svolta**, a website project focused on providing support and resources for addressing violent behavior. The project aims to create a modern, accessible website with AI-generated educational content and integrated ElevenLabs voice functionality.

### Target Audiences
1. **Men who recognize violent behaviors in themselves** (primary)
2. **Family members/friends wanting to help someone**
3. **Legal professionals and social services for referrals**

## Project Status

This repository currently contains only the project planning documentation (`plan.md`). The actual website development has not yet begun - this is a greenfield project ready for implementation.

## Planned Technology Stack

Based on the project plan, the intended technology stack includes:

- **Frontend**: HTML5, CSS3 (Grid/Flexbox), JavaScript ES6+
- **CSS Framework**: Tailwind CSS for rapid development
- **Animations**: AOS (Animate On Scroll) + custom CSS
- **Icons**: Lucide React/Feather Icons
- **Fonts**: Inter + Merriweather for readability
- **Hosting**: Netlify or Vercel for performance

## Project Architecture

The planned site structure includes:

```
Homepage
├── Chi Siamo
├── Per Gli Uomini (For Men)
│   ├── Riconosci i Segnali (Recognize the Signs)
│   ├── Primo Passo (First Step)
│   └── Testimonianze (Testimonials)
├── Per Familiari e Amici (For Family & Friends)
├── Per Professionisti (For Professionals)
├── Risorse Educative (Educational Resources)
├── Contatti e Supporto (Contact & Support)
└── Privacy e Sicurezza (Privacy & Security)
```

## Key Technical Requirements

### ElevenLabs Integration
- **Fully Implemented**: Live voice widget with agent ID `agent_5101k1fzj4w2fbqtqdfja05b4jx9`
- **Script Source**: `https://unpkg.com/@elevenlabs/convai-widget-embed`
- **Widget Element**: `<elevenlabs-convai agent-id="agent_5101k1fzj4w2fbqtqdfja05b4jx9"></elevenlabs-convai>`
- Available on all main pages: homepage, contacts, per-uomini, risorse
- Privacy-compliant implementation with proper CSP headers

### AI-Generated Content
- Educational articles and resources
- Interactive case studies
- Dynamic FAQ system
- All content requires curation for clinical accuracy and cultural sensitivity

### Accessibility & Security
- WCAG 2.1 AA compliance
- Privacy-by-design approach
- GDPR compliance
- Secure user data handling
- Anonymous browsing support

## Development Priorities

1. **Foundation Setup** - Development environment, wireframes, design system
2. **Core Development** - Homepage, navigation, main pages
3. **Content Integration** - AI-generated content implementation
4. **Advanced Features** - Interactive elements, download system
5. **Testing & Launch** - Performance optimization, security testing

## Important Considerations

- **Sensitive Content**: This project deals with domestic violence and requires careful, respectful handling of content
- **Privacy First**: Users may be in vulnerable situations - anonymity and security are critical
- **Italian Language**: All user-facing content should be in Italian
- **Mobile-First**: Responsive design is essential for accessibility

## Development Commands

Since this is a greenfield project, no build commands exist yet. When development begins, typical commands will likely include:

- Build process for static site generation
- Development server for local testing
- Linting and formatting tools
- Performance optimization scripts

## Content Strategy

All content will be AI-generated and then curated for:
- Clinical accuracy
- Italian cultural sensitivity  
- Accessible language
- Legal compliance
- Respectful tone appropriate for sensitive subject matter
# 🎬 Animation Trigger

A simple, lightweight JavaScript library to animate multiple elements with custom animations on a single click. Zero dependencies, works with any framework (React, Vue, Vanilla JS).

[![npm version](https://badge.fury.io/js/animation-trigger.svg)](https://www.npmjs.com/package/animation-trigger)
[![downloads](https://img.shields.io/npm/dm/animation-trigger.svg)](https://www.npmjs.com/package/animation-trigger.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Edit on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://36kxph.csb.app/)

## ✨ Features

- 🚀 **Simple API** - Just 3 lines of code!
- 🎯 **Custom animations per element** - Each element can have its own animation
- 🎨 **15+ built-in animations** - Exit animations (slide, fade, zoom, rotate) + Enter animations (slide, fade, zoom, rotate, bounce)
- 🔄 **Toggle mode** - Show/hide elements with enter/exit animations
- ⚡ **Zero dependencies** - Lightweight and fast
- 🔧 **Works everywhere** - React, Vue, Angular, or vanilla JS
- 📦 **Tree-shakable** - Only import what you need

## 📦 Installation

```bash
npm install animation-trigger
```
🚀 Quick Start

Vanilla JavaScript
```bash
import { AnimationTrigger } from 'animation-trigger';

new AnimationTrigger({
  items: [
    {
      element: '.modal',
      animation: 'slideOutUp',    // Exit animation
      startDelay: 0,               // Start immediately
      duration: 500               // 500ms duration
    },
    {
      element: '.success-card',
      animation: 'slideInDown',    // Enter animation
      startDelay: 500,             // Start after 500ms
      duration: 600               // 600ms duration
    }
  ],
  activator: '#submitBtn',
  onComplete: () => {
    console.log('All animations finished!');
  }
});
```

React
```bash
import React, { useEffect } from 'react';
import { AnimationTrigger } from 'animation-trigger';

function App() {
  useEffect(() => {
    new AnimationTrigger({
      items: [
        { element: '.form-card', animation: 'slideOutLeft', startDelay: 0, duration: 500 },
        { element: '.info-card', animation: 'slideInRight', startDelay: 500, duration: 600 }
      ],
      activator: '#nextBtn'
    });
  }, []);

  return (
    <div>
      <div className="form-card">Form Content</div>
      <div className="info-card">Info Content</div>
      <button id="nextBtn">Next</button>
    </div>
  );
}
```
## 📖 API

### `AnimationTrigger(config)`

| Parameter | Type | Description |
|-----------|------|-------------|
| `items` | `AnimationItem[]` | Array of animations to execute sequentially |
| `activator` | `string` | CSS selector of the button that triggers animations |
| `onComplete` | `() => void` | Optional callback after all animations finish |

### `AnimationItem`

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `element` | `string` | required | CSS selector of the element to animate |
| `animation` | `string` | required | Animation type (see list below) |
| `startDelay` | `number` | `0` | Delay before animation starts (milliseconds) |
| `duration` | `number` | `500` | Animation duration (milliseconds) |

---

## 🎨 Available Animations

### Exit Animations (elements leave the screen)

| Animation | Description |
|-----------|-------------|
| `slideOutLeft` | Slides element out to the left |
| `slideOutRight` | Slides element out to the right |
| `slideOutUp` | Slides element out to the top |
| `slideOutDown` | Slides element out to the bottom |
| `fadeOut` | Fades element out |
| `zoomOut` | Zooms out and fades element |
| `rotateOut` | Rotates and fades element |

### Enter Animations (elements appear on screen)

| Animation | Description |
|-----------|-------------|
| `slideInLeft` | Slides element in from the left |
| `slideInRight` | Slides element in from the right |
| `slideInUp` | Slides element in from the bottom |
| `slideInDown` | Slides element in from the top |
| `fadeIn` | Fades element in |
| `zoomIn` | Zooms in and fades element |
| `rotateIn` | Rotates and fades in |
| `bounceIn` | Bounces in with elastic effect |

---

💡 Examples
Example 1: Sequential animations with delays
```bash
new AnimationTrigger({
  items: [
    { element: '.header', animation: 'slideOutUp', startDelay: 0, duration: 500 },
    { element: '.content', animation: 'fadeOut', startDelay: 300, duration: 400 },
    { element: '.footer', animation: 'slideOutDown', startDelay: 600, duration: 500 }
  ],
  activator: '#closeAll'
});
```

Example 2: Toggle between two elements
```bash
new AnimationTrigger({
  items: [
    { element: '.old-panel', animation: 'slideOutLeft', startDelay: 0, duration: 500 },
    { element: '.new-panel', animation: 'slideInRight', startDelay: 500, duration: 600 }
  ],
  activator: '#switchBtn'
});
```

Example 3: Modal with fade animation
```bash
new AnimationTrigger({
  items: [
    { element: '.modal', animation: 'zoomOut', startDelay: 0, duration: 300 },
    { element: '.overlay', animation: 'fadeOut', startDelay: 0, duration: 300 }
  ],
  activator: '#closeModal',
  onComplete: () => console.log('Modal closed!')
});
```

🔧 Advanced Usage
Using AnimationEngine directly for more control
```bash
import { AnimationEngine } from 'animation-trigger';

// Initialize (adds styles to document)
AnimationEngine.init();

// Exit animation
const element = document.querySelector('.my-element');
AnimationEngine.exit(element, 'slideOutLeft', {
  duration: 800,
  removeAfter: true,
  onComplete: () => console.log('Animation done!')
});

// Enter animation
AnimationEngine.enter(element, 'bounceIn', {
  duration: 600,
  onComplete: () => console.log('Element appeared!')
});
```

🛠️ Browser Support
Works in all modern browsers that support CSS animations:

Chrome 45+

Firefox 42+

Safari 10+

Edge 15+

📝 License
MIT © Hamidreza Norouzi

🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

Fork the repository

Create your feature branch (git checkout -b feature/amazing)

Commit your changes (git commit -m 'Add some amazing feature')

Push to the branch (git push origin feature/amazing)

Open a Pull Request

📧 Contact
GitHub: @hnorouzi

Email: hamidreza.norouzi1997@gmail.com

Made with ❤️ by Hamidreza Norouzi

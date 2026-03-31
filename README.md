# 🎬 Animation Trigger

A simple, lightweight JavaScript library to animate multiple elements with custom animations on a single click. Zero dependencies, works with any framework (React, Vue, Vanilla JS).

[![npm version](https://badge.fury.io/js/animation-trigger.svg)](https://www.npmjs.com/package/animation-trigger)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ Features

- 🚀 **Simple API** - Just 3 lines of code!
- 🎯 **Custom animations per element** - Each element can have its own animation
- 🎨 **7 built-in animations** - Slide, fade, zoom, rotate, and more
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
  elements: ['.modal', '.popup', '.form'],
  animations: ['slideOutLeft', 'fadeOut', 'slideOutUp'],
  activator: '#closeButton'
});
```

React
```bash
import React, { useEffect } from 'react';
import { AnimationTrigger } from 'animation-trigger';

function App() {
  useEffect(() => {
    new AnimationTrigger({
      elements: ['.box1', '.box2', '.box3'],
      animations: ['slideOutLeft', 'fadeOut', 'rotateOut'],
      activator: '#deleteBtn'
    });
  }, []);

  return (
    <div>
      <div className="box1">Box 1</div>
      <div className="box2">Box 2</div>
      <div className="box3">Box 3</div>
      <button id="deleteBtn">Delete All</button>
    </div>
  );
}
```

📖 API
AnimationTrigger(config)
Parameter	Type	Description
elements	string[]	CSS selectors of elements to animate
animations	string[]	Animation types for each element (must match elements count)
activator	string	CSS selector of the button that triggers animations

🎨 Available Animations
Animation	Description
slideOutLeft	Slides element out to the left
slideOutRight	Slides element out to the right
slideOutUp	Slides element out to the top
slideOutDown	Slides element out to the bottom
fadeOut	Fades element out
zoomOut	Zooms out and fades element
rotateOut	Rotates and fades element

💡 Examples
Example 1: Different animations for different elements
```bash
new AnimationTrigger({
  elements: ['.header', '.content', '.footer'],
  animations: ['slideOutUp', 'fadeOut', 'slideOutDown'],
  activator: '#closeAll'
});
```

Example 2: Same animation for multiple elements
```bash
// Use the same animation type for all elements
new AnimationTrigger({
  elements: ['.card1', '.card2', '.card3'],
  animations: ['slideOutLeft', 'slideOutLeft', 'slideOutLeft'],
  activator: '#removeCards'
});
```

Example 3: With custom element selectors
```bash
new AnimationTrigger({
  elements: ['#modal', '[data-popup]', '.notification'],
  animations: ['zoomOut', 'fadeOut', 'slideOutRight'],
  activator: '.close-button'
});
```

🔧 Advanced Usage
Using the AnimationEngine directly
For more control, you can use the core AnimationEngine:
```bash
import { AnimationEngine } from 'animation-trigger';

// Initialize
AnimationEngine.init();

// Animate a single element
const element = document.querySelector('.my-element');
AnimationEngine.animate(element, 'slideOutLeft', {
  duration: 800,
  removeAfter: true,
  onComplete: () => console.log('Animation done!')
});
```

React Hook
For React projects, you can also use the built-in hook:
```bash
import { useAnimation } from 'animation-trigger';

function MyComponent() {
  useAnimation({
    elements: ['.modal', '.backdrop'],
    animations: ['slideOutUp', 'fadeOut'],
    activator: '#closeModal'
  });

  return <div>...</div>;
}
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

Email: hnorouzi@example.com

Made with ❤️ by Hamidreza Norouzi
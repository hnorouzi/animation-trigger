import { useEffect } from 'react';
import { AnimationEngine } from '../core/animationEngine';

export function useAnimation(config: {
  elements: string[];
  animations: string[];
  activator: string;
}) {
  useEffect(() => {
    const trigger = new (class {
      constructor() {
        if (config.elements.length !== config.animations.length) {
          console.error('❌ تعداد المان‌ها باید با تعداد انیمیشن‌ها برابر باشد!');
          return;
        }
        
        AnimationEngine.init();
        
        const button = document.querySelector(config.activator);
        if (!button) return;
        
        const handler = () => {
          config.elements.forEach((selector, index) => {
            const elements = document.querySelectorAll(selector);
            const animationType = config.animations[index];
            elements.forEach(el => {
              AnimationEngine.animate(el, animationType, { removeAfter: true });
            });
          });
        };
        
        button.addEventListener('click', handler);
        
        return () => button.removeEventListener('click', handler);
      }
    })();
  }, []);
}
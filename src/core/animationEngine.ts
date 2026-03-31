import { animationStyles } from '../animations/presets';

export class AnimationEngine {
  static init() {
    if (document.querySelector('#animation-trigger-styles')) return;
    
    const style = document.createElement('style');
    style.id = 'animation-trigger-styles';
    style.textContent = animationStyles;
    document.head.appendChild(style);
  }
  
  static animate(element: Element, animationType: string, options?: {
    duration?: number;
    removeAfter?: boolean;
    onComplete?: () => void;
  }) {
    const className = `at-${animationType}`;
    element.classList.add(className);
    
    if (options?.duration) {
      element.setAttribute('style', `animation-duration: ${options.duration}ms`);
    }
    
    const handleEnd = () => {
      element.classList.remove(className);
      element.removeAttribute('style');
      
      if (options?.removeAfter && element.parentNode) {
        element.remove();
      }
      
      options?.onComplete?.();
      element.removeEventListener('animationend', handleEnd);
    };
    
    element.addEventListener('animationend', handleEnd, { once: true });
  }
}
import { animationStyles } from '../animations/presets';

export type AnimationDirection = 'enter' | 'exit';

export interface AnimateOptions {
  duration?: number;
  direction?: AnimationDirection;
  removeAfter?: boolean;
  onComplete?: () => void;
}

export class AnimationEngine {
  static init() {
    if (document.querySelector('#animation-trigger-styles')) return;
    
    const style = document.createElement('style');
    style.id = 'animation-trigger-styles';
    style.textContent = animationStyles;
    document.head.appendChild(style);
  }
  
  static animate(
    element: Element, 
    animationType: string, 
    options: AnimateOptions = {}
  ) {
    const className = `at-${animationType}`;
    const duration = options.duration || 500;
    
    // تنظیم مدت زمان انیمیشن
    element.setAttribute('style', `animation-duration: ${duration}ms`);
    element.classList.add(className);
    
    const handleEnd = () => {
      element.classList.remove(className);
      element.removeAttribute('style');
      
      // فقط برای انیمیشن‌های خروج، المان رو حذف کن
      if (options.removeAfter && options.direction === 'exit' && element.parentNode) {
        element.remove();
      }
      
      // اجرای callback
      if (options.onComplete) {
        options.onComplete();
      }
      
      element.removeEventListener('animationend', handleEnd);
    };
    
    element.addEventListener('animationend', handleEnd, { once: true });
    
    // برگردوندن تابعی برای لغو انیمیشن
    return () => {
      element.removeEventListener('animationend', handleEnd);
      element.classList.remove(className);
      element.removeAttribute('style');
    };
  }
  
  // متد جدید برای انیمیشن ورود
  static enter(element: Element, animationType: string, options?: Omit<AnimateOptions, 'direction' | 'removeAfter'>) {
    return this.animate(element, animationType, {
      ...options,
      direction: 'enter',
      removeAfter: false
    });
  }
  
  // متد جدید برای انیمیشن خروج
  static exit(element: Element, animationType: string, options?: Omit<AnimateOptions, 'direction'>) {
    return this.animate(element, animationType, {
      ...options,
      direction: 'exit',
      removeAfter: options?.removeAfter ?? true
    });
  }
}

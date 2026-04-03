import { AnimationEngine } from '../core/animationEngine.js';

export interface AnimationItem {
  element: string;           // selector المان
  animation: string;         // اسم انیمیشن (slideOutDown, slideInUp, ...)
  startDelay?: number;       // تأخیر در شروع (میلی‌ثانیه)
  duration?: number;         // مدت زمان انیمیشن (میلی‌ثانیه)
  initialVisible?: boolean;  // true = اول نمایش داده بشه, false = اول مخفی باشه
}

export interface AnimationConfig {
  items: AnimationItem[];      // لیست انیمیشن‌ها
  activator: string;           // دکمه فعال‌کننده
  onComplete?: () => void;     // بعد از اتمام همه
}

export class AnimationTrigger {
  private isAnimating: boolean = false;
  private originalDisplays: Map<string, string> = new Map();
  
  constructor(config: AnimationConfig) {
    AnimationEngine.init();
    
    const button = document.querySelector(config.activator);
    if (!button) {
      console.error(`❌ دکمه "${config.activator}" پیدا نشد!`);
      return;
    }
    
    // تنظیم وضعیت اولیه المان‌ها
    config.items.forEach((item) => {
      const element = document.querySelector(item.element) as HTMLElement;
      if (element) {
        // ذخیره display اصلی
        const computedStyle = window.getComputedStyle(element);
        this.originalDisplays.set(item.element, computedStyle.display);
        
        // تعیین وضعیت اولیه: اولویت با initialVisible، در غیر این صورت بر اساس نوع انیمیشن
        let shouldBeVisible: boolean;
        
        if (item.initialVisible !== undefined) {
          // اگر کاربر مشخص کرده، از تنظیمات کاربر استفاده کن
          shouldBeVisible = item.initialVisible;
          console.log(`🎯 "${item.element}" - وضعیت اولیه از تنظیمات: ${shouldBeVisible ? 'نمایش' : 'مخفی'}`);
        } else {
          // پیش‌فرض: اگر انیمیشن خروج داره نمایش بده، اگر ورود داره مخفی کن
          const isExit = item.animation.toLowerCase().includes('out');
          shouldBeVisible = isExit;
          console.log(`🎯 "${item.element}" - وضعیت اولیه خودکار: ${shouldBeVisible ? 'نمایش' : 'مخفی'} (بر اساس ${isExit ? 'خروج' : 'ورود'})`);
        }
        
        // اعمال وضعیت اولیه
        if (shouldBeVisible) {
          element.style.display = this.originalDisplays.get(item.element) || 'block';
        } else {
          element.style.display = 'none';
        }
      }
    });
    
    button.addEventListener('click', () => {
      if (this.isAnimating) {
        console.log('⏳ انیمیشن در حال اجراست...');
        return;
      }
      
      this.isAnimating = true;
      this.runAnimationsSequentially(config.items, config.onComplete);
    });
    
    console.log(`✅ AnimationTrigger ready! ${config.items.length} animation(s)`);
  }
  
  private runAnimationsSequentially(items: AnimationItem[], onComplete?: () => void) {
    let currentIndex = 0;
    
    const runNext = () => {
      if (currentIndex >= items.length) {
        this.isAnimating = false;
        if (onComplete) onComplete();
        return;
      }
      
      const item = items[currentIndex];
      const element = document.querySelector(item.element) as HTMLElement;
      
      if (!element) {
        console.warn(`⚠️ عنصر "${item.element}" پیدا نشد!`);
        currentIndex++;
        runNext();
        return;
      }
      
      const isExit = item.animation.toLowerCase().includes('out');
      const isEnter = item.animation.toLowerCase().includes('in');
      const duration = item.duration || 500;
      const startDelay = item.startDelay || 0;
      
      setTimeout(() => {
        if (isEnter) {
          // انیمیشن ورود - اول المان رو نمایش بده
          const originalDisplay = this.originalDisplays.get(item.element) || 'block';
          element.style.display = originalDisplay;
          
          AnimationEngine.enter(element, item.animation, {
            duration: duration,
            onComplete: () => {
              currentIndex++;
              runNext();
            }
          });
        } else if (isExit) {
          // انیمیشن خروج
          AnimationEngine.exit(element, item.animation, {
            duration: duration,
            removeAfter: false,
            onComplete: () => {
              element.style.display = 'none';
              currentIndex++;
              runNext();
            }
          });
        } else {
          console.warn(`⚠️ نوع انیمیشن "${item.animation}" مشخص نیست!`);
          currentIndex++;
          runNext();
        }
      }, startDelay);
    };
    
    runNext();
  }
}

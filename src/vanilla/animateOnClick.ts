import { AnimationEngine } from '../core/animationEngine';

export class AnimationTrigger {
  constructor(config: {
    elements: string[];    // ['.box1', '.box2', '.box3']
    animations: string[];  // ['slideOutLeft', 'fadeOut', 'rotateOut']
    activator: string;     // '#deleteButton'
  }) {
    // چک کردن تعداد
    if (config.elements.length !== config.animations.length) {
      console.error('❌ تعداد المان‌ها باید با تعداد انیمیشن‌ها برابر باشد!');
      return;
    }
    
    // اضافه کردن استایل‌ها
    AnimationEngine.init();
    
    // پیدا کردن دکمه
    const button = document.querySelector(config.activator);
    if (!button) {
      console.error(`❌ دکمه "${config.activator}" پیدا نشد!`);
      return;
    }
    
    // اضافه کردن رویداد کلیک
    button.addEventListener('click', () => {
      config.elements.forEach((selector, index) => {
        const elements = document.querySelectorAll(selector);
        const animationType = config.animations[index];
        
        elements.forEach(element => {
          AnimationEngine.animate(element, animationType, {
            removeAfter: true
          });
        });
      });
    });
    
    console.log('✅ AnimationTrigger ready!');
    console.log(`📋 ${config.elements.length} عنصر با انیمیشن‌های مختلف`);
  }
}

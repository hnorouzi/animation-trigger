// انیمیشن‌های خروج (Exit)
export const exitAnimations = {
  slideOutLeft: 'at-slideOutLeft',
  slideOutRight: 'at-slideOutRight',
  slideOutUp: 'at-slideOutUp',
  slideOutDown: 'at-slideOutDown',
  fadeOut: 'at-fadeOut',
  zoomOut: 'at-zoomOut',
  rotateOut: 'at-rotateOut',
} as const;

// انیمیشن‌های ورود (Enter)
export const enterAnimations = {
  slideInLeft: 'at-slideInLeft',
  slideInRight: 'at-slideInRight',
  slideInUp: 'at-slideInUp',
  slideInDown: 'at-slideInDown',
  fadeIn: 'at-fadeIn',
  zoomIn: 'at-zoomIn',
  rotateIn: 'at-rotateIn',
  bounceIn: 'at-bounceIn',
} as const;

export type ExitAnimationType = keyof typeof exitAnimations;
export type EnterAnimationType = keyof typeof enterAnimations;

// استایل‌های کامل (خروج + ورود)
export const animationStyles = `
  /* ========== EXIT ANIMATIONS ========== */
  @keyframes at-slideOutLeft {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(-100%); opacity: 0; }
  }
  @keyframes at-slideOutRight {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(100%); opacity: 0; }
  }
  @keyframes at-slideOutUp {
    from { transform: translateY(0); opacity: 1; }
    to { transform: translateY(-100%); opacity: 0; }
  }
  @keyframes at-slideOutDown {
    from { transform: translateY(0); opacity: 1; }
    to { transform: translateY(100%); opacity: 0; }
  }
  @keyframes at-fadeOut {
    from { opacity: 1; }
    to { opacity: 0; }
  }
  @keyframes at-zoomOut {
    from { transform: scale(1); opacity: 1; }
    to { transform: scale(0); opacity: 0; }
  }
  @keyframes at-rotateOut {
    from { transform: rotate(0deg); opacity: 1; }
    to { transform: rotate(360deg); opacity: 0; }
  }
  
  /* ========== ENTER ANIMATIONS ========== */
  @keyframes at-slideInLeft {
    from { transform: translateX(-100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  @keyframes at-slideInRight {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  @keyframes at-slideInUp {
    from { transform: translateY(100%); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
  @keyframes at-slideInDown {
    from { transform: translateY(-100%); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
  @keyframes at-fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes at-zoomIn {
    from { transform: scale(0); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
  }
  @keyframes at-rotateIn {
    from { transform: rotate(-180deg); opacity: 0; }
    to { transform: rotate(0deg); opacity: 1; }
  }
  @keyframes at-bounceIn {
    0% { transform: scale(0); opacity: 0; }
    50% { transform: scale(1.1); }
    70% { transform: scale(0.95); }
    100% { transform: scale(1); opacity: 1; }
  }
  
  /* ========== EXIT CLASSES ========== */
  .at-slideOutLeft { animation: at-slideOutLeft 0.5s forwards !important; }
  .at-slideOutRight { animation: at-slideOutRight 0.5s forwards !important; }
  .at-slideOutUp { animation: at-slideOutUp 0.5s forwards !important; }
  .at-slideOutDown { animation: at-slideOutDown 0.5s forwards !important; }
  .at-fadeOut { animation: at-fadeOut 0.5s forwards !important; }
  .at-zoomOut { animation: at-zoomOut 0.5s forwards !important; }
  .at-rotateOut { animation: at-rotateOut 0.5s forwards !important; }
  
  /* ========== ENTER CLASSES ========== */
  .at-slideInLeft { animation: at-slideInLeft 0.5s forwards !important; }
  .at-slideInRight { animation: at-slideInRight 0.5s forwards !important; }
  .at-slideInUp { animation: at-slideInUp 0.5s forwards !important; }
  .at-slideInDown { animation: at-slideInDown 0.5s forwards !important; }
  .at-fadeIn { animation: at-fadeIn 0.5s forwards !important; }
  .at-zoomIn { animation: at-zoomIn 0.5s forwards !important; }
  .at-rotateIn { animation: at-rotateIn 0.5s forwards !important; }
  .at-bounceIn { animation: at-bounceIn 0.6s forwards !important; }
`;
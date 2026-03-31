export const animationPresets = {
  slideOutLeft: 'at-slideOutLeft',
  slideOutRight: 'at-slideOutRight',
  slideOutUp: 'at-slideOutUp',
  slideOutDown: 'at-slideOutDown',
  fadeOut: 'at-fadeOut',
  zoomOut: 'at-zoomOut',
  rotateOut: 'at-rotateOut',
} as const;

export type AnimationType = keyof typeof animationPresets;

export const animationStyles = `
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
  .at-slideOutLeft { animation: at-slideOutLeft 0.5s forwards !important; }
  .at-slideOutRight { animation: at-slideOutRight 0.5s forwards !important; }
  .at-slideOutUp { animation: at-slideOutUp 0.5s forwards !important; }
  .at-slideOutDown { animation: at-slideOutDown 0.5s forwards !important; }
  .at-fadeOut { animation: at-fadeOut 0.5s forwards !important; }
  .at-zoomOut { animation: at-zoomOut 0.5s forwards !important; }
  .at-rotateOut { animation: at-rotateOut 0.5s forwards !important; }
`;
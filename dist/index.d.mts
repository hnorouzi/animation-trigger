declare class AnimationEngine {
    static init(): void;
    static animate(element: Element, animationType: string, options?: {
        duration?: number;
        removeAfter?: boolean;
        onComplete?: () => void;
    }): void;
}

declare const animationPresets: {
    readonly slideOutLeft: "at-slideOutLeft";
    readonly slideOutRight: "at-slideOutRight";
    readonly slideOutUp: "at-slideOutUp";
    readonly slideOutDown: "at-slideOutDown";
    readonly fadeOut: "at-fadeOut";
    readonly zoomOut: "at-zoomOut";
    readonly rotateOut: "at-rotateOut";
};
type AnimationType = keyof typeof animationPresets;
declare const animationStyles = "\n  @keyframes at-slideOutLeft {\n    from { transform: translateX(0); opacity: 1; }\n    to { transform: translateX(-100%); opacity: 0; }\n  }\n  @keyframes at-slideOutRight {\n    from { transform: translateX(0); opacity: 1; }\n    to { transform: translateX(100%); opacity: 0; }\n  }\n  @keyframes at-slideOutUp {\n    from { transform: translateY(0); opacity: 1; }\n    to { transform: translateY(-100%); opacity: 0; }\n  }\n  @keyframes at-slideOutDown {\n    from { transform: translateY(0); opacity: 1; }\n    to { transform: translateY(100%); opacity: 0; }\n  }\n  @keyframes at-fadeOut {\n    from { opacity: 1; }\n    to { opacity: 0; }\n  }\n  @keyframes at-zoomOut {\n    from { transform: scale(1); opacity: 1; }\n    to { transform: scale(0); opacity: 0; }\n  }\n  @keyframes at-rotateOut {\n    from { transform: rotate(0deg); opacity: 1; }\n    to { transform: rotate(360deg); opacity: 0; }\n  }\n  .at-slideOutLeft { animation: at-slideOutLeft 0.5s forwards !important; }\n  .at-slideOutRight { animation: at-slideOutRight 0.5s forwards !important; }\n  .at-slideOutUp { animation: at-slideOutUp 0.5s forwards !important; }\n  .at-slideOutDown { animation: at-slideOutDown 0.5s forwards !important; }\n  .at-fadeOut { animation: at-fadeOut 0.5s forwards !important; }\n  .at-zoomOut { animation: at-zoomOut 0.5s forwards !important; }\n  .at-rotateOut { animation: at-rotateOut 0.5s forwards !important; }\n";

declare class AnimationTrigger {
    constructor(config: {
        elements: string[];
        animations: string[];
        activator: string;
    });
}

export { AnimationEngine, AnimationTrigger, type AnimationType, animationPresets, animationStyles };

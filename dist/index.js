var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  AnimationEngine: () => AnimationEngine,
  AnimationTrigger: () => AnimationTrigger,
  animationPresets: () => animationPresets,
  animationStyles: () => animationStyles
});
module.exports = __toCommonJS(index_exports);

// src/animations/presets.ts
var animationPresets = {
  slideOutLeft: "at-slideOutLeft",
  slideOutRight: "at-slideOutRight",
  slideOutUp: "at-slideOutUp",
  slideOutDown: "at-slideOutDown",
  fadeOut: "at-fadeOut",
  zoomOut: "at-zoomOut",
  rotateOut: "at-rotateOut"
};
var animationStyles = `
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

// src/core/animationEngine.ts
var AnimationEngine = class {
  static init() {
    if (document.querySelector("#animation-trigger-styles")) return;
    const style = document.createElement("style");
    style.id = "animation-trigger-styles";
    style.textContent = animationStyles;
    document.head.appendChild(style);
  }
  static animate(element, animationType, options) {
    const className = `at-${animationType}`;
    element.classList.add(className);
    if (options == null ? void 0 : options.duration) {
      element.setAttribute("style", `animation-duration: ${options.duration}ms`);
    }
    const handleEnd = () => {
      var _a;
      element.classList.remove(className);
      element.removeAttribute("style");
      if ((options == null ? void 0 : options.removeAfter) && element.parentNode) {
        element.remove();
      }
      (_a = options == null ? void 0 : options.onComplete) == null ? void 0 : _a.call(options);
      element.removeEventListener("animationend", handleEnd);
    };
    element.addEventListener("animationend", handleEnd, { once: true });
  }
};

// src/vanilla/animateOnClick.ts
var AnimationTrigger = class {
  constructor(config) {
    if (config.elements.length !== config.animations.length) {
      console.error("\u274C \u062A\u0639\u062F\u0627\u062F \u0627\u0644\u0645\u0627\u0646\u200C\u0647\u0627 \u0628\u0627\u06CC\u062F \u0628\u0627 \u062A\u0639\u062F\u0627\u062F \u0627\u0646\u06CC\u0645\u06CC\u0634\u0646\u200C\u0647\u0627 \u0628\u0631\u0627\u0628\u0631 \u0628\u0627\u0634\u062F!");
      return;
    }
    AnimationEngine.init();
    const button = document.querySelector(config.activator);
    if (!button) {
      console.error(`\u274C \u062F\u06A9\u0645\u0647 "${config.activator}" \u067E\u06CC\u062F\u0627 \u0646\u0634\u062F!`);
      return;
    }
    button.addEventListener("click", () => {
      config.elements.forEach((selector, index) => {
        const elements = document.querySelectorAll(selector);
        const animationType = config.animations[index];
        elements.forEach((element) => {
          AnimationEngine.animate(element, animationType, {
            removeAfter: true
          });
        });
      });
    });
    console.log("\u2705 AnimationTrigger ready!");
    console.log(`\u{1F4CB} ${config.elements.length} \u0639\u0646\u0635\u0631 \u0628\u0627 \u0627\u0646\u06CC\u0645\u06CC\u0634\u0646\u200C\u0647\u0627\u06CC \u0645\u062E\u062A\u0644\u0641`);
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AnimationEngine,
  AnimationTrigger,
  animationPresets,
  animationStyles
});
//# sourceMappingURL=index.js.map
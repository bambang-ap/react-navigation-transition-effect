import { TransitionPreset } from "@react-navigation/stack";
import { TransitionSpec } from "@react-navigation/stack/lib/typescript/src/types";

type CardStyleInterpolator = TransitionPreset["cardStyleInterpolator"];

type NavigatorOptions = {
  cardStyleInterpolator: StackCardStyleInterpolator;
  transitionSpec: {
    open: TransitionSpec;
    close: TransitionSpec;
  };
};

export declare function fromLeft(duration?: number): NavigatorOptions;
export declare function fromTop(duration?: number): NavigatorOptions;
export declare function fromRight(duration?: number): NavigatorOptions;
export declare function fromBottom(duration?: number): NavigatorOptions;
export declare function fadeIn(duration?: number): NavigatorOptions;
export declare function fadeOut(duration?: number): NavigatorOptions;
export declare function zoomIn(duration?: number): NavigatorOptions;
export declare function zoomOut(duration?: number): NavigatorOptions;
export declare function flipY(duration?: number): NavigatorOptions;
export declare function flipX(duration?: number): NavigatorOptions;

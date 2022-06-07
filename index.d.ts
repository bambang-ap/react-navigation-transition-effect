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

declare module 'react-navigation-transition-effect' {

  export function fromLeft(duration?: number): NavigatorOptions;
  export function fromTop(duration?: number): NavigatorOptions;
  export function fromRight(duration?: number): NavigatorOptions;
  export function fromBottom(duration?: number): NavigatorOptions;
  export function fadeIn(duration?: number): NavigatorOptions;
  export function fadeOut(duration?: number): NavigatorOptions;
  export function zoomIn(duration?: number): NavigatorOptions;
  export function zoomOut(duration?: number): NavigatorOptions;
  export function flipY(duration?: number): NavigatorOptions;
  export function flipX(duration?: number): NavigatorOptions;
}
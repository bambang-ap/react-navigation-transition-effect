import { Easing, Platform } from 'react-native';

const DEFAULT_DURATION = 300;

const getDefaultTransitionSpec = (duration) => {
    return {
        config: { duration, easing: Easing.out(Easing.poly(4)) },
        animation: 'timing',
    };
};

export function fromLeft(duration = DEFAULT_DURATION) {
    const transitionSpec = getDefaultTransitionSpec(duration);

    const cardStyleInterpolator = ({ current, layouts }) => {
        const opacity = current?.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0.25, 1],
        });

        const translateX = current?.progress.interpolate({
            inputRange: [0, 1, 2],
            outputRange: [-layouts.screen.width, 0, 0],
        });

        return { cardStyle: { opacity, transform: [{ translateX }] } };
    };

    return {
        cardStyleInterpolator,
        transitionSpec: { open: transitionSpec, close: transitionSpec },
    };
}

export function fromTop(duration = DEFAULT_DURATION) {
    const transitionSpec = getDefaultTransitionSpec(duration);

    const cardStyleInterpolator = ({ current, layouts }) => {
        const opacity = current?.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0.25, 1],
        });

        const translateY = current?.progress.interpolate({
            inputRange: [0, 1, 2],
            outputRange: [-layouts.screen.height, 0, 0],
        });

        return { cardStyle: { opacity, transform: [{ translateY }] } };
    };

    return {
        cardStyleInterpolator,
        transitionSpec: { open: transitionSpec, close: transitionSpec },
    };
}

export function fromRight(duration = DEFAULT_DURATION) {
    const transitionSpec = getDefaultTransitionSpec(duration);

    const cardStyleInterpolator = ({ current, layouts }) => {
        const opacity = current?.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0.25, 1],
        });

        const translateX = current?.progress.interpolate({
            inputRange: [0, 1, 2],
            outputRange: [layouts.screen.width, 0, 0],
        });

        return { cardStyle: { opacity, transform: [{ translateX }] } };
    };

    return {
        cardStyleInterpolator,
        transitionSpec: { open: transitionSpec, close: transitionSpec },
    };
}

export function fromBottom(duration = DEFAULT_DURATION) {
    const transitionSpec = getDefaultTransitionSpec(duration);

    const cardStyleInterpolator = ({ current, layouts }) => {
        const opacity = current?.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0.25, 1],
        });

        const translateY = current?.progress.interpolate({
            inputRange: [0, 1, 2],
            outputRange: [layouts.screen.height, 0, 0],
        });

        return { cardStyle: { opacity, transform: [{ translateY }] } };
    };

    return {
        cardStyleInterpolator,
        transitionSpec: { open: transitionSpec, close: transitionSpec },
    };
}

export function fadeIn(duration = DEFAULT_DURATION) {
    const transitionSpec = getDefaultTransitionSpec(duration);

    const cardStyleInterpolator = ({ current }) => {
        const opacity = current?.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
        });

        return {
            cardStyle: { opacity },
        };
    };

    return {
        cardStyleInterpolator,
        transitionSpec: { open: transitionSpec, close: transitionSpec },
    };
}

export function fadeOut(duration = DEFAULT_DURATION) {
    const transitionSpec = getDefaultTransitionSpec(duration);

    const cardStyleInterpolator = ({ current }) => {
        const opacity = current?.progress.interpolate({
            inputRange: [0, 1, 2],
            outputRange: [0, 1, 0],
        });

        return {
            cardStyle: { opacity },
        };
    };

    return {
        cardStyleInterpolator,
        transitionSpec: { open: transitionSpec, close: transitionSpec },
    };
}

export function zoomIn(duration = DEFAULT_DURATION) {
    const transitionSpec = getDefaultTransitionSpec(duration);

    const cardStyleInterpolator = ({ current }) => {
        const start = Platform.OS !== 'ios' ? 0.005 : 0;

        const scale = current?.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [start, 1],
        });

        return { cardStyle: { transform: [{ scale }] } };
    };

    return {
        cardStyleInterpolator,
        transitionSpec: { open: transitionSpec, close: transitionSpec },
    };
}

export function zoomOut(duration = DEFAULT_DURATION) {
    const transitionSpec = getDefaultTransitionSpec(duration);

    const cardStyleInterpolator = ({ current }) => {
        const scale = current?.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [10, 1],
        });

        return { cardStyle: { transform: [{ scale }] } };
    };

    return {
        cardStyleInterpolator,
        transitionSpec: { open: transitionSpec, close: transitionSpec },
    };
}

export function flipY(duration = DEFAULT_DURATION) {
    const transitionSpec = getDefaultTransitionSpec(duration);

    const cardStyleInterpolator = ({ current }) => {
        const opacity = current?.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0.25, 1],
        });

        const rotateY = current?.progress.interpolate({
            inputRange: [0, 1],
            outputRange: ['180deg', '0deg'],
        });

        return { cardStyle: { opacity, transform: [{ rotateY }] } };
    };

    return {
        cardStyleInterpolator,
        transitionSpec: { open: transitionSpec, close: transitionSpec },
    };
}

export function flipX(duration = DEFAULT_DURATION) {
    const transitionSpec = getDefaultTransitionSpec(duration);

    const cardStyleInterpolator = ({ current }) => {
        const opacity = current?.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0.25, 1],
        });

        const rotateX = current?.progress.interpolate({
            inputRange: [0, 1],
            outputRange: ['180deg', '0deg'],
        });

        return { cardStyle: { opacity, transform: [{ rotateX }] } };
    };

    return {
        cardStyleInterpolator,
        transitionSpec: { open: transitionSpec, close: transitionSpec },
    };
}

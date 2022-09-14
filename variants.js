export const staggerTextContainer = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
        },
    },
};


export const staggerContainer = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.06,
            delayChildren: 0.2,
            type: 'tween',
        },
    },
};



export const fadeInDown = {
    initial: {
        y: -70,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: { type: 'tween', duration: 1.1 },
    },
};

export const fadeInUp = {
    initial: {
        y: 70,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: { type: 'tween', duration: 1.1 },
    },
};

export const fadeInLeft = {
    initial: {
        x: 70,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: { type: 'tween', duration: 1.1 },
    },
};

export const fadeInRight = {
    initial: {
        x: -70,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: { type: 'tween', duration: 1.1 },
    },
};
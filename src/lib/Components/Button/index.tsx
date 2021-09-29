import React from 'react';

type ButtonProps = {
    background: React.CSSProperties['background'];
    color: React.CSSProperties['color'];
    flexDirection: React.CSSProperties['flexDirection'];
    alignItems: React.CSSProperties['alignItems'];
    justifyContent: React.CSSProperties['justifyContent'];
    fillSpace: React.CSSProperties['flex'];
    width: React.CSSProperties['width'];
    height: React.CSSProperties['height'];
    padding: React.CSSProperties['padding'];
    margin: React.CSSProperties['margin'];
    marginTop: React.CSSProperties['marginTop'];
    marginLeft: React.CSSProperties['marginLeft'];
    marginBottom: React.CSSProperties['marginBottom'];
    marginRight: React.CSSProperties['marginRight'];
    shadow: React.CSSProperties['boxShadow'];
    radius: React.CSSProperties['borderRadius'];
    display: React.CSSProperties['display'];
    overflow: React.CSSProperties['overflow'];
    position: React.CSSProperties['position'];
    text: string;
};

const defaultProps = {
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fillSpace: 'no',
    padding: '0 0 0 0',
    margin: '0 0 0 0',
    background: { r: 255, g: 255, b: 255, a: 1 },
    color: { r: 0, g: 0, b: 0, a: 1 },
    shadow: 0,
    radius: 0,
    width: 'auto',
    height: 'auto',
    display: 'block',
    overflow: 'auto',
    position: 'static' as 'static',
    text: 'Click me!',
};

const Button = (props: Partial<ButtonProps>) => {
    let updatedProps = {
        ...defaultProps,
        ...props,
    };

    const {
        flexDirection,
        alignItems,
        justifyContent,
        fillSpace,
        background,
        color,
        padding,
        margin,
        shadow,
        radius,
        width, height, display, overflow, position, text
    } = updatedProps;


    return (
        <button

            style={{
                justifyContent,
                width, height,
                flexDirection,
                alignItems,
                overflow,
                background: `rgba(${Object.values(background)})`,
                color: `rgba(${Object.values(color)})`,
                padding, margin, boxShadow:
                    shadow === 0
                        ? 'none'
                        : `0px 3px 100px ${shadow}px rgba(0, 0, 0, 0.13)`,
                borderRadius: `${radius}px`,
                flex: fillSpace === 'yes' ? 1 : 'unset',
                display, position
            }}
        >

            {text}
        </button>
    );
};

export default Button;


import classNames from 'classnames';
import styles from './Image.module.scss';
import { forwardRef, useState } from 'react';
import images from '~/assets/images';

//fallback: customFallback = images.noImage --> when Image element has prop fallback and is undefined, it will be set to customFallback. But if customFallback is still undefined, it will be set to images.noImage.

function Image({ src, alt, className, fallback: customFallback = images.noImage,  ...props }, ref) {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(customFallback);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)} // className is used for future when you want to push more class in this image
            src={fallback || src}
            alt={alt}
            ref={ref}
            {...props}
            onError={handleError}
        />
    );
}

export default forwardRef(Image);

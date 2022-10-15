
import {ImgHTMLAttributes} from 'react'
import styles from './Avatar.module.css'

interface AvatarProps extends ImgHTMLAttributes<>{
    hasborder?: boolean;
    src: string;
    alt?: string;
}


export function Avatar({hasborder = true, src, alt}: AvatarProps){
    return(
        <img className={hasborder ? styles.avatarWithBorder : styles.avatar} 
        src={src}
        alt={alt}
        />
    )
}
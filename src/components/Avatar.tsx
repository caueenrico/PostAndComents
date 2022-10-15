
import {ImgHTMLAttributes} from 'react'
import styles from './Avatar.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{
    hasborder?: boolean;

}


export function Avatar({hasborder = true, ...props}: AvatarProps){
    return(
        <img className={hasborder ? styles.avatarWithBorder : styles.avatar} 
        {...props}
        />
    )
}
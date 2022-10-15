import styles from './Avatar.module.css'

interface AvatarProps{
    hasborder: boolean;
    src: string;
    alt: string;
}


export function Avatar({hasborder = true, src}: AvatarProps){
    return(
        <img className={hasborder ? styles.avatarWithBorder : styles.avatar} 
        src={src}
        />
    )
}
import styles from './Avatar.module.css'

interface AvatarProps{
    hasborder: boolean;
    src: string;
    alt:
}


export function Avatar({hasborder = true, src}){
    return(
        <img className={hasborder ? styles.avatarWithBorder : styles.avatar} 
        src={src}
        />
    )
}
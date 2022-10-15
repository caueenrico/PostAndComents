import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

interface CommentProps {
    content: string;
    deleteComment: (comment: string) => void;
}

export function Comment({ content, deleteComment }: CommentProps) {

    function handleDeleteCommment() {
        deleteComment(content)
    }

    const [likeCount, setLikeCount] = useState(0);

    function handleLikeComment() {
        setLikeCount(likeCount + 1)
    }

    return (
        <div className={styles.comment}>
            <Avatar
                hasborder={false}
                src="https://github.com/caueenrico.png"
                alt='foto do perfil'
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>

                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Caue Enrico</strong>
                            <time title='11 de maio às 08:13' dateTime='2022-05-11 08:13:00'>Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteCommment} title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>

            </div>



        </div>
    )
}
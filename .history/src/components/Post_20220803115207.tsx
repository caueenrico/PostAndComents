import { format , formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react'

import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'


interface Author{
    name: string,
    role: string,
    avatarUrl: string
}


export function Post( {author, publishedAt, content}) {

    // para que a pagina seja atualizada, preciso utilizar o useState
    //utilizando a desestruturação, coloco primeiro a variavel dentro do array, e depois uma funçao do proprio useState
    const [comments, setComments] = useState([ 
        'top mano, ja estamos entrando em contato para sua contratação',
    ])

    const [newCommentText, setNewCommentText] = useState('')
    

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'",{
        locale: ptBR,
    })

    const publisheddateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    //Funçao para adicionar novo comentario
    function handleCreateNewComment(){
        //evita o envio para uma outra pagina diferente, e ajudando no conceito do SPA
        event.preventDefault() 

        //utilizando os stratche "..." eu adiciono tudo que já estava dentro do array
        setComments([...comments, newCommentText])

        setNewCommentText('')

    }

    function handleNewCommentChange (){
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }

    function handleNewCommentInvalid(){
        event.target.setCustomValidity('Esse campo é obrigatório')
    }
    
    function deleteComment(commentToDelete){
        const commentsWhithoutDeleteone = comments.filter(comment => {
            return comment !== commentToDelete
        })

        setComments(commentsWhithoutDeleteone)
    }
    

  


    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    
                    <Avatar src={author.avatarUrl}/>
                   
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>

                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publisheddateRelativeToNow}</time>

            </header>

            <div className={styles.content}>
                
                {content.map(line => {
                    if(line.type === 'paragraph'){
                        return <p  key={line.content}>{line.content}</p>
                    } else if (line.type === 'link') {
                        return <p key={line.content}> <a href="#">{line.content}</a> </p>
                    }
                })}
            
            </div>

            <form onSubmit={handleCreateNewComment}  className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    name='comment'
                    placeholder='deixe um comentario'
                    value={newCommentText}
                    onChange = {handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <footer>
                    <button type='submit' disabled={newCommentText.length === 0}>
                        Publicar
                    </button>
                </footer>

            </form>

            <div className={styles.commentList}>

                {comments.map(comments =>{
                    return (
                        <Comment 
                            key={comments} 
                            content={comments}
                            deleteComment = {deleteComment}
                        />)
                })}

               
            </div>

        </article>
    )
}
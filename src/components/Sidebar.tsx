import style from './Sidebar.module.css'

import {PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'

export function Sidebar(){
    return(
        <aside className={style.sidebar}>
            <img 
            className={style.cover}
            src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" />

            

            <div className={style.profile}>

                <Avatar src="https://avatars.githubusercontent.com/u/77198706?v=4" />
                {/* <img className={style.avatar} src="https://avatars.githubusercontent.com/u/77198706?v=4" alt="" /> */}

                <strong>Caue Enrico</strong>
                <span>Web FullStack</span>

            </div>

            <footer>
                <a href="#">
                    <PencilLine  size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}
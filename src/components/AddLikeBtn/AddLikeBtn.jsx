import { useEffect, useState } from "react"
import api from "../../utils/api.js"

//вынесено в отдельный файл чтобы не рендерился весь проект
export default function AddLikeBtn({likes, myId, cardId}) {
    const [isLike, setIsLike] = useState(false)
    const [count, setCount] = useState(likes.length)

    useEffect(() => {
        setIsLike(likes.some(element=> myId === element._id))  
    }, [likes, myId])

    function handleCardLike() {
        if (isLike) {
            api.deleteLike(cardId)
            .then (res => {
                setIsLike(false)
                setCount(res.likes.length)
            })
            .catch((err) => console.error(`Невозможно убрать лайк ${err}`))
        } else {
            api.addLike(cardId)
            .then (res => {
                setIsLike(true)
                setCount(res.likes.length)
            })
            .catch((err) => console.error(`Невозможно поставить лайк ${err}`))
        }

    }
    return (
        <>
            <button onClick={handleCardLike} className={`groups__like ${isLike ? 'groups__like_active' : ''}`} type="button" />
            <p className="groups__like-counter">{count}</p>
        </>
    )
}
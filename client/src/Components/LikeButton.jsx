import React, {useState} from 'react';


const LikeButton = (props) => {
    const [isDisabled,setIsDisabled] = useState(false)
    const [likes,setLikes] = useState(0)

    const onClickHandler = (e) => {
        e.preventDefault();
        setLikes(likes + 1);
        console.log(props.likes)
        setIsDisabled(true);
        
        
    }
    return(
        <button disabled={isDisabled} onClick={ e => onClickHandler(e)}>Likes: {likes} </button>
    )
}

export default LikeButton;
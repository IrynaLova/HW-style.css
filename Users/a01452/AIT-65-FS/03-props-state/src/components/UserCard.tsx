import * as React from "react";
import {useState} from "react";

interface UserCardProps {
    userName: string;
}

const UserCard: React.FC <UserCardProps> = ({userName}) => {
    const [likes, setLikes] = useState(0);
    return (
        <div>
            <h3>User: {userName}</h3>
            <p>Likes: {likes}</p>
            <button onClick={() => setLikes(+ 1)}>Like</button>
        </div>
    );
};

export default UserCard;
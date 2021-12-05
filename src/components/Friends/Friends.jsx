import Friend from "./Friend/Friend";


const Friends = ({state}) => {
    const friends = state.friends.map(f => <Friend name={f.name} id={f.id} src={f.img}/>)
    return (
        <ul>{friends}</ul>
    )

}

export default Friends;

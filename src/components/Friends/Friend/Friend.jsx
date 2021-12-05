import s from './Friend.module.css'


const Friend = ({name, id, src}) => {
    return (
        <li className={s.list} key={id}>
            <p>{name}</p>
        <img src={src} className={s.image}/>
        </li>
    )

}
export default Friend;

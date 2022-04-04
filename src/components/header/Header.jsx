
import css from "./Header.module.css"

const Header = (props) => {
    return (
        <div className={css.wrapper}>
            Header ({props.count})
        </div>
    );
}

export default Header;

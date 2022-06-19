import style from './NavigationItem.module.css';

const NavigationItem = ({
  children
}) => {
  return (
    <li className="listItem">
      <a href="#" className={style.navListItem}>{children}</a>
    </li>
  )
}

export default NavigationItem;
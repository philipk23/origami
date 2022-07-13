import style from './NavigationItem.module.css';

const NavigationItem = ({
  children
}) => {
  return (
    <li className="listItem">
      <span className={style.navListItem}>{children}</span>
    </li>
  )
}

export default NavigationItem;
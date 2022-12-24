import Badge from './Badge';
import styles from './ListItem.module.css';
import ListItemLayout from './ListItemLayout.js';

export default function ListItem({ checked, onChangCheckBox, onClickTitle, badges }) {
    return (
        <ListItemLayout>
            <div>
                <div role="button" onClick={onClickTitle} className={styles.title}>
                    Issue Example
                    {badges.map((badgeProps, idx) => (<Badge key={idx} {...badgeProps} />))}
                </div>
                <div className={styles.description}>#Description</div>
            </div>
        </ListItemLayout>
    )
}
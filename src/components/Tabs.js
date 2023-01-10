import styles from './Tabs.module.css';
import cx from 'clsx';
import { Link, useLocation } from 'react-router-dom';

const TabList = [
    { name: 'Code', pathname: '/code' },
    { name: 'Issues', pathname: '/Issue' },
    { name: 'pull requests', pathname: '/pulls' },
    { name: 'Actions', pathname: '/actions' },
    { name: 'Project', pathname: '/Projects' },
    { name: 'Security', pathname: '/Security' },
];

export default function Taps() {
    const { pathname } = useLocation();
    return (
        <ul className={styles.tapList}>
            {TabList.map((tap, idx) => (
                <Tap
                    key={`${idx}`}
                    item={tap}
                    selected={(pathname === '/' ? 'issue' : pathname) === tap.pathname}
                />
            ))}
        </ul>
    );
}

function Tap({ item, number, selected }) {
    return (
        <li>
            <Link to={item.pathname} className={styles.link}>
                <button className={cx(styles.tap, { [styles.selected]: selected })}>
                    <span>{item.name}</span>
                    {number && <div className={styles.circle}>{number}</div>}
                </button>
            </Link>
        </li>
    );
}

import styles from './Footer.module.css'

const URL_PREFIX = 'https://docs.github.com/en/site-policy';

const footerItems = [
    {
        title: 'Trems',
        link: `${URL_PREFIX}/github-terms/github-terms-of-service`
    },
    {
        title: 'Privacy',
        link: `${URL_PREFIX}/github-terms/github-terms-of-service`
    }
]

export default function Footer() {
    return (
        <ul className={styles.footer}>
            {footerItems.map(({ title, link }) => (
                <li className={styles.item} key={title}>
                    <a className={styles.link} href={link}>
                        {title}
                    </a>
                </li>
            ))}
        </ul>
    )
}

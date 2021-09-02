import Link from 'next/link'
import styles from '../../styles/Home.module.css'

const Sessions = ({ sessions }) => {
    if (!sessions || !sessions.length) {
        return (
            <p>No Sessions</p>
        );
    }

    return (
        <div className={styles.container}>
            <p>Got {sessions.length} Sessions:</p>
            <ul>
                {sessions.map(session => (
                    <li key={session.slug}>
                        <Link as={`/sessions/${session.slug}`} href="/sessions/[slug]">
                            <a>“{session.title}”</a>
                        </Link>
                        by {session.speaker.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export async function getStaticProps(context) {
    const res = await fetch(`https://ffconf.org/api/event/2018`);
    const sessions = await res.json();

    if (!sessions) {
        return {
            notFound: true,
        }
        // return {
        //     redirect: {
        //         destination: '/',
        //         permanent: false,
        //     },
        // };
    }

    return {
        props: {
            sessions,
        }
    };
};

export default Sessions;
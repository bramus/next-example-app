// import { useRouter } from 'next/router';

const SessionDetail = ({ session }) => {
    // const router = useRouter();
    // const { slug } = router.query;

    return (
        <>
            <h1>{session.title}</h1>
            <p>{session.description}</p>
            <p>By {session.speaker.name}</p>
        </>
    )
};

export default SessionDetail;
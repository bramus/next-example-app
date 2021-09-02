const Session = ({ session }) => {
    return (
        <>
            <h1>{ session.title }</h1>
            <p>{ session.description }</p>
            <p>By {session.speaker.name }</p>
        </>
    )
};

export async function getStaticProps({ params, preview = false, previewData }) {
    const res = await fetch(`https://ffconf.org/api/session/${params.slug}`);
    const session = await res.json();

    return {
        props: {
            preview,
            session,
        },
    };
}

export async function getStaticPaths() {
    // Get list of sessions here, so that we can prebuild the pages
    const res = await fetch(`https://ffconf.org/api/event/2018`);
    const sessions = await res.json();

    return {
        paths: sessions ? sessions.map(session => `/sessions/${session.slug}`) : [],
        fallback: true, // <-- Get on the fly if not prebuilt
    }
}

export default Session;
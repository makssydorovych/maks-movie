import React from 'react';
import { NextPageContext } from 'next';
import { getSession } from 'next-auth/react';



export async function getServerSideProps(context: NextPageContext) {
    const session = await getSession(context);

    if (!session) {
        return {
            redirect: {
                destination: '/auth',
                permanent: false,
            }
        }
    }

    return {
        props: {}
    }
}

const Home = () => {
    const { data: movies = [] } = useMovieList();
    const { data: favorites = [] } = useFavorites();
    const {isOpen, closeModal} = useInfoModalStore();

    return (
        <>
            <InfoModal visible={isOpen} onClose={closeModal} />
            <Navbar />
            <Billboard />
            <div className="pb-40">
                <MovieList title="Trending Now" data={movies} />
                <MovieList title="My List" data={favorites} />
            </div>
        </>
    )
}

export default Home;
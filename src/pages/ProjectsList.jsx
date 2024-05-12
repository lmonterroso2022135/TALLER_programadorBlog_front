import { useState } from "react";
import { usePublication } from "../hooks/usePublications";
import '../App.css';
//import { ComentsContainer } from "../components/CommentForm";
import { Link } from "react-router-dom";


export const ProjectsList = () => {
    const { publications, getPublications, isFetching } = usePublication();

    if (!publications) {
        getPublications();
    }

    if (isFetching) {
        return <div className="">cargando ...</div>;
    }

    
    console.log(publications);

    return (
        
        <div className="publications-container">
            {publications ? (
                publications.map((publi) => (
                <CardPost
                    title={publi.title}
                    key={publi.title}
                    category={publi.category}
                    text={publi.text}
                    avatarUrl={publi.avatarUrl}
                    gitHub={publi.gitHub}
                    id={publi._id}
                />
            ))
        ):(
            <div className="">Cargando...</div>
        )}
        </div>
    )
};

function CardPost({ title, text, category, avatarUrl, gitHub, id }) {
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        // setShowMore(!showMore);
    };

    const toggleShowLess = () => {
        // setShowMore(false);
    };

    console.log({ id }, "parent")

    return (
        <div className="publications-all">
            <div className="p-title">{titulo}</div>
            {!showMore && <Link to={`/my-projects/${id}`} id="ver-mas" className="button1" onClick={toggleShowMore}>Ver más</Link>}
        </div>
    );
}

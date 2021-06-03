import { useState, useEffect} from 'react';
import styled from 'styled-components';
function Projects (props) {
    // create state to hold projects
    const [projects, setProjects] = useState(null);
    const Head1 = styled.h1`
    font-size: 30px;
    margin-bottom: 10px;
    `;

    const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0.5em 1em;
    padding: 0.25em 1em;
    cursor:pointer;
    `;

    const BlueButton = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid blue;
    color: blue;
    margin: 0.5em 1em;
    padding: 0.25em 1em;
    cursor:pointer;
    `

    //create function to make api call
    const getProjectsData = async () => {
        //make api call and get response
        const response = await fetch(props.URL + "projects");
        // turn response into javascript object
        const data = await response.json();
        //set the projects state to the data
        setProjects(data);
    }
    //make an initial call for for the data inside a useEffect, so it only happens once on component load
    useEffect(() => getProjectsData(), []);
    //define a function that will return the JSX needed once we get the data
    const loaded = () => {
        return projects.map((project)=> (
            <div>
                <Head1>{project.name}</Head1>
                <img className ="projectImg" src={project.image}/>
                <a href = {project.git}>
                    <BlueButton>Github</BlueButton>
                </a>
                <a href = {project.live}>
                    <Button>Live Site</Button>
                </a>
            </div>
        ));
    };
    return projects ? loaded() : <h1>Loading...</h1>
}

export default Projects
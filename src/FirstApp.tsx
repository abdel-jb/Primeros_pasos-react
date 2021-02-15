import { FunctionComponent } from 'react';
// import PropTypes from 'prop-types'

// FC (FUNTIONAL COMPONENTS)

type FirsAppProps = { greet: string, subtitle?: string};

const FirstApp: FunctionComponent<FirsAppProps> = ( { greet, subtitle }  ):JSX.Element =>{

    // const greet: string = 'Hello World';
    // const greet = { 
    //     name: 'Abdel', 
    //     age: 22
    // };

    return (
        <>
            <h1> { greet } </h1>
            {/* <pre> { JSON.stringify(greet, null, 3) } </pre> */}
            <p> { subtitle } </p>
        </>
    );
}

// FirstApp.propTypes = {
//     greet: PropTypes.string.isRequired
// }

FirstApp.defaultProps = {
    subtitle: 'I am a subtitle'
}

export default FirstApp;
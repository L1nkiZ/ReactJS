import React from 'react';
import Title from '../Title';

const Template : React.FC = () =>
    <div>
        <header>
            <h1>
                <Title
                    title ="Hello World"
                    subtitle='This is the title of the world'
                />
            </h1>
        </header>
        <div>
            Contenu
        </div>
    </div>

export default Template;
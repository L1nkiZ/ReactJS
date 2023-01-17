import React from 'react';

interface Props{
    title : string,
    subtitle?: string
}

const Title : React.FC<Props> = (props) =>
    <>
        <h1>
            {props.title}
        </h1>

        {props.subtitle &&
            <h2>
                {props.subtitle}
            </h2>
        }
    </>

export default Title;

// const Title : React.FC<Props> = ({title, subtitle}) =>
//     <>
//         <h1>
//             {title}
//         </h1>

//         {subtitle &&
//             <h2>
//                 {subtitle}
//             </h2>
//         }
//     </>
const ReactElement={
    type: 'a',//type a tag
    props: {//properties
        href:'https://www.google.com',
        target:'_blank'
    },
    children: "click me to visit google"//text
}

const maincontainer=document.querySelector('#root');

function customrender(ReactElement,maincontainer) {
    const domElement=document.createElement(ReactElement.type);
    domElement.innerHTML=ReactElement.children
    for (const key in ReactElement.props) {
        domElement.setAttribute(key, ReactElement.props[key]);
    }
    maincontainer.appendChild(domElement);
}

customrender(ReactElement,maincontainer)
import { useRef, useState } from "react";
import Button from "./Button"
import Paragraph from "./Paragraph"

function Layout(props) {
    // console.log(props)

    const [isVisible, setIsVisible] = useState(false)
    const refs = useRef([])

    const buttonOnclickHandler = (e) => {
        // console.dir(e.target);
        // console.log(e.target.innerText);

        /////////////////////////////////////////////////////////////////
        // const lookFor = e.target.innerText                          //
        // const elem = document.getElementById(`${lookFor}`);         //
        // elem.scrollIntoView()                                       //
        /////////////////////////////////////////////////////////////////

        refs.current.map((elem, index) => e.target.innerText == elem.id ? refs.current[index].scrollIntoView() : null)

    }

    const scrollupOnclickHandler = (e) => {
        document.documentElement.scrollTop = 0;
    }

    window.onscroll = () => {
        document.documentElement.scrollTop > 20 ? setIsVisible(true) : setIsVisible(false)
    }

    return (
        <div >
            {props.text.map(elem => <Button onClick={buttonOnclickHandler} key={Math.random().toString()}>{elem.title}</Button>)}
            {props.text.map((elem, index) => <Paragraph onClick={buttonOnclickHandler} key={index} ref={(element) => { refs.current[index] = element }}>{elem.title}{elem.paragraph}</Paragraph>)}
            {isVisible ?
                <Button onClick={scrollupOnclickHandler} id="scroll_up">Scroll Up</Button> : ''
            }
        </div>
    )
}

export default Layout
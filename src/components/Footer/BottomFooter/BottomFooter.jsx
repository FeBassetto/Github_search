import React from "react";
import './BottomFooter.css';



const BottomFooter = () => {



    return (
        <div className="bottomFooter">
            <p className="bottomFooter__copyright">
                Copyright 2022 | All rights reserve | Criado por Felipe Bassetto
            </p>
            <div className="bottomFooter__link">
                <a href="https://github.com/FeBassetto">
                    Perfil do desenvolvedor
                </a>
            </div>
        </div>
    )
}

export default BottomFooter
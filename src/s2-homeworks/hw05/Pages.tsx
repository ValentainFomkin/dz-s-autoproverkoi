import React from 'react'
import {Route, Routes} from 'react-router-dom'
import PreJunior from "./pages/PreJunior";
import Junior from "./pages/Junior";
import JuniorPlus from "./pages/JuniorPlus";
import Error404 from "./pages/Error404";

export const PATH = {
    PRE_JUNIOR: '/pre_junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior_plus',
}

function Pages() {
    return (
        <div>
            {/*Routes выбирает первый подходящий роут*/}
            <Routes>
                {/*роутинг будут писать студенты*/}
                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу /pre-junior*/}
                <Route path={'/'} element={PATH.PRE_JUNIOR}/>

                {/*роуты для /pre-junior, /junior, /junior-plus*/}
                <Route path={PATH.PRE_JUNIOR} element={<div><PreJunior/></div>}/>
                <Route path={PATH.JUNIOR} element={<div><Junior/></div>}/>
                <Route path={PATH.JUNIOR_PLUS} element={<div><JuniorPlus/></div>}/>


                {/*роут для несуществующей страницы должен отрисовать <Error404 />*/}
                <Route path={'/*'} element={Error404()}/>

            </Routes>
        </div>
    )
}

export default Pages

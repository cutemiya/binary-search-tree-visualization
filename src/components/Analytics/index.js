import React from "react";

import {SearchResult} from "../SearchResult";
import {StepTable} from "./StepTable";
import {StepGraphic} from "./StepGraphic";

import './index.css';

export const Analytics = ({ searchResult, orders }) => {
    if (orders.inOrder.length === 0 || orders.preOrder.length === 0 || orders.postOrder.length === 0) {
        return <div className={'wrapper'}>
            <h2>Чтобы получить информацию о дереве, нужно добавить хотя бы 1 ноду</h2>
        </div>
    }

    return <div className={'wrapper'}>
        <h2>Информация</h2>
        <SearchResult searchResult={searchResult}/>
        <StepTable orders={orders}/>
        <StepGraphic orders={orders}/>
    </div>
}
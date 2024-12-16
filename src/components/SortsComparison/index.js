import './index.css';
import {Button} from "../UI/Button";
import {SortComparisonTable} from "./SortComparisonTable";
import {SortComparisonGraphic} from "./SortComparisonGraphic";
import {useState} from "react";
import {bubbleSort, fillArrayWithRandomNumbers, treeSort} from "../../funcs/algs";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const LABELS = {
    SORT: 'Сранвить',
    INFO: 'Информация',
    MAX_ELEM: 'Потенциальный максимальный элемент',
    MIN_ELEM: 'Потенциальный минималный элемент',
    COUNT_ELEM: 'Число элементов',
}


export const SortComparison = () => {
    const [results, setResults] = useState([]);
    const [info, setInfo] = useState(null)

    const renderInfo = () => {
        if (info == null) {
            return <></>
        }

        return <div className={'info-wrapper'}>
            <h3>{LABELS.INFO}</h3>
            <div>{LABELS.MAX_ELEM}: {info.maxElem}</div>
            <div>{LABELS.MIN_ELEM}: {info.minElem}</div>
            <div>{LABELS.COUNT_ELEM}: {info.elemCount}</div>
        </div>
    }

    const sortComparisonHandle = () => {
        const array = fillArrayWithRandomNumbers(5000, -1000, 1000)
        const bubbleResult = bubbleSort(array);
        const treeResult = treeSort(array);

        setResults([
            {name: 'bubble', time: bubbleResult.time},
            {name: 'tree', time: treeResult.time}
        ]);

        setInfo({
            minElem: -1000,
            maxElem: 1000,
            elemCount: 5000
        })
    };

    return <div className={'sort-wrapper'}>
        <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
            <Button handleClick={() => sortComparisonHandle()}>
                {LABELS.SORT}
            </Button>
            {renderInfo()}
        </div>
        <SortComparisonTable results={results}/>
        <SortComparisonGraphic results={results}/>
    </div>

}
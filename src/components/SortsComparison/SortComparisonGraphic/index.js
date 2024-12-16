import './index.css';
import {Bar} from 'react-chartjs-2';

const LABELS = {
    EMPTY_RESULT: 'Нажмите кнопку, чтобы отрисовать график',
    RESULT_LABEL: 'Оценка временных характеристик работы алгоритма сортировки прямым обменом и сортировки с помощью бинарного дерева поиска в виде графика'
}

export const SortComparisonGraphic = ({results}) => {
    if (results == null || (Array.isArray(results) && results.length === 0)) {
        return <div className={'wrapper'}>
            <h2>
                {LABELS.EMPTY_RESULT}
            </h2>
        </div>
    }

    const data = {
        labels: ["Сравнение времени обхода (ms)"],
        datasets: [
            {
                label: 'Время сортировки прямым обходом',
                data: [results.find(t => t.name === 'bubble').time],
                backgroundColor: ['rgba(75, 192, 192, 0.6)'],
            },
            {
                label: 'Время сортировки c помощью бинарного дерева поиска',
                data: [results.find(t => t.name === 'tree').time],
                backgroundColor: ['rgba(153, 102, 255, 0.6)']
            }
        ],
    };

    return <div className={'wrapper'}>
        <h4>{LABELS.RESULT_LABEL}</h4>
        <Bar data={data}/>
    </div>
}
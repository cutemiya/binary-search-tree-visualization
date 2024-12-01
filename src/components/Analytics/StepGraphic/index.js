import {Line} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

import './index.css'

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

export const StepGraphic = ({orders}) => {
    if (orders.inOrder.length === 0 || orders.preOrder.length === 0 || orders.postOrder.length === 0) {
        return null;
    }

    const traversalOrderData = {
        labels: Array.from({length: Math.max(orders.inOrder.length, orders.preOrder.length, orders.postOrder.length)}, (_, i) => i + 1),
        datasets: [
            {
                label: 'Обход слева направо',
                data: orders.inOrder,
                fill: false,
                borderColor: 'rgba(75,192,192,1)',
            },
            {
                label: 'Обход сверху вниз',
                data: orders.preOrder,
                fill: false,
                borderColor: 'rgba(153,102,255,1)',
            },
            {
                label: 'Обход снизу вверх',
                data: orders.postOrder,
                fill: false,
                borderColor: 'rgba(255,159,64,1)',
            },
        ],
    };

    return <div className={'wrapper'}>
        <p>Графическое представление обхода</p>
        <Line data={traversalOrderData} />
    </div>
}
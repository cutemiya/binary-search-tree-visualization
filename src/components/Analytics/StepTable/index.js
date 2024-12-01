import './index.css'

export const StepTable = ({ orders }) => {
    if (orders.inOrder.length === 0 || orders.preOrder.length === 0 || orders.postOrder.length === 0) {
        return null
    }

    return <div className={'wrapper'}>
        <p>Табличное представление обхода</p>
        <table border="1">
            <thead>
            <tr>
                <th>Шаг</th>
                <th>Обход слева направо</th>
                <th>Обход сверху вниз</th>
                <th>Обход снизу вверх</th>
            </tr>
            </thead>
            <tbody>
            {orders.inOrder.map((val, index) => (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{orders.inOrder[index]}</td>
                    <td>{orders.preOrder[index]}</td>
                    <td>{orders.postOrder[index]}</td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
}
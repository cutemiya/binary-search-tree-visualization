import './index.css'

const LABELS = {
    EMPTY_RESULT: 'Нажмите кнопку, чтобы отрисовать табличку',
    RESULT_LABEL: 'Оценка временных характеристик работы алгоритма сортировки прямым обменом и сортировки с помощью бинарного дерева поиска в виде таблицы'
}

export const SortComparisonTable = ({results}) => {
    if (results == null || (Array.isArray(results) && results.length === 0)) {
        return <div className={'wrapper'}>
            <h2>
                {LABELS.EMPTY_RESULT}
            </h2>
        </div>
    }

    const getName = name => name === 'tree' ? 'Время сортировки прямым обходом' : 'Время сортировки c помощью бинарного дерева поиска'

    return <div className={'wrapper'}>
        <h4>{LABELS.RESULT_LABEL}</h4>
        <table border="1">
            <thead>
            <tr>
                <th>Алгоритм</th>
                <th>Время (ms)</th>
            </tr>
            </thead>
            <tbody>
            {results.map((result, index) => (
                <tr key={index}>
                    <td>{getName(result.name)}</td>
                    <td>{result.time.toFixed(2)}</td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
}
import './index.css';

export const SearchResult = ({ searchResult }) => {
    if (!searchResult) {
        return null;
    }

    if (!searchResult.has) {
        return <div className={ 'searchResult' }>
            Элемент не найден
        </div>
    }

    return <div className={ 'searchResult' }>
        <div>Результаты поиска:</div>
        <div>Найден элемент на уровне: { searchResult.level }</div>
    </div>
}
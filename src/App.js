import React, {useState} from 'react';

import {pipe, curry, nonFunction, withPostFunction} from "./funcs";

import {TreeVisualization} from "./components/TreeVisualization";
import {Actions} from "./components/Actions";
import {Analytics} from "./components/Analytics";

import BinarySearchTree from "./data/BinarySearchTree";

import './App.css'
import {SortComparison} from "./components/SortsComparison";

const App = () => {
    const [bst, setBst] = useState(new BinarySearchTree());
    const [tree, setTree] = useState(null);

    const [value, setValue] = useState('');
    const [modifyValues, setModifyValues] = useState(['', ''])
    const [searchResult, setSearchResult] = useState(null);
    const [orders, setOrders] = useState({inOrder: [], preOrder: [], postOrder: []});

    const updUpdatedValue = newValue => setModifyValues([newValue, modifyValues[1]])
    const updDeletedValue = newValue => setModifyValues([modifyValues[0], newValue])

    const updateOrders = (bs) => {
        const inOrder = [];
        const preOrder = [];
        const postOrder = [];

        const current = bs ? bs : bst

        bst.inOrder(current.root, val => inOrder.push(val));
        bst.preOrder(current.root, val => preOrder.push(val));
        bst.postOrder(current.root, val => postOrder.push(val));

        setOrders({inOrder, preOrder, postOrder});
    };

    const handleRecreate = () => pipe(setTree(bst.generateTreeData(bst.root)), setValue(''), updateOrders())()

    const withCheckCurry = curry((value, fn) => !!value ? () => fn() : nonFunction())
    const withCheckValue = withCheckCurry(value)
    const handle = fn => curry(withPostFunction(withCheckValue(fn), handleRecreate)())

    const handleNew = () => {
        const bst = new BinarySearchTree()

        setBst(bst)
        setTree(bst.generateTreeData(bst.root))
        setModifyValues(['', ''])
        setValue('')
        updateOrders(bst)
    }
    const handleInsert = () => handle(() => pipe(bst.insert(parseInt(value, 10)), setSearchResult(null)));
    const handleDelete = () => handle(() => pipe(bst.delete(parseInt(value, 10)), setSearchResult(null)));
    const handleUpdate = () =>
        modifyValues.filter(v => v).length === 2
        && bst.search(modifyValues[0]).has
            ? pipe(
                bst.delete(parseInt(modifyValues[0], 10)),
                bst.insert(parseInt(modifyValues[1], 10)),
                setTree(bst.generateTreeData(bst.root)),
                updateOrders(),
                setModifyValues(['', '']),
                setSearchResult(null)
            )
            : nonFunction();
    const handleSearch = () => handle(() => setSearchResult(bst.search(parseInt(value, 10))));

    return (
        <div className={'wrapper'}>
            <h1>Бинарное дерево поиска</h1>
            <div className={'main'}>
                <Actions
                    handleAdd={() => handleInsert()}
                    handleDelete={() => handleDelete()}
                    handleSearch={() => handleSearch()}
                    handleUpdate={() => handleUpdate()}
                    handleNew={() => handleNew()}

                    value={value}
                    setValue={setValue}

                    modifyValues={modifyValues}
                    setModifyValues={[updUpdatedValue, updDeletedValue]}

                    searchResult={searchResult}
                />
                <TreeVisualization tree={tree}/>
                <Analytics
                    searchResult={searchResult}
                    orders={orders}
                />
            </div>
            <SortComparison />
        </div>
    );
};


export default App;
import React from "react";

import {Button} from "../UI/Button";
import {Input} from "../UI/Input";

import './index.css'

const LABELS = {
    ADD: 'Добавить значение',
    DELETE: 'Удалить значение',
    UPDATE: 'Обновить значение',
    SEARCH: 'Найти значение',
    NEW: 'Создать новое дерево'
}

export const Actions = (
    {
        handleAdd,
        handleDelete,
        handleSearch,
        handleUpdate,
        handleNew,

        value,
        setValue,

        modifyValues,
        setModifyValues,
    }) => {

    return (
        <div className={'wrapper'}>
            <h1>Действия</h1>
            <div className={'action-section'}>
                <p>Добавить/удалить/найти значение</p>
                <Input value={value} setValue={(e) => setValue(e)}/>
                <Button handleClick={() => handleAdd()}>
                    {LABELS.ADD}
                </Button>
                <Button handleClick={() => handleDelete()}>
                    {LABELS.DELETE}
                </Button>
                <Button handleClick={() => handleSearch()}>
                    {LABELS.SEARCH}
                </Button>
                <Button handleClick={() => handleNew()}>
                    {LABELS.NEW}
                </Button>
            </div>
            <div className={'action-section'}>
                <p>Модифицировать значение</p>
                <Input placeholder={'Введите старое значение'} value={modifyValues[0]}
                       setValue={(e) => (setModifyValues[0])(e)}/>
                <Input placeholder={'Введите новое значение'} value={modifyValues[1]}
                       setValue={(e) => (setModifyValues[1])(e)}/>
                <Button handleClick={() => handleUpdate()}>
                    {LABELS.UPDATE}
                </Button>
            </div>
        </div>
    )
}
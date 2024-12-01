import React from "react";
import Tree from "react-d3-tree";
import './index.css'

const TREE_INITIAL = {
    POSITION: {
        x: 100,
        y: 200
    },
    ORIENTATION: 'vertical'
}

export const TreeVisualization = ({ tree }) => {
    return <div className={'tree-wrapper'}>
        <Tree svgClassName={'tree-wrapper'}
            zoom={0.7}
            translate={TREE_INITIAL.POSITION}
            data={tree || {}}
            orientation={TREE_INITIAL.ORIENTATION}
        />
    </div>
}
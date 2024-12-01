import Node from './NodeType'

export default class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    delete(value) {
        this.root = this.deleteNode(this.root, value);
    }

    search(value) {
        return this.searchNode(this.root, value, 1)
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (!node.left) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (!node.right) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    searchNode(node, value, level) {
        if (!node) return { has: false, level: level };
        if (value < node.value) {
            return this.searchNode(node.left, value, ++level);
        } else if (value > node.value) {
            return this.searchNode(node.right, value, ++level);
        } else {
            return { has: true, level }; // Узел найден
        }
    }

    deleteNode(node, value) {
        if (!node) return null;

        if (value < node.value) {
            node.left = this.deleteNode(node.left, value);
            return node;
        } else if (value > node.value) {
            node.right = this.deleteNode(node.right, value);
            return node;
        } else {
            // Узел с одним ребёнком или без детей
            if (!node.left) return node.right;
            if (!node.right) return node.left;

            // Узел с двумя детьми: найти минимальное в правом поддереве
            node.value = this.findMinNode(node.right).value;
            node.right = this.deleteNode(node.right, node.value);
            return node;
        }
    }

    inOrder(node, callback) {
        if (node) {
            this.inOrder(node.left, callback);
            callback(node.value);
            this.inOrder(node.right, callback);
        }
    }

    preOrder(node, callback) {
        if (node) {
            callback(node.value);
            this.preOrder(node.left, callback);
            this.preOrder(node.right, callback);
        }
    }

    postOrder(node, callback) {
        if (node) {
            this.postOrder(node.left, callback);
            this.postOrder(node.right, callback);
            callback(node.value);
        }
    }

    findMinNode(node) {
        while (node.left) {
            node = node.left;
        }
        return node;
    }

    generateTreeData(node) {
        if (!node) return null;

        return {
            name: node.value.toString(),
            children: [this.generateTreeData(node.left), this.generateTreeData(node.right)]
                .filter(child => child !== null),
        };
    }
}
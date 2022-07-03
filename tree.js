class Tree {
    constructor(value, left, right) {
        this.value = value
        this.left = left
        this.right = right
    }
}

const print = trees => {
    if (trees.length === 0) return
    console.log(trees.map(tree => tree?.value ?? 'n').join(' '))
    const newTrees = []
    trees.forEach(tree => {
        if (tree) newTrees.push(tree.left, tree.right)
    })
    print(newTrees)
}

const inputs = [5, 3, 5, 76, 2, 5, 3, 2, 2, 4, 6]

const getRoot = inputs => {
    return inputs.sort((a, b) => a - b)[Math.floor(inputs.length / 2)]
}

const makeTree = inputs => {
    if (inputs.length === 0) return null
    const root = getRoot(inputs)
    const left = []
    const right = []

    for (const i of inputs) {
        if (i < root) left.push(i)
        else if (i > root) right.push(i)
    }

    const tree = new Tree(root, makeTree(left), makeTree(right))
    return tree
}

print([makeTree(inputs)])

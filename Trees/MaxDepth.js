function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var maxDepth = function(root) {
    if (!root) return 0;

    const leftHeight = maxDepth(root.left);
    const rightHeight = maxDepth(root.right);
    
    return Math.max(leftHeight, rightHeight) + 1;
};

let node = new TreeNode(3);
node.left = new TreeNode(9)
node.right = new TreeNode(20)
node.right.left = new TreeNode(15)
node.right.right = new TreeNode(7)
maxDepth(node)
// node = TreeNode()
// node.right.left = TreeNode(15)
// node.right.right = TreeNode(7);
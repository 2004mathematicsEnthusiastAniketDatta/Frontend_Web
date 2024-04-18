function trap(height) {
    var trappedWater = 0;
    var size = height.length;
    // Arrays to store the maximum height to the left and right of each bar
    var maxLeft = Array(size).fill(0);
    var maxRight = Array(size).fill(0);
    // Initialize maxLeft with the original heights
    maxLeft[0] = height[0];
    // Compute the maximum height to the left of each bar
    for (var i = 1; i < size; i++) {
        maxLeft[i] = Math.max(maxLeft[i - 1], height[i]);
    }
    // Initialize maxRight with the original heights
    maxRight[size - 1] = height[size - 1];
    // Compute the maximum height to the right of each bar
    for (var i = size - 2; i >= 0; i--) {
        maxRight[i] = Math.max(maxRight[i + 1], height[i]);
    }
    // Calculate trapped water for each bar
    for (var i = 1; i < size - 1; i++) {
        trappedWater += Math.min(maxLeft[i], maxRight[i]) - height[i];
    }
    return trappedWater;
}
// Example usage
var elevationMap = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(trap(elevationMap)); // Output: 6

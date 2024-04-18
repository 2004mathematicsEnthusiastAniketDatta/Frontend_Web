function trap(height: number[]): number {
    let trappedWater = 0;
    const size = height.length;

    // Arrays to store the maximum height to the left and right of each bar
    const maxLeft: number[] = Array(size).fill(0);
    const maxRight: number[] = Array(size).fill(0);

    // Initialize maxLeft with the original heights
    maxLeft[0] = height[0];

    // Compute the maximum height to the left of each bar
    for (let i = 1; i < size; i++) {
        maxLeft[i] = Math.max(maxLeft[i - 1], height[i]);
    }

    // Initialize maxRight with the original heights
    maxRight[size - 1] = height[size - 1];

    // Compute the maximum height to the right of each bar
    for (let i = size - 2; i >= 0; i--) {
        maxRight[i] = Math.max(maxRight[i + 1], height[i]);
    }

    // Calculate trapped water for each bar
    for (let i = 1; i < size - 1; i++) {
        trappedWater += Math.min(maxLeft[i], maxRight[i]) - height[i];
    }

    return trappedWater;
}

// Example usage
const elevationMap = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(trap(elevationMap)); // Output: 6

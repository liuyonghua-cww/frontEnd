export const twoSum = (nums: number[], target: number): number[] => {
    const indexMapping: Map<number, number> = new Map<number, number>();
    for (let i = 0; i < nums.length; i ++) {
        if (indexMapping.has(target - nums[i])) {
            return [indexMapping.get(target - nums[i]) as number, i]
        }
        indexMapping.set(nums[i], i)
    }
    return [];
}
console.log(twoSum([2,7,11,15], 9))

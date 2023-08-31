class Solution {
    func twoSum(_ nums: [Int], _ target: Int) -> [Int] {
        var map = [Int: Int]()
        for (i, num) in nums.enumerated() {
            if let j = map[target - num] {
                return [j, i]
            }
            map[num] = i
        }
        return []
    }
}
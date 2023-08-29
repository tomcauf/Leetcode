class Solution {
    public int lengthOfLongestSubstring(String s) {
    int max = 0;
    int start = 0;
    int end = 0;
    int[] index = new int[128];
    Arrays.fill(index, -1);
    while (end < s.length()) {
        char c = s.charAt(end);
        if (index[c] >= start) {
            start = index[c] + 1;
        }
        index[c] = end;
        max = Math.max(max, end - start + 1);
        end++;
    }
    return max;
    }
}
class Solution {
    public boolean isPalindrome(int x) {
        if (x < 0 || x >= Integer.MAX_VALUE) {
            return false;
        }
        int y = 0;
        int z = x;
        while (z != 0) {
            y = y * 10 + z % 10;
            z /= 10;
        }
        return x == y;
    }
}
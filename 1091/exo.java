class Solution {
    public int shortestPathBinaryMatrix(int[][] grid) {
         int n = grid.length;
        if (grid[0][0] == 1 || grid[n - 1][n - 1] == 1)
            return -1;
        int[][] dirs = { { 0, 1 }, { 0, -1 }, { 1, 0 }, { -1, 0 }, { 1, 1 }, { -1, -1 }, { -1, 1 }, { 1, -1 } };
        Queue<int[]> q = new LinkedList<>();
        q.add(new int[] { 0, 0 });
        int path = 0;
        while (!q.isEmpty()) {
            int size = q.size();
            path++;
            while (size-- > 0) {
                int[] cur = q.poll();
                if (cur[0] == n - 1 && cur[1] == n - 1)
                    return path;
                for (int[] dir : dirs) {
                    int x = cur[0] + dir[0];
                    int y = cur[1] + dir[1];
                    if (x < 0 || x >= n || y < 0 || y >= n || grid[x][y] == 1)
                        continue;
                    grid[x][y] = 1;
                    q.add(new int[] { x, y });
                }
            }
        }
        return -1;
    }
}
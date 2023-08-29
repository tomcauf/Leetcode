class Solution {
    public int[] loudAndRich(int[][] richer, int[] quiet) {
        int n = quiet.length;
        List<Integer>[] graph = new ArrayList[n];
        for (int i = 0; i < n; i++) {
            graph[i] = new ArrayList<>();
        }
        for (int[] edge : richer) {
            graph[edge[1]].add(edge[0]);
        }

        int[] answer = new int[n];
        Arrays.fill(answer, -1);

        for (int i = 0; i < n; i++) {
            dfs(i, graph, quiet, answer);
        }

        return answer;
    }
    private int dfs(int node, List<Integer>[] graph, int[] quiet, int[] answer) {
        if (answer[node] == -1) {
            answer[node] = node;
            for (int neighbor : graph[node]) {
                int candidate = dfs(neighbor, graph, quiet, answer);
                if (quiet[candidate] < quiet[answer[node]]) {
                    answer[node] = candidate;
                }
            }
        }
        return answer[node];
    }
}
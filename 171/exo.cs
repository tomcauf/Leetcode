public class Solution {
    public int TitleToNumber(string columnTitle) {
        if(columnTitle == ""){
            return -1;
        }

        int sum = 0;
        for(int i = 0; i <= columnTitle.Length -1 ; i++){
            sum = (sum * 26) + ((int)columnTitle[i] - 64);
        }

        return sum;
    }
}
class Solution {
    public int romanToInt(String s) {
        int sum=0,val=0;
        for(int i=s.length()-1;i>=0;i--){
            switch(s.charAt(i)) {
                case 'I'-> val=1;
                case 'V'-> val=5;
                case 'X'-> val=10;
                case 'L'-> val=50;
                case 'C'-> val=100;
                case 'D'-> val=500;
                case 'M'-> val=1000;

            }
            if(4*val<sum) 
             sum=sum-val;
            else
            sum=sum+val;
            
        }
        return sum;
        
        
    }
}
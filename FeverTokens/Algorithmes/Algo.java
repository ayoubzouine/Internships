
public class Algo {
    public static void main(String[] args) {
        for(int num=1;num<101;num++){
            String output = "";
            if(num%3==0) output+="Hello ";
            if(num%5==0) output+="World ";
            if(num%7==0) output+="Yoo ";
            System.out.println(output.isEmpty()? num : output);
        }
    }
}

class AddFunction {
    void add() {
        int a = 10;
        int b = 20;
        System.out.println(a + b);
    }

    void add(int a, int b) {
        System.out.println(a + b);
    }

    void add(float a, float b) {
        System.out.println(a + b);
    }

    void add(int a, int b, int c) {
        System.out.println(a + b + c);
    }
}

class Function {
    public static void main(String[] args) {
        AddFunction obj = new AddFunction();
        obj.add();
        obj.add(100, 200);
        obj.add(2.5f, 5.9f);
        obj.add(1, 2, 5000);
    }
}

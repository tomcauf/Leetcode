class Foo {

    private CountDownLatch latch1;
    private CountDownLatch latch2;

    public Foo() {
        latch1 = new CountDownLatch(1);
        latch2 = new CountDownLatch(1);
    }

    public void first(Runnable printFirst) throws InterruptedException {
        // printFirst.run() outputs "first". Do not change or remove this line.
        printFirst.run();
        // Signal that the first() method has completed
        latch1.countDown();
    }

    public void second(Runnable printSecond) throws InterruptedException {
        // Wait for the first() method to complete
        latch1.await();
        // printSecond.run() outputs "second". Do not change or remove this line.
        printSecond.run();
        // Signal that the second() method has completed
        latch2.countDown();
    }

    public void third(Runnable printThird) throws InterruptedException {
        // Wait for the second() method to complete
        latch2.await();
        // printThird.run() outputs "third". Do not change or remove this line.
        printThird.run();
    }
}
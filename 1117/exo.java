class H2O {
    private Semaphore hSemaphore;
    private Semaphore oSemaphore;

    public H2O() {
        hSemaphore = new Semaphore(2);
        oSemaphore = new Semaphore(0);
    }

    public void hydrogen(Runnable releaseHydrogen) throws InterruptedException {
        hSemaphore.acquire(); 
        releaseHydrogen.run();
        oSemaphore.release();
    }

    public void oxygen(Runnable releaseOxygen) throws InterruptedException {
        oSemaphore.acquire(2);
        releaseOxygen.run();
        hSemaphore.release(2);
    }
}
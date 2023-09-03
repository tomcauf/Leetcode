class FizzBuzz:
    def __init__(self, n: int):
        self.n = n
        self.current = 1
        self.lock = threading.Lock()
        self.fizz_semaphore = threading.Semaphore(0)
        self.buzz_semaphore = threading.Semaphore(0)
        self.fizzbuzz_semaphore = threading.Semaphore(0)
        self.number_semaphore = threading.Semaphore(1)

    def fizz(self, printFizz: 'Callable[[], None]') -> None:
        for i in range(1, self.n + 1):
            if i % 3 == 0 and i % 5 != 0:
                self.fizz_semaphore.acquire()
                printFizz()
                self.release(i + 1)

    def buzz(self, printBuzz: 'Callable[[], None]') -> None:
        for i in range(1, self.n + 1):
            if i % 3 != 0 and i % 5 == 0:
                self.buzz_semaphore.acquire()
                printBuzz()
                self.release(i + 1)

    def fizzbuzz(self, printFizzBuzz: 'Callable[[], None]') -> None:
        for i in range(1, self.n + 1):
            if i % 3 == 0 and i % 5 == 0:
                self.fizzbuzz_semaphore.acquire()
                printFizzBuzz()
                self.release(i + 1)

    def number(self, printNumber: 'Callable[[int], None]') -> None:
        for i in range(1, self.n + 1):
            if i % 3 != 0 and i % 5 != 0:
                self.number_semaphore.acquire()
                printNumber(i)
                self.release(i + 1)

    def release(self, next_num):
        with self.lock:
            if next_num <= self.n:
                if next_num % 3 == 0 and next_num % 5 != 0:
                    self.fizz_semaphore.release()
                elif next_num % 3 != 0 and next_num % 5 == 0:
                    self.buzz_semaphore.release()
                elif next_num % 3 == 0 and next_num % 5 == 0:
                    self.fizzbuzz_semaphore.release()
                else:
                    self.number_semaphore.release()
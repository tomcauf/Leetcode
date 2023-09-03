import threading

class DiningPhilosophers:
    def __init__(self):
        self.forks = [threading.Lock() for _ in range(5)]

    def wantsToEat(self,
                   philosopher: int,
                   pickLeftFork: 'Callable[[], None]',
                   pickRightFork: 'Callable[[], None]',
                   eat: 'Callable[[], None]',
                   putLeftFork: 'Callable[[], None]',
                   putRightFork: 'Callable[[], None]') -> None:
        left_fork = philosopher
        right_fork = (philosopher + 1) % 5
        
        if philosopher % 2 == 0:
            self.forks[left_fork].acquire()
            self.forks[right_fork].acquire()
        else:
            self.forks[right_fork].acquire()
            self.forks[left_fork].acquire()
        
        pickLeftFork()
        pickRightFork()
        
        # The philosopher can now eat.
        eat()
        
        putLeftFork()
        putRightFork()
        
        # Release the forks when done.
        self.forks[left_fork].release()
        self.forks[right_fork].release()

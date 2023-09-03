import threading

class Foo(object):
    def __init__(self):
        self.event1 = threading.Event()
        self.event2 = threading.Event()

    def first(self, printFirst):
        """
        :type printFirst: method
        :rtype: void
        """
        # printFirst() outputs "first". Do not change or remove this line.
        printFirst()
        self.event1.set()

    def second(self, printSecond):
        """
        :type printSecond: method
        :rtype: void
        """
        self.event1.wait()
        # printSecond() outputs "second". Do not change or remove this line.
        printSecond()
        self.event2.set()

    def third(self, printThird):
        """
        :type printThird: method
        :rtype: void
        """
        self.event2.wait()
        # printThird() outputs "third". Do not change or remove this line.
        printThird()

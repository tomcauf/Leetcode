# Write your MySQL query statement below
SELECT E1.name
FROM Employee E1
WHERE E1.id IN (
    SELECT managerId
    FROM Employee
    GROUP BY managerId
    HAVING COUNT(*) >= 5
);

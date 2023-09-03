# Write your MySQL query statement below
SELECT C.name
FROM Customer C
LEFT JOIN Customer R
ON C.referee_id = R.id
WHERE R.id IS NULL OR R.id != 2;

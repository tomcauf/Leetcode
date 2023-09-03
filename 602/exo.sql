WITH FriendCounts AS (
    SELECT id, SUM(cnt) AS num
    FROM (
        SELECT requester_id AS id, COUNT(accepter_id) AS cnt
        FROM RequestAccepted
        GROUP BY requester_id
        UNION ALL
        SELECT accepter_id AS id, COUNT(requester_id) AS cnt
        FROM RequestAccepted
        GROUP BY accepter_id
    ) AS subquery
    GROUP BY id
)
SELECT id, num
FROM FriendCounts
WHERE num = (SELECT MAX(num) FROM FriendCounts);

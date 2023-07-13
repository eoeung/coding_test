/*
    # 제목: 입양 시각 구하기(2)
    # URL: https://school.programmers.co.kr/learn/courses/30/lessons/59413?language=mysql
*/

SELECT
            HOUR,
            SUM(COUNT)
FROM(
        WITH RECURSIVE HOUR_TABLE
        AS (
            SELECT 0 AS HOUR
            UNION ALL
            SELECT HOUR + 1
            FROM HOUR_TABLE
            WHERE HOUR < 23
        )

        SELECT
                    HOUR,
                    0 AS COUNT
        FROM
                    HOUR_TABLE

        UNION ALL

        SELECT
                    HOUR(DATETIME) AS HOUR,
                    COUNT(*)
        FROM
                    ANIMAL_OUTS
        GROUP BY
                    HOUR
    ) A
GROUP BY
            A.HOUR
ORDER BY
            A.HOUR ASC
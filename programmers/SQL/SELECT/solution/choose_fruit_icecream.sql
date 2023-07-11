/*
    # 제목: 과일로 만든 아이스크림 고르기
    # URL: https://school.programmers.co.kr/learn/courses/30/lessons/133025?language=mysql
*/

SELECT
            FH.FLAVOR
FROM
            FIRST_HALF AS FH
LEFT JOIN
            ICECREAM_INFO AS II
ON
            fH.FLAVOR = II.FLAVOR
WHERE
            FH.TOTAL_ORDER >= 3000
AND
            II.INGREDIENT_TYPE = 'fruit_based'
ORDER BY
            FH.TOTAL_ORDER DESC
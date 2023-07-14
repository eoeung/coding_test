/*
    # 제목: 년, 월, 성별 별 상품 구매 회원 수 구하기
    # URL: https://school.programmers.co.kr/learn/courses/30/lessons/131532?language=mysql
*/

SELECT
                YEAR(SALE.SALES_DATE) AS YEAR,
                MONTH(SALE.SALES_DATE) AS MONTH,
                INFO.GENDER,
                COUNT(DISTINCT INFO.USER_ID) AS USERS -- 회원 수가 중복이 되는 경우 존재(한 유저가 1월에만 5번 구매할 수도 있음)
FROM
                USER_INFO AS INFO
JOIN
                ONLINE_SALE AS SALE
ON
                INFO.USER_ID = SALE.USER_ID
WHERE
                INFO.GENDER IS NOT NULL
GROUP BY
                YEAR, MONTH, GENDER
ORDER BY
                YEAR ASC, MONTH ASC, GENDER ASC
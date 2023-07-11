/*
    # 제목: 진료과별 총 예약 횟수 출력하기
    # URL: https://school.programmers.co.kr/learn/courses/30/lessons/132202?language=mysql
*/

SELECT
            MCDP_CD AS '진료과코드',
            COUNT(*) AS '5월예약건수'
FROM
            APPOINTMENT
WHERE
            DATE_FORMAT(APNT_YMD, '%Y%m') = '202205'
-- AND
--             APNT_CNCL_YN = 'N' OR APNT_CNCL_YN IS NULL
-- 예약 취소 여부는 상관 없는 것 같음
GROUP BY
            MCDP_CD
ORDER BY
            `5월예약건수` ASC, MCDP_CD ASC
-- back-tick안에 alias값을 넣어주면 된다.
-- 제목: 흉부외과 또는 일반외과 의사 목록 출력하기
-- URL: https://school.programmers.co.kr/learn/courses/30/lessons/132203?language=mysql

-- 코드를 입력하세요
SELECT
        DR_NAME,
        DR_ID,
        MCDP_CD,
        date_format(HIRE_YMD, '%Y-%m-%d') as HIRE_YMD
FROM
        DOCTOR
WHERE
        MCDP_CD = 'CS' OR MCDP_CD = 'GS'
ORDER BY
        HIRE_YMD DESC, DR_NAME ASC;
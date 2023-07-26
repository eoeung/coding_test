/*
    # 제목: 취소되지 않은 진료 예약 조회하기
    # URL: https://school.programmers.co.kr/learn/courses/30/lessons/132204?language=mysql
*/

SELECT
            APMT.APNT_NO,
            PAT.PT_NAME,
            PAT.PT_NO,
            APMT.MCDP_CD,
            DOC.DR_NAME,
            APMT.APNT_YMD
FROM
            APPOINTMENT AS APMT, DOCTOR AS DOC, PATIENT AS PAT
WHERE
            APMT.MDDR_ID = DOC.DR_ID
AND
            APMT.PT_NO = PAT.PT_NO
AND
            DATE_FORMAT(APMT.APNT_YMD, '%Y%m%d') = '20220413'
AND
            APMT.MCDP_CD = 'CS'
AND
            APMT.APNT_CNCL_YN = 'N'
ORDER BY
            APMT.APNT_YMD ASC
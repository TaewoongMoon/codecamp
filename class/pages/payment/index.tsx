import { useState } from 'react'
import Head from 'next/head'
import { gql, useMutation } from '@apollo/client'

const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      status
    }
  }
`
const PaymentPage = () => {
  const [amount] = useState(200)
  const [createPointTransaction] = useMutation(
    CREATE_POINT_TRANSACTION_OF_LOADING
  )
  const onClickPayment = () => {
    // @ts-ignore
    const IMP = window.IMP
    IMP.init('imp89386405')
    // IMP.request_pay(param, callback) 호출
    IMP.request_pay(
      {
        // param
        pg: 'html5_inicis',
        pay_method: 'card',
        // merchant_uid: 'ORD20180131-0000011',
        name: '노르웨이 회전 의자',
        amount,
        buyer_email: 'taweoongmoon1@gmail.com',
        buyer_name: '철수222',
        buyer_tel: '010-1234-5789',
        buyer_addr: '서울특별시 강남구 신사동',
        buyer_postcode: '01181',
        m_redirect_url: '/payment'
      },
      (rsp: any) => {
        // callback
        if (rsp.success) {
          console.log(rsp)
          createPointTransaction({
            variables: {
              impUid: rsp.imp_uid
            },
            context: {
              headers: {
                authorization:
                  'Bearer eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM3MTc4N2FiZjNkODAwMjk3YmE0ZjkiLCJwZXJtaXNzaW9uIjowLCJpYXQiOjE2MjM4MjE4OTksImV4cCI6MTYyMzkwODI5OSwic3ViIjoiYWNjZXNzVG9rZW4ifQ.CvNj7neaA0OXi-bE0cpl1chgNlBe_J5KBj8_dY2s5GbkhYl_FwL4dxHrWPpuLSLFp8N0xaH1GEjzJcR114OK3Q'
              }
            }
          })
          alert('결제에 성공햇습니다.')
        } else {
          alert('결제에 실패했습니다.')
        }
      }
    )
  }
  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.1.5.js"
        ></script>
      </Head>
      <div>결제금액: {amount}</div>
      <button onClick={onClickPayment}>결제하기</button>
    </>
  )
}

export default PaymentPage

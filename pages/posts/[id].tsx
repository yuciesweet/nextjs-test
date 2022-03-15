import { NextPageContext } from 'next'
import { ParsedUrlQuery } from 'querystring'
import Layout from '../../components/layout'
import {getAllAPiData} from '../../lib/posts-dynamic'

interface Props{
    ad1: String
    ad2: String
    ad3: String
    zip: String
}

export async function getServerSideProps(context:NextPageContext){
    //変数宣言
    let address1: string = "不明な都道府県"
    let address2: string = "不明な市区町村"
    let address3: string = "不明な大字"
    let zipcode: string = "不明な郵便番号"

    // URLのうち、post/{id}の{id}を取得。※今回の場合は郵便番号
    const {id} = context.query

    // 郵便番号APIからデータを取得
    const allApiData = await getAllAPiData(String(id))

    //郵便番号APIの取得に成功した場合はそれぞれの値をAPIから取得した値に書き換え
    if(allApiData.results != null){
        address1 =　allApiData.results[0].address1
        address2 =　allApiData.results[0].address2
        address3 =　allApiData.results[0].address3
        zipcode =　allApiData.results[0].zipcode
    }
     return{
        props:{
            ad1: address1,
            ad2: address2,
            ad3: address3,
            zip: zipcode,
        }
    } 
}

export default function Post({ad1,ad2,ad3,zip}:Props){
    return (
    <>
        <Layout>
            都道府県名：{ad1}
            <br />
            市区町村名：{ad2}
            <br />
            大字　　　：{ad3}
            <br />
            郵便番号　：{zip}
        </Layout>
    </>
    )
}

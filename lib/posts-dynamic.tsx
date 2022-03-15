import fetch from 'node-fetch'

export async function getAllAPiData(id) {

    //郵便番号検索API 
    const Url = "https://zipcloud.ibsnet.co.jp/api/search?zipcode=" + id
    const res = await fetch(Url) //awaitにより、fetch(Url)が完了した段階で値をreturn
    const json = await res.json()
    return json
}
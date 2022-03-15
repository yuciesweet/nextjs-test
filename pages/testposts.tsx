import {getAllAPiData} from '../lib/posts'

interface Props{
    ad1: String
    ad2: String
    ad3: String
    pc: String
    zip: String
    st: String
}

export async function getServerSideProps(){
    const allAPiData = await getAllAPiData()
    return{
         props:{
            ad1: allAPiData.results[0].address1,
            ad2: allAPiData.results[0].address2,
            ad3: allAPiData.results[0].address3,
            pc: allAPiData.results[0].prefcode,
            zip: allAPiData.results[0].zipcode,
            st : allAPiData.status       
        }
    }
}

export default function yubinApiPost({ad1,ad2,ad3,pc,zip,st}:Props){
    return(
    <>
        <h1>Yubin Post!</h1>
        <ul>
            <li>
                {zip}
                <br />
                {ad1}
                <br />
                {ad2}
            </li>
        </ul>

    </>
    ) 
}
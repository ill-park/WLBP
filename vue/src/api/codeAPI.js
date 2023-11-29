import * as EgovNet from '@/api/egovFetch';

export async function getCodeList(parentCodeNm){

    const requestOptions = {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            codeNm : parentCodeNm
        })
    }

    const resp = await EgovNet.requestFetch(`/user-service/selectChildeCodeListByParentCodeNm.do`, requestOptions);
    return resp.result.itemList
}
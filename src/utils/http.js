import { JUKE_KEY } from "../data/key.js"
import qs from 'qs'
import axios from 'axios'

export default function ( options)  {
    const request = axios.create()
    return request({
        url:options.url,
        method:'post',
        header: {
            'Content-Type': 'application/x-www-from-urlencoded'
          },
        data:qs.stringify({
            key:JUKE_KEY,
            ...options.data
        })
    })
}

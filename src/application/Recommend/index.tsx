import * as React from 'react'
import { RecommendSlider, RecommendList } from '../../components'

function Recommend(props: any) {
    const banners: Model.Recommend.Banner[] = [1, 2, 3, 4].map(item => {
        return { image: "http://p1.music.126.net/ZYLJ2oZn74yUz5x8NBGkVA==/109951164331219056.jpg" }
    });

    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
        {
            id: item,
            picUrl: "https://p1.music.126.net/fhmefjUfMD-8qtj3JKeHbA==/18999560928537533.jpg",
            playCount: 17171122 * item,
            name: "朴树、许巍、李健、郑钧、老狼、赵雷"
        }
    ))


    return (
        <div>
            <RecommendSlider banners={banners}  />
            <RecommendList list={list} />
        </div>
    )
}

export default React.memo(Recommend)
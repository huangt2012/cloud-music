declare namespace Model {
    declare namespace Recommend {
        interface Banner {
            image: string
        } 
        interface Item {
            id: number
            picUrl: string
            playCount: number
            name: string
        }
    }
}
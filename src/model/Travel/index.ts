// travel 리스트에 아이템 타입
export interface Travel {
    id: number,
    city: string,
    country: string,
    continent: string,
    trip_average: number,
    housing_type: string,
    housing_price: number,
    expenses_price: number,
    monthly_price_average: number,
    image_url: string,
    rate: number
}
// travel 초기값
export const initialTravel: Travel = {
    id: 1,
    city: "Bangkok",
    country: "Thailand",
    continent: "Asia",
    trip_average: 17,
    housing_type: "Apartment",
    housing_price: 438,
    expenses_price: 329,
    monthly_price_average: 766,
    image_url: "https://d36tnp772eyphs.cloudfront.net/blogs/1/2011/05/thailand-1200x819.jpg",
    rate: 0
}

export default interface BasePagination<T>{
    page: number,
    totalPage: number,
    data: T[]
}
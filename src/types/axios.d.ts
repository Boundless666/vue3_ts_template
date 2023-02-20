/**
 * 响应体
 */
export interface CustomResponseType<T> {
	code: number
	message: string
	data: T
}

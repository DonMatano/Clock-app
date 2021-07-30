interface HttpInterface {
  getHttpRequest<T>(url: string): Promise<T> ;
}

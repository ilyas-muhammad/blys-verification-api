export interface Response {
  code: number,
  status: boolean,
  message: string,
}

export default (code: number, status: boolean, message: string): Response => {
  return {
    code,
    status,
    message,
  };
};

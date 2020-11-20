/* eslint-disable no-unused-vars */
import { log } from '../../helper/logger';
import commonResponse, { Response } from '../../helper/response';

const codeChecker = (code: number): Response => {
  const codeArr = code.toString().split('');
  if (codeArr.length !== 6) {
    return commonResponse(422, false, 'Should six digit code');
  }

  const theLastNumber = parseInt(codeArr[codeArr.length - 1], 10);
  if (theLastNumber === 7) {
    return commonResponse(422, false, 'The last number should not be 7');
  }

  return commonResponse(200, true, 'Verified');
};

export default async (req: any) => {
  try {
    const { body } = req;
    const { code } = body;

    if (!body || !code) {
      log('error', 'client-error', body);
      return commonResponse(400, false, 'Expect parameter Code in body request');
    }

    const checkedCode = codeChecker(code);

    return checkedCode;
  } catch (e) {
    log('error', 'error-when-verifying', e);

    return commonResponse(500, false, 'Internal Server Error');
  }
};

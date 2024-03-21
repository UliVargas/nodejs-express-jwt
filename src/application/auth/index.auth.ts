/* eslint-disable no-console */

export default () => {
  const sign = async <T>(payload: T): Promise<string> => {
    return "token";
  };
  const verify = async (token: string): Promise<boolean> => {
    return true;
  };

  return {
    sign,
    verify,
  };
};

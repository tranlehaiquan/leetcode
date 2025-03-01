const debounce = (fnc: (...args: any[]) => void, timeout: number) => {
  let timer: number | NodeJS.Timeout;

  const wrapperFunction = (...argus: any) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fnc.apply(null, argus);
    }, timeout);
  };

  return wrapperFunction;
};

export default debounce;

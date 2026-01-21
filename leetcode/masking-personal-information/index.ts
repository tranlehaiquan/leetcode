const isEmail = (s: string): boolean => {
  const regex = /[\da-zA-Z]+@[\da-zA-Z]+[.][a-zA-Z]+/g;

  return regex.test(s);
};

function maskPII(s: string): string {
  if (isEmail(s)) {
    const [name, domain] = s.toLocaleLowerCase().split('@');

    return `${name[0]}*****${name[name.length - 1]}@${domain}`;
  }

  let count = 0;
  let lastDigits = '';
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === ' ') continue;
    if (!isNaN(Number(s[i]))) {
      count++;

      if (lastDigits.length < 4) {
        lastDigits = `${s[i]}${lastDigits}`;
      }
    }
  }

  const countryDigits = count - 10;
  if (countryDigits === 0) return `***-***-${lastDigits}`;
  if (countryDigits === 1) return `+*-***-***-${lastDigits}`;
  if (countryDigits === 2) return `+**-***-***-${lastDigits}`;
  if (countryDigits === 3) return `+***-***-***-${lastDigits}`;
}

export default maskPII;

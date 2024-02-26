function validateEmail(email) {
  //   const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  //   return emailRegex.test(email);
  if (email.indexOf('@') === -1) {
    console.log(false);
    return false;
  }

  const [local, domain] = email.split('@');
  console.log(local, domain);

  if (local.length === 0 || local.length < 3) {
    return false;
  }

  const domainExtension = domain.split('.');

  if (
    domainExtension.length < 2 ||
    domainExtension[domainExtension.length - 1].length < 2
  ) {
    return false;
  }
  return true;
}

module.exports = validateEmail;

export const sensitive =  (content, exp) => {

  const expression = Array.isArray(exp) ? exp.join("|") : exp;
  return content.replace(
    new RegExp(expression, 'gi'),
    '***'
  );
}
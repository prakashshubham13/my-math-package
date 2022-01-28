export const findProfitLoss = (sp=0, cp=0) => {
  if (sp === cp)
    return {
      result: 0,
      resultValue: sp - cp,
      resultPercent: (sp - cp) / (100 / cp),
    };
  return sp > cp
    ? { result: 1, resultValue: sp - cp, resultPercent: (sp - cp) * (100 / cp) }
    : {
        result: -1,
        resultValue: cp - sp,
        resultPercent: (cp - sp) * (100 / cp),
      };
};

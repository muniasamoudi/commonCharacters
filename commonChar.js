const commonCharacters = (str1, str2) => {
    let result="";
    
    
  for (let i = 0; i < str1.length; i++) {
    const char = str1[i];
    if (char !== ' ' && str2.includes(char)&&!result.includes(char)) {
      result += char;
    }
  }

  return result;
}
  const string1="acexivou"
  const string2="aegihobu"
  console.log(commonCharacters(string1,string2))

  
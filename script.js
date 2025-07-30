function convert() {
  const binary = document.getElementById('binary').value.trim();
  const hex = document.getElementById('hex').value.trim();
  const octal = document.getElementById('octal').value.trim();
  const decimal = document.getElementById('decimal').value.trim();

  const resultBox = document.getElementById('result-box');
  let result = '';

  try {
    if (binary) {
      const selected = document.getElementById('binary-select').value;
      const value = parseInt(binary, 2);
      if (isNaN(value)) throw "Invalid Binary Number!";
      if (selected === 'toDecimal') result = value.toString(10);
      else if (selected === 'toHex') result = value.toString(16).toUpperCase();
      else result = value.toString(8);
    } else if (hex) {
      const selected = document.getElementById('hex-select').value;
      const value = parseInt(hex, 16);
      if (isNaN(value)) throw "Invalid Hex Number!";
      if (selected === 'toDecimal') result = value.toString(10);
      else if (selected === 'toBinary') result = value.toString(2);
      else result = value.toString(8);
    } else if (octal) {
      const selected = document.getElementById('octal-select').value;
      const value = parseInt(octal, 8);
      if (isNaN(value)) throw "Invalid Octal Number!";
      if (selected === 'toDecimal') result = value.toString(10);
      else if (selected === 'toBinary') result = value.toString(2);
      else result = value.toString(16).toUpperCase();
    } else if (decimal) {
      const selected = document.getElementById('decimal-select').value;
      const value = parseInt(decimal, 10);
      if (isNaN(value)) throw "Invalid Decimal Number!";
      if (selected === 'toBinary') result = value.toString(2);
      else if (selected === 'toHex') result = value.toString(16).toUpperCase();
      else result = value.toString(8);
    } else {
      result = 'Please enter a value!';
    }
  } catch (err) {
    result = err;
  }

  resultBox.innerText = result;
}

function clearFields() {
  document.getElementById('binary').value = '';
  document.getElementById('hex').value = '';
  document.getElementById('octal').value = '';
  document.getElementById('decimal').value = '';
  document.getElementById('result-box').innerText = 'Result will appear here';
}

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.calculator button');
    const result = document.getElementById('result');
  
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        if (button.textContent === 'C') {
          result.value = '';
        } else if (button.textContent === '←') {
          result.value = result.value.slice(0, -1);
        } else if (button.textContent === '=') {
          try {
            result.value = eval(result.value);
          } catch (error) {
            result.value = 'Error';
          }
        } else {
          result.value += button.textContent;
        }
      });
    });
  });
  
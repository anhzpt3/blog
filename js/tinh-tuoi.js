let countError = 0;
let countSuccess = 0;

function resetCount() {
  countSuccess = 0;
  countError = 0;
}

function setMessage(text) {
  document.getElementById('message').innerHTML = text;
}

function ageCalculate() {
  let age = document.getElementById('input-age').value;

  if (document.getElementById('input-age').value.length === 0 || isNaN(age)) {
    if (document.getElementById('input-age').value.length === 0) {
      setMessage('Chưa nhập gì hết.');
    } else {
      countError++;

      switch (countError) {
        case 1:
          setMessage(age + ' là tuổi clgt???');
          break;
        case 2:
          setMessage('Đây là lần thứ 2 rồi nhưng bạn vẫn nhập sai.');
          break;
        case 3:
          setMessage(
            'Thật ra bạn chỉ bấm cái nút này cho vui thôi phải không?'
          );
          break;
        case 4:
        case 5:
        case 6:
          for (let i = 0; i <= countError; i++) {
            setMessage('đừng có nhấn nữa '.repeat(i));
          }
          break;
        case 7:
          setMessage('nhấn thêm lần nữa xem?');
          break;
        case 8:
          setMessage('chắc chưa?');
          document.getElementById('btn-submit').innerHTML = 'Chắc';
          break;

        default:
          // các case còn lại (>7)
          window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
      }
    }
  } else {
    countSuccess++;

    if (countSuccess === 1) {
      setMessage('Bạn đã ' + age + ' tuổi rồi.');
      countError = 0;
    } else {
      setMessage(
        `Bạn đã nhấn cái nút này ${countSuccess} lần, tuổi của bạn vẫn là ${age}`
      );
    }
  }
}

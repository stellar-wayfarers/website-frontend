/**
 * Возвращает существительное в правильном падеже в зависимости от номера.
 *
 * @param {int} num  номер
 * @param {array} text массив падежей, например: ['рубль','рубля','рублей']
 *
 * @return string
 */
export default function chislitelnie(num, text) {
  const cases = [ 2, 0, 1, 1, 1, 2 ];
  const index = num % 100 > 4 && num % 100 < 20 ? 2 : cases[Math.min(num % 10, 5)];

  return `${num} ${text[index]}`;
}

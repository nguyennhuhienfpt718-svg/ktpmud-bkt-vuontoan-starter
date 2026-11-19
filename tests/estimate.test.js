const test = require('node:test');
const assert = require('node:assert/strict');

// Thuật toán ước lượng tất định (B-03)
function getEstimateRange(a, b, op) {
  if (op === 'mul') {
    const aEst = a < 100 ? Math.floor((a + 5) / 10) * 10 : Math.floor((a + 50) / 100) * 100;
    const center = aEst * b;
    const delta = a < 100 ? 10 : 50;
    return { center, min: center - delta, max: center + delta };
  }
  if (op === 'div') {
    const step = 10 * b;
    const aComp = a < 5 * b ? step : Math.floor(a / step + 0.5) * step;
    const center = aComp / b;
    return { center, min: center - 2, max: center + 2 };
  }
  throw new Error('Invalid operator');
}

function checkEstimate(a, b, op, userEstimate) {
  if (typeof userEstimate !== 'number' || Number.isNaN(userEstimate) || userEstimate < 0) {
    return { error: 400, valid: false };
  }
  const { min, max } = getEstimateRange(a, b, op);
  return { valid: userEstimate >= min && userEstimate <= max };
}

function calcScore(estimateOk, exactOk) {
  if (estimateOk && exactOk) return 10;
  if (!estimateOk && exactOk) return 7;
  if (estimateOk && !exactOk) return 3;
  return 0;
}

test('B-02 & B-03: 12 Fixtures chuẩn tái lập được', () => {
  const fixtures = [
    [48, 3, 'mul', 140, 160], [42, 3, 'mul', 110, 130], [48, 4, 'mul', 190, 210],
    [65, 2, 'mul', 130, 150], [192, 3, 'mul', 550, 650], [318, 2, 'mul', 550, 650],
    [87, 4, 'div', 18, 22], [84, 4, 'div', 18, 22], [62, 3, 'div', 18, 22],
    [95, 5, 'div', 18, 22], [158, 4, 'div', 38, 42], [245, 6, 'div', 38, 42],
  ];
  for (const [a, b, op, expMin, expMax] of fixtures) {
    const r = getEstimateRange(a, b, op);
    assert.equal(r.min, expMin);
    assert.equal(r.max, expMax);
  }
});

test('B-08: Kiểm thử giá trị biên (Boundary) phép nhân & chia', () => {
  assert.equal(checkEstimate(48, 3, 'mul', 140).valid, true);
  assert.equal(checkEstimate(48, 3, 'mul', 160).valid, true);
  assert.equal(checkEstimate(48, 3, 'mul', 139).valid, false);
  assert.equal(checkEstimate(48, 3, 'mul', 161).valid, false);
  assert.equal(checkEstimate(87, 4, 'div', 18).valid, true);
  assert.equal(checkEstimate(87, 4, 'div', 22).valid, true);
  assert.equal(checkEstimate(87, 4, 'div', 17).valid, false);
  assert.equal(checkEstimate(87, 4, 'div', 23).valid, false);
});

test('B-08: Kiểm thử đầu vào không hợp lệ (Invalid input)', () => {
  assert.equal(checkEstimate(48, 3, 'mul', NaN).error, 400);
  assert.equal(checkEstimate(48, 3, 'mul', -5).error, 400);
});

test('B-08: Kiểm thử chấm điểm 2 bước (Scoring)', () => {
  assert.equal(calcScore(true, true), 10);
  assert.equal(calcScore(false, true), 7);
  assert.equal(calcScore(true, false), 3);
  assert.equal(calcScore(false, false), 0);
});

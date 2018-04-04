export function calc(diagonal, ratioX, ratioY) {
  /**
   * X²+(9X/16)²=13.97²
   * 256X²+81X²=49961.19
   * 337X²=49961.19
   * X≈12.18
   * 在宽为：9x12.18÷16≈6.85
   */
  const right = (diagonal ** 2) * (ratioY ** 2)
  const x2 = right / (ratioX ** 2 + ratioY ** 2)
  const x = Math.floor(Math.sqrt(x2) * 100) / 100
  const y = Math.floor(x / ratioX * ratioY * 100) / 100
  return {
    x, y
  }
}

export default {
  'iPhone 8 Plus': {
    'desc': '适用于iPhone 6+, 6s+, 7+, 8+',
    'in': {
      x: 414,
      y: 736
    }
  },
  'iPhone 8': {
    'desc': '适用于iPhone 6, 7, 8',
    'in': {
      x: 375,
      y: 667,
    }
  },
  'iPhone X': {
    'desc': '适用于iPhone X',
    'in': {
      x: 375,
      y: 812,
    }
  },
  '荣耀畅玩7X': {
    'desc': '适用于大部分5.9英寸安卓全面屏手机',
    'in': {
      x: 360,
      y: 720,
    }
  },
  '360': {
    'desc': '适用于大部分5.9英寸安卓全面屏手机',
    'in': {
      x: 360,
      y: 720,
    }
  }

}

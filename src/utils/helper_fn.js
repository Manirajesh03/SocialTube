export const numToRoman = (views) => {
  for (let i = 0; i < views.length; i++) {
    let res = views[0];
    let roman;
    switch (views.length) {
      case 4: {
        roman = "K";
        return res + roman;
      }
      case 5: {
        roman = "K";
        return res + views[1] + roman;
      }
      case 6: {
        roman = "K";
        return res + views[1] + views[2] + roman;
      }
      case 7: {
        roman = "M";
        return res + roman;
      }
      case 8: {
        roman = "M";
        return res + views[1] + roman;
      }
      case 9: {
        roman = "M";
        return res + views[1] + views[2] + roman;
      }
      case 10: {
        roman = "B";
        return res + roman;
      }
      default:
        return views;
    }
  }
};

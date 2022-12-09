function luckyDraw(player) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));

    process.nextTick(() => {
      if (win) {
        resolve(`${player} won a prize in the draw!`);
      } else {
        reject(new Error(`${player} lost the draw.`));
      }
    });
  });
}

// console.log(luckyDraw("pippo"));

luckyDraw("Joe").then(
    function (risultatoResolve) {
        console.log(risultatoResolve)
    },
    function (risultatoReject) {
        console.log(risultatoReject)
    }
)

luckyDraw("Caroline").then(
    function (risultatoResolve) {
        console.log(risultatoResolve)
    },
    function (risultatoReject) {
        console.log(risultatoReject)
    }
)

luckyDraw("Sabrina").then(
    function (risultatoResolve) {
        console.log(risultatoResolve)
    },
    function (risultatoReject) {
        console.log(risultatoReject)
    }
)
function orderPizza(flavor) {
  return new Promise((resolve, reject) => {
    console.log(`👨‍🍳 Preparing your ${flavor} pizza...`);
    setTimeout(() => {
      if (flavor === 'pineapple') {
        return reject('❌ Sorry, we do not serve pineapple pizza.');
      }

      resolve(`✅ Your ${flavor} pizza is ready!`);
    }, 2000); // 2-second fake delay
  });
}

function deliverPizza(order) {
  return new Promise((resolve) => {
    console.log('🛵 Delivering your pizza...');
    setTimeout(() => {
      resolve(`📦 Delivered: ${order}`);
    }, 1500);
  });
}

// Use the promises
orderPizza('pepperoni')
  .then(pizza => {
    console.log(pizza);
    return deliverPizza(pizza);
  })
  .then(delivery => {
    console.log(delivery);
  })
  .catch(err => {
    console.error(err);
  });

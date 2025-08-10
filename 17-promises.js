function doAsyncTask() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;

      if (success) {
        resolve("Task completed!");
      } else {
        reject("Task failed!");
      }
    }, 2000);
  });
}

doAsyncTask()
  .then(result => {
    console.log("✅", result);
  })
  .catch(error => {
    console.error("❌", error);
  });

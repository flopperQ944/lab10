const images = [
    "🍒", "🍋", "🍊", "🍉", "⭐", "🔔"
  ];
  
  let attempts = 0;
  let name = "";
  
  window.onload = () => {
    name = prompt("Введіть своє ім'я:");
    if (!name || name.trim() === "") {
      alert("Ім'я обов'язкове!");
      location.reload();
    } else {
      document.getElementById("game").classList.remove("hidden");
      document.getElementById("greeting").textContent = `Привіт, ${name}!`;
    }
  };
  
  const spinButton = document.getElementById("spin-button");
  const message = document.getElementById("message");
  const columns = document.querySelectorAll(".column");
  
  function spinSlots() {
    const results = [];
  
    // Очищаємо колонки перед новим спіном
    columns.forEach(column => (column.innerHTML = ""));
  
    // Генеруємо випадкові картинки для кожної колонки
    columns.forEach(column => {
      const columnImages = [];
      while (columnImages.length < images.length) {
        const randomImage = images[Math.floor(Math.random() * images.length)];
        if (!columnImages.includes(randomImage)) {
          columnImages.push(randomImage);
        }
      }
      columnImages.slice(0, 3).forEach(image => {
        const img = document.createElement("div");
        img.textContent = image;
        column.appendChild(img);
      });
      results.push(columnImages[0]); // Додаємо верхнє значення для перевірки
    });
  
    attempts++;
    checkResult(results);
  }
  
  function checkResult(results) {
    if (results.every(img => img === results[0])) {
      message.textContent = "Вітаємо! Ви виграли!";
      spinButton.disabled = true;
    } else if (attempts >= 3) {
      message.textContent = "Ви програли. Спробуйте ще раз!";
      spinButton.disabled = true;
    } else {
      message.textContent = `Спроба ${attempts} з 3. Крутите далі!`;
    }
  }
  
  spinButton.addEventListener("click", spinSlots);
  

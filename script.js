document.addEventListener('DOMContentLoaded', () => {
    const calcForm = document.getElementById('calcForm');
    const totalPriceEl = document.getElementById('totalPrice');

    if (!calcForm || !totalPriceEl) return;

    function calculateTotal() {
        // Отримуємо коефіцієнт кузова
        const selectedCar = calcForm.querySelector('input[name="carClass"]:checked');
        const multiplier = selectedCar ? parseFloat(selectedCar.value) : 1;

        // Підраховуємо суму вибраних послуг
        const checkedServices = calcForm.querySelectorAll('input[name="service"]:checked');
        let baseSum = 0;

        checkedServices.forEach(checkbox => {
            baseSum += parseFloat(checkbox.value);
        });

        // Підсумкова ціна
        const total = Math.round(baseSum * multiplier);

        // Форматуємо число з пробілами (наприклад: 24 000 грн)
        totalPriceEl.textContent = total.toLocaleString('uk-UA') + ' грн';
    }

    // Слухаємо зміни у формі
    calcForm.addEventListener('change', calculateTotal);
});
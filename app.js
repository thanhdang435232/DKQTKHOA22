// Thay YOUR_API_URL bằng địa chỉ API của bạn (Taiscale, Flask server,...)
const API_URL = "https://api.taiscale.com/v1/device/YOUR_DEVICE_ID/data?limit=20";
const SETPOINT_URL = "https://your-api-server.com/api/setpoint"; // nếu có backend

let chart;

document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById("tempChart").getContext("2d");
    chart = new Chart(ctx, {
        type: "line",
        data: {
            labels: [],
            datasets: [
                {
                    label: "Nhiệt độ (°C)",
                    data: [],
                    borderColor: "#e74c3c", 
                    fill: false,
                    tension: 0.1,
                },
            ],
        },
        options: {
            animation: false,
            scales: {
                x: { ticks: { maxTicksLimit: 10 } },
                y: { beginAtZero: true },
            },
        },
    });

    fetchData();
    setInterval(fetchData, 10000);
});

async function fetchData() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();

        const times = data.map((d) =>
            new Date(d.timestamp).toLocaleTimeString()
        );
        const temps = data.map((d) => d.temperature);

        if (temps.length > 0) {
            document.getElementById("cur-temp").textContent = temps[
                temps.length - 1
            ].toFixed(2);
        }

        chart.data.labels = times;
        chart.data.datasets[0].data = temps;
        chart.update();
    } catch (err) {
        console.error("Không thể tải dữ liệu:", err);
    }
}

async function setSetPoint() {
    const low = parseFloat(document.getElementById("low").value);
    const high = parseFloat(document.getElementById("high").value);

    // Nếu bạn có backend nhận ngưỡng, hãy uncomment dòng dưới
    /*
    await fetch(SETPOINT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ low, high }),
    });
    */

    alert(`Đã đặt ngưỡng: Từ ${low} đến ${high} °C`);
}

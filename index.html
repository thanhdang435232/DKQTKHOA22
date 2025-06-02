<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>Biểu đồ nhiệt độ</title>
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      padding: 30px;
    }
    canvas {
      max-width: 800px;
      margin: auto;
    }
  </style>
</head>
<body>

  <h2>Biểu đồ Nhiệt độ theo thời gian</h2>
  <canvas id="tempChart"></canvas>

  <script>
    const ctx = document.getElementById('tempChart').getContext('2d');

    const tempChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [], // Thời gian
        datasets: [{
          label: 'Nhiệt độ (°C)',
          data: [],
          borderColor: 'red',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderWidth: 2,
          fill: true,
          tension: 0.3,
          pointRadius: 4
        }]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            title: { display: true, text: 'Thời gian' }
          },
          y: {
            title: { display: true, text: 'Nhiệt độ (°C)' },
            beginAtZero: true,
            suggestedMax: 40
          }
        }
      }
    });

    // Hàm sinh dữ liệu ngẫu nhiên và cập nhật biểu đồ
    function updateChart() {
      const now = new Date();
      const timeLabel = now.toLocaleTimeString();

      const newTemp = (25 + Math.random() * 5).toFixed(2); // giả lập

      tempChart.data.labels.push(timeLabel);
      tempChart.data.datasets[0].data.push(newTemp);

      if (tempChart.data.labels.length > 20) {
        tempChart.data.labels.shift();
        tempChart.data.datasets[0].data.shift();
      }

      tempChart.update();
    }

    // Cập nhật mỗi 2 giây
    setInterval(updateChart, 2000);
  </script>

</body>
</html>

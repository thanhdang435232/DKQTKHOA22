import sys
import random
import datetime
from PyQt5 import QtWidgets
from main_ui import Ui_MainWindow  # file chuyển từ .ui
from matplotlib.backends.backend_qt5agg import FigureCanvasQTAgg as FigureCanvas
from matplotlib.figure import Figure


class MyApp(QtWidgets.QMainWindow):
    def __init__(self):
        super(MyApp, self).__init__()
        self.ui = Ui_MainWindow()
        self.ui.setupUi(self)

        # Tạo biểu đồ
        self.canvas = FigureCanvas(Figure())
        self.ui.plotWidget.layout().addWidget(self.canvas)
        self.ax = self.canvas.figure.add_subplot(111)

        # Dữ liệu ban đầu
        self.times = []
        self.temps = []

        # Timer cập nhật mỗi 2 giây
        self.timer = QtCore.QTimer()
        self.timer.timeout.connect(self.update_plot)
        self.timer.start(2000)

    def update_plot(self):
        # Giả lập đọc nhiệt độ
        temp = round(25 + random.random()*5, 2)
        time_now = datetime.datetime.now().strftime("%H:%M:%S")

        self.times.append(time_now)
        self.temps.append(temp)

        if len(self.times) > 20:
            self.times.pop(0)
            self.temps.pop(0)

        # Cập nhật biểu đồ
        self.ax.clear()
        self.ax.plot(self.times, self.temps, color='red', marker='o')
        self.ax.set_title("Nhiệt độ theo thời gian")
        self.ax.set_xlabel("Thời gian")
        self.ax.set_ylabel("Nhiệt độ (°C)")
        self.ax.tick_params(axis='x', rotation=45)
        self.canvas.draw()


if __name__ == "__main__":
    from PyQt5 import QtCore
    app = QtWidgets.QApplication(sys.argv)
    win = MyApp()
    win.show()
    sys.exit(app.exec_())
